# Slitigenz Homepage — Next.js 15 + Tailwind CSS v4

Rebuilt from the Canva export (`Homepage.svg`).

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out (deploy to Vercel, Netlify, S3, Nginx...)
```

## Structure
- `src/lib/content.ts` — all copy, stats, services, comparison rows, testimonials, ROI options (edit text here)
- `src/components/` — one component per section: Navbar, Hero, About, RoiCalculator, Services, TechStack, Projects, Comparison, Testimonials
- `src/app/globals.css` — brand tokens (`brand`, `brand-soft`, `accent`, `cta`) via Tailwind `@theme`
- `public/img/` — images cropped from the Canva render; replace with original high-res photos before launch

## To do before launch
- Replace placeholder hero button labels and ROI options (blank in the design)
- Add the second testimonial quote
- Tune the ROI formula in `RoiCalculator.tsx` / `content.ts` (currently a rough estimate)
- `stacks.jpg` has the "Core Stacks" heading baked in — swap for a clean photo + HTML heading
- Link "Explore All Projects", project cards and "Our Knowledge" to real pages
