# Fernbrook Dental Studio

Sample website for a boutique dental practice — booking-led, with published fees and an anxious-patient angle. Built as a portfolio piece to show prospective clinic clients.

Next.js 16, React 19, Tailwind CSS v4, TypeScript.

## Getting started

Requires Node.js >= 20.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Setting it up for a real clinic

Most changes never touch a component:

1. **`src/config/site.ts`** — practice name, phone, email, address, opening hours.
2. **`src/data/content.ts`** — every heading, treatment, fee, team member, review and FAQ. Wrap a word in `*asterisks*` to render it in the italic brass accent.
3. **`src/app/globals.css`** — the six brand colours at the top of the file. Change `--plum` and `--brass` and the whole site follows.
4. **Photography** — elements with the `plate` class are gradient placeholders. Replace each with `next/image` once the clinic supplies photos.
5. **`src/app/icon.svg`** — favicon.

## Booking form

The form confirms in place and sends nothing — right for a demo, wrong for a live clinic. Before launch, POST it to a route handler. `pzaideletrato/src/app/api/contact/route.ts` has the nodemailer pattern already working.

## Deploy

Push to a Git host and import the repo on [Vercel](https://vercel.com/new). No environment variables are needed until the booking form sends email.
