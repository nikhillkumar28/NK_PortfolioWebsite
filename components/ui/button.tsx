'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'as'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const MotionLink = motion(Link)

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_18px_40px_rgba(37,99,235,0.35)]',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline:
        'border border-border bg-transparent text-foreground hover:bg-accent/60 hover:text-accent-foreground',
      ghost: 'text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground',
    }

    const sizes = {
      sm: 'h-9 px-4 text-xs md:text-sm',
      md: 'h-10 px-5 text-sm md:text-base',
      lg: 'h-11 px-7 text-sm md:text-base',
    }

    const motionProps = {
      className: cn(baseStyles, variants[variant], sizes[size], className),
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2 },
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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }

