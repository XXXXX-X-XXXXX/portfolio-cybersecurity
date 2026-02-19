import { motion } from "framer-motion";

export default function Hero() {
  const skills = [
    { label: "TryHackMe", href: "https://tryhackme.com/p/XXXXXXXXXX" },
    { label: "Root-Me", href: "https://www.root-me.org/XXXXXXXXXXX-1032190?inc=info&lang=fr" },
    { label: "Hack The Box", href: "https://app.hackthebox.com/public/users/2426212?profile-top-tab=machines&ownership-period=1M&profile-bottom-tab=prolabs" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-5 md:px-8 pt-24 pb-10">
      {/* Titre principal */}
      <motion.h1
        className="text-[2.4rem] md:text-[4.6rem] font-extrabold text-center leading-none mb-1"
        style={{
          background: "linear-gradient(90deg, #e0e0e0 0%, #9CA3AF 40%, #ececec 60%, #333 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 22px #aaa6, 0 1px 1px #fff8",
          letterSpacing: "1px",
        }}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        STUDENT
      </motion.h1>

      <motion.h2
        className="text-[1.7rem] md:text-[3.2rem] font-bold text-center mt-0 mb-3 text-gray-300"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
      >
        CyberSecurity
      </motion.h2>

      <motion.p
        className="typewriter text-lg md:text-2xl font-light text-gray-400 mt-2 mb-5 text-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        Network | Web | Linux | Pentest <span className="cursor" />
      </motion.p>

      <motion.p
        className="text-sm md:text-lg text-gray-400 mb-6 max-w-2xl text-center px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        Passionate about cybersecurity, I constantly improve my technical
        and hands-on skills on cybersecurity platforms. My goal is to protect systems and 
        make their security stronger in offensive cyber.
      </motion.p>

      {/* Comptes cyber */}
      <div className="flex gap-3 mb-6 flex-wrap justify-center">
        {skills.map((skill, idx) => (
          <a
            key={idx}
            href={skill.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#1F232A] text-gray-200 text-sm md:text-base font-medium shadow hover:bg-gray-700 transition"
          >
            {skill.label}
          </a>
        ))}
      </div>

      {/* Citation */}
      <motion.div
        className="mt-6 max-w-xl w-full px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-base md:text-xl text-gray-400 italic text-center border-l-4 border-[#374151] pl-4 md:pl-6 py-2">
          Cybersecurity is much more than a matter of IT — it’s a business imperative.
        </p>
        <p className="text-xs md:text-sm text-gray-500 text-right mt-2">
          — Stéphane Nappo
        </p>
      </motion.div>

      {/* Réseaux */}
      <div className="flex gap-4 mt-5">
        <a
          href="https://github.com/XXXXX-X-XXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-[#18181b] text-gray-200 shadow-lg hover:bg-gray-700 transition text-sm md:text-base"
        >
          Github
        </a>
      </div>
    </section>
  );
}