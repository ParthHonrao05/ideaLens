# IdeaLens – AI Startup Idea Validator

A modern SaaS web application that validates startup ideas using the Anthropic Claude API.

## Tech Stack
- **Next.js 14** (App Router)
- **React 18** with hooks
- **Tailwind CSS** for styling
- **Anthropic Claude SDK** for AI analysis
- **Vercel** for deployment

## Folder Structure

```
idealens/
├── app/
│   ├── layout.jsx              # Root layout (fonts, metadata)
│   ├── page.jsx                # Landing page (/)
│   ├── globals.css             # Global styles + CSS variables
│   ├── analyze/
│   │   └── page.jsx            # Analyzer page (/analyze)
│   └── api/
│       └── analyze/
│           └── route.js        # POST /api/analyze (backend)
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── StatsRow.jsx
│   ├── FeaturesSection.jsx
│   ├── HowItWorks.jsx
│   ├── CtaBand.jsx
│   ├── Footer.jsx
│   ├── AnalyzerForm.jsx
│   ├── SkeletonLoader.jsx
│   └── ResultCards.jsx
├── .env.example
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local`:
```env
ANTHROPIC_API_KEY=sk-ant-your-key-here
```
Get your key at: https://console.anthropic.com/

### 3. Run the dev server
```bash
npm run dev
```
Visit http://localhost:3000

## API Endpoint

### POST /api/analyze
Request:
```json
{ "idea": "Your startup idea..." }
```
Response:
```json
{
  "pros": [],
  "cons": [],
  "target_audience": "",
  "improvements": [],
  "monetization": []
}
```

## Deploy to Vercel
1. Push to GitHub
2. Import on vercel.com
3. Add `ANTHROPIC_API_KEY` in Environment Variables
4. Deploy

Never commit `.env.local` — it's already in `.gitignore`.
