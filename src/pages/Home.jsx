import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Animation du texte principal */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Salut, je suis <span className="text-primary">Oumar Moro</span>
      </motion.h1>

      {/* Sous-titre */}
      <motion.h2
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Développeur Web <span className="text-primary">Fullstack</span>
      </motion.h2>

      {/* Boutons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="/cv.pdf"
          target="_blank"
          className="btn btn-primary"
        >
          Voir mon CV
        </a>
        <a
          href="/projects"
          className="btn btn-outline"
        >
          Voir mes projets
        </a>
      </motion.div>

      {/* Animation subtile en bas */}
      <motion.div
        className="mt-12 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
