import { motion } from "framer-motion";
import profile from "../Assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-cyan-600 font-semibold text-lg mb-3">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Madhan
              <span className="text-cyan-600"> Kolla</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mt-4">Frontend Developer</h2>

            <p className="text-slate-600 text-lg leading-relaxed mt-6 max-w-xl">
              Passionate Frontend Developer skilled in React.js, JavaScript, Tailwind CSS and modern web technologies. I
              enjoy creating responsive, user-friendly and visually appealing web applications.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="
                bg-cyan-600
                hover:bg-cyan-700
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
                transition
                "
              >
                View Projects
              </a>

              <a
                href="/resume-final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-xl font-medium transition"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div
              className="
              relative
              p-[3px]
              rounded-3xl
              bg-gradient-to-br
              from-cyan-400
              via-sky-400
              to-blue-500
              shadow-[0_0_35px_rgba(34,211,238,0.35)]
              "
            >
              <div
                className="
                rounded-3xl
                overflow-hidden
                bg-white
                "
              >
                <img
                  src={profile}
                  alt="Madhan Kolla"
                  className="
                  w-[250px]
                  h-[320px]
                  md:w-[320px]
                  md:h-[400px]
                  object-cover
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
