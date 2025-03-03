module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include the proper path for your project
  ],
  theme: {
    extend: {
      animation: {
        shake: 'shake 10s ease-in-out infinite', // Shake animation
        shuffle: 'shuffle 3s infinite', // Shuffle animation
      },
      keyframes: {
        shake: {
          // '0%, 100%': { transform: 'translateY(-2px)' },
          '20%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(90deg)' },
          '60%': { transform: 'rotate(180deg)' },
          '80%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shuffle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 2100%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};