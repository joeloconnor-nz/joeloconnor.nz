'use client';

import { MoonIcon } from '@heroicons/react/24/solid';

export function DarkModeToggle() {
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button
            className="p-2 transition-colors hover:text-stone-500 dark:text-stone-400"
            aria-label="Dark Mode"
            aria-pressed={true}
            onClick={toggleDarkMode}
        >
            <MoonIcon className="h-6 w-6" />
        </button>
    );
}
