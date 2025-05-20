import React from "react";
import HeroImage from "../images/1.png"; // Replace with a course-related image
import Footer from "../components/Footer"; 
import { Link } from "react-router-dom";
import { 
  FaGraduationCap, FaLaptopCode, FaChartLine, FaBookOpen, 
  FaMicroscope, FaRocket, FaUserTie, FaDatabase, FaCode,
  FaUniversity, FaCertificate, FaBriefcase, FaUsers, FaLightbulb
} from "react-icons/fa";

const Courses = () => {
  return (
    <>
      {/* Hero Section with Enhanced Design */}
      <section className="py-10 relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4 font-medium">
              <FaGraduationCap className="inline-block mr-2" />
              Educational Excellence
            </div>
            <h1 className="text-5xl font-light mb-6 leading-tight">
              Not Sure What to Study?
              <br />
              Want to Build a Future?
              <br />
              <strong className="font-bold text-7xl text-blue-600 relative">
                Explore Our Courses!
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q40,0 80,5 T160,5 T240,5" fill="none" stroke="#FBBF24" strokeWidth="8" />
                </svg>
              </strong>
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Discover career-building programs at <b>SDIET</b> — from engineering to business, we've got your path covered.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#programs" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center">
                <FaBookOpen className="mr-2" /> Browse Programs
              </a>
              <a href="#" className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-medium transition shadow-sm border border-gray-200 flex items-center">
                <FaUniversity className="mr-2" /> Campus Tour
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
                src={HeroImage}
                alt="Courses Illustration"
                className="max-w-md w-full rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
        <div
          className="absolute left-10 top-1/2 w-10 h-24 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://d8it4huxumps7.cloudfront.net/uploads/images/63d4b178b31d5_home_hero_before.svg)",
          }}
        ></div>
        <div
          className="absolute right-10 bottom-1/4 w-10 h-24 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://d8it4huxumps7.cloudfront.net/uploads/images/63de43bdce283_multi_color_dot.png?d=76x188)",
          }}
        ></div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Degree Programs</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-gray-700">Placement Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">120+</div>
              <div className="text-gray-700">Expert Faculty</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-amber-50 border border-amber-100">
              <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-700">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section id="programs" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
              <FaGraduationCap className="text-2xl" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive education designed to prepare you for success in today's competitive world
            </p>
          </div>
          
          {/* Course Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium">All Programs</button>
            <button className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition">Engineering</button>
            <button className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition">Business</button>
            <button className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition">Computer Science</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* B.Tech Card - Enhanced */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100 group">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity"></div>
                <FaRocket className="text-white text-6xl opacity-30 group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-blue-700 text-sm font-medium">
                  <FaCertificate className="inline mr-1" /> 4-Year Program
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Bachelor of Technology (B.Tech)</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <FaUniversity className="mr-2" /> Engineering Department
                </div>
                <p className="text-gray-600 mb-6">
                  Dive into engineering with real-world applications and hands-on learning. Our B.Tech program offers specializations in multiple domains.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-2">Popular Specializations:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Computer Science</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Electronics</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Mechanical</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Civil</span>
                  </div>
                </div>
                <Link to="/courses/btech-learn">
                  <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                    <FaBookOpen className="mr-2" /> Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* BBA Card - Enhanced */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100 group">
              <div className="h-40 bg-gradient-to-r from-amber-500 to-amber-700 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity"></div>
                <FaChartLine className="text-white text-6xl opacity-30 group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-amber-700 text-sm font-medium">
                  <FaCertificate className="inline mr-1" /> 3-Year Program
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">Bachelor of Business Administration (BBA)</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <FaUniversity className="mr-2" /> Business Department
                </div>
                <p className="text-gray-600 mb-6">
                  Build leadership and strategic business skills for modern industries. Our program focuses on practical knowledge and industry exposure.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-2">Popular Specializations:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Marketing</span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Finance</span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">HR Management</span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">International Business</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition flex items-center justify-center">
                  <FaBookOpen className="mr-2" /> Learn More
                </button>
              </div>
            </div>

            {/* BCA Card - Enhanced */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100 group">
              <div className="h-40 bg-gradient-to-r from-purple-500 to-purple-700 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity"></div>
                <FaLaptopCode className="text-white text-6xl opacity-30 group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-purple-700 text-sm font-medium">
                  <FaCertificate className="inline mr-1" /> 3-Year Program
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">Bachelor of Computer Applications (BCA)</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <FaUniversity className="mr-2" /> Computer Science Department
                </div>
                <p className="text-gray-600 mb-6">
                  Learn programming, databases, and build a strong foundation in IT. Modern curriculum aligned with industry requirements.
                </p>
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-2">Key Focus Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Web Development</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Database Design</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Mobile Apps</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Cloud Computing</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center">
                  <FaBookOpen className="mr-2" /> Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* View All Programs Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
              View All Programs
            </button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose SDIET?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a unique educational experience focused on student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from industry professionals and academic experts with years of experience
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mx-auto mb-4">
                <FaBriefcase />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Industry Connections</h3>
              <p className="text-gray-600">
                Strong ties with leading companies for internships and placements
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mx-auto mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation Focus</h3>
              <p className="text-gray-600">
                State-of-the-art facilities and emphasis on creative problem solving
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-2xl mx-auto mb-4">
                <FaMicroscope />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Research Opportunities</h3>
              <p className="text-gray-600">
                Engage in cutting-edge research projects with faculty mentorship
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
                Choosing SDIET for my B.Tech was one of the best decisions I've made. The faculty is exceptional, the curriculum is industry-aligned, and the campus opportunities helped me secure a great job even before graduation.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <div className="font-bold text-gray-800">Rahul Sharma</div>
                <div className="text-blue-600">B.Tech CSE, Batch of 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Take the first step toward your dream career. Applications are now open for the upcoming session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition">
              Apply Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;
