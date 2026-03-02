'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { fadeInUpCard, staggerContainer } from '@/lib/animations'

interface SkillGroup {
  title: string
  capabilities: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    capabilities: [
      'React + Next.js component architecture',
      'TypeScript-first UI development',
      'State management and async data handling',
      'Performance optimization (SSR, lazy loading, caching)',
      'Responsive Tailwind design systems',
    ],
  },
  {
    title: 'Backend',
    capabilities: [
      'REST API Design',
      'JWT Authentication',
      'MongoDB Schema Design',
      'Rate Limiting',
      'Deployment',
    ],
  },
  {
    title: 'Machine Learning',
    capabilities: [
      'Data preprocessing and feature pipelines',
      'Model training and evaluation workflows',
      'NLP model serving with FastAPI',
      'Inference optimization for low latency',
      'Production monitoring and model iteration',
    ],
  },
]

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Core engineering capabilities across frontend, backend, and ML systems"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid md:grid-cols-3 gap-8"
      >
        {SKILL_GROUPS.map((group) => (
          <motion.div key={group.title} variants={fadeInUpCard}>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
              <h3 className="text-xl font-medium text-slate-100 mb-4">{group.title}</h3>
              <ul className="space-y-3 list-disc list-inside">
                {group.capabilities.map((capability) => (
                  <li key={capability} className="text-base leading-relaxed text-slate-400 marker:text-blue-400">
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

