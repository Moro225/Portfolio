import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
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
          href="/CV_MORO_OUMAR.pdf"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir mon CV
        </a>

        <Link 
          to="/projects"
          className="btn btn-outline"
        >
          Voir mes projets
        </Link>
      </motion.div>

      {/* Animation subtile en bas */}
      <motion.div
        className="mt-12 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <img 
          className="w-32 h-32 rounded-full border-4 border-primary object-cover"
          src="/public/photo_de_profil.png" 
          alt="profil" 
        />
      </motion.div>
    </section>
  );
}
