'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { HeaderNav } from './header-nav'
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
      {pathname !== '/' && (
        <Link
          href="/"
          className="text-xl font-light tracking-tight text-purple-500 transition-colors sm:text-2xl md:text-3xl dark:text-purple-600 dark:hover:text-stone-300"
        >
          joeloconnor.nz
        </Link>
      )}
      <div className="flex items-center gap-4">
        <HeaderNav />
        <ThemeModeToggle />
      </div>
    </header>
  )
}
