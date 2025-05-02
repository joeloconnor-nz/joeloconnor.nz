import { Metadata } from 'next'

import { AnimatedLayout } from '../components/motion/animated-layout'
import { ContactForm } from './form'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <AnimatedLayout>
      <div className="mx-auto flex w-full flex-col border-t-4 border-t-purple-700 bg-white px-6 pt-8 pb-12 shadow-sm sm:my-12 sm:max-w-xl sm:px-10 dark:border-t-purple-900 dark:bg-stone-800">
        <h1 className="mb-8 text-2xl font-semibold text-stone-800 sm:mb-10 sm:text-3xl dark:text-stone-300">
          Send me a message
        </h1>

        <ContactForm />
      </div>
    </AnimatedLayout>
  )
}
