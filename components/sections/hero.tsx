'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { BRANDING } from '@/lib/branding'

export function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative py-16 bg-gradient-to-b from-background via-background to-muted transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5 text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
              {BRANDING.name}
            </h1>

            <p className="text-lg md:text-xl font-medium tracking-wide text-gray-400">
              Full-Stack Developer | Backend &amp; ML
            </p>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-foreground max-w-2xl mx-auto md:mx-0 text-balance">
              <span className="block">
                Building scalable{' '}
                <span className="bg-gradient-to-r from-primary/80 to-primary/40 dark:from-primary dark:to-primary/70 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(99,102,241,0.35)]">
                  backend
                </span>{' '}
                systems
              </span>
              <span className="block">
                with real-world{' '}
                <span className="bg-gradient-to-r from-primary/80 to-primary/40 dark:from-primary dark:to-primary/70 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(99,102,241,0.35)]">
                  ML integration
                </span>
                .
              </span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-xl mx-auto md:mx-0">
              <span className="block">Focused on designing scalable APIs, intelligent systems, and production-ready applications.</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/nikhillkumar28"
                className="bg-primary text-primary-foreground hover:bg-[hsl(var(--color-primary-hover))] px-6 py-3 rounded-xl transition-colors duration-300"
              >
                Explore My Work
              </a>
              <a
                href="/resume.pdf"
                className="border border-border text-foreground px-6 py-3 rounded-xl hover:border-primary hover:text-primary transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 text-foreground mt-2">
              <a
                href="https://github.com/nikhillkumar28"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[hsl(var(--color-outline))] bg-[hsl(var(--color-card))] shadow-sm hover:border-primary/60 hover:text-primary hover:shadow-md transition-all duration-200 ease-in-out"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhillkumar28"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[hsl(var(--color-outline))] bg-[hsl(var(--color-card))] shadow-sm hover:border-primary/60 hover:text-primary hover:shadow-md transition-all duration-200 ease-in-out"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:nikhilkumarnik28@gmail.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[hsl(var(--color-outline))] bg-[hsl(var(--color-card))] shadow-sm hover:border-primary/60 hover:text-primary hover:shadow-md transition-all duration-200 ease-in-out"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <div className="w-72 rounded-full overflow-hidden bg-card border-4 border-primary/30 shadow-xl shadow-primary/20 transition duration-300 hover:scale-105">
              {!imageError ? (
                <img
                  src="/profile.jpeg"
                  alt={BRANDING.name}
                  className="block w-full max-h-[360px] object-cover object-center mx-auto"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center text-foreground/60 text-3xl font-medium">
                  {BRANDING.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </motion.section>
  )
}
