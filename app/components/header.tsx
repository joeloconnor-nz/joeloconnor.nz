import Link from 'next/link';
import { HeaderNav } from './header-nav';
import { MoonIcon } from './icons/moon';

export function Header() {
    return (
        <header className="flex flex-row items-center justify-between p-6">
            <Link
                href="/"
                className="text-xl font-light text-purple-500 transition-colors hover:text-stone-700 dark:text-purple-600 hover:dark:text-stone-300 sm:text-2xl md:text-3xl"
            >
                joeloconnor.nz
            </Link>

            <HeaderNav />

            {/* Temporarily hiding dark mode toggle until implemented */}
            <button
                className="hidden p-2 transition-colors hover:text-stone-500 dark:text-stone-400"
                aria-label="Toggle Dark Mode"
            >
                <MoonIcon />
            </button>
        </header>
    );
}
