'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getRoleTitleByIndex } from '@/lib/branding'

interface RotatingTitleProps {
  interval?: number
  className?: string
}

export function RotatingTitle({ interval = 3000, className }: RotatingTitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  const currentTitle = getRoleTitleByIndex(currentIndex)

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="inline-block"
        >
          {currentTitle}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

