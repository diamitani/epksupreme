import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { CinematicTemplate } from '@/components/templates/cinematic-template'
import { EditorialTemplate } from '@/components/templates/editorial-template'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function EPKPage({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()

  // Fetch EPK data
  const { data: epk, error } = await supabase
    .from('epks')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !epk) {
    notFound()
  }

  // Increment view count
  await supabase
    .from('epks')
    .update({ views_count: epk.views_count + 1 })
    .eq('id', epk.id)

  // Select template
  const template = epk.template || 'cinematic'

  if (template === 'editorial') {
    return <EditorialTemplate epk={epk} />
  }

  // Default to cinematic
  return <CinematicTemplate epk={epk} />
}
