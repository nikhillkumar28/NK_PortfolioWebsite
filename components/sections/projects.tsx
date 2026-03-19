'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { fadeInUpCard, staggerContainer } from '@/lib/animations'

interface Project {
  name: string
  problemStatement: string
  solves: string
  techSummary: string
  impactOrLearning: string
  techTags: string[]
  links: {
    github: string
    demo: string
  }
}

const PROJECTS: Project[] = [
  {
    name: 'Public Grievance Portal',
    problemStatement: 'ML-powered complaint routing system that classifies and forwards user grievances to relevant authorities.',
    solves: 'Ml-based complaint classification',
    techSummary: 'Role-based dashboards (admin/authority/users)',
    impactOrLearning: 'Automated routing to departments',
    techTags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    name: 'Hindi Next Word Prediction',
    problemStatement: 'Hindi typing tools lacked low-latency next-word prediction for practical usage.',
    solves: ' Real-time inference via FastAPI',
    techSummary: 'Optimized for low latency',
    impactOrLearning: 'End-to-end ML pipeline',
    techTags: ['Python', 'TensorFlow', 'FastAPI', 'NLP', 'MongoDB'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    name: 'Full-Stack Blog Website',
    problemStatement: 'Secure, role-based CMS for managing and publishing content with scalable backend architecture.',
    solves: 'Role-based access control',
    techSummary: 'Secure auth + protected API routes',
    impactOrLearning: 'Reliable CRUD workflows',
    techTags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    name: 'PetBot AI Assistant',
    problemStatement: 'Pet owners needed quick, structured answers to common care questions.',
    solves: 'Domain-focused Q&A responses',
    techSummary: 'GPT-2 fine-tuned API',
    impactOrLearning: 'API hardening and deployment',
    techTags: ['Python', 'FastAPI', 'Docker', 'AWS', 'LLM'],
    links: {
      github: '#',
      demo: '#',
    },
  },
]

const PROJECT_ARCHITECTURE: Record<string, string> = {
  'Full-Stack Blog Website': '⚙️ Next.js → API Routes → PostgreSQL → JWT Auth',
  'Hindi Next Word Prediction': '⚙️ Frontend → FastAPI → ML Model → Predictions',
  'PetBot AI Assistant': '⚙️ UI → NLP Engine → Context Handler → Scheduler',
  'Public Grievance Portal': '⚙️ Next.js → API → ML Classifier → MongoDB → Auto Routing → Role Dashboards',
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected systems built with production-oriented engineering practices"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        {PROJECTS.map((project) => (
          <motion.article key={project.name} variants={fadeInUpCard}>
            <div className="card-base card-hover group h-full p-5 flex flex-col justify-between gap-5 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-medium text-foreground tracking-tight transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                {project.name}
              </h3>

              <p className="text-sm text-muted-foreground leading-snug line-clamp-2">
                {project.problemStatement}
              </p>

              <div className="space-y-2 text-xs text-muted-foreground">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--color-subtitle))]">
                  Key Features
                </p>
                <ul className="space-y-1 list-disc list-inside marker:text-primary text-xs leading-snug">
                  {[project.solves, project.techSummary, project.impactOrLearning]
                    .filter(Boolean)
                    .slice(0, 3)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>


              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-lg border border-[hsl(var(--color-chip-border))] bg-[hsl(var(--color-chip))] text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {PROJECT_ARCHITECTURE[project.name] && (
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {PROJECT_ARCHITECTURE[project.name]}
                </p>
              )}

              <div className="mt-auto pt-1">
                <div className="flex flex-col sm:flex-row gap-3">
                <Button href={project.links.github} variant="outline" size="sm" className="flex-1">
                  <FiGithub className="w-4 h-4 mr-1.5" />
                  GitHub
                </Button>
                <Button href={project.links.demo} variant="primary" size="sm" className="flex-1">
                  <FiExternalLink className="w-4 h-4 mr-1.5" />
                  Live Demo
                </Button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
