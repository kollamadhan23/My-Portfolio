import { motion } from "framer-motion";
import { skills } from "../Data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Skills</h2>

          <div className="w-20 h-1 bg-cyan-600 rounded-full mb-10"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center text-slate-700 font-medium shadow-sm hover:border-cyan-500 hover:text-cyan-600 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
