import { motion } from "framer-motion";
import { SiMysql, SiOracle, SiPostman, SiSpring } from "react-icons/si";
import { FaGitAlt, FaGithub, FaCode, FaDesktop } from "react-icons/fa";

export default function ToolsAndTech() {
  const tools = [
    { key: "mysql", element: <SiMysql size={50} />, label: "MySQL" },
    {
      key: "oracle",
      element: <SiOracle size={50} title="Oracle SQL Plus" />,
      label: "Oracle SQL Plus",
    },
    { key: "postman", element: <SiPostman size={50} />, label: "Postman" },
    {
      key: "springboot",
      element: <SiSpring size={50} />,
      label: "Spring Boot",
    },
    { key: "vscode", element: <FaCode size={50} />, label: "VS Code" },
    { key: "eclipse", element: <FaDesktop size={50} />, label: "Eclipse" },
    { key: "git", element: <FaGitAlt size={50} />, label: "Git" },
    { key: "github", element: <FaGithub size={50} />, label: "GitHub" },
  ];

  return (
    <div className="tools-and-tech space-y-4 pt-1 md:pt-2">
      <motion.h2
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl text-purple-600 font-bold"
      >
        Tools - Technologies - Frameworks
      </motion.h2>
      <div className="p-6 rounded-lg bg-white/40 shadow backdrop-blur">
        <div className="mt-2 grid grid-cols-4 gap-8 sm:gap-10 md:gap-12 text-gray-600 text-center">
          {tools.map((item) => (
            <div
              key={item.key}
              className="p-2 sm:p-3 md:p-4 flex flex-col items-center"
            >
              {item.element}
              <span className="mt-2 text-xs sm:text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
