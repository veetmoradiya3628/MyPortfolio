import React from "react";

const projects = [
    {
    title: "CoSketch",
    description: "CoSketch is a collaborative online whiteboard tool that enables users to draw, write, and brainstorm ideas in real-time. It’s built with React, Redux, Node.js, Express, and Socket.io. Users can create boards, share them with others, and collaborate on projects. Socket.io ensures real-time updates across all connected clients.",
    github: "https://github.com/veetmoradiya3628/CoSketch",
    demo: "https://youtu.be/TMMNbH83FuU",
    thumbnail: "./default_project_thumbnail.jpg",
    startDate: "April 2024",
    endDate: "May 2024"
    },
  {
    title: "ChatSync",
    description: "Chat Sync is a web app for real-time communication, supporting one-to-one and group chat, group management, contact, and profile management. It’s built with Spring Boot, Spring Data JPA, Spring WebSocket, Angular, Angular Material UI, and MySQL. WebSocket and STOMP protocol ensure real-time messaging.",
    github: "https://github.com/veetmoradiya3628/ChatSync",
    demo: "",
    thumbnail: "./default_project_thumbnail.jpg",
    startDate: "November 2023",
    endDate: "February 2024"
  },
  {
    title: "ExamPortal",
    description: "Exam Portal is a user-friendly web app for professors to easily create and evaluate custom quizzes with various customization options. \nIts intuitive interface requires no technical expertise, offering features like multimedia integration. \nProfessors can generate engaging quizzes tailored to learning objectives, and the platform provides comprehensive performance reports, enhancing the assessment experience for both educators and students.",
    github: "https://github.com/veetmoradiya3628/ExamPortal",
    demo: "https://youtu.be/KWXJa_5qNRY",
    thumbnail: "./default_project_thumbnail.jpg",
    startDate: "November 2023",
    endDate: "February 2024"
  },
  {
    title: "WorkSpace",
    description: "WorkSpace is a Single Page Web Application that provides a facility for employees who are doing remote jobs and need Office Space and an Environment based on subscribing to various plans",
    github: "https://github.com/veetmoradiya3628/WorkSpace_Backend",
    demo: "",
    thumbnail: "./default_project_thumbnail.jpg",
    startDate: "Jan 2022",
    endDate: "April 2022"
  }
];

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center px-4 py-10 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Projects</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            {project.thumbnail && (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2 whitespace-pre-line">{project.description}</p>
            <p className="text-gray-500 text-sm mt-2">{project.startDate} - {project.endDate}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
