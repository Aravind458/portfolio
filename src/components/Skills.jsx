import React from "react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiSalesforce,
} from "react-icons/si";

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", icon: <FaJsSquare size="1em" />, color: "#F7DF1E" },
    { name: "Python", icon: <FaPython size="1em" />, color: "#3776AB" },
    { name: "Java", icon: <FaJava size="1em" />, color: "#007396" },
  ],
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 size="1em" />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt size="1em" />, color: "#1572B6" },
    { name: "React", icon: <FaReact size="1em" />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiPostman size="1em" />, color: "#38BDF8" }, // Placeholder
  ],
  "Backend & Database": [
    { name: "Node.js", icon: <FaNodeJs size="1em" />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress size="1em" />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb size="1em" />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql size="1em" />, color: "#4479A1" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt size="1em" />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub size="1em" />, color: "#181717" },
    { name: "Postman", icon: <SiPostman size="1em" />, color: "#FF6C37" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-3 transition-transform hover:scale-105 shadow-md"
                  >
                    <div
                      className="p-2 rounded-full mb-2"
                      style={{ backgroundColor: skill.color }}
                    >
                      <div className="text-white">{skill.icon}</div>
                    </div>
                    <p className="text-sm font-medium text-center text-white">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
