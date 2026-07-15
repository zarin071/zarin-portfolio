# zarin-portfolio

Zarin Solanki portfolio 2026 — a Next.js site.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Case studies live in `src/data/projects/` — one file per project. See
`src/data/projects/_types.ts` for the full field reference.

## Password-protecting a case study

Any project can be gated behind a password. When set, the `/work/<id>` page
shows a lock screen instead of the case study, and the Work-grid card gets a
🔒 **Locked** badge. Playground experiments (Analytics Agent, Audit Toolkit)
use the same mechanism.

### The shared password (recommended)

All locked content — DASH case study, Analytics Agent, Design System Audit
Toolkit — reads from a single environment variable so one password unlocks
everything:

```
NEXT_PUBLIC_WORK_PASSWORD=your-password-here
```

**Local dev** — add it to `.env.local` (already gitignored):

```
NEXT_PUBLIC_WORK_PASSWORD=portfolio@zarin-2026
```

**Live site (GitHub Pages)** — the build runs in GitHub Actions, which needs
the secret set in the repo:

1. Go to **github.com/zarin071/zarin-portfolio → Settings → Secrets and
   variables → Actions**
2. Click **New repository secret**
3. Name: `NEXT_PUBLIC_WORK_PASSWORD`
4. Value: your password (e.g. `portfolio@zarin-2026`)
5. Save, then re-run the latest workflow (or push any commit) to rebuild with
   the secret baked in

Without the secret set, the env var is empty at build time and all gates are
disabled on the live site.

### How it works for visitors

- The work-grid card shows a 🔒 **Locked** badge.
- `/work/<id>` renders a password screen with an input field.
- Playground experiments show the password field inline where the content
  would otherwise appear.
- A correct password is remembered for the **browser session** (closing the
  tab resets it).
- A **"Don't have the password? Request access →"** link emails
  `zarinsolanki.work@gmail.com` for visitors without the password.

### Adding a password to a different project

Open `src/data/projects/<project>.ts` and set the `password` field:

```ts
password: process.env.NEXT_PUBLIC_WORK_PASSWORD ?? "",
```

Or use a one-off string if you want a different password for that project:

```ts
password: "my-other-password",
```

### Removing a lock

Delete (or comment out) the `password` line. The badge and gate disappear and
the case study becomes public again.

### Notes

- **This is a client-side deterrent, not real security.** The site is static
  (GitHub Pages), so the password ships inside the JavaScript bundle. It hides
  a study from casual visitors and search engines, but a determined person can
  recover it from the bundle. Never store a truly sensitive secret here.
