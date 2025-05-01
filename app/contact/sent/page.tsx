import { HomeIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { AnimatedLayout } from '@/components/motion/animated-layout'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Thanks for your message',
}

export default function ContactSent() {
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

        <Button variant="default" asChild>
          <Link href="/">
            <>
              <HomeIcon className="mr-2 size-4" />
              Return to home
            </>
          </Link>
        </Button>
      </div>
    </AnimatedLayout>
  )
}
