import { Hero } from '@/components/sections/hero'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { ExperienceAchievements } from '@/components/sections/experience-achievements'
import { GithubActivity } from '@/components/sections/GithubActivity'
import { Projects } from '@/components/sections/projects'
import { IndustryCertifications } from '@/components/sections/industry-certifications'
import { CompetitiveCoding } from '@/components/sections/competitive-coding'
import { InternshipReadiness } from '@/components/sections/internship-readiness'
import { ResumeContact } from '@/components/sections/resume-contact'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden transition-colors duration-300">
      <Header />
      <div className="pt-20 md:pt-24 space-y-4 md:space-y-6">
        {/* 1. Hero - First impression & student status */}
        <Hero />
        {/* 2. About - Personal intro */}
        <About />
        {/* 3. Featured Projects - Detailed project showcase */}
        <Projects />
        {/* 4. Skills - Technical competencies */}
        <Skills />
        {/* 5. Experience & Achievements - Professional proof */}
        <ExperienceAchievements />
        {/* 6. Industry Certifications - Professional validation */}
        <IndustryCertifications />
        {/* 7. Competitive Coding - Problem-solving profiles */}
        <CompetitiveCoding />
        {/* 8. GitHub Activity - Contribution graph */}
        <GithubActivity />
        {/* 9. Internship Readiness - Why hire me */}
        <InternshipReadiness />
        {/* 10. Resume & Contact - Call to action */}
        <ResumeContact />
      </div>
      <Footer />
    </main>
  )
}

