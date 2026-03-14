'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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
      className="relative py-16 md:py-24 bg-gradient-to-b from-background via-background to-muted transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              {BRANDING.name}
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium leading-tight text-foreground">
               Full-Stack Developer | Backend &amp; ML
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              I build backend-focused web applications with clean APIs, reliable data handling, and practical ML integration.
              I focus on production-ready engineering with maintainable architecture and clear system design.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground hover:bg-[hsl(var(--color-primary-hover))] px-6 py-3 rounded-xl transition-colors duration-300"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="border border-border text-muted-foreground px-6 py-3 rounded-xl hover:bg-muted transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-md bg-card border border-border transition-colors duration-300">
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
      <div className="absolute bottom-0 left-0 right-0 border-t border-border" />
    </motion.section>
  )
}
