'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { fadeInUpHeading } from '@/lib/animations'

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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {(title || subtitle) && (
            <motion.div
              className="mb-12 text-left"
              variants={fadeInUpHeading}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              {title && (
                <h2 className="text-3xl font-medium tracking-tight mb-4 md:mb-5 text-foreground">
                  {title}
                </h2>
              )}
              {subtitle && (
                <motion.p
                  className="subtitle leading-relaxed"
                  variants={fadeInUpHeading}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {subtitle}
                </motion.p>
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






