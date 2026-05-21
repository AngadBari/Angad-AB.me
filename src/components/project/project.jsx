import React from "react";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { FaGithub, FaReact } from "react-icons/fa6";
import { Space_Grotesk } from "next/font/google";
import { projects } from "./projectData";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

export const Project = () => {
  return (
    <div className="mt-5">
      <h2 className={`${spaceGrotesk.className} text-3xl font-bold mb-5`}>
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-neutral-700 rounded-lg overflow-hidden"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="object-cover w-full h-60"
            />

            {/* Title */}
            <div className="flex items-center justify-between px-4 py-3">
              <h3 className={`${spaceGrotesk.className} text-xl font-medium`}>
                {project.title}
              </h3>

              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <TbWorld className="h-5 w-5 cursor-pointer" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithub className="h-5 w-5 cursor-pointer" />
                </a>
              </div>
            </div>

            <p className="px-4 text-sm text-gray-300">{project.description}</p>

            <div className="mt-5 px-4 mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4 text-2xl mt-5">
                {project.techStack.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              <div
                className={`px-3 py-1 rounded-full text-sm border mt-5 ${
                  project.status === "Completed"
                    ? "bg-green-950 border-green-900 text-green-400"
                    : "bg-yellow-950 border-yellow-900 text-yellow-400"
                }`}
              >
                ● {project.status}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-1  border-gray-500  border-dashed mt-8 "></div>
    </div>
  );
};
