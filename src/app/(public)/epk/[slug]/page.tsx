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

  // Type assertion for EPK data
  const epkData = epk as any

  // Select template
  const template = epkData.template || 'cinematic'

  if (template === 'editorial') {
    return <EditorialTemplate epk={epkData} />
  }

  // Default to cinematic
  return <CinematicTemplate epk={epkData} />
}
