import React from "react";
import { LinkedIn, GitHub, Code } from "@mui/icons-material";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-gray-300"
            src="/profile_veet.jpeg"
            alt="Profile"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mt-4">Veet Moradiya</h1>
        <p className="text-gray-600 mt-2">
          Full Stack Developer | Microservices Enthusiast | Cloud Practitioner
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I have experience in building web applications using Node.js, Angular,
          and cloud-native technologies. I enjoy solving complex problems and
          architecting scalable solutions.
        </p>

        <div className="flex justify-center space-x-4 mt-6">
        <a
          href="https://www.linkedin.com/in/veet-moradiya-8835a3195/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-300 transition duration-300"
        >
          <LinkedIn fontSize="large" />
        </a>
          <a
            target="_blank"
            href="https://github.com/veetmoradiya3628"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300 transition duration-300"
            >
            <GitHub fontSize="large" />
          </a>
          <a
            target="_blank"
            href="https://codeforces.com/profile/vmcoder311"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300 transition duration-300"
            >
            <Code fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
