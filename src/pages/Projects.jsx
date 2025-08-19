import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-16">
      {/* Titre */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mes <span className="text-primary">projets</span>
      </motion.h2>

      {/* Grille des projets */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="badge badge-outline"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Boutons */}
              <div className="card-actions justify-end mt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
