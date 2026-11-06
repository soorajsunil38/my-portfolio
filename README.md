# Sooraj Sunil — Portfolio Website

A responsive React + Vite portfolio recreated from the supplied SVG reference. The original color palette, portrait assets, section order, 3D hello illustration, and overall composition are retained.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Included interactions

- Lenis smooth scrolling (automatically disabled for reduced-motion preferences)
- Scroll-reveal transitions using IntersectionObserver
- Responsive mobile navigation
- Clickable featured project detail modal (Escape and backdrop close supported)
- Contact links and an email enquiry form-style flow via `mailto:`
- Back-to-top and section navigation

## Assets

- `public/design-reference.svg` — original supplied design, retained unchanged
- `public/assets/` — optimized WebP exports from embedded images in the SVG

The supplied 3D hello artwork is kept as the original rendered asset because the SVG contains no editable 3D model or scene geometry to rebuild in Three.js. No unnecessary real-time 3D scene is loaded.
