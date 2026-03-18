import { ModelRuntime } from '../runtime'
import type { SubmissionData } from '../types'

const WEBSITE_SYSTEM_PROMPT = `You are a web designer and UX writer specializing in artist websites.

Your role is to create website sections that are conversion-oriented and professionally structured.

You understand:
- How to write compelling hero sections that hook visitors
- Best practices for artist about sections
- How to present music and press effectively
- Call-to-action best practices

You must respond with valid JSON only.`

interface WebsiteSections {
  hero: {
    headline: string
    subheadline: string
    cta_primary: string
    cta_secondary: string
  }
  about: {
    heading: string
    content: string
    highlights: string[]
  }
  music: {
    heading: string
    description: string
  }
  press: {
    heading: string
    description: string
  }
  contact: {
    heading: string
    description: string
  }
}

export async function generateWebsiteSections(
  submission: SubmissionData,
  brandProfile?: any,
  biography?: any
): Promise<WebsiteSections | null> {
  const runtime = new ModelRuntime()

  const prompt = `Create website sections for this artist:

Artist Name: ${submission.artist_name}
Genre: ${submission.genre || 'Not specified'}
${brandProfile ? `Brand Profile: ${JSON.stringify(brandProfile)}` : ''}
${biography ? `Bio: ${biography.short}` : ''}

Create these sections:

1. Hero Section
   - headline: Compelling hook (5-8 words)
   - subheadline: Supporting statement (10-15 words)
   - cta_primary: Primary call-to-action text
   - cta_secondary: Secondary call-to-action text

2. About Section
   - heading: Section title
   - content: 2-3 paragraphs about the artist
   - highlights: Array of 3-4 key achievements

3. Music Section
   - heading: Section title
   - description: Brief intro to their music

4. Press Section
   - heading: Section title
   - description: Intro for press coverage

5. Contact Section
   - heading: Section title
   - description: Booking/contact intro

Return as JSON with structure: { hero: {...}, about: {...}, music: {...}, press: {...}, contact: {...} }`

  return await runtime.generateJSON<WebsiteSections>(prompt, WEBSITE_SYSTEM_PROMPT)
}
