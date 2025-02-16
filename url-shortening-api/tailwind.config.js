/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{razor,html}'],
    theme: {
        extend: {
            colors: {
                "cyan": "hsl(180, 66%, 49%)",
                "dark-violet": "hsl(257, 27%, 26%)",
                "red": "hsl(0, 87%, 67%)",
                "gray": "hsl(0, 0%, 75%)",
                "grayish-violet": "hsl(257, 7%, 63%)",
                "very-dark-blue": "hsl(255, 11%, 22%)",
                "very-dark-violet": "hsl(260, 8%, 14%)",
                "shorten-urls": "#EFF1F7",
            },
            backgroundImage: {
                'shorten-desktop-pattern': "url('/images/bg-shorten-desktop.svg')",
                'boost-desktop-texture': "url('/images/bg-boost-desktop.svg')",
                'shorten-mobile-pattern': "url('/images/bg-shorten-mobile.svg')",
                'boost-mobile-texture': "url('/images/bg-boost-mobile.svg')",
            }
        },
    },
    plugins: [],
}

