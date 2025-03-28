import React from "react";
import HostHeroSection from "../components/HostHeroSection"; // Import the HostHeroSection component
import Footer from "../components/Footer";
const hostOptions = [
  
  { title: "Innovation Challenges", link: "Create Challenges", icon: "👥", bgColor: "bg-blue-100", textColor: "text-blue-600" },
  { title: "Quizzes", link: "Create Quizzes", icon: "❓", bgColor: "bg-green-100", textColor: "text-green-600" },
  { title: "Hackathons & Coding Challenges", link: "Create Hackathons", icon: "💻", bgColor: "bg-orange-100", textColor: "text-orange-600" },
  { title: "Webinars & Workshops", link: "Create Workshops", icon: "🎤", bgColor: "bg-pink-100", textColor: "text-pink-600" },
  { title: "Cultural Events", link: "Create Events", icon: "🎭", bgColor: "bg-blue-100", textColor: "text-blue-600" },
  
  { title: "Scholarships", link: "Create Scholarships", icon: "🎓", bgColor: "bg-red-100", textColor: "text-red-600" }
];

const Host = () => {
    
  return (
    
    <>
    <HostHeroSection />
<div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
     

      {/* Hosting Options */}
      <div className="mt-8 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">What you want to host 🤘</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostOptions.map((option, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-md ${option.bgColor} text-center`}>
              <span className="text-3xl">{option.icon}</span>
              <h3 className={`text-lg font-semibold mt-2 ${option.textColor}`}>{option.title}</h3>
              <a href="#" className="text-blue-600 text-sm mt-2 block hover:underline">
                {option.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Host;
