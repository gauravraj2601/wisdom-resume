import 'flowbite';

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
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
                {skills.map((skill, index) => (
                    <div key={index} className="relative group">
                        <button
                            data-tooltip-target={`tooltip-${index}`}
                            className="text-white bg-[#333a4d] hover:bg-[#192035] font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                        >
                            {skill.name}
                        </button>
                        <div
                            id={`tooltip-${index}`}
                            role="tooltip"
                            className="absolute z-10 invisible group-hover:visible px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg opacity-0 transition-opacity duration-300 dark:bg-gray-700"
                        >
                            {skill.tooltip}
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
