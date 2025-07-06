'use client';

import { motion } from 'framer-motion';

export default function ResumeSection() {
  return (
    <motion.section
      id="resume"
      className="min-h-screen px-6 py-16 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6">Resume</h2>
      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl w-full">
        <h3 className="text-xl font-semibold mb-2">QA Engineer (Manual Testing)</h3>
        <p className="text-gray-600 mb-4">
          3+ years experience across B2B SaaS, e-commerce, quick commerce, and more. Expert in functional, integration, database, and mobile app testing.
        </p>

        <h4 className="text-lg font-medium mt-4 mb-2">Skills</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Manual Testing (Web, iOS, Android)</li>
          <li>SQL, MongoDB</li>
          <li>API Testing</li>
          <li>Agile & Scrum Environments</li>
          <li>Jira, TestRail</li>
        </ul>
      </div>
    </motion.section>
  );
}
