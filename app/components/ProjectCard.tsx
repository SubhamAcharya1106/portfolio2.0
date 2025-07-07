'use client';

import { motion } from 'framer-motion';
import { FaMobileAlt, FaGlobe, FaLaptopCode } from 'react-icons/fa';

export type ProjectProps = {
  title: string;
  about: string;
  achievement: string;
  tech: string[];
  platform: 'Web' | 'Mobile' | 'Both';
};

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'Web':
      return <FaGlobe className="text-lg text-white" />;
    case 'Mobile':
      return <FaMobileAlt className="text-lg text-white" />;
    case 'Both':
      return <FaLaptopCode className="text-lg text-white" />;
    default:
      return null;
  }
};

export default function ProjectCard({ title, about, achievement, tech, platform }: ProjectProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#1e1e2f] to-[#2b2b3f] rounded-2xl p-6 w-full sm:w-[320px] shadow-md border border-[#333348] hover:scale-[1.03] hover:shadow-xl transition duration-300 ease-in-out"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-indigo-400">{title}</h3>
        <div className="bg-indigo-600 p-2 rounded-full">{getPlatformIcon(platform)}</div>
      </div>
      <p className="text-sm text-gray-300 mb-2">
        <span className="font-semibold text-white">About:</span> {about}
      </p>
      <p className="text-sm text-gray-300 mb-4">
        <span className="font-semibold text-white">Achievement:</span> {achievement}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((tag, i) => (
          <span
            key={i}
            className="bg-indigo-800 text-white text-xs px-3 py-1 rounded-full shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
