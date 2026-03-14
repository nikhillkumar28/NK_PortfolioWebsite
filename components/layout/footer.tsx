'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

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
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 border-t border-border text-muted-foreground text-sm">
        <div className="flex flex-col items-center gap-3 text-center">
          <p>Nikhil Kumar</p>
          <p>(c) {new Date().getFullYear()} Nikhil Kumar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nikhillkumar28"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors duration-300"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/nikhillkumar28"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors duration-300"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:nikhilkumarnik28@gmail.com"
              aria-label="Email"
              className="hover:text-primary transition-colors duration-300"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
