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
          'rounded-xl border !border-slate-200 dark:!border-slate-800 !bg-slate-100 dark:!bg-slate-900 p-4 md:p-5 shadow-sm',
          hover && 'hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300',
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






