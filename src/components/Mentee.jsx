import React from "react";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";
import Footer from "./Footer";

const mentees = [
  {
    name: "Aman Kumar",
    field: "Computer Science",
    description: "Aspiring full-stack developer, passionate about web technologies.",
    image: Image1,
    available: true,
    rating: 4.8,
    color: "bg-green-200",
  },
  {
    name: "Riya Sharma",
    field: "Mechanical Engineering",
    description: "Innovator in sustainable design and automation.",
    image: Image2,
    available: false,
    rating: 4.6,
    color: "bg-red-200",
  },
  {
    name: "Vikram Singh",
    field: "Electronics & Communication",
    description: "Exploring IoT and embedded systems with hands-on projects.",
    image: Image3,
    available: true,
    rating: 4.9,
    color: "bg-blue-200",
  },
  {
    name: "Priya Patel",
    field: "Artificial Intelligence",
    description: "AI enthusiast focused on NLP and deep learning.",
    image: Image4,
    available: true,
    rating: 5.0,
    color: "bg-yellow-200",
  },
  {
    name: "Vikram Singh",
    field: "Electronics & Communication",
    description: "Exploring IoT and embedded systems with hands-on projects.",
    image: Image3,
    available: true,
    rating: 4.9,
    color: "bg-blue-200",
  },
  {
    name: "Priya Patel",
    field: "Artificial Intelligence",
    description: "AI enthusiast focused on NLP and deep learning.",
    image: Image4,
    available: true,
    rating: 5.0,
    color: "bg-yellow-200",
  },
];

const Mentee = () => {
  return (
    <>
<div className="container mx-auto mt-12 px-4">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Meet the Mentees</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {mentees.map((mentee, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-80 hover:shadow-2xl transition duration-300"
          >
            {/* Top section with background color */}
            <div className={`${mentee.color} p-4 relative`}>
              {mentee.available && (
                <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  Available
                </span>
              )}
              <img
                src={mentee.image}
                alt={mentee.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-white"
              />
            </div>

            {/* Card details */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">{mentee.name}</h3>
              <p className="text-sm text-gray-600 font-medium">{mentee.field}</p>
              <p className="text-gray-700 mt-2 text-sm">{mentee.description}</p>

              {/* Rating */}
              <div className="flex justify-center items-center mt-2">
                {Array.from({ length: Math.floor(mentee.rating) }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">⭐</span>
                ))}
                {mentee.rating % 1 !== 0 && <span className="text-yellow-500 text-lg">⭐</span>}
                <span className="ml-1 text-gray-700 font-medium">({mentee.rating})</span>
              </div>

              {/* View Profile Button */}
              <button className="mt-4 bg-gray-200 px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition duration-200">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-20">
    <Footer />
          
            </div>
    
    </>
   
   
  );
};

export default Mentee;
