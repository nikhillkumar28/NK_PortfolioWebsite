'use client'

import { Section } from '@/components/ui/section'

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A brief overview of my background, skills, and what I'm building."
      className="pt-8"
    >
      <div className="space-y-3 text-sm md:text-base text-muted-foreground">
        <p className="text-foreground">
          Backend-focused full-stack developer building real-world, ML-powered systems.
        </p>
        <p>
          I specialize in designing scalable APIs and developing intelligent applications - including a NLP-based grievance classification platform - focused on solving practical problems.
        </p>
        <p>
          My approach emphasizes clean architecture, efficient data handling, and production-ready solutions.
        </p>
        <p>
          I'm passionate about turning complex ideas into reliable, high-impact systems and continuously improving
          performance and scalability.
        </p>
        <p>
          Currently pursuing B.Tech in Computer Science from Lovely Professional University (2023-2027).
        </p>
      </div>
    </Section>
  )
}
