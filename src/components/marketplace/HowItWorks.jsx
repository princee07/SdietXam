import React from "react";
import { FaShoppingCart, FaUpload } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white" id="sell">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-3">
            Our Process
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our marketplace makes it easy to buy and sell academic materials
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Buyers */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <FaShoppingCart className="mr-2" /> For Buyers
            </h3>
            <ol className="space-y-6">
              <li className="flex">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Browse or search for resources</h4>
                  <p className="text-gray-600">Find the perfect study materials filtered by course, subject or type</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Purchase securely</h4>
                  <p className="text-gray-600">Pay using our secure payment system with multiple options</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Download instantly</h4>
                  <p className="text-gray-600">Get immediate access to your purchased materials</p>
                </div>
              </li>
            </ol>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">
                Start Browsing
              </button>
            </div>
          </div>
          
          {/* For Sellers */}
          <div className="bg-green-50 rounded-xl p-8 border border-green-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <FaUpload className="mr-2" /> For Sellers
            </h3>
            <ol className="space-y-6">
              <li className="flex">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Create your seller account</h4>
                  <p className="text-gray-600">Quick verification process to ensure quality content</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Upload your materials</h4>
                  <p className="text-gray-600">Add details, set your price, and upload your files</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Get paid for your expertise</h4>
                  <p className="text-gray-600">Earn money when others purchase your materials</p>
                </div>
              </li>
            </ol>
            <div className="mt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;