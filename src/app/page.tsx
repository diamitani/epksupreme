import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import { Music, Zap, Globe, BarChart3, CheckCircle, Sparkles } from 'lucide-react'

export default function HomePage() {
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
          <Sparkles className="h-4 w-4" />
          Powered by Multi-Agent AI
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Professional Press Kits
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Built by AI in Minutes
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          EPK Supreme uses multi-agent AI to create stunning, professional electronic press kits
          that get you booked and covered by press.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/signup">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 shadow-lg shadow-purple-500/30">
              Create Your EPK
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/gallery">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-purple-300 hover:bg-purple-50">
              View Examples
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Everything You Need to Stand Out
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional tools that help you get discovered, booked, and covered
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-purple-100 hover:border-purple-300 transition-colors hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">AI-Powered</CardTitle>
              <CardDescription>
                Multi-agent AI writes your bio, creates your brand, and designs your press kit
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:border-purple-300 transition-colors hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">Live & Shareable</CardTitle>
              <CardDescription>
                Get a hosted website and shareable link. Update anytime, no reprints needed
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:border-purple-300 transition-colors hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">Track Everything</CardTitle>
              <CardDescription>
                See who views your EPK, what they click, and when to follow up
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:border-purple-300 transition-colors hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">PDF Export</CardTitle>
              <CardDescription>
                Download a professional one-sheet press kit for email and print
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <div className="text-3xl font-bold">$19<span className="text-sm font-normal">/mo</span></div>
              <CardDescription>Perfect for emerging artists</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>1 active EPK</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>AI content generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>5 templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Basic analytics</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <div className="text-3xl font-bold">$49<span className="text-sm font-normal">/mo</span></div>
              <CardDescription>For professional artists</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Unlimited EPKs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>50+ premium templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Custom domain</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Remove branding</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <div className="text-3xl font-bold">$199<span className="text-sm font-normal">/mo</span></div>
              <CardDescription>For labels & management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>50+ artist accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>White-label platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Get Booked?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join hundreds of artists creating professional press kits with AI
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl">
              Create Your EPK Now
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
