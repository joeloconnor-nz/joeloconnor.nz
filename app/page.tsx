import Image from 'next/image'

import { Button } from '@/components/button'

export default function Home() {
  return (
    <div className="flex grow flex-col items-center justify-center px-6 py-8 text-center">
      <Image
        className="mb-12 size-40 rounded-xl shadow-2xl shadow-stone-900/60 dark:shadow-stone-700/30 md:size-44"
        src="/images/profile-photo.jpeg"
        width="176"
        height="176"
        alt="Image of Joel O'Connor"
        priority
      />
      <h1 className="mb-8 text-4xl font-medium text-stone-700 dark:text-stone-300 sm:text-5xl md:mb-20 md:text-6xl">
        Joel O&apos;Connor
      </h1>
      <p className="text-slate-600 dark:text-stone-400 md:text-2xl">
        Currently on the path path to become a software developer
      </p>
      <p className="mt-2 hidden text-slate-600 dark:text-stone-400 sm:block md:text-2xl">
        Follow my progress on GitHub or connect with me on LinkedIn
      </p>
    </div>
  )
}
