import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Music, Plus, Eye, Calendar } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6" />
            <span className="text-xl font-bold">EPK Supreme</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/builder">
              <Button>
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
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total EPKs</CardDescription>
              <CardTitle className="text-3xl">0</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Views</CardDescription>
              <CardTitle className="text-3xl">0</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-3xl">0</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Avg. Time</CardDescription>
              <CardTitle className="text-3xl">0m</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* EPK List */}
        <Card>
          <CardHeader>
            <CardTitle>Your EPKs</CardTitle>
            <CardDescription>Manage and track your electronic press kits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Music className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No EPKs yet</h3>
              <p className="text-muted-foreground mb-6">
                Create your first professional press kit in minutes
              </p>
              <Link href="/builder">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
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
