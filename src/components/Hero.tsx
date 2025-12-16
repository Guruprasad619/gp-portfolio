import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <header className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 py-12">
      <div className="flex-1">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Hi, I’m <span className="text-purple-600">Guruprasad G M</span>
          <br />
          Associate Engineer – Technology @{" "}
          <span className="text-purple-600">Virtusa</span>
        </motion.h1>
        <div className="mt-6 flex items-center gap-4">
          <a
            href="hashtag#projects"
            className="bg-purple-400 text-white px-5 py-3 rounded-md font-semibold shadow transition-transform duration-200 hover:scale-105 hover:bg-purple-600"
          >
            Explore Projects
          </a>
          <a
            href="hashtag#contact"
            className="px-5 py-3 border border-purple-400 rounded-md text-purple-600 transition-transform duration-200 hover:scale-105 hover:bg-purple-100 hover:text-purple-800"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-gray-500">
          <a
            aria-label="GitHub"
            href="https://github.com/Guruprasad619"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/guruprasadgm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            aria-label="Email"
            href="mailto:guruprasadgm3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/assets/profile.jpg"
          alt="Guruprasad G M"
          className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 to-rose-300 object-cover shadow-lg"
        />
      </div>
    </header>
  );
}
