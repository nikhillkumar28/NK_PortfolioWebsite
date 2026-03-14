'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLMotionProps<'div'> {
  hover?: boolean
  disableInitialAnimation?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, disableInitialAnimation = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'card-base p-4 md:p-5',
          hover && 'card-hover',
          className
        )}
        initial={disableInitialAnimation ? undefined : { opacity: 0, y: 20 }}
        whileInView={disableInitialAnimation ? undefined : { opacity: 1, y: 0 }}
        viewport={disableInitialAnimation ? undefined : { once: true }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
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






