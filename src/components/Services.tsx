import React from "react";
import { Code, Palette, PenTool } from "lucide-react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: Code,
    title: "Front end development",
    description:
      "Junior frontend developer experienced in HTML, CSS, and JavaScript. Creating responsive, user-friendly websites with modern frameworks and best practices.",
    link: "https://www.coursera.org/articles/front-end-developer",
  },
  {
    icon: Palette,
    title: "UI/UX Designing",
    description:
      "Creating intuitive and user-friendly digital experiences with expertise in wireframes, prototypes, and user research using Figma.",
    link: "https://usfbootcamps.com/blog/ui-ux-design/what-does-a-designer-do/",
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    description:
      "Expert in visual design for print and digital media, with strong understanding of color theory, typography, and composition using Adobe Photoshop.",
    link: "https://www.careerexplorer.com/careers/graphic-designer/",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="services" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl hover:bg-red-900 transition-colors duration-300"
            >
              <service.icon className="w-12 h-12 mb-6 text-red-500" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
