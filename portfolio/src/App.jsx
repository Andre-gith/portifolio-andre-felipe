import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import GithubProjects from "./components/GithubProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-white bg-neutral-900 min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <GithubProjects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}