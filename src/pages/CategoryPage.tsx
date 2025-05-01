import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects, categories } from "../data/projects";
import { CategoryInfo, Project } from "../types";
import Footer from "../components/PortfolioFooter";
import Header from "../components/PortfolioHeader";
import ProjectCard from "../components/Projectcard";

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryProjects, setCategoryProjects] = useState<Project[]>([]);
  const [category, setCategory] = useState<CategoryInfo | null>(null);

  useEffect(() => {
    if (categoryId) {
      const filteredProjects = projects.filter(
        (project) => project.category === categoryId
      );
      setCategoryProjects(filteredProjects);

      const foundCategory = categories.find((cat) => cat.id === categoryId);
      if (foundCategory) {
        setCategory(foundCategory);
      }
    }
  }, [categoryId]);

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Category not found</h2>
          <Link to="/" className="text-red-500 hover:text-red-600">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  // Dynamically get the background gradient class based on category
  const gradientClass = `bg-gradient-to-br ${category.color}`;

  return (
    <>
      <Header title={category.title} showBackButton />
      <div className={`${gradientClass} py-16 text-white`}>
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-4 text-4xl font-bold">{category.title}</h1>
          <p className="mb-6 max-w-2xl text-white/90">{category.description}</p>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-medium text-white transition hover:bg-white/30"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Categories
            </Link>
            <div className="text-sm text-white/70">
              {categoryProjects.length} projects in this category
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {categoryProjects.length === 0 && (
            <div className="py-20 text-center">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                No projects found
              </h3>
              <p className="text-gray-600">
                There are currently no projects in this category.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
