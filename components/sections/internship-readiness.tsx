'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { FiCheck, FiTarget } from 'react-icons/fi'

const READINESS_POINTS = [
  {
    title: 'Navigate unfamiliar codebases',
    description: 'Read and understand existing code, trace execution flow, identify patterns, and contribute without extensive onboarding.',
  },
  {
    title: 'Build production-grade APIs',
    description: 'Designed RESTful endpoints with JWT auth, request validation, error handling, rate limiting, and proper status codes.',
  },
  {
    title: 'Debug systematically',
    description: 'Trace issues using logs, stack traces, and debuggers. Isolate problems methodically rather than guessing.',
  },
  {
    title: 'Deploy and maintain services',
    description: 'Containerize with Docker, configure CI/CD pipelines, manage environment variables, and monitor deployed systems.',
  },
  {
    title: 'Apply CS fundamentals',
    description: 'Analyze time/space complexity, choose appropriate data structures, and write efficient algorithms for real problems.',
  },
  {
    title: 'Ship ML to production',
    description: 'Train models, evaluate with proper metrics, handle overfitting, and serve predictions via low-latency APIs.',
  },
]

export function InternshipReadiness() {
  return (
    <Section
      id="internship-readiness"
      title="Internship Readiness"
      subtitle="What I bring to your team from day one"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div variants={fadeInUp}>
          <Card className="p-5 md:p-6 bg-primary/5 border-primary/20">
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 shadow-sm">
                <FiTarget className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  Prepared to contribute from week one
                </h3>
                <p className="text-xs text-muted-foreground">
                  I've deployed production systems — I understand code reviews, testing, and shipping deadlines.
                </p>
              </div>
            </div>

            {/* Readiness Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {READINESS_POINTS.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex gap-3 p-3 rounded-xl bg-background/50 border border-border/50 shadow-sm"
                >
                  <div className="shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-sm">
                      <FiCheck className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-0.5">
                      {point.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-5 pt-4 border-t border-border/50 text-center">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">Looking for:</span>{' '}
                Backend, Full-Stack, or Applied AI/ML internship roles
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  )
}
