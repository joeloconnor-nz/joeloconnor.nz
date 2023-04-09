'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { CircleIcon } from './icons/circle-icon';

export function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);

    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        setIsDarkMode(isDark);

        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;

        if (isDark === prefersDark) {
            localStorage.removeItem('isDarkMode');
        } else {
            localStorage.setItem('isDarkMode', JSON.stringify(isDark));
        }
    };

    if (isDarkMode === undefined) {
        return (
            <div className="p-2">
                <CircleIcon />
            </div>
        );
    }

    return (
        <button
            className="p-2 transition-colors hover:text-stone-500 dark:text-stone-400"
            aria-label="Dark Mode"
            aria-pressed={isDarkMode}
            onClick={toggleDarkMode}
        >
            {isDarkMode ? (
                <SunIcon className="h-6 w-6" />
            ) : (
                <MoonIcon className="h-6 w-6" />
            )}
        </button>
    );
}
