import React, { useState, useEffect } from "react";
import { 
  FaSearch, FaBell, FaCalendarAlt, FaClock, FaBook, 
  FaFilter, FaDownload, FaExclamationCircle, FaCheckCircle,
  FaSortAmountDown, FaBullhorn, FaInfoCircle, FaGraduationCap 
} from "react-icons/fa";
import Footer from "../components/Footer";

const ExamUpdates = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [expandedUpdate, setExpandedUpdate] = useState(null);

  // Sample data - replace with your actual data
  const updates = {
    upcoming: [
      {
        id: 1,
        title: "End Semester Examination",
        course: "Computer Science Engineering",
        date: "May 25, 2025",
        time: "10:00 AM - 01:00 PM",
        venue: "Block A, Room 201-210",
        description: "The final examination for all CSE subjects will be conducted as per the schedule. Students are advised to carry their hall tickets and college ID cards.",
        important: true,
        attachments: ["Exam_Schedule.pdf", "Seating_Arrangement.pdf"],
        type: "semester",
      },
      {
        id: 2,
        title: "Data Structures Mid-Term",
        course: "Computer Science Engineering",
        date: "June 2, 2025",
        time: "02:00 PM - 04:00 PM",
        venue: "Block B, Room 105-108",
        description: "Syllabus includes Arrays, Linked Lists, Stacks, Queues, and Trees. Sample papers are available on the student portal.",
        important: false,
        attachments: ["DS_Syllabus.pdf"],
        type: "mid-term",
      },
      {
        id: 3,
        title: "Digital Electronics Practical Exam",
        course: "Electronics Engineering",
        date: "June 5, 2025",
        time: "09:00 AM - 12:00 PM",
        venue: "Electronics Lab Complex",
        description: "Students should complete their lab records and get them signed before the examination. Carry all necessary drawing instruments.",
        important: false,
        attachments: [],
        type: "practical",
      },
      {
        id: 4,
        title: "Business Analytics Quiz",
        course: "Business Administration",
        date: "June 7, 2025",
        time: "11:00 AM - 12:00 PM",
        venue: "Online (LMS Portal)",
        description: "This is an online multiple-choice quiz covering Chapters 1-5. Students must use their university login credentials.",
        important: false,
        attachments: ["Quiz_Guidelines.pdf"],
        type: "quiz",
      },
      {
        id: 5,
        title: "Calculus Final Examination",
        course: "Mathematics",
        date: "June 10, 2025",
        time: "10:00 AM - 01:00 PM",
        venue: "Block C, Room 301-305",
        description: "Comprehensive examination covering all semester topics. Non-programmable calculators are permitted.",
        important: true,
        attachments: ["Math_Formula_Sheet.pdf"],
        type: "semester",
      }
    ],
    results: [
      {
        id: 6,
        title: "Object-Oriented Programming Results",
        course: "Computer Science Engineering",
        date: "May 15, 2025",
        description: "Results for OOP mid-semester examination have been announced. Students can check their grades on the student portal.",
        important: false,
        attachments: [],
      },
      {
        id: 7,
        title: "Database Management Systems Results",
        course: "Computer Science Engineering",
        date: "May 10, 2025",
        description: "DBMS quiz results have been published. Class average: 72%. Review session scheduled for May 18.",
        important: false,
        attachments: ["Performance_Analysis.pdf"],
      },
      {
        id: 8,
        title: "Electronics Fundamentals Results",
        course: "Electronics Engineering",
        date: "May 5, 2025",
        description: "Electronics Fundamentals lab evaluation results are now available. Students who scored below 60% must attend the remedial session.",
        important: true,
        attachments: [],
      }
    ],
    rescheduled: [
      {
        id: 9,
        title: "Computer Networks Exam Rescheduled",
        course: "Computer Science Engineering",
        oldDate: "May 20, 2025",
        newDate: "May 28, 2025",
        time: "02:00 PM - 05:00 PM",
        venue: "Block A, Room 105-108",
        description: "Due to unforeseen circumstances, the Computer Networks examination has been rescheduled. All other details remain the same.",
        important: true,
        attachments: ["Revised_Schedule.pdf"],
      },
      {
        id: 10,
        title: "Marketing Management Presentation Rescheduled",
        course: "Business Administration",
        oldDate: "May 22, 2025",
        newDate: "May 29, 2025",
        time: "10:00 AM - 12:00 PM",
        venue: "Conference Hall",
        description: "The group presentations for Marketing Management have been postponed. Groups should submit their presentations a day before the rescheduled date.",
        important: false,
        attachments: [],
      }
    ]
  };
  
  const courses = [
    "Computer Science Engineering", 
    "Electronics Engineering", 
    "Mechanical Engineering", 
    "Civil Engineering",
    "Business Administration",
    "Mathematics"
  ];
  
  // Filter updates based on search and course selection
  const filteredUpdates = updates[activeTab]?.filter(update => {
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         update.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === "all" || update.course === selectedCourse;
    return matchesSearch && matchesCourse;
  });

  const toggleExpand = (id) => {
    setExpandedUpdate(expandedUpdate === id ? null : id);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays > 0 && diffDays < 7) return `${diffDays} days left`;
    
    return dateStr;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 z-0 text-white py-12 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Exam Updates</h1>
              <p className="text-blue-100 text-lg max-w-xl">
                Stay informed about upcoming examinations, results, and schedule changes. Never miss an important academic update.
              </p>
              <div className="mt-6 flex items-center">
                <button 
                  className={`flex items-center px-4 py-2 rounded-md mr-4 transition ${notificationEnabled ? 'bg-white text-blue-600' : 'bg-blue-500 text-white border border-blue-200'}`}
                  onClick={() => setNotificationEnabled(!notificationEnabled)}
                >
                  <FaBell className="mr-2" />
                  {notificationEnabled ? 'Notifications On' : 'Notifications Off'}
                </button>
                <span className="text-sm text-blue-200">
                  {notificationEnabled ? 'You will receive alerts for new updates' : 'You may miss important updates'}
                </span>
              </div>
            </div>
            
            <div className="hidden md:block w-64 h-64 bg-blue-500 bg-opacity-30 rounded-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <FaGraduationCap className="text-8xl text-white opacity-70" />
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <FaExclamationCircle className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-grow">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search exams by name or description..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                <FaFilter className="mr-2 text-gray-600" />
                <span>Filters</span>
              </button>
              
              <select 
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Courses</option>
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
              
              <button className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                <FaSortAmountDown className="mr-2" />
                <span>Sort</span>
              </button>
            </div>
          </div>
          
          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Exam Type</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>All Types</option>
                  <option>Mid Term</option>
                  <option>Final Exam</option>
                  <option>Quiz</option>
                  <option>Practical</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>All Dates</option>
                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Next Month</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Importance</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>All</option>
                  <option>Important Only</option>
                  <option>Regular</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>All</option>
                  <option>With Attachments</option>
                  <option>No Attachments</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex items-center px-6 py-3 ${
              activeTab === "upcoming"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } rounded-lg transition`}
          >
            <FaCalendarAlt className="mr-2" />
            <span>Upcoming Exams</span>
            <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-sm">
              {updates.upcoming.length}
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab("results")}
            className={`flex items-center px-6 py-3 ${
              activeTab === "results"
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } rounded-lg transition`}
          >
            <FaCheckCircle className="mr-2" />
            <span>Results</span>
            <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-sm">
              {updates.results.length}
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab("rescheduled")}
            className={`flex items-center px-6 py-3 ${
              activeTab === "rescheduled"
                ? "bg-amber-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } rounded-lg transition`}
          >
            <FaExclamationCircle className="mr-2" />
            <span>Rescheduled</span>
            <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-sm">
              {updates.rescheduled.length}
            </span>
          </button>
        </div>
        
        {/* Update Cards */}
        <div className="space-y-6">
          {filteredUpdates.length === 0 ? (
            <div className="text-center py-16">
              <FaInfoCircle className="mx-auto text-4xl text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Updates Found</h3>
              <p className="text-gray-500">Try changing your filters or search term</p>
            </div>
          ) : (
            filteredUpdates.map((update) => (
              <div 
                key={update.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border-l-4 ${
                  update.important 
                    ? activeTab === "upcoming" 
                      ? "border-blue-600" 
                      : activeTab === "results" 
                        ? "border-green-600" 
                        : "border-amber-600"
                    : "border-gray-200"
                }`}
              >
                <div 
                  onClick={() => toggleExpand(update.id)}
                  className="p-6 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-grow">
                      <div className="flex items-start">
                        <div className={`p-3 rounded-full mr-4 ${
                          activeTab === "upcoming" 
                            ? "bg-blue-100 text-blue-600" 
                            : activeTab === "results" 
                              ? "bg-green-100 text-green-600" 
                              : "bg-amber-100 text-amber-600"
                        }`}>
                          {activeTab === "upcoming" ? (
                            <FaCalendarAlt className="text-xl" />
                          ) : activeTab === "results" ? (
                            <FaCheckCircle className="text-xl" />
                          ) : (
                            <FaExclamationCircle className="text-xl" />
                          )}
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center">
                            <h3 className="text-xl font-bold text-gray-800">
                              {update.title}
                            </h3>
                            {update.important && (
                              <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                                Important
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mt-1">{update.course}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:text-right mt-4 md:mt-0">
                      {activeTab === "upcoming" && (
                        <div className="flex md:flex-col items-center md:items-end">
                          <div className={`text-sm font-semibold ${
                            new Date(update.date) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                              ? "text-red-600"
                              : "text-green-600"
                          }`}>
                            {formatDate(update.date)}
                          </div>
                          <div className="ml-4 md:ml-0 text-gray-500 text-sm flex items-center">
                            <FaClock className="mr-1" /> {update.time}
                          </div>
                        </div>
                      )}
                      
                      {activeTab === "results" && (
                        <div className="text-sm text-gray-500">
                          Published on {update.date}
                        </div>
                      )}
                      
                      {activeTab === "rescheduled" && (
                        <div className="flex flex-col items-end">
                          <div className="text-sm text-red-500 line-through">
                            Old: {update.oldDate}
                          </div>
                          <div className="text-sm text-green-600 font-medium">
                            New: {update.newDate}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Expanded content */}
                {expandedUpdate === update.id && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-gray-600">{update.description}</div>
                      
                      {activeTab === "upcoming" && (
                        <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center mb-2">
                            <FaBook className="text-blue-600 mr-2" />
                            <span className="font-medium">Exam Details:</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-6">
                            <div>Date: <span className="font-medium">{update.date}</span></div>
                            <div>Time: <span className="font-medium">{update.time}</span></div>
                            <div>Venue: <span className="font-medium">{update.venue}</span></div>
                            {update.type && (
                              <div>Type: <span className="font-medium capitalize">{update.type}</span></div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Attachments */}
                      {update.attachments && update.attachments.length > 0 && (
                        <div className="mt-4">
                          <div className="font-medium mb-2">Attachments:</div>
                          <div className="flex flex-wrap gap-2">
                            {update.attachments.map((attachment, i) => (
                              <a 
                                key={i}
                                href="#" 
                                className="inline-flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition"
                              >
                                <FaDownload className="mr-1 text-gray-600" />
                                {attachment}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6 flex justify-end">
                        <button className={`px-4 py-2 rounded-lg text-white ${
                          activeTab === "upcoming" 
                            ? "bg-blue-600 hover:bg-blue-700" 
                            : activeTab === "results" 
                              ? "bg-green-600 hover:bg-green-700" 
                              : "bg-amber-600 hover:bg-amber-700"
                        } transition`}>
                          {activeTab === "upcoming" 
                            ? "Add to Calendar" 
                            : activeTab === "results" 
                              ? "View Result" 
                              : "View Updated Schedule"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        {/* Important Announcements */}
        <div className="mt-10 p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg border border-amber-200">
          <div className="flex items-start">
            <div className="mr-3 bg-amber-200 rounded-full p-3">
              <FaBullhorn className="text-amber-600 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Important Announcement</h3>
              <p className="text-gray-700">
                The university will be observing a study leave period from June 15-18, 2025. All scheduled examinations during this period will proceed as planned. Students are advised to regularly check their university email for any official communications.
              </p>
              <div className="mt-2">
                <button className="text-amber-700 hover:text-amber-800 text-sm font-medium flex items-center">
                  <FaInfoCircle className="mr-1" /> Read more announcements
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <section className="bg-gray-50 py-12 mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Examination Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Upcoming Examinations</div>
              <div className="mt-2 text-sm text-gray-500">Next 30 days</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Average Pass Rate</div>
              <div className="mt-2 text-sm text-gray-500">Last semester</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Schedule Changes</div>
              <div className="mt-2 text-sm text-gray-500">This month</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Help Section */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about examinations or require special accommodations, please contact the examination department.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full sm:w-auto">
                Contact Exam Department
              </button>
              <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg w-full sm:w-auto">
                View Exam Policies
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ExamUpdates;