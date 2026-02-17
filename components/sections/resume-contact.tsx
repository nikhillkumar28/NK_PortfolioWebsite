'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { fadeInUp } from '@/lib/animations'
import { FiFileText, FiGithub, FiLinkedin, FiMail, FiCalendar } from 'react-icons/fi'

export function ResumeContact() {
  return (
    <Section
      id="contact"
      title="Resume & Contact"
      subtitle="Let's connect"
      className="pt-0"
    >
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        {/* Availability Banner */}
        <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-1">
            <FiCalendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Currently Available</span>
          </div>
          <p className="text-sm text-foreground/80">
            Open to <span className="font-medium">Summer 2026 Internship</span> or <span className="font-medium">6-month Internship</span> roles
          </p>
        </div>

        {/* Primary CTA: Resume */}
        <div className="flex justify-center mb-6">
          <Button
            href="/resume.pdf"
            variant="primary"
            size="lg"
            className="min-w-[260px]"
          >
            <FiFileText className="w-4 h-4 mr-2" />
            View 1-Page Internship Resume
          </Button>
        </div>

        {/* Prominent GitHub & LinkedIn */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
          <a
            href="https://github.com/nikhillkumar28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border/50 hover:bg-secondary/80 hover:border-primary/30 transition-all shadow-sm hover:shadow-md group"
          >
            <FiGithub className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">View source code & contributions</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/nikhillkumar28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border/50 hover:bg-secondary/80 hover:border-primary/30 transition-all shadow-sm hover:shadow-md group"
          >
            <FiLinkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">Connect & message me</p>
            </div>
          </a>
        </div>

        {/* Email - Secondary */}
        <div className="text-center">
          <a
            href="mailto:nikhilkumarnik28@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <FiMail className="w-4 h-4" />
            <span>nikhilkumarnik28@gmail.com</span>
          </a>
        </div>
      </motion.div>
    </Section>
  )
}























