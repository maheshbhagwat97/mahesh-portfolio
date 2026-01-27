<!-- eslint-disable -->
# Copilot Instructions

## Architecture & Data Flow
- **Portfolio site** built with React 19 + React Router 7, using Vite (with rolldown-vite@7.2.5).
- **Router structure**: `src/App.jsx` defines nested routes with `src/components/Layout.jsx` as the main layout wrapper. Routes: `/` (Home), `/about`, `/work`, `/work/:slug` (ProjectDetail), `/services`, `/contact`.
- **Content source**: All project/site content lives in `src/data/siteContent.js` (not a backend; flat JS export). Projects use `slug` for routing; always access via `find()` on the projects array in `ProjectDetail`.
- **Layout pattern**: `src/components/Layout.jsx` handles navigation, profile display, and scroll-to-top on route change; pages use `<Outlet />` pattern. All pages in `src/pages/`.
- **Key page patterns**: Pages like `src/pages/Work.jsx` use `useState` + `useMemo` for filtering/state. `src/pages/Home.jsx` uses `IntersectionObserver` for scroll animations; avoid React refs where vanilla DOM API suffices. `src/pages/ProjectDetail.jsx` handles both simple and image-rich project showcases.

## Styling & Assets
- Global theming via `src/index.css` (CSS custom properties, color-scheme dark/light); component-specific CSS in separate files (e.g., `src/App.css`, `src/styles/ProjectDetail.css`).
- **No CSS modules or Tailwind**—plain CSS with semantic utility classes (`.stack`, `.gap-*`, `.panel`, `.chip`, etc.). New component styles: create `ComponentName.css` in `src/styles/` and import in the component file.
- Assets: co-locate in `src/assets/` (e.g., `mahesh-profile.jpg`). Use Vite import: `import img from '../assets/file.png'`. External URLs in data (unsplash, etc.) are fine for images in siteContent.js.

## Build, Dev & Linting
- **Scripts**: `npm run dev` (HMR, port 5173), `npm run build` (→ `dist/`), `npm run preview` (serve dist locally), `npm run lint` (ESLint flat config).
- **Config**: `vite.config.js` minimal (just React plugin); `eslint.config.js` enforces react-hooks, react-refresh. `no-unused-vars` allows `^[A-Z_]` names.
- **Tooling**: npm (no lockfile switching). No TypeScript, no testing framework.

## Code Patterns
- Functional components + hooks; keep `useEffect` for side effects (scroll, observers, DOM setup). Prefer state-driven UI, not direct DOM updates.
- Link navigation via `<Link>` and `<NavLink>` from router; use `useParams()` for route params, `useLocation()` for active route.
- No global state management; data flows from siteContent.js → pages → child components. Props drilling is acceptable for this scope.
- ESLint compliance: prefix unused vars with `_` or uppercase (e.g., `_unused`, `CONST_NOT_USED`).

## Project Detail Pages
- **Generic vs. Specialized**: `src/pages/ProjectDetail.jsx` is the catch-all for projects with `images` data structure (plans + renders). Specialized single-project pages like `src/pages/KonkanHouseProject.jsx` and `src/pages/JaipurBedroomProject.jsx` have custom layouts for unique needs (e.g., `konkanMedia` with site gallery, zoning, technical drawings, progress photos).
- **Data structures**: Projects in `src/data/siteContent.js` can have either `images` (hero, plans array, renders object with `masterBedroom`/`guestBedroom`/`kidsBedroom`) OR project-specific data (e.g., `konkanMedia` with `siteGallery`, `zoning`, `technical`, `renders`, `siteProgress`). Always check `project.images` or `project.konkanMedia` before rendering.
- **Lightbox modal**: Uses `useState({ isOpen, src, title })` with click-to-open images and backdrop-close. Pattern: `onClick={() => openLightbox(imgSrc, imgTitle)}`.
- **Responsive gallery grid**: 3-4 columns desktop → 1 column mobile; `.gallery-grid` in CSS handles auto-fit.

## Scroll Animations & IntersectionObserver
- **Pattern**: `src/pages/Home.jsx` and `src/pages/About.jsx` use `IntersectionObserver` to trigger `.fadeInUp` animations on `.panel`, `.card`, `.philosophy-card` etc. as they enter viewport. Setup in `useEffect`, clean up with `observer.disconnect()`.
- **CSS animations**: `@keyframes fadeInUp`, `fadeInDown`, `fadeInLeft`, `scaleIn` defined in `src/index.css` and component styles; cards have `opacity: 0; animation: scaleIn 0.6s ease forwards` with staggered `animation-delay` (0s, 0.1s, 0.2s, etc.).
- **Avoid React refs**: Prefer vanilla `document.querySelectorAll()` → `observer.observe()` pattern; it's simpler for this use case.

## Naming & Project Routing Gotchas
- **Project slugs** in `src/data/siteContent.js` must match routes in `src/App.jsx`. Hardcoded routes like `work/konkan-house` and `work/residential-bedroom-design` take priority over the catch-all `work/:slug`.
- **CSS file pairing**: Custom project pages (e.g., `KonkanHouseProject.jsx`) have paired `.css` files (e.g., `KonkanHouseProject.css`) in `src/styles/`; always import and co-locate.
- **HTML structure**: Use semantic sections within `.stack.gap-lg` wrapper for consistent spacing; `.panel` for contained blocks, `.narrow` to constrain width to ~900px.
- **Image path pattern**: Imported images use relative paths from component: `import img from '../assets/file.jpg'`; in data, use imported variables or external URLs.
