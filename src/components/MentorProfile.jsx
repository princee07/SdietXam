import React from "react";
import { 
  FaStar, FaGraduationCap, FaUserCircle, FaComment, 
  FaChalkboardTeacher, FaTimes, FaAward, FaUniversity
} from "react-icons/fa";

const MentorProfile = ({ mentor, onClose, startChat }) => {
  if (!mentor) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header with Close Button */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all"
          >
            <FaTimes className="text-white" />
          </button>
          
          <div className="absolute top-16 left-6 flex flex-col sm:flex-row items-start sm:items-end">
            <img 
              src={mentor.photo} 
              alt={mentor.name} 
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-white shadow-md object-cover"
            />
            
            <div className="mt-4 sm:mt-0 sm:ml-6 mb-2">
              <h2 className="text-xl sm:text-3xl font-bold text-white drop-shadow-md">{mentor.name}</h2>
              <div className="flex items-center mt-1">
                <div className="bg-yellow-400 text-white rounded-full px-2 py-0.5 text-sm font-bold flex items-center">
                  <FaStar className="mr-1" /> {mentor.rating}
                </div>
                <span className="text-white ml-2 drop-shadow-md">{mentor.specialty}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="pt-20 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Bio Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{mentor.bio}</p>
              </div>
              
              {/* Courses Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Courses</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mentor.courses.map((course, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-center"
                    >
                      <FaGraduationCap className="text-blue-500 mr-2" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education Section */}
              {mentor.education && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
                  <div className="space-y-4">
                    {mentor.education.map((edu, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <FaUniversity className="text-blue-500 mt-1 mr-3" />
                          <div>
                            <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                            <p className="text-gray-600">{edu.university} • {edu.year}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Achievements Section */}
              {mentor.achievements && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Achievements</h3>
                  <div className="space-y-3">
                    {mentor.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <FaAward className="text-yellow-500 mt-1 mr-3" />
                        <p className="text-gray-600">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-5">
                {/* Stats */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Stats</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">
                        {mentor.experience}
                      </div>
                      <div className="text-xs text-gray-500 uppercase font-medium">
                        {mentor.students === 0 ? "Status" : "Experience"}
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-bold text-green-600">
                        {mentor.students === 0 ? (mentor.available ? "Available" : "Busy") : mentor.students}
                      </div>
                      <div className="text-xs text-gray-500 uppercase font-medium">
                        {mentor.students === 0 ? "Current" : "Students"}
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg text-center shadow-sm col-span-2">
                      <div className="text-2xl font-bold text-yellow-500 flex items-center justify-center">
                        <FaStar className="mr-1" />
                        <span>{mentor.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500 uppercase font-medium">Rating</div>
                    </div>
                  </div>
                </div>
                
                {/* Chat Button */}
                <button 
                  onClick={startChat}
                  className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <FaComment className="mr-2" /> Start Chat Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;