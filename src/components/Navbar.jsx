import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Experience", id: "experience" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span className="text-primary font-bold text-xl tracking-wide">Rivaldiansyah Pramadhan</span>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-gray-400 hover:text-primary cursor-pointer transition-colors text-sm"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-4 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-darkSecondary border-t border-white/5 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={600}
              offset={-80}
              className="block py-2 text-gray-400 hover:text-primary cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}