import React from "react";
import HeroImage from "../images/1.png"; // Replace with a course-related image
import Footer from "../components/Footer"; // Adjust the import path as necessary
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-4 relative bg-gray-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 px-4">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-light mb-4 leading-tight">
              Not Sure What to Study?
              <br />
              Want to Build a Future?
              <br />
              <strong className="font-bold text-7xl text-blue-400">Explore Our Courses!</strong>
              <span className="block w-1/2 h-1 bg-yellow-400 mt-2 mx-auto lg:mx-0"></span>
            </h1>
            <p className="text-2xl text-gray-700">
              Discover career-building programs at <b>SDIET</b> — from engineering to business, we’ve got your path covered.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center w-full lg:w-2/3">
            <img
              src={HeroImage}
              alt="Courses Illustration"
              className="max-w-md w-full rounded-lg"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute left-10 top-4/4 w-10 h-24 bg-cover bg-no-repeat"
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

      {/* Courses Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Course Cards */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Bachelor of Technology (B.Tech)</h3>
            <p className="text-gray-600 mb-4">
              Dive into engineering with real-world applications and hands-on learning.
            </p>
            <Link to="/courses/btech-learn">
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
    Learn More
  </button>
</Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Bachelor of Business Administration (BBA)</h3>
            <p className="text-gray-600 mb-4">
              Build leadership and strategic business skills for modern industries.
            </p>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-200">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-gray-600 mb-4">
              Learn programming, databases, and build a strong foundation in IT.
            </p>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;
