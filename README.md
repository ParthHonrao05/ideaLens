# 🚀 IdeaLens – AI Startup Idea Validator

IdeaLens is a modern SaaS web application that helps users validate startup ideas instantly using AI. It analyzes ideas across multiple dimensions such as strengths, risks, target audience, improvements, and monetization strategies.

---

## ✨ Features

* 🧠 AI-powered startup idea analysis
* 📊 Structured output (Pros, Cons, Audience, Improvements, Monetization)
* ⚡ Fast and responsive UI
* 🎨 Modern SaaS-style design (dark theme + gradients)
* 📱 Fully responsive (mobile + desktop)
* 🔄 Real-time analysis with loading states
* 📋 Copy JSON results feature

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 14 (App Router), React 18
* **Styling:** Tailwind CSS
* **Backend:** Next.js API Routes
* **AI Integration:** OpenRouter (GPT-3.5 Turbo)
* **Deployment:** Vercel

---

## 📂 Project Structure

```
idealens/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   ├── analyze/
│   │   └── page.jsx
│   └── api/
│       └── analyze/
│           └── route.js
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── FeaturesSection.jsx
│   ├── HowItWorks.jsx
│   ├── CtaBand.jsx
│   ├── Footer.jsx
│   ├── AnalyzerForm.jsx
│   ├── ResultCards.jsx
│   └── SkeletonLoader.jsx
├── .env.example
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/idealens.git
cd idealens
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file:

```env
OPENROUTER_API_KEY=your_api_key_here
```

👉 Get your API key from OpenRouter

---

### 4. Run development server

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 🔌 API Endpoint

### POST `/api/analyze`

#### Request:

```json
{
  "idea": "Your startup idea"
}
```

#### Response:

```json
{
  "pros": [],
  "cons": [],
  "target_audience": "",
  "improvements": [],
  "monetization": []
}
```

---

## 🚀 Deployment (Vercel)

1. Push code to GitHub
2. Go to Vercel and import the repository
3. Add environment variable:

```env
OPENROUTER_API_KEY=your_api_key_here
```

4. Click **Deploy**

---

## ⚠️ Important Notes

* Do NOT commit `.env.local`
* API usage may incur minimal cost depending on requests
* Designed for educational/demo purposes

---

## 🎯 Future Improvements

* 📊 Idea scoring system (AI-based)
* 📈 Feasibility analysis
* 🔐 User authentication
* 💳 Credits / usage tracking system
* 📄 Export reports (PDF)

---

## 👨‍💻 Author

Developed as a SaaS project using modern web technologies and AI integration.

---

## ⭐ Acknowledgements

* Next.js
* Tailwind CSS
* OpenRouter AI
* Vercel

---
