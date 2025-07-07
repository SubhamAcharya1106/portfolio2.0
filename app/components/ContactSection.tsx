'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const closeModal = () => setShowSuccessModal(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section
      id="contact"
      className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden"
    >
      <motion.div
        className="max-w-xl mx-auto text-center z-10"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          🚀 Have something exciting to test,<br /> collaborate or crash on purpose?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          🧪 Have a product that needs breaking before it breaks users? I’m your guy.
          Let’s connect — I find bugs before your users do. Over chai, code, or conversation.
        </motion.p>

        <motion.p
          className="text-md text-gray-400 mt-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          🔗 Connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/subham-acharya/"
            className="text-sky-400 hover:underline"
            target="_blank"
          >
            LinkedIn
          </a>{' '}
          or 📧 drop a mail at{' '}
          <a
            href="mailto:subham2639@gmail.com"
            className="text-sky-400 hover:underline"
          >
            subham2639@gmail.com
          </a>
        </motion.p>
      </motion.div>

      {/* ✅ Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-sm mx-auto text-center shadow-lg"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                Wooohoooooo!!! 🎉
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Thank you for sharing your details. I will get back to you as early as possible.
              </p>
              <button
                onClick={closeModal}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition"
              >
                Okay
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
