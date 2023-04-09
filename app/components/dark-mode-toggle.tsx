'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { CircleIcon } from './icons/circle-icon';

export function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();
    const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>();

    useEffect(() => {
        const darkMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
        );

        const updateDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(isDark);
            setPrefersDarkMode(darkMediaQuery.matches);
        };

        updateDarkMode();
        darkMediaQuery.addEventListener('change', updateDarkMode);
        window.addEventListener('storage', updateDarkMode);

        return () => {
            darkMediaQuery.removeEventListener('change', updateDarkMode);
            window.removeEventListener('storage', updateDarkMode);
        };
    }, []);

    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        setIsDarkMode(isDark);

        if (isDark === prefersDarkMode) {
            localStorage.removeItem('isDarkMode');
        } else {
            localStorage.setItem('isDarkMode', JSON.stringify(isDark));
        }
    };

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
                <SunIcon className="h-6 w-6" />
            ) : (
                <MoonIcon className="h-6 w-6" />
            )}
        </button>
    );
}
