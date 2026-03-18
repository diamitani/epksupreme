'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Music, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function BuilderPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    artist_name: '',
    genre: '',
    location: '',
    contact_email: '',
    bio_inputs: {
      background: '',
      influences: '',
      achievements: '',
      current_project: '',
    },
    social_links: {
      instagram: '',
      spotify: '',
      youtube: '',
      website: '',
    },
    music_links: {
      spotify: '',
      apple_music: '',
      soundcloud: '',
    },
    template: 'cinematic',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/epk/build', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to build EPK')
      }

      toast.success('EPK created successfully!')
      router.push(`/epk/${data.epk.slug}`)
    } catch (error) {
      console.error('Build error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to build EPK')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6" />
            <span className="text-xl font-bold">EPK Supreme</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Your EPK</h1>
          <p className="text-muted-foreground">
            Our AI will generate a professional press kit based on your information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Tell us about yourself or your act</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="artist_name" className="text-sm font-medium">
                  Artist/Band Name *
                </label>
                <Input
                  id="artist_name"
                  value={formData.artist_name}
                  onChange={(e) =>
                    setFormData({ ...formData, artist_name: e.target.value })
                  }
                  placeholder="Your stage name or band name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="genre" className="text-sm font-medium">
                    Genre *
                  </label>
                  <Input
                    id="genre"
                    value={formData.genre}
                    onChange={(e) =>
                      setFormData({ ...formData, genre: e.target.value })
                    }
                    placeholder="e.g., Indie Rock, Hip-Hop"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location *
                  </label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g., Los Angeles, CA"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact_email" className="text-sm font-medium">
                  Contact Email
                </label>
                <Input
                  id="contact_email"
                  type="email"
                  value={formData.contact_email}
                  onChange={(e) =>
                    setFormData({ ...formData, contact_email: e.target.value })
                  }
                  placeholder="booking@yourname.com"
                />
              </div>
            </CardContent>
          </Card>

          {/* Bio Inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Your Story</CardTitle>
              <CardDescription>Help our AI write your bio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="background" className="text-sm font-medium">
                  Background & Origin Story
                </label>
                <Textarea
                  id="background"
                  value={formData.bio_inputs.background}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bio_inputs: {
                        ...formData.bio_inputs,
                        background: e.target.value,
                      },
                    })
                  }
                  placeholder="How did you get started in music? What's your story?"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="influences" className="text-sm font-medium">
                  Musical Influences
                </label>
                <Input
                  id="influences"
                  value={formData.bio_inputs.influences}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bio_inputs: {
                        ...formData.bio_inputs,
                        influences: e.target.value,
                      },
                    })
                  }
                  placeholder="Who inspires your sound?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="achievements" className="text-sm font-medium">
                  Notable Achievements
                </label>
                <Textarea
                  id="achievements"
                  value={formData.bio_inputs.achievements}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bio_inputs: {
                        ...formData.bio_inputs,
                        achievements: e.target.value,
                      },
                    })
                  }
                  placeholder="Shows played, press coverage, streaming milestones, etc."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="current_project" className="text-sm font-medium">
                  Current Project
                </label>
                <Textarea
                  id="current_project"
                  value={formData.bio_inputs.current_project}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bio_inputs: {
                        ...formData.bio_inputs,
                        current_project: e.target.value,
                      },
                    })
                  }
                  placeholder="What are you working on now?"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social & Music Links</CardTitle>
              <CardDescription>Where can people find your music?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="instagram" className="text-sm font-medium">
                    Instagram
                  </label>
                  <Input
                    id="instagram"
                    value={formData.social_links.instagram}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        social_links: {
                          ...formData.social_links,
                          instagram: e.target.value,
                        },
                      })
                    }
                    placeholder="@yourname"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="spotify" className="text-sm font-medium">
                    Spotify Profile
                  </label>
                  <Input
                    id="spotify"
                    value={formData.social_links.spotify}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        social_links: {
                          ...formData.social_links,
                          spotify: e.target.value,
                        },
                      })
                    }
                    placeholder="Spotify artist link"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="youtube" className="text-sm font-medium">
                    YouTube
                  </label>
                  <Input
                    id="youtube"
                    value={formData.social_links.youtube}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        social_links: {
                          ...formData.social_links,
                          youtube: e.target.value,
                        },
                      })
                    }
                    placeholder="YouTube channel link"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium">
                    Website
                  </label>
                  <Input
                    id="website"
                    value={formData.social_links.website}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        social_links: {
                          ...formData.social_links,
                          website: e.target.value,
                        },
                      })
                    }
                    placeholder="yourname.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/dashboard')}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Building your EPK...
                </>
              ) : (
                'Generate EPK with AI'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
