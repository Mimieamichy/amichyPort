import React from "react";

const Projects = ({ title, description, link }) => {
  return (
    <div className=" bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-all">
      <h3 className="text-xl font-black  text-white mb-2">{title}</h3>
      <p className=" text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-darkPink hover:underline font-medium"
      >
        View Project
      </a>
    </div>
  );
};

export default Projects;
