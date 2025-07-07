'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Ardem Incorporated',
    title: 'QA Engineer',
    date: 'Jan 2025 – Present',
    points: [
      'Tested a GIS drawing platform with 100+ test cases.',
      'Logged 30+ bugs and improved coverage by 35%.',
      'Led a QA team of 3 engineers.',
    ],
  },
  {
    company: 'Bijnis (New Delhi)',
    title: 'QA Engineer',
    date: 'Mar 2022 – Oct 2024',
    points: [
      'Tested across Android, iOS, and Web for B2B SaaS.',
      'Wrote 300+ test cases and used MongoDB, Postman.',
      'Reduced defects by 35%, improved performance by 20%.',
    ],
  },
  {
    company: 'Logicbuds',
    title: 'Associate QA Specialist',
    date: 'Jun 2021 – Mar 2022',
    points: [
      'Tested 50+ healthcare flows manually and via APIs.',
      'Reduced post-release bugs by 30%.',
      'Performed cross-browser and responsive testing.',
    ],
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0); // first one open

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-[#0e0e1c] text-black dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
          My Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setOpenIndex(index)}
                transition={{ layout: { duration: 0.5, type: 'spring' } }}
                layout
                className={`overflow-hidden rounded-xl shadow-lg bg-white dark:bg-[#1b1b2f] border-l-4 ${
                  isOpen ? 'border-blue-600 dark:border-indigo-400' : 'border-transparent'
                } cursor-pointer`}
              >
                <motion.div layout className="p-6">
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-indigo-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company} • {exp.date}
                  </p>

                  {isOpen && (
                    <motion.ul
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2"
                    >
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-sm">{point}</li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
