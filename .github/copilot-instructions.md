# Copilot Instructions

## Architecture & Data Flow
- **Portfolio site** built with React 19 + React Router 7, using Vite (with rolldown-vite@7.2.5).
- **Router structure**: [../src/App.jsx](../src/App.jsx) defines nested routes with [../src/components/Layout.jsx](../src/components/Layout.jsx) as the main layout wrapper. Routes: `/` (Home), `/about`, `/work`, `/work/:slug` (ProjectDetail), `/services`, `/contact`.
- **Content source**: All project/site content lives in [../src/data/siteContent.js](../src/data/siteContent.js) (not a backend; flat JS export). Projects use `slug` for routing; always access via `find()` on the projects array in `ProjectDetail`.
- **Layout pattern**: [../src/components/Layout.jsx](../src/components/Layout.jsx) handles navigation, profile display, and scroll-to-top on route change; pages use `<Outlet />` pattern. All pages in [../src/pages/](../src/pages/).
- **Key page patterns**: Pages like [../src/pages/Work.jsx](../src/pages/Work.jsx) use `useState` + `useMemo` for filtering/state. [../src/pages/Home.jsx](../src/pages/Home.jsx) uses `IntersectionObserver` for scroll animations; avoid React refs where vanilla DOM API suffices. [../src/pages/ProjectDetail.jsx](../src/pages/ProjectDetail.jsx) handles both simple and image-rich project showcases.

## Styling & Assets
- Global theming via [../src/index.css](../src/index.css) (CSS custom properties, color-scheme dark/light); component-specific CSS in separate files (e.g., [../src/App.css](../src/App.css), [../src/styles/ProjectDetail.css](../src/styles/ProjectDetail.css)).
- **No CSS modules or Tailwind**—plain CSS with semantic utility classes (`.stack`, `.gap-*`, `.panel`, `.chip`, etc.). New component styles: create `ComponentName.css` in [../src/styles/](../src/styles/) and import in the component file.
- Assets: co-locate in [../src/assets/](../src/assets/) (e.g., `mahesh-profile.jpg`). Use Vite import: `import img from '../assets/file.png'`. External URLs in data (unsplash, etc.) are fine for images in siteContent.js.

## Build, Dev & Linting
- **Scripts**: `npm run dev` (HMR, port 5173), `npm run build` (→ `dist/`), `npm run preview` (serve dist locally), `npm run lint` (ESLint flat config).
- **Config**: [../vite.config.js](../vite.config.js) minimal (just React plugin); [../eslint.config.js](../eslint.config.js) enforces react-hooks, react-refresh. `no-unused-vars` allows `^[A-Z_]` names.
- **Tooling**: npm (no lockfile switching). No TypeScript, no testing framework.

## Code Patterns
- Functional components + hooks; keep `useEffect` for side effects (scroll, observers, DOM setup). Prefer state-driven UI, not direct DOM updates.
- Link navigation via `<Link>` and `<NavLink>` from router; use `useParams()` for route params, `useLocation()` for active route.
- No global state management; data flows from siteContent.js → pages → child components. Props drilling is acceptable for this scope.
- ESLint compliance: prefix unused vars with `_` or uppercase (e.g., `_unused`, `CONST_NOT_USED`).

## Project Detail Pages
- Projects can optionally include rich media via `project.images` object containing `hero`, `plans` (array), and `renders` (object with `masterBedroom`, `guestBedroom`, `kidsBedroom` subsections).
- Lightbox modal ([../src/pages/ProjectDetail.jsx](../src/pages/ProjectDetail.jsx) uses `useState` for `lightbox` state) allows full-resolution image viewing.
- Responsive gallery grid adapts from 3-4 columns on desktop to 1 column on mobile.
