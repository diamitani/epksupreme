import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
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
          <Shield className="h-4 w-4" />
          Your Privacy Matters
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Last updated: March 18, 2026
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-20">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 border-purple-100">
          <div className="prose prose-purple max-w-none">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-6">
              At Artistpreneur, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Electronic Press Kit (EPK) creation platform.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Information We Collect</h2>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Email address</li>
              <li>Name and artist name</li>
              <li>Profile information</li>
              <li>Payment information (processed securely through our payment provider)</li>
            </ul>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Content You Create</h3>
            <p className="text-gray-600 mb-6">
              We store the content you create on our platform, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Biographies and press materials</li>
              <li>Photos, videos, and audio files</li>
              <li>EPK designs and templates</li>
              <li>Analytics data on EPK views and engagement</li>
            </ul>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Usage Information</h3>
            <p className="text-gray-600 mb-6">
              We automatically collect certain information about your device and how you interact with our service:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Log data (IP address, browser type, pages visited)</li>
              <li>Device information</li>
              <li>Usage patterns and preferences</li>
            </ul>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide, operate, and maintain our service</li>
              <li>Generate AI-powered content for your EPKs</li>
              <li>Process your transactions</li>
              <li>Send you updates, newsletters, and marketing communications (you can opt out anytime)</li>
              <li>Improve our service and develop new features</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraud and abuse</li>
            </ul>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-6">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> We work with third-party service providers who help us operate our platform (hosting, analytics, payment processing)</li>
              <li><strong>Public EPKs:</strong> Content in your published EPKs is publicly accessible by design</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, user information may be transferred</li>
            </ul>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Encryption in transit and at rest</li>
              <li>Secure authentication systems</li>
              <li>Regular security audits</li>
              <li>Access controls and monitoring</li>
            </ul>
            <p className="text-gray-600 mb-6">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Access and download your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Object to certain data processing activities</li>
              <li>Export your content</li>
            </ul>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to improve your experience, analyze usage, and deliver personalized content. You can control cookies through your browser settings.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our service is not intended for users under 13 years of age. We do not knowingly collect information from children under 13.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a notice on our website.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Contact Us</h2>
            <p className="text-gray-600 mb-2">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-600 mb-2">
              Email: <a href="mailto:privacy@artistpreneur.com" className="text-purple-600 hover:text-purple-800">privacy@artistpreneur.com</a>
            </p>
            <p className="text-gray-600">
              Address: Artistpreneur, Inc., San Francisco, CA
            </p>
          </div>
        </Card>
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
