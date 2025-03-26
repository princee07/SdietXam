import React from "react";

const mentees = [
  {
    name: "Aman Kumar",
    field: "Computer Science",
    description: "Aspiring full-stack developer, passionate about web technologies.",
  },
  {
    name: "Riya Sharma",
    field: "Mechanical Engineering",
    description: "Innovator in sustainable design and automation.",
  },
  {
    name: "Vikram Singh",
    field: "Electronics & Communication",
    description: "Exploring IoT and embedded systems with hands-on projects.",
  },
  {
    name: "Priya Patel",
    field: "Artificial Intelligence",
    description: "AI enthusiast focused on NLP and deep learning.",
  },
];

const Mentee = () => {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Meet the Mentees</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {mentees.map((mentee, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
            <h3 className="text-xl font-semibold text-gray-900">{mentee.name}</h3>
            <p className="text-sm text-gray-600">{mentee.field}</p>
            <p className="text-gray-700 mt-2">{mentee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentee;
