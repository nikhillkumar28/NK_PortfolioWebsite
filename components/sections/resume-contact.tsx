'use client'

import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export function ResumeContact() {
  return (
    <Section
      id="contact"
      title="Resume & Contact"
      subtitle="Quick ways to review my work and get in touch"
      className="pt-0"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-center">
          <Button
            href="/resume.pdf"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto min-w-[180px]"
          >
            <FiDownload className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Secondary links */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <Button
            href="https://github.com/your-username"
            variant="outline"
            size="sm"
            className="min-w-[140px]"
          >
            <FiGithub className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            href="https://linkedin.com/in/your-username"
            variant="outline"
            size="sm"
            className="min-w-[140px]"
          >
            <FiLinkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button
            href="mailto:your.email@example.com"
            variant="outline"
            size="sm"
            className="min-w-[160px]"
          >
            <FiMail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
        </div>
      </div>
    </Section>
  )
}




















