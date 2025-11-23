import { motion } from "framer-motion";

const skills = [
  { name: "Wireshark", img: "/logo/wireshark1.png" },
  { name: "Linux", img: "/logo/linux.png" },
  { name: "JohnTheRipper", img: "/logo/john.png" },
  { name: "Nmap", img: "/logo/nmap.webp" },
  { name: "Burp Suite", img: "/logo/burpsuite.png" },
  { name: "Metasploit", img: "/logo/metasploit.png" },
  { name: "VS Code", img: "/logo/vscode.png" },
  { name: "Réseaux", img: "/logo/reseaux.png" },
  // Ajoute tes autres logos ici !
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-[50vh] flex flex-col items-center justify-center w-full px-6 py-20">
      {/* Titre Skills centré en haut + effet chrome */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 flex items-center justify-center gap-4"
        style={{
          background: "linear-gradient(90deg, #e0e0e0 0%, #9CA3AF 40%, #ececec 60%, #333 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 22px #aaa6, 0 1px 1px #fff8",
          letterSpacing: "1px"
        }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Skills
      </motion.h2>
      
      {/* Grid des skills tech (anim vague à l'entrée, effet glow au hover, textes alignés) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-3 w-full max-w-4xl">
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-6 bg-[#18181b] rounded-2xl shadow-md transition-all duration-200 h-52 group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, type: "spring" }}
            viewport={{ once: true }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 0 24px 6px #e0e0e088, 0 2px 14px #aaa9";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 2px 10px #aaa5";
            }}
          >
            <div className="flex items-center justify-center w-full min-h-[80px] mb-2">
              <img
                src={skill.img}
                alt={skill.name}
                className={
                  `object-contain
                  ${
                    skill.name === "Burp Suite"
                      ? "w-38 h-38"
                      : ["Nmap", "Réseaux", "JohnTheRipper", "Linux", "Metasploit"].includes(skill.name)
                        ? "w-24 h-24"
                        : "w-16 h-16"
                  }`
                }
              />
            </div>
            <span
              className="mt-auto font-semibold text-xl md:text-2xl text-gray-100"
              style={{ letterSpacing: "0.5px" }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
