import React from "react";
import { FaMoneyBillWave, FaChalkboardTeacher, FaLightbulb } from "react-icons/fa";

const EarnMoneyCTA = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-4 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
            <FaMoneyBillWave className="text-2xl text-yellow-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Turn Your Academic Work Into Income</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Your notes and solutions can help other students succeed while earning you extra money. Start selling today!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20">
              <div className="text-yellow-300 text-3xl mb-2">₹10,000+</div>
              <div className="text-indigo-100">Top seller monthly earnings</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20">
              <div className="text-yellow-300 text-3xl mb-2">500+</div>
              <div className="text-indigo-100">Active student sellers</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20">
              <div className="text-yellow-300 text-3xl mb-2">5,000+</div>
              <div className="text-indigo-100">Materials sold monthly</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-left">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-500 rounded-full p-3 mr-4">
                  <FaChalkboardTeacher className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Share Your Knowledge</h3>
                  <p className="text-indigo-100">
                    Upload your notes, assignments, projects, and practice papers to help other students excel
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-left">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-500 rounded-full p-3 mr-4">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Rewarded</h3>
                  <p className="text-indigo-100">
                    Earn money every time someone purchases your materials. You set the price!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition inline-flex items-center">
            <FaMoneyBillWave className="mr-2" /> Start Selling Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default EarnMoneyCTA;