import { useState } from "react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-dark">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ScrollProgress />
      <Navbar />
      <main className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;