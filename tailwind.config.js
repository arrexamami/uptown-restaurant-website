/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#111014',
        'dark-light': '#1a1820',
        'dark-lighter': '#252329',
        'gold': '#C69A4A',
        'gold-light': '#d4a86b',
        'ivory': '#F4F0E8',
        'text-muted': '#b8b3a8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        'section': '80px',
      },
      borderRadius: {
        'card': '12px',
        'lg': '16px',
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'lg': '0 12px 48px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'grain': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" result=\"noise\" /></filter><rect width=\"100\" height=\"100\" fill=\"%23111014\" filter=\"url(%23noise)\" opacity=\"0.03\" /></svg>')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
