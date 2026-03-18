export interface Message {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface AgentConfig {
  model: string
  temperature?: number
  maxTokens?: number
  systemPrompt?: string
}

export interface AgentResult {
  success: boolean
  data?: any
  error?: string
  usage?: {
    promptTokens: number
    completionTokens: number
    totalTokens: number
  }
}

export interface SubmissionData {
  artist_name: string
  genre?: string
  location?: string
  contact_email?: string
  bio_inputs?: Record<string, any>
  social_links?: Record<string, string>
  music_links?: Record<string, string>
  press_links?: string[]
  preferences?: Record<string, any>
}

export interface EPKData {
  brand_profile?: {
    story: string
    tone: string
    visual_direction: string
    key_themes: string[]
  }
  biography?: {
    short: string
    medium: string
    long: string
    press_angle: string
  }
  website_sections?: {
    hero: any
    about: any
    music: any
    press: any
    contact: any
  }
  one_sheet?: {
    headline: string
    bio: string
    key_facts: string[]
    press_quotes: string[]
  }
  engagement_score?: {
    score: number
    momentum: string
    readiness: string
  }
  design_tokens?: {
    colors: Record<string, string>
    fonts: Record<string, string>
    spacing: Record<string, string>
  }
}
