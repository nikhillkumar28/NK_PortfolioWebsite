'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'
import { forwardRef, useState } from 'react'
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
    const [isHovered, setIsHovered] = useState(false)

    const baseStyles =
      'inline-flex items-center justify-center rounded-xl font-medium tracking-tight transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary:
        'bg-primary text-primary-foreground hover:bg-primary/90 border border-primary shadow-sm',
      secondary:
        'bg-transparent text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary',
      outline:
        'bg-transparent text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary',
      ghost: 'text-muted-foreground hover:text-foreground hover:bg-accent/10 border border-transparent',
    }

    const sizes = {
      sm: 'h-9 px-4 text-xs md:text-sm',
      md: 'h-10 px-5 text-sm md:text-base',
      lg: 'h-11 px-7 text-sm md:text-base',
    }

    // Subtle shadow only on hover
    const getHoverShadow = () => {
      if (!isHovered) return '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
      if (variant === 'primary') {
        return '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      }
      if (variant === 'outline' || variant === 'secondary') {
        return '0 2px 4px -1px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
      }
      return '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
    }

    const motionProps = {
      className: cn(baseStyles, variants[variant], sizes[size], className),
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
      animate: {
        boxShadow: getHoverShadow(),
      },
      transition: {
        duration: 0.15,
        ease: 'easeOut',
      },
      whileTap: {
        scale: 0.98,
        transition: { duration: 0.1 },
      },
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
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          boxShadow: getHoverShadow(),
        }}
        transition={{
          duration: 0.15,
          ease: 'easeOut',
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.1 },
        }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }

