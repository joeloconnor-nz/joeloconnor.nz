import { AnimatedHeading } from './components/motion/animated-heading'
import { AnimatedLayout } from './components/motion/animated-layout'
import { ProfileImage } from './components/motion/profile-image'

export default function Home() {
  return (
    <AnimatedLayout>
      <div className="flex flex-col items-center gap-10 px-6 py-8 text-center">
        <ProfileImage />
        <AnimatedHeading />
        <div className="flex flex-col gap-2">
          <p className="text-slate-600 md:text-xl dark:text-stone-400">
            I&apos;m learning software development—follow my journey
          </p>
          <p className="hidden text-slate-600 sm:block md:text-xl dark:text-stone-400">
            React, Next.js, TypeScript, Tailwind CSS, and more!
          </p>
        </div>
      </div>
    </AnimatedLayout>
  )
}
