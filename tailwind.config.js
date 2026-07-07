/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Two typefaces only: Syne (display/headings) + Poppins (everything else).
        // `serif` is kept as an alias so existing `font-serif` accent classes
        // resolve to Poppins — no third font loads.
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FFFFFF',
        ink: '#111111',
        warmGray: '#6B6B6B',
        accent: '#111111',
        subtle: '#E5E5E5',
        darkBg: '#121212',
        darkInk: '#EDEDED',
        darkSubtle: '#2A2A2A',
        darkWarmGray: '#888888',
        highlight: '#E9FF00',      // hero name accent — dark mode (chartreuse-yellow)
        highlightSoft: '#A87F00',  // hero name accent — light mode (gold, AA-large on cream)
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
