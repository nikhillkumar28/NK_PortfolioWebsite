'use client'

import { motion } from 'framer-motion'
import {
  FiLayers,
  FiServer,
  FiShield,
  FiSliders,
  FiZap,
  FiSettings,
  FiCloud,
  FiClock,
  FiActivity,
  FiCpu,
} from 'react-icons/fi'
import {
  SiFastapi,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si'
import { Section } from '@/components/ui/section'
import { fadeInUpCard, staggerContainer } from '@/lib/animations'

interface SkillItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

interface SkillGroup {
  title: string
  skills: SkillItem[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'REST API Design', icon: FiServer },
      { name: 'JWT Authentication', icon: FiShield },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Rate Limiting', icon: FiClock },
      { name: 'Deployment', icon: FiCloud },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Data preprocessing', icon: FiSettings },
      { name: 'Model training', icon: SiTensorflow },
      { name: 'Model evaluation', icon: FiActivity },
      { name: 'Feature pipelines', icon: FiLayers },
      { name: 'Optimized inference', icon: FiZap },
      { name: 'Model monitoring', icon: FiCpu },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React + Next.js', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'State management', icon: FiSliders },
      { name: 'UI performance', icon: FiZap },
      { name: 'Component architecture', icon: FiLayers },
    ],
  },
]

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Core engineering capabilities across frontend, backend, and ML systems"
      className="py-16"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid md:grid-cols-3 gap-8 items-stretch"
      >
        {SKILL_GROUPS.map((group) => (
          <motion.div key={group.title} variants={fadeInUpCard}>
            <div className="card-base card-hover group p-5 h-full flex flex-col">
              <h3 className="text-xl font-medium text-foreground mb-4 transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                {group.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3 flex-1">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group flex items-center gap-2 text-sm text-foreground"
                  >
                    <skill.icon className="h-5 w-5 text-gray-400 transition-all duration-200 group-hover:text-primary group-hover:scale-110" />
                    <span className="leading-relaxed break-words">{skill.name}</span>
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
