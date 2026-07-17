# Michelin Fuel Savings Calculator — screenshots

Drop the real captures here, then set the matching `src` on the figures in
`src/data/projects/michelin-fuel-savings.ts` (they render as labelled
placeholders until a `src` is present).

Expected files (any image extension — .png / .jpg / .webp):

| File                  | Slot in the case study                                        |
| --------------------- | ------------------------------------------------------------- |
| `before-claim.*`      | Before — the unquantified "Why Choose Michelin" claim         |
| `empty-state.*`       | The calculator before any interaction                         |
| `tyre-dropdown.*`     | The 3-option tyre-type dropdown open                          |
| `result-panel.*`      | The animated savings reveal (the money shot)                  |
| `tooltip.*`           | One R&D methodology tooltip open                              |
| `mobile.*`            | The calculator on a phone                                     |
| `connected-fleet.*`   | The global Connected Fleet Carbon Calculator it became        |

To wire one up, set the figure's `src`, e.g.:

```ts
src: "/michelin/result-panel.png",
```
