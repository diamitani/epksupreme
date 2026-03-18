#!/bin/bash

echo "🚀 EPK Supreme - Quick Deploy to Vercel"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the epk-supreme directory"
    exit 1
fi

echo "📦 Step 1: Installing dependencies..."
npm install

echo ""
echo "✅ Dependencies installed!"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Create a GitHub repository:"
echo "   → Opening GitHub..."
open https://github.com/new

echo ""
echo "2. Then run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/epk-supreme.git"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Vercel:"
echo "   → Opening Vercel..."
sleep 2
open https://vercel.com/new

echo ""
echo "4. Add these environment variables in Vercel:"
echo ""
echo "   NEXT_PUBLIC_SUPABASE_URL=https://ikddseyrditiuleapanq.supabase.co"
echo "   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>"
echo "   SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>"
echo "   DEEPSEEK_API_KEY=<your-deepseek-key>"
echo "   MODEL_PROVIDER=deepseek"
echo "   DEEPSEEK_BASE_URL=https://api.deepseek.com/v1"
echo "   DEEPSEEK_MODEL=deepseek-chat"
echo ""
echo "📖 See DEPLOY.md for detailed instructions!"
echo ""
