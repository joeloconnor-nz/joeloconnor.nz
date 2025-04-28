import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-10 px-6 py-8 text-center">
      <Image
        className="size-40 rounded-xl shadow-2xl shadow-stone-900/60 md:size-44 dark:shadow-stone-700/30"
        src="/images/profile-photo.jpeg"
        width="176"
        height="176"
        alt="Image of Joel O'Connor"
        priority
      />
      <div className="flex gap-1 font-sans text-4xl font-semibold">
        <span className="text-blue-500">Hey!</span>
        <span>&nbsp;I&apos;m Joel</span>
        <span>👋</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-slate-600 md:text-xl dark:text-stone-400">
          I&apos;m learning software development—follow my journey
        </p>
        <p className="hidden text-slate-600 sm:block md:text-xl dark:text-stone-400">
          React, Next.js, TypeScript, Tailwind CSS, and more!
        </p>
      </div>
    </div>
  )
}
