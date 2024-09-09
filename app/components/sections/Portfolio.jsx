import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Importing icons from react-icons
import { FaBriefcase } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { Tooltip } from "flowbite-react";

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

  // Projects data
  const projects = [
    {
      title: "Electronix Express",
      subtitle: "E-commerce Platform",
      description:
        "Electronix Express is an e-commerce platform specializing in electronic products. It offers a seamless online shopping experience for electronics enthusiasts.",
      techStack: "HTML | CSS | React | Chakra-UI | Redux",
      image: "https://i.ibb.co/pWjXD3T/Home.png",
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

      <VerticalTimeline lineColor={"#70708f"} animate={true}>
        {projects.map((project, index) => {
          return (
            <VerticalTimelineElement
              visible={true}
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#333a4d", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid#333a4d" }}
              iconStyle={{ background: "#333a4d", color: "#fff" }}
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
                  <Image width={220} height={150} src={project.image} alt={project.title} />
                </div>
              </div>
              <p>{project.description}</p>
              <p>
                <span className="font-bold">Tech-Stack:</span> {project.techStack}
              </p>

              <div className="flex justify-center space-x-6 mt-2" >
                <Tooltip content="GitHub Repo" placement="top" arrow={false} animation="duration-300" trigger="hover" className="tooltip-custom"  >
                  <button
                    type="button"
                    className="project-github-link text-white hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={project.githubLink}
                  >
                    <BsGithub size={25} />
                  </button>
                </Tooltip>

                <Tooltip content="Deployed Link" placement="top" arrow={false} animation="duration-300" trigger="hover" className="tooltip-custom"  >
                  <button
                    type="button"
                    className="project-deployed-link text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={project.deployedLink}
                  >
                    <SiNetlify size={20} />
                  </button>
                </Tooltip>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Portfolio;
