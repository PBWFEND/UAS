// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7F00FF',
        secondary: '#E100FF',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animate')],
};
