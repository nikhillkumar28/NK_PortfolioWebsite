'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUpCard, staggerContainer } from '@/lib/animations'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiVercel,
  SiDocker,
} from 'react-icons/si'
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi'

interface TechBadge {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

interface Project {
  title: string
  problem: string // 1-line problem statement
  whatIBuilt: string[] // 2 bullet points
  outcome: string // Engineering outcome / impact
  demonstrates: string[] // Skills demonstrated
  techStack: TechBadge[]
  links: {
    demo?: string
    github?: string
    caseStudy?: string
  }
  highlight: 'fullstack' | 'ai' | 'deployment'
}

const PROJECTS: Project[] = [
  {
    title: 'Full-Stack Blog Website',
    problem: 'Needed a production-ready CMS with auth, roles, and real-time content updates.',
    whatIBuilt: [
      'I designed and built a Next.js app with JWT auth, role-based access, and a PostgreSQL backend.',
      'I implemented server-side rendering, API routes, and deployed via CI/CD to Vercel.',
    ],
    outcome: 'Fully deployed platform handling user sessions, CRUD operations, and optimized page loads.',
    demonstrates: ['Full-stack architecture', 'REST APIs', 'Auth flows', 'CI/CD'],
    techStack: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
    links: {
      demo: '#',
      github: '#',
      caseStudy: '#',
    },
    highlight: 'fullstack',
  },
  {
    title: 'Hindi Next Word Prediction (NLP)',
    problem: 'No accessible Hindi language model existed for real-time text prediction.',
    whatIBuilt: [
      'I trained an LSTM model on a Hindi corpus and optimized inference for low-latency predictions.',
      'I built a FastAPI backend to serve the model and a Streamlit UI for live interaction.',
    ],
    outcome: 'End-to-end ML pipeline: data preprocessing, model training, API serving, and cloud deployment.',
    demonstrates: ['NLP pipelines', 'Model serving', 'API design', 'Cloud deployment'],
    techStack: [
      { name: 'Python', icon: SiPython },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    links: {
      demo: '#',
      github: '#',
      caseStudy: '#',
    },
    highlight: 'ai',
  },
  {
    title: 'PetBot – AI Chatbot for Pet Care',
    problem: 'Pet owners lacked a quick, reliable source for common pet care questions.',
    whatIBuilt: [
      'I fine-tuned GPT-2 on pet care Q&A data and wrapped it in a FastAPI service with rate limiting.',
      'I containerized the app with Docker and deployed to AWS with health checks and logging.',
    ],
    outcome: 'Production API serving 50+ req/min with <200ms response time, fully containerized.',
    demonstrates: ['LLM fine-tuning', 'Containerization', 'AWS deployment', 'API hardening'],
    techStack: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Docker', icon: SiDocker },
      { name: 'Vercel', icon: SiVercel },
    ],
    links: {
      demo: '#',
      github: '#',
      caseStudy: '#',
    },
    highlight: 'deployment',
  },
]

const highlightColors = {
  fullstack: 'from-blue-500/20 to-cyan-500/20',
  ai: 'from-purple-500/20 to-pink-500/20',
  deployment: 'from-green-500/20 to-emerald-500/20',
}

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Full-stack systems with thoughtful architecture and scalable design">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={project.title} variants={fadeInUpCard}>
            <Card disableInitialAnimation className="h-full flex flex-col p-0 overflow-hidden group bg-background/50">
              {/* Highlight gradient overlay */}
              <div className={`h-0.5 bg-gradient-to-r ${highlightColors[project.highlight]}`} />
              
              <div className="p-5 md:p-6 flex flex-col flex-1">
                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground leading-tight tracking-tight">
                  {project.title}
                </h3>

                {/* Problem Statement */}
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  <span className="text-foreground/80">Problem:</span> {project.problem}
                </p>

                {/* What I Built */}
                <ul className="text-xs text-muted-foreground mb-3 space-y-1 leading-relaxed">
                  {project.whatIBuilt.map((line, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary/70 shrink-0">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {/* System Design & Engineering Outcome */}
                <p className="text-xs text-foreground/80 mb-3 p-2 rounded-xl bg-secondary/20 border border-border/40 shadow-sm">
                  <span className="font-medium">System Design:</span> {project.outcome}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.map((tech) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-1 px-2 py-1 rounded-xl bg-secondary/30 border border-border/40 text-[11px] font-medium shadow-sm"
                      >
                        <Icon className="w-3 h-3 text-primary/70" />
                        <span className="text-foreground/80">{tech.name}</span>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Demonstrates */}
                <p className="text-[11px] text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground/70">Demonstrates:</span>{' '}
                  {project.demonstrates.join(' · ')}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  {project.links.demo && (
                    <Button
                      href={project.links.demo}
                      variant="primary"
                      size="sm"
                      className="flex-1 w-full sm:w-auto"
                    >
                      <FiExternalLink className="w-4 h-4 mr-1.5" />
                      Live Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      href={project.links.github}
                      variant="outline"
                      size="sm"
                      className="flex-1 w-full sm:w-auto"
                    >
                      <FiGithub className="w-4 h-4 mr-1.5" />
                      GitHub
                    </Button>
                  )}
                  {project.links.caseStudy && (
                    <Button
                      href={project.links.caseStudy}
                      variant="ghost"
                      size="sm"
                      className="flex-1 w-full sm:w-auto"
                    >
                      <FiFileText className="w-4 h-4 mr-1.5" />
                      Case Study
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

