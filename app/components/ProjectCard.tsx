'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-commerce Web Testing',
    description: 'Tested entire user flow: login, product search, cart, and payment gateway.',
    tech: ['JIRA', 'Postman', 'STLC'],
  },
  {
    title: 'Quick Commerce App QA',
    description: 'Led QA for a hyperlocal delivery app. Reduced bugs by 40%.',
    tech: ['Android Studio', 'SQL', 'Regression'],
  },
  {
    title: 'Banking API Automation',
    description: 'Wrote and executed 250+ test cases for API validations and edge cases.',
    tech: ['Postman', 'JMeter', 'MongoDB'],
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-20 bg-gray-100 dark:bg-gray-950 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Some highlights of what I’ve tested and delivered.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
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
