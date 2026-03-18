-- =============================================
-- EPK Supreme Database Schema
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- PROFILES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'starter', 'pro', 'enterprise')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- =============================================
-- SUBMISSIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,

  -- Basic Info
  artist_name TEXT NOT NULL,
  genre TEXT,
  location TEXT,
  contact_email TEXT,

  -- Input Data
  bio_inputs JSONB DEFAULT '{}',
  social_links JSONB DEFAULT '{}',
  music_links JSONB DEFAULT '{}',
  press_links TEXT[],
  preferences JSONB DEFAULT '{}',
  uploaded_files JSONB DEFAULT '{}',

  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'building', 'complete', 'error')),
  error_message TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_submissions_user_id ON submissions(user_id);
CREATE INDEX idx_submissions_status ON submissions(status);

-- RLS Policies for submissions
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own submissions"
  ON submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create submissions"
  ON submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own submissions"
  ON submissions FOR UPDATE
  USING (auth.uid() = user_id);

-- =============================================
-- EPKS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS epks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id UUID REFERENCES submissions(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,

  -- Core Data
  slug TEXT UNIQUE NOT NULL,
  template TEXT DEFAULT 'cinematic',

  -- Agent Outputs
  brand_profile JSONB DEFAULT '{}',
  biography JSONB DEFAULT '{}',
  website_sections JSONB DEFAULT '{}',
  one_sheet JSONB DEFAULT '{}',
  press_kit JSONB DEFAULT '{}',
  public_profile JSONB DEFAULT '{}',
  research_data JSONB DEFAULT '{}',
  engagement_score JSONB DEFAULT '{}',
  design_tokens JSONB DEFAULT '{}',

  -- Generated Assets
  pdf_path TEXT,
  site_html_path TEXT,
  one_sheet_path TEXT,
  site_live_url TEXT,

  -- Agent Trace
  agent_log JSONB DEFAULT '[]',

  -- Status
  status TEXT DEFAULT 'building' CHECK (status IN ('building', 'complete', 'error')),
  error_message TEXT,

  -- Metadata
  views_count INTEGER DEFAULT 0,
  is_public BOOLEAN DEFAULT true,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_epks_user_id ON epks(user_id);
CREATE INDEX idx_epks_slug ON epks(slug);
CREATE INDEX idx_epks_status ON epks(status);
CREATE INDEX idx_epks_is_public ON epks(is_public);

-- RLS Policies for epks
ALTER TABLE epks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own epks"
  ON epks FOR SELECT
  USING (auth.uid() = user_id OR is_public = true);

CREATE POLICY "Users can create epks"
  ON epks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own epks"
  ON epks FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own epks"
  ON epks FOR DELETE
  USING (auth.uid() = user_id);

-- =============================================
-- CHAT SESSIONS TABLE (Optional)
-- =============================================
CREATE TABLE IF NOT EXISTS chat_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  submission_id UUID REFERENCES submissions(id) ON DELETE CASCADE,

  messages JSONB DEFAULT '[]',
  epk_data JSONB DEFAULT '{}',

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_chat_sessions_user_id ON chat_sessions(user_id);

-- RLS Policies for chat_sessions
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own chat sessions"
  ON chat_sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create chat sessions"
  ON chat_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own chat sessions"
  ON chat_sessions FOR UPDATE
  USING (auth.uid() = user_id);

-- =============================================
-- STORAGE BUCKETS
-- =============================================

-- Artist Uploads (Private)
INSERT INTO storage.buckets (id, name, public)
VALUES ('artist-uploads', 'artist-uploads', false)
ON CONFLICT (id) DO NOTHING;

-- EPK Assets (Public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('epk-assets', 'epk-assets', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies for artist-uploads
CREATE POLICY "Users can upload own files"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'artist-uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can view own files"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'artist-uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Storage Policies for epk-assets (public)
CREATE POLICY "Anyone can view EPK assets"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'epk-assets');

CREATE POLICY "Users can upload EPK assets"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'epk-assets' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- =============================================
-- FUNCTIONS
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_submissions_updated_at
  BEFORE UPDATE ON submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_epks_updated_at
  BEFORE UPDATE ON epks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_chat_sessions_updated_at
  BEFORE UPDATE ON chat_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION create_profile_on_signup()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION create_profile_on_signup();

-- =============================================
-- SEED DATA (Optional)
-- =============================================

-- You can add sample data here for development
