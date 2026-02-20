import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function ProjetPfsense() {
  const [md, setMd] = useState("");

  useEffect(() => {
    // On charge le fichier TP_5.md qui doit être dans votre dossier /public
    fetch(`${import.meta.env.BASE_URL}TP_5.md`)
      .then(res => res.text())
      .then(setMd);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-screen" style={{ background: "#23262a", color: "#fff" }}>

      {/* Titre principal stylisé */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-8"
        style={{
          background: "linear-gradient(90deg, #e0e0e0 0%, #9CA3AF 40%, #ececec 60%, #333 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 22px #aaa6, 0 1px 1px #fff8",
          letterSpacing: "1px"
        }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        pfSense : Bases d'un pare-feu
      </motion.h2>

      {/* Résumé avec bordure neon noire */}
      <div
        className="mb-10 rounded-xl p-5"
        style={{
          border: "2px solid #191a1d",
          boxShadow: "0 0 18px 2px #191a1d, 0 0 40px 3px #232427",
          background: "#15181d"
        }}
      >
        <h2 className="text-2xl font-bold mb-3 text-[#9CA3AF]">Résumé du TP & Apports</h2>
        <p className="text-lg text-gray-200 mb-2">
          Ce projet porte sur la mise en place et la configuration d'un pare-feu pfSense pour sécuriser un réseau local :
        </p>
        <ul className="text-gray-300 mb-2 list-disc pl-5">
          <li>Installation et configuration des interfaces WAN et LAN</li>
          <li>Mise en place de services critiques : DHCP et DNS Resolver</li>
          <li>Création de règles de filtrage avancées et gestion des Alias</li>
          <li>Configuration du NAT pour l'accès Internet sécurisé</li>
          <li>Mise en œuvre d'un portail captif et de restrictions par adresse MAC</li>
        </ul>
        <p className="text-gray-300 mb-2">
          Compétences acquises :
        </p>
        <ul className="text-gray-300 list-disc pl-5">
          <li>Segmentation réseau et isolation de flux</li>
          <li>Gestion de la sécurité périmétrique (Firewalling)</li>
          <li>Analyse de logs pour le dépannage réseau</li>
        </ul>
        <p className="text-gray-400 mt-1">
          Cette expérience est fondamentale pour comprendre la protection des infrastructures contre les menaces externes et internes.
        </p>
      </div>

      {/* Markdown stylisé */}
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </div>
  );
}