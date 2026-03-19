'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useTheme } from '@/components/providers/theme-provider'
import { Sun, Moon } from 'lucide-react'

interface HeaderProps {
  className?: string
}

const NAV_ITEMS = [
  { label: 'Home', href: '/#home' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience-achievements' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Contact', href: '/#contact' },
]

export function Header({ className }: HeaderProps) {
  // Theme context
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')

  const sectionIds = useMemo(
    () => NAV_ITEMS.map((item) => item.href.replace('/#', '')),
    []
  )

  useEffect(() => {
    const getActiveSection = () => {
      const offset = 120
      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top - offset <= 0) {
          current = id
        }
      }
      setActiveSection(current)
    }

    getActiveSection()
    window.addEventListener('scroll', getActiveSection, { passive: true })
    window.addEventListener('resize', getActiveSection)
    return () => {
      window.removeEventListener('scroll', getActiveSection)
      window.removeEventListener('resize', getActiveSection)
    }
  }, [sectionIds])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 ${className ?? ''}`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-5">
        <div className="flex items-center justify-between gap-3 rounded-full border border-border/80 bg-[hsl(var(--color-navbar))] px-3 sm:px-4 md:px-6 py-2.5 md:py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-[hsl(var(--color-navbar))] shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="min-w-0 flex items-center text-sm md:text-base font-medium tracking-tight text-foreground"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/80 text-[11px] mr-2">
              NK
            </span>
            <span className="align-middle truncate">Nikhil Kumar</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-5 text-sm text-foreground">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 ${
                  activeSection === item.href.replace('/#', '')
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                aria-current={activeSection === item.href.replace('/#', '') ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground hover:bg-card transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
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
