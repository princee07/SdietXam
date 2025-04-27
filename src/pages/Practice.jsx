import React from "react";
import { useNavigate } from "react-router-dom";
import Experts from "../images/Experts.png"; // Replace with your actual image path

const Practice = () => {
  const navigate = useNavigate();

  const programs = [
    { id: 1, title: "B.Tech", description: "Practice quizzes for B.Tech students.", link: "/practice/btech", bgColor: "bg-blue-100", textColor: "text-blue-600" },
    { id: 2, title: "BBA", description: "Practice quizzes for BBA students.", link: "/practice/bba", bgColor: "bg-green-100", textColor: "text-green-600" },
    { id: 3, title: "BCA", description: "Practice quizzes for BCA students.", link: "/practice/bca", bgColor: "bg-orange-100", textColor: "text-orange-600" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-4 relative bg-gray-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-light mb-4 relative leading-tight">
              Unlock Your
              <br />
              <strong className="font-bold text-7xl text-gray-400">Potential!</strong>
              <span className="block w-1/2 h-1 bg-yellow-400 mt-2 mx-auto lg:mx-0"></span>
            </h1>
            <p className="text-2xl text-gray-700">
              Solve easy to complex problems and get hands-on experience to achieve your{" "}
              <b>University Rank!</b>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center w-full lg:w-2/3">
            <img
              src={Experts}
              alt="Practice Guidance"
              className="max-w-md w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Program Cards Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Choose Your Program</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ${program.bgColor}`}
                onClick={() => navigate(program.link)}
              >
                <h3 className={`text-2xl font-bold mb-2 ${program.textColor}`}>{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
                <span className="text-blue-500 font-medium hover:underline mt-4 block">
                  Explore Quizzes →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice;