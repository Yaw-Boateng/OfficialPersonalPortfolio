import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap py-6 px-8 md:px-16 lg:px-24">
      <div className="flex items-center flex-shrink-0">
        {/* Replace with your actual logo or use a placeholder */}
        <div className="w-28 h-10 flex items-center justify-center bg-gray-700 rounded">
          <span className="font-bold text-xl">ABA</span>
        </div>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 text-white hover:text-[#cc2217]"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="lg:flex lg:justify-end lg:ml-auto">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <li
              key={item}
              className="block mt-4 lg:inline-block lg:mt-0 lg:mx-5"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#cc2217] text-lg relative group"
              >
                {item}
                <span className="absolute left-0 bottom-[-6px] w-0 h-[3px] bg-[#cc2217] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
