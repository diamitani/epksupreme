import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Music, Eye, ArrowRight } from 'lucide-react'
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Music className="h-6 w-6" />
            <span className="text-xl font-bold">EPK Supreme</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EPK Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore professional press kits created by artists using EPK Supreme
          </p>
        </div>

        {error || !epks || epks.length === 0 ? (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="text-center py-12">
              <Music className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No EPKs yet</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to create a professional press kit
              </p>
              <Link href="/signup">
                <Button>Create Your EPK</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {epks.map((epk) => (
              <Card key={epk.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">
                      {(epk.public_profile as any)?.artist_name || 'Artist'}
                    </CardTitle>
                    <Badge variant="secondary">
                      {(epk.public_profile as any)?.genre || 'Music'}
                    </Badge>
                  </div>
                  <CardDescription>
                    {(epk.biography as any)?.one_liner ||
                      (epk.biography as any)?.short ||
                      'Professional electronic press kit'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span>{epk.views_count} views</span>
                    </div>
                    <Link href={`/epk/${epk.slug}`}>
                      <Button size="sm">
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
