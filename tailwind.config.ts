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
          background: '#323232',
          text: 'rgb(255, 255, 255)'
        },
        secondary: {
          background: '#4A657A',
          text: 'rgb(80, 85, 75)'
        },
        accent: '#ab9c65',
        accentComplement: '#a89a6680',
        line: 'rgb(244, 243, 239)'
      },
      fontFamily: {
        lancelot: ['Lancelot'],
        robotoCondesedRegular: ['RobotoCondensed-Regular'],
        libre_Baskerville: ['Libre Baskerville'],
        inter: ['Inter'],
        lateef: ['Lateef'],
        playfairDisplay: ['Playfair Display']
      }
    }
  },
  plugins: []
};
export default config;
