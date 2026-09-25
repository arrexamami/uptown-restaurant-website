module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111014',
        'dark-2': '#17171b',
        'dark-3': '#1e1d23',
        gold: '#c69a4a',
        ivory: '#f4f0e8',
        muted: '#b3aca0',
        border: '#2d2b31',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 28px rgba(0,0,0,0.32)',
      },
      backgroundImage: {
        grain: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
