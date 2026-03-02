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
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300"
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

            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              I build backend-focused web applications with clean APIs, reliable data handling, and practical ML integration.
              I focus on production-ready engineering with maintainable architecture and clear system design.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="border border-slate-700 text-slate-900 dark:text-slate-100 px-6 py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
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
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800" />
    </motion.section>
  )
}

