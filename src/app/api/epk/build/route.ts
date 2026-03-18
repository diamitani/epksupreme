import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { buildEPK } from '@/lib/ai/agents/epk-builder-agent'
import { generateSlug } from '@/lib/utils'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Check authentication
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()

    // Create submission
    const { data: submission, error: submissionError } = await supabase
      .from('submissions')
      .insert({
        user_id: user.id,
        artist_name: body.artist_name,
        genre: body.genre,
        location: body.location,
        contact_email: body.contact_email || user.email,
        bio_inputs: body.bio_inputs || {},
        social_links: body.social_links || {},
        music_links: body.music_links || {},
        press_links: body.press_links || [],
        preferences: body.preferences || {},
        status: 'building',
      })
      .select()
      .single()

    if (submissionError) {
      console.error('Submission error:', submissionError)
      return NextResponse.json(
        { error: 'Failed to create submission' },
        { status: 500 }
      )
    }

    // Generate EPK using AI agents
    const epkResult = await buildEPK({
      artist_name: body.artist_name,
      genre: body.genre,
      location: body.location,
      contact_email: body.contact_email,
      bio_inputs: body.bio_inputs,
      social_links: body.social_links,
      music_links: body.music_links,
      press_links: body.press_links,
      preferences: body.preferences,
    })

    if (!epkResult.success) {
      // Update submission with error
      await supabase
        .from('submissions')
        .update({
          status: 'error',
          error_message: epkResult.error,
        })
        .eq('id', submission.id)

      return NextResponse.json(
        { error: epkResult.error, log: epkResult.log },
        { status: 500 }
      )
    }

    // Create EPK record
    const slug = `${generateSlug(body.artist_name)}-${nanoid(6)}`

    const { data: epk, error: epkError } = await supabase
      .from('epks')
      .insert({
        submission_id: submission.id,
        user_id: user.id,
        slug,
        template: body.template || 'cinematic',
        brand_profile: epkResult.data?.brand_profile || {},
        biography: epkResult.data?.biography || {},
        website_sections: epkResult.data?.website_sections || {},
        one_sheet: epkResult.data?.one_sheet || {},
        public_profile: {
          artist_name: body.artist_name,
          genre: body.genre,
          location: body.location,
        },
        engagement_score: epkResult.data?.engagement_score || {},
        design_tokens: epkResult.data?.design_tokens || {},
        agent_log: epkResult.log,
        status: 'complete',
      })
      .select()
      .single()

    if (epkError) {
      console.error('EPK creation error:', epkError)
      return NextResponse.json(
        { error: 'Failed to create EPK' },
        { status: 500 }
      )
    }

    // Update submission to complete
    await supabase
      .from('submissions')
      .update({ status: 'complete' })
      .eq('id', submission.id)

    return NextResponse.json({
      success: true,
      epk,
      log: epkResult.log,
    })
  } catch (error) {
    console.error('Build EPK error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
