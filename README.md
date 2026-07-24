<!-- xonettn -->
<div align="center">

# 🐾 Conscious Cat Guardianship

Conscious Cat Guardianship is a rescue-first cat care guide covering behavior, nutrition, breeds, and practical day-to-day feline wellbeing.


![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

![Deploy](https://img.shields.io/badge/Deployed-Netlify-00C7B7?logo=netlify&logoColor=white)

</div>

---

## 📋 Overview
Conscious Cat Guardianship is a rescue-first cat care guide covering behavior, nutrition, breeds, and practical day-to-day feline wellbeing.

## 📦 Tech Stack
- React
- Vite
- Express
- Netlify (deployed)

## 🗂️ Project Structure
```
Conscious-Cat-Guardianship/
  - netlify
  - public
  - scripts
  - src
  (32 files total)
```

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js (v18+)
- npm or yarn

### 📦 Installation
```bash
git clone https://github.com/1nc0gn30/Conscious-Cat-Guardianship.git
cd Conscious-Cat-Guardianship
npm install
```

### 💻 Development
```bash
npm run dev
```

### 🔨 Build
```bash
npm run build
```

### ⚙️ Available Scripts
  npm run dev - tsx server.ts
  npm run sync:breed-images - node scripts/sync-breed-images.mjs
  npm run predeploy:netlify - npm run sync:breed-images && npm run build
  npm run build - vite build
  npm run preview - vite preview
  npm run clean - rm -rf dist
  npm run lint - tsc --noEmit

## 📂 Original README
<details>
<summary>Click to expand original README</summary>

# Conscious Cat Guardianship

Conscious Cat Guardianship is a cat-first guide for people who want to raise healthy, safe, and emotionally secure indoor cats.

The site blends practical care advice with clear explanations, so you can make better day-to-day decisions for your cat.

## What You Can Explore

- Home: Why cats are not low-maintenance pets and what they actually need.
- Care: A room-by-room checklist for litter, play, scratching, sleep, and stress reduction.
- Nutrition: Feeding basics, hydration, and how to avoid common diet mistakes.
- Rescue: A practical rescue and transition guide, including decompression timelines.
- Breeds: Breed profiles, ethical context, and rescue-first guidance.

## ✨ Features

- Searchable breed cards with temperament and care context.
- Live cat facts and image gallery to keep the experience engaging.
- Editorial-style layout designed for readability on mobile and desktop.
- Breed feedback forms at top and bottom of the Breeds page (Netlify Forms).
- Per-breed quick report button and a thank-you confirmation page.
- One feedback submission per 24 hours per browser (client-side limit).

## 🔌 Privacy and API Safety

The project uses a server-side proxy so API keys stay private and are never exposed in browser code.

## 🚀 Run Locally

1. Install dependencies:
```bash
npm install
```
2. Create `.env` in the project root:
```env
CAT_API_KEY=your_thecatapi_key
```
3. Start development server:
```bash
npm run dev
```
4. Open `http://localhost:3000`

## 🚀 Deploy on Netlify

This repo includes `netlify.toml` and a Netlify Function that powers `/api/cat/*` routes.

1. Add this environment variable in Netlify Site Settings:
- `CAT_API_KEY`

2. Deploy with:
- Build command: `npm run build`
- Publish directory: `dist`

Netlify will run the function server-side, so your key remains hidden from users.

### ⚙️ Breed Feedback Form Setup (Netlify)

This project includes a Netlify form named `breed-feedback` for reporting:
- wrong image
- wrong description
- breed requests

The form is pre-registered in `index.html` and submitted via `fetch` from the Breeds page.
Successful submissions redirect users to `/thanks`.

### 🚀 Optional: Sync Breed Images Before Deploy

Run this before deploy to build a local image map for all Cat API breeds. It uses `/breeds`, `reference_image_id`, and `/images/search` fallbacks.

```bash
npm run sync:breed-images
```

This updates `src/data/breedImageOverrides.ts`.

One-shot deploy prep:

```bash
npm run predeploy:netlify
```

## 🔍 SEO and Crawlability

The project includes:
- `public/robots.txt`
- `public/sitemap.xml`
- `public/404.html`

Netlify routing is configured so known app routes serve the SPA, and unknown routes return a real 404 page.

## 📦 Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Netlify Functions

## 📜 License

MIT

</details>

## 📝 TODO / Roadmap
- [ ] Add unit tests
- [ ] Add LICENSE file
- [ ] Add Dockerfile for containerized deployment
- [ ] Consider adding Tailwind CSS
- [ ] Add CI/CD pipeline
- [ ] Add contribution guidelines (CONTRIBUTING.md)
- [ ] Improve error handling and edge cases
- [ ] Add environment variable documentation
- [ ] Update dependencies to latest versions
- [ ] Add code comments and inline documentation

## 🚀 Deployment
This project is deployed on Netlify. See netlify.toml for configuration.

## 👤 Author
**Neal Frazier** - [@AshAmplifies](https://github.com/1nc0gn30)

## 🔗 Links
- GitHub: https://github.com/1nc0gn30/Conscious-Cat-Guardianship

---
*This README was enhanced as part of the neals-projects-2026 batch update.*

---

<div align="center">

**[xonettn]** · Built by [Neal Frazier](https://github.com/1nc0gn30) · [@AshAmplifies](https://twitter.com/AshAmplifies)

</div>
