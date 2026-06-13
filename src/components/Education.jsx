import { motion } from "framer-motion";
import { education } from "../Data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Education</h2>

          <div className="w-20 h-1 bg-cyan-600 rounded-full mb-10"></div>

          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.degree}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-cyan-500 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900">{item.degree}</h3>

                <p className="text-cyan-700 font-medium mt-1">{item.stream}</p>

                <p className="text-slate-600 mt-2">{item.college}</p>

                <div className="flex flex-wrap gap-4 mt-3 text-slate-500">
                  <span>{item.score}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
