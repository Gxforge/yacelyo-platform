import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'sans-serif']
      },
      colors: {
        brand: { 50: '#fdf2f8', 500: '#9B0970', 600: '#7c0a5c', 900: '#4a0442' },
        ink: { 900: '#0a0a0a', 700: '#171717', 500: '#525252', 300: '#a3a3a3', 100: '#f5f5f5' }
      },
      letterSpacing: { widest: '0.2em' }
    }
  },
  plugins: []
};
export default config;
