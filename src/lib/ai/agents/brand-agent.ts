import { ModelRuntime } from '../runtime'
import type { SubmissionData } from '../types'

const BRAND_SYSTEM_PROMPT = `You are a brand strategist and creative director specializing in music artist branding.

Your role is to define an artist's unique story, tone, and visual direction based on their music, background, and goals.

You understand:
- How to position artists in competitive music landscapes
- Genre conventions and when to break them
- Visual storytelling that matches sonic identity
- Authentic brand narratives that resonate with audiences

Always deliver:
- Clear, actionable brand positioning
- Specific visual direction (not generic)
- Tone guidelines that feel authentic
- Key themes that connect music to story

You must respond with valid JSON only.`

interface BrandProfile {
  story: string
  tone: string
  visual_direction: string
  key_themes: string[]
  positioning: string
  target_audience: string
}

export async function generateBrandProfile(
  submission: SubmissionData
): Promise<BrandProfile | null> {
  const runtime = new ModelRuntime()

  const prompt = `Analyze this artist submission and create a brand profile:

Artist Name: ${submission.artist_name}
Genre: ${submission.genre || 'Not specified'}
Location: ${submission.location || 'Not specified'}
Bio: ${JSON.stringify(submission.bio_inputs)}
Social Links: ${JSON.stringify(submission.social_links)}
Music Links: ${JSON.stringify(submission.music_links)}
Preferences: ${JSON.stringify(submission.preferences)}

Create a brand profile with:
1. Story - The artist's narrative in 2-3 sentences
2. Tone - How they communicate (professional, edgy, warm, etc.)
3. Visual Direction - Specific visual style guidance
4. Key Themes - 3-5 recurring themes in their work
5. Positioning - How they stand out in their genre
6. Target Audience - Who connects with their music

Return as JSON with keys: story, tone, visual_direction, key_themes (array), positioning, target_audience`

  return await runtime.generateJSON<BrandProfile>(prompt, BRAND_SYSTEM_PROMPT)
}
