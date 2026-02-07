# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 14 portfolio website with TypeScript, Tailwind CSS, and Framer Motion animations. The project uses the App Router architecture with a custom page transition system and animated component displays.

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

## Architecture

### App Router Structure
- Uses Next.js 14 App Router (`src/app/`)
- File-based routing with route groups
- Routes: `/` (home), `/about`, `/experience`, `/projects`
- Each route page includes the `<Transition />` component for page animations

### Layout Hierarchy
```
RootLayout (layout.tsx)
├── Header (global header with social links)
├── Page content (route-specific)
└── Navbar (fixed bottom navigation)
```

**Important**: The `RootLayout` wraps ALL pages with:
- `Header` component (top social links)
- `Navbar` component (bottom navigation bar)
- Portuguese language (`lang="pt-BR"`)
- Inter font family
- Max width container (`max-w-6xl`)

### Component Architecture

**Transition Component** (`src/components/Transition.tsx`):
- Client-side component (`"use client"`)
- Uses Framer Motion for page transitions
- Creates three overlapping animated layers with staggered delays (0.2s, 0.4s, 0.6s)
- Purple gradient layers (`#2e2257`, `#493884`, `#6c51c6`)
- Must be included at the top of each page component

**MemojiContainer Component** (`src/components/MemojiContainer.tsx`):
- Displays centered memoji with floating tech stack logos
- Uses custom Tailwind `animate-[float_*s_infinite_linear]` animations
- Tech logos positioned absolutely with varying animation durations (3-6s)
- Imports static GIF from `/public/gifBackground.gif`
- Logo images: TypeScript, JavaScript, Node, React, Next.js, CSS, HTML, Tailwind

**Navbar Component** (`src/components/Navbar.tsx`):
- Fixed position: mobile bottom, desktop centered at bottom with `left-1/2 -translate-x-1/2`
- Gradient background (`from-slate-800 to-violet-950`)
- Uses `react-icons` (IoHome, IoPerson, IoBriefcase, FaComputer)
- Rounded full on desktop, full-width on mobile

**Header Component** (`src/components/Header.tsx`):
- Global header with name "Douglas Oliveira"
- Social links: LinkedIn, GitHub, WhatsApp, Email (currently placeholder `#` hrefs)

### Styling System

**Tailwind Configuration** (`tailwind.config.ts`):
- Custom `shadow-full` utility: `0px 0px 90px -30px #000`
- Custom `float` keyframe animation with 5-step rotation and translation
- Custom `animate-float-slow` utility (3s linear infinite)

**Global Styles** (`globals.css`):
- Background image via CSS variable (`--bg-url: url(../../public/bg-desktop.jpg)`)
- Background covers full viewport with top-center positioning

### Import Aliases
- `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Use this for all component and asset imports

## Key Dependencies

- **framer-motion**: ^11.0.5 - Page transitions and animations
- **react-icons**: ^5.0.1 - Icon library (IoHome, IoPerson, etc.)
- **next**: 14.1.0 - App Router, Image optimization
- **TypeScript**: Strict mode enabled

## Asset Management

All static assets in `/public/`:
- Tech logos: TsLogo.png, JsLogo.png, NodeLogo.png, ReactLogo.png, nextLogo.png, CssLogo.webp, HtmlLogo.webp, TailwindLogo.png
- Memoji assets: Memoji.png, BgMemoji.png, gifBackground.gif
- Background: bg-desktop.jpg

**Image Usage Pattern**:
```tsx
import Image from 'next/image'
<Image src="/filename.png" width={50} height={50} alt="description" />
```

## Code Patterns

### Page Component Pattern
```tsx
import Transition from "@/components/Transition"

const PageName = () => {
  return (
    <div className="text-white min-h-screen">
      <Transition />
      {/* Page content */}
    </div>
  )
}

export default PageName
```

### Client Component Pattern
When using Framer Motion or browser APIs, add `"use client"` directive at the top of the file.

## Language & Localization

- Site language: Portuguese (`pt-BR`)
- Component names may use Portuguese (e.g., `Projetos`, `Sobre`)
- Keep this convention when adding new pages/components
