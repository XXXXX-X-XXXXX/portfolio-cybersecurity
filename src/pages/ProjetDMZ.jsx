import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function ProjetDMZ() {
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch("/tp-08-dmz.md")
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
        TP Réseaux — DMZ, NAT & Pare-feu
      </motion.h2>

      {/* Résumé avec bordure néon noire */}
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
          Ce TP m’a permis de concevoir, sécuriser et analyser une infrastructure réseau complète à partir d’une topologie simple :
        </p>
        <ul className="text-gray-300 mb-2 list-disc pl-5">
          <li>Création d’une mini DMZ, séparation LAN/DMZ via pare-feu</li>
          <li>Mise en place du routage, du NAT et du filtrage de paquets avec iptables</li>
          <li>Installation et test d’un serveur en DMZ, accès contrôlé depuis le LAN</li>
          <li>Application d’une politique “tout est interdit sauf ce qui est explicitement autorisé” (bonne pratique pro)</li>
          <li>Analyse des flux autorisés et bloqués (tests, logs, captures réseau)</li>
        </ul>
        <p className="text-gray-300 mb-2">
          J’ai appris à :
        </p>
        <ul className="text-gray-300 list-disc pl-5">
          <li>Configurer des machines sur plusieurs réseaux virtuels distincts</li>
          <li>Déployer des règles de sécurité granulaires (filtrage fin, logging, blocage des flux inutiles/dangereux)</li>
          <li>Observer concrètement l’impact d’un pare-feu et l’importance d’une architecture segmentée</li>
        </ul>
        <p className="text-gray-400 mt-1">
          Ce TP est une base essentielle pour toute gestion de réseau sécurisé et pour comprendre la défense périmétrique en entreprise. Il m’a apporté une vraie maîtrise pratique du routage, de la segmentation et du durcissement des accès.
        </p>
      </div>

      {/* Markdown stylisé */}
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </div>
  );
}
