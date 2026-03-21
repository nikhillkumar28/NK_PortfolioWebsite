'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUpCard, staggerContainer } from '@/lib/animations'
import { FiExternalLink } from 'react-icons/fi'

interface Certification {
  title: string
  organization: string
  year?: number
  credentialUrl?: string
}

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Bits and Bytes of Computer Networking',
    organization: 'Google',
    year: 2024,
    credentialUrl: 'https://coursera.org/share/fea9274c8cace812b4abd75dcbe9eb10',
  },
  {
    title: 'Master Generative AI & Generative AI Tools',
    organization: 'Udemy',
    year: 2025,
    credentialUrl: 'https://drive.google.com/file/d/1jXXurAGVyaeEWuinvoB_pPlFri2jr41O/view?usp=sharing',
  },
  {
    title: 'Introduction to Hardware & Operating Systems',
    organization: 'IBM',
    year: 2024,
    credentialUrl: 'https://coursera.org/share/e4a5724630c4e49e8fa634bed31df7a7',
  },
  {
    title: 'Python',
    organization: 'HackerRank',
    year: 2026,
    credentialUrl: 'https://www.hackerrank.com/certificates/fc5b556bbcc3',
  },
  {
    title: 'Cloud Computing',
    organization: 'NPTEL',
    year: 2025,
    credentialUrl: 'https://drive.google.com/file/d/1z2hzk2-J4H1jRNzOhq17XuHNfuG52WPR/view?usp=sharing',
  },
  {
    title: 'JavaScript',
    organization: 'HackerRank',
    year: 2026,
    credentialUrl: 'https://www.hackerrank.com/certificates/6bda1378be52',
  }
]

export function IndustryCertifications() {
  return (
    <Section 
      id="certifications" 
      title="Industry Certifications" 
      subtitle="Professional certifications validating technical expertise"
      className="pt-6"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {CERTIFICATIONS.map((certification) => (
          <motion.div key={certification.title} variants={fadeInUpCard}>
              <Card disableInitialAnimation>
                {/* Certification Header */}
                <div className="mb-4">
                <h3 className="text-lg md:text-xl font-medium text-foreground leading-tight mb-1 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                  {certification.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{certification.organization}</span>
                  {certification.year && (
                    <span className="text-foreground/60">• {certification.year}</span>
                  )}
                </div>
              </div>

              {/* View Credential Button */}
              {certification.credentialUrl && (
                <div className="mt-auto">
                  <Button
                    href={certification.credentialUrl}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <FiExternalLink className="w-3.5 h-3.5 mr-2" />
                    View Credential
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
