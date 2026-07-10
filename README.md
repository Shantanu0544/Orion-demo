# Orion Medicament — B2C Website Prototype

A static, dependency-free website prototype for **Orion Medicament**, a dermatology-focused
pharma distributor carrying the **Lyra** and **Biorome Dermacare** product ranges.

**Live demo:** enable GitHub Pages (steps below) and share the link.

---

## What the site does

- **Shop by concern** — 44 real SKUs across 8 color-coded categories (acne, hair, anti-fungal, brightening, serums, sun care, moisturizers, skin treatment), with search and brand/OTC filters.
- **Cart + WhatsApp checkout** — customers build a cart; checkout opens WhatsApp with the full order pre-typed to the Orion number. No payment gateway needed to start taking orders on day one.
- **Rx compliance built in** — Schedule H products (isotretinoin, finasteride, clobetasol, itraconazole, etc.) carry an Rx badge and require a prescription upload before checkout, per the Drugs & Cosmetics Act, 1940.
- **B2B / bulk section** — pharmacies, clinics and stockists send a pre-filled WhatsApp inquiry or call directly.

## Project structure

```
orion-medicament-site/
├── index.html        ← all page markup
├── css/style.css     ← full design system (brand colors from the Orion card)
├── js/products.js    ← THE CATALOG — edit prices, packs, add/remove products here
├── js/app.js         ← filters, cart, prescription gate, WhatsApp links
└── .nojekyll         ← tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages (2 minutes)

1. Create a new GitHub repository (e.g. `orion-medicament`).
2. Upload everything in this folder to the repo root (drag-and-drop on github.com works).
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → Save.
4. Your site goes live at `https://<username>.github.io/orion-medicament/` in ~1 minute.

Or via CLI:

```bash
cd orion-medicament-site
git init && git add . && git commit -m "Orion Medicament prototype"
git branch -M main
git remote add origin https://github.com/<username>/orion-medicament.git
git push -u origin main
# then enable Pages in repo Settings as above
```

## Making changes (non-technical friendly)

- **Prices / packs / new products** → edit `js/products.js` only. Each product is one line:
  `{n:'Name', b:'Lyra', cat:'acne', comp:'Composition', pk:'Pack', pr:499, rx:0}`
  Set `rx:1` for any Schedule H medicine — the prescription gate is automatic.
- **WhatsApp number** → one constant, `const WA = '919970158572';` at the bottom of `js/products.js`.
- **Brand colors / fonts** → the `:root` block at the top of `css/style.css`.

## Known placeholders (before going live for real)

- Prices are **indicative, not actual MRP** — replace with the rate list.
- No product photos yet — category color strips stand in; pack shots from Lyra/Biorome can be wired in.
- Prescription "verification" is a front-end gate for the demo; a real launch needs a pharmacist review workflow and applicable state e-pharmacy compliance.
