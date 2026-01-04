import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'purple-primary': '#9333EA',
                'blue-primary': '#3B82F6',
                'green-primary': '#10B981',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #9333EA 0%, #3B82F6 50%, #10B981 100%)',
                'gradient-secondary': 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)',
                'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(147, 51, 234, 0.5)',
                'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
                'glow-green': '0 0 20px rgba(16, 185, 129, 0.5)',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                dark: {
                    primary: "#9333EA",
                    secondary: "#3B82F6",
                    accent: "#10B981",
                    neutral: "#1a1a2e",
                    "base-100": "#0a0a0a",
                },
                light: {
                    primary: "#9333EA",
                    secondary: "#3B82F6",
                    accent: "#10B981",
                    neutral: "#f3f4f6",
                    "base-100": "#ffffff",
                },
            },
        ],
        darkTheme: "dark",
    },
}
