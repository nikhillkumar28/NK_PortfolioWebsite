'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiVercel,
  SiAmazon,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

interface SkillGroup {
  title: string
  skills: Skill[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    title: 'AI / NLP / ML',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'NLP', icon: SiPytorch },
      { name: 'ML Models', icon: SiTensorflow },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'AWS', icon: SiAmazon },
    ],
  },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {SKILL_GROUPS.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            variants={fadeInUp}
            className="bg-secondary/30 border border-border rounded-lg p-5 md:p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {group.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 p-2 rounded-md bg-background/50 hover:bg-background/70 transition-colors border border-border/50"
                  >
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

