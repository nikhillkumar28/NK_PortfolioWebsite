'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BRANDING } from '@/lib/branding'
import { TECH_STACK } from '@/lib/tech-stack'
import { RotatingTitle } from '@/components/ui/rotating-title'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle, calm radial lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-60" />
        <div className="absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-96 w-96 rounded-full bg-accent/40 blur-3xl opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image & Name - Desktop */}
          <div className="hidden md:flex items-center gap-4 mb-8 text-left">
            <motion.div
              variants={fadeInUp}
              className="flex-shrink-0"
            >
              <div className="w-16 h-16 rounded-full border border-border/40 bg-secondary/30 overflow-hidden flex items-center justify-center">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt={BRANDING.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-foreground/60 text-lg font-medium">
                    {BRANDING.name.charAt(0)}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-base text-muted-foreground font-normal"
            >
              Hi, I'm <span className="text-foreground font-medium">{BRANDING.name}</span> —
            </motion.div>
          </div>

          {/* Name - Mobile */}
          <motion.div
            variants={fadeInUp}
            className="md:hidden text-center mb-6 text-sm text-muted-foreground font-normal"
          >
            Hi, I'm <span className="text-foreground font-medium">{BRANDING.name}</span> —
          </motion.div>

          <div className="text-center">
            {/* Greeting / Role Title */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 md:mb-10"
            >
              <h2 className="text-base md:text-lg text-foreground font-semibold tracking-wide">
                <RotatingTitle className="text-foreground font-semibold tracking-normal not-italic" />
              </h2>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] mb-8 md:mb-10 leading-[1.1] text-balance"
            >
              {BRANDING.headline}
            </motion.h1>

            {/* Tech Stack Strip */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-14 md:mb-16 text-xs md:text-sm"
            >
            <span className="text-muted-foreground font-normal">Tech Stack:</span>
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                className="px-2.5 py-1 rounded-md bg-secondary/40 border border-border/40 text-foreground/80 font-mono text-[11px] md:text-xs"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
            >
              <Button
                href="#projects"
                size="lg"
                className="w-full sm:w-auto min-w-[160px]"
              >
                View Projects
              </Button>
              <Button
                href="#github"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[160px]"
              >
                GitHub / Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

