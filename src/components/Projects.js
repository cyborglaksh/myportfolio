import { useState } from "react";
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore some of the projects I've built and experimented with, showcasing my hands-on experience with various technologies.
          </p>
        </div>
        <div className={`grid md:grid-cols-${Math.min(3, projects.length)} gap-4`}>
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={project.image}
              className="w-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <img
                  alt="project"
                  className="object-cover object-center h-64 mb-6 rounded-md"
                  src={project.image}
                />
                <h2 className="text-sm text-green-400 tracking-wider title-font font-medium mb-2">
                  {project.subtitle}
                </h2>
                <h1 className="text-lg text-white font-medium mb-4">
                  {project.title}
                </h1>
                {hoveredProject === index && (
                  <p className="leading-relaxed text-gray-400 mb-3">
                    {project.description}
                  </p>
                )}
                <a href={project.link} className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
