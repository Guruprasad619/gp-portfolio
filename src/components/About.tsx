import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-purple-600"
      >
        About
      </motion.h2>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* SUMMARY */}
          <div className="rounded-2xl bg-white/50 backdrop-blur shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Associate Engineer at Virtusa specializing in Java Full Stack
              development. Strong foundation in building scalable backend
              services, RESTful APIs, and database-driven applications using
              industry-standard frameworks. Comfortable working across the full
              development lifecycle with a strong focus on clean code,
              problem-solving, and continuous skill improvement.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Core Java",
                "Spring Boot",
                "REST APIs",
                "Hibernate",
                "Oracle SQL",
                "Full Stack Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* TRAINING */}
          <div className="rounded-2xl bg-white/50 backdrop-blur shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Training & Internships
            </h3>

            <div className="space-y-4 border-l-2 border-purple-300 pl-4">
              <div>
                <p className="font-semibold text-gray-800">
                  Java Full Stack Trainee — JSpiders
                </p>
                <p className="text-sm text-gray-600">Jun 2025 – Nov 2025</p>
                <p className="text-sm text-gray-700 mt-1">
                  Intensive hands-on training in Core Java, Spring MVC, Spring
                  Boot, Hibernate, and full-stack CRUD applications.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Internship Trainee — ICT Academy (Infosys Foundation)
                </p>
                <p className="text-sm text-gray-600">Nov 2024 – Dec 2024</p>
                <p className="text-sm text-gray-700 mt-1">
                  Worked with Azure AI fundamentals and basic AI integrations.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  VRIF Internship — VTU
                </p>
                <p className="text-sm text-gray-600">Sep 2024 – Dec 2024</p>
                <p className="text-sm text-gray-700 mt-1">
                  Built the Career Navigator platform and conducted user
                  research for entrepreneurial validation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* EXPERIENCE */}
          <div className="rounded-2xl bg-white/50 backdrop-blur shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Current Role
            </h3>

            <p className="font-semibold text-gray-800">
              Associate Engineer – Technology
            </p>
            <p className="text-sm text-gray-600">
              Virtusa · Full-time · Dec 2025 – Present
            </p>
            <p className="text-sm text-gray-600">Chennai, India · On-site</p>

            <div className="mt-3">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-medium">
                Service Line: Data Integration
              </span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="rounded-2xl bg-white/50 backdrop-blur shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Education
            </h3>

            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-800">
                  B.E. in Computer Science Engineering
                </p>
                <p className="text-sm text-gray-600">
                  Maharaja Institute of Technology Mysore · CGPA 8.83
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Pre-University (PCMB)
                </p>
                <p className="text-sm text-gray-600">
                  Marimallappa PU College · 97%
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Secondary Education
                </p>
                <p className="text-sm text-gray-600">
                  Marimallappa’s High School · 97%
                </p>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="rounded-2xl bg-white/50 backdrop-blur shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Certifications
            </h3>

            <div className="flex flex-col gap-2 text-gray-700 text-sm">
              <span>Java Full Stack — JSpiders Rajajinagar</span>
              <span>
                Career Essentials in Software Development — Microsoft & LinkedIn
              </span>
              <span>Front End Development Libraries — FreeCodeCamp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
