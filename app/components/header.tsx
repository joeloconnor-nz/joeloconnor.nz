import Link from 'next/link'

import { DarkModeToggle } from './dark-mode-toggle'
import { HeaderNav } from './header-nav'

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between p-6">
      <Link
        href="/"
        className="text-xl font-light tracking-tight text-purple-500 transition-colors dark:text-purple-600 dark:hover:text-stone-300 sm:text-2xl md:text-3xl"
      >
        joeloconnor.nz
      </Link>
      <div className="flex gap-4">
        <HeaderNav />
        <DarkModeToggle />
      </div>
    </header>
  )
}
