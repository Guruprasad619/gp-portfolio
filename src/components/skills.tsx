import { motion } from "framer-motion";

export default function Skills() {
 const skills = [
 { name: "Core Java", level: 85 },
 { name: "Oracle SQL & PL/SQL", level: 80 },
 { name: "HTML, CSS & JavaScript", level: 70 },
 { name: "Hibernate", level: 60 },
 { name: "Servlets", level: 60 },
 { name: "Spring MVC", level: 55 },
 { name: "Spring Boot", level: 65 },
 { name: "REST APIs", level: 60 },
 { name: "Python", level: 50 },
 ];
 return (
 <section id="skills" className="py-12">
 <motion.h2
 initial={{ x: -30, opacity: 0 }}
 animate={{ x: 0, opacity: 1 }}
 transition={{ duration: 0.5 }}
 className="text-2xl text-purple-600 font-bold"
 >
 Skills
 </motion.h2>
 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
 {skills.map((s) => (
 <div
 key={s.name}
 className="p-4 bg-white/40 shadow backdrop-blur rounded-lg"
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
 </section>
 );
}