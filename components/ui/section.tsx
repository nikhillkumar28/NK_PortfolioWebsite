'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLMotionProps<'section'> {
  title?: string
  subtitle?: string
  children: ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, title, subtitle, children, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        className={cn('py-16 md:py-24', className)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        {...props}
      >
        <div className="container mx-auto px-4">
          {(title || subtitle) && (
            <motion.div
              className="mb-10 md:mb-14 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title && (
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 md:mb-4 text-foreground">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}
          {children}
        </div>
      </motion.section>
    )
  }
)

Section.displayName = 'Section'

export { Section }






