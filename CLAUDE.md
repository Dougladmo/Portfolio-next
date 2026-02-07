# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 14 portfolio website with TypeScript, Tailwind CSS, and Framer Motion animations. Features an interactive pixelated canvas effect, particle background system, and smooth page transitions. The project uses the App Router architecture with Portuguese as the primary language.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint check
npm run lint
```

## Architecture Overview

### App Router Structure
- Uses Next.js 14 App Router (`src/app/`)
- File-based routing with the following routes:
  - `/` - Home page with interactive PixelatedCanvas
  - `/about` - About page with skills grid and certifications
  - `/experience` - Professional experience timeline
  - `/projects` - Project showcase
- Each page **must** include `<Transition />` component for animated page transitions

### Layout Hierarchy & Global Components
```
RootLayout (src/app/layout.tsx)
├── ParticlesBackground (fixed, z-index: -50)
├── Ambient glow effect (blue/purple gradient blur)
├── Header (top bar with name and social links)
├── Page content (route-specific)
└── Navbar (fixed bottom navigation)
```

**Critical Layout Details**:
- `RootLayout` wraps ALL pages and provides:
  - Outfit font (primary) and Oswald font (headings)
  - Portuguese language (`lang="pt-BR"`)
  - Dark background (`bg-[#0a0a0a]`)
  - ParticlesBackground and ambient glow effects
  - Global Header and Navbar components
- **Never** duplicate Header or Navbar in individual pages - they're globally provided

### Key Component Patterns

**Transition Component** (`src/components/Transition.tsx`):
- Client component with Framer Motion
- Creates three purple gradient layers with staggered animation
- Colors: `#2e2257`, `#493884`, `#6c51c6`
- Delays: 0.2s, 0.4s, 0.6s
- **Must be included** in every page component

**Page Component Template**:
```tsx
import Transition from "@/components/Transition"

export default function PageName() {
  return (
    <>
      <main className="w-full flex min-h-screen overflow-hidden relative">
        {/* Page content */}
      </main>
      <Transition />
    </>
  )
}
```

**PixelatedCanvas** (`src/components/ui/pixelated-canvas.tsx`):
- Advanced interactive canvas with distortion effects
- Supports multiple distortion modes: `repel`, `attract`, `swirl`
- Configurable dropout, tinting, jitter, and animation
- Used on home page for the profile image effect

**ParticlesBackground** (`src/components/ParticlesBackground.tsx`):
- Client component using `@tsparticles/react` and `@tsparticles/slim`
- 160 white particles with slow movement
- Fixed position with `z-index: -50`
- Auto-initializes particle engine on mount

**Navbar** (`src/components/Navbar.tsx`):
- Fixed bottom on mobile, centered bottom on desktop
- Gradient background: `from-slate-800 to-violet-950`
- Uses `react-icons` for navigation icons
- Rounded full on desktop, full-width on mobile

**Header** (`src/components/Header.tsx`):
- Global header with gradient name styling
- Social links: LinkedIn, GitHub, WhatsApp, Email
- Currently uses placeholder `#` hrefs - update these when adding real social links

### Styling System

**Font Configuration**:
- Primary font: Outfit (variable: `--font-outfit`)
- Heading font: Oswald (variable: `--font-oswald`, weights: 400, 500, 700)
- Access via `className={oswald.className}` after importing

**Tailwind Custom Utilities**:
```typescript
// Custom shadow
boxShadow.full: '0px 0px 90px -30px #000'

// Custom animations
animate: {
  'float-slow': 'float 3s linear infinite',
  'fadeIn': 'fadeIn 0.5s ease-in-out forwards'
}

// Custom keyframes
keyframes.float: {
  // 5-step rotation and translation animation
}
```

**Color Palette**:
- Primary gradient: `from-blue-500 via-purple-500 to-pink-500`
- Background: `#0a0a0a` (near black)
- Glass morphism: `bg-white/5` with `backdrop-blur-md`
- Borders: `border-white/10`

**Common Design Patterns**:
```tsx
// Glass card with decorative corners
<div className="relative p-6 md:p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md shadow-2xl">
  {/* Content */}
  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />
</div>

// Gradient text
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
  TEXT
</span>

// Hover glow effect
<div className="group relative">
  {/* Content */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
</div>
```

### Import Aliases
- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Use this for all component and asset imports
- Example: `import Navbar from "@/components/Navbar"`

## Key Dependencies

**Animation & Visual Effects**:
- `framer-motion` (^11.0.5) - Page transitions and animations
- `@tsparticles/react` (^3.0.0) - Particle background system
- `@tsparticles/slim` (^3.9.1) - Lightweight particle engine

**UI & Icons**:
- `react-icons` (^5.0.1) - Icon library (Io*, Fa*, Si* icons)
- `tailwind-merge` (^3.4.0) - Utility for merging Tailwind classes
- `clsx` (^2.1.1) - Conditional className composition

**Framework**:
- `next` (14.1.0) - App Router, Image optimization, Font optimization
- `typescript` (^5) - Strict mode enabled

## Asset Management

All static assets in `/public/`:
- Profile image: `insta_foto.jpg` (used in PixelatedCanvas)
- Background: `bg-desktop.jpg` (if used)
- Tech logos: Store new tech stack logos here

**Next.js Image Pattern**:
```tsx
import Image from 'next/image'
<Image
  src="/filename.png"
  width={50}
  height={50}
  alt="description"
/>
```

## Code Patterns & Conventions

### Client vs Server Components
- Use `"use client"` directive when:
  - Using Framer Motion
  - Using browser APIs (canvas, window, etc.)
  - Using React hooks like `useState`, `useEffect`
  - Using interactive event handlers
- Examples requiring client directive:
  - `Transition.tsx` (Framer Motion)
  - `ParticlesBackground.tsx` (useEffect, useState)
  - `PixelatedCanvas.tsx` (canvas manipulation, pointer events)

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured (`@/*` → `./src/*`)
- Include custom type definitions in `src/types/**/*.d.ts`

### Responsive Design Patterns
```tsx
// Mobile-first approach with md: breakpoint
<div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2">Content</div>
</div>

// Scale adjustments for mobile
<div className="scale-[0.7] md:scale-100">Content</div>

// Spacing variations
<div className="gap-3 md:gap-6">Content</div>
```

## Language & Localization

- Site language: Portuguese (`pt-BR`)
- All user-facing text should be in Portuguese
- Component names and code comments can be in English
- Page titles and descriptions use Portuguese
- Keep this convention when adding new pages/components

## Performance Considerations

**Animation Performance**:
- PixelatedCanvas uses `requestAnimationFrame` with FPS limiting
- Default `maxFps: 60` to prevent excessive CPU usage
- Particle background uses `fpsLimit: 120` for smooth motion

**Image Optimization**:
- Use Next.js `<Image>` component for automatic optimization
- Specify width and height to prevent layout shift
- Consider using `priority` prop for above-the-fold images

**Client Component Optimization**:
- Particle engine initializes once and caches
- PixelatedCanvas samples are computed once per image load
- Avoid unnecessary re-renders by memoizing complex calculations

## Project-Specific Notes

**Social Links**: Update placeholder `#` hrefs in `Header.tsx` with actual social media URLs

**Adding New Pages**:
1. Create page file in `src/app/[route]/page.tsx`
2. Import and include `<Transition />` component
3. Add navigation link to `Navbar.tsx` if needed
4. Follow existing page structure for consistency
5. Use Portuguese for user-facing content

**UI Components**:
- Custom UI components live in `src/components/ui/`
- Includes advanced components like `pixelated-canvas`, `hero-parallax`, `dither-shader`
- These are reusable across pages but may require specific props

**Animation Timing**:
- Page transitions: 0.6s duration with staggered delays
- Hover effects: typically 300ms transitions
- Use `transition-all` or specific transition properties for smooth animations
