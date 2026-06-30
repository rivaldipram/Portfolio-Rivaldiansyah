import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiInstagram } from "react-icons/fi";
import profilePhoto from "../assets/Foto Profile.jpeg";
import MagneticButton from "../components/MagneticButton";

const roles = [
  "Software Engineer",
  "Business Analyst",
  "Frontend Developer",
  "Digital Solution Specialist",
  "Data Analyst",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm font-mono tracking-widest uppercase mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Rivaldiansyah
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Pramadhan
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-400 font-light mb-8 h-8">
            <span className="text-white">{displayed}</span>
            <span className="animate-ping text-primary ml-0.5">|</span>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0">
            Fresh graduate in Informatics Engineering passionate about business analysis, data analytics, and digital solutions. I enjoy turning ideas into meaningful experiences and collaborating on projects that create real impact.
 Let's build something great together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <Link to="projects" smooth duration={600} offset={-80}>
             <MagneticButton className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-xl text-sm tracking-wide hover:shadow-lg hover:shadow-primary/25 transition-all">
              View My Work
              </MagneticButton>
            </Link>
            <a href="/CV_Rivaldiansyah_Pramadhan.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 border border-primary/40 text-primary font-semibold rounded-xl text-sm tracking-wide hover:bg-primary/10 transition-all flex items-center gap-2"
              >
                <FiDownload size={16} /> Download CV
              </motion.button>
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 justify-center lg:justify-start">
            {[
              { icon: <FiGithub size={20} />, href: "https://github.com/rivaldipram" },
              { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/in/rivaldiansyah-pramadhan-195a86216/" },
              { icon: <FiInstagram size={20} />, href: "https://instagram.com/rival.pram" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, color: "#22d3ee" }}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Avatar side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />
            <div className="absolute -inset-3 rounded-full border border-secondary/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            {/* Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
            {/* Photo placeholder — ganti src dengan foto aslimu */}
        <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/20">
         <img
            src={profilePhoto}
            alt="Rivaldiansyah Pramadhan"
            className="w-full h-full object-cover object-[center_35%]"
        />
        </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}