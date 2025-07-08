'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard, { ProjectProps } from './ProjectCard';

const projects: ProjectProps[] = [
  {
    title: 'Yuga – International Competition App',
    about: 'Cross-platform app with real-time data sync and user-specific features.',
    achievement: 'Performed live UAT at Yuga Delhi; tested WebSocket implementation.',
    tech: ['WebSocket', 'Chrome DevTools', 'Jira', 'Cross-user testing'],
    platform: 'Web',
    links: [
      { label: 'Live Web App', url: 'https://joinyuga-mmzb.vercel.app/login' }
    ]
  },
  {
    title: 'WMS – Warehouse Management System',
    about: 'Manages stock, rack, and real-time inventory across warehouses.',
    achievement: 'Sole tester; covered regression, integration, and system testing.',
    tech: ['Postman', 'MongoDB', 'Manual Testing'],
    platform: 'Both',
    links: [
      { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.opsapp' }
    ]
  },
  {
    title: 'Store to Door – Quick Commerce',
    about: 'Quick commerce app for rural areas with real-time tracking.',
    achievement: 'Validated critical checkout, payments, and routing flows.',
    tech: ['PostMan', 'Regression', 'System integration'],
    platform: 'Web',
        links: [
      { label: 'Live Web App', url: 'https://www.storetodoor.co.in/' }
    ]
  },
  {
    title: 'Uwanxt Home',
    about: 'Smart home app to control appliances across rooms.',
    achievement: 'Tested Bluetooth and automation logic on Android & iOS.',
    tech: ['Bluetooth API', 'Manual Testing', 'REST'],
    platform: 'Mobile',
        links: [
      { label: 'View Playstore', url: 'https://play.google.com/store/apps/details?id=com.uwanxt' },
      { label: 'View Appstore', url: 'https://apps.apple.com/in/app/uwanxt/id1489319250' }
    ]
  },
  {
    title: 'Smart Wholesalers CRM',
    about: 'CRM for managing orders, leads, and flows.',
    achievement: 'Manually tested both web and mobile CRM platforms.',
    tech: ['MongoDB', 'JIRA', 'Postman'],
    platform: 'Mobile',
        links: [
      { label: 'View Playstore', url: 'https://play.google.com/store/apps/details?id=com.bizcrum.rm.app' }
    ]
  },
  {
    title: 'Dia Hotels Booking App',
    about: 'Hotel booking with filters, availability, and payments.',
    achievement: 'Covered full booking flow and API testing.',
    tech: ['React Native', 'Redux', 'TestRail'],
    platform: 'Web',
        links: [
      { label: 'Live Web App', url: 'https://diahotels.com/' }
    ]
  },
  {
    title: 'Sourcing App',
    about: 'Suppliers manage delivery schedules and material sourcing.',
    achievement: 'Device compatibility and validation on Android/iOS.',
    tech: ['Android', 'iOS', 'Firebase', 'Manual Testing'],
    platform: 'Mobile',
        links: [
   { label: 'View Playstore', url: 'https://play.google.com/store/apps/details?id=com.shoekonnect.bizcrum' },
      { label: 'View Appstore', url: 'https://apps.apple.com/in/app/bijnis-sourcing-app/id6464299974' }
    ]
  },
  {
    title: 'Veera Games',
    about: 'Web3 Based Gaming Applications',
    achievement: 'Tested UI components using mocks and validation tools.',
    tech: ['Web Sockets', 'Game Play testing', 'wallet integration testing'],
    platform: 'Web',
        links: [
  { label: 'View Playstore', url: 'https://play.google.com/store/apps/details?id=com.veera.browser' }
    ]
  },
{
  title: 'Bijnis Factory App',
  about: 'Helps factories across India register their products online and sell directly to retailers.',
  achievement: 'Led QA from scratch to launch; achieved 0 crash rate and 95% bug-free delivery on Android & iOS.',
  tech: ['Regression Testing', 'System Integration Testing', 'API Testing', 'Database Testing'],
  platform: 'Both',
  links: [
    { label: 'View on Play Store', url: 'https://play.google.com/store/apps/details?id=com.bijnis.seller_app' },
    { label: 'View on App Store', url: 'https://apps.apple.com/in/app/bijnis-factory-app/id1535769555' }
  ]
}
];

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLinks, setSelectedLinks] = useState<{ label: string, url: string }[] | null>(null);

  const handleClick = (links: { label: string, url: string }[]) => {
    if (links.length === 1) {
      window.open(links[0].url, '_blank');
    } else {
      setSelectedLinks(links);
      setModalOpen(true);
    }
  };

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
            <ProjectCard
              key={i}
              {...project}
    onClick={() => handleClick(project.links ?? [])}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && selectedLinks && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-xl p-6 w-[90%] max-w-sm text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h3 className="text-xl font-semibold mb-4">Choose a link</h3>
              <div className="space-y-4">
                {selectedLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      window.open(link.url, '_blank');
                      setModalOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-6 text-sm text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
