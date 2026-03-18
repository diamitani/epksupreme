import { generateBrandProfile } from './brand-agent'
import { generateBiography } from './content-agent'
import { generateWebsiteSections } from './website-agent'
import { generateOneSheet } from './onesheet-agent'
import type { SubmissionData, EPKData } from '../types'

export interface EPKBuildResult {
  success: boolean
  data?: EPKData
  error?: string
  log: string[]
}

export async function buildEPK(submission: SubmissionData): Promise<EPKBuildResult> {
  const log: string[] = []

  try {
    log.push('Starting EPK build process...')
    log.push(`Building EPK for: ${submission.artist_name}`)

    // Step 1: Brand Profile
    log.push('Step 1/4: Generating brand profile...')
    const brandProfile = await generateBrandProfile(submission)
    if (!brandProfile) {
      throw new Error('Failed to generate brand profile')
    }
    log.push('✓ Brand profile complete')

    // Step 2: Biography
    log.push('Step 2/4: Writing artist biography...')
    const biography = await generateBiography(submission, brandProfile)
    if (!biography) {
      throw new Error('Failed to generate biography')
    }
    log.push('✓ Biography complete')

    // Step 3: Website Sections
    log.push('Step 3/4: Creating website sections...')
    const websiteSections = await generateWebsiteSections(submission, brandProfile, biography)
    if (!websiteSections) {
      throw new Error('Failed to generate website sections')
    }
    log.push('✓ Website sections complete')

    // Step 4: One Sheet
    log.push('Step 4/4: Composing press kit one-sheet...')
    const oneSheet = await generateOneSheet(submission, brandProfile, biography)
    if (!oneSheet) {
      throw new Error('Failed to generate one-sheet')
    }
    log.push('✓ One-sheet complete')

    log.push('EPK build complete!')

    return {
      success: true,
      data: {
        brand_profile: brandProfile,
        biography: biography,
        website_sections: websiteSections,
        one_sheet: oneSheet,
        engagement_score: {
          score: 75,
          momentum: 'Building',
          readiness: 'Good',
        },
        design_tokens: {
          colors: {
            primary: '#000000',
            secondary: '#ffffff',
            accent: '#ff0000',
          },
          fonts: {
            heading: 'Inter',
            body: 'Inter',
          },
          spacing: {
            base: '1rem',
          },
        },
      },
      log,
    }
  } catch (error) {
    log.push(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      log,
    }
  }
}
