import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Mail, Music } from 'lucide-react'

interface EPKData {
  id: string
  slug: string
  brand_profile: any
  biography: any
  website_sections: any
  one_sheet: any
  public_profile: any
}

interface EditorialTemplateProps {
  epk: EPKData
}

export function EditorialTemplate({ epk }: EditorialTemplateProps) {
  const { biography, website_sections, one_sheet, public_profile } = epk

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              {public_profile?.artist_name || 'Artist Name'}
            </h1>
            <div className="flex gap-3 mt-2">
              {public_profile?.genre && (
                <Badge variant="secondary">{public_profile.genre}</Badge>
              )}
              {public_profile?.location && (
                <Badge variant="outline">
                  <MapPin className="h-3 w-3 mr-1" />
                  {public_profile.location}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button>
              <Music className="mr-2 h-4 w-4" />
              Listen
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Bio */}
        <article className="prose prose-lg max-w-none mb-16">
          {biography?.long || biography?.medium || biography?.short ? (
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {biography.long || biography.medium || biography.short}
            </p>
          ) : (
            <p className="text-muted-foreground">No biography available.</p>
          )}
        </article>

        {/* Press Kit */}
        {one_sheet && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Press Information</h2>

            {one_sheet.key_facts && one_sheet.key_facts.length > 0 && (
              <dl className="grid md:grid-cols-2 gap-6 mb-8">
                {one_sheet.key_facts.map((fact: any, index: number) => (
                  <div key={index}>
                    <dt className="text-sm text-muted-foreground mb-1">
                      {fact.label}
                    </dt>
                    <dd className="text-lg font-semibold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {one_sheet.highlights && one_sheet.highlights.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
                <ul className="list-disc list-inside space-y-2">
                  {one_sheet.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="text-muted-foreground">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Contact */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Contact & Bookings</h2>
          <p className="text-muted-foreground mb-6">
            {website_sections?.contact?.description ||
              'For booking inquiries, press, and collaborations'}
          </p>
          <div className="flex gap-3">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="outline">Download Press Kit</Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Created with{' '}
            <a href="/" className="hover:underline" target="_blank">
              EPK Supreme
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
