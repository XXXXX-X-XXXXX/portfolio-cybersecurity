import { motion } from "framer-motion";

export default function Hero() {
  const skills = ["Web", "Linux", "Root-Me", "TryHackMe", "Hack The Box"];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-24">
      

      {/* Titre principal sur deux lignes */}
      <motion.h1
        className="text-[3.2rem] md:text-[4.6rem] font-extrabold text-center leading-none mb-1"
        style={{
          background: "linear-gradient(90deg, #e0e0e0 0%, #9CA3AF 40%, #ececec 60%, #333 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 22px #aaa6, 0 1px 1px #fff8",
          letterSpacing: "1px"
        }}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        ÉTUDIANT
      </motion.h1>
      <motion.h2
        className="text-[2.3rem] md:text-[3.2rem] font-bold text-center mt-0 mb-3 text-gray-300"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
      >
        CyberSécurité
      </motion.h2>

      {/* Sous-titre typewriter */}
      <motion.p
        className="typewriter text-2xl font-light text-gray-400 mt-2 mb-6"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        Network | Web | Linux | Pentest <span className="cursor" />
      </motion.p>

      {/* Ligne de présentation */}
      <motion.p
        className="text-lg text-gray-400 mb-7 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        Passionné par l'informatique, j'améliore en continu mes compétences techniques et pratiques sur les plateformes de cybersécurité. Objectif : protéger et renforcer la sécurité des systèmes.
      </motion.p>

      {/* Skills badges */}
      <div className="flex gap-4 mb-7 flex-wrap justify-center">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-5 py-2 rounded-xl bg-[#1F232A] text-gray-200 font-medium shadow hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Citation */}
      <motion.div
        className="mt-8 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-xl text-gray-400 italic text-center border-l-4 border-[#374151] pl-6 py-2">
          La sécurité n'est pas un produit, mais un processus.
        </p>
        <p className="text-sm text-gray-500 text-right mt-2">— Bruce Schneier</p>
      </motion.div>

      {/* Réseaux sociaux */}
      <div className="flex gap-4 mt-5">
        <a href="https://github.com/XXXXX-X-XXXXX" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#18181b] text-gray-200 shadow-lg hover:bg-gray-700 transition">
          Github
        </a>
        {/* Ajoute d'autres icônes ici */}
      </div>
    </section>
  );
}
