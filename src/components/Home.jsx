import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects'; // Utilise le composant Projects ici !
import Contact from './Contact';

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
