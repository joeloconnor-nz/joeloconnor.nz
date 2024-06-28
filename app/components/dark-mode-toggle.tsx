'use client'

import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react'

import { useDarkMode } from '@/hooks/use-dark-mode'

export function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  if (isDarkMode === undefined) {
    return (
      <div className="text-stone-700 dark:text-stone-300">
        <SunMoonIcon />
      </div>
    )
  }

  return (
    <button
      className="text-stone-700 transition-colors hover:text-purple-500 dark:text-stone-300 dark:hover:text-purple-500"
      aria-label="Theme Toggle"
      aria-pressed={isDarkMode}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
