import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            to={`/project/${project.id}`}
            className="mr-2 rounded-full bg-white/90 p-2 text-gray-800 transition-transform duration-300 hover:scale-105 hover:bg-white"
          >
            <span className="sr-only">View Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/90 p-2 text-gray-800 transition-transform duration-300 hover:scale-105 hover:bg-white"
          >
            <span className="sr-only">External Link</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
