# Mikasasoft

> Building Defenses, Breaking Boundaries

A premium, luxury company profile website with subtle Attack on Titan theme elements, built with Next.js 14 and modern web technologies.

## 🎯 Overview

Mikasasoft is a high-end corporate website featuring:

- **Premium Design System** - Glassmorphism, gradient meshes, and sophisticated animations
- **AOT-Inspired Aesthetics** - Military brass, Survey Corps emerald, and titan crimson palette
- **Data-Driven Architecture** - Fully dynamic content powered by JSON schemas
- **Advanced Animations** - GSAP, Framer Motion, Three.js, and particle systems
- **Exceptional UX** - Smooth scroll, magnetic cursors, and micro-interactions

## 🚀 Tech Stack

### Core
- **Next.js 14** - App Router, SSR, and optimal performance
- **TypeScript** - Full type safety across the stack
- **Tailwind CSS** - Utility-first styling with custom theme

### Animations & Effects
- **Framer Motion** - Smooth React animations
- **GSAP + ScrollTrigger** - Advanced scroll-based animations
- **Three.js** - 3D effects and interactive elements
- **Lenis** - Smooth scrolling experience

### UI Components
- **shadcn/ui** - Accessible, customizable components
- **Radix UI** - Unstyled, accessible primitives
- **Lucide React** - Beautiful icon library

### Development
- **React Hook Form + Zod** - Form handling and validation
- **ESLint + Prettier** - Code quality and formatting
- **pnpm** - Fast, efficient package management

## 🎨 Premium Color Palette

### Dark Theme (Primary)
```
Background Layers:
- Deep Midnight: #0A0E12
- Obsidian: #141821
- Graphite: #1E2530
- Slate: #2A3441

Brand Colors:
- Survey Corps Emerald: #2D5F4C
- Military Brass: #B8945F
- Titan Crimson: #8B2635
- Steel Sage: #5A6D6A

Text Colors:
- Pure White: #FFFFFF
- Platinum: #E8E8E8
- Silver: #B8BCC4
- Ash: #7A8088
```

## 📁 Project Structure

```
mikasasoft/
├── src/
│   ├── app/              # Next.js 14 App Router
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About page
│   │   ├── services/     # Services page
│   │   ├── portfolio/    # Portfolio & projects
│   │   ├── blog/         # Blog system
│   │   ├── careers/      # Careers page
│   │   └── contact/      # Contact page
│   │
│   ├── components/
│   │   ├── ui/           # Base UI components (shadcn/ui)
│   │   ├── common/       # Reusable components
│   │   ├── sections/     # Page-specific sections
│   │   └── providers/    # Context providers
│   │
│   ├── lib/
│   │   ├── utils/        # Utility functions
│   │   ├── hooks/        # Custom React hooks
│   │   ├── data/         # Data fetchers and parsers
│   │   └── constants/    # App constants
│   │
│   ├── types/            # TypeScript definitions
│   ├── styles/           # Global styles
│   └── data/             # JSON data files
│
├── public/
│   └── assets/           # Images, videos, 3D models
└── ...config files
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mikasasoft

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier
```

## 🎭 Key Features

### Premium UI Components
- **Glass Morphism Cards** - Frosted glass effect with backdrop blur
- **Magnetic Buttons** - Interactive hover effects
- **3D Tilt Effects** - Mouse-responsive card tilting
- **Animated Counters** - Scroll-triggered number animations
- **Particle Systems** - Dynamic background effects
- **Custom Cursor** - Gradient ring cursor follower

### Advanced Animations
- **Page Transitions** - Smooth route changes
- **Scroll Reveals** - Elements animate into view
- **Parallax Effects** - Multi-depth scrolling
- **Gradient Mesh** - Animated background gradients
- **Stagger Animations** - Sequential element reveals

### Responsive Design
- Mobile-first approach
- Touch-optimized interactions
- Adaptive layouts for all screen sizes
- Performance-conscious mobile animations

## 🗂️ Data Architecture

All content is managed through JSON files in `/src/data`:

- `site-config.json` - Global site configuration
- `homepage.json` - Homepage sections
- `services.json` - Service offerings
- `projects.json` - Portfolio projects
- `team.json` - Team members
- `blog/posts.json` - Blog articles
- `careers/jobs.json` - Job listings
- `contact.json` - Contact information

### Type Safety
Every data schema has corresponding TypeScript interfaces for full type safety.

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML5 structure
- Keyboard navigation support
- Screen reader optimized
- Reduced motion support (`prefers-reduced-motion`)
- High contrast mode

## 🚀 Performance

Target Metrics:
- Lighthouse Score: 90+
- Largest Contentful Paint (LCP): <2s
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1

Optimizations:
- Image optimization (WebP/AVIF)
- Code splitting and lazy loading
- Tree shaking and bundle optimization
- GPU-accelerated animations

## 📄 License

[Add your license here]

## 🤝 Contributing

[Add contribution guidelines]

---

**Built with precision. Designed with passion.**

*Inspired by the walls that protect, built to break boundaries.*
