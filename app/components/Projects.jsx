"use client";

import React, { useState } from "react";
import { projectData, assets } from "@/assets/assets";
import Image from "next/image";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans relative"
    >
      <div className="w-full text-center mb-16">
        <h4 className="mb-2 text-lg font-Ovo">My Portfolio</h4>
        <h2 className="text-center text-green-800 text-5xl font-Ovo">
          My Latest Projects
        </h2>
        <p className="max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600">
          Here are some of the projects I have worked on, showcasing my
          technical skills, creativity, and problem-solving approach. Each
          project reflects my learning journey in computer science.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-gray-200 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
          >
            {project.image && (
              <div className="p-3 relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 line-clamp-3 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-800 text-gray-200 text-xs font-semibold rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-400"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col items-center">
              {selectedProject.image && (
                <div className="w-full flex justify-center px-4 relative h-[400px]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-200 mb-6 text-sm md:text-base">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-600 text-xs font-semibold text-white rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-white/20 hover:bg-white/30 text-gray-200 px-4 py-2 rounded-xl text-sm md:text-lg font-semibold text-center transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-green-700/80 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm md:text-lg font-semibold text-center transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
