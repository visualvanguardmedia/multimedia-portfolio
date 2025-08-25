# 🎬 Visual Vanguard Media - Multimedia Portfolio

![Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)

A professional multimedia portfolio website showcasing video production, cinematography, and creative multimedia capabilities. Built with Next.js 15, TypeScript, and modern web technologies for optimal performance and user experience.

## ✨ Features

- 🎥 **YouTube Integration**: Professional video embedding with custom modal player
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- ⚡ **Performance Optimized**: Static export with Turbopack for lightning-fast builds
- 🎨 **Modern UI**: Clean, professional design with Framer Motion animations
- 📊 **Portfolio Showcase**: Comprehensive display of work, skills, and testimonials
- 🔍 **SEO Ready**: Optimized for search engines and social sharing

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|----------|
| **Next.js** | 15.5.0 | React framework with App Router |
| **React** | 19.1.0 | UI library |
| **TypeScript** | ^5.0 | Type safety |
| **Tailwind CSS** | ^4.0 | Utility-first styling |
| **Framer Motion** | ^12.23.12 | Animations |
| **React YouTube** | ^10.1.0 | Video embedding |
| **Lucide React** | ^0.541.0 | Icon system |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Navigation components
│   ├── portfolio/         # Video cards & modals
│   ├── sections/          # Page sections
│   └── ui/                # Reusable components
├── data/
│   └── portfolio.ts       # Portfolio content
├── lib/
│   └── utils.ts          # Utility functions
└── types/
    └── index.ts          # TypeScript interfaces
```

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `out/` folder** to Netlify via:
   - Drag & drop the `out/` directory
   - Or connect your GitHub repository with build settings:
     - Build command: `npm run build`
     - Publish directory: `out`

### Other Platforms

The project is configured for static export and works with:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🎨 Customization

### Portfolio Content
Update your portfolio data in `src/data/portfolio.ts`:

```typescript
export const portfolioVideos: PortfolioVideo[] = [
  // Add your videos here
];

export const skills: Skill[] = [
  // Add your skills here
];
```

### Styling
Customize colors and styling in:
- `src/app/globals.css` - Global styles
- Tailwind classes throughout components
- Update color scheme in Tailwind config

## 📄 License

**This project is proprietary software** - see the [LICENSE](LICENSE) file for complete terms.

**All Rights Reserved**: This code, design, content, and business information is the exclusive property of Visual Vanguard Media. Unauthorized copying, distribution, or commercial use is strictly prohibited.

**Portfolio Use Only**: This repository is available for portfolio demonstration and technical assessment purposes only.

## 🚫 Usage Restrictions

**This code may NOT be:**
- Copied or redistributed
- Used for commercial purposes
- Modified or used as a template
- Used to create competing services

**For licensing inquiries**, contact Visual Vanguard Media directly.

## 📞 Contact

For inquiries about the multimedia content or professional services, please visit the portfolio website or contact Visual Vanguard Media directly.

---

**Built with ❤️ for showcasing professional multimedia work**
