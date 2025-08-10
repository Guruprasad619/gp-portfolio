import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiOracle
} from "react-icons/si";

const projects = [
  {
    title: "WEATHER FORECAST APP",
    desc: "React.js app for searching locations and viewing 6-day weather forecasts with real-time data using API, featuring a live interactive map background.",
    tech: ["React.js", "API", "Map"],
    link: "https://guruprasad619.github.io/Weather-app/",
    img: "/assets/weather.png",
  },
  {
    title: "GAME-SPACE: WEB-BASED GAMING PLATFORM",
    desc: "Game-Space is a web-based gaming platform featuring 21 mini-JavaScript games, crafted using Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "JavaScript"],
    link: "https://guruprasad619.github.io/Game-space/",
    img: "/assets/gamespace.png",
  },
  {
    title: "FACE RECOGNITION-BASED ATTENDANCE SYSTEM",
    desc: "An automated attendance system using OpenCV and face_recognition for real-time face detection, achieving over 90% accuracy.",
    tech: ["Python", "OpenCV", "face_recognition"],
    link: "https://github.com/Guruprasad619/Face-Recognition-Based-Attendance-System",
    img: "/assets/attendance.png",
  },
  {
    title: "INSURANCE FRAUD DETECTION",
    desc: "A Flask web app enabling real-time interaction with a trained model for efficient analysis and prediction of potential fraud cases.",
    tech: ["Python", "Flask", "ML"],
    link: "https://github.com/Guruprasad619/Insurance-fraud-prediction",
    img: "/assets/fraud.png",
  },
  {
    title: "DRUG CLASSIFICATION MODEL",
    desc: "A drug classification model using K-Nearest Neighbors (KNN) to recommend drugs based on patient data from a dataset of 200 records.",
    tech: ["Python", "KNN", "ML"],
    link: "https://github.com/Guruprasad619/Drug-Classification-",
    img: "/assets/drug.png",
  },
  {
    title: "CAREER NAVIGATOR",
    desc: "An AI-driven coding interview platform offering personalized preparation with company-specific questions and an interactive editor.",
    tech: ["Next.js", "TypeScript", "AI"],
    link: "https://career-navigator-iota.vercel.app/",
    img: "/assets/cn.jpg",
  },
];

export default function App() {
  const [form, setForm] = useState({
    "entry.593212027": "",
    "entry.533863544": "",
    "entry.381445346": "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Async Google Forms submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const encodedData = Array.from(formData.entries())
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');

    try {
      await fetch(
        `https://docs.google.com/forms/d/e/1FAIpQLScpItR_Pm-y2PS3C33-hXXNDynTp1Zkmld9lGQ_TIH13Ssd4Q/formResponse?${encodedData}`,
        {
          method: 'POST',
          mode: 'no-cors',
        }
      );
      alert("Your message has been sent! Thank you for reaching out.");
      setForm({
        "entry.593212027": "",
        "entry.533863544": "",
        "entry.381445346": "",
      }); // Clear fields
    } catch (error) {
      alert("Sorry, there was a problem sending your message. Please try again later.");
    }
  };

  return (
    <div
  className="min-h-screen text-gray-900"
  style={{
    backgroundImage: `radial-gradient(circle at 51% 29%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 95% 73%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.03) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 66% 49%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 89% 3%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 84% 66%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 3%,transparent 3%, transparent 100%),radial-gradient(circle at 85% 96%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 26% 14%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 59% 13%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.03) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 21% 44%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 9% 11%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 70% 60%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 27% 19%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 33% 2%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 7%,transparent 7%, transparent 100%),radial-gradient(circle at 91% 36%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 100% 8%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 87% 65%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 36% 37%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.03) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 89% 79%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 5%,transparent 5%, transparent 100%),linear-gradient(90deg, hsla(245,0%,100%,1),hsla(230,0%,100%,1))`
  }}
>
      
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-extrabold text-2xl tracking-tight">
            GURUPRASAD G M
          </div>
          <div className="text-sm text-gray-500">
            | Java • SQL • Full Stack |
          </div>
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
          {/* Resume Button */}
<a
  href="/assets/Latest_resume.pdf"
  download
  className="ml-4 inline-flex items-center gap-2 bg-purple-400 text-white px-4 py-2 rounded-md font-semibold shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-purple-600"
>
  <FaDownload /> Resume
</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 py-12">
  {/* Hero Text - left */}
  <div className="flex-1">
    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold leading-tight"
    >
      Hi, I’m <span className="text-purple-600">Guruprasad G M</span>
      <br />
      A <span className="text-purple-600">Java Full Stack</span>{" "}
      Developer in training at Jspiders.
    </motion.h1>


    <div className="mt-6 flex items-center gap-4">
      {/* Explore Projects Button */}
<a
  href="#projects"
  className="bg-purple-400 text-white px-5 py-3 rounded-md font-semibold shadow transition-transform duration-200 hover:scale-105 hover:bg-purple-600"
>
  Explore Projects
</a>
      <a
        href="#contact"
        className="px-5 py-3 border border-purple-400 rounded-md text-purple-600 transition-transform duration-200 hover:scale-105 hover:bg-purple-100 hover:text-purple-800"
      >
        Contact Me
      </a>
    </div>

    <div className="mt-6 flex items-center gap-4 text-gray-500">
      <a aria-label="GitHub" href="https://github.com/Guruprasad619" target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} />
      </a>
      <a aria-label="LinkedIn" href="https://linkedin.com/in/guruprasadgm" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={20} />
      </a>
      <a
        aria-label="Email"
        href="mailto:guruprasadgm404@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  </div>
  {/* Profile Image - right */}
  <div className="flex-shrink-0">
    <img
      src="/assets/profile.jpg"
      alt="Guruprasad G M"
      className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 to-rose-300 object-cover shadow-lg"
    />
  </div>
</header>

      <main className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <section id="about" className="py-12">
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-purple-600 font-bold"
          >
            About Me
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
            <div className="text-gray-600">
               <div className="space-y-4">
               <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur">
                <h4 className="font-semibold text-black"><strong>Professional Summary</strong></h4>
              <p className="leading-relaxed">
                I am a Computer Science Engineering student with a strong
                foundation in C, Java, and SQL. I enjoy building end-to-end
                applications and learning new technologies. I have completed
                internships where I worked with Azure AI services and developed
                practical solutions.
              </p>
              </div>

            
              <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur ">
                <h4 className="font-semibold text-black"><strong>Experience & Internships</strong></h4>
               <ol className="mt-2 text-gray-600 list-decimal list-inside space-y-2">
                  <li>
                    <strong>ICT Academy - Infosys Foundation</strong> —
                    Internship Trainee (Nov-Dec 2024). Worked with Azure AI
                    fundamentals and built AI integrations.
                  </li>
                  <li>
                    <strong>VTU’s VRIF Internship</strong> — Entrepreneurship &
                    Innovation (Sep-Dec 2024). Built Career Navigator platform
                    and performed user research.
                  </li>
                </ol>
              </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur">
                <h4 className="font-semibold text-black"><strong>Education </strong></h4>
                <ul className="mt-2 text-gray-600 list-disc list-inside space-y-2">
                  <li>
                    <strong>Maharaja Institute of Technology Mysore</strong> —
                    B.E in CSE (8.5/10.0)
                  </li>
                  <li>
                    <strong>Marimallappa PU College</strong> — PCMB (97%)
                  </li>
                  <li>
                    <strong>Marimallappa's High School</strong> — Secondary
                    (97%)
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur">
                <h4 className="font-semibold text-black"><strong> 
                  Certifications & Training </strong></h4>
                <ul className="text-gray-600 mt-2 text-sm list-disc list-inside space-y-2">
                  <li>Java Full Stack Course – JSPiders Rajajinagar</li>
                  <li>
                    Career Essentials in Software Development – Microsoft &
                    LinkedIn
                  </li>
                  <li>Front End Development Libraries – FreeCodeCamp</li>
                </ul>
              </div>

              
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-purple-600 font-bold"
          >
            Skills
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { name: "Core Java", level: 70 },
                { name: "SQL", level: 70 },
                { name: "C", level: 50 },
                { name: "HTML & CSS", level: 70 },
                { name: "Python", level: 30 },
              ].map((s) => (
                <div
                  key={s.name}
                  className="p-4 bg-white/40 shadow backdrop-blur rounded-lg "
                >
                  <div className="flex justify-between mb-2">
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-sm text-gray-500">{s.level}%</div>
                  </div>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-purple-400"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="tools-and-tech space-y-4">

              <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-purple-600 font-bold"
          >
            Tools - Technologies - Frameworks
          </motion.h2>
            <div className="p-4 rounded-lg bg-white/40 shadow backdrop-blur">
                  
             
              <div className="mt-4 grid grid-cols-4 gap-4 text-gray-600 text-center">
           
                <SiMysql size={80} />
                <FaGitAlt size={80} />
                <SiDjango size={80} />
                <SiFlask size={80} />
                <FaGithub size={80} />
                <SiNextdotjs size={80} />
                <SiOracle size={80} title="Oracle SQL Plus" /> {/* Added Oracle */}
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl  text-purple-600 font-bold"
          >
            Projects
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={p.title}
                className="p-4 rounded-xl bg-white/40 shadow backdrop-blur"
              >
    <img
      src={p.img}
      alt={p.title}
      className="h-36 w-full object-cover rounded-md mb-2 bg-gray-100"
    />
    <h3 className="font-semibold mt-3">{p.title}</h3>
    <p className="text-gray-600 text-sm mt-2">{p.desc}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {p.tech.map((t) => (
        <span
          key={t}
          className="text-xs px-2 py-1 bg-gray-100 rounded-md"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-between">
      <a
        href={p.link}
        className="text-teal-500 text-sm font-semibold"
      >
        View
      </a>
      
    </div>
  </motion.div>
))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-purple-600  font-bold"
          >
            Contact Me
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
            <div className="text-gray-800">
               <div className="space-y-6">
               <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur">
                <h4 className="font-semibold text-black"><strong>Get in touch</strong></h4>
                <p className="leading-relaxed">
                I’m open to internships and entry-level roles. Feel free to
                reach out for collaborations or interview opportunities.
              </p>

              <div className="mt-4 space-y-4 text-gray-600 text-sm">
                <div>
                  <strong>Email:</strong> guruprasadgm404@gmail.com
                </div>
                <div>
                  <strong>Location:</strong> Bengaluru, Karnataka, India
                </div>
                <div>
                  <strong>Available:</strong> Immediate
                </div>
              </div>
              </div>
              </div>

              
            </div>

            <form
              className="p-6 rounded-xl bg-white/40 shadow backdrop-blur space-y-4"
              onSubmit={handleSubmit}
            >
      <label htmlFor="name" className="block font-semibold">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="entry.593212027"
        placeholder="Enter Your Good Name"
        required
        className="w-full p-3 rounded bg-gray-100 text-gray-900"
        value={form["entry.593212027"]}
        onChange={handleChange}
      />

      <label htmlFor="email" className="block font-semibold">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="entry.533863544"
        placeholder="example@gmail.com"
        required
        className="w-full p-3 rounded bg-gray-100 text-gray-900"
        value={form["entry.533863544"]}
        onChange={handleChange}
      />

      <label htmlFor="message" className="block font-semibold">
        Message:
      </label>
      <textarea
        id="message"
        name="entry.381445346"
        placeholder="Your Message"
        required
        className="w-full p-3 rounded bg-gray-100 text-gray-900"
        rows={4}
        value={form["entry.381445346"]}
        onChange={handleChange}
      ></textarea>

      {/* Submit Button */}
<button
        type="submit"
        className="w-full py-3 bg-purple-400 rounded font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-purple-600"
      >
        Submit
      </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer id="resume" className="py-12 text-center text-gray-400">
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">
              © {new Date().getFullYear()} Guru Prasad G M — Built with love for
              innovative software solutions.
            </p>
           
          </div>
        </footer>
      </main>
    </div>
  );
}
