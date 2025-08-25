import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection/>
      <ContactSection />
    </>
  );
}
