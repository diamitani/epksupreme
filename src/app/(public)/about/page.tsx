import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import { Music, Heart, Target, Users, Sparkles } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ArtistpreneurLogo className="h-8" />
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/features">
              <Button variant="ghost" className="text-purple-700 hover:text-purple-900">Features</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="ghost" className="text-purple-700 hover:text-purple-900">Pricing</Button>
            </Link>
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

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6 text-sm font-medium">
          <Heart className="h-4 w-4" />
          Built for Artists, by Artists
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Artistpreneur
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We believe every artist deserves professional tools to showcase their talent.
          EPK Supreme makes it easy to create stunning press kits that get you noticed.
        </p>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4 text-sm font-medium">
              <Target className="h-4 w-4" />
              Our Mission
            </div>
            <h2 className="text-4xl font-bold mb-6 text-purple-900">
              Empowering Artists Worldwide
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              We're on a mission to democratize professional music marketing. Every independent artist
              should have access to the same quality press kits that major label artists use.
            </p>
            <p className="text-lg text-gray-600">
              With AI-powered tools and beautiful templates, we're making it possible for anyone to
              create stunning EPKs in minutes—not weeks.
            </p>
          </div>
          <Card className="p-8 bg-gradient-to-br from-purple-500 to-blue-500 text-white border-0">
            <div className="space-y-6">
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-purple-100">Artists Empowered</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-purple-100">EPKs Created</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-purple-100">Success Rate</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Principles that guide everything we build
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
              <Music className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-900">Artist-First</h3>
            <p className="text-gray-600">
              Every decision we make starts with "what's best for the artist?" Your success is our success.
            </p>
          </Card>

          <Card className="p-8 border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-900">Innovation</h3>
            <p className="text-gray-600">
              We use cutting-edge AI to give you tools that were previously only available to major labels.
            </p>
          </Card>

          <Card className="p-8 border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-purple-900">Community</h3>
            <p className="text-gray-600">
              We're building more than software—we're creating a community of artists who support each other.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Join the Movement</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Be part of a community of artists creating their own success stories
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl">
              Start Creating Today
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <ArtistpreneurLogo className="h-8 mb-4" />
              <p className="text-gray-600 text-sm">
                Professional press kits powered by AI
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-purple-900">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="text-gray-600 hover:text-purple-600">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-purple-600">Pricing</Link></li>
                <li><Link href="/gallery" className="text-gray-600 hover:text-purple-600">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-purple-900">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-600 hover:text-purple-600">About</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-purple-900">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray-600 hover:text-purple-600">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-purple-600">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-purple-100">
            <p className="text-gray-600">&copy; 2026 Artistpreneur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
