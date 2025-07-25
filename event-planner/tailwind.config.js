/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B46EF',
        secondary: '#8B5CF6',
        accent: '#C7D2FE',
        
        appBackgroundStart: '#a8c0ff',
        appBackgroundEnd: '#3f2b96',
        
        glassBgLight: 'rgba(255, 255, 255, 0.15)', 
        glassBgDark: 'rgba(0, 0, 0, 0.1)',     
        glassBorder: 'rgba(255, 255, 255, 0.3)', 
        
        glassTextLight: '#FFFFFF', 
        glassTextDark: '#1F2937',  
        glassPlaceholder: 'rgba(255, 255, 255, 0.7)', 
        
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',

        cardBackground: '#FFFFFF',
        borderColor: '#E2E8F0',
        textPrimary: '#374151',
        textSecondary: '#6B7280',
        dark: '#1F2937',
        light: '#F8F9FA',
        mediumLight: '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'], 
        body: ['Inter', 'sans-serif'],  
      },
      boxShadow: {
        'glass-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glass-lg': '0 20px 30px -8px rgba(0, 0, 0, 0.2)',
        'glass-md': '0 10px 15px -3px rgba(0, 0, 0, 0.15)',
        'glass-sm': '0 5px 10px -2px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        'full': '9999px',
      },
      
      fontSize: {
        'xs': ['0.65rem', { lineHeight: '1rem' }],    
        'sm': ['0.75rem', { lineHeight: '1.15rem' }], 
        'base': ['0.875rem', { lineHeight: '1.4rem' }], 
        'lg': ['0.95rem', { lineHeight: '1.6rem' }],   
        'xl': ['1.05rem', { lineHeight: '1.65rem' }],   
        '2xl': ['1.25rem', { lineHeight: '1.8rem' }],     
        '3xl': ['1.5rem', { lineHeight: '2rem' }],   
        '4xl': ['2rem', { lineHeight: '2.25rem' }],   
        '5xl': ['2.5rem', { lineHeight: '1' }],       
      },
      spacing: { 
        '0.5': '0.1rem',
        '1': '0.2rem',
        '1.5': '0.3rem',
        '2': '0.4rem',
        '2.5': '0.5rem',
        '3': '0.6rem',
        '3.5': '0.7rem',
        '4': '0.8rem', 
        '5': '1rem',   
        '6': '1.2rem', 
        '8': '1.6rem', 
        '10': '2rem',  
       
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
    function ({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-sm': { 'backdrop-filter': 'blur(4px)', },
        '.backdrop-blur-md': { 'backdrop-filter': 'blur(8px)', },
        '.backdrop-blur-lg': { 'backdrop-filter': 'blur(12px)', },
        '.backdrop-blur-xl': { 'backdrop-filter': 'blur(16px)', },
        '.text-gradient-main': {
          'background-image': 'linear-gradient(to right, #A8C0FF, #3F2B96)', 
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}