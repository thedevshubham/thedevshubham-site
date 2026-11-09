/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7EFE4',
        dark: '#14120D',
        ink: '#14120D',
        'forest-green': '#2D6A4F',
        muted: '#6B665C',
        line: '#2D6A4F40',
        lime: '#C7DE4A',
        'burnt-orange': '#CC5500',
        mint: '#A8E890',
        gold: '#EFC94C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
