import { motion } from "framer-motion";
import { projects } from "../Data/project";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Projects</h2>

          <div className="w-20 h-1 bg-cyan-600 rounded-full mb-10"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>

                <p className="text-slate-600 leading-7 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  GitHub
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
