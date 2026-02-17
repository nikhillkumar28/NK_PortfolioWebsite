'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/components/providers/theme-provider'
import { FiSun, FiMoon } from 'react-icons/fi'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  // Gracefully handle theme context
  let theme: 'dark' | 'light' = 'dark'
  let toggleTheme: () => void = () => {}
  
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
    toggleTheme = themeContext.toggleTheme
  } catch (error) {
    // Theme provider not available, use default
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      <nav className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between border border-border/60 rounded-full bg-background/70 px-4 md:px-6 py-2.5 md:py-3 backdrop-blur-lg">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-sm md:text-base font-semibold tracking-tight text-foreground"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/80 text-[11px] mr-2">
              AI
            </span>
            <span className="align-middle">Portfolio</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {/* Navigation items will be added here */}
          </div>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:bg-accent/10 hover:text-foreground transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FiSun className="h-4 w-4" />
              ) : (
                <FiMoon className="h-4 w-4" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground"
              aria-label="Menu"
            >
              {/* Mobile menu icon will be added here */}
              <span className="h-[2px] w-3.5 rounded-full bg-muted-foreground" />
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}






