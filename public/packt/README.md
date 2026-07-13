# Packt Design System — case-study images

Maps to slots in `src/data/projects/packt-design-system.ts`. Any slot whose
file is missing renders a labelled placeholder box (the `<img>` falls back on
error), so the page is always complete.

## Cover
| File | Slot |
| --- | --- |
| `cover.jpg` | Hero + Work-card cover (the original Packt collage, animated) |

## 2018 — the style guide
| File | Slot |
| --- | --- |
| `2018-colors.png` | Colour guide |
| `2018-typography.png` | Outfit type scale (cropped from the top) |
| `2018-buttons.png` | Button sizes (L / M / S) |
| `2018-iconography.png` | Iconography (regular / custom / social) |
| `2018-grid.png` | Responsive grid (1440 / 1024 / 768 / 390) |

## 2026 — the design system (token boards, top-cropped)
| File | Slot |
| --- | --- |
| `2026-color-foundations.jpg` | Primitive colours + 9-step scale + naming |
| `2026-semantic-light.jpg` | Semantic tokens, light mode (Brand + Hub-packt) |
| `2026-semantic-dark.jpg` | Semantic tokens, dark mode |
| `2026-type-primitive.jpg` | Primitive type scale |
| `2026-spacing.jpg` | 8-point spacing scale |
| `2026-borders.jpg` | Radius + border-width tokens |
| `2026-iconography.jpg` | Iconography |
| `2026-layout.jpg` | 12→4 column grid + breakpoints |

## bp — bpCore (scaling to enterprise)
| File | Slot |
| --- | --- |
| `bp-core-tiers.png` | The federated four-tier model (in place) |
| `bp-atomic.png` | Atomic design structure — *placeholder until added* |
| `bp-brand-2025.png` | 2025 brand refresh in bpCore — *placeholder until added* |

The atomic-design and brand-refresh diagrams came in as `.emf` (Windows vector)
in the source doc and couldn't be converted here — export them as PNG from the
Confluence/Figma source and drop them in with the names above.
