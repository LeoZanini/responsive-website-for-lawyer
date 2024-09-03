import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const lateef = localFont({
  src: './fonts/Lateef-Regular.ttf',
  display: 'auto',
  weight: '400',
  variable: '--font-lateef-regular'
});

const lancelot = localFont({
  src: './fonts/Lancelot-Regular.ttf',
  weight: '400',
  display: 'auto',
  variable: '--font-lancelot'
});

const robotoCondesedRegular = localFont({
  src: './fonts/RobotoCondensed-Regular.ttf',
  weight: '400',
  display: 'auto',
  variable: '--font-roboto-condensed-regular'
});

const playfairDisplay = localFont({
  src: './fonts/PlayfairDisplay-VariableFont_wght.ttf',
  weight: '400',
  display: 'auto',
  variable: '--font-playfair-display'
});

const libreBaskerville = localFont({
  src: './fonts/LibreBaskerville-Regular.ttf',
  weight: '400',
  display: 'auto',
  variable: '--font-libre-baskerville'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className}${lateef.className}${lancelot.className}${robotoCondesedRegular.className}${playfairDisplay.className}${libreBaskerville.className}`}>
      <body className={``}>{children}</body>
    </html>
  );
}
