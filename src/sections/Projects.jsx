import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";


const projects = [
  {
    title: "Asset Management & Inventory System",
    description:
      "A web-based Inventory Management System for PT Telkom Infrastruktur Indonesia. Contributed to developing inventory management modules with Django and building Angular pages for inventory data and database listings.",
    tech: ["Django", "Angular", "Bootstrap", "MySQL"],
    github: "#",
    live: "#",
    period: "Feb 2025 – Mei 2025",
    company: "PT Telkom Infrastruktur Indonesia",
    type: "Internship",
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    screenshots: [
      "/screenshot/TIF1.png",
      "/screenshot/TIF2.png",
      "/screenshot/TIF3.png",
      "/screenshot/TIF4.png",
    ],
  },
  {
    title: "Manajemen Ekspedisi dengan RBAC",
    description:
      "A web-based Expedition Management System for PT Amora Ginka Kindo featuring Role-Based Access Control (RBAC), operational dashboards, customer management, expedition tracking, invoice management, and PDF/Excel report export.",
    tech: ["Laravel", "Blade", "Tailwind CSS", "Chart.js", "RBAC"],
    github: "#",
    live: "#",
    period: "2025 – 2026",
    company: "PT Amora Ginka Kindo",
    type: "Tugas Akhir",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
    screenshots: [
      "/screenshot/AMORA1.png",
      "/screenshot/AMORA2.png",
      "/screenshot/AMORAPROFILE.png",
      "/screenshot/AMORA3.png",
      "/screenshot/AMORA4.png",
      "/screenshot/AMORA5.png",
      "/screenshot/AMORA6.png",
      "/screenshot/AMORA7.png",
    ],
  },
  {
    title: "Infrasport & Maps Visualization",
    description:
      "Two front-end projects for PT Telkom Infrastruktur Indonesia: (1) A sports-themed page for visualizing employee sports performance and activity data. (2) An interactive map similar to Google Maps, built using Bootstrap and Leaflet.js with a responsive design.",
    tech: ["Bootstrap", "Leaflet.js", "JavaScript", "HTML/CSS"],
    github: "#",
    live: "#",
    period: "2025",
    company: "PT Telkom Infrastruktur Indonesia",
    type: "Frontend Dev",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    screenshots: [
      "/screenshot/INFRA1.png",
      "/screenshot/INFRA2.png",
      "/screenshot/INFRA5.png",
      "/screenshot/INFRA6.png",
      "/screenshot/INFRA3.png",
      "/screenshot/INFRA4.png",
      "/screenshot/MAP1.png",
      "/screenshot/MAP2.png",
    ],
  },
];

function Lightbox({ screenshots, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrent((c) => (c + 1) % screenshots.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
        >
          <FiX size={28} />
        </button>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark">
          <img
            src={screenshots[current]}
            alt={`Screenshot ${current + 1}`}
            className="w-full object-contain max-h-[75vh]"
            onError={(e) => {
              e.target.src = `https://placehold.co/1280x720/0f172a/22d3ee?text=Screenshot+${current + 1}`;
            }}
          />
        </div>

        {screenshots.length > 1 && (
          <div className="flex items-center justify-center gap-6 mt-5">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/30 border border-white/10 flex items-center justify-center text-white transition-all"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-white/30 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/30 border border-white/10 flex items-center justify-center text-white transition-all"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function ScreenshotStrip({ screenshots, onOpen }) {
  return (
    <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
      {screenshots.map((src, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpen(i)}
          className="flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all relative group"
        >
          <img
            src={src}
            alt={`thumb-${i}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://placehold.co/200x120/0f172a/22d3ee?text=${i + 1}`;
            }}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-xs font-medium">View</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="projects" className="py-32 px-6 relative bg-darkSecondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Projects</h2>
          <p className="text-gray-500 text-sm mt-4">
            Klik thumbnail untuk melihat screenshot fullscreen
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${p.gradient} border ${p.border} rounded-2xl p-7 hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Info kiri */}
                <div className="flex-1">
                 <div className="mb-3">
  <div className="flex items-center gap-3 mb-1">
    <span className={`text-xs font-bold font-mono ${p.accent}`}>
      {String(i + 1).padStart(2, "0")}
    </span>
    <h3 className="text-white font-bold text-xl">{p.title}</h3>
  </div>
  <div className="flex items-center gap-3 ml-8">
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${p.border} ${p.accent}`}>
      {p.type}
    </span>
    <span className="text-gray-500 text-xs">{p.company}</span>
    <span className="text-gray-600 text-xs font-mono">{p.period}</span>
  </div>
</div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshot kanan */}
                <div className="lg:w-72 flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setLightbox({ projectIndex: i, screenshotIndex: 0 })}
                    className="w-full h-40 rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all mb-3 relative group block"
                  >
                    <img
                      src={p.screenshots[0]}
                      alt={`${p.title} preview`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/600x400/0f172a/22d3ee?text=${encodeURIComponent(p.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Preview</span>
                    </div>
                  </motion.button>

                  {p.screenshots.length > 1 && (
                    <ScreenshotStrip
                      screenshots={p.screenshots}
                      onOpen={(idx) => setLightbox({ projectIndex: i, screenshotIndex: idx })}
                    />
                  )}

                  <p className="text-gray-600 text-xs text-center">
                    {p.screenshots.length} screenshot{p.screenshots.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            screenshots={projects[lightbox.projectIndex].screenshots}
            startIndex={lightbox.screenshotIndex}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}