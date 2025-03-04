import React from "react";

const blogs = [
  {
    id: 1,
    title: "Getting started RabbitMQ with Node JS",
    description:
      "This article will simulate a basic asynchronous messaging flow using RabbitMQ and a Node.js client.",
    link: "https://medium.com/@vmcoder311/getting-started-rabbitmq-with-node-js-5b1b3526d443",
  },
  {
    id: 2,
    title: "Exam Portal WebApplication",
    description:
      "Microservice-Based Web Application for Educational Institutions.",
    link: "https://medium.com/@vmcoder311/exam-portal-webapplication-878412084751",
  }
];

const Blogs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-6 bg-white shadow-lg rounded-lg border">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;