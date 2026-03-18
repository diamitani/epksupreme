import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArtistpreneurLogo } from '@/components/ui/logo'
import { Music, Plus, Eye, Calendar, Sparkles } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ArtistpreneurLogo className="h-8" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/builder">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New EPK
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-purple-100">
            <CardHeader className="pb-2">
              <CardDescription>Total EPKs</CardDescription>
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">0</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-purple-100">
            <CardHeader className="pb-2">
              <CardDescription>Total Views</CardDescription>
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">0</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-purple-100">
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">0</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-purple-100">
            <CardHeader className="pb-2">
              <CardDescription>Avg. Time</CardDescription>
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">0m</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* EPK List */}
        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="text-purple-900">Your EPKs</CardTitle>
            <CardDescription>Manage and track your electronic press kits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-900">No EPKs yet</h3>
              <p className="text-gray-600 mb-6">
                Create your first professional press kit in minutes with AI
              </p>
              <Link href="/builder">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Create Your First EPK
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
