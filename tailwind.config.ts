import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // App directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A0DAD', // Purple
        accent: '#FFD700', // Gold
        lightPurple: '#9B72C7',
        darkPurple: '#4B0082',
      },
    },
  },
  plugins: [],
};

export default config;