'use client'

import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'motion/react'

/**
 * Custom hook for creating a typing animation effect
 * @param text - The text to be typed
 * @param speed - The typing speed in milliseconds
 */
const useTypingAnimation = (text: string, speed = 50) => {
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (isTyping && typedText.length < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [isTyping, typedText, text, speed])

  return { isTyping, setIsTyping, typedText }
}

/**
 * Props for the AnimatedHeading component
 */
interface AnimatedHeadingProps {
  /** The first text to be displayed (default: 'Hey!') */
  firstText?: string
  /** The second text to be typed (default: "I'm Joel") */
  secondText?: string
  /** The third text/emoji to be displayed after typing (default: '👋') */
  thirdText?: string
  /** Additional CSS classes for the heading */
  className?: string
}

const MOTION_CONFIG = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { type: 'spring', duration: 0.7, bounce: 0.5 },
} as const

const baseHeadingClasses = {
  layout: 'flex h-full w-full justify-center gap-0',
  typography: 'font-sans text-5xl font-semibold',
}

const firstTextClasses = {
  color: 'text-purple-500 dark:text-purple-600',
}

/**
 * An animated heading component that displays text with a typing animation effect
 */
export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  firstText = 'Hey!',
  secondText = "I'm Joel",
  thirdText = '👋',
  className,
}) => {
  const { isTyping, setIsTyping, typedText } = useTypingAnimation(secondText)
  const isTypingComplete = typedText.length === secondText.length

  return (
    <h1
      className={clsx(
        baseHeadingClasses.layout,
        baseHeadingClasses.typography,
        className,
      )}
    >
      <motion.span
        className={clsx(firstTextClasses.color)}
        {...MOTION_CONFIG}
        onAnimationComplete={() => setIsTyping(true)}
      >
        {firstText}
      </motion.span>
      {isTyping && (
        <>
          <span className="whitespace-pre">{typedText}</span>
          {isTypingComplete && <span className="ml-3">{thirdText}</span>}
        </>
      )}
    </h1>
  )
}
