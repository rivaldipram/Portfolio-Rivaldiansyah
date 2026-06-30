import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Certifications", value: 8, suffix: "" },
  { label: "GPA", value: 3.7, suffix: "/4.0", decimal: true },
];

function Counter({ value, suffix, decimal }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        const duration = 1500;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(decimal ? +current.toFixed(1) : Math.floor(current));
          }
        }, duration / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimal]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Turning ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                digital reality
              </span>
            </h3>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                Hello! I'm Rivaldiansyah, a fresh graduate in Informatics Engineering who enjoys solving
                problems through technology, data, and thoughtful analysis. I believe great digital
                solutions begin with understanding both user needs and business goals.
              </p>
              <p>
                My interest in <span className="text-primary">Business Analysis, Data Analytics, and Digital Product Development</span> drives
                where I can bridge the gap between stakeholders and technology teams to create
                meaningful solutions.
              </p>
              <p>
                Outside of work, I enjoy learning new tools, building personal projects, and continuously
                improving my skills while connecting with people who share the same passion for
                innovation and technology.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-primary/30 text-primary text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/40 transition-all hover:bg-primary/5"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                  <Counter {...s} />
                </div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}