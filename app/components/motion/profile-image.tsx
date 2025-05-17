'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ProfileImageProps {
  isHeader?: boolean
  disableAnimation?: boolean
}

export function ProfileImage({
  isHeader = false,
  disableAnimation = false,
}: ProfileImageProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const prefersReducedMotion = useReducedMotion()

  // Determine if animation should be disabled
  const shouldDisableAnimation = disableAnimation || prefersReducedMotion

  // Don't render the image in the header if we're on the home page
  if (isHeader && isHome) return null

  // Image sizes and styling based on position
  const imageStyles = isHeader
    ? 'size-16 rounded-xl shadow-sm shadow-stone-900/60 transition-shadow duration-200 hover:shadow-sm md:size-20 dark:shadow-stone-700/30'
    : 'size-32 rounded-xl shadow-2xl shadow-stone-900/60 md:size-40 dark:shadow-stone-700/30'

  // Create the image element with or without motion
  const createImageElement = () => {
    const imageComponent = (
      <Image
        className={imageStyles}
        src="/images/profile-photo.jpg"
        width={isHeader ? 80 : 160}
        height={isHeader ? 80 : 160}
        alt="Image of Joel O'Connor"
        priority
        sizes={isHeader ? '80px' : '(max-width: 768px) 128px, 160px'}
      />
    )

    // Return a standard div if animation is disabled
    if (shouldDisableAnimation) {
      return <div className="overflow-hidden rounded-xl">{imageComponent}</div>
    }

    // Return animated version if animation is enabled
    return (
      <motion.div
        layoutId="profile-image"
        className="overflow-hidden rounded-xl"
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 15,
          mass: 0.5,
          duration: 0.2,
        }}
      >
        {imageComponent}
      </motion.div>
    )
  }

  // Create the image element
  const imageElement = createImageElement()

  if (isHeader) {
    return (
      <Link href="/" className="transition-transform hover:scale-105">
        {imageElement}
      </Link>
    )
  }

  return imageElement
}
