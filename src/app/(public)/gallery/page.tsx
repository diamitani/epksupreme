import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import { Music, Eye, ArrowRight, Sparkles } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'

export default async function GalleryPage() {
  const supabase = await createClient()

  // Fetch public EPKs
  const { data: epks, error } = await supabase
    .from('epks')
    .select('*')
    .eq('is_public', true)
    .eq('status', 'complete')
    .order('created_at', { ascending: false })
    .limit(12)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ArtistpreneurLogo className="h-8" />
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-purple-700 hover:text-purple-900">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            AI-Generated Press Kits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            EPK Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore professional press kits created by artists using EPK Supreme
          </p>
        </div>

        {error || !epks || epks.length === 0 ? (
          <Card className="max-w-2xl mx-auto border-purple-100">
            <CardContent className="text-center py-12">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-900">No EPKs yet</h3>
              <p className="text-gray-600 mb-6">
                Be the first to create a professional press kit with AI
              </p>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Create Your EPK
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {epks.map((epk: any) => (
              <Card key={epk.id} className="hover:shadow-xl transition-all border-purple-100 hover:border-purple-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-purple-900">
                      {epk.public_profile?.artist_name || 'Artist'}
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      {epk.public_profile?.genre || 'Music'}
                    </Badge>
                  </div>
                  <CardDescription>
                    {epk.biography?.one_liner ||
                      epk.biography?.short ||
                      'Professional electronic press kit'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Eye className="h-4 w-4" />
                      <span>{epk.views_count} views</span>
                    </div>
                    <Link href={`/epk/${epk.slug}`}>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        View EPK
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
