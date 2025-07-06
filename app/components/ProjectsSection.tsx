'use client';

import { motion } from 'framer-motion';
import ProjectCard, { ProjectProps } from './ProjectCard';

const projects: ProjectProps[] = [
  {
    title: 'Quick Commerce App',
    description: 'Hyperlocal delivery with real-time inventory.',
    tech: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive developer portfolio using Next.js.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'eCommerce QA Suite',
    description: 'Test automation for eCommerce platform.',
    tech: ['Postman', 'JMeter', 'MongoDB'],
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-[#0e0e1c] text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
