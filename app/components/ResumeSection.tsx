import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'This is the first project.',
    tech: ['React', 'Next.js', 'TailwindCSS'],
  },
  // ... more projects
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
