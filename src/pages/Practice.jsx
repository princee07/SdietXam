import React from "react";
import { useNavigate } from "react-router-dom";
import Experts from "../images/Experts.png";
import Footer from "../components/Footer";
import { 
  FaBrain, FaRocket, FaLaptopCode, FaChartLine, FaCode, 
  FaGraduationCap, FaTrophy, FaRegLightbulb, FaRegClock,
  FaCheck, FaChalkboardTeacher, FaStar, FaUsers
} from "react-icons/fa";

const Practice = () => {
  const navigate = useNavigate();

  const programs = [
    { 
      id: 1, 
      title: "B.Tech", 
      description: "Practice quizzes for B.Tech students.", 
      link: "/practice/btech", 
      bgColor: "bg-blue-100", 
      textColor: "text-blue-600",
      icon: <FaCode className="text-4xl" />,
      gradient: "from-blue-500 to-blue-700",
      topics: ["Data Structures", "Algorithms", "Circuit Analysis", "Mechanics"]
    },
    { 
      id: 2, 
      title: "BBA", 
      description: "Practice quizzes for BBA students.", 
      link: "/practice/bba", 
      bgColor: "bg-green-100", 
      textColor: "text-green-600",
      icon: <FaChartLine className="text-4xl" />,
      gradient: "from-green-500 to-green-700",
      topics: ["Marketing", "Finance", "HR Management", "Operations"]
    },
    { 
      id: 3, 
      title: "BCA", 
      description: "Practice quizzes for BCA students.", 
      link: "/practice/bca", 
      bgColor: "bg-orange-100", 
      textColor: "text-orange-600",
      icon: <FaLaptopCode className="text-4xl" />,
      gradient: "from-orange-500 to-orange-700",
      topics: ["Programming", "Web Development", "Databases", "Networks"]
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section - Enhanced */}
      <section className="py-12 z-0 relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4 font-medium">
              <FaBrain className="inline-block mr-2" />
              Test Your Knowledge
            </div>
            <h1 className="text-5xl font-light mb-6 leading-tight">
              Unlock Your
              <br />
              <strong className="font-bold text-7xl text-blue-600 relative">
                Potential!
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q40,0 80,5 T160,5 T240,5" fill="none" stroke="#FBBF24" strokeWidth="8" />
                </svg>
              </strong>
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Solve easy to complex problems and get hands-on experience to achieve your{" "}
              <b className="text-blue-600">University Rank!</b>
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#programs" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center">
                <FaRocket className="mr-2" /> Start Practicing
              </a>
              <a href="#benefits" className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-medium transition shadow-sm border border-gray-200 flex items-center">
                <FaRegLightbulb className="mr-2" /> Learn Benefits
              </a>
            </div>
          </div>

          {/* Right Image with enhanced styling */}
          <div className="flex justify-center w-full lg:w-2/5 relative">
            <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/4"></div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-80"></div>
              <img
                src={Experts}
                alt="Practice Guidance"
                className="max-w-md w-full rounded-xl  relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Practice Questions</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-700">Improvement Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700">Access Anywhere</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-amber-50 border border-amber-100">
              <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-gray-700">Subjects Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards Section - Enhanced */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
              <FaGraduationCap className="text-2xl" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Program</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your course to access specialized practice quizzes tailored to your curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100 group cursor-pointer"
                onClick={() => navigate(program.link)}
              >
                <div className={`h-36 bg-gradient-to-r ${program.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity"></div>
                  <div className="text-white text-6xl opacity-30 group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <FaTrophy className="mr-1" style={{color: program.textColor.replace('text-', '')}} /> Top Ranked
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 ${program.textColor} group-hover:scale-105 transition-transform`}>
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Popular Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {program.topics.map((topic, idx) => (
                        <span 
                          key={idx} 
                          className={`px-3 py-1 ${program.bgColor} ${program.textColor} rounded-full text-xs`}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full px-4 py-3 bg-gradient-to-r ${program.gradient} text-white rounded-lg group-hover:shadow-lg transition flex items-center justify-center`}>
                    <FaRocket className="mr-2" /> Explore Quizzes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Regular Practice</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistent practice leads to significant improvements in your academic performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                <FaRegClock />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Time Management</h3>
              <p className="text-gray-600">
                Learn to manage your time effectively during exams by practicing under timed conditions
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                <FaCheck />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Identify Weaknesses</h3>
              <p className="text-gray-600">
                Discover your weak areas and focus your study efforts where they matter most
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-4">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Better Understanding</h3>
              <p className="text-gray-600">
                Reinforce concepts and improve comprehension through practical application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative">
            <div className="absolute -top-6 -left-6">
              <div className="text-6xl text-blue-400">"</div>
            </div>
            <div className="text-center mb-6">
              <p className="text-xl text-gray-700 italic">
                Regular practice on this platform helped me secure top rank in my department. The variety of questions and immediate feedback improved my understanding significantly.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <div className="font-bold text-gray-800">Priya Sharma</div>
                <div className="text-blue-600">B.Tech CSE, Rank 1</div>
                <div className="flex text-yellow-400 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Knowledge?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Start practicing today and see improvement in your academic performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition flex items-center">
              <FaRocket className="mr-2" /> Get Started Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition flex items-center">
              <FaUsers className="mr-2" /> Join Study Groups
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Practice;