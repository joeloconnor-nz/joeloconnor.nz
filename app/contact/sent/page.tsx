'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { AnimatedLayout } from '@/components/motion/animated-layout'
import { Button } from '@/components/ui/button'

export default function ContactSent() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 10000)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 0.5 // Increment by 0.5% each time
      })
    }, 50) // Update every 50ms for smooth animation

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <AnimatedLayout>
      <div className="mx-auto flex w-full flex-col gap-16 border-t-4 border-t-purple-700 bg-white px-6 pt-8 pb-12 shadow-sm sm:my-12 sm:max-w-xl sm:px-10 dark:bg-stone-800">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-stone-700 sm:text-3xl dark:text-stone-300">
            Thanks for your message 🙈
          </h1>

          <div className="flex flex-col">
            <p className="text-stone-700 dark:text-stone-400">
              I&apos;ll get back to you soon.
            </p>
          </div>
        </div>

        <Button variant="default" asChild className="relative">
          <Link href="/">
            <div className="flex items-center">
              <div className="relative mr-2 size-4">
                <svg className="size-4 -rotate-90">
                  <circle
                    className="text-stone-200 dark:text-stone-700"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="transparent"
                    r="6"
                    cx="8"
                    cy="8"
                  />
                  <circle
                    className="text-stone-700 dark:text-stone-300"
                    strokeWidth="2"
                    strokeDasharray={37.7}
                    strokeDashoffset={37.7 - (37.7 * progress) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="6"
                    cx="8"
                    cy="8"
                  />
                </svg>
              </div>
              Return to home
            </div>
          </Link>
        </Button>
      </div>
    </AnimatedLayout>
  )
}
