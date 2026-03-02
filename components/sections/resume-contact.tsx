'use client'

import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi'
import { Section } from '@/components/ui/section'
import { fadeInUp } from '@/lib/animations'

export function ResumeContact() {
  return (
    <Section id="contact" title="Contact" subtitle="Open to meaningful engineering opportunities">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div className="space-y-5">
          <h3 className="text-2xl font-medium text-slate-900 dark:text-slate-100">Let&apos;s Build Something Together</h3>

          <div className="space-y-3 flex flex-col items-start">
            <a
              href="mailto:nikhilkumarnik28@gmail.com"
              className="group inline-flex w-full sm:w-[260px] items-center justify-between border border-slate-800 bg-slate-900 text-slate-100 px-4 py-3 rounded-xl hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <FiMail className="w-4 h-4 text-blue-400" />
                Email
              </span>
              <FiArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/nikhillkumar28"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full sm:w-[260px] items-center justify-between border border-slate-800 bg-slate-900 text-slate-100 px-4 py-3 rounded-xl hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <FiLinkedin className="w-4 h-4 text-blue-400" />
                LinkedIn
              </span>
              <FiArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/nikhillkumar28"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full sm:w-[260px] items-center justify-between border border-slate-800 bg-slate-900 text-slate-100 px-4 py-3 rounded-xl hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <FiGithub className="w-4 h-4 text-blue-400" />
                GitHub
              </span>
              <FiArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full sm:w-[260px] items-center justify-between border border-slate-800 bg-slate-900 text-slate-100 px-4 py-3 rounded-xl hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <FiMessageCircle className="w-4 h-4 text-blue-400" />
                Discord
              </span>
              <FiArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
              placeholder="Tell me about your project or role."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </Section>
  )
}
