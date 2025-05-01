import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Portfolio Showcase. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="text-sm text-gray-500">
              using React & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
