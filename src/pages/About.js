import React from "react";
import { LinkedIn, GitHub, Code } from "@mui/icons-material";

const experiences = [
  {
    title: "Software Engineer",
    company: "Motorola Solutions",
    date: "May 2023 - Present",
    description: `Full Stack Developer | CPE DLT Team
    Experienced in designing and developing scalable REST APIs using Node.js.
    Skilled in crafting intuitive and user-friendly UI/UX interfaces with Angular.
    Proficient in containerization and orchestration using Docker and Kubernetes.
    Hands-on experience with leading cloud platforms, including Azure, GCP.
    Passionate about building robust, cloud-native applications and delivering seamless user experiences.`
  },
  {
    title: "Internship Trainee",
    company: "Motorola Solutions",
    date: "May 2022 - May 2023",
    description: `SDE Intern | UGWP team
    Experienced in designing and developing scalable REST APIs using Flask (Python).
    Skilled in crafting intuitive and user-friendly UI/UX interfaces with Angular.
    Hands on experience with full stack development practices.`
  },
  {
    title: "Web Development Intern",
    company: "WeEnggs Technology",
    date: "Jun 2021 - Jul 2021",
    description: `Worked with PHP and MySQL, MVC architecture, HTML, CSS, Bootstrap and JavaScript.`
  }
];

const education = [
  {
    institution: "CHARUSAT University",
    degree: "Bachelor of Technology - BTech, Information Technology",
    date: "2019 - 2023"
  }
];

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center px-4 py-10">
      
      {/* Profile Section */}
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center mt-10">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-gray-300"
            src="./profile_veet.jpeg"
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
      {/* Experience Section */}
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 mt-10 w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Experience</h2>
        <div className="mt-4 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.date}</p>
                <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 mt-10 w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Education</h2>
        <div className="mt-4 space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-500 text-sm">{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
