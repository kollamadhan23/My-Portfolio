export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-cyan-600">Madhan K</h1>

        <div className="hidden md:flex gap-8 text-slate-700 font-medium">
          <a href="#home" className="hover:text-cyan-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-600 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
