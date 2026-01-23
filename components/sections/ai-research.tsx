'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SiTensorflow, SiPytorch } from 'react-icons/si'
import { FiGitBranch, FiBox } from 'react-icons/fi'

export function AiResearch() {
  return (
    <Section
      id="ai-research"
      title="AI & Research"
      subtitle="Compact overview of the NLP and model work that powers these projects"
      className="pt-0 md:pt-0"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 lg:grid-cols-[1.5fr_minmax(0,1fr)] gap-6 md:gap-8"
      >
        {/* Left: Models & research highlights */}
        <motion.div
          variants={fadeInUp}
          className="space-y-4 md:space-y-5"
        >
          <Card className="p-5 md:p-6 bg-secondary/40 border-border/80">
            <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
              <FiGitBranch className="w-4 h-4 text-primary" />
              NLP Models Built
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>
                • Hindi next-word prediction model for auto-completion in typing interfaces.
              </li>
              <li>
                • Intent + FAQ style chatbot models powering PetBot for pet-care Q&amp;A.
              </li>
              <li>
                • Text classification and scoring utilities used inside web apps (e.g. content quality checks).
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <SiTensorflow className="w-3.5 h-3.5" />
                TensorFlow
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <SiPytorch className="w-3.5 h-3.5" />
                PyTorch
              </span>
            </div>
          </Card>

          <Card className="p-5 md:p-6 bg-secondary/40 border-border/80">
            <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
              BERT &amp; Transformer Work
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>
                • Experimented with multilingual BERT-style models for improving Hindi language understanding.
              </li>
              <li>
                • Used Transformer encoders for better context-aware predictions and ranking responses.
              </li>
              <li>
                • Integrated embeddings into APIs that are consumed by front-end applications.
              </li>
            </ul>
          </Card>
        </motion.div>

        {/* Right: Architecture & research style summary */}
        <motion.div
          variants={fadeInUp}
          className="space-y-4 md:space-y-5"
        >
          <Card className="p-5 md:p-6 bg-secondary/40 border-dashed border-border/70">
            <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
              <FiBox className="w-4 h-4 text-primary" />
              Architecture Diagram (Placeholder)
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-4">
              High-level view of data flow: user input → API / web app → model service → response back to UI.
              Replace this box with an actual diagram or image when ready.
            </p>
            <div className="h-28 md:h-32 rounded-md border border-border/60 border-dashed flex items-center justify-center text-[11px] text-muted-foreground">
              Architecture diagram here (NLP pipeline / web + model service)
            </div>
          </Card>

          <Card className="p-5 md:p-6 bg-secondary/40 border-border/80">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Research-Style Summary (Short)
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The goal of this work is practical: build models that can be shipped inside real products.
              Each experiment is tied to a feature in a deployed system (auto-completion, chat responses,
              ranking, or scoring). This section is intentionally compact so that the focus stays on
              working applications while still proving that the underlying AI is thoughtfully designed.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  )
}


