import { ModelRuntime } from '../runtime'
import type { SubmissionData } from '../types'

const ONESHEET_SYSTEM_PROMPT = `You are a music publicist creating professional one-sheet press kits.

A one-sheet is a single-page press kit that booking agents and press use for quick reference.

It must include:
- Compelling headline that captures attention
- Concise bio (100-150 words)
- Key facts (genre, location, achievements)
- Press quotes or notable accomplishments
- Contact information

Style: Professional, scannable, fact-focused.

You must respond with valid JSON only.`

interface OneSheet {
  headline: string
  tagline: string
  bio: string
  key_facts: Array<{
    label: string
    value: string
  }>
  highlights: string[]
  press_quotes: string[]
}

export async function generateOneSheet(
  submission: SubmissionData,
  brandProfile?: any,
  biography?: any
): Promise<OneSheet | null> {
  const runtime = new ModelRuntime()

  const prompt = `Create a professional one-sheet press kit for:

Artist Name: ${submission.artist_name}
Genre: ${submission.genre || 'Not specified'}
Location: ${submission.location || 'Not specified'}
${brandProfile ? `Brand: ${JSON.stringify(brandProfile)}` : ''}
${biography ? `Bio: ${biography.medium}` : ''}

Create a one-sheet with:

1. Headline - Attention-grabbing title (5-8 words)
2. Tagline - Supporting statement (10-15 words)
3. Bio - Concise bio (100-150 words)
4. Key Facts - Array of { label, value } pairs (genre, based in, notable shows, releases, etc.)
5. Highlights - Array of 3-5 notable achievements
6. Press Quotes - Array of 2-3 compelling quotes/achievements (can be simulated if none provided)

Make it scannable and professional. Focus on facts over hype.

Return as JSON with keys: headline, tagline, bio, key_facts (array of {label, value}), highlights (array), press_quotes (array)`

  return await runtime.generateJSON<OneSheet>(prompt, ONESHEET_SYSTEM_PROMPT)
}
