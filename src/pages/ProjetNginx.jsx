import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function ProjetNginx() {
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}TP_4.md`)
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
        Administration SSH & Serveur Web Nginx
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
          Ce TP m'a permis de mettre en place un serveur Ubuntu virtualisé, de le sécuriser via SSH et d'y déployer un serveur web Nginx avec HTTPS :
        </p>
        <ul className="text-gray-300 mb-2 list-disc pl-5">
          <li>Virtualisation d'un serveur Ubuntu et configuration réseau</li>
          <li>Sécurisation de l'accès SSH (clés, restrictions, durcissement)</li>
          <li>Installation et configuration de Nginx comme serveur web</li>
          <li>Mise en place du HTTPS et gestion des certificats</li>
          <li>Tests d'accès et vérification de la sécurité des flux</li>
        </ul>
        <p className="text-gray-300 mb-2">
          J'ai appris à :
        </p>
        <ul className="text-gray-300 list-disc pl-5">
          <li>Administrer un serveur Linux à distance de façon sécurisée</li>
          <li>Déployer et configurer un serveur web professionnel</li>
          <li>Appliquer les bonnes pratiques de sécurisation SSH et HTTPS</li>
        </ul>
        <p className="text-gray-400 mt-1">
          Ce TP est une base essentielle pour l'administration système et la mise en production de services web sécurisés en environnement professionnel.
        </p>
      </div>

      {/* Markdown stylisé */}
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </div>
  );
}