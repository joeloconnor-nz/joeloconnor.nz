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

/**
 * CSS classes used by the component
 */
const LAYOUT_CLASSES = {
  base: 'flex w-full flex-col',
  home: 'grow justify-center',
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
  const pathname = usePathname()
  const isHome = pathname === '/'

  function getAnimationTransition() {
    return {
      delay: isHome
        ? ANIMATION_CONFIG.DELAY.HOME
        : ANIMATION_CONFIG.DELAY.OTHER,
      duration: ANIMATION_CONFIG.DURATION,
    }
  }

  function getClassName() {
    return twMerge(LAYOUT_CLASSES.base, isHome && LAYOUT_CLASSES.home)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={FADE_VARIANTS}
      transition={getAnimationTransition()}
      className={getClassName()}
    >
      {children}
    </motion.div>
  )
}
