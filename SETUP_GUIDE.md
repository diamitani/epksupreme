# EPK Supreme - Setup Guide

Complete step-by-step guide to get EPK Supreme running locally and deployed to production.

---

## Prerequisites

- **Node.js** 18+ and npm 9+
- **Supabase Account** (free tier works)
- **DeepSeek API Key** (or Ollama for local AI)
- **Git** for version control

---

## Step 1: Clone & Install

```bash
cd ~/Desktop/epk-supreme
npm install
```

This will install all dependencies including Next.js 15, React 19, Supabase, and Tailwind CSS 4.

---

## Step 2: Set Up Supabase

### Create Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Choose organization and project name
4. Set a strong database password
5. Select region closest to you
6. Click "Create new project"

### Run Database Schema

1. Wait for project to finish setting up (~2 minutes)
2. Go to **SQL Editor** in left sidebar
3. Click "New query"
4. Open `supabase/schema.sql` from this project
5. Copy entire contents and paste into SQL editor
6. Click "Run" or press Cmd/Ctrl + Enter

This creates:
- `profiles` table
- `submissions` table
- `epks` table
- `chat_sessions` table
- Storage buckets
- Row Level Security policies
- Triggers and functions

### Get API Keys

1. Go to **Project Settings** → **API**
2. Copy these values:
   - `Project URL` → for `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → for `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep secret!)

---

## Step 3: Get DeepSeek API Key

### Option A: DeepSeek (Recommended - Very Cheap)

1. Go to [platform.deepseek.com](https://platform.deepseek.com)
2. Sign up/Login
3. Go to API Keys
4. Create new key
5. Copy the key → for `DEEPSEEK_API_KEY`

**Cost:** ~$0.27 per 1M input tokens, ~$1.10 per 1M output tokens
**Estimate:** $5 = 500+ EPKs generated

### Option B: Ollama (Free - Local)

```bash
# Install Ollama
brew install ollama  # macOS
# or download from ollama.ai

# Pull model
ollama pull qwen2.5

# Start server (runs on localhost:11434)
ollama serve
```

Set `MODEL_PROVIDER=ollama` in .env.local

---

## Step 4: Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# ===== SUPABASE (Required) =====
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# ===== DEEPSEEK (Required if using DeepSeek) =====
MODEL_PROVIDER=deepseek
DEEPSEEK_API_KEY=sk-...
DEEPSEEK_BASE_URL=https://api.deepseek.com/v1
DEEPSEEK_MODEL=deepseek-chat

# ===== APP =====
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=EPK Supreme
```

---

## Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

You should see the EPK Supreme homepage!

---

## Step 6: Test the Flow

### Create an Account

1. Click "Get Started" or "Sign Up"
2. Enter your details
3. Verify email (check Supabase Auth settings if needed)
4. You'll be redirected to dashboard

### Create Your First EPK

1. Click "Create Your First EPK" or "New EPK"
2. Fill out the form:
   - **Artist Name**: Your stage name
   - **Genre**: e.g., "Indie Rock"
   - **Location**: e.g., "Brooklyn, NY"
   - **Background**: Brief origin story
   - **Influences**: Artists that inspire you
   - **Achievements**: Shows, press, milestones
   - Add social links
3. Click "Generate EPK with AI"
4. Wait 20-30 seconds for AI to create your press kit
5. You'll be redirected to your live EPK page!

### View Your EPK

Your EPK is now live at:
```
http://localhost:3000/epk/[your-artist-name-xxxxx]
```

Features:
- ✅ Professional bio written by AI
- ✅ Brand-consistent design
- ✅ Press kit one-sheet
- ✅ Shareable link
- ✅ View tracking

---

## Step 7: Deploy to Vercel (Production)

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/epk-supreme.git
git push -u origin main
```

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Add Environment Variables:
   - Click "Environment Variables"
   - Add all variables from your `.env.local`
   - ⚠️ Update `NEXT_PUBLIC_APP_URL` to your Vercel URL

6. Click "Deploy"
7. Wait 2-3 minutes
8. Your app is live! 🎉

### Update Supabase Redirect URLs

1. Go to Supabase → Authentication → URL Configuration
2. Add your Vercel URL to:
   - Site URL: `https://your-app.vercel.app`
   - Redirect URLs: `https://your-app.vercel.app/**`

---

## Troubleshooting

### "Failed to build EPK" Error

**Check:**
- DeepSeek API key is valid
- API key has credits remaining
- Network connection is stable

**Fix:**
- Verify `DEEPSEEK_API_KEY` in .env.local
- Check DeepSeek console for usage/limits
- Try with `MODEL_PROVIDER=ollama` locally

### Database Connection Error

**Check:**
- Supabase URL and keys are correct
- Schema was run successfully
- RLS policies are enabled

**Fix:**
- Go to Supabase SQL Editor
- Re-run `supabase/schema.sql`
- Check Table Editor to verify tables exist

### Authentication Not Working

**Check:**
- Email confirmation is configured
- Redirect URLs are set correctly
- User exists in Supabase Auth dashboard

**Fix:**
- Go to Supabase → Authentication → Providers
- Enable Email provider
- Disable email confirmation for testing
- Add redirect URLs in URL Configuration

### AI Generation Takes Too Long

**Check:**
- DeepSeek API latency
- Network speed

**Fix:**
- Increase `ARTISTEPKS_MODEL_TIMEOUT_MS` in .env
- Use Ollama locally for faster (but lower quality) generation
- Try during off-peak hours

---

## Next Steps

### Optional Features

1. **Custom Domain**
   - Go to Vercel → Settings → Domains
   - Add your domain (e.g., epksupreme.com)
   - Update DNS records

2. **Email Templates**
   - Configure Supabase Auth email templates
   - Customize welcome email, password reset, etc.

3. **Analytics**
   - Add Google Analytics or Plausible
   - Track EPK views and conversions

4. **Payment Integration** (Stripe)
   - Set up Stripe account
   - Add subscription management
   - Implement plan limits

---

## Support

- **Documentation**: See `/docs` folder
- **Issues**: Check database logs in Supabase
- **API Logs**: Check Vercel Function logs

---

**You're all set! 🎵**

Create professional EPKs in minutes and help artists get booked!
