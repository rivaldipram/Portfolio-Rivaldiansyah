import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiBootstrap,
  SiLaravel,
  SiDjango,
  SiPhp,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import { FaFileExcel } from "react-icons/fa";

const skillGroups = [
  {
    category: "🌐 Web Development",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Material UI", icon: "🎨" },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },

  {
    category: "📊 Data & Analytics",
    color: "from-orange-400 to-pink-500",
    skills: [
      { name: "Microsoft Excel", icon: <FaFileExcel /> },
      { name: "Google Sheets", icon: "📄" },
      { name: "Power BI", icon: "📊" },
      { name: "Looker Studio", icon: "📈" },
      { name: "Chart.js", icon: "📉" },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    category: "🤝 Design & Collaboration",
    color: "from-violet-400 to-purple-600",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

const badgeColor = (level) => {
  switch (level) {
    case "Intermediate":
      return "bg-cyan-500/20 text-cyan-300 border border-cyan-400/20";

    case "Basic":
      return "bg-yellow-500/20 text-yellow-300 border border-yellow-400/20";

    case "Learning":
      return "bg-violet-500/20 text-violet-300 border border-violet-400/20";

    default:
      return "bg-gray-500/20 text-gray-300";
  }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 relative bg-darkSecondary/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-20"
>
  <p className="text-primary text-sm font-mono tracking-[0.3em] uppercase mb-4">
    Technologies • Tools
  </p>

  <h2 className="text-4xl md:text-5xl font-black text-white">
    Skills & Expertise
  </h2>

  <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
    Technologies, tools, and competencies that support my journey in developing
    digital solutions, analyzing business needs, and continuously improving my
    professional skills.
  </p>
</motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg p-7 hover:border-primary/40 transition-all duration-500"
            >
              <h3
                className={`text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${group.color}`}
              >
                {group.category}
              </h3>

            <div className="space-y-4">
  {group.skills.map((skill, si) => (
    <motion.div
      key={si}
      whileHover={{ x: 6 }}
      className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
    >
      <span className="text-xl text-primary">
        {skill.icon}
      </span>

      <span className="text-sm font-medium tracking-wide">
        {skill.name}
      </span>
    </motion.div>
  ))}
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}