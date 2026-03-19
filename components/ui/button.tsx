'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'as'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
}

const MotionLink = motion(Link)

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-xl font-medium tracking-tight transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 hover:shadow-lg active:scale-95'

    const variants = {
      primary:
        'bg-primary text-white border border-primary',
      secondary:
        'bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary',
      outline:
        'bg-transparent text-foreground border border-[hsl(var(--color-outline))] hover:border-primary hover:text-primary',
      ghost:
        'text-primary hover:text-primary hover:bg-muted border border-transparent',
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs md:text-sm',
      md: 'px-6 py-2 text-sm md:text-base',
      lg: 'px-7 py-2.5 text-sm md:text-base',
    }

    const motionProps = {
      className: cn(baseStyles, variants[variant], sizes[size], className),
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      transition: { duration: 0.2, ease: 'easeInOut' },
    }

    if (href) {
      return (
        <MotionLink
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...motionProps}
          {...(props as any)}
        >
          {children}
        </MotionLink>
      )
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }

