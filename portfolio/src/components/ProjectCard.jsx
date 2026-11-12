import { motion, useReducedMotion } from "framer-motion";

export default function ProjectCard({ project, reverse = false }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? {} : { opacity: 0, y: 24 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className={project.image ? "md:w-1/2" : "w-full"}>
        <div className="text-sm text-primary mb-2 font-mono">{project.id}</div>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{project.title}</h3>
        <p className="text-gray-300 mb-6 max-w-xl">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-6 text-sm">
          {project.technologies.map((t) => (
            <span key={t} className="text-xs px-3 py-1 bg-neutral-800 rounded uppercase tracking-wide">{t}</span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} className="px-4 py-2 border border-gray-700 rounded hover:border-primary transition">GitHub</a>
          )}
          {project.demo && (
            <a href={project.demo} className="px-4 py-2 bg-primary text-black rounded hover:opacity-95 transition">Live Demo</a>
          )}
        </div>
      </div>

      {project.image && (
        <div className="md:w-1/2">
          <div className="w-full h-72 md:h-80 bg-neutral-800 rounded overflow-hidden flex items-center justify-center transform-gpu hover:scale-105 transition-transform">
            <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
          </div>
        </div>
      )}
    </motion.article>
  );
}
