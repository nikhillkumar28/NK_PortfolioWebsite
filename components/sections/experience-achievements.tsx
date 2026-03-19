'use client'

import { Section } from '@/components/ui/section'

interface ExperienceItem {
  title: string
  description: string
  tech: string
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: 'Public Grievance Portal',
    description: 'Built ML-powered complaint routing with role-based dashboards and automated department assignment.',
    tech: 'Next.js, TypeScript, Node.js, MongoDB, ML',
  },
  {
    title: 'Hindi Next Word Prediction',
    description: 'Delivered low-latency NLP prediction with an end-to-end pipeline and API deployment.',
    tech: 'Python, TensorFlow, FastAPI, NLP',
  },
  {
    title: 'Full-Stack Blog Website',
    description: 'Shipped a secure, role-based CMS with protected routes and reliable CRUD workflows.',
    tech: 'Next.js, TypeScript, Node.js, PostgreSQL',
  },
  {
    title: 'PetBot AI Assistant',
    description: 'Fine-tuned GPT-2 for domain Q&A and deployed a hardened inference API.',
    tech: 'Python, FastAPI, Docker, AWS, LLM',
  },
]

export function ExperienceAchievements() {
  return (
    <Section
      id="experience-achievements"
      title="Experience & Achievements"
      subtitle="A focused snapshot of hands-on delivery, impact, and the stacks I work with."
      className="py-16"
    >
      <div className="grid md:grid-cols-2 gap-4">
        {EXPERIENCE_ITEMS.map((item) => (
          <div key={item.title} className="card-base card-hover group p-4">
            <h3 className="text-base font-semibold text-foreground transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-snug">{item.description}</p>
            <p className="mt-2 text-xs text-muted-foreground/80">{item.tech}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
