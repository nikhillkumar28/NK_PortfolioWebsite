'use client'

import { motion } from 'framer-motion'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className="container mx-auto px-4 py-8 border-t border-border/60">
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs md:text-sm text-muted-foreground md:flex-row">
          <p className="order-2 md:order-1">
            Built with Next.js, TypeScript, and a focus on real-world AI &amp; full-stack work.
          </p>
          <p className="order-1 md:order-2">
            © {new Date().getFullYear()} AI/ML Portfolio
          </p>
        </div>
      </div>
    </motion.footer>
  )
}






