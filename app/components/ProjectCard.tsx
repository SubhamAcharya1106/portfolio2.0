'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  tech: string[];
};

const ProjectCard = ({ title, description, tech }: Props) => {
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
      className="bg-white border rounded-2xl p-5 w-full sm:w-[300px] transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-700 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
