import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Music, MapPin, Mail, Instagram, Globe } from 'lucide-react'

interface EPKData {
  id: string
  slug: string
  template: string
  brand_profile: any
  biography: any
  website_sections: any
  one_sheet: any
  public_profile: any
  views_count: number
  created_at: string
}

interface CinematicTemplateProps {
  epk: EPKData
}

export function CinematicTemplate({ epk }: CinematicTemplateProps) {
  const { biography, website_sections, one_sheet, public_profile } = epk

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"
          style={{
            backgroundImage: 'url(/placeholder-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {public_profile?.artist_name || 'Artist Name'}
          </h1>
          {biography?.one_liner && (
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {biography.one_liner}
            </p>
          )}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {public_profile?.genre && (
              <Badge variant="secondary" className="text-sm px-4 py-2">
                {public_profile.genre}
              </Badge>
            )}
            {public_profile?.location && (
              <Badge variant="outline" className="text-sm px-4 py-2">
                <MapPin className="h-3 w-3 mr-1" />
                {public_profile.location}
              </Badge>
            )}
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="default">
              <Music className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-5 w-5" />
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {website_sections?.about?.heading || 'About'}
          </h2>
          {biography?.medium && (
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {biography.medium}
              </p>
            </div>
          )}

          {website_sections?.about?.highlights && (
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {website_sections.about.highlights.map(
                (highlight: string, index: number) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 p-6 backdrop-blur-sm"
                  >
                    <p className="text-gray-200">{highlight}</p>
                  </Card>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* Press Kit Section */}
      {one_sheet && (
        <section className="py-24 px-4 bg-white/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Press Kit</h2>

            {one_sheet.headline && (
              <h3 className="text-2xl font-bold mb-4 text-gray-200">
                {one_sheet.headline}
              </h3>
            )}

            {one_sheet.tagline && (
              <p className="text-xl text-gray-400 mb-8">{one_sheet.tagline}</p>
            )}

            {one_sheet.bio && (
              <p className="text-gray-300 mb-12 leading-relaxed">{one_sheet.bio}</p>
            )}

            {one_sheet.key_facts && one_sheet.key_facts.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {one_sheet.key_facts.map((fact: any, index: number) => (
                  <div key={index} className="border-l-2 border-white/20 pl-4">
                    <div className="text-sm text-gray-400 mb-1">{fact.label}</div>
                    <div className="text-lg font-semibold">{fact.value}</div>
                  </div>
                ))}
              </div>
            )}

            {one_sheet.highlights && one_sheet.highlights.length > 0 && (
              <div className="space-y-3 mb-12">
                <h4 className="text-xl font-bold mb-4">Highlights</h4>
                {one_sheet.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2" />
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            )}

            <Button variant="outline" size="lg">
              Download Press Kit PDF
            </Button>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-400 mb-12">
            {website_sections?.contact?.description ||
              'Available for bookings, press inquiries, and collaborations'}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
            <Button size="lg" variant="outline">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
            <Button size="lg" variant="outline">
              <Globe className="mr-2 h-5 w-5" />
              Website
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          <p>
            Powered by{' '}
            <a
              href="/"
              className="text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              EPK Supreme
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
