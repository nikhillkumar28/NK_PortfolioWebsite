import { Hero } from '@/components/sections/hero'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { LiveDemos } from '@/components/sections/live-demos'
import { AiResearch } from '@/components/sections/ai-research'
import { LearningGrowth } from '@/components/sections/learning-growth'
import { ResumeContact } from '@/components/sections/resume-contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Skills />
      <Projects />
      <LiveDemos />
      <AiResearch />
      <LearningGrowth />
      <ResumeContact />
    </main>
  )
}

