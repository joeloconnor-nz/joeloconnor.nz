import { AnimatedHeading } from './components/motion/animated-heading'
import { AnimatedLayout } from './components/motion/animated-layout'
import { ProfileImage } from './components/motion/profile-image'

export default function Home() {
  return (
    <AnimatedLayout>
      <div className="flex flex-col items-center gap-10 px-6 py-8 text-center">
        <ProfileImage />
        <AnimatedHeading />
        <div className="flex max-w-xl flex-col gap-4 text-slate-600 sm:text-xl dark:text-stone-400">
          <p>
            I create AV & IT systems for large residential and marine projects,
            <br />
            while also expanding my expertise into software development.
          </p>

          <p>Follow my socials below to see my journey!</p>
        </div>
      </div>
    </AnimatedLayout>
  )
}
