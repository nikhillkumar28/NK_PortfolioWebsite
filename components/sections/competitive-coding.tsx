'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUpCard, staggerContainer } from '@/lib/animations'
import {
  SiLeetcode,
  SiHackerrank,
  SiGithub,
  SiCodeforces,
} from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

interface ProfileCard {
  platform: string
  username: string
  icon: React.ComponentType<{ className?: string }>
  stats: {
    label: string
    value: string
  }[]
  profileUrl: string
  accentColor: string
}

const PROFILES: ProfileCard[] = [
  {
    platform: 'LeetCode',
    username: 'nikhilkumarnik28',
    icon: SiLeetcode,
    stats: [
      { label: 'Problems Solved', value: '150+' },
      { label: 'Contest Rating', value: '1650' },
      { label: 'Global Rank', value: 'Top 10%' },
    ],
    profileUrl: 'https://leetcode.com/u/nikhilkumarnik28/',
    accentColor: 'text-primary',
  },
  {
    platform: 'HackerRank',
    username: 'nikhillkumar28',
    icon: SiHackerrank,
    stats: [
      { label: 'Problems Solved', value: '100+' },
      { label: 'Contest Rating', value: '4 stars' },
      { label: 'Badges Earned', value: '3' },
    ],
    profileUrl: 'https://www.hackerrank.com/profile/nikhillkumar28',
    accentColor: 'text-primary',
  },
  {
    platform: 'GitHub',
    username: 'nikhillkumar28',
    icon: SiGithub,
    stats: [
      { label: 'Public Repos', value: '20+' },
      { label: 'Total Stars', value: '10+' },
      { label: 'Contributions', value: '130+' },
    ],
    profileUrl: 'https://github.com/nikhillkumar28',
    accentColor: 'text-secondary',
  },
  {
    platform: 'InterviewBit',
    username: 'nikhilkumar28',
    icon: SiCodeforces,
    stats: [
      { label: 'Problems Solved', value: '50+' },
      { label: 'Contest Rating', value: 'NA' },
      { label: 'Max Rating', value: 'NA' },
    ],
    profileUrl: 'https://codeforces.com/yourusername',
    accentColor: 'text-primary',
  },
]

export function CompetitiveCoding() {
  return (
    <Section
      id="competitive-coding"
      title="Competitive Coding & Developer Profiles"
      subtitle="My coding platform profiles and problem-solving achievements"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
      >
        {PROFILES.map((profile) => {
          const PlatformIcon = profile.icon
          return (
            <motion.div key={profile.platform} variants={fadeInUpCard}>
              <Card disableInitialAnimation>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20">
                    <PlatformIcon className={`w-5 h-5 ${profile.accentColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">
                      {profile.platform}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      @{profile.username}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  {profile.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-border/50">
                  <Button
                    href={profile.profileUrl}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <FiExternalLink className="w-3.5 h-3.5 mr-2" />
                    View Profile
                  </Button>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
