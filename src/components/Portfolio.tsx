import React from "react";
// import { ExternalLink, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Project, CategoryInfo } from "../types";
import KeleweleImage from "../images/kelewele elean.webp";
import TShirt from "../images/tShirt .webp";
import ShoeFlyer from "../images/shoeBuss.webp";
import MentalHealth from "../images/landing-page.webp";
import ChowVilla from "../images/chowVilla.webp";
import Events from "../images/Events.webp";
import { ExternalLink } from "lucide-react";

export const categories: CategoryInfo[] = [
  {
    id: "graphic",
    title: "Graphic Design Portfolio",
    description:
      "A collection of branding, print, and digital design work showcasing creative solutions for various clients.",
    color: "from-pink-500 to-red-500",
    icon: "PenTool",
  },
  {
    id: "uiux",
    title: "UI/UX Design Projects",
    description:
      "User-centered digital experiences with intuitive interfaces and smooth interactions.",
    color: "from-blue-500 to-indigo-500",
    icon: "Layers",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Modern web applications built with React, focusing on performance and user experience.",
    color: "from-green-500 to-emerald-500",
    icon: "Code",
  },
];

export const projects: Project[] = [
  // Graphic Design Projects
  {
    id: "Business Flyer",
    title: "Corporate Brand Identity",
    description:
      "Complete flyer for a local trader it includes a logo, color palette, typography, and brand guidelines.",
    image: KeleweleImage,
    link: "https://www.instagram.com/p/DJGm0MeM85U/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "graphic",
    tech: ["Photoshop", "Illustrator"],
  },
  {
    id: "Shirt Design",
    title: "T-Shirt Branding ",
    description:
      "Shirt design for a University Denomination it includes typography, color and brand guidelines.",
    image: TShirt,
    link: "https://www.instagram.com/p/CqbH8myLKR6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "graphic",
    tech: ["Illustraor", "Photoshop"],
  },
  {
    id: "Business flyer",
    title: "Corporate Brand Identity",
    description:
      "Complete flyer for a local shoe seller it includes a logo, color palette, typography, and brand guidelines.",
    image: ShoeFlyer,
    link: "https://www.instagram.com/p/C1q6Dh6sB88/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "graphic",
    tech: ["Illustrator", "3D Mockup", "Photoshop"],
  },
  {
    id: "Mental Health",
    title: "Mental Health UI",
    description:
      "A web ui for a mental health platform, focusing on user experience and accessibility.",
    image: MentalHealth,
    link: "https://www.figma.com/proto/RCQ9YGesbb3hrQvHyBRoyp/calme-mental-health-ui?node-id=0-120&t=gX27ddcGh57CIKG7-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    category: "uiux",
    tech: ["Figma", "Illustrator"],
  },

  // UI/UX Design Projects
  {
    id: "Chow Villa",
    title: "Chow Villa UI",
    description:
      "User-centered design for a food delivery mobile app with activity onboarding screen and nutritious features.",

    image: ChowVilla,
    link: "https://www.figma.com/proto/0N4DccarBUzMaOP6stOK4c/Chow-Villa-Project?t=CRpqenwz1hSeosoK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=26-169&starting-point-node-id=2%3A2",
    category: "uiux",
    tech: ["Figma", "Prototyping", "User Research"],
  },
  {
    id: "Health App UI",
    title: "Health App Ui",
    description:
      "Complete overhaul of a health web app platform, focusing on conversion optimization and user experience improvements.",
    image: Events,
    link: "https://www.figma.com/proto/Qecvr0R8xyTMYqUQHJITI5/health-UI?node-id=1-2853&t=74kTN3533ZD8FMTr-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    category: "uiux",
    tech: ["Figma", "User Testing", "Prototyping"],
  },
  {
    id: "library-app",
    title: "Library App",
    description:
      "Library Application that can help you to manage your books. It has features like adding books, searching books, and deleting books.",
    image: "https://imgs.search.brave.com/ria96gecFHNfQQRO8Gsjthtv9rMIxJn5TmkakH3tj3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bGVhbi1lbXB0eS1s/aWJyYXJ5LWhhbGxf/MjMtMjE0OTIxNTQx/NC5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw",
    link: "https://bookielib.netlify.app/",
    category: "frontend",
    tech: ["React", "Tailwind Css"]
  },

  // Frontend Development Projects
  {
    id: "Wordpress-1",
    title: "District Health Website",
    description:
      "Partnered with a group of developers to create a responsive and user-friendly website for a district health service.",
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg",
    link: "https://ddhsgroup.org/",
    category: "frontend",
    tech: ["Wordpress", "Avada"],
  },
  {
    id: "Advertisement-app-1",
    title: "Advertisement App",
    description:
      " A web application that allows users to create and manage advertisements for their products or services.",
    image: "https://imgs.search.brave.com/deugLpdB6geMS5b6KwMP6qfjn5xKc4ni-886dmXBAtM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hZHZl/cnRpc2luZy1jb25j/ZXB0LWF0dHJhY3Rp/dmUtY2F1Y2FzaWFu/LWdpcmwtZ2xhc3Nl/cy1jcmVhdGl2ZS1z/a2V0Y2gtY29uY3Jl/dGUtYmFja2dyb3Vu/ZC04MTkyNzc3Mi5q/cGc",
    link: "https://adifyc5.netlify.app/",
    category: "frontend",
    tech: ["React", "Tailwind Css"],
  },
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-400"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
