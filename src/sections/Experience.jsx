import { motion } from "framer-motion";

const experiences = [
  {
    role: "Final Project – Expedition Management System with RBAC",
    company: "PT Amora Ginka Kindo",
    period: "Sep 2025 – Nov 2025",
    type: "Final Project",
    description: [
      "Developed the frontend of a web-based Expedition Management System using Laravel, Tailwind CSS, and Chart.js.",
      "Implemented Role-Based Access Control (RBAC) and built modules for dashboard, expedition, customer, and invoice management.",
      "Applied Agile development and successfully validated all features through Black Box Testing.",
    ],
    tech: [
      "Laravel",
      "Blade",
      "Tailwind CSS",
      "Chart.js",
      "RBAC",
      "MySQL",
    ],
    color: "from-primary to-cyan-300",
  },

  {
    role: "Asset Management & Inventory Intern",
    company: "PT Telkom Infrastruktur Indonesia",
    period: "Feb 2025 – May 2025",
    type: "Internship",
    description: [
      "Contributed to the development of a web-based Inventory Management System using Django and Angular.",
      "Built responsive interfaces with Bootstrap and Leaflet.js for inventory visualization and interactive maps.",
      "Collaborated with cross-functional teams in application deployment and maintenance following enterprise standards.",
    ],
    tech: [
      "Django",
      "Angular",
      "Bootstrap",
      "Leaflet.js",
      "MySQL",
      "Git",
    ],
    color: "from-secondary to-violet-400",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">Professional Experience</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary border-2 border-dark -translate-x-1/2 z-10" />

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-14 md:ml-0">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                        <p className="text-gray-400 text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${exp.color} text-dark`}>
                          {exp.type}
                        </span>
                        <p className="text-gray-500 text-xs mt-1">{exp.period}</p>
                      </div>
                    </div>

                    <ul className="space-y-1 mb-4">
                      {exp.description.map((d, j) => (
                        <li key={j} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}