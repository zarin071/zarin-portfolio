# Michelin Fuel Savings Calculator — screenshots

The case study (`src/data/projects/michelin-fuel-savings.ts`) has image slots
that currently render as labelled placeholders. To make one real:

1. Add the image file to this folder (`public/michelin/`).
2. In the data file, **uncomment / set the matching `src`** on that figure.

That's it — the placeholder becomes the image, with the caption already written.

## Slot → filename map

| Filename (add here)   | Figure slot in the case study                                 | Confirmed detail |
| --------------------- | ------------------------------------------------------------- | ---------------- |
| `before-claim.*`      | Before — the unquantified "Why Choose Michelin" claim         | Why Choose MICHELIN? page (2023): "a unique means of achieving new fuel savings" — prose, no number |
| `empty-state.*`       | The calculator before any interaction                         | — |
| `tyre-dropdown.*`     | The 3-option tyre-type dropdown open                          | bias / tube-type radial / tubeless radial |
| `result-panel.*`      | The animated savings reveal (the money shot)                  | 16,106 L · ₹16 lakhs · 43 t CO₂ · 1,968 trees |
| `tooltip.*`           | One R&D methodology tooltip open                              | — |
| `mobile.*`            | The calculator on a phone                                     | — |
| `connected-fleet.*`   | The global Connected Fleet Carbon Calculator it became        | — |

Any image extension works (`.png` / `.jpg` / `.webp`).

## Confirmed from live screenshots (2026)

- **Live URL:** `https://b2b.michelin.in/fuel-saving-calculator`
- **Auto-populate proof:** `Tube Type - Radial → 10.00R20/295/90R20`
- **Michelin tyre promoted:** `295/80R22.5 X MULTI ENERGY Z+ TL 154/150L VM MI`
- **Page framing:** hero "KNOW YOUR SAVINGS ON FUEL BILLS", plus supporting
  proof on the same page — India's first 4-star BEE fuel-savings label press
  release, and a real-world fuel-consumption test video.
