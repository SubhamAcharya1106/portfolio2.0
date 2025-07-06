'use client';

import { motion } from 'framer-motion';

export type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: ProjectProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-[#111827] border rounded-2xl p-5 w-full sm:w-[300px] transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-yellow-400">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="bg-blue-100 dark:bg-indigo-800 text-blue-800 dark:text-white text-xs font-medium px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
