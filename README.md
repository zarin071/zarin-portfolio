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
🔒 **Locked** badge.

### How to set a password

1. **Open the project's data file** in `src/data/projects/` — e.g. `dash.ts`,
   `packt-design-system.ts`, `fleet-co2-calculator.ts`.

2. **Add a `password` field** to the project object:

   ```ts
   const dash: Project = {
     id: "dash-digital-analytics-hub",
     title: "DASH — Digital Analytics Strategy Hub",
     // ...other fields...
     password: "bp-dash-2025",   // ← set this to lock the case study
   }
   ```

3. **That's it.** With the field set, and no other changes:
   - The Work-grid card shows a 🔒 **Locked** badge.
   - `/work/<id>` renders a password screen; the case study is only shown
     after the correct password is entered.
   - The confidential content is **not** included in the page's initial
     payload — it renders only after a successful unlock.
   - A correct password is remembered for the **browser session**
     (closing the tab resets it).
   - A **Request access** link emails `zarinsolanki.work@gmail.com` for
     visitors who don't have the password.

4. **Preview** at `http://localhost:3000/work/<project-id>`, then commit and push.

### How to unlock a project

Delete (or comment out) the `password` line. The badge and gate disappear and
the case study becomes public again.

### Notes

- **One password per project.** There is no shared/global password — set the
  same string on multiple projects if you want them to share one.
- **This is a client-side deterrent, not real security.** The site is static
  (GitHub Pages), so the password ships inside the JavaScript bundle. It hides
  a study from casual visitors and search engines, but a determined person can
  recover it from the bundle. **Never store a truly sensitive secret here.**
