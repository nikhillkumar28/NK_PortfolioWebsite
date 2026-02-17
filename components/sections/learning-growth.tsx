'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { fadeInUp, fadeInUpCard, staggerContainer } from '@/lib/animations'
import {
  SiKubernetes,
  SiDocker,
  SiRedis,
  SiPostgresql,
  SiGraphql,
  SiRabbitmq,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiGo,
} from 'react-icons/si'
import { FiTrendingUp, FiCode, FiZap } from 'react-icons/fi'

interface LearningItem {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const BACKEND_LEARNING: LearningItem[] = [
  {
    name: 'Microservices Architecture',
    description: 'Designing scalable, distributed systems with service boundaries and inter-service communication patterns.',
    icon: SiKubernetes,
  },
  {
    name: 'Database Optimization',
    description: 'Deepening expertise in query optimization, indexing strategies, and handling high-throughput scenarios.',
    icon: SiPostgresql,
  },
  {
    name: 'Caching & Performance',
    description: 'Exploring advanced Redis patterns, cache invalidation strategies, and reducing latency at scale.',
    icon: SiRedis,
  },
  {
    name: 'GraphQL & API Design',
    description: 'Building more efficient APIs with GraphQL, understanding schema design and resolver optimization.',
    icon: SiGraphql,
  },
]

const ML_LEARNING: LearningItem[] = [
  {
    name: 'Production ML Systems',
    description: 'Exploring MLOps patterns: model versioning, A/B testing, monitoring, and graceful degradation.',
    icon: SiTensorflow,
  },
  {
    name: 'Transformer Architectures',
    description: 'Deepening understanding of attention mechanisms, fine-tuning strategies, and efficient inference.',
    icon: SiHuggingface,
  },
  {
    name: 'Model Optimization',
    description: 'Studying quantization, distillation, and deployment strategies for resource-constrained environments.',
    icon: SiPytorch,
  },
]

const TOOLS_LEARNING: LearningItem[] = [
  {
    name: 'Container Orchestration',
    description: 'Expanding Kubernetes knowledge: deployments, services, ingress, and managing stateful workloads.',
    icon: SiKubernetes,
  },
  {
    name: 'Message Queues',
    description: 'Learning RabbitMQ and event-driven architectures for building resilient, decoupled systems.',
    icon: SiRabbitmq,
  },
  {
    name: 'Systems Languages',
    description: 'Exploring Go and Rust for performance-critical backend components and understanding systems-level programming.',
    icon: SiGo,
  },
]

export function LearningGrowth() {
  return (
    <Section
      id="learning"
      title="Learning & Growth"
      subtitle="Actively studying systems I haven't built yet"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="space-y-10 md:space-y-12"
      >
        {/* Intro statement */}
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Beyond what I've shipped, I'm studying distributed systems, advanced ML deployment patterns,
            and infrastructure tools used at scale. These are areas I'm actively learning through
            coursework, documentation, and side experiments — not production experience yet.
          </p>
        </motion.div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Backend Skills */}
          <motion.div variants={fadeInUpCard}>
            <Card disableInitialAnimation className="h-full bg-secondary/30 border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <FiCode className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Backend Systems</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Refining and expanding backend architecture skills
              </p>
              <ul className="space-y-3">
                {BACKEND_LEARNING.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name} className="flex gap-3">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground mb-0.5">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Card>
          </motion.div>

          {/* ML Concepts */}
          <motion.div variants={fadeInUpCard}>
            <Card disableInitialAnimation className="h-full bg-secondary/30 border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <FiZap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">ML Concepts</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Learning MLOps and production deployment patterns
              </p>
              <ul className="space-y-3">
                {ML_LEARNING.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name} className="flex gap-3">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground mb-0.5">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Card>
          </motion.div>

          {/* Tools & Frameworks */}
          <motion.div variants={fadeInUpCard}>
            <Card disableInitialAnimation className="h-full bg-secondary/30 border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <FiTrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Tools & Frameworks</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Exploring industry-standard infrastructure tools
              </p>
              <ul className="space-y-3">
                {TOOLS_LEARNING.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name} className="flex gap-3">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground mb-0.5">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Growth mindset footer */}
        <motion.div
          variants={fadeInUp}
          className="text-center pt-4 border-t border-border/40"
        >
          <p className="text-sm text-muted-foreground">
            I distinguish between what I've shipped and what I'm still learning.
            These topics represent active study, not claimed expertise.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}

