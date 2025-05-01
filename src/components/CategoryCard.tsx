import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { CategoryInfo } from "../types";

interface CategoryCardProps {
  category: CategoryInfo;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Dynamically get the icon component from lucide-react with proper typing
  const IconComponent = Icons[
    category.icon as keyof typeof Icons
  ] as LucideIcon;

  return (
    <Link
      to={`/category/${category.id}`}
      className="group relative h-80 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 transition-transform duration-500 group-hover:scale-105`}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white transition-all duration-300">
        <div className="mb-4 rounded-full bg-white/20 p-4 text-white transition-all duration-300 group-hover:bg-white/30">
          {IconComponent && <IconComponent className="h-12 w-12" />}
        </div>
        <h3 className="mb-2 text-center text-2xl font-bold">
          {category.title}
        </h3>
        <p className="text-center text-white/80">{category.description}</p>
        <div className="mt-6 transform rounded-full bg-white px-6 py-2 font-medium text-gray-900 transition-all duration-300 group-hover:scale-105">
          View Projects
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
