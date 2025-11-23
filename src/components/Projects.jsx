import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Projet Réseau : DMZ & Pare-feu",
    description: "Réalisation d’un réseau isolé avec DMZ, filtrage et NAT.",
    details: "Infrastructure avec DMZ sécurisée, routage/masquerading, services DMZ, création et tests de règles pare-feu. Exercices sur la segmentation et la protection des flux selon les pratiques pros.",
    img: "/images/generated-image.png",
    tags: ["Réseaux", "Firewall", "DMZ"],
    url: "/projet-dmz"
  },
  {
    title: "Monitoring Sécurité : Alertes Discord",
    description: "Surveillance automatisée de fichiers sensibles et des connexions SSH hors horaires, avec alertes instantanées sur Discord via webhook.",
    details: "TP pratique où des scripts Bash/Python surveillent la lecture de fichiers critiques et les connexions SSH hors horaires. Les alertes s'affichent en live dans un salon Discord pour la réactivité de l'équipe sécurité.",
    img: "/images/discordproject.png", // Mets ton image ici !
    tags: ["Sécurité", "Discord", "Linux", "Bash"],
    url: "/projet-discord-monitoring"
  },
  {
    title: "Portfolio React",
    description: "Développement d’un portfolio responsive, animations modernes.(Portfolio que vous consultez actuellement)",
    details: "Site portfolio réalisé avec React, TailwindCSS, Framer Motion. Design responsive, routing, présentation projets cybersécurité.",
    img: "/images/portfoliocyber.png",
    tags: ["React", "UI/UX", "Frontend"],
    url: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-[60vh] flex flex-col items-center justify-center w-full px-6 py-20">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-6"
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
        Projects
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 font-medium text-center mb-12 max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Découvre mes projets cybersécurité et dev. Clique une carte pour plus de détails !
      </motion.p>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
