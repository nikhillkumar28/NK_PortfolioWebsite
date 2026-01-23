'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
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
  problem: string
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
    problem: 'Built a modern, scalable blog platform with user authentication and real-time content management.',
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
    problem: 'Developed an intelligent NLP model for predicting next words in Hindi text using deep learning.',
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
    problem: 'Created an AI-powered chatbot that provides personalized pet care advice using natural language processing.',
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
    <Section id="projects" title="Featured Projects" subtitle="Showcasing full-stack development and AI integration">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={project.title} variants={fadeInUp}>
            <Card className="h-full flex flex-col p-0 overflow-hidden group bg-background/50">
              {/* Highlight gradient overlay */}
              <div className={`h-0.5 bg-gradient-to-r ${highlightColors[project.highlight]}`} />
              
              <div className="p-6 md:p-7 flex flex-col flex-1">
                {/* Project Title */}
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-foreground leading-tight tracking-tight">
                  {project.title}
                </h3>

                {/* Problem Statement */}
                <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6 flex-1 leading-relaxed line-clamp-2">
                  {project.problem}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary/30 border border-border/30 text-xs font-medium"
                      >
                        <Icon className="w-3.5 h-3.5 text-primary/70" />
                        <span className="text-foreground/80">{tech.name}</span>
                      </motion.div>
                    )
                  })}
                </div>

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

