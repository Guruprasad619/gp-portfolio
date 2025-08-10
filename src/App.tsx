import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import ToolsAndTech from "./components/ToolsAndTech";
import Contact from "./components/Contact";

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "WEATHER FORECAST APP",
    description:
      "React.js app for searching locations and viewing 6-day weather forecasts with real-time data using API, featuring a live interactive map background.",
    image: "/assets/weather.png",
    technologies: [
      { name: "React.js", icon: "" },
      { name: "API", icon: "" },
      { name: "Map", icon: "" }
    ],
    github: "https://github.com/Guruprasad619/Weather-app",
    demo: "https://guruprasad619.github.io/Weather-app/"
  },
  {
    id: 2,
    title: "GAME-SPACE: WEB-BASED GAMING PLATFORM",
    description:
      "Game-Space is a web-based gaming platform featuring 21 mini-JavaScript games, crafted using Next.js and TypeScript.",
    image: "/assets/gamespace.png",
    technologies: [
      { name: "Next.js", icon: "" },
      { name: "TypeScript", icon: "" },
      { name: "JavaScript", icon: "" }
    ],
    github: "https://github.com/Guruprasad619/Game-space",
    demo: "https://guruprasad619.github.io/Game-space/"
  },
  {
    id: 3,
    title: "FACE RECOGNITION-BASED ATTENDANCE SYSTEM",
    description:
      "An automated attendance system using OpenCV and face_recognition for real-time face detection, achieving over 90% accuracy.",
    image: "/assets/attendance.png",
    technologies: [
      { name: "Python", icon: "" },
      { name: "OpenCV", icon: "" },
      { name: "face_recognition", icon: "" }
    ],
    github:
      "https://github.com/Guruprasad619/Face-Recognition-Based-Attendance-System",
    demo: ""
  },
  {
    id: 4,
    title: "INSURANCE FRAUD DETECTION",
    description:
      "A Flask web app enabling real-time interaction with a trained model for efficient analysis and prediction of potential fraud cases.",
    image: "/assets/fraud.png",
    technologies: [
      { name: "Python", icon: "" },
      { name: "Flask", icon: "" },
      { name: "Machine Learning", icon: "" }
    ],
    github:
      "https://github.com/Guruprasad619/Insurance-fraud-prediction",
    demo: ""
  },
  {
    id: 5,
    title: "DRUG CLASSIFICATION MODEL",
    description:
      "A drug classification model using K-Nearest Neighbors (KNN) to recommend drugs based on patient data from a dataset of 200 records.",
    image: "/assets/drug.png",
    technologies: [
      { name: "Python", icon: "" },
      { name: "KNN", icon: "" },
      { name: "Machine Learning", icon: "" }
    ],
    github: "https://github.com/Guruprasad619/Drug-Classification-",
    demo: ""
  },
  {
    id: 6,
    title: "CAREER NAVIGATOR",
    description:
      "An AI-driven coding interview platform offering personalized preparation with company-specific questions and an interactive editor.",
    image: "/assets/cn.jpg",
    technologies: [
      { name: "Next.js", icon: "" },
      { name: "TypeScript", icon: "" },
      { name: "AI", icon: "" }
    ],
    github: "https://github.com/Guruprasad619/Career-Navigator",
    demo: "https://career-navigator-iota.vercel.app/"
  }
];


export default function App() {
  const [form, setForm] = useState({
    "entry.593212027": "",
    "entry.533863544": "",
    "entry.381445346": "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const encodedData = Array.from(formData.entries())
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');
    try {
      await fetch(
        `https://docs.google.com/forms/d/e/1FAIpQLScpItR_Pm-y2PS3C33-hXXNDynTp1Zkmld9lGQ_TIH13Ssd4Q/formResponse?${encodedData}`,
        { method: 'POST', mode: 'no-cors' }
      );
      alert("Your message has been sent! Thank you for reaching out.");
      setForm({
        "entry.593212027": "",
        "entry.533863544": "",
        "entry.381445346": "",
      });
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
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <About />
        <Skills />
        <ToolsAndTech />
        <Projects projects={projects} />
        <Contact form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
        <footer id="resume" className="py-12 text-center text-gray-400">
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">
              © {new Date().getFullYear()} Guru Prasad G M 
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
