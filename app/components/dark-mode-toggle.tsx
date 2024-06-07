'use client';

import { useDarkMode } from '@/hooks/use-dark-mode';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { CircleIcon } from './icons/circle-icon';

export function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    if (isDarkMode === undefined) {
        return (
            <div className="p-2 text-stone-700 dark:text-stone-300">
                <CircleIcon />
            </div>
        );
    }

    return (
        <button
            className="p-2 text-stone-700 transition-colors hover:text-purple-500 dark:text-stone-300 dark:hover:text-purple-500"
            aria-label="Dark Mode"
            aria-pressed={isDarkMode}
            onClick={toggleDarkMode}
        >
            {isDarkMode ? (
                <SunIcon className="size-6" />
            ) : (
                <MoonIcon className="size-6" />
            )}
        </button>
    );
}
