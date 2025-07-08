import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Subham-Portfolio',
  description: 'A Next.js animated portfolio of Subham Acharya',
  icons: {
    icon: '/favicon2.ico', // 👈 new favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
