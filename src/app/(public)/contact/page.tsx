import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import { Mail, MessageSquare, Send, Sparkles } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ArtistpreneurLogo className="h-8" />
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/about">
              <Button variant="ghost" className="text-purple-700 hover:text-purple-900">About</Button>
            </Link>
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
          <MessageSquare className="h-4 w-4" />
          Get in Touch
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          We'd Love to Hear
          <br />
          From You
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Questions, feedback, or partnership inquiries? Our team is here to help.
        </p>
      </section>

      {/* Contact Options */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Sales */}
          <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-3">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">Sales & Partnerships</CardTitle>
              <CardDescription>
                Interested in Enterprise plans or partnerships? Let's talk.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:sales@artistpreneur.com" className="text-purple-600 hover:text-purple-800 font-medium">
                sales@artistpreneur.com
              </a>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-3">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">Support</CardTitle>
              <CardDescription>
                Need help with your account or have technical questions?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:support@artistpreneur.com" className="text-purple-600 hover:text-purple-800 font-medium">
                support@artistpreneur.com
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto border-purple-100 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-900">Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join thousands of artists building their careers with Artistpreneur
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl">
              Create Your EPK
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
