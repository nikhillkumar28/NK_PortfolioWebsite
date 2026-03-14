'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { fadeInUp, fadeInUpCard, staggerContainer } from '@/lib/animations'
import { SiTensorflow, SiPytorch } from 'react-icons/si'
import { FiCpu, FiMessageSquare } from 'react-icons/fi'

export function AiResearch() {
  return (
    <Section
      id="ai-research"
      title="AI & Research"
      subtitle="Applied machine learning with production-ready system architecture"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="space-y-8 md:space-y-10"
      >
        {/* Top Row: Models Built + Transformer Work */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* NLP Models Built */}
          <motion.div variants={fadeInUpCard}>
            <Card disableInitialAnimation className="h-full p-5 md:p-6 bg-card border-border">
              <h3 className="text-lg md:text-xl font-medium mb-3 flex items-center gap-2">
                <FiCpu className="w-4 h-4 text-primary" />
                NLP Models Built
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2.5">
                <li className="flex gap-2">
                  <span className="text-primary/70 shrink-0">•</span>
                  <div>
                    <span className="text-foreground/90 font-medium">Hindi next-word prediction</span>
                    <span className="text-muted-foreground"> — LSTM-based model trained on Hindi corpus, serving real-time predictions in typing interfaces.</span>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary/70 shrink-0">•</span>
                  <div>
                    <span className="text-foreground/90 font-medium">Intent classification chatbot</span>
                    <span className="text-muted-foreground"> — Fine-tuned GPT-2 for PetBot, handling intent detection + response generation.</span>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary/70 shrink-0">•</span>
                  <div>
                    <span className="text-foreground/90 font-medium">Text scoring utilities</span>
                    <span className="text-muted-foreground"> — Lightweight classifiers for content quality checks in web apps.</span>
                  </div>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-xl bg-[hsl(var(--color-chip))] text-[hsl(var(--color-chip-foreground))] border border-[hsl(var(--color-chip-border))] shadow-sm">
                  <SiTensorflow className="w-3.5 h-3.5" />
                  TensorFlow
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-xl bg-[hsl(var(--color-chip))] text-[hsl(var(--color-chip-foreground))] border border-[hsl(var(--color-chip-border))] shadow-sm">
                  <SiPytorch className="w-3.5 h-3.5" />
                  PyTorch
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Transformer & Embeddings */}
          <motion.div variants={fadeInUpCard}>
            <Card disableInitialAnimation className="h-full p-5 md:p-6 bg-card border-border">
              <h3 className="text-lg md:text-xl font-medium mb-3 flex items-center gap-2">
                <FiMessageSquare className="w-4 h-4 text-primary" />
                Transformer & Embedding Work
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2.5">
                <li className="flex gap-2">
                  <span className="text-primary/70 shrink-0">•</span>
                  <div>
                    <span className="text-foreground/90 font-medium">Multilingual BERT experiments</span>
                    <span className="text-muted-foreground"> — Evaluated mBERT for Hindi language understanding; learned when simpler models suffice.</span>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary/70 shrink-0">•</span>
                  <div>
                    <span className="text-foreground/90 font-medium">Embedding-based retrieval</span>
                    <span className="text-muted-foreground"> — Used sentence embeddings for FAQ matching and response ranking in chatbot.</span>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary/70 shrink-0">•</span>
                  <div>
                    <span className="text-foreground/90 font-medium">API-served embeddings</span>
                    <span className="text-muted-foreground"> — Integrated embedding generation into FastAPI endpoints consumed by frontend apps.</span>
                  </div>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}


