# Synapteck Technologies — Website

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

## Structure
- `src/app` — routes, layout, global styles
- `src/components/layout` — TopLine, Header, MobileNav, Footer
- `src/components/sections` — homepage sections
- `src/components/ui` — Button, Reveal
- `src/lib/site-config.ts` — company name, nav, contact email (confirm before launch)
- `public/` — logo, mark, favicon (placeholders: replace with the final brand files)

## Roadmap
1. Foundation (done)  2. Remaining homepage sections  3. Contact API + database + email  4. Polish, SEO, accessibility  5. Launch
