import { ThemeProvider } from '@/components/providers/theme-provider'

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
