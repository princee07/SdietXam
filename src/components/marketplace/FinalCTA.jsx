import React from "react";
import { FaShoppingCart, FaUpload } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-600 to-indigo-700 py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-[80px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-[80px] opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to get started?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of students buying and selling on the SDIET student marketplace
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <button className="group bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center">
            <FaShoppingCart className="mr-2 group-hover:animate-bounce" /> Start Browsing
          </button>
          <button className="group bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition flex items-center">
            <FaUpload className="mr-2 group-hover:animate-bounce" /> Become a Seller
          </button>
        </div>
        
        <p className="mt-8 text-blue-100">Need help? <a href="#" className="text-white underline">Contact our support team</a></p>
      </div>
    </section>
  );
};

export default FinalCTA;