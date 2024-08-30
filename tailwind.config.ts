import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        firstCard: {
          background: '#780e35'
        },
        primary: {
          background: '#000000',
          text: 'rgb(255, 255, 255)'
        },
        secondary: {
          background: '#4A657A',
          text: 'rgb(80, 85, 75)'
        },
        accent: '#ab9c65',
        line: 'rgb(244, 243, 239)'
      },
      fontFamily: {
        static: ['var(--font-lancelot)'],
        mono: ['var(--font-lateef-regular)']
      }
    }
  },
  plugins: []
};
export default config;
