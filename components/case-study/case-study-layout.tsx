"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface CaseStudyLink {
  label: string
  href: string
}

interface CaseStudyMeta {
  title: string
  subtitle?: string
  role?: string
  timeline?: string
  techSummary?: string
  tags?: string[]
  links?: CaseStudyLink[]
}

interface CaseStudyProps {
  meta: CaseStudyMeta
  problem: ReactNode
  importance: ReactNode
  techAndArchitecture: ReactNode
  implementation: ReactNode
  aiLogic?: ReactNode
  deployment: ReactNode
  challenges: ReactNode
  learnings: ReactNode
}

export function CaseStudyLayout({
  meta,
  problem,
  importance,
  techAndArchitecture,
  implementation,
  aiLogic,
  deployment,
  challenges,
  learnings,
}: CaseStudyProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header className="border-b border-border/60 bg-background/80 backdrop-blur" />

      <main className="flex-1">
        {/* Hero / summary */}
        <section className="border-b border-border/60 bg-gradient-to-b from-background to-background/80">
          <div className="container mx-auto px-4 py-10 md:py-16">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start"
            >
              {/* Left: Title & narrative */}
              <motion.div variants={fadeInUp}>
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  Project Case Study
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-balance">
                  {meta.title}
                </h1>
                {meta.subtitle && (
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                    {meta.subtitle}
                  </p>
                )}
              </motion.div>

              {/* Right: Quick summary */}
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border border-border/50 bg-secondary/40 p-4 md:p-5 text-sm space-y-3 shadow-sm"
              >
                {meta.role && (
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium text-right">{meta.role}</span>
                  </div>
                )}
                {meta.timeline && (
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-medium text-right">
                      {meta.timeline}
                    </span>
                  </div>
                )}
                {meta.techSummary && (
                  <div>
                    <p className="text-muted-foreground mb-1">Stack Focus</p>
                    <p className="text-xs md:text-sm leading-relaxed">
                      {meta.techSummary}
                    </p>
                  </div>
                )}
                {meta.tags && meta.tags.length > 0 && (
                  <div>
                    <p className="text-muted-foreground mb-1">Focus Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {meta.links && meta.links.length > 0 && (
                  <div>
                    <p className="text-muted-foreground mb-1">Links</p>
                    <div className="flex flex-wrap gap-2">
                      {meta.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs md:text-sm text-primary hover:underline"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main content sections */}
        <section className="border-t border-border/60">
          <div className="container mx-auto px-4 py-10 md:py-16">
            <div className="grid gap-10 md:gap-14">
              <ContentSection title="1. Problem Statement">
                {problem}
              </ContentSection>

              <ContentSection title="2. Why this project matters">
                {importance}
              </ContentSection>

              <ContentSection title="3. Tech Stack & Architecture">
                {techAndArchitecture}
              </ContentSection>

              <ContentSection title="4. Implementation Details">
                {implementation}
              </ContentSection>

              {aiLogic && (
                <ContentSection title="5. AI / ML logic">
                  {aiLogic}
                </ContentSection>
              )}

              <ContentSection title="6. Deployment Details">
                {deployment}
              </ContentSection>

              <ContentSection title="7. Challenges Faced">
                {challenges}
              </ContentSection>

              <ContentSection title="8. Learnings & Improvements">
                {learnings}
              </ContentSection>
            </div>
          </div>
        </section>
      </main>

      <Footer className="mt-8 border-t border-border/60 bg-background/80" />
    </div>
  )
}

interface ContentSectionProps {
  title: string
  children: ReactNode
}

function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      className="space-y-3 md:space-y-4"
    >
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <div className="prose prose-invert prose-sm md:prose-base max-w-none">
        {children}
      </div>
    </motion.section>
  )
}