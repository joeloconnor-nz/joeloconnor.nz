/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            minHeight: {
                // Workaround for mobile Safari issue with 100vh
                screen: ['100vh', '-webkit-fill-available'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
