import React from "react";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "ProductPeak",
      imageSrc: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
      technologies: ["React.js", "JavaScript", "Node.js", "MongoDb", "Firebase", "Tailwind"],
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
      githubLink: "https://github.com/yourusername/project1",
      liveSiteLink: "https://www.project1.com",
    },
    {
        id: 1,
        title: "Hackathon Event",
        imageSrc: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
        technologies: ["React.js", "JavaScript", "Node.js", "MongoDb", "Firebase", "Tailwind"],
        description:
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
        githubLink: "https://github.com/yourusername/project1",
        liveSiteLink: "https://www.project1.com",
      },
      {
        id: 1,
        title: "BookVista",
        imageSrc: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
        technologies: ["React.js", "JavaScript", "Node.js", "MongoDb", "Firebase", "Tailwind"],
        description:
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
        githubLink: "https://github.com/yourusername/project1",
        liveSiteLink: "https://www.project1.com",
      },
  ];

  return (
    <div>
      <h1 className="text-3xl text-white my-12">Recent Projects</h1>
      {projectData.map((project) => (
        <div key={project.id} className="hero bg-[#1e293c] my-6">
          <div className="hero-content flex-col lg:flex-row">
            <img src={project.imageSrc} className="max-w-sm rounded-lg shadow-2xl" alt={project.title} />
            <div>
              <div className="text-white">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <div className="pt-2 text-white">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="badge p-4 mr-2">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <p className="py-6 text-white">{project.description}</p>
              <a href={project.githubLink} className="btn btn-primary mr-4" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={project.liveSiteLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live site
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
