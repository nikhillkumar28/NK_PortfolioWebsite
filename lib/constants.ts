// Site configuration constants
export const SITE_CONFIG = {
  name: 'Portfolio',
  title: 'AI/ML Developer Portfolio',
  description: 'Portfolio of an AI, NLP, and ML developer specializing in building and deploying real machine learning models.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.example.com',
  author: 'AI/ML Developer',
} as const

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

// Social links placeholder
export const SOCIAL_LINKS = [
  // { platform: 'GitHub', url: 'https://github.com/username' },
  // { platform: 'LinkedIn', url: 'https://linkedin.com/in/username' },
  // { platform: 'Twitter', url: 'https://twitter.com/username' },
] as const






















