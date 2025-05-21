import React, { useState } from "react";
import { FaStar, FaGraduationCap, FaCalendarAlt, FaFileAlt, FaMoneyBillWave, FaClock, FaUser } from "react-icons/fa";

// Sample experts data
const experts = [
  {
    id: 1,
    name: "Priya Sharma",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    expertise: ["Programming", "Data Structures", "Web Development"],
    subject: "Computer Science",
    rating: 4.9,
    reviews: 47,
    completedJobs: 89,
    price: 450,
    course: "btech",
    year: "4th Year",
    availability: "Within 24 hours"
  },
  {
    id: 2,
    name: "Rahul Verma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    expertise: ["Finance", "Accounting", "Business Case Studies"],
    subject: "Business Administration",
    rating: 4.7,
    reviews: 32,
    completedJobs: 64,
    price: 400,
    course: "bba",
    year: "3rd Year",
    availability: "Within 48 hours"
  },
  {
    id: 3,
    name: "Ankit Patel",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    expertise: ["Database Design", "Java", "Python"],
    subject: "Computer Applications",
    rating: 4.8,
    reviews: 28,
    completedJobs: 53,
    price: 425,
    course: "bca",
    year: "Final Year",
    availability: "Available Now"
  },
  {
    id: 4,
    name: "Neha Gupta",
    photo: "https://randomuser.me/api/portraits/women/64.jpg",
    expertise: ["Electronic Circuits", "Microprocessors", "Digital Logic"],
    subject: "Electronics Engineering",
    rating: 4.6,
    reviews: 21,
    completedJobs: 42,
    price: 500,
    course: "btech",
    year: "3rd Year",
    availability: "Weekends Only"
  }
];

const HireAssignmentWorker = () => {
  const [selectedExpertise, setSelectedExpertise] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpert, setSelectedExpert] = useState(null);
  
  // Filter experts based on search term and expertise
  const filteredExperts = experts.filter(expert => {
    const matchesSearch = searchTerm === "" || 
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesExpertise = selectedExpertise === "all" || 
      expert.expertise.some(e => e.toLowerCase().includes(selectedExpertise.toLowerCase()));
      
    return matchesSearch && matchesExpertise;
  });

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="hire">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-3">
            Expert Help
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hire Assignment Workers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get professional help from top-performing students on your assignments and projects
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Search and filter */}
          <div className="mb-10 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name, subject or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            
            <select 
              className="md:w-1/4 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
            >
              <option value="all">All Expertise</option>
              <option value="programming">Programming</option>
              <option value="finance">Finance</option>
              <option value="database">Database</option>
              <option value="web">Web Development</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
          
          {selectedExpert ? (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <button onClick={() => setSelectedExpert(null)} className="text-blue-600 hover:underline">
                  ← Back to all experts
                </button>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Top Rated
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="mb-6 flex flex-col items-center">
                    <img src={selectedExpert.photo} alt={selectedExpert.name} className="w-32 h-32 rounded-full mb-4" />
                    <h3 className="text-xl font-bold">{selectedExpert.name}</h3>
                    <p className="text-indigo-600">{selectedExpert.subject} Expert</p>
                    <div className="flex items-center mt-2">
                      <span className="flex items-center text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                      </span>
                      <span className="ml-2 text-gray-600">{selectedExpert.rating} ({selectedExpert.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                      <FaGraduationCap className="text-gray-500 mr-2" />
                      <div>
                        <p className="text-gray-700 font-medium">{selectedExpert.course.toUpperCase()}</p>
                        <p className="text-sm text-gray-500">{selectedExpert.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaFileAlt className="text-gray-500 mr-2" />
                      <div>
                        <p className="text-gray-700 font-medium">{selectedExpert.completedJobs} Jobs</p>
                        <p className="text-sm text-gray-500">Completed successfully</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-gray-500 mr-2" />
                      <div>
                        <p className="text-gray-700 font-medium">{selectedExpert.availability}</p>
                        <p className="text-sm text-gray-500">Response time</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExpert.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">Request Assignment Help</h3>
                  
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Assignment Title</label>
                      <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Description</label>
                      <textarea className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Deadline</label>
                        <div className="relative">
                          <input type="date" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                          <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Budget (₹)</label>
                        <div className="relative">
                          <input type="number" className="w-full border border-gray-300 rounded p-3 pl-8 focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue={selectedExpert.price} />
                          <FaMoneyBillWave className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Attachments</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <FaFileAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                        <p className="mb-2 text-gray-600">Drag & drop files here</p>
                        <p className="text-sm text-gray-500">Or</p>
                        <button className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm">
                          Browse Files
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800">Price Estimate</h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600">Base Price</span>
                        <span className="font-medium">₹{selectedExpert.price}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-600">Service Fee (10%)</span>
                        <span className="font-medium">₹{Math.round(selectedExpert.price * 0.1)}</span>
                      </div>
                      <div className="border-t border-blue-200 mt-2 pt-2 flex justify-between items-center">
                        <span className="font-medium">Total</span>
                        <span className="text-xl font-bold">₹{selectedExpert.price + Math.round(selectedExpert.price * 0.1)}</span>
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition">
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperts.map(expert => (
                  <div key={expert.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-24 bg-gradient-to-r from-indigo-600 to-purple-600">
                      <div className="absolute -bottom-10 left-6">
                        <img src={expert.photo} alt={expert.name} className="w-20 h-20 rounded-full border-4 border-white" />
                      </div>
                    </div>
                    
                    <div className="pt-12 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{expert.name}</h3>
                          <p className="text-indigo-600">{expert.subject}</p>
                        </div>
                        <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                          {expert.course.toUpperCase()}
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2 mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.floor(expert.rating) ? "" : "text-gray-300"} />
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600">{expert.rating} ({expert.reviews} reviews)</span>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4 mb-4">
                        <div className="flex flex-wrap gap-2">
                          {expert.expertise.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-500">Starting at</span>
                          <p className="text-lg font-bold text-green-700">₹{expert.price}/assignment</p>
                        </div>
                        <button 
                          onClick={() => setSelectedExpert(expert)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          Hire Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredExperts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-5xl mb-4">
                    <FaUser className="inline-block" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No experts found</h3>
                  <p className="text-gray-500">
                    Try changing your search criteria
                  </p>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold mb-2">Post Your Request</h4>
                <p className="text-gray-600">Describe your assignment needs and set your budget</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold mb-2">Pick an Expert</h4>
                <p className="text-gray-600">Chat with experts and choose the best one for your assignment</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold mb-2">Get Quality Work</h4>
                <p className="text-gray-600">Receive your completed assignment within the agreed timeframe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireAssignmentWorker;