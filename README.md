# EPK Supreme - AI-Powered Press Kits for Musicians

AI-powered Electronic Press Kit builder for independent artists and music professionals.

**Built:** March 18, 2026
**Version:** 3.0.0 (Production Ready)
**Stack:** Next.js 15 + React 19 + Supabase + Multi-Agent AI

---

## What This Is

A full-stack SaaS platform where artists submit their info, and a multi-agent AI system automatically builds them a professional, high-end EPK — delivered as:

- ✅ Hosted web page with professional design
- ✅ AI-generated biography and press materials
- ✅ Multiple template options (Cinematic, Editorial)
- ✅ Shareable link with view tracking
- ✅ Public gallery and discovery

---

## Quick Start

### 1. Install Dependencies

```bash
cd ~/Desktop/epk-supreme
npm install
```

### 2. Set Up Environment

```bash
cp .env.example .env.local
# Edit .env.local with your API keys
```

**Required Accounts:**
- [Supabase](https://supabase.com) — Free tier works
- [DeepSeek](https://platform.deepseek.com) — Very cheap (~$5 = 500+ EPKs)

### 3. Set Up Database

1. Create Supabase project
2. Go to SQL Editor
3. Paste contents of `supabase/schema.sql`
4. Click Run

### 4. Run Locally

```bash
npm run dev
# Open http://localhost:3000
```

### 5. Deploy to Vercel

See `SETUP_GUIDE.md` for complete deployment instructions.

---

## Architecture

### Multi-Agent AI System

```
User Submission
     ↓
API Endpoint
     ↓
EPK Builder Agent (Orchestrator)
     ↓
┌─────────────┬──────────────┬───────────────┬────────────────┐
│   Brand     │   Content    │   Website     │   One-Sheet    │
│   Agent     │   Agent      │   Agent       │   Agent        │
└─────────────┴──────────────┴───────────────┴────────────────┘
     ↓
Model Runtime (DeepSeek/Ollama)
     ↓
Complete EPK Package
```

### Specialized Agents

1. **Brand Agent** - Defines artist story, tone, visual direction
2. **Content Agent** - Writes professional bios (short/medium/long)
3. **Website Agent** - Creates website sections and copy
4. **One-Sheet Agent** - Composes press kit materials

---

## Tech Stack

### Core Technologies

- **Next.js 15.5.12** — React framework with App Router
- **React 19.2.1** — UI library
- **TypeScript 5.8.2** — Type safety
- **Tailwind CSS 4.2.1** — Utility-first styling
- **Supabase 2.98.0** — Database, Auth, Storage
- **Framer Motion 12.35.1** — Animations
- **Lucide React 0.577.0** — Icons

### AI & Agents

- **DeepSeek V3** — Primary AI model (affordable & powerful)
- **Ollama** — Local model runtime (optional)
- **Custom multi-agent system** — 4 specialized agents

### State & UI

- **Zustand** — State management
- **React Hot Toast** — Notifications
- **Class Variance Authority** — Component variants
- **Tailwind Merge** — Utility class merging

---

## Project Structure

```
epk-supreme/
├── README.md
├── SETUP_GUIDE.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── .env.example
├── supabase/
│   └── schema.sql              # Complete database schema
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/          # Authentication pages
│   │   │   └── signup/
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/      # User dashboard
│   │   │   └── builder/        # EPK creation form
│   │   ├── (public)/
│   │   │   ├── epk/[slug]/     # Public EPK pages
│   │   │   └── gallery/        # Gallery of EPKs
│   │   ├── api/
│   │   │   └── epk/
│   │   │       └── build/      # EPK generation API
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                 # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── badge.tsx
│   │   └── templates/          # EPK templates
│   │       ├── cinematic-template.tsx
│   │       └── editorial-template.tsx
│   ├── lib/
│   │   ├── ai/
│   │   │   ├── agents/         # AI agents
│   │   │   │   ├── epk-builder-agent.ts
│   │   │   │   ├── brand-agent.ts
│   │   │   │   ├── content-agent.ts
│   │   │   │   ├── website-agent.ts
│   │   │   │   └── onesheet-agent.ts
│   │   │   ├── runtime.ts      # Model runtime
│   │   │   └── types.ts
│   │   ├── supabase/
│   │   │   ├── client.ts       # Browser client
│   │   │   └── server.ts       # Server client
│   │   └── utils.ts
│   └── types/
│       └── database.ts         # TypeScript types
└── public/
```

---

## Features

### ✅ Implemented

- **AI-Powered Generation** - Multi-agent system creates professional EPKs
- **Authentication** - Secure user accounts with Supabase Auth
- **Dashboard** - Manage and track all your EPKs
- **EPK Builder** - Intuitive form to create new press kits
- **Professional Templates** - Cinematic and Editorial designs
- **Public Pages** - Shareable EPK links with custom slugs
- **Gallery** - Public discovery of EPKs
- **View Tracking** - Monitor EPK views and engagement
- **Responsive Design** - Works perfectly on all devices

### 🔄 Planned

- PDF export with Puppeteer
- Video EPK generation with Remotion
- More template options
- Custom domains
- Advanced analytics
- Payment integration
- API access

---

## Database Schema

### Tables

**profiles**
- User account information
- Plan tier (free/starter/pro/enterprise)
- Avatar and metadata

**submissions**
- Artist information inputs
- Social and music links
- Bio content and preferences
- Build status tracking

**epks**
- Generated EPK data
- AI agent outputs (brand, biography, website, one-sheet)
- Template and design tokens
- Public/private status
- View counts

**chat_sessions** (Optional)
- Interactive builder sessions
- Message history
- EPK data collaboration

---

## Environment Variables

### Required

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
DEEPSEEK_API_KEY=sk-...
```

### Optional

```env
MODEL_PROVIDER=deepseek          # or 'ollama'
OLLAMA_BASE_URL=http://localhost:11434
ARTISTEPKS_FALLBACK_TO_LOCAL=true
```

See `.env.example` for complete list.

---

## Development

### Commands

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Workflow

1. **Create Branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make Changes**
   - Write code
   - Test locally
   - Commit frequently

3. **Test Build**
   ```bash
   npm run build
   npm run start
   ```

4. **Deploy**
   - Push to GitHub
   - Vercel auto-deploys

---

## Cost Estimates

| Users/Month | DeepSeek | Supabase | Vercel | Total |
|-------------|----------|----------|--------|-------|
| 100         | ~$1      | Free     | Free   | ~$1   |
| 500         | ~$5      | Free     | Free   | ~$5   |
| 2,000       | ~$20     | $25      | $20    | ~$65  |
| 10,000      | ~$100    | $25      | $20    | ~$145 |

**DeepSeek Pricing:**
- Input: ~$0.27 per 1M tokens
- Output: ~$1.10 per 1M tokens
- Average EPK: ~$0.01 to generate

---

## Design System

### HSL Color Variables

```css
--background          # Page background
--foreground          # Text color
--primary             # Brand color
--primary-foreground  # Text on primary
--secondary           # Secondary actions
--muted               # Subtle backgrounds
--accent              # Highlighted elements
--destructive         # Error states
--border              # Border color
```

### Component Rules

1. ❌ NO hardcoded colors → Use HSL variables
2. ✅ Use `cn()` utility for class merging
3. ❌ NO separate CSS files → Tailwind only
4. ✅ ALWAYS add focus states
5. ✅ ALWAYS add disabled states

---

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Deploy**
   - Go to [vercel.com](https://vercel.com)
   - Import repository
   - Add environment variables
   - Deploy

3. **Configure**
   - Update `NEXT_PUBLIC_APP_URL` to your Vercel URL
   - Update Supabase redirect URLs
   - Test authentication flow

See `SETUP_GUIDE.md` for detailed instructions.

---

## Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup walkthrough
- **[BUSINESS_OVERVIEW.md](./BUSINESS_OVERVIEW.md)** - Business plan & strategy
- **[EPK_BUILDER_ANALYSIS.md](./EPK_BUILDER_ANALYSIS.md)** - Technical analysis

---

## Support & Troubleshooting

### Common Issues

**"Failed to build EPK"**
- Check DeepSeek API key validity
- Verify API credits remaining
- Try with Ollama locally

**Database errors**
- Verify Supabase schema was run
- Check environment variables
- Review Supabase logs

**Authentication issues**
- Confirm redirect URLs in Supabase
- Check email confirmation settings
- Verify user exists in Auth dashboard

---

## License

Private - All Rights Reserved

---

## Built With ❤️

- Next.js 15 + React 19
- Supabase + DeepSeek AI
- Love for independent artists 🎵

**Create your first EPK:** `npm run dev`
