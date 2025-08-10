import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
     
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#projects"
          className="hover:text-purple-600 transition-colors duration-200 hover:underline hover:decoration-purple-600 underline-offset-4"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="hover:text-purple-600 transition-colors duration-200 hover:underline hover:decoration-purple-600 underline-offset-4"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="hover:text-purple-600 transition-colors duration-200 hover:underline hover:decoration-purple-600 underline-offset-4"
        >
          Contact
        </a>
        <a
          href="/assets/Latest_resume.pdf"
          download
          className="ml-4 inline-flex items-center gap-2 bg-purple-400 text-white px-4 py-2 rounded-md font-semibold shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-purple-600"
        >
          <FaDownload /> Resume
        </a>
      </div>
    </nav>
  );
}