# Portfolio Website

A modern, high-performance portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack 

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```
Portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── ui/               # UI components (Button, Card, Section)
│   └── providers/        # Context providers
├── lib/                  # Utility functions
│   ├── utils.ts          # Utility functions (cn, etc.)
│   └── animations.ts     # Framer Motion animation presets
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

Getting Started
Features

-  Dark mode by default
-  SEO-friendly metadata
-  Smooth animations with Framer Motion
-  Responsive design
-  TypeScript support
-  Scalable component architecture
-  Custom hooks for common patterns

## Component Architecture

### Layout Components
- `Header` - Navigation header with smooth animations
- `Footer` - Footer component

### UI Components
- `Button` - Animated button with multiple variants
- `Card` - Card component with hover effects
- `Section` - Section wrapper with animation support

### Providers
- `ThemeProvider` - Theme context provider (dark/light mode)

## Customization

The portfolio is designed to be easily customizable. Update the following:
- Metadata in `app/layout.tsx`
- Color scheme in `app/globals.css`
- Animation presets in `lib/animations.ts`
- Component styles in `components/ui/`

























