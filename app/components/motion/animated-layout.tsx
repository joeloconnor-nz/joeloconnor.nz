'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface AnimatedLayoutProps {
  children: ReactNode
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  // No delay on home page, but apply delay on other pages
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      // Only delay on non-home pages to allow for the profile image animation
      transition={{
        delay: isHome ? 0 : 0.35,
        duration: 0.4,
      }}
      className={twMerge(
        'flex w-full flex-col',
        isHome && 'grow justify-center',
      )}
    >
      {children}
    </motion.div>
  )
}
