import SidePanel from '@/components/SidePanel';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import ThemeProvider from '@/contexts/ThemeProvider';
import Script from 'next/script';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wellcom! My Blog! <Yuu.log />',
  description: 'Generated by create yuu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-theme-bg`}>
        <ThemeProvider>
          <div className="w-full h-full flex">
            <SidePanel />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
