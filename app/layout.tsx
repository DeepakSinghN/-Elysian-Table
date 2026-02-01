import type { Metadata } from 'next';
import { Caveat, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const helvetica = localFont({
  src: [
    {
      path: './fonts/Helvetica LT Pro Roman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Helvetica LT Pro Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Helvetica LT Pro Oblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Helvetica LT Pro Bold Oblique.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-body',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-logo',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elysian Table | Fine Dining Experience',
  description: 'Elysian Table - Where Flavor Meets Memory. A luxury contemporary dining experience with farm-to-table menu.',
};

import SmoothScroll from './components/SmoothScroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${helvetica.variable} ${caveat.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
