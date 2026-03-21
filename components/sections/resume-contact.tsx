'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi'
import { Section } from '@/components/ui/section'
import { fadeInUp } from '@/lib/animations'

export function ResumeContact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {}
    if (!formValues.name.trim() || formValues.name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters.'
    }
    if (!formValues.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!formValues.message.trim() || formValues.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return

    setIsSending(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
        }),
      })
      if (!res.ok) {
        throw new Error('Request failed')
      }
      setIsSuccess(true)
      setFormValues({ name: '', email: '', message: '' })
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.')
      setTimeout(() => setSubmitError(''), 3000)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Section id="contact" title="Get in Touch" subtitle="Have a project in mind or want to collaborate? Feel free to reach out.">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div className="space-y-5">
          <h3 className="text-2xl font-medium text-foreground">Let&apos;s Build Something Together</h3>

          <div className="space-y-3 flex flex-col items-start">
            <a
              href="mailto:nikhilkumarnik28@gmail.com"
              className="group inline-flex w-full sm:w-[260px] items-center justify-between card-base card-hover text-foreground px-4 py-3"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                <FiMail className="w-4 h-4 text-primary transition-all duration-300 group-hover:scale-110" />
                Email
              </span>
              <FiArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhillkumar28"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full sm:w-[260px] items-center justify-between card-base card-hover text-foreground px-4 py-3"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                <FiLinkedin className="w-4 h-4 text-primary transition-all duration-300 group-hover:scale-110" />
                LinkedIn
              </span>
              <FiArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/nikhillkumar28"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full sm:w-[260px] items-center justify-between card-base card-hover text-foreground px-4 py-3"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                <FiGithub className="w-4 h-4 text-primary transition-all duration-300 group-hover:scale-110" />
                GitHub
              </span>
              <FiArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full sm:w-[260px] items-center justify-between card-base card-hover text-foreground px-4 py-3"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                <FiMessageCircle className="w-4 h-4 text-primary transition-all duration-300 group-hover:scale-110" />
                Discord
              </span>
              <FiArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formValues.message}
              onChange={handleChange}
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none"
              placeholder="Tell me about your project or role."
            />
            {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
          </div>

          {isSuccess && (
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
              Message sent successfully ✅
            </div>
          )}
          {submitError && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-[hsl(var(--color-primary-hover))] px-6 py-3 rounded-xl transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </motion.div>
    </Section>
  )
}
