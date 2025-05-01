import React from "react";
import { categories } from "../data/projects";
import Header from "../components/PortfolioHeader";
import Footer from "../components/PortfolioFooter";
import CategoryCard from "../components/CategoryCard";

const HomePage: React.FC = () => {
  return (
    <>
      <Header title="Portfolio Showcase" />
      <main className="flex-1 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              My Creative Portfolio
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Explore my work across different creative disciplines, from
              graphic design to frontend development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
