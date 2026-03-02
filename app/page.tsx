import { Hero } from '@/components/sections/hero'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { IndustryCertifications } from '@/components/sections/industry-certifications'
import { CompetitiveCoding } from '@/components/sections/competitive-coding'
import { LiveDemos } from '@/components/sections/live-demos'
import { AiResearch } from '@/components/sections/ai-research'
import { LearningGrowth } from '@/components/sections/learning-growth'
import { InternshipReadiness } from '@/components/sections/internship-readiness'
import { ResumeContact } from '@/components/sections/resume-contact'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <div className="pt-20 md:pt-24 space-y-16 md:space-y-24">
        {/* 1. Hero - First impression & student status */}
        <Hero />
        {/* 2. Live Demos - Immediate proof of work */}
        <LiveDemos />
        {/* 3. Featured Projects - Detailed project showcase */}
        <Projects />
        {/* 4. Industry Certifications - Professional validation */}
        <IndustryCertifications />
        {/* 5. Competitive Coding - Problem-solving profiles */}
        <CompetitiveCoding />
        {/* 6. Skills - Technical competencies */}
        <Skills />
        {/* 7. AI & Research - Specialized expertise */}
        <AiResearch />
        {/* 8. Learning & Growth - Continuous improvement */}
        <LearningGrowth />
        {/* 9. Internship Readiness - Why hire me */}
        <InternshipReadiness />
        {/* 10. Resume & Contact - Call to action */}
        <ResumeContact />
      </div>
      <Footer />
    </main>
  )
}

