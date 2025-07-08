'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export default function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <motion.section
    id="Home"
      className="relative min-h-screen px-6 py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60 },
            size: { value: 2, random: { enable: true, minimumValue: 1 } },
            color: { value: ['#ffffff', '#a855f7', '#facc15'] },
            move: { enable: true, speed: 0.3, direction: 'none', outModes: { default: 'bounce' } },
            opacity: {
              value: 0.7,
              random: true,
              animation: { enable: true, speed: 0.5, minimumValue: 0.2, sync: false },
            },
            shape: { type: 'circle' },
          },
          background: { color: 'transparent' },
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 80, duration: 0.4 } },
          },
        }}
      />

      <div className="relative z-10 flex-1 text-center md:text-left space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block mb-2">Subham Acharya</span>
          <span className="glitter-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent animate-shimmer">
            Where others ship features, I ship confidence.
          </span>
        </motion.h1>

        <TypeAnimation
          sequence={[
            'I test like a user. Think like a dev. Break like a hacker.',
            2000,
            'Every missed bug is a user’s frustration. Not on my watch.',
            2000,
            'I ship confidence, not just test cases.',
            2000,
            'Good testers don’t sleep. They regress.',
            2000,
            'The only person who loves errors more than a compiler.',
            2000,
            "I don't break apps. They break themselves. I just reveal it.",
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 font-mono"
        />
      </div>

      <motion.div
        className="relative z-10 flex-1 mt-10 md:mt-0 flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
          <Image
            src="/images/subham2.jpg"
            alt="Subham Hero"
            width={380}
            height={380}
            className="rounded-xl shadow-2xl border-4 border-indigo-500 object-cover"
          />
        </Tilt>

        <div className="w-full max-w-md bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl shadow-lg px-6 py-4 flex justify-between items-center text-center">
          {[
            { number: '4+', label: 'Years of Experience' },
            { number: '12+', label: 'Applications Tested' },
            { number: '1000+', label: 'Test Cases' },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 px-2 border-r last:border-none border-gray-300 dark:border-gray-600">
              <p className="text-2xl font-bold text-indigo-600 dark:text-yellow-400">{item.number}</p>
              <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </motion.section>
  );
}
