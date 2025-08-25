# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **multimedia portfolio website** built for Visual Vanguard Media, showcasing video production, cinematography, and multimedia capabilities. The project demonstrates professional video content through an interactive portfolio interface with YouTube integration.

## Quick Start Commands

```bash
# Development server with Turbopack (faster builds)
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm run start

# Linting (ESLint 9 with Next.js config)
npm run lint
```

## Technology Stack

| Technology | Version | Role |
|------------|---------|------|
| **Next.js** | 15.5.0 | App Router framework with Turbopack |
| **React** | 19.1.0 | UI library with latest features |
| **TypeScript** | ^5 | Type safety and development experience |
| **Tailwind CSS** | ^4 | Utility-first styling framework |
| **Framer Motion** | ^12.23.12 | Animation and transitions |
| **React YouTube** | ^10.1.0 | YouTube video embedding |
| **Lucide React** | ^0.541.0 | Icon system |
| **React Hook Form** | ^7.62.0 | Form handling and validation |

## Architecture Overview

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage (currently default)
│   └── globals.css        # Global styles with Tailwind
├── components/
│   ├── layout/            # Layout components
│   │   └── Header.tsx     # Navigation header with smooth scrolling
│   ├── portfolio/         # Portfolio-specific components
│   │   ├── PortfolioCard.tsx    # Video card with thumbnail & metadata
│   │   └── VideoModal.tsx       # YouTube video modal player
│   └── ui/                # Reusable UI components
│       └── Button.tsx     # Styled button with variants
├── data/
│   └── portfolio.ts       # Static portfolio data & metrics
├── lib/
│   └── utils.ts          # Utility functions (YouTube, formatting)
└── types/
    └── index.ts          # TypeScript interfaces & types
```

### Component Architecture Patterns

**1. Component Categories:**
- **Layout Components**: Navigation, headers (responsive design)
- **Portfolio Components**: Video cards, modals, media-specific UI
- **UI Components**: Reusable buttons, form elements with variants

**2. TypeScript Integration:**
- Comprehensive interfaces in `types/index.ts` for all data structures
- Strict typing for portfolio videos, skills, testimonials
- Props interfaces for component type safety

**3. State Management:**
- Client components for interactivity (`'use client'` directive)
- Local state with hooks for modals, loading states
- Static data from `data/portfolio.ts` for content

## Data Structure

### Core Data Types
- **PortfolioVideo**: YouTube videos with metadata, testimonials, technologies
- **Skill**: Categorized skills with proficiency levels
- **Experience**: Professional history with achievements
- **Testimonial**: Client feedback with ratings and project links

### Portfolio Data Organization
```typescript
// Static data exports from data/portfolio.ts
export const portfolioVideos: PortfolioVideo[]     // Main video content
export const skills: Skill[]                       // Technical skills
export const experience: Experience[]              // Work history
export const testimonials: Testimonial[]           // Client reviews
export const companyMetrics                        // Business metrics
```

## Key Features & Patterns

### YouTube Integration
- **React YouTube**: Professional video embedding with custom controls
- **Video Modals**: Full-screen viewing experience with metadata
- **Thumbnail Management**: Error handling for missing/broken images

### Responsive Design
- **Tailwind CSS 4**: Latest version with modern features
- **Mobile-First**: Responsive navigation and layouts
- **Dark Theme**: Professional dark color scheme

### Animation System
- **Framer Motion**: Smooth transitions and micro-interactions
- **CSS Transitions**: Hover effects and state changes
- **Transform Effects**: Scale animations on component interaction

## Development Workflow

### File Organization
- Components organized by feature/domain (layout, portfolio, ui)
- Absolute imports using `@/*` path mapping
- Co-located types and utilities where relevant

### Styling Approach
- Tailwind utility classes for consistent design system
- Custom color palette (slate-based with blue accents)
- Component-level style composition with `cn()` utility

### Content Management
- Static data structure in TypeScript files
- Type-safe content with comprehensive interfaces
- Easy content updates through data files

## Configuration Notes

### Turbopack Integration
- **Development**: `next dev --turbopack` for faster builds
- **Production**: `next build --turbopack` for optimized output
- Significantly faster than Webpack in development

### ESLint 9 Configuration
- Flat config format (`eslint.config.mjs`)
- Next.js core-web-vitals and TypeScript rules
- Custom ignore patterns for build directories

### TypeScript Setup
- Strict mode enabled for type safety
- Next.js plugin integration
- Path mapping configured (`@/*` → `./src/*`)

## Multimedia-Specific Considerations

### Video Content Handling
- YouTube API integration for professional video embedding
- Metadata-rich video objects with categories, technologies, client info
- Testimonial integration directly with portfolio items

### Professional Portfolio Features
- **Category System**: Documentary, Podcast, Commercial, Creative, Showreel
- **Technology Tags**: Production tools and software used
- **Client Information**: Professional project attribution
- **Featured Content**: Highlighting best work

### Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for video thumbnails
- Efficient bundle splitting with App Router

## Common Patterns to Follow

1. **Component Structure**: Use TypeScript interfaces for props, implement proper accessibility
2. **Data Flow**: Import from `data/portfolio.ts`, type with interfaces from `types/index.ts`
3. **Styling**: Compose Tailwind classes with `cn()` utility for conditional styling
4. **State Management**: Use local state for UI, keep portfolio data static
5. **Error Handling**: Implement fallbacks for images, loading states for videos
