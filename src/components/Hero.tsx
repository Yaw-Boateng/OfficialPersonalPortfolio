import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const nameAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const name = "Augustine".split("");

  return (
    <div className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 bg-[#121212] dark:bg-[#121212]">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl text-gray-300 dark:text-gray-300"
        >
          Web Dev & Designer
        </motion.p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5 text-white dark:text-gray-100">
          Hi I am{" "}
          <span className="text-[#cc2217] inline-block">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={letterAnimation}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>{" "}
          <br />
          <motion.span
            initial="hidden"
            animate="visible"
            variants={nameAnimation}
          >
            Boateng Asante
          </motion.span>{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            from Ghana
          </motion.div>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-6"
        >
          <a
            href="../images/Augustine Asante Boateng CV.pdf" // Replace with actual path to your CV file
            download
            className="inline-block rounded-full bg-[#cc2217] px-6 py-3 text-white font-medium hover:bg-[#e3362b] transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
