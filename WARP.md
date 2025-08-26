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

### Mobile-Optimized Modal System
- **MobileModalManager**: Advanced modal component with mobile-first design
- **Scroll Lock Hook**: `useScrollLock` prevents background scroll with iOS optimizations
- **Touch Gestures**: Swipe-to-close functionality for mobile users
- **Focus Management**: Automatic focus trapping and restoration
- **Accessibility**: Full ARIA support and keyboard navigation

### YouTube Integration
- **React YouTube**: Professional video embedding with custom controls
- **Video Modals**: Mobile-optimized full-screen viewing experience with metadata
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

## Mobile Modal System Architecture

### Core Components

#### MobileModalManager (`src/components/ui/MobileModalManager.tsx`)
A comprehensive modal wrapper designed for mobile-first experiences:

```typescript
interface MobileModalManagerProps {
  isOpen: boolean;                    // Modal visibility state
  onClose: () => void;                // Close callback
  children: React.ReactNode;          // Modal content
  enableSwipeClose?: boolean;         // Enable swipe-to-close (default: true)
  swipeThreshold?: number;            // Swipe distance threshold (default: 150px)
  disableBackdropClose?: boolean;     // Disable click-outside-to-close
  modalClassName?: string;            // Custom modal styles
  ariaLabel?: string;                 // Accessibility label
  ariaDescribedBy?: string;          // ARIA description
}
```

**Key Features:**
- **Portal Rendering**: Renders outside component tree for proper z-index
- **Focus Management**: Traps focus within modal, restores on close
- **Touch Gestures**: Swipe down to close with velocity detection
- **Accessibility**: Full ARIA support, keyboard navigation
- **Animation**: Smooth enter/exit with Framer Motion

#### useScrollLock Hook (`src/hooks/useScrollLock.ts`)
Prevents background scrolling with mobile optimizations:

```typescript
interface ScrollLockOptions {
  preventTouch?: boolean;             // Handle touch events (iOS rubber banding)
  preserveScrollPosition?: boolean;   // Maintain scroll position
  allowScrollTarget?: HTMLElement;    // Allow scrolling within specific element
}
```

**Mobile Optimizations:**
- **iOS Rubber Banding**: Fixed positioning prevents bounce scrolling
- **Scroll Position**: Preserves and restores exact scroll position
- **Touch Handling**: Selective touch event prevention
- **Scrollbar Compensation**: Prevents layout shift on lock/unlock

### Usage Patterns

#### Basic Modal Implementation
```typescript
// VideoModal.tsx example
const VideoModal: React.FC<VideoModalProps> = ({ video, isOpen, onClose }) => {
  return (
    <MobileModalManager
      isOpen={isOpen}
      onClose={onClose}
      enableSwipeClose={true}
      ariaLabel={video.title}
      modalClassName="max-h-[90vh] overflow-y-auto"
    >
      {/* Modal content */}
      <div className="p-6">
        {/* Video player and details */}
      </div>
    </MobileModalManager>
  );
};
```

#### Custom Scroll Lock Usage
```typescript
const MyComponent = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { lock, unlock } = useScrollLock({
    preventTouch: true,
    preserveScrollPosition: true,
    allowScrollTarget: modalRef.current
  });
  
  // Use lock() and unlock() as needed
};
```

### Mobile-Specific CSS Classes

Added to `globals.css`:

```css
/* iOS Safari optimizations */
.momentum-scroll {
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

/* Prevent text selection during drag gestures */
.modal-drag-handle {
  -webkit-user-select: none;
  user-select: none;
  touch-action: pan-y;
}

/* Safe area handling for notched devices */
.safe-area-inset-top { padding-top: env(safe-area-inset-top); }
.safe-area-inset-bottom { padding-bottom: env(safe-area-inset-bottom); }

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

### Troubleshooting Common Issues

**Problem**: Modal doesn't prevent background scrolling on iOS
**Solution**: Ensure `preventTouch: true` is set in `useScrollLock` options

**Problem**: Scroll position jumps when modal opens/closes
**Solution**: Use `preserveScrollPosition: true` and check scrollbar compensation

**Problem**: Touch events interfere with modal content scrolling
**Solution**: Set `allowScrollTarget` to the scrollable container element

**Problem**: Modal appears behind other content
**Solution**: Adjust `zIndex` prop or check CSS z-index conflicts

**Problem**: Focus is lost when modal closes
**Solution**: Ensure proper focus restoration by storing `document.activeElement`

## Common Patterns to Follow

1. **Component Structure**: Use TypeScript interfaces for props, implement proper accessibility
2. **Data Flow**: Import from `data/portfolio.ts`, type with interfaces from `types/index.ts`
3. **Styling**: Compose Tailwind classes with `cn()` utility for conditional styling
4. **State Management**: Use local state for UI, keep portfolio data static
5. **Error Handling**: Implement fallbacks for images, loading states for videos
6. **Modal Usage**: Always use `MobileModalManager` for modal components, never basic overlays
7. **Mobile Testing**: Test thoroughly on actual mobile devices, not just browser dev tools
