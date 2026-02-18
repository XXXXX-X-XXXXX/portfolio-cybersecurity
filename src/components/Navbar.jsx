import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollTo = (targetId) => (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "About Me", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#37415133] bg-[#0d0f12cc] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#top"
          className="text-lg md:text-2xl font-bold bg-gradient-to-r from-[#9CA3AF] via-[#fff] to-[#9CA3AF] text-transparent bg-clip-text cursor-pointer"
          onClick={scrollToTop}
        >
          Portfolio CyberSecurity
        </a>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          {navLinks.map(({ label, id }) => (
            <li key={id} className="relative group">
              <a
                href={`#${id}`}
                className="text-white hover:text-[#9CA3AF] transition duration-200 focus:outline-none"
                onClick={scrollTo(id)}
              >
                {label}
              </a>
              <span className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-[#9CA3AF] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0f12ee] border-t border-[#37415133] px-5 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-white text-lg font-semibold hover:text-[#9CA3AF] transition"
              onClick={scrollTo(id)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}