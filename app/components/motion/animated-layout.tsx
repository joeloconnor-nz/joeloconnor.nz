'use client'

import { ReactNode } from 'react'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

/**
 * Configuration object for animation timing and behavior.
 * These values control how the fade-in animation behaves on different pages.
 */
const ANIMATION_CONFIG = {
  DELAY: {
    HOME: 0, // No delay on home page for immediate content visibility
    OTHER: 0.35, // Delay on other pages to allow profile image animation to complete
  },
  DURATION: 0.4, // How long the fade-in animation takes to complete
} as const

/**
 * Animation variants define the different states of the fade effect.
 * These are used by Motion to control the animation sequence.
 */
const FADE_VARIANTS = {
  hidden: { opacity: 0 }, // Initial state: completely transparent
  visible: { opacity: 1 }, // Final state: fully visible
} as const

interface AnimatedLayoutProps {
  children: ReactNode
}

/**
 * AnimatedLayout Component
 *
 * A wrapper component that provides a smooth fade-in animation for its children.
 * The animation behavior differs between the home page and other pages to
 * coordinate with the profile image animation.
 *
 * @param {AnimatedLayoutProps} props - Component props
 * @returns {JSX.Element} A motion.div wrapper with fade animation
 */
export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  // Get current path to determine if we're on the home page
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Base classes applied to all instances of the component
  const baseClasses = 'flex w-full flex-col'
  // Additional classes only applied on the home page
  const homeClasses = 'grow justify-center'

  return (
    <motion.div
      // Start with hidden state (opacity: 0)
      initial="hidden"
      // Animate to visible state (opacity: 1)
      animate="visible"
      // Use the predefined fade variants
      variants={FADE_VARIANTS}
      // Configure animation timing based on current page
      transition={{
        delay: isHome
          ? ANIMATION_CONFIG.DELAY.HOME
          : ANIMATION_CONFIG.DELAY.OTHER,
        duration: ANIMATION_CONFIG.DURATION,
      }}
      // Merge base classes with conditional home page classes
      className={twMerge(baseClasses, isHome && homeClasses)}
    >
      {children}
    </motion.div>
  )
}
