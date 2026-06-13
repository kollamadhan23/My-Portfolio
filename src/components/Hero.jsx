import { motion } from "framer-motion";
import profile from "../Assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-cyan-50 to-blue-50 pt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-cyan-600 font-semibold mb-3">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-950">Madhan Kolla</h1>

          <h2 className="text-2xl md:text-3xl text-slate-700 mt-4">Frontend Developer</h2>

          <p className="text-slate-600 mt-6 leading-8 text-lg max-w-xl">
            I build modern, responsive web applications using React.js, JavaScript, Tailwind CSS, HTML ,CSS3.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl font-semibold text-white transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-cyan-600 text-cyan-700 px-6 py-3 rounded-xl hover:bg-cyan-600 hover:text-white font-semibold transition"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-300 blur-3xl opacity-40 rounded-full"></div>

            <div className="relative w-90 h-82 md:w-80 md:h-90 rounded-full bg-white border border-cyan-200 flex items-center justify-center shadow-xl">
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img src={profile} alt="Madhan" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
