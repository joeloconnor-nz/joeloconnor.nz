import Link from 'next/link'

import { HeaderNav } from './header-nav'
import { ThemeModeToggle } from './theme-mode-toggle'

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between p-6">
      <Link
        href="/"
        className="text-xl font-light tracking-tight text-purple-500 transition-colors sm:text-2xl md:text-3xl dark:text-purple-600 dark:hover:text-stone-300"
      >
        joeloconnor.nz
      </Link>
      <div className="flex items-center gap-4">
        <HeaderNav />
        <ThemeModeToggle />
      </div>
    </header>
  )
}
