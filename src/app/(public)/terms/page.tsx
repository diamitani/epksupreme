import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import { FileText } from 'lucide-react'

export default function TermsPage() {
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
          <FileText className="h-4 w-4" />
          Legal Terms
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Last updated: March 18, 2026
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-20">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 border-purple-100">
          <div className="prose prose-purple max-w-none">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using Artistpreneur ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Description of Service</h2>
            <p className="text-gray-600 mb-6">
              Artistpreneur provides an AI-powered Electronic Press Kit (EPK) creation platform that enables artists, musicians, and performers to create, manage, and share professional press materials.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Account Registration</h2>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Eligibility</h3>
            <p className="text-gray-600 mb-6">
              You must be at least 13 years old to use the Service. By creating an account, you represent that you meet this age requirement and that all information you provide is accurate.
            </p>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Account Security</h3>
            <p className="text-gray-600 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Subscription Plans and Billing</h2>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Plan Types</h3>
            <p className="text-gray-600 mb-6">
              We offer Free, Pro, and Enterprise subscription plans with different features and limitations as described on our pricing page.
            </p>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Payment Terms</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Paid subscriptions are billed monthly or annually in advance</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>We may change our pricing with 30 days' notice</li>
              <li>You can cancel your subscription at any time</li>
              <li>Upon cancellation, you retain access until the end of your billing period</li>
            </ul>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Upload harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service to distribute spam or malware</li>
              <li>Resell or redistribute the Service without permission</li>
              <li>Abuse or overwhelm our infrastructure</li>
              <li>Impersonate others or provide false information</li>
            </ul>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Content Ownership and Rights</h2>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Your Content</h3>
            <p className="text-gray-600 mb-6">
              You retain all ownership rights to content you upload or create using the Service. By using the Service, you grant us a worldwide, non-exclusive license to use, store, and display your content solely for the purpose of providing and improving the Service.
            </p>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">AI-Generated Content</h3>
            <p className="text-gray-600 mb-6">
              Content generated by our AI tools is provided to you for your use. You are responsible for reviewing and ensuring that AI-generated content meets your needs and complies with applicable laws.
            </p>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Public EPKs</h3>
            <p className="text-gray-600 mb-6">
              When you publish an EPK, you are making that content publicly accessible. You grant viewers a non-exclusive right to view and link to your published EPK.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The Service, including its design, features, text, graphics, and software, is owned by Artistpreneur and protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of the Service without our written permission.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your account:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>For violations of these Terms</li>
              <li>For abusive or fraudulent activity</li>
              <li>If required by law</li>
              <li>At our discretion with or without cause</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Upon termination, your right to use the Service immediately ceases. You may download your content within 30 days of termination.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Disclaimers and Limitation of Liability</h2>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Service "As Is"</h3>
            <p className="text-gray-600 mb-6">
              The Service is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or secure.
            </p>

            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-8">Limitation of Liability</h3>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Artistpreneur shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to indemnify and hold harmless Artistpreneur from any claims, damages, or expenses arising from your use of the Service, your content, or your violation of these Terms.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              The Service may integrate with third-party services (payment processors, analytics, etc.). Your use of these services is subject to their own terms and privacy policies.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Dispute Resolution</h2>
            <p className="text-gray-600 mb-6">
              Any disputes arising from these Terms shall be resolved through binding arbitration in San Francisco, California, under the rules of the American Arbitration Association. You waive your right to participate in class actions.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms are governed by the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We may modify these Terms at any time. We will notify you of material changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Severability</h2>
            <p className="text-gray-600 mb-6">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full effect.
            </p>

            <h2 className="text-3xl font-bold text-purple-900 mb-4 mt-12">Contact Information</h2>
            <p className="text-gray-600 mb-2">
              For questions about these Terms, contact us:
            </p>
            <p className="text-gray-600 mb-2">
              Email: <a href="mailto:legal@artistpreneur.com" className="text-purple-600 hover:text-purple-800">legal@artistpreneur.com</a>
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
