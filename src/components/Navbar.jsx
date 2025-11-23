export default function Navbar() {
  // Scroll jusqu'en haut
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll smooth vers une section
  const scrollTo = (targetId) => (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#37415133]">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        {/* Logo / Nom à gauche, CLIQUABLE */}
        <a
          href="#top"
          className="text-2xl font-bold bg-gradient-to-r from-[#9CA3AF] via-[#fff] to-[#9CA3AF] text-transparent bg-clip-text cursor-pointer"
          onClick={scrollToTop}
        >
          Portfolio CyberSecurity
        </a>

        {/* Menu de navigation à droite */}
        <ul className="flex gap-8 text-lg font-semibold">
          {/* ABOUT ME */}
          <li className="relative group">
            <a
              href="#about"
              className="text-white hover:text-[#9CA3AF] transition duration-200 focus:outline-none"
              onClick={scrollTo('about')}
            >
              About Me
            </a>
            <span className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-[#9CA3AF] group-hover:w-full group-focus-within:w-full transition-all duration-300"></span>
          </li>
          {/* SKILLS */}
          <li className="relative group">
            <a
              href="#skills"
              className="text-white hover:text-[#9CA3AF] transition duration-200 focus:outline-none"
              onClick={scrollTo('skills')}
            >
              Skills
            </a>
            <span className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-[#9CA3AF] group-hover:w-full group-focus-within:w-full transition-all duration-300"></span>
          </li>
          {/* PROJECTS */}
          <li className="relative group">
            <a
              href="#projects"
              className="text-white hover:text-[#9CA3AF] transition duration-200 focus:outline-none"
              onClick={scrollTo('projects')}
            >
              Projects
            </a>
            <span className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-[#9CA3AF] group-hover:w-full group-focus-within:w-full transition-all duration-300"></span>
          </li>
          {/* CONTACT */}
          <li className="relative group">
            <a
              href="#contact"
              className="text-white hover:text-[#9CA3AF] transition duration-200 focus:outline-none"
              onClick={scrollTo('contact')}
            >
              Contact
            </a>
            <span className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-[#9CA3AF] group-hover:w-full group-focus-within:w-full transition-all duration-300"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
