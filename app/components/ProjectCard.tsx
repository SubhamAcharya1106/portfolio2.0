'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export type ProjectProps = {
  title: string;
  about: string;
  achievement: string;
  tech: string[];
  platform: 'Web' | 'Mobile' | 'Both';
  links?: { label: string; url: string }[];
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  about,
  achievement,
  tech,
  platform,
  links,
  onClick,
}: ProjectProps) {
  return (
    <motion.div
      className="rounded-xl bg-white/10 p-6 text-left border border-indigo-700 shadow-lg hover:scale-[1.02] transition-all cursor-pointer relative"
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      {/* Top-right External Link Button */}
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering full card click
            onClick?.();
          }}
          className="text-white hover:text-indigo-300"
          title="View Links"
        >
          <FaExternalLinkAlt />
        </button>
      </div>

      {/* Project Content */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-2">{about}</p>
      <p className="text-xs text-indigo-300 italic mb-2">{achievement}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-indigo-800 text-white text-xs px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Platform Info */}
      <p className="text-xs text-right mt-4 italic text-yellow-400">
        Platform: {platform}
      </p>
    </motion.div>
  );
}
