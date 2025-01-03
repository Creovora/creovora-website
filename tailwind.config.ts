const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A0DAD', // Purple
        accent: '#FFD700', // Gold
        lightPurple: '#9B72C7',
        darkPurple: '#4B0082',
      },
      textColor: {
        accent: '#FFD700', // Gold
        lightPurple: '#9B72C7',
      },
    },
  },
  plugins: [],
};

export default config;