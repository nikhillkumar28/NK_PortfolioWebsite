'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground"
            aria-label="Menu"
          >
            {/* Mobile menu icon will be added here */}
            <span className="h-[2px] w-3.5 rounded-full bg-muted-foreground" />
          </button>
        </div>
      </nav>
    </motion.header>
  )
}






