/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['TuskerGrotesk', 'sans-serif'],
        'tusker': ['TuskerGrotesk', 'sans-serif'],
      },
      // Customize font weights to make them less heavy
      fontWeight: {
        thin: '100',
        extralight: '100',
        light: '100',
        normal: '100',
        medium: '100',
        semibold: '200',
        bold: '200',
        extrabold: '300',
        black: '300',
      },
      // Adding letter spacing to TuskerGrotesk font
      letterSpacing: {
        'tusker': '0.025em',
      },
      // Adding the missing xs breakpoint
      screens: {
        'xs': '480px',
        // Keeping existing breakpoints
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}