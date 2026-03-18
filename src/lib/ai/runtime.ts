import type { Message, AgentConfig, AgentResult } from './types'

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY
const DEEPSEEK_BASE_URL = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com/v1'
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat'

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434'
const OLLAMA_MODEL = process.env.OLLAMA_DEFAULT_MODEL || 'qwen2.5'

export class ModelRuntime {
  private provider: 'deepseek' | 'ollama'
  private config: AgentConfig

  constructor(config?: Partial<AgentConfig>) {
    this.provider = (process.env.MODEL_PROVIDER as 'deepseek' | 'ollama') || 'deepseek'
    this.config = {
      model: this.provider === 'deepseek' ? DEEPSEEK_MODEL : OLLAMA_MODEL,
      temperature: 0.7,
      maxTokens: 4000,
      ...config,
    }
  }

  async chat(messages: Message[]): Promise<AgentResult> {
    try {
      if (this.provider === 'deepseek') {
        return await this.chatDeepSeek(messages)
      } else {
        return await this.chatOllama(messages)
      }
    } catch (error) {
      console.error('Model runtime error:', error)

      // Fallback to alternative provider
      if (this.provider === 'deepseek' && process.env.ARTISTEPKS_FALLBACK_TO_LOCAL === 'true') {
        console.log('Falling back to Ollama...')
        return await this.chatOllama(messages)
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  private async chatDeepSeek(messages: Message[]): Promise<AgentResult> {
    if (!DEEPSEEK_API_KEY) {
      throw new Error('DEEPSEEK_API_KEY is not configured')
    }

    const response = await fetch(`${DEEPSEEK_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: this.config.model,
        messages,
        temperature: this.config.temperature,
        max_tokens: this.config.maxTokens,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`DeepSeek API error: ${error}`)
    }

    const data = await response.json()

    return {
      success: true,
      data: data.choices[0].message.content,
      usage: {
        promptTokens: data.usage?.prompt_tokens || 0,
        completionTokens: data.usage?.completion_tokens || 0,
        totalTokens: data.usage?.total_tokens || 0,
      },
    }
  }

  private async chatOllama(messages: Message[]): Promise<AgentResult> {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.config.model,
        messages,
        stream: false,
        options: {
          temperature: this.config.temperature,
          num_predict: this.config.maxTokens,
        },
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Ollama API error: ${error}`)
    }

    const data = await response.json()

    return {
      success: true,
      data: data.message.content,
    }
  }

  async generateJSON<T = any>(prompt: string, systemPrompt?: string): Promise<T | null> {
    const messages: Message[] = []

    if (systemPrompt) {
      messages.push({
        role: 'system',
        content: systemPrompt + '\n\nYou must respond with valid JSON only. No markdown, no code blocks, just raw JSON.',
      })
    }

    messages.push({
      role: 'user',
      content: prompt,
    })

    const result = await this.chat(messages)

    if (!result.success || !result.data) {
      console.error('Failed to generate JSON:', result.error)
      return null
    }

    try {
      // Extract JSON from markdown code blocks if present
      let jsonString = result.data.trim()

      // Remove markdown code blocks
      if (jsonString.startsWith('```')) {
        const match = jsonString.match(/```(?:json)?\n([\s\S]*?)\n```/)
        if (match) {
          jsonString = match[1]
        }
      }

      return JSON.parse(jsonString) as T
    } catch (error) {
      console.error('Failed to parse JSON:', error)
      console.error('Raw response:', result.data)
      return null
    }
  }
}

export const createModelRuntime = (config?: Partial<AgentConfig>) => {
  return new ModelRuntime(config)
}
