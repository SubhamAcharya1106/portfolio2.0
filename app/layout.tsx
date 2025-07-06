import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor'; // 👈 import

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio 2.0',
  description: 'A Next.js animated portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor /> {/* 👈 add it */}
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
