'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Resume', href: '/Resume-Subham_Acharya.pdf', external: true },
  { label: 'Lets Chat', id: 'contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: any, id: string) => {
    e.preventDefault();
    setMenuOpen(false); // first close the mobile menu

    // slight delay to ensure menu closes before scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-[#0e0e1c] shadow-md z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-white">Subham</h1>

        <div className="space-x-6 hidden md:flex">
          {navItems.map(({ label, id, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                {label}
              </a>
            ) : (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleScroll(e, id!)}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                {label}
              </a>
            )
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden mt-2 bg-white dark:bg-[#0e0e1c] rounded shadow-lg overflow-hidden"
          >
            {navItems.map(({ label, id, href, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {label}
                </a>
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, id!)}
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {label}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
