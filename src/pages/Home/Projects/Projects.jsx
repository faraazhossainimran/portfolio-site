import React from "react";
import Button from "../../../components/Button/Button";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiAxios } from "react-icons/si";
const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "ProductPeak",
      imageSrc: "https://i.ibb.co/Pt2mCVD/Screenshot-2023-12-13-033552.png",
      technologies: [<IoLogoReact className="text-[#87CEEB] animate-spin"></IoLogoReact>, <SiMongodb className="text-[#00A36C]"></SiMongodb>, <BiLogoJavascript className=" text-[#FFFF00]"></BiLogoJavascript>, <SiTailwindcss className="text-[#87CEEB]"></SiTailwindcss>,<IoLogoFirebase className="text-[#FFFF00]"></IoLogoFirebase>, <SiAxios className="text-[#7e50ff]"></SiAxios>],
      description:
        "ProductPeak is has a separate user experience for the users, admins and modarators. It is a platform that solves users lack of information about latest and trending tech products. MERN Stack is being used to build it.",
      githubLink: "https://github.com/faraazhossainimran/ProductPeak",
      liveSiteLink: "https://product-peak-568e6.web.app/",
    },
    {
        id: 1,
        title: "Hackathon Event",
        imageSrc: "https://i.ibb.co/bbbBQd1/Screenshot-2023-12-13-033337.png",
        technologies: [<IoLogoReact className="text-[#87CEEB] animate-spin"></IoLogoReact>, <BiLogoJavascript className=" text-[#FFFF00]"></BiLogoJavascript>, <SiTailwindcss className="text-[#87CEEB]"></SiTailwindcss>,<IoLogoFirebase className="text-[#FFFF00]"></IoLogoFirebase>],
        description:
          "It is a event management site called hackathon. Hackathon event is a 12-hour beginner-friendly hackathon designed to be your first hackathon experience. They provide venue, mentors etc. MERN Stack is being used to build it.",
        githubLink: "https://github.com/faraazhossainimran/hackathor-event",
        liveSiteLink: "https://hackathon-event-4483a.web.app/",
      },
      {
        id: 1,
        title: "BookVista",
        imageSrc: "https://i.ibb.co/hYw6sQY/Screenshot-2023-12-13-033732.png",
        technologies: [<IoLogoReact className="text-[#87CEEB] animate-spin"></IoLogoReact>, <SiMongodb className="text-[#00A36C]"></SiMongodb>, <BiLogoJavascript className=" text-[#FFFF00]"></BiLogoJavascript>, <SiTailwindcss className="text-[#87CEEB]"></SiTailwindcss>,<IoLogoFirebase className="text-[#FFFF00]"></IoLogoFirebase>, <SiAxios className="text-[#7e50ff]"></SiAxios>],
        description:
          "BookVista is a hotel management website. FIrebase, node.js, Express.js, React.js has been used to build this site. Users can reveiws about their hotel experience, book hotels as their needed.",
        githubLink: "https://github.com/faraazhossainimran/BookVista",
        liveSiteLink: "https://bookvista-9b00d.web.app/",
      },
  ];

  return (
    <div className="m-4">
      <h1 className="text-3xl my-12 font-semibold text-[#a6c7e3]">Recent Projects</h1>
      {projectData.map((project) => (
        <div key={project.id} className="hero bg-[#1e293c] my-6">
          <div className="hero-content flex-col lg:flex-row">
            <img src={project.imageSrc} className="w-[370px] rounded-lg shadow-2xl " alt={project.title} />
            <div>
              <div className="text-white">
                <h1 className="text-3xl font-bold text-[#e0e0e0]">{project.title}</h1>
                <div className="pt-2 text-white">
                  <p className="flex flex-wrap"><span className="text-xl">Tech Stack:</span> {project.technologies.map((tech, index) => (
                    <div key={index} className="ml-4 mr-4 text-3xl">
                      <p className="py-2 md:py-0">{tech}</p>
                    </div>
                  ))}</p>
                </div>
              </div>
              <p className="py-6 text-[#e0e0e0]">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button><Button label={"Github"}></Button></button>
              </a>
              <a href={project.liveSiteLink} target="_blank" rel="noopener noreferrer">
              <button><Button label={"Live site"}></Button></button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
