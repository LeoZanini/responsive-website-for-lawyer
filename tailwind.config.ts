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
        primary: {
          background: '#0A1F44',
          text: 'rgb(255, 255, 255)'
        },
        secondary: {
          background: '#4A657A',
          text: 'rgb(80, 85, 75)'
        },
        accent: '#DAA520',
        line: 'rgb(244, 243, 239)'
      },
      fontFamily: {
        cmtiempo: ['cmtiempo', 'serif'],
        'din-next': ['din-next-w01-light', 'din-next-w02-light', 'din-next-w10-light', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
