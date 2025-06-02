'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ProfileImageProps {
  isHeader?: boolean
  disableAnimation?: boolean
}

/**
 * Animation configuration for the profile image
 */
const ANIMATION_CONFIG = {
  type: 'spring',
  stiffness: 180,
  damping: 15,
  mass: 0.5,
  duration: 0.2,
} as const

/**
 * Image dimensions based on position
 */
const IMAGE_DIMENSIONS = {
  header: {
    width: 80,
    height: 80,
    sizes: '80px',
  },
  default: {
    width: 160,
    height: 160,
    sizes: '(max-width: 768px) 128px, 160px',
  },
} as const

/**
 * CSS classes for different image states
 */
const IMAGE_CLASSES = {
  header:
    'size-12 rounded-xl shadow-sm shadow-stone-900/60 transition-shadow duration-200 hover:shadow-sm sm:size-20 dark:shadow-stone-700/30',
  default:
    'size-32 rounded-xl shadow-2xl shadow-stone-900/60 sm:size-40 dark:shadow-stone-700/30',
  wrapper: 'overflow-hidden rounded-xl',
  link: 'transition-transform hover:scale-105',
} as const

/**
 * Returns the appropriate image styles based on whether the image is in the header
 */
function getImageStyles(isHeader: boolean): string {
  return isHeader ? IMAGE_CLASSES.header : IMAGE_CLASSES.default
}

/**
 * Creates the base Image component with common props
 */
function createBaseImage(isHeader: boolean) {
  const dimensions = isHeader
    ? IMAGE_DIMENSIONS.header
    : IMAGE_DIMENSIONS.default

  return (
    <Image
      className={getImageStyles(isHeader)}
      src="/images/profile-photo.jpg"
      width={dimensions.width}
      height={dimensions.height}
      alt="Image of Joel O'Connor"
      priority
      sizes={dimensions.sizes}
    />
  )
}

/**
 * Wraps the image in a motion.div with animation properties
 */
function AnimatedImageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      layoutId="profile-image"
      className={IMAGE_CLASSES.wrapper}
      transition={ANIMATION_CONFIG}
    >
      {children}
    </motion.div>
  )
}

/**
 * Wraps the image in a standard div when animations are disabled
 */
function StaticImageWrapper({ children }: { children: React.ReactNode }) {
  return <div className={IMAGE_CLASSES.wrapper}>{children}</div>
}

/**
 * Profile image component that can be rendered in the header or as a standalone image.
 * Supports animation and respects user's motion preferences.
 */
export function ProfileImage({
  isHeader = false,
  disableAnimation = false,
}: ProfileImageProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const prefersReducedMotion = useReducedMotion()
  const shouldDisableAnimation = disableAnimation || prefersReducedMotion

  // Don't render the image in the header if we're on the home page
  if (isHeader && isHome) return null

  const baseImage = createBaseImage(isHeader)
  const imageElement = shouldDisableAnimation ? (
    <StaticImageWrapper>{baseImage}</StaticImageWrapper>
  ) : (
    <AnimatedImageWrapper>{baseImage}</AnimatedImageWrapper>
  )

  if (isHeader) {
    return (
      <Link href="/" className={IMAGE_CLASSES.link}>
        {imageElement}
      </Link>
    )
  }

  return imageElement
}
