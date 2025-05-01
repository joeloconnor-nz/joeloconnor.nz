'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

interface AnimatedHeadingProps {
  firstText?: string
  secondText?: string
  thirdText?: string
  className?: string
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  firstText = 'Hey!',
  secondText = " I'm Joel",
  thirdText = '👋',
  className = 'flex h-full w-full justify-center gap-0 font-sans text-5xl font-semibold',
}) => {
  const { isTyping, setIsTyping, typedText } = useTypingAnimation(secondText)
  const typingDone = typedText.length === secondText.length

  return (
    <h1 className={className}>
      <motion.span
        className="text-purple-500 dark:text-purple-600"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', duration: 0.7, bounce: 0.5 }}
        onAnimationComplete={() => setIsTyping(true)}
      >
        {firstText}
      </motion.span>
      {isTyping && (
        <>
          <span className="whitespace-pre">{typedText}</span>
          {typingDone && <span className="ml-3">{thirdText}</span>}
        </>
      )}
    </h1>
  )
}
