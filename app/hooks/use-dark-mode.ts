import { useEffect, useState } from 'react';

/**
 * A custom hook for dark/light modes.
 * @returns The current 'isDarkMode' value and a 'toggleDarkMode' method.
 */
export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();
    const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>();

    useEffect(() => {
        const darkMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
        );

        // Update state based on the <html> element's classes and the system theme
        const updateDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(isDark);
            setPrefersDarkMode(darkMediaQuery.matches);
        };

        // Observe changes to <html> element's classes
        const observer = new MutationObserver(updateDarkMode);
        observer.observe(document.documentElement, {
            attributeFilter: ['class'],
        });

        // Observe changes to system theme preference
        darkMediaQuery.addEventListener('change', updateDarkMode);

        // Update state on mount
        updateDarkMode();

        // Remove listeners on unmount
        return () => {
            observer.disconnect();
            darkMediaQuery.removeEventListener('change', updateDarkMode);
        };
    }, []);

    // Toggle dark mode by toggling the 'dark' class on the <html> element
    // The 'isDarkMode' state is automatically updated by the MutationObserver
    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle('dark');

        if (isDark === prefersDarkMode) {
            localStorage.removeItem('isDarkMode');
        } else {
            localStorage.setItem('isDarkMode', JSON.stringify(isDark));
        }
    };

    return { isDarkMode, toggleDarkMode };
}
