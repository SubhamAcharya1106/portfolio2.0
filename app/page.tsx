import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectCard from './components/ProjectCard';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectCard />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
