import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="min-h-[70vh] flex flex-col items-center justify-center w-full px-5 md:px-6 py-16 md:py-20">
      {/* Titre */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 flex items-center justify-center gap-3 md:gap-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span role="img" aria-label="shield" className="text-[2rem] md:text-[2.7rem]">🛡️</span>
        <span
          style={{
            background: "linear-gradient(90deg, #e0e0e0 0%, #9CA3AF 40%, #ececec 60%, #333 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 22px #aaa6, 0 1px 1px #fff8",
            letterSpacing: "1px"
          }}
        >
          About Me
        </span>
        <span role="img" aria-label="computer" className="text-[2rem] md:text-[2.7rem]">💻</span>
      </motion.h2>

      {/* Bloc principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 w-full max-w-5xl mt-4 md:mt-10">

        {/* Photo en premier sur mobile, à droite sur desktop */}
        <div className="flex md:hidden items-center justify-center w-full">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#23272e] to-[#101214] border-2 border-[#7C7C86] shadow-2xl flex items-center justify-center overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/pdp2.jpg`}
              alt="Martin Desbans"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Zone texte */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h3 className="text-2xl md:text-5xl font-extrabold mb-3 flex flex-col">
            <span
              style={{
                background: "linear-gradient(90deg, #e0e0e0 0%, #9CA3AF 40%, #ececec 60%, #333 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 22px #aaa6, 0 1px 1px #fff8",
                letterSpacing: "1px"
              }}
            >
              Bienvenue, je suis
            </span>
            <span className="text-white text-[1.8rem] md:text-[2.55rem] mt-2 drop-shadow-xl">
              Martin Desbans
            </span>
          </h3>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
            Étudiant en bachelor 1, passionné en cybersécurité, je me forme quotidiennement à la sécurité offensive et défensive.<br />
            J'explore les plateformes CTF (TryHackMe, Root-Me, Hack The Box) pour progresser techniquement et développer des solutions pour protéger les systèmes et les applications.<br />
            Mon objectif est d'acquérir des compétences avancées pour anticiper, détecter et contrer les menaces informatiques.
          </p>

          {/* Boutons */}
          <div className="flex gap-4 mt-6 md:mt-8 flex-wrap justify-center md:justify-start">
            <a
              href={`${import.meta.env.BASE_URL}cv/CV_stage.pdf`}
              download
              className="px-5 py-2 rounded-full font-bold text-sm md:text-base shadow transition-all duration-200 flex items-center gap-2"
              style={{ border: "none", background: "transparent", color: "#fff", boxShadow: "0 2px 10px #aaa5" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 18px 3px #e0e0e088, 0 2px 10px #aaa5"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 10px #aaa5"; }}
            >
              <span className="text-lg">📄</span>
              Download CV
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("projects");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2 rounded-full font-bold text-sm md:text-base shadow transition-all duration-200 flex items-center gap-2"
              style={{ border: "none", background: "transparent", color: "#fff", boxShadow: "0 7px 17px #aaa5" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 18px 3px #e0e0e088, 0 2px 10px #aaa5"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 10px #aaa5"; }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              View Projects
            </a>
          </div>
        </div>

        {/* Photo à droite sur desktop uniquement */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#23272e] to-[#101214] border-2 border-[#7C7C86] shadow-2xl flex items-center justify-center overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/pdp2.jpg`}
              alt="Martin Desbans"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}