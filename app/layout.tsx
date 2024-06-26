import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Joel O'Connor",
    template: "%s | Joel O'Connor",
  },
  description:
    "The personal website of Joel O'Connor. Follow my progress as I learn software development",
  authors: [{ name: "Joel O'Connor" }],
  openGraph: {
    type: 'website',
    images: [{ url: 'https://joeloconnor.nz/images/profile-photo.jpeg' }],
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
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/scripts/dark-mode.js" />
        <div className="mx-auto flex min-h-[100dvh] max-w-screen-xl flex-col rounded-lg">
          <Header />
          <main className="flex grow flex-col">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
