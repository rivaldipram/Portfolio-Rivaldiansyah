import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiArrowRight, FiCheck, FiCopy } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rivaldiansyah@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative bg-darkSecondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">Let's connect</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Get In Touch</h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">
            Have a project, a collaboration opportunity, or simply want to connect? I'd love to hear from you. My inbox is always open for new ideas, meaningful conversations, and exciting opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info / Status card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Availability status */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 text-xs font-semibold">Available</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">Open to opportunities</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
              Currently seeking full-time opportunities or freelance projects in Frontend Development, Business Analysis, Data Analytics, and Product Management.
              </p>
            </div>

            {/* Email & Location */}
            <div className="space-y-4">
              {[
                { icon: <FiMail />, label: "Email", value: email },
                { icon: <FiMapPin />, label: "Location", value: "Jakarta, Indonesia" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time strip */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: "Response time", value: "< 24 hours" },
                { label: "Time zone", value: "GMT+7 (WIB)" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                  <p className="text-white text-sm font-semibold mt-0.5">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tombol kontak langsung */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/6282112662261?text=Hi%20Rivaldi%2C%20I%E2%80%99d%20love%20to%20connect%20and%20discuss%20further."
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 w-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 rounded-2xl px-6 py-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-green-400" size={22} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-gray-500 text-xs mt-0.5">Fastest way to reach me</p>
              </div>
              <FiArrowRight className="text-gray-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all" size={18} />
            </motion.a>

            {/* Email with copy fallback */}
            <div className="relative">
              <motion.a
                href={`mailto:${email}?subject=Hello%20Rivaldi&body=Hi%20Rivaldi%2C%20I%E2%80%99d%20like%20to%20talk%20about...`}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 w-full bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 rounded-2xl px-6 py-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-primary" size={22} />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white font-semibold text-sm">Send an Email</p>
                  <p className="text-gray-500 text-xs mt-0.5">{email}</p>
                </div>
                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopyEmail();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 group-hover:text-primary transition-colors p-1.5 hover:bg-white/5 rounded-lg"
                  title="Copy email address"
                >
                  {copied ? <FiCheck size={16} className="text-emerald-400" /> : <FiCopy size={16} />}
                </motion.button>
              </motion.a>

              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-6 right-6 text-emerald-400 text-xs"
                >
                  Email copied to clipboard
                </motion.span>
              )}
            </div>

            <p className="text-gray-600 text-xs px-1 pt-2">
              If the "Send an Email" button doesn't open your mail app, use the copy icon
              to copy my email address instead.
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-white/5">
          <p className="text-gray-600 text-xs">
            Designed & Built by{" "}
            <span className="text-primary">Rivaldiansyah Pramadhan</span> · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}