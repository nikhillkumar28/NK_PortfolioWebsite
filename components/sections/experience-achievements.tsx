'use client'

import { Section } from '@/components/ui/section'
import { FiStar } from 'react-icons/fi'

interface ExperienceItem {
  title: string
  description: string
  tech: string
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: 'Data Structures & Algorithms',
    description: 'Solved 150+ problems on LeetCode covering arrays, trees, graphs, and dynamic programming. Built strong problem-solving and optimization skills.',
    tech: 'LeetCode, HackerRank, InterviewBit, GFG',
  },
  {
    title: 'Learnings',
    description: 'Completed industry-recognized certifications in Computer Networks, Cloud Computing, OS, and Gen AI, strengthening core fundamentals and applied knowledge.',
    tech: 'Networking, Cloud, OS, Generative AI',
  },
  {
    title: 'Coding Consistency',
    description: 'Completed 50 Days of Coding challenge demonstrating consistency and daily problem-solving discipline.',
    tech: 'Trees, Graphs, LL, DP',
  },
  {
    title: 'Coding Profiles',
    description: 'Achieved 4⭐ in Python and 3⭐ in C/C++ and Problem Solving on HackerRank.',
    tech: 'HackerRank, LeetCode',
  },
]

export function ExperienceAchievements() {
  return (
    <Section
      id="experience-achievements"
      title="Achievements & Problem Solving"
      subtitle="Showcasing problem-solving skills, coding consistency, and continuous learning.Consistently improving problem-solving skills with a focus on efficiency, scalability, and real-world application."
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

      <div className="mt-6 text-sm text-muted-foreground/80 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5">
          <FiStar className="h-4 w-4 text-amber-400" />
          Consistently improving problem-solving skills with a focus on efficiency, scalability, and real-world application.
        </span>
      </div>
    </Section>
  )
}
