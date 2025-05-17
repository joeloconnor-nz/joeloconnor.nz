import { Metadata } from 'next'

import { AnimatedLayout } from '../components/motion/animated-layout'
import { ContactForm } from './form'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <AnimatedLayout>
      <div className="container mx-auto max-w-xl rounded-b-xl border-t-4 border-t-purple-700 bg-white p-4 shadow-sm sm:my-12 sm:p-8 dark:border-t-purple-900 dark:bg-stone-800">
        <h1 className="mb-4 text-2xl font-semibold text-stone-800 sm:mb-10 sm:text-3xl dark:text-stone-300">
          Send me a message
        </h1>

        <ContactForm />
      </div>
    </AnimatedLayout>
  )
}
