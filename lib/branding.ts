// Personal branding content for placements and internships

export const BRANDING = {
  name: "Nikhil",
  headline: "I build intelligent AI systems and modern full-stack applications.",
  
  roleTitles: [
    "Full-Stack Web Developer",
    "NLP / ML Engineer",
    "AI Application Developer",
  ] as const,
  
  valueStatement: [
    "I develop end-to-end solutions that combine modern web technologies with production-ready machine learning models.",
    "From building responsive frontends to deploying scalable AI systems, I bridge the gap between development and deployment.",
  ] as const,
} as const

// Helper function to get a random role title (for rotation)
export function getRandomRoleTitle(): string {
  const titles = BRANDING.roleTitles
  return titles[Math.floor(Math.random() * titles.length)]
}

// Helper function to cycle through role titles
export function getRoleTitleByIndex(index: number): string {
  const titles = BRANDING.roleTitles
  return titles[index % titles.length]
}

