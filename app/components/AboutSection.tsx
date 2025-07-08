'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'A bit about me';
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[i]);
        setI(i + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [i]);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-12 md:py-16 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.p
          className="text-center text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 font-mono mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {typedText}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-lg leading-8"
          >
            <p>
              I’m <strong>Subham Acharya</strong> — a QA Engineer with a passion for building bulletproof software.
              Over the past <strong>4 years</strong>, I’ve been breaking mobile & web apps for a living —
              from e-commerce to GIS, fintech to Web3 — even API and database bugs aren’t safe from me.
            </p>
            <p>
              From reducing crash rates by 40% during app migration to improving load response by 20% —
              I ensure users don’t just use products, they trust them.
            </p>
            <p className="text-indigo-500 font-semibold">
              QA is not just about testing — it’s about quality ownership.
            </p>

            {/* Tools Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Core Tools & Tech</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Postman', 'JIRA', 'SQL', 'MongoDB', 'JMeter', 'Android Studio',
                  'TestFlight', 'UAT Testing', 'Regression', 'STLC', 'LoadRunner'
                ].map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-white text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <Image
              src="/images/subham1.jpg"
              alt="Subham QA"
              width={240}
              height={240}
              className="rounded-md border-4 border-indigo-500 shadow-lg"
            />
            <Image
              src="/images/subham3.jpg"
              alt="Subham Working"
              width={240}
              height={200}
              className="rounded-md border-4 border-indigo-500 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
