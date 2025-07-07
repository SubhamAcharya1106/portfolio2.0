import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Subham-Resume', 
  description: 'A Next.js animated portfolio of Subham Acharya',
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
