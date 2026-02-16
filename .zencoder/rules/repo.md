# Repository Overview

- **Name**: travel-blog-top-countries-1
- **Primary Framework**: Astro (TypeScript-ready)
- **Package Manager**: npm
- **Entry Points**:
  - `src/pages/index.astro` – homepage
  - `src/pages/countries.astro` – interactive country explorer
- **Reusable Components**:
  - `src/components/CountryFlags.astro` – country selection UI
  - `src/components/Header.astro`, `Footer.astro`, `BaseHead.astro` – shared layout elements
- **Content Collections**: `src/content/blog` (MD/MDX posts)

## Development Notes

1. **Styling**: Tailwind and custom CSS (`src/styles/global.css`).
2. **Data**: Country metadata in `src/data/countries.json`.
3. **Build Config**: `astro.config.js`, `tailwind.config.js`, `tsconfig.json`.
4. **Scripts**:
   - `npm run dev` – start dev server
   - `npm run build` – production build
   - `npm run preview` – preview build output

## Testing & Deployment

- **Testing**: No automated test suite configured yet.
- **Deployment**: Firebase hosting configuration (`firebase.json`, `.firebase/`).

## Helpful Tips

- Ensure DOM interactions run inside browser-only guards when targeting Astro components.
- Favor TypeScript type assertions for DOM element refinements (e.g., `const input = searchInput as HTMLInputElement;`).
- When modifying interactive scripts, confirm compatibility with both drag and button modes in `CountryFlags.astro`.