import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS / Tailwind", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌱" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PHP / Laravel", icon: "🧩" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Git & GitHub", icon: "🐙" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
      {/* Titre */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        À propos de <span className="text-primary">moi</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-3xl text-lg text-gray-900 dark:text-gray-400 text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Je suis <span className="font-semibold text-primary">Oumar Moro</span>, 
        un passionné de <span className="font-semibold">développement web fullstack</span>.  
        J’aime concevoir des applications modernes et performantes qui résolvent des problèmes concrets.  
        Je travaille aussi bien sur le <span className="italic">frontend</span> (React, Tailwind, UI/UX) 
        que sur le <span className="italic">backend</span> (Node.js, Express, PHP, Laravel, bases de données).
      </motion.p>

      {/* Compétences principales */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="card bg-base-200 shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <span className="text-3xl mb-2">{skill.icon}</span>
            <p className="font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
