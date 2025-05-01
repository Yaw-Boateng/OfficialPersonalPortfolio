import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import myImage from "../images/yaw uaw (1).jpeg";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const tabs = {
    skills: [
      {
        title: "UI/UX",
        description: "Designing Web/App Interfaces using figma",
      },
      {
        title: "Frontend Development",
        description: "Building the UI of websites using WordPress & React",
      },
      {
        title: "Graphic Designing",
        description: "Branding and flyer designs using Adobe Products",
      },
    ],
    experience: [
      {
        title: "2023 to date",
        description: "Jnr Developer & UI/UX Designer at Poqa Company LTD",
      },
      {
        title: "2024 to date",
        description: "Head Of IT at Calme Mental Health",
      },
      {
        title: "2020 to date",
        description: "Graphic designer & Video Editor at Design Hub",
      },
    ],
    education: [
      {
        title: "2015 - 2018",
        description: "WASSCE CERTIFICATE (Swedru Senior High School)",
      },
      {
        title: "2019 - 2023",
        description: "Degree in Bsc. Information Technology",
      },
      { title: "2019", description: "Office Suite Certificate from Alison" },
      { title: "2021", description: "UI/UX at Coursera" },
    ],
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 transform transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            <img
              src={myImage}
              alt="Augustine B. Asante"
              className="w-full h-[400px] object-cover object-top rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-8">
              Augustine is an individual with passion for acquiring practical
              knowledge in I.T. related fields. Augustine also has strong
              interest in Website Development and Computer Security. He persists
              to learn new things and adapt to situations and challenges.
            </p>

            <div className="flex space-x-6 mb-8">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 capitalize ${
                    activeTab === tab
                      ? "text-red-500 after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-red-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {tabs[activeTab as keyof typeof tabs].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-red-500 font-medium">{item.title}</span>
                  <span className="text-gray-300">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
