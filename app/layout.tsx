import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

import './globals.css'

import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: {
    default: "Joel O'Connor",
    template: "%s | Joel O'Connor",
  },
  description: "The personal website of Joel O'Connor.",
  authors: [{ name: "Joel O'Connor" }],
  openGraph: {
    type: 'website',
    images: [{ url: 'https://joeloconnor.nz/images/profile-photo.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-stone-50 transition-colors duration-200 dark:bg-stone-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto flex min-h-[100dvh] max-w-(--breakpoint-xl) flex-col rounded-lg">
            <Header />
            <main className="flex grow flex-col">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
