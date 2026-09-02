import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Projects</h2>

      <div className="flex flex-col gap-20">
        {projects.filter(p => p.featured).map((p, idx) => (
          <ProjectCard key={p.slug} project={p} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}