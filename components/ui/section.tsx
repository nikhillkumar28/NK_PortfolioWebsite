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
        className={cn('py-16 md:py-20 lg:py-24', className)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4 }}
        {...props}
      >
        <div className="container mx-auto px-4">
          {(title || subtitle) && (
            <motion.div
              className="mb-12 md:mb-16 lg:mb-20 text-center"
              variants={fadeInUpHeading}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              {title && (
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 md:mb-5 text-foreground">
                  {title}
                </h2>
              )}
              {subtitle && (
                <motion.p
                  className="subtitle text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
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






