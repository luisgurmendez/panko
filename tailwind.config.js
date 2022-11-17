/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'tilt-shaking': {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg);' },
          '12%': { transform: 'translate(3px, 3px) rotate(2deg);' },
          '25%': { transform: 'translate(0, 0) rotate(0eg);' },
          '37%': { transform: 'translate(3px, -3px) rotate(-2deg);' },
          '50%': { transform: 'translate(0, 0) rotate(0deg);' },
          '62%': { transform: 'translate(-3px, 3px) rotate(5deg);' },
          '75%': { transform: 'translate(0, 0) rotate(0deg);' },
          '87%': { transform: 'translate(-3px, -3px) rotate(-5deg);' },
          '100%': { transform: 'translate(0px, 0px) rotate(0deg);' }
        },
        'scale': {
          '0%': { transform: 'scale(1);' },
          '100%': { transform: 'scale(1.1);' }
        },
      },
      animation: {
        'shake': 'tilt-shaking 0.2s infinite',
        'slow-shake': 'tilt-shaking 0.4s infinite',
        'scale': 'scale 0.4s 1',
      }
    },
  },
  plugins: [],
}
