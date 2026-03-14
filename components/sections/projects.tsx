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
    name: 'Full-Stack Blog Website',
    problemStatement: 'Writers needed a customizable CMS with secure auth and reliable publishing workflows.',
    solves: 'Provides role-based content management with protected author and admin routes.',
    techSummary: 'Next.js, React, TypeScript, Node.js API routes, PostgreSQL, Tailwind CSS.',
    impactOrLearning: 'Strengthened system design for auth flows, CRUD consistency, and production deployment.',
    techTags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    name: 'Hindi Next Word Prediction',
    problemStatement: 'Hindi typing tools lacked low-latency next-word prediction for practical usage.',
    solves: 'Delivers real-time predictions through an API-backed NLP inference service.',
    techSummary: 'Python, TensorFlow, FastAPI, Streamlit, MongoDB.',
    impactOrLearning: 'Built an end-to-end ML pipeline from preprocessing to serving and deployment.',
    techTags: ['Python', 'TensorFlow', 'FastAPI', 'NLP', 'MongoDB'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    name: 'PetBot AI Assistant',
    problemStatement: 'Pet owners needed quick, structured answers to common care questions.',
    solves: 'Serves domain-focused responses through an API with validation and request controls.',
    techSummary: 'Python, FastAPI, GPT-2 fine-tuning, Docker, AWS.',
    impactOrLearning: 'Learned practical API hardening, container deployment, and model-serving constraints.',
    techTags: ['Python', 'FastAPI', 'Docker', 'AWS', 'LLM'],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    name: 'Public Grievance Portal',
    problemStatement: 'NA',
    solves: 'Loading..',
    techSummary: 'Next.js, React, TypeScript, Node.js API routes, MongoDB, Tailwind CSS.',
    impactOrLearning: 'Loading..',
    techTags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB'],
    links: {
      github: '#',
      demo: '#',
    },
  },
]

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
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {PROJECTS.map((project) => (
          <motion.article key={project.name} variants={fadeInUpCard}>
            <div className="card-base card-hover h-full p-6 flex flex-col gap-4">
              <h3 className="text-xl font-medium text-foreground">{project.name}</h3>

              <p className="text-sm text-muted-foreground">{project.problemStatement}</p>

              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside marker:text-primary">
                <li>{project.solves}</li>
                <li>{project.techSummary}</li>
                <li>{project.impactOrLearning}</li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-lg border border-[hsl(var(--color-chip-border))] bg-[hsl(var(--color-chip))] text-[hsl(var(--color-chip-foreground))]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-auto">
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
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
