# IT Student Portfolio

A modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Designed for IT students — honest, clean, and easy to deploy on Vercel.

## Sections

- Hero
- About
- Skills
- Projects
- Education
- Certifications (optional)
- Contact
- Resume download

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- next-themes (dark mode)
- Lucide React (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure your info

Edit these files with your real details:

| File | What to update |
|------|----------------|
| `src/config/site.ts` | Name, email, location, social links, site URL |
| `src/constants/skills.ts` | Your skills and levels |
| `src/constants/projects.ts` | Your projects |
| `src/constants/education.ts` | School and degree |
| `src/constants/certifications.ts` | Certificates (or empty array) |

### 3. Add your resume

1. Export your resume as PDF
2. Save it as `public/resume/resume.pdf`

### 4. Add project screenshots

Replace placeholder images in `public/images/` and update `image` paths in `src/constants/projects.ts`.

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 6. Environment variables (optional for local, required for production SEO)

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set your production URL:

```env
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
```

---

## Deploy to Vercel

Vercel is made by the creators of Next.js. Deployment is free for personal projects.

### Option A: Deploy via GitHub (recommended)

**Step 1 — Push to GitHub**

```bash
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**Step 2 — Import on Vercel**

1. Go to [vercel.com](https://vercel.com) and sign up / log in (use GitHub login)
2. Click **Add New… → Project**
3. Import your `portfolio` repository
4. Vercel auto-detects Next.js — keep default settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (leave default)
   - **Install Command:** `npm install`
5. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your Vercel URL (you can update after first deploy)
6. Click **Deploy**

**Step 3 — After first deploy**

1. Copy your live URL (e.g. `https://portfolio-abc123.vercel.app`)
2. In Vercel: **Project → Settings → Environment Variables**
3. Set `NEXT_PUBLIC_SITE_URL` to your live URL
4. Redeploy: **Deployments → … → Redeploy**

**Step 4 — Custom domain (optional)**

1. Vercel → **Project → Settings → Domains**
2. Add your domain and follow DNS instructions

---

### Option B: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

---

## Project Structure

```
src/
├── app/              # Routes, layout, SEO (sitemap, robots)
├── components/
│   ├── common/       # Theme, Section, SectionTitle
│   ├── layout/       # Navbar, Footer
│   └── sections/     # Hero, About, Skills, Projects, etc.
├── config/           # Site-wide config
├── constants/        # Skills, projects, education data
├── lib/              # Utilities
└── types/            # TypeScript types
public/
├── images/           # Project screenshots
└── resume/           # resume.pdf
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint |

## Customization Tips

- **Remove Certifications nav item:** Delete it from `src/constants/nav.ts` and remove `<Certifications />` from `src/app/page.tsx` if you have none
- **Add live demo links:** Set `liveUrl` in `src/constants/projects.ts` after deploying projects to Vercel
- **Update SEO:** Change `metadata` in `src/app/layout.tsx` and `siteConfig` in `src/config/site.ts`

## License

MIT — use freely for your personal portfolio.
