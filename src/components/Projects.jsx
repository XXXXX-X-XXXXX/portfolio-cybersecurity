import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const prefix = import.meta.env.BASE_URL;

const projects = [
  {
    title: "pfSense Firewall Setup",
    description: "Installation, securing, and advanced filtering with pfSense (NAT, DHCP, DNS, Alias).",
    details: "Configuration complète d'un pare-feu pfSense : gestion des interfaces WAN/LAN, mise en place de règles de filtrage par IP/MAC, et création de portails captifs.",
    img: `${prefix}images/pfsense.png`, 
    tags: ["Firewall", "Network", "pfSense"],
    url: "/projet-pfsense"
  },
  {
    title: "SSH Administration & Nginx Web Server",
    description: "Setup of a virtualized Ubuntu server, secured via SSH, and deployment of an Nginx web server with HTTPS.”",
    details: "Virtualisation d'un serveur Ubuntu, durcissement SSH, installation et configuration de Nginx, mise en place du HTTPS et gestion des certificats.",
    img: `${prefix}images/nginx-ssh.png`,
    tags: ["Linux", "Nginx", "SSH"],
    url: "/projet-sss_nginx"
  },
  {
    title: "Security Monitoring: Discord Alerts",
    description: "Automated monitoring of sensitive files and after-hours SSH connections, with instant alerts sent to Discord via webhook",
    details: "TP pratique où des scripts Bash/Python surveillent la lecture de fichiers critiques et les connexions SSH hors horaires. Les alertes s'affichent en live dans un salon Discord pour la réactivité de l'équipe sécurité.",
    img: `${prefix}images/discordproject.png`,
    tags: ["Security", "Discord", "Linux", "Bash"],
    url: "/projet-discord-monitoring"
  },
  {
    title: "Network Project: DMZ & Firewall",
    description: "Creation of an isolated network with a DMZ, filtering, and NAT.",
    details: "Infrastructure with a secure DMZ, routing/masquerading, DMZ services, creation and testing of firewall rules. Exercises on network segmentation and protection of flows according to industry best practices.",
    img: `${prefix}images/generated-image.png`,
    tags: ["Network", "Firewall", "DMZ"],
    url: "/projet-dmz"
  },
  {
    title: "React Portfolio",
    description: "Development of a responsive portfolio with modern animations (the portfolio you are currently viewing).",
    details: "Site portfolio réalisé avec React, TailwindCSS, Framer Motion. Design responsive, routing, présentation projets cybersécurité.",
    img: `${prefix}images/portfoliocyber.png`,
    tags: ["React", "UI/UX", "Frontend"],
    url: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-[60vh] flex flex-col items-center justify-center w-full px-5 md:px-6 py-16 md:py-20">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-4 md:mb-6"
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
        className="text-base md:text-lg text-gray-400 font-medium text-center mb-8 md:mb-12 max-w-2xl px-2"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Discover my cybersecurity and dev projects. Click a card for more details !
      </motion.p>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}