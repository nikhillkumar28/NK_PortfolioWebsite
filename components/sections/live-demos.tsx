'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUpCard, fadeInUp, staggerContainer } from '@/lib/animations'
import {
  SiStreamlit,
  SiFastapi,
  SiVercel,
  SiDocker,
  SiTensorflow,
  SiPytorch,
} from 'react-icons/si'
import { FiExternalLink, FiActivity, FiServer, FiZap } from 'react-icons/fi'

type DemoType = 'streamlit' | 'fastapi' | 'webapp'

interface LiveDemo {
  title: string
  description: string
  whyItMatters: string // Recruiter-focused impact statement
  demoUrl: string
  demoType: DemoType
  appNature: 'API' | 'Web App' | 'ML Interface' // Clear system type
  modelType?: string // For AI-based demos
  deployment: {
    platform: string // e.g., "AWS", "Vercel", "Streamlit Cloud"
    infra?: string // e.g., "Docker", "Serverless"
  }
  status: 'live' | 'demo'
  githubUrl?: string
}

const DEMOS: LiveDemo[] = [
  {
    title: 'Hindi Next Word Prediction',
    description:
      'LSTM-based language model serving real-time predictions for Hindi text. Trained on Hindi corpus with custom tokenization for Unicode handling.',
    whyItMatters:
      'End-to-end NLP: data preprocessing, model training, inference optimization, cloud deployment.',
    demoUrl: '#',
    demoType: 'streamlit',
    appNature: 'ML Interface',
    modelType: 'LSTM Neural Network',
    deployment: {
      platform: 'Streamlit Cloud',
    },
    status: 'live',
    githubUrl: '#',
  },
  {
    title: 'PetBot API',
    description:
      'RESTful API with rate limiting, input validation, and structured JSON responses. Fine-tuned GPT-2 handles intent detection and response generation.',
    whyItMatters:
      'Production API patterns: containerized deployment, health checks, structured logging, error handling.',
    demoUrl: '#',
    demoType: 'fastapi',
    appNature: 'API',
    modelType: 'Fine-tuned GPT-2',
    deployment: {
      platform: 'AWS',
      infra: 'Docker',
    },
    status: 'live',
    githubUrl: '#',
  },
  {
    title: 'Full-Stack Blog Platform',
    description:
      'Next.js app with JWT authentication, PostgreSQL database, role-based access control, and SSR for SEO. Automated deployments via GitHub Actions.',
    whyItMatters:
      'Full-stack ownership: auth system, database schema, REST API, frontend, CI/CD pipeline.',
    demoUrl: '#',
    demoType: 'webapp',
    appNature: 'Web App',
    deployment: {
      platform: 'Vercel',
      infra: 'Serverless',
    },
    status: 'live',
    githubUrl: '#',
  },
]

const demoTypeConfig = {
  streamlit: {
    icon: SiStreamlit,
    label: 'Streamlit',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10 border-red-500/20',
  },
  fastapi: {
    icon: SiFastapi,
    label: 'FastAPI',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10 border-green-500/20',
  },
  webapp: {
    icon: FiServer,
    label: 'Web App',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10 border-blue-500/20',
  },
}

export function LiveDemos() {
  return (
    <Section
      id="demos"
      title="Live Demos"
      subtitle="Production systems running in the cloud — test them now"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
      >
        {DEMOS.map((demo) => {
          const DemoIcon = demoTypeConfig[demo.demoType].icon
          const demoConfig = demoTypeConfig[demo.demoType]

          return (
            <motion.div key={demo.title} variants={fadeInUpCard}>
              <Card disableInitialAnimation className="h-full flex flex-col p-0 overflow-hidden group relative">
                {/* Live Status Indicator */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-primary">
                      {demo.status === 'live' ? 'LIVE' : 'DEMO'}
                    </span>
                  </motion.div>
                </div>

                {/* Demo Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border ${demoConfig.bgColor} backdrop-blur-sm shadow-sm`}
                  >
                    <DemoIcon className={`w-3.5 h-3.5 ${demoConfig.color}`} />
                    <span className={`text-xs font-medium ${demoConfig.color}`}>
                      {demoConfig.label}
                    </span>
                  </div>
                </div>

                <div className="p-5 pt-16 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {demo.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground mb-3 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Why It Matters - Recruiter-focused impact */}
                  <p className="text-xs text-foreground/70 italic mb-4 leading-relaxed">
                    <span className="font-medium not-italic text-foreground/90">Why this matters:</span>{' '}
                    {demo.whyItMatters}
                  </p>

                  {/* Deployment & System Info Strip */}
                  <div className="mb-4 p-3 rounded-xl bg-secondary/30 border border-border/50 shadow-sm">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                      {/* App Nature */}
                      <div className="flex items-center gap-1.5">
                        <FiServer className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="font-medium text-foreground">{demo.appNature}</span>
                      </div>
                      {/* Cloud Platform */}
                      <div className="flex items-center gap-1.5">
                        <FiActivity className="w-3.5 h-3.5 text-primary" />
                        <span className="text-muted-foreground">
                          {demo.deployment.platform}
                          {demo.deployment.infra && ` (${demo.deployment.infra})`}
                        </span>
                      </div>
                      {/* AI Model (if present) */}
                      {demo.modelType && (
                        <div className="flex items-center gap-1.5">
                          <FiZap className="w-3.5 h-3.5 text-primary" />
                          <span className="text-muted-foreground">{demo.modelType}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <Button
                      href={demo.demoUrl}
                      variant="primary"
                      size="sm"
                      className="w-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink className="w-4 h-4 mr-1.5" />
                      Open Live Demo
                    </Button>
                    {demo.githubUrl && (
                      <Button
                        href={demo.githubUrl}
                        variant="outline"
                        size="sm"
                        className="w-full"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Source Code
                      </Button>
                    )}
                  </div>
                </div>

                {/* Subtle gradient overlay for "live" feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Credibility Footer */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <FiActivity className="w-4 h-4 text-primary" />
            All demos are production-ready, deployed systems
          </span>
          {' • '}
          <span>Not mockups or prototypes</span>
        </p>
      </motion.div>
    </Section>
  )
}

