'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BRANDING } from '@/lib/branding'
import { TECH_STACK } from '@/lib/tech-stack'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image + About */}
          <motion.div
            variants={fadeInUp}
            className="text-center md:text-left"
          >
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="rounded-2xl border border-border/50 max-w-sm overflow-hidden bg-secondary/30">
                {!imageError ? (
                  <img
                    src="/profile.jpeg"
                    alt={BRANDING.name}
                    className="w-full h-auto object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center text-foreground/60 text-3xl font-medium">
                    {BRANDING.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                Hi , I am Nikhil Kumar 
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Pre-final year CS student specializing in full-stack development with a focus on backend engineering and AI integration. I build production-ready applications that solve real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Headline + Description + Tech Stack */}
          <motion.div
            variants={fadeInUp}
            className="text-center md:text-left"
          >
            {/* Small intro line */}
            <p className="text-sm text-muted-foreground mb-6">
              Hi, I'm {BRANDING.name}
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-6">
              Building scalable web applications<br />
              and <span className="text-primary">intelligent systems</span>.
            </h1>

            {/* Description Paragraph */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Pre-final year CS student focused on backend engineering, production APIs, and integrating AI into real-world products. I enjoy building reliable systems that solve meaningful problems.
            </p>

            {/* Tech Stack Section */}
            <div>
              <span className="text-sm text-muted-foreground font-medium">Tech Stack:</span>
              <div className="flex flex-wrap gap-3 mt-4">
                {['React', 'Next.js', 'Tailwind', 'FastAPI', 'NLP', 'ML'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={fadeInUp}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 rounded-full bg-card border border-border/50 text-foreground text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

