# Conscious Cat Guardianship

Conscious Cat Guardianship is a cat-first guide for people who want to raise healthy, safe, and emotionally secure indoor cats.

The site blends practical care advice with clear explanations, so you can make better day-to-day decisions for your cat.

## What You Can Explore

- Home: Why cats are not low-maintenance pets and what they actually need.
- Care: A room-by-room checklist for litter, play, scratching, sleep, and stress reduction.
- Nutrition: Feeding basics, hydration, and how to avoid common diet mistakes.
- Rescue: A practical rescue and transition guide, including decompression timelines.
- Breeds: Breed profiles, ethical context, and rescue-first guidance.

## Features

- Searchable breed cards with temperament and care context.
- Live cat facts and image gallery to keep the experience engaging.
- Editorial-style layout designed for readability on mobile and desktop.
- Breed feedback forms at top and bottom of the Breeds page (Netlify Forms).
- Per-breed quick report button and a thank-you confirmation page.
- One feedback submission per 24 hours per browser (client-side limit).

## Privacy and API Safety

The project uses a server-side proxy so API keys stay private and are never exposed in browser code.

## Run Locally

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

## Deploy on Netlify

This repo includes `netlify.toml` and a Netlify Function that powers `/api/cat/*` routes.

1. Add this environment variable in Netlify Site Settings:
- `CAT_API_KEY`

2. Deploy with:
- Build command: `npm run build`
- Publish directory: `dist`

Netlify will run the function server-side, so your key remains hidden from users.

### Breed Feedback Form Setup (Netlify)

This project includes a Netlify form named `breed-feedback` for reporting:
- wrong image
- wrong description
- breed requests

The form is pre-registered in `index.html` and submitted via `fetch` from the Breeds page.
Successful submissions redirect users to `/thanks`.

### Optional: Sync Breed Images Before Deploy

Run this before deploy to build a local image map for all Cat API breeds. It uses `/breeds`, `reference_image_id`, and `/images/search` fallbacks.

```bash
npm run sync:breed-images
```

This updates `src/data/breedImageOverrides.ts`.

One-shot deploy prep:

```bash
npm run predeploy:netlify
```

## SEO and Crawlability

The project includes:
- `public/robots.txt`
- `public/sitemap.xml`
- `public/404.html`

Netlify routing is configured so known app routes serve the SPA, and unknown routes return a real 404 page.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Netlify Functions

## License

MIT
