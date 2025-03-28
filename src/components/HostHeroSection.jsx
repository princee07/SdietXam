import React from "react";

const HostHeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Image Section */}
        <div className="relative">
          <img
            src="/images/host-left.png" 
            alt="Host Features"
            className="w-72 md:w-80"
          />
          <div className="absolute top-10 left-0 bg-white shadow-md px-4 py-2 rounded-lg flex items-center">
            <img src="/icons/email-icon.png" alt="Email" className="w-6 h-6 mr-2"/>
            <p className="font-semibold">Send <span className="text-green-500">Bulk Emails</span></p>
          </div>
          <div className="absolute top-28 left-16 bg-white shadow-md px-4 py-2 rounded-lg flex items-center">
            <img src="/icons/applications-icon.png" alt="Applications" className="w-6 h-6 mr-2"/>
            <p className="font-semibold">Boost <span className="text-gray-900">Applications</span></p>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Host an <span className="text-blue-600">Opportunity</span>
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Choose your opportunity category from below
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img
            src="/images/host-right.png"
            alt="Host Features"
            className="w-72 md:w-80"
          />
          <div className="absolute top-10 right-0 bg-white shadow-md px-4 py-2 rounded-lg flex items-center">
            <img src="/icons/microsite-icon.png" alt="Microsite" className="w-6 h-6 mr-2"/>
            <p className="font-semibold">Get a <span className="text-blue-500">Microsite</span></p>
          </div>
          <div className="absolute top-28 right-16 bg-white shadow-md px-4 py-2 rounded-lg flex items-center">
            <img src="/icons/certificate-icon.png" alt="Certificate" className="w-6 h-6 mr-2"/>
            <p className="font-semibold">Give <span className="text-orange-500">Certificates</span></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HostHeroSection;
