import React from "react";
import { FaBookOpen, FaTrophy, FaChalkboardTeacher, FaQuestionCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-400 text-center mb-3">About </h1>
        <h1 className="text-4xl font-bold text-center mb-6">
  <span className="text-blue-600">SDIET</span>
  <span className="text-orange-400">Xam</span>
</h1>

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          SDIETXam is a platform designed for college students to prepare for exams, play quizzes, track rankings on the leaderboard, and solve assignments.** It’s an all-in-one solution for interactive and smart learning.
        </p>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaBookOpen className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Exam Preparation</h3>
            <p className="text-gray-600 text-sm">Access a variety of study materials and past papers to get ready for exams.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaQuestionCircle className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Interactive Quizzes</h3>
            <p className="text-gray-600 text-sm">Test your knowledge with subject-wise quizzes and improve your scores.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaTrophy className="text-yellow-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Leaderboard</h3>
            <p className="text-gray-600 text-sm">Compete with peers and track your performance on live leaderboards.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaChalkboardTeacher className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Assignments</h3>
            <p className="text-gray-600 text-sm">Solve assignments and get feedback to improve your learning skills.</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose SDIETXAM?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our platform is built for **students, by students.** We focus on making learning interactive, competitive, and stress-free.
          </p>
        </div>

        {/* Testimonials (Optional) */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <p className="text-gray-700 italic">"SDIETXAM has helped me improve my scores with fun quizzes and assignments!"</p>
            <h4 className="mt-2 font-bold text-gray-800">- Rahul Sharma</h4>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <p className="text-gray-700 italic">"The leaderboard motivates me to stay on top. Best platform for students!"</p>
            <h4 className="mt-2 font-bold text-gray-800">- Priya Singh</h4>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started Now 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
