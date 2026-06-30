import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certs = [
  { name: "Software Engineering", issuer: "BNSP", year: "2025" },
  { name: "Data Analytics Mini Course", issuer: "Revou", year: "2026" },
  { name: "React (Basic)", issuer: "Hackerank", year: "2025" },
  { name: "CSS (Basic)", issuer: "Hackerank", year: "2025" },
  { name: "Java (Basic)", issuer: "Hackerank", year: "2024" },
  { name: "Pyhton (Basic)", issuer: "Hackerank", year: "2024" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 bg-white/5 border border-white/10 hover:border-primary/30 rounded-xl p-5 transition-all"
            >
              <div className="text-primary mt-0.5 flex-shrink-0">
                <FiAward size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{c.name}</h4>
                <p className="text-gray-500 text-xs">{c.issuer}</p>
                <p className="text-primary text-xs mt-1 font-mono">{c.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}