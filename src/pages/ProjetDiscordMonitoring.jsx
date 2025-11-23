import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";

export default function ProjetDiscordMonitoring() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/TPdiscord.md")
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1
        className="text-4xl font-extrabold mb-6"
        style={{
          background: "linear-gradient(90deg, #e0e0e0 0%, #9CA3AF 40%, #ececec 60%, #333 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Monitoring Sécurité : Alertes Discord
      </h1>
      <div className="text-lg text-gray-300 font-medium mb-6">
        <p>
          TP : surveillance d'accès à des fichiers sensibles et des connexions SSH hors horaires, alertes instantanées sur Discord.
        </p>
      </div>
      {/* Affichage du Markdown */}
      <div className="prose prose-invert max-w-none">
        <Markdown>{content}</Markdown>
      </div>
    </section>
  );
}
