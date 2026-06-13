import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Contact Me</h2>

          <div className="w-20 h-1 bg-cyan-600 rounded-full mx-auto mb-8"></div>

          <p className="text-slate-600 text-lg mb-10">
            I'm currently looking for Frontend Developer opportunities and internships.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:madhankolla9@gmail.com"
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-cyan-600 font-bold mb-2">Email</h3>

              <p className="text-slate-600 text-sm">madhankolla9@gmail.com</p>
            </a>

            <a
              href="tel:+919705870797"
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-cyan-600 font-bold mb-2">Phone</h3>

              <p className="text-slate-600 text-sm">+91 9705870797</p>
            </a>

            <a
              href="https://github.com/kollamadhan23"
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-cyan-600 font-bold mb-2">GitHub</h3>

              <p className="text-slate-600 text-sm">github.com/kollamadhan23</p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
