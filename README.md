# Fernando Ramos — Portfolio

Personal portfolio site for **Fernando Ramos** — Computer Systems Engineer · Co-Founder, [Agentic Engineering](https://agenticengineering.agency/).

> Production AI systems, legal AI products, and open-source agent tooling — multi-agent orchestration, secure infrastructure, and human oversight at the core.

Live: **https://fernando-ramos-portfolio.workers.dev** (Cloudflare Workers, static-assets)

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite 7 + TypeScript 5.9 |
| Styling | Tailwind CSS 3.4 (editorial-monochrome × terminal-engineer aesthetic) |
| Type | Instrument Serif (display) · Inter (body) · JetBrains Mono (kickers / labels) |
| Motion | framer-motion 12 |
| Icons | lucide-react (UI) · react-icons/si (brand logos) |
| Hosting | Cloudflare Workers — static assets only, SPA fallback |
| Deploy | wrangler 4.x |

No server, no database, no API. Just a fast static React SPA.

---

## Repo layout

```
.
├── app/                       # the React app (single Vite project)
│   ├── public/                # downloadable assets (CV, IEEE paper, AURA deck, etc.)
│   ├── src/
│   │   ├── sections/          # Hero, About, Projects, Experience, Contact
│   │   ├── components/        # Navigation, Footer, ui/*
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css          # design tokens + utilities
│   ├── index.html             # SEO meta + JSON-LD Person schema
│   ├── wrangler.jsonc         # Cloudflare deploy config (static assets)
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
└── README.md                  # ← you are here
```

The entire app lives in `app/`. Everything below assumes you're inside that directory unless noted.

---

## Local development

```bash
cd app
npm install
npm run dev
```

Vite starts on **http://localhost:5173**. Hot module reload, fast refresh, all on.

### Other scripts

```bash
npm run lint              # eslint
npm run build             # tsc + vite build → app/dist/
npm run preview           # serve the production build locally
```

---

## Deployment (Cloudflare Workers)

The site is deployed as a **static-assets-only Worker** via `wrangler`. There is no Worker script — Cloudflare serves the contents of `app/dist/` directly, with `not_found_handling: "single-page-application"` so client-side routes (and refreshes on deep links) work.

### One-time setup (first deploy only)

```bash
cd app
npx wrangler login   # opens a browser, authenticates with your Cloudflare account
```

That writes credentials to `~/.config/.wrangler/`. After that, deploys are non-interactive.

### Deploy

```bash
cd app
npm run deploy
```

Under the hood this runs `npm run build && wrangler deploy`. Wrangler reads [`app/wrangler.jsonc`](./app/wrangler.jsonc), uploads everything in `app/dist/`, and publishes a new version of the `fernando-ramos-portfolio` Worker.

Average deploy takes about 10 seconds.

### Validate without deploying

```bash
npm run deploy:dry-run    # builds + runs wrangler with --dry-run, no upload
```

### Watch live logs

```bash
npm run cf:tail
```

### Roll back

```bash
npx wrangler versions list
npx wrangler rollback                  # rolls back to previous version
npx wrangler rollback <VERSION_ID>     # rolls back to a specific version
```

---

## The push-and-deploy workflow

This is the loop you'll use whenever you update the site.

```bash
# 1. Make changes inside app/src/, app/public/, etc.
cd /Users/fr/code/fr/portfolio

# 2. Sanity check
cd app && npm run lint && npm run build && cd ..

# 3. Commit and push to GitHub
git status                                     # see what changed
git add -A                                     # stage everything (gitignore filters noise)
git commit -m "describe the change clearly"
git push origin main

# 4. Deploy to Cloudflare
cd app && npm run deploy && cd ..
```

If the change is content-only (e.g. swapping a PDF in `app/public/`) and you've already pushed, you can deploy in a single step from `app/`:

```bash
cd app && npm run deploy
```

> **Note**: GitHub push and Cloudflare deploy are **independent**. Pushing to `main` does NOT auto-deploy to Cloudflare in this setup — you ship to production by running `npm run deploy` explicitly. This is intentional (full control over what goes live). If you ever want auto-deploy on push, you can add a GitHub Action that runs `wrangler deploy` with a `CLOUDFLARE_API_TOKEN` secret.

---

## Updating content

| Want to change… | Edit |
|---|---|
| Hero copy / stats | [`app/src/sections/Hero.tsx`](./app/src/sections/Hero.tsx) |
| About bio / `~/stack.toml` panel | [`app/src/sections/About.tsx`](./app/src/sections/About.tsx) |
| Projects list / dossier cards | [`app/src/sections/Projects.tsx`](./app/src/sections/Projects.tsx) |
| Work-log (`git log` entries) | [`app/src/sections/Experience.tsx`](./app/src/sections/Experience.tsx) |
| Contact channels | [`app/src/sections/Contact.tsx`](./app/src/sections/Contact.tsx) |
| Nav labels / status indicator | [`app/src/components/Navigation.tsx`](./app/src/components/Navigation.tsx) |
| Design tokens (colors, fonts, utilities) | [`app/src/index.css`](./app/src/index.css) |
| SEO meta, OG tags, JSON-LD | [`app/index.html`](./app/index.html) |
| New tech-stack brand logo | [`app/src/components/ui/TechLogo.tsx`](./app/src/components/ui/TechLogo.tsx) |

### Adding a downloadable document

Drop the file into `app/public/` (it ships as-is at the root of the deployed site), then link to it from the relevant section:

```tsx
<a href="/My_Doc.pdf" target="_blank" rel="noopener noreferrer" className="cmd-link">
  open_doc <ArrowUpRight size={11} />
</a>
```

`app/public/` currently holds: the CV PDF, the SensorGrid IEEE paper / Resumen / Cartel PDFs, and the AURA self-contained HTML pitch deck.

---

## Custom domain (optional)

To serve at, say, `fernandoramos.dev`:

```bash
cd app
npx wrangler deploy
# Then in Cloudflare dashboard: Workers → fernando-ramos-portfolio →
# Settings → Domains & Routes → Add Custom Domain → fernandoramos.dev
```

Cloudflare provisions the certificate automatically. After that, update the canonical / Open Graph URLs in [`app/index.html`](./app/index.html) to match.

---

## Conventions

- **No emojis** in source files unless explicitly requested.
- **Brand colors are allowed inside the stack panel only** (real product brand SVGs). Everywhere else the palette is monochrome + warm amber accent.
- **Comments in JSX** are used to mark major render-block boundaries; data-array comments are avoided when the data shape is self-documenting.
- **Honest stats only**: every number in the Hero is grounded in real work (don't invent metrics).

---

## License

All rights reserved.
