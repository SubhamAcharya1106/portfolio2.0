'use client';

import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const handleScroll = (e: any, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-[#0e0e1c] shadow-md z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-white">Portfolio 2.0</h1>
        <div className="space-x-6 hidden md:flex">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScroll(e, id)}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
