// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about" className="py-24 bg-slate-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl font-bold text-slate-900 mb-4">About Me</h2>

//           <div className="w-20 h-1 bg-cyan-600 rounded-full mb-8"></div>

//           <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
//             <p className="text-slate-600 text-lg leading-8">
//               Electronics and Communication Engineering graduate with practical experience in React.js, JavaScript,
//               Tailwind CSS, Redux Toolkit, Git and GitHub. Passionate about building responsive user interfaces and
//               modern web applications.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">About Me</h2>

          <div className="w-20 h-1 bg-cyan-600 rounded-full mb-10"></div>

          {/* Main Card */}
          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            border
            border-slate-200
            hover:border-cyan-500
            hover:-translate-y-2
            hover:shadow-cyan-100
            hover:shadow-2xl
            transition-all
            duration-300
            "
          >
            <p className="text-slate-600 text-lg leading-8">
              Electronics and Communication Engineering graduate transitioning into Software Development with practical
              experience in React.js, JavaScript, Tailwind CSS, Redux Toolkit, Git and GitHub.
              <br />
              <br />
              Passionate about frontend development, responsive UI design and building modern web applications that
              provide excellent user experiences.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div
              className="
              bg-white
              rounded-2xl
              p-6
              border
              border-slate-200
              shadow-md
              hover:border-cyan-500
              hover:bg-cyan-50
              hover:-translate-y-2
              transition-all
              duration-300
              text-center
              "
            >
              <h3 className="text-4xl font-bold text-cyan-600">2+</h3>

              <p className="text-slate-600 mt-2">Projects Built</p>
            </div>

            <div
              className="
              bg-white
              rounded-2xl
              p-6
              border
              border-slate-200
              shadow-md
              hover:border-cyan-500
              hover:bg-cyan-50
              hover:-translate-y-2
              transition-all
              duration-300
              text-center
              "
            >
              <h3 className="text-4xl font-bold text-cyan-600">12+</h3>

              <p className="text-slate-600 mt-2">Technologies</p>
            </div>

            <div
              className="
              bg-white
              rounded-2xl
              p-6
              border
              border-slate-200
              shadow-md
              hover:border-cyan-500
              hover:bg-cyan-50
              hover:-translate-y-2
              transition-all
              duration-300
              text-center
              "
            >
              <h3 className="text-4xl font-bold text-cyan-600">2024</h3>

              <p className="text-slate-600 mt-2">Graduate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
