import React from "react";

const ProgramTabs = ({ activeTab, setActiveTab, programLabels }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center mb-8">
      {Object.keys(programLabels).map(key => {
        // Create a variable to hold the icon component
        const IconComponent = programLabels[key].icon;
        
        return (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center justify-center space-x-2 px-6 py-4 text-lg font-medium rounded-t-lg transition-all ${
              activeTab === key
                ? `bg-${programLabels[key].color}-600 text-white`
                : `bg-gray-100 text-gray-700 hover:bg-gray-200`
            } mb-2 sm:mb-0 mx-1 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
          >
            {/* Render the icon component properly */}
            <span className="text-xl"><IconComponent /></span>
            <span>{programLabels[key].label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProgramTabs;