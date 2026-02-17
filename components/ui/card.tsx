'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLMotionProps<'div'> {
  hover?: boolean
  disableInitialAnimation?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, disableInitialAnimation = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl border border-border bg-secondary/30 p-4 md:p-5 shadow-sm transition-all duration-200',
          hover && 'hover:border-primary/30',
          className
        )}
        whileHover={
          hover
            ? {
                y: -4,
                transition: { duration: 0.2, ease: 'easeOut' },
              }
            : undefined
        }
        animate={{
          boxShadow: isHovered && hover
            ? '0 8px 12px -2px rgb(0 0 0 / 0.15), 0 2px 4px -1px rgb(0 0 0 / 0.1)'
            : '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        }}
        onHoverStart={() => hover && setIsHovered(true)}
        onHoverEnd={() => hover && setIsHovered(false)}
        initial={disableInitialAnimation ? undefined : { opacity: 0, y: 20 }}
        whileInView={disableInitialAnimation ? undefined : { opacity: 1, y: 0 }}
        viewport={disableInitialAnimation ? undefined : { once: true }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          boxShadow: { duration: 0.2, ease: 'easeOut' },
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export { Card }






