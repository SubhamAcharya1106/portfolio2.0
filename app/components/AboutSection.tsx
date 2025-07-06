'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function AboutSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Hi, I break apps for a living…';
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
      className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Typewriter line */}
        <motion.p
          className="text-center text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 font-mono mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {typedText}
        </motion.p>

        {/* Grid: Left Text + Right Square Diagonal Images */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">A bit about me</h2>
            <div className="space-y-5 text-lg leading-8">
              <p>
                I’m <strong>Subham Acharya</strong> — a QA Engineer with a passion for building bulletproof software.
                Over the past <strong>3+ years</strong>, I’ve worked on mobile, web, and API testing across
                e-commerce, GIS, fintech, and Web3 domains.
              </p>
              <p>
                I’ve written <strong>250+ test cases</strong>, designed UAT flows, validated APIs with <strong>Postman</strong>,
                and used <strong>JIRA, MongoDB, SQL</strong>, and <strong>JMeter</strong> to uncover 200+ bugs that
                would’ve slipped into production.
              </p>
              <p>
                From reducing crash rates by 40% during app migration to improving load response by 20% —
                I ensure users don’t just use products, they trust them.
              </p>
              <p className="text-indigo-500 font-semibold">
                QA is not just about testing — it’s about quality ownership.
              </p>
            </div>
          </motion.div>

          {/* Diagonal Square Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 relative w-fit mx-auto"
          >
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000}>
              <div className="relative z-20 -translate-x-5">
                <Image
                  src="/images/subham1.jpg"
                  alt="Subham QA"
                  width={240}
                  height={240}
                  className="object-cover shadow-xl border-4 border-indigo-500 rounded-md"
                />
              </div>
            </Tilt>

            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1000}>
              <div className="relative z-10 translate-x-5">
                <Image
                  src="/images/subham2.jpg"
                  alt="Subham Working"
                  width={240}
                  height={240}
                  className="object-cover shadow-xl border-4 border-indigo-500 rounded-md"
                />
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Core Tools & Tech</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              'Postman', 'JIRA', 'SQL', 'MongoDB', 'JMeter', 'Android Studio',
              'TestFlight', 'UAT Testing', 'Regression', 'STLC', 'LoadRunner'
            ].map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-white rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
