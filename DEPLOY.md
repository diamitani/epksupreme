# Deploy EPK Supreme to Vercel

## Quick Deploy (5 minutes)

### Prerequisites Checklist

Before deploying, make sure you have:

- ✅ Supabase project URL: `https://ikddseyrditiuleapanq.supabase.co`
- ⬜ Supabase `anon` key (from Settings → API)
- ⬜ Supabase `service_role` key (from Settings → API)
- ⬜ DeepSeek API key (from platform.deepseek.com)
- ⬜ Supabase database schema has been run

---

## Step 1: Get Your API Keys

### Supabase Keys

1. Go to: https://supabase.com/dashboard/project/ikddseyrditiuleapanq/settings/api
2. Copy these two values:
   - **anon / public key** (starts with `eyJ...`)
   - **service_role key** (starts with `eyJ...`) ⚠️ Secret!

### DeepSeek Key

1. Go to: https://platform.deepseek.com/api_keys
2. Create new API key
3. Copy the key (starts with `sk-...`)

---

## Step 2: Push to GitHub

```bash
cd ~/Desktop/epk-supreme

# Add all files
git add .

# Commit
git commit -m "Initial commit - EPK Supreme"

# Create GitHub repo (if you haven't already)
# Go to https://github.com/new and create a new repository
# Then run:

git remote add origin https://github.com/YOUR_USERNAME/epk-supreme.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com/new

2. **Import Repository**
   - Click "Import Git Repository"
   - Authorize GitHub if needed
   - Select your `epk-supreme` repository

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Add Environment Variables**

   Click "Environment Variables" and add these:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://ikddseyrditiuleapanq.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY_HERE
   SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY_HERE
   DEEPSEEK_API_KEY=YOUR_DEEPSEEK_KEY_HERE
   MODEL_PROVIDER=deepseek
   DEEPSEEK_BASE_URL=https://api.deepseek.com/v1
   DEEPSEEK_MODEL=deepseek-chat
   NEXT_PUBLIC_APP_NAME=EPK Supreme
   ```

   ⚠️ Replace `YOUR_*_KEY_HERE` with your actual keys!

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live! 🎉

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, then add environment variables in dashboard
```

---

## Step 4: Configure Supabase Redirects

After deployment, you'll get a URL like: `https://epk-supreme-xxx.vercel.app`

1. **Go to Supabase**: https://supabase.com/dashboard/project/ikddseyrditiuleapanq/auth/url-configuration

2. **Update URLs**:
   - **Site URL**: `https://your-vercel-url.vercel.app`
   - **Redirect URLs**: Add `https://your-vercel-url.vercel.app/**`

---

## Step 5: Test Your Deployment

1. Visit your Vercel URL
2. Click "Get Started"
3. Create an account
4. Fill out the EPK builder form
5. Wait ~30 seconds for AI generation
6. View your professional EPK!

---

## Troubleshooting

### "Failed to build EPK"
- Check DeepSeek API key is valid
- Verify you have API credits
- Check Vercel function logs

### Database errors
- Verify schema was run in Supabase
- Check environment variables in Vercel
- Review Supabase logs

### Authentication not working
- Verify redirect URLs in Supabase
- Check anon key is correct
- Confirm email provider is enabled

---

## Your Live URLs

After deployment:

- **Your App**: `https://epk-supreme-xxx.vercel.app`
- **Dashboard**: `https://vercel.com/dashboard`
- **Supabase**: `https://supabase.com/dashboard/project/ikddseyrditiuleapanq`
- **DeepSeek**: `https://platform.deepseek.com`

---

## Next Steps

- ✅ Test the full flow (signup → create EPK → view)
- ✅ Add custom domain (Vercel → Settings → Domains)
- ✅ Monitor usage (DeepSeek dashboard)
- ✅ Share your EPKs!

---

**Need help?** See SETUP_GUIDE.md for detailed troubleshooting.
