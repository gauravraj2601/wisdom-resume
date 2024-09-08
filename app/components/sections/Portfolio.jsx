import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Importing icons from react-icons
import { FaBriefcase } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

const Portfolio = () => {
  
  const INRGit = () => {
    window.open("https://github.com/gauravraj2601/INR-Club");
  };
  const INRDep = () => {
    window.open("https://inrclub.netlify.app/");
  };

  const streetBitesGit = () => {
    window.open("https://github.com/gauravraj2601/ruthless-store-61");
  };

  const streetBitesDep = () => {
    window.open("https://the-street-bites.vercel.app/");
  };

  const electGit = () => {
    window.open("https://github.com/gauravraj2601/gusty-adjustment-6018");
  };

  const electDep = () => {
    window.open("https://elctronix-express-k74afyg3e-ganeshgourav.vercel.app/");
  };

      // projects Data
  const projects = [
    {
      title: "Electronix Express",
      subtitle: "E-commerce Platform",
      description:
        "Electronix Express is an e-commerce platform specializing in electronic products. It offers a seamless online shopping experience for electronics enthusiasts.",
      techStack: "HTML | CSS | React | Chakra-UI | Redux",
      image: "https://user-images.githubusercontent.com/123883332/265188275-20f6e2dc-d103-464b-9bac-74e4f25d38ff.png",
      githubLink: electGit,
      deployedLink: electDep,
    },
    {
      title: "The Street Bites",
      subtitle: "Online Food Ordering Platform",
      description:
        "The Street Bites is an online food ordering platform, inspired by popular services like Uber Eats and Grubhub.",
      techStack: "HTML | CSS | React | Chakra-UI",
      image: "https://i.ibb.co/VmLwK0N/Screenshot-20240908-003247.png",
      githubLink: streetBitesGit,
      deployedLink: streetBitesDep,
    },
    {
      title: "INR Club",
      subtitle: "Hotel Booking Website",
      description:
        "INR Club is your go-to hotel booking website, simplifying the process of finding and reserving accommodations online.",
      techStack: "HTML | CSS | JavaScript",
      image: "https://i.ibb.co/K5xxXLJ/INR-Club.png",
      githubLink: INRGit,
      deployedLink: INRDep,
    },
  ];
  


  return (
    <section id="portfolio" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>

      <VerticalTimeline lineColor={"#2d2d35"} animate={true}>
        {/* Electronix Express */}
        {projects.map((project, index) => {
          const githubTooltipId = `tooltip-github-${index}`;
          const deployedTooltipId = `tooltip-netlify-${index}`;
          return (
            <VerticalTimelineElement
            visible={true}
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="vertical-timeline-element-title font-bold">
                    {project.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {project.subtitle}
                  </h4>
                </div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
              <p>{project.description}</p>
              <p><span className="font-bold">Tech-Stack:</span> {project.techStack}</p>

              <div className="project-links">
                <div className="relative">
                  <button
                    data-tooltip-target={githubTooltipId}
                    type="button"
                    className="project-github-link text-white  hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    onClick={project.githubLink}
                  >
                    <BsGithub />
                  </button>
                  <div
                    id={githubTooltipId}
                    role="tooltip"
                    className="absolute z-10 invisible opacity-0 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300"
                  >
                    GitHub Repo
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <div className="relative">
                  <button
                    data-tooltip-target={deployedTooltipId}
                    type="button"
                    className="project-deployed-link text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={project.deployedLink}
                  >
                    <SiNetlify />
                  </button>
                  <div
                    id={deployedTooltipId}
                    role="tooltip"
                    className="absolute z-10 invisible opacity-0 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300"
                  >
                    Deployed Link
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}

        </VerticalTimeline>
    </section>
  );
};

export default Portfolio;
