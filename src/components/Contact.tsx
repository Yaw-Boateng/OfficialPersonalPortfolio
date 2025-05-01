import React, { useEffect, useState } from "react";
import { Mail, Phone, Linkedin, Instagram, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log(formData);
  // };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/augustine-asante-boateng/",
    },
    { icon: Instagram, href: "https://www.instagram.com/p/CmPJus-sq05/" },
    { icon: Github, href: "https://github.com/Yaw-Boateng/" },
  ];

  const [state, handleSubmit] = useForm("movdjdgw");

  useEffect(() => {
    if (state.succeeded) {
      // Clear form fields
      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);

      // Hide success message after 5 seconds
      const timer = setTimeout(() => setShowSuccess(false), 5000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transform transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:asantea176@gmail.com"
                className="flex items-center text-gray-300 hover:text-red-500"
              >
                <Mail className="w-5 h-5 mr-3" />
                asantea176@gmail.com
              </a>
              <a
                href="tel:+233206861637"
                className="flex items-center text-gray-300 hover:text-red-500"
              >
                <Phone className="w-5 h-5 mr-3" />
                +233 206 861 637
              </a>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-full text-gray-300 hover:bg-red-500 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Send Message
            </button>
          </form>
          {showSuccess && (
            <p className="text-green-500 mt-4">
              Thanks for your message! I'll get back to you soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
