const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function updateDarkMode() {
    const prefersDarkMode = darkMediaQuery.matches;
    const storedDarkMode = localStorage.getItem('isDarkMode');

    const isDarkMode =
        storedDarkMode === 'true' ||
        (prefersDarkMode && storedDarkMode === null);

    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    if (isDarkMode === prefersDarkMode) {
        localStorage.removeItem('isDarkMode');
    }
}

updateDarkMode();

darkMediaQuery.addEventListener('change', updateDarkMode);
window.addEventListener('storage', updateDarkMode);
