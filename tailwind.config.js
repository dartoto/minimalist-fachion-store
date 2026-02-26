/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                beige: {
                    50: '#FDFCFB',
                    100: '#F5F5DC',
                    200: '#E3D5CA',
                },
                darkgray: {
                    800: '#333333',
                    900: '#1A1A1A',
                }
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            fontWeight: {
                light: 300,
            }
        },
    },
    plugins: [],
}
