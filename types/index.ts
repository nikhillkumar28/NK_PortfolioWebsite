export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
}

export interface Skill {
  name: string
  category: 'ml' | 'nlp' | 'backend' | 'frontend' | 'tools' | 'other'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface SocialLink {
  platform: string
  url: string
  icon?: string
}






















