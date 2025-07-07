'use client';

import { motion } from 'framer-motion';
import ProjectCard, { ProjectProps } from './ProjectCard';

const projects: ProjectProps[] = [
  {
    title: 'Yuga – International Competition App',
    about: 'Cross-platform app with real-time data sync and user-specific features.',
    achievement: 'Performed live UAT at Yuga Delhi; tested WebSocket implementation.',
    tech: ['WebSocket', 'Chrome DevTools', 'Jira', 'Cross-user testing'],
    platform: 'Web',
  },
  {
    title: 'WMS – Warehouse Management System',
    about: 'Manages stock, rack, and real-time inventory across warehouses.',
    achievement: 'Sole tester; covered regression, integration, and system testing.',
    tech: ['Postman', 'MongoDB', 'Manual Testing'],
    platform: 'Both',
  },
  {
    title: 'Store to Door – Quick Commerce',
    about: 'Quick commerce app for rural areas with real-time tracking.',
    achievement: 'Validated critical checkout, payments, and routing flows.',
    tech: ['PostMan', 'Regression', 'System integration'],
    platform: 'Both',
  },
  {
    title: 'Uwanxt Home',
    about: 'Smart home app to control appliances across rooms.',
    achievement: 'Tested Bluetooth and automation logic on Android & iOS.',
    tech: ['Bluetooth API', 'Manual Testing', 'REST'],
    platform: 'Mobile',
  },
  {
    title: 'Smart Wholesalers CRM',
    about: 'CRM for managing orders, leads, and flows.',
    achievement: 'Manually tested both web and mobile CRM platforms.',
    tech: ['MongoDB', 'JIRA', 'Postman'],
    platform: 'Both',
  },
  {
    title: 'Dia Hotels Booking App',
    about: 'Hotel booking with filters, availability, and payments.',
    achievement: 'Covered full booking flow and API testing.',
    tech: ['React Native', 'Redux', 'TestRail'],
    platform: 'Both',
  },
  {
    title: 'Sourcing App',
    about: 'Suppliers manage delivery schedules and material sourcing.',
    achievement: 'Device compatibility and validation on Android/iOS.',
    tech: ['Android', 'iOS', 'Firebase', 'Manual Testing'],
    platform: 'Mobile',
  },
  {
    title: 'Veera Games',
    about: 'Web3 Based Gaming Applications',
    achievement: 'Tested UI components using mocks and validation tools.',
    tech: ['Web Sockets', 'Game Play testing', 'wallet integration testing'],
    platform: 'Web',
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen px-6 py-24 bg-[#0d0d18] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-500">Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
