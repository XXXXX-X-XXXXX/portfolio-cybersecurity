import { motion } from "framer-motion";

export default function Intro({ onAccess }) {
  const DURATION = 0.85;

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] pt-20 md:pt-24 px-5 relative" style={{ zIndex: 1 }}>

      {/* ICONES EN HAUT */}
      <motion.div
        className="flex gap-6 md:gap-10 mb-10 md:mb-16"
        initial={{ y: -110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION, ease: "easeOut" }}
      >
        <IconGlow icon="code" />
        <IconGlow icon="user" />
        <IconGlow icon="github" />
      </motion.div>

      {/* TITRE PRINCIPAL */}
      <motion.h1
        className="text-4xl md:text-7xl font-extrabold text-center leading-tight mb-2 text-white"
        initial={{ x: -110, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: DURATION, ease: "easeOut", delay: 0.2 }}
      >
        Welcome To My
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-7xl font-extrabold text-center mb-8 md:mb-10 bg-gradient-to-r from-[#9CA3AF] via-[#fff] to-[#9CA3AF] text-transparent bg-clip-text"
        initial={{ x: 110, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: DURATION, ease: "easeOut", delay: 0.35 }}
      >
        Portfolio Cybersecurity
      </motion.h2>

      {/* URL + globe */}
      <motion.div
        className="flex items-center gap-2 md:gap-3 mt-2 text-lg md:text-3xl font-semibold text-[#9CA3AF] justify-center text-center"
        style={{ textShadow: "0 0 28px #9CA3AF88" }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: DURATION, ease: "easeOut", delay: 0.5 }}
      >
        <GlobeIcon />
        <span className="break-all text-sm md:text-3xl">www.xxxxx-x-xxxxx.github.io</span>
      </motion.div>

      {/* BOUTON */}
      <motion.button
        className="mt-10 md:mt-12 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#6B7280] text-white font-semibold text-lg md:text-2xl shadow-lg hover:bg-[#9CA3AF] transition duration-150"
        style={{ boxShadow: "0 0 18px #6B7280bb" }}
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION, ease: "easeOut", delay: 0.67 }}
        onClick={onAccess}
        whileHover={{ scale: 1.12, boxShadow: "0 0 60px 15px #9CA3AFee", y: -5 }}
      >
        Accéder à mon portfolio
      </motion.button>
    </div>
  );
}

function IconGlow({ icon }) {
  let svg;
  if (icon === "code") svg = (
    <svg width="30" height="30" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24">
      <path d="M9 18l-6-6 6-6m6 12l6-6-6-6" />
    </svg>
  );
  if (icon === "user") svg = (
    <svg width="30" height="30" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 20v-2a6.5 6.5 0 0113 0v2" />
    </svg>
  );
  if (icon === "github") svg = (
    <svg width="30" height="30" fill="#fff" viewBox="0 0 24 24">
      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.2 3 1 .1-.7.3-1.2.6-1.6-2.7-.3-5.6-1.3-5.6-5.8 0-1.3.5-2.3 1.2-3.1 0-.4-.5-1.6.1-3.4 0 0 1.1-.4 3.5 1.2a12 12 0 016.5 0c2.4-1.6 3.5-1.2 3.5-1.2.6 1.8.1 3 .1 3.4.7.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.6 5.8.3.3.7.9.7 2v3c0 .3.2.6.8.5A12 12 0 0012 .3" />
    </svg>
  );
  return (
    <motion.div
      className="rounded-full p-3 md:p-4 flex items-center justify-center bg-[#1F2937] shadow-lg"
      style={{ boxShadow: "0 0 36px 8px #6B728088", backdropFilter: "blur(5px)" }}
      whileHover={{ boxShadow: "0 0 80px 18px #9CA3AF", scale: 1.18, y: -9, rotate: 7 }}
      transition={{ type: "spring", stiffness: 260, damping: 16 }}
    >
      {svg}
    </motion.div>
  );
}

function GlobeIcon() {
  return (
    <svg height="28" width="28" viewBox="0 0 48 48" fill="none" className="shrink-0">
      <circle cx="24" cy="24" r="18" stroke="#9CA3AF" strokeWidth="2" style={{ filter: "drop-shadow(0px 0px 12px #9CA3AFaa)" }} />
      <ellipse cx="24" cy="24" rx="13" ry="18" stroke="#9CA3AF" strokeWidth="1" opacity="0.9" />
      <ellipse cx="24" cy="24" rx="18" ry="8" stroke="#9CA3AF" strokeWidth="1" opacity="0.6" />
      <path d="M24 6 C33 10, 33 38, 24 42 C15 38, 15 10, 24 6" stroke="#9CA3AF" strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M15 13 Q24 19, 33 13" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M26 21 Q27 23,25 25 Q24 27,22 26 Q21 24,23 23 Q22 21,24 21" stroke="#9CA3AF" strokeWidth="2" fill="#6B7280" opacity="0.9" />
      <path d="M32 27 Q34 30,30 32 Q28 31,29 29" stroke="#9CA3AF" strokeWidth="1.5" fill="#6B7280" opacity="0.7" />
    </svg>
  );
}