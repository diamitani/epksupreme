import { ModelRuntime } from '../runtime'
import type { SubmissionData } from '../types'

const CONTENT_SYSTEM_PROMPT = `You are a music publicist and professional bio writer with 15+ years of experience.

Your role is to craft compelling artist bios that get artists booked and covered by press.

You write in a style that is:
- Engaging and story-driven (not dry resume)
- Professional but authentic
- Focused on what makes the artist unique
- Free of clichés and hyperbole
- Structured for different contexts (short/medium/long)

You understand:
- What booking agents look for
- What music journalists need
- How to pitch without overselling
- Industry language and conventions

You must respond with valid JSON only.`

interface Biography {
  short: string // 50-75 words, elevator pitch
  medium: string // 150-200 words, standard bio
  long: string // 300-400 words, full story
  press_angle: string // Key hook for press pitches
  one_liner: string // Single sentence description
}

export async function generateBiography(
  submission: SubmissionData,
  brandProfile?: any
): Promise<Biography | null> {
  const runtime = new ModelRuntime()

  const prompt = `Write professional artist bio variations for:

Artist Name: ${submission.artist_name}
Genre: ${submission.genre || 'Not specified'}
Location: ${submission.location || 'Not specified'}
Bio Inputs: ${JSON.stringify(submission.bio_inputs)}
${brandProfile ? `Brand Profile: ${JSON.stringify(brandProfile)}` : ''}

Create bio variations:
1. Short (50-75 words) - Quick intro for festival lineups, social bios
2. Medium (150-200 words) - Standard EPK bio, booking emails
3. Long (300-400 words) - Full story for press kits, artist websites
4. Press Angle - The most compelling hook for press pitches
5. One Liner - Single sentence that captures their essence

Guidelines:
- Start with most interesting fact, not generic intro
- Include specific achievements, not vague claims
- Use active voice and vivid language
- Avoid clichés like "unique sound" or "passionate about music"
- Make it scannable with clear narrative flow

Return as JSON with keys: short, medium, long, press_angle, one_liner`

  return await runtime.generateJSON<Biography>(prompt, CONTENT_SYSTEM_PROMPT)
}
