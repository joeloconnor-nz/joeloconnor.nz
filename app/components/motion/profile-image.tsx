'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ProfileImageProps {
  isHeader?: boolean
}

export function ProfileImage({ isHeader = false }: ProfileImageProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Don't render the image in the header if we're on the home page
  if (isHeader && isHome) return null

  // Image sizes and styling based on position
  const imageStyles = isHeader
    ? 'size-16 rounded-xl shadow-sm shadow-stone-900/60 transition-shadow duration-200 hover:shadow-sm md:size-20 dark:shadow-stone-700/30'
    : 'size-40 rounded-xl shadow-2xl shadow-stone-900/60 md:size-44 dark:shadow-stone-700/30'

  // Wrap in Link only in header
  const imageElement = (
    <motion.div
      layoutId="profile-image"
      className="overflow-hidden rounded-xl"
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.8,
        duration: 0.3, // Slightly faster animation
      }}
    >
      <Image
        className={imageStyles}
        src="/images/profile-photo.jpg"
        width={isHeader ? 80 : 176}
        height={isHeader ? 80 : 176}
        alt="Image of Joel O'Connor"
        priority
      />
    </motion.div>
  )

  if (isHeader) {
    return (
      <Link href="/" className="transition-transform hover:scale-105">
        {imageElement}
      </Link>
    )
  }

  return imageElement
}
