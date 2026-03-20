import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import {
  Music, Zap, Globe, BarChart3, FileText, Image, Video, Share2,
  Download, Edit, Users, Clock, CheckCircle, Sparkles, Brain, Palette
} from 'lucide-react'

export default function FeaturesPage() {
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
          Powerful Features
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Everything You Need
          <br />
          To Get Booked
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Professional tools that help you stand out, get discovered, and land more opportunities
        </p>
      </section>

      {/* AI Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-purple-900">AI-Powered Creation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multi-agent AI system that writes, designs, and optimizes your EPK
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-3">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">AI Bio Writer</CardTitle>
              <CardDescription>
                Professional music publicist-style bios in seconds. Multiple formats for every need.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-3">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">Brand Designer</CardTitle>
              <CardDescription>
                AI analyzes your style and creates cohesive brand direction and visual identity.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-3">
                <Edit className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">Content Generator</CardTitle>
              <CardDescription>
                Website copy, press releases, and social posts optimized for engagement.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-purple-900">Professional Tools</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Globe, title: 'Live Website', desc: 'Hosted EPK page with custom URL' },
            { icon: Download, title: 'PDF Export', desc: 'Professional one-sheet for email' },
            { icon: BarChart3, title: 'Analytics', desc: 'Track views and engagement' },
            { icon: Image, title: 'Media Gallery', desc: 'Photos, videos, and audio' },
            { icon: Share2, title: 'Easy Sharing', desc: 'One link for everything' },
            { icon: FileText, title: 'Press Kit', desc: 'Complete press materials' },
            { icon: Clock, title: 'Quick Updates', desc: 'Edit anytime, no reprints' },
            { icon: Users, title: 'Multi-Format', desc: 'Bio in 3 different lengths' },
          ].map((feature, i) => (
            <Card key={i} className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg p-6">
              <feature.icon className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-purple-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-purple-900">Beautiful Templates</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional designs that make you look like a star
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-purple-100">
            <div className="h-48 bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center">
              <div className="text-white text-2xl font-bold">Cinematic</div>
            </div>
            <CardHeader>
              <CardTitle className="text-purple-900">Cinematic Template</CardTitle>
              <CardDescription>
                Dark, dramatic design perfect for rock, electronic, and hip-hop artists
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="overflow-hidden border-purple-100">
            <div className="h-48 bg-gradient-to-br from-white via-purple-50 to-blue-50 flex items-center justify-center border-b">
              <div className="text-purple-900 text-2xl font-bold">Editorial</div>
            </div>
            <CardHeader>
              <CardTitle className="text-purple-900">Editorial Template</CardTitle>
              <CardDescription>
                Clean, professional design ideal for classical, jazz, and indie artists
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Build Your EPK?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Start creating your professional press kit in minutes
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
