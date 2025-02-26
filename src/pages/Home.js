import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const descriptions = [
  "Full-Stack Developer",
  "Microservices Enthusiast",
  "Problem Solver",
  "Learner",
  "Cloud Computing Enthusiast",
  "Tech Enthusiast",
]

const Home = () => {
  const [currentText, setCurrentText] = useState(descriptions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const nextIndex = (descriptions.indexOf(prevText) + 1) % descriptions.length;
        return descriptions[nextIndex];
      })
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpg')",
        minHeight: "calc(100vh - 64px)", 
        marginTop: "64px",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="bg-black bg-opacity-60 p-10 rounded-lg text-center text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm <span className="text-blue-400">Veet M</span> 👋
        </motion.h1>

        <motion.p
          className="text-gray-300 mt-2 text-lg"
          key={currentText}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          {currentText}
        </motion.p>

        <motion.div
          className="mt-6 space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#"
            className="px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
          >
            📜 Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
          >
            📩 Contact
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
