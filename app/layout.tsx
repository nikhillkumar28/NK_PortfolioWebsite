import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | AI/ML Developer',
    template: '%s | Portfolio',
  },
  description: 'Portfolio of an AI, NLP, and ML developer specializing in building and deploying real machine learning models.',
  keywords: ['AI', 'Machine Learning', 'NLP', 'Deep Learning', 'ML Engineer', 'Data Science'],
  authors: [{ name: 'AI/ML Developer' }],
  creator: 'AI/ML Developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Portfolio',
    title: 'Portfolio | AI/ML Developer',
    description: 'Portfolio of an AI, NLP, and ML developer specializing in building and deploying real machine learning models.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | AI/ML Developer',
    description: 'Portfolio of an AI, NLP, and ML developer specializing in building and deploying real machine learning models.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}






















