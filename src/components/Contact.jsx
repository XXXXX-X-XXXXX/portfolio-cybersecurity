import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import CommentsSection from "../components/CommentsSection";

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/martin-desbans-704a0b383", icon: "/icons/linkdin.png" },
  { name: "GitHub", url: "https://github.com/XXXXX-X-XXXXX", icon: "/icons/github.png" },
  { name: "Instagram", url: "https://www.instagram.com/martin___dbs/", icon: "/icons/insta.png" },
  { name: "Email", url: "mailto:martin.desbans@ynov.com", icon: "/icons/mail.png" },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("meonyabn");

  return (
    <section id="contact" className="w-full min-h-[50vh] flex flex-col items-center justify-end px-6 py-20">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12"
        style={{
          background: "linear-gradient(90deg, #e0e0e0 0%, #9CA3AF 40%, #ececec 60%, #333 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 22px #aaa6, 0 1px 1px #fff8",
          letterSpacing: "1px",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact
      </motion.h2>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 justify-between items-stretch mx-auto">
        {/* Bloc gauche : formulaire + réseaux */}
        <div className="flex flex-col justify-center items-start gap-7 flex-1">
          <span className="font-bold text-lg mb-2 text-gray-300">Retrouve-moi sur :</span>
          {/* Formulaire email sécurisé */}
          <form onSubmit={handleSubmit} className="w-full mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1 text-gray-300">Ton nom</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-2 rounded-lg bg-[#23262a] text-white outline-none mb-2"
              autoComplete="off"
            />
            <ValidationError prefix="Nom" field="name" errors={state.errors} />
            <label htmlFor="email" className="block text-sm font-semibold mb-1 text-gray-300">Ton email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-2 rounded-lg bg-[#23262a] text-white outline-none mb-2"
              autoComplete="off"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message" className="block text-sm font-semibold mb-1 text-gray-300">Ton message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 rounded-lg bg-[#23262a] text-white outline-none mb-2 resize-none"
              placeholder="Ton message"
              autoComplete="off"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
              type="submit"
              disabled={state.submitting}
              className="px-5 py-2 rounded-xl font-bold bg-gradient-to-r from-[#9CA3AF] to-[#333] text-white shadow hover:scale-105 transition"
            >
              Envoyer par mail
            </button>
            {state.succeeded && (
              <p className="text-green-400 mt-2 font-semibold">Merci pour ton message !</p>
            )}
          </form>
          {/* Icônes réseaux */}
          <div className="flex gap-7">
            {socials.map(social => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="transition group"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-12 h-12 hover:scale-110 transition transform duration-200"
                  style={{ filter: "drop-shadow(0 0 10px #e0e0e066)" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bloc droite : avis Supabase */}
        <div className="flex flex-col rounded-2xl shadow-lg p-7 flex-1 max-w-xl ">
          <span className="font-bold text-lg mb-4 text-gray-300">Laisse un avis :</span>
          <CommentsSection />
        </div>
      </div>
    </section>
  );
}
