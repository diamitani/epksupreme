import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import { CheckCircle, Sparkles, Zap, Crown } from 'lucide-react'

export default function PricingPage() {
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
          <Zap className="h-4 w-4" />
          Simple, Transparent Pricing
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Plans That Grow
          <br />
          With Your Career
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Start free, upgrade when you're ready. All plans include AI-powered EPK generation.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free */}
          <Card className="border-purple-100">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-purple-900">Free</CardTitle>
              </div>
              <div className="text-4xl font-bold text-purple-900">$0<span className="text-lg font-normal text-gray-600">/mo</span></div>
              <CardDescription>Perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>1 EPK</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>AI bio generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>2 templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Artistpreneur branding</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full border-purple-300" variant="outline">
                  Start Free
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Pro - Popular */}
          <Card className="border-2 border-purple-500 relative shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold rounded-full">
              MOST POPULAR
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-purple-900">Pro</CardTitle>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                $19<span className="text-lg font-normal text-gray-600">/mo</span>
              </div>
              <CardDescription>For serious artists</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span className="font-medium">Unlimited EPKs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>All templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Custom domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span className="font-medium">Remove branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>PDF export</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Start Pro Trial
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Enterprise */}
          <Card className="border-purple-100">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-purple-900">Enterprise</CardTitle>
              </div>
              <div className="text-4xl font-bold text-purple-900">$199<span className="text-lg font-normal text-gray-600">/mo</span></div>
              <CardDescription>For labels & management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span className="font-medium">50+ artist accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>White-label platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>SLA & 24/7 support</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full border-purple-300" variant="outline">
                  Contact Sales
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I switch plans anytime?', a: 'Yes! Upgrade or downgrade anytime. No long-term contracts.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards and PayPal.' },
              { q: 'Is there a free trial?', a: 'Yes! Start with our Free plan, no credit card required.' },
            ].map((faq, i) => (
              <Card key={i} className="border-purple-100 p-6">
                <h3 className="font-bold text-purple-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Start Creating Today</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Join thousands of artists building their careers with Artistpreneur
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl">
              Get Started Free
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ArtistpreneurLogo className="h-8 mx-auto mb-4" />
          <p className="text-gray-600">&copy; 2026 Artistpreneur. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
