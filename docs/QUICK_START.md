# EPK Supreme - Quick Start

Get EPK Supreme running in 10 minutes.

---

## Prerequisites

- Node.js 18+ installed
- Supabase account (free)
- DeepSeek API key ($5 credit = 500+ EPKs)

---

## Step 1: Clone & Install (2 min)

```bash
cd ~/Desktop/epk-supreme
npm install
```

---

## Step 2: Supabase Setup (3 min)

1. Go to [supabase.com](https://supabase.com) → New Project
2. Wait for setup (~2 min)
3. Go to SQL Editor
4. Paste contents of `supabase/schema.sql`
5. Click Run
6. Go to Settings → API → Copy keys:
   - Project URL
   - anon public key
   - service_role key

---

## Step 3: DeepSeek API Key (1 min)

1. Go to [platform.deepseek.com](https://platform.deepseek.com)
2. Sign up / Login
3. API Keys → Create new key
4. Copy the key

---

## Step 4: Configure (2 min)

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

DEEPSEEK_API_KEY=sk-...
MODEL_PROVIDER=deepseek
```

---

## Step 5: Run (1 min)

```bash
npm run dev
```

Open http://localhost:3000

---

## Step 6: Test (1 min)

1. Click "Get Started"
2. Create account
3. Fill out EPK form
4. Click "Generate EPK with AI"
5. Wait ~30 seconds
6. View your professional EPK!

---

## Next Steps

- **Customize**: Edit templates in `src/components/templates/`
- **Deploy**: Push to GitHub → Import to Vercel
- **Scale**: Add payment integration, custom domains

---

## Stuck?

See `SETUP_GUIDE.md` for detailed troubleshooting.

---

**You're live!** 🎉
