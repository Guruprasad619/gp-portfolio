import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
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
              <h4 className="font-semibold text-black">
                <strong>Professional Summary</strong>
              </h4>
              <p className="leading-relaxed">
                I am a Computer Science Engineering student with a strong
                foundation in C, Java, and SQL. I enjoy building end-to-end
                applications and learning new technologies. I have completed
                internships where I worked with Azure AI services and developed
                practical solutions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur ">
              <h4 className="font-semibold text-black">
                <strong>Experience & Internships</strong>
              </h4>
              <ol className="mt-2 text-gray-600 list-decimal list-inside space-y-2">
                <li>
                  <strong>ICT Academy - Infosys Foundation</strong> — Internship
                  Trainee (Nov-Dec 2024). Worked with Azure AI fundamentals and
                  built AI integrations.
                </li>
                <li>
                  <strong>VTU’s VRIF Internship</strong> — Entrepreneurship &
                  Innovation (Sep-Dec 2024). Built Career Navigator platform and
                  performed user research.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur">
            <h4 className="font-semibold text-black">
              <strong>Education </strong>
            </h4>
            <ul className="mt-2 text-gray-600 list-disc list-inside space-y-2">
              <li>
                <strong>Maharaja Institute of Technology Mysore</strong> — B.E
                in CSE (8.5/10.0)
              </li>
              <li>
                <strong>Marimallappa PU College</strong> — PCMB (97%)
              </li>
              <li>
                <strong>Marimallappa's High School</strong> — Secondary (97%)
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/40 shadow backdrop-blur">
            <h4 className="font-semibold text-black">
              <strong> Certifications & Training </strong>
            </h4>
            <ul className="text-gray-600 mt-2  list-disc list-inside space-y-2">
              <li><b>Java Full Stack Course</b> – Jspiders Rajajinagar</li>
              <li>
                <b>Career Essentials in Software Development</b> – Microsoft & LinkedIn </li>
              <li><b>Front End Development Libraries</b> – FreeCodeCamp</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


