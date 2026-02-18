import { motion } from "framer-motion";

const prefix = import.meta.env.BASE_URL;

const skills = [
  { name: "Wireshark", img: `${prefix}logo/wireshark1.png` },
  { name: "Linux", img: `${prefix}logo/linux.png` },
  { name: "JohnTheRipper", img: `${prefix}logo/john.png` },
  { name: "Nmap", img: `${prefix}logo/nmap.webp` },
  { name: "Burp Suite", img: `${prefix}logo/burpsuite.png` },
  { name: "Metasploit", img: `${prefix}logo/metasploit.png` },
  { name: "VS Code", img: `${prefix}logo/vscode.png` },
  { name: "Réseaux", img: `${prefix}logo/reseaux.png` },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-[50vh] flex flex-col items-center justify-center w-full px-5 md:px-6 py-16 md:py-20">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 flex items-center justify-center gap-4"
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 mt-3 w-full max-w-4xl">
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-4 md:p-6 bg-[#18181b] rounded-2xl shadow-md transition-all duration-200 h-36 md:h-52 group relative"
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
            <div className="flex items-center justify-center w-full flex-1 mb-1">
              <img
                src={skill.img}
                alt={skill.name}
                className={`object-contain ${
                  skill.name === "Burp Suite"
                    ? "w-20 h-20 md:w-28 md:h-28"
                    : ["Nmap", "Réseaux", "JohnTheRipper", "Linux", "Metasploit"].includes(skill.name)
                      ? "w-14 h-14 md:w-24 md:h-24"
                      : "w-10 h-10 md:w-16 md:h-16"
                }`}
              />
            </div>
            <span
              className="font-semibold text-sm md:text-xl text-gray-100 text-center"
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