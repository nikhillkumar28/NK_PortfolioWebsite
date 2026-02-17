'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { fadeInUpCard, staggerContainer } from '@/lib/animations'
import {
  SiReact,
  SiFastapi,
  SiTensorflow,
  SiDocker,
} from 'react-icons/si'

interface SkillGroup {
  title: string
  icon: React.ComponentType<{ className?: string }>
  capabilities: string[] // What I can do
  tools: string[] // Key tools (shown inline)
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend & APIs',
    icon: SiFastapi,
    capabilities: [
      'Design and build RESTful APIs with authentication and rate limiting',
      'Write efficient database queries and manage schema migrations',
      'Implement caching strategies and optimize query performance',
      'Build async services with proper error handling and logging',
    ],
    tools: ['FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Machine Learning',
    icon: SiTensorflow,
    capabilities: [
      'Train and evaluate models for classification and sequence tasks',
      'Build NLP pipelines: tokenization, embeddings, inference',
      'Optimize models for production (quantization, batching)',
      'Serve models via APIs with low-latency response times',
    ],
    tools: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Hugging Face'],
  },
  {
    title: 'Deployment & Infrastructure',
    icon: SiDocker,
    capabilities: [
      'Containerize applications with Docker and multi-stage builds',
      'Deploy to cloud platforms (AWS, Vercel, Streamlit Cloud)',
      'Set up CI/CD pipelines with GitHub Actions',
      'Configure monitoring, health checks, and logging',
    ],
    tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'],
  },
  {
    title: 'Frontend & Full-Stack',
    icon: SiReact,
    capabilities: [
      'Build responsive UIs with React and Next.js (SSR/SSG)',
      'Implement type-safe code with TypeScript',
      'Integrate frontend with REST APIs and handle state management',
      'Optimize performance (lazy loading, code splitting)',
    ],
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
]

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Full-stack development capabilities with AI/ML integration">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
      >
        {SKILL_GROUPS.map((group) => {
          const GroupIcon = group.icon
          return (
            <motion.div key={group.title} variants={fadeInUpCard}>
              <Card disableInitialAnimation>
              {/* Group Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-primary/5 border border-primary/20">
                  <GroupIcon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>

              {/* Capabilities (bullet points) */}
              <ul className="space-y-2 mb-4">
                {group.capabilities.map((capability, i) => (
                  <li key={i} className="flex gap-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary/70 shrink-0 mt-0.5">•</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>

              {/* Tools (inline tags) */}
              <div className="pt-3 border-t border-border/50">
                <div className="flex flex-wrap gap-1.5">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded-lg text-[10px] md:text-[11px] font-medium bg-primary/5 border border-border/50 text-foreground/70 hover:bg-primary/10 hover:border-primary/30 hover:text-foreground transition-all duration-150"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

