'use client'

import { useMemo } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from '@/components/providers/theme-provider'

export function GithubActivity() {
  const { theme } = useTheme()
  const colorScheme = useMemo(() => (theme === 'dark' ? 'dark' : 'light'), [theme])

  return (
    <section id="github-activity" className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight mb-8 text-foreground">
          GitHub Activity
        </h2>
        <div className="flex justify-center">
          <div className="w-full overflow-x-auto">
            <div className="min-w-fit mx-auto">
              <GitHubCalendar
                username="nikhillkumar28"
                blockSize={14}
                blockMargin={4}
                colorScheme={colorScheme}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
