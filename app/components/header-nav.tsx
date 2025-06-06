import { ReactNode } from 'react'
import Link from 'next/link'

export function HeaderNav() {
  return (
    <nav>
      <ul>
        <HeaderNavLink href="/contact">Contact</HeaderNavLink>
      </ul>
    </nav>
  )
}

interface HeaderNavProps {
  href: string
  children: ReactNode
}

function HeaderNavLink(props: HeaderNavProps) {
  return (
    <li className="font-medium text-stone-700 transition-colors hover:text-purple-500 dark:text-stone-300 dark:hover:text-purple-500">
      <Link className="" href={props.href}>
        {props.children}
      </Link>
    </li>
  )
}
