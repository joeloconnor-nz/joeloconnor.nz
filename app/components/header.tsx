'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { HeaderNav } from './header-nav'
import { ProfileImage } from './motion/profile-image'
import { ThemeModeToggle } from './theme-mode-toggle'

export function Header() {
  const pathname = usePathname()

  return (
    <header
      className={twMerge(
        'flex flex-row items-center p-6',
        pathname === '/' ? 'justify-end' : 'justify-between',
      )}
    >
      {pathname !== '/' && <ProfileImage isHeader />}
      <div className="flex items-center gap-4">
        <HeaderNav />
        <ThemeModeToggle />
      </div>
    </header>
  )
}
