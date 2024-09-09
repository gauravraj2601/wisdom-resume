"use client"
import { Tooltip } from "flowbite-react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", tooltip: "JavaScript: Programming Language" },
    { name: "React", tooltip: "React: Frontend JavaScript library" },
    { name: "Redux", tooltip: "Redux: State management library" },
    { name: "Git", tooltip: "Git: Version control system" },
    { name: "Node.js", tooltip: "Node.js: Backend runtime environment" },
    { name: "Express.js", tooltip: "Express.js: Web framework for Node.js" },
    { name: "MongoDB", tooltip: "MongoDB: NoSQL database" },
    { name: "RESTful APIs", tooltip: "RESTful APIs: Web service architecture" },
    { name: "HTML", tooltip: "HTML: Structure of web pages" },
    { name: "CSS", tooltip: "CSS: Styling web pages" },
    { name: "Tailwind CSS", tooltip: "Tailwind CSS: Utility-first CSS framework" },
    { name: "Chakra UI", tooltip: "Chakra UI: Component-based UI library" },
  ];

  return (
    <section id='skills' className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        {skills.map((skill, index) => (
          <div key={index} className="relative">
            <Tooltip content={skill.tooltip} placement="top" arrow={false} animation="duration-300" trigger="hover" className="tooltip-custom" >
              <button className="text-white bg-[#333a4d] hover:bg-[#192035] font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                {skill.name}
              </button>
            </Tooltip>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
