// import { motion } from "framer-motion";
// import profile from "../Assets/profile.jpg";

// export default function Hero() {
//   return (
//     <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-cyan-50 via-white to-blue-50">
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* Left Side */}
//           <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//             <p className="text-cyan-600 font-semibold text-lg mb-3">Hello, I'm</p>

//             <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
//               Madhan
//               <span className="text-cyan-600"> Kolla</span>
//             </h1>

//             <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mt-4">Frontend Developer</h2>

//             <p className="text-slate-600 text-lg leading-relaxed mt-6 max-w-xl">
//               Passionate Frontend Developer skilled in React.js, JavaScript, Tailwind CSS and modern web technologies. I
//               enjoy creating responsive, user-friendly and visually appealing web applications.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <a
//                 href="#projects"
//                 className="
//                 bg-cyan-600
//                 hover:bg-cyan-700
//                 text-white
//                 px-6
//                 py-3
//                 rounded-xl
//                 font-medium
//                 transition
//                 "
//               >
//                 View Projects
//               </a>

//               <a
//                 href="/madhan-resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-xl font-medium transition"
//               >
//                 View Resume
//               </a>
//             </div>
//           </motion.div>

//           {/* Right Side */}
//           <div className="flex justify-center">
//             <div
//               className="
//               relative
//               p-[3px]
//               rounded-3xl
//               bg-gradient-to-br
//               from-cyan-400
//               via-sky-400
//               to-blue-500
//               shadow-[0_0_35px_rgba(34,211,238,0.35)]
//               "
//             >
//               <div
//                 className="
//                 rounded-3xl
//                 overflow-hidden
//                 bg-white
//                 "
//               >
//                 <img
//                   src={profile}
//                   alt="Madhan Kolla"
//                   className="
//                   w-[250px]
//                   h-[320px]
//                   md:w-[320px]
//                   md:h-[400px]
//                   object-cover
//                   "
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import profile from "../Assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 min-h-[calc(100vh-96px)] items-center gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 z-10"
          >
            <p className="text-cyan-600 font-semibold text-lg mb-3">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Madhan
              <span className="text-cyan-600"> Kolla</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mt-4">Frontend Developer</h2>

            <p className="text-slate-600 text-lg leading-relaxed mt-6 max-w-xl">
              Passionate Frontend Developer skilled in React.js, JavaScript, Tailwind CSS and modern web technologies. I
              enjoy creating responsive and user-friendly web applications.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-medium transition"
              >
                View Projects
              </a>

              <a
                href="/madhan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-xl font-medium transition"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:flex justify-center items-end min-h-[calc(100vh-96px)]"
          >
            {/* Big soft circle background */}
            <div className="absolute right-[-180px] bottom-[-120px] w-[760px] h-[760px] rounded-full bg-cyan-100/80"></div>

            {/* Blur glow */}
            <div className="absolute right-10 bottom-20 w-[420px] h-[420px] rounded-full bg-cyan-300/30 blur-3xl"></div>

            {/* Dot pattern */}
            <div className="absolute top-24 left-6 grid grid-cols-5 gap-3">
              {[...Array(25)].map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-cyan-300/60"></span>
              ))}
            </div>

            {/* Small circles */}
            <span className="absolute top-16 left-40 w-5 h-5 rounded-full border-2 border-cyan-500"></span>
            <span className="absolute bottom-24 left-0 w-6 h-6 rounded-full border-2 border-cyan-500"></span>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Madhan Kolla"
              className="relative z-10 h-[680px] w-auto object-contain object-bottom"
            />

            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-50 via-blue-50/80 to-transparent z-20"></div>
          </motion.div>

          {/* Mobile Image */}
          <div className="md:hidden flex justify-center pb-12">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-100 scale-125"></div>
              <div className="absolute -inset-6 bg-cyan-300/30 blur-3xl rounded-full"></div>

              <img
                src={profile}
                alt="Madhan Kolla"
                className="relative z-10 w-[300px] h-[380px] object-cover object-top rounded-b-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
