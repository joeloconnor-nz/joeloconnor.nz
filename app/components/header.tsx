import Link from 'next/link';
import { DarkModeToggle } from './dark-mode-toggle';
import { HeaderNav } from './header-nav';

export function Header() {
    return (
        <header className="flex flex-row items-center justify-between p-6">
            <Link
                href="/"
                className="text-xl font-light text-purple-500 transition-colors hover:text-stone-700 dark:text-purple-600 hover:dark:text-stone-300 sm:text-2xl md:text-3xl"
            >
                joeloconnor.nz
            </Link>

            <div className="flex flex-row items-center gap-2">
                <HeaderNav />
                <DarkModeToggle />
            </div>
        </header>
    );
}
