import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft, Calendar, Tag } from "lucide-react";
import { projects } from "../data/projects";
import { Project } from "../types";
import Header from "../components/Header";

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (projectId) {
      const foundProject = projects.find((p) => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
      }
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Project not found</h2>
          <Link to="/" className="text-red-500 hover:text-red-600">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  // Get color gradient based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "graphic":
        return "from-pink-500 to-red-500";
      case "uiux":
        return "from-blue-500 to-indigo-500";
      case "frontend":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  const gradientClass = `bg-gradient-to-r ${getCategoryColor(
    project.category
  )}`;

  return (
    <>
      <Header title="Project Details" showBackButton />

      <main className="flex-1 bg-gray-50">
        <div className="relative h-80 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="mx-auto max-w-6xl">
              <Link
                to={`/category/${project.category}`}
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-medium text-white transition hover:bg-white/30"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
              <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="order-2 lg:order-1 lg:col-span-2">
              <div className="mb-8 rounded-xl bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  Project Overview
                </h2>
                <p className="text-gray-700">{project.description}</p>

                <div className="mt-8">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    Technology Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`rounded-full ${gradientClass} px-4 py-2 text-sm font-medium text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">
                  More Details
                </h2>
                <p className="mb-8 text-gray-700">
                  This project showcases my skills in {project.tech.join(", ")}.
                  The work involved extensive planning, design iterations, and
                  implementation to achieve the final result.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`${project.title} detail`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">
                    Project Details
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Tag className="mt-0.5 h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-medium text-gray-800">
                          {project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}{" "}
                          Design
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Completed</p>
                        <p className="font-medium text-gray-800">2023</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-2 rounded-lg ${gradientClass} px-4 py-3 font-medium text-white transition hover:opacity-90`}
                    >
                      View Live Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">
                    Similar Projects
                  </h3>

                  <div className="space-y-4">
                    {projects
                      .filter(
                        (p) =>
                          p.category === project.category && p.id !== project.id
                      )
                      .slice(0, 3)
                      .map((similarProject) => (
                        <Link
                          key={similarProject.id}
                          to={`/project/${similarProject.id}`}
                          className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-gray-50"
                        >
                          <div className="h-12 w-12 overflow-hidden rounded-md">
                            <img
                              src={similarProject.image}
                              alt={similarProject.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              {similarProject.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {similarProject.tech[0]}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
