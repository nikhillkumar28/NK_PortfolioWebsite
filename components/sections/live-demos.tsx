'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
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
  demoUrl: string
  demoType: DemoType
  modelType?: string // For AI-based demos
  deployment?: string // e.g., "Vercel", "Streamlit Cloud", "AWS"
  status: 'live' | 'demo'
  githubUrl?: string
}

const DEMOS: LiveDemo[] = [
  {
    title: 'Hindi Next Word Prediction',
    description:
      'Interactive NLP demo that predicts the next word in Hindi sentences using a trained LSTM model. Enter Hindi text and see real-time predictions.',
    demoUrl: '#',
    demoType: 'streamlit',
    modelType: 'LSTM Neural Network',
    deployment: 'Streamlit Cloud',
    status: 'live',
    githubUrl: '#',
  },
  {
    title: 'PetBot API',
    description:
      'RESTful API serving an AI chatbot for pet care advice. Test the endpoints with sample queries and see the model responses.',
    demoUrl: '#',
    demoType: 'fastapi',
    modelType: 'Fine-tuned GPT-2',
    deployment: 'Docker + AWS',
    status: 'live',
    githubUrl: '#',
  },
  {
    title: 'Full-Stack Blog Platform',
    description:
      'Production-ready blog website with authentication, content management, and real-time updates. Fully deployed and accessible.',
    demoUrl: '#',
    demoType: 'webapp',
    deployment: 'Vercel',
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
      subtitle="Working, deployed systems you can interact with right now"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
      >
        {DEMOS.map((demo) => {
          const DemoIcon = demoTypeConfig[demo.demoType].icon
          const demoConfig = demoTypeConfig[demo.demoType]

          return (
            <motion.div key={demo.title} variants={fadeInUp}>
              <Card className="h-full flex flex-col p-0 overflow-hidden group relative">
                {/* Live Status Indicator */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/40 backdrop-blur-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-green-400">
                      {demo.status === 'live' ? 'LIVE' : 'DEMO'}
                    </span>
                  </motion.div>
                </div>

                {/* Demo Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${demoConfig.bgColor} backdrop-blur-sm`}
                  >
                    <DemoIcon className={`w-3.5 h-3.5 ${demoConfig.color}`} />
                    <span className={`text-xs font-medium ${demoConfig.color}`}>
                      {demoConfig.label}
                    </span>
                  </div>
                </div>

                <div className="p-6 pt-16 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {demo.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Model Type (if AI-based) */}
                  {demo.modelType && (
                    <div className="mb-4 p-3 rounded-md bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <FiZap className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                          AI Model
                        </span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{demo.modelType}</p>
                    </div>
                  )}

                  {/* Deployment Info */}
                  {demo.deployment && (
                    <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <FiActivity className="w-3.5 h-3.5" />
                      <span>Deployed on {demo.deployment}</span>
                    </div>
                  )}

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
            <FiActivity className="w-4 h-4 text-green-500" />
            All demos are production-ready, deployed systems
          </span>
          {' • '}
          <span>Not mockups or prototypes</span>
        </p>
      </motion.div>
    </Section>
  )
}

