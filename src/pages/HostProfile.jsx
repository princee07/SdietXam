import React, { useState } from "react";
import { 
  FaUserCircle, FaEdit, FaChartBar, FaFileAlt, 
  FaDownload, FaStar, FaUsers, FaChalkboardTeacher,
  FaCalendarAlt, FaClipboardList, FaEnvelope, FaPhone, 
  FaGraduationCap, FaIdCard, FaMapMarkerAlt, FaBookOpen,
  FaSave, FaTimes, FaTrash, FaPlus, FaRegLightbulb, FaTrophy
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const HostProfile = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock host data - replace with actual data from your backend
  const initialProfileData = {
    id: "host123",
    name: "Dr. Rajesh Kumar",
    title: "Associate Professor",
    department: "Computer Science & Engineering",
    email: "rajesh.kumar@sdiet.edu",
    phone: "+91 98765 43210",
    location: "Block B, Room 204",
    photoUrl: null, // Use a default placeholder if no image exists
    about: "Associate Professor with 12+ years of teaching experience in Computer Science. Specializes in Database Systems, Machine Learning, and Software Engineering. Published researcher with a focus on educational technology and AI applications.",
    education: [
      { id: 1, degree: "Ph.D in Computer Science", university: "IIT Delhi", year: "2010" },
      { id: 2, degree: "M.Tech in Software Engineering", university: "NIT Warangal", year: "2007" },
      { id: 3, degree: "B.Tech in Computer Science", university: "Amity University", year: "2005" }
    ],
    expertise: ["Database Systems", "Machine Learning", "Software Engineering", "Cloud Computing", "Big Data"],
    stats: {
      quizzesCreated: 42,
      notesUploaded: 24,
      studentsHelped: 1240,
      averageRating: 4.8
    },
    recentQuizzes: [
      { id: 1, title: "Database Normalization", date: "May 15, 2025", participants: 67, averageScore: 72 },
      { id: 2, title: "SQL Advanced Concepts", date: "May 10, 2025", participants: 54, averageScore: 68 },
      { id: 3, title: "NoSQL vs SQL", date: "May 5, 2025", participants: 49, averageScore: 75 }
    ],
    recentNotes: [
      { id: 1, title: "Database Design Principles.pdf", date: "May 18, 2025", downloads: 143, size: "2.4 MB" },
      { id: 2, title: "SQL Cheat Sheet.pdf", date: "May 12, 2025", downloads: 210, size: "1.2 MB" },
      { id: 3, title: "Introduction to MongoDB.pdf", date: "May 7, 2025", downloads: 89, size: "3.7 MB" }
    ],
    schedule: [
      { day: "Monday", slots: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"] },
      { day: "Tuesday", slots: ["9:00 AM - 11:00 AM"] },
      { day: "Wednesday", slots: ["10:00 AM - 12:00 PM", "3:00 PM - 5:00 PM"] },
      { day: "Thursday", slots: ["1:00 PM - 3:00 PM"] },
      { day: "Friday", slots: ["9:00 AM - 11:00 AM", "2:00 PM - 4:00 PM"] }
    ],
    achievements: [
      "Best Teacher Award 2024",
      "Published 15 research papers in international journals",
      "Faculty Mentor for National Coding Championship 2023",
      "Chair of Departmental Curriculum Committee"
    ]
  };

  // State for editable profile data
  const [profileData, setProfileData] = useState(initialProfileData);
  const [editableData, setEditableData] = useState({...initialProfileData});
  const [newEducation, setNewEducation] = useState({ degree: "", university: "", year: "" });
  const [newExpertise, setNewExpertise] = useState("");
  const [newAchievement, setNewAchievement] = useState("");
  const [newScheduleSlot, setNewScheduleSlot] = useState("");
  const [editingDay, setEditingDay] = useState("");
  
  // Handle profile image change
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = React.useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setEditableData({...editableData, photoUrl: reader.result});
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle editing toggle
  const toggleEditing = () => {
    if (isEditing) {
      // Cancel editing
      setEditableData({...profileData});
      setSelectedImage(null);
    } else {
      // Start editing
      setEditableData({...profileData});
    }
    setIsEditing(!isEditing);
  };

  // Handle save profile changes
  const saveProfileChanges = () => {
    setProfileData({...editableData});
    setIsEditing(false);
  };

  // Education handlers
  const addEducation = () => {
    if (newEducation.degree && newEducation.university && newEducation.year) {
      const updatedEducation = [...editableData.education, {
        id: Date.now(),
        ...newEducation
      }];
      setEditableData({...editableData, education: updatedEducation});
      setNewEducation({ degree: "", university: "", year: "" });
    }
  };

  const removeEducation = (id) => {
    const updatedEducation = editableData.education.filter(edu => edu.id !== id);
    setEditableData({...editableData, education: updatedEducation});
  };

  // Expertise handlers
  const addExpertise = () => {
    if (newExpertise && !editableData.expertise.includes(newExpertise)) {
      const updatedExpertise = [...editableData.expertise, newExpertise];
      setEditableData({...editableData, expertise: updatedExpertise});
      setNewExpertise("");
    }
  };

  const removeExpertise = (item) => {
    const updatedExpertise = editableData.expertise.filter(exp => exp !== item);
    setEditableData({...editableData, expertise: updatedExpertise});
  };

  // Achievement handlers
  const addAchievement = () => {
    if (newAchievement && !editableData.achievements.includes(newAchievement)) {
      const updatedAchievements = [...editableData.achievements, newAchievement];
      setEditableData({...editableData, achievements: updatedAchievements});
      setNewAchievement("");
    }
  };

  const removeAchievement = (item) => {
    const updatedAchievements = editableData.achievements.filter(ach => ach !== item);
    setEditableData({...editableData, achievements: updatedAchievements});
  };

  // Schedule handlers
  const addScheduleSlot = (day) => {
    if (newScheduleSlot) {
      const updatedSchedule = editableData.schedule.map(item => {
        if (item.day === day) {
          return {
            ...item,
            slots: [...item.slots, newScheduleSlot]
          };
        }
        return item;
      });
      setEditableData({...editableData, schedule: updatedSchedule});
      setNewScheduleSlot("");
      setEditingDay("");
    }
  };

  const removeScheduleSlot = (day, slot) => {
    const updatedSchedule = editableData.schedule.map(item => {
      if (item.day === day) {
        return {
          ...item,
          slots: item.slots.filter(s => s !== slot)
        };
      }
      return item;
    });
    setEditableData({...editableData, schedule: updatedSchedule});
  };

  // Input change handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData({
      ...editableData,
      [name]: value
    });
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 relative">
        <div className="container mx-auto px-4">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture */}
            <div className="md:ml-8">
              <div className="relative">
                {(editableData.photoUrl || selectedImage) ? (
                  <img 
                    src={selectedImage || editableData.photoUrl} 
                    alt={editableData.name} 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center">
                    <FaUserCircle className="text-7xl md:text-8xl text-gray-400" />
                  </div>
                )}
                {isEditing ? (
                  <>
                    <button 
                      onClick={handleImageClick} 
                      className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-white text-blue-600 shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
                    >
                      <FaEdit />
                    </button>
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleImageChange} 
                      accept="image/*" 
                      className="hidden" 
                    />
                  </>
                ) : (
                  <button 
                    onClick={toggleEditing} 
                    className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-white text-blue-600 shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
                  >
                    <FaEdit />
                  </button>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={editableData.name}
                    onChange={handleInputChange}
                    className="text-3xl md:text-4xl font-bold bg-transparent border-b border-blue-300 text-white w-full mb-2 focus:outline-none focus:border-white"
                    placeholder="Your Name"
                  />
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mt-2 mb-4">
                    <div className="flex items-center">
                      <FaIdCard className="mr-2" />
                      <input
                        type="text"
                        name="title"
                        value={editableData.title}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-blue-300 text-white focus:outline-none focus:border-white"
                        placeholder="Your Title"
                      />
                    </div>
                    <div className="hidden md:block h-4 w-px bg-blue-300"></div>
                    <div className="flex items-center">
                      <FaBookOpen className="mr-2" />
                      <input
                        type="text"
                        name="department"
                        value={editableData.department}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-blue-300 text-white focus:outline-none focus:border-white"
                        placeholder="Your Department"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-3xl md:text-4xl font-bold">{editableData.name}</h1>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2 mb-4">
                    <div className="flex items-center justify-center md:justify-start">
                      <FaIdCard className="mr-2" />
                      <span>{editableData.title}</span>
                    </div>
                    <div className="hidden md:block h-4 w-px bg-blue-300"></div>
                    <div className="flex items-center justify-center md:justify-start">
                      <FaBookOpen className="mr-2" />
                      <span>{editableData.department}</span>
                    </div>
                  </div>
                </>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {isEditing ? (
                  <>
                    <div className="flex items-center">
                      <FaEnvelope className="mr-2 text-blue-200" />
                      <input
                        type="email"
                        name="email"
                        value={editableData.email}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-blue-300 text-white focus:outline-none focus:border-white"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="mr-2 text-blue-200" />
                      <input
                        type="text"
                        name="phone"
                        value={editableData.phone}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-blue-300 text-white focus:outline-none focus:border-white"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-200" />
                      <input
                        type="text"
                        name="location"
                        value={editableData.location}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-blue-300 text-white focus:outline-none focus:border-white"
                        placeholder="Your Location"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center md:justify-start">
                      <FaEnvelope className="mr-2 text-blue-200" />
                      <a href={`mailto:${editableData.email}`} className="hover:text-blue-200 transition-colors">
                        {editableData.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <FaPhone className="mr-2 text-blue-200" />
                      <a href={`tel:${editableData.phone}`} className="hover:text-blue-200 transition-colors">
                        {editableData.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <FaMapMarkerAlt className="mr-2 text-blue-200" />
                      <span>{editableData.location}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <FaClipboardList className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{editableData.stats.quizzesCreated}</div>
                  <div className="text-sm text-blue-200">Quizzes</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <FaFileAlt className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{editableData.stats.notesUploaded}</div>
                  <div className="text-sm text-blue-200">Notes</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <FaUsers className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{editableData.stats.studentsHelped}</div>
                  <div className="text-sm text-blue-200">Students</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <FaStar className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{editableData.stats.averageRating}</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Editing Controls */}
        {isEditing && (
          <div className="absolute bottom-4 right-4 flex gap-3">
            <button 
              onClick={saveProfileChanges}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <FaSave /> Save Changes
            </button>
            <button 
              onClick={toggleEditing}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <FaTimes /> Cancel
            </button>
          </div>
        )}
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
        <div class="absolute bottom-0 left-20 w-48 h-48 bg-blue-400 rounded-full opacity-10"></div>
      </div>

      {/* Mobile Stats (displayed on small screens) */}
      <div className="lg:hidden bg-white shadow-md rounded-lg mx-4 -mt-6 grid grid-cols-2 gap-4 p-4 z-20 relative">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{editableData.stats.quizzesCreated}</div>
          <div className="text-sm text-gray-600">Quizzes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{editableData.stats.notesUploaded}</div>
          <div className="text-sm text-gray-600">Notes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{editableData.stats.studentsHelped}</div>
          <div className="text-sm text-gray-600">Students</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-amber-600">{editableData.stats.averageRating}</div>
          <div className="text-sm text-gray-600">Rating</div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 mt-8 lg:mt-16">
        <div className="flex overflow-x-auto hide-scrollbar space-x-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-4 text-sm md:text-base font-medium whitespace-nowrap ${
              activeTab === "overview"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("quizzes")}
            className={`py-3 px-4 text-sm md:text-base font-medium whitespace-nowrap ${
              activeTab === "quizzes"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Quizzes
          </button>
          <button
            onClick={() => setActiveTab("notes")}
            className={`py-3 px-4 text-sm md:text-base font-medium whitespace-nowrap ${
              activeTab === "notes"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`py-3 px-4 text-sm md:text-base font-medium whitespace-nowrap ${
              activeTab === "schedule"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Schedule
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`py-3 px-4 text-sm md:text-base font-medium whitespace-nowrap ${
              activeTab === "achievements"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Achievements
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* About */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <FaUserCircle className="mr-2 text-blue-600" /> About Me
                    </h2>
                    {isEditing && (
                      <button 
                        className="text-blue-600 hover:text-blue-700"
                        onClick={() => toggleEditing()}
                      >
                        <FaEdit />
                      </button>
                    )}
                  </div>
                  {isEditing ? (
                    <textarea
                      name="about"
                      value={editableData.about}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-gray-700 leading-relaxed">
                      {editableData.about}
                    </p>
                  )}
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                      <FaGraduationCap className="mr-2 text-blue-600" /> Education
                    </h2>
                    {isEditing && (
                      <button 
                        className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm flex items-center"
                        onClick={() => document.getElementById('add-education-form').classList.toggle('hidden')}
                      >
                        <FaPlus className="mr-1" /> Add
                      </button>
                    )}
                  </div>
                  
                  {/* Add Education Form */}
                  {isEditing && (
                    <div id="add-education-form" className="mb-4 p-4 bg-blue-50 rounded-lg hidden">
                      <h3 className="font-medium text-blue-700 mb-3">Add New Education</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                          <input
                            type="text"
                            value={newEducation.degree}
                            onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="e.g. Ph.D in Computer Science"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
                          <input
                            type="text"
                            value={newEducation.university}
                            onChange={(e) => setNewEducation({...newEducation, university: e.target.value})}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="e.g. IIT Delhi"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                          <input
                            type="text"
                            value={newEducation.year}
                            onChange={(e) => setNewEducation({...newEducation, year: e.target.value})}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="e.g. 2010"
                          />
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={addEducation}
                            className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    {editableData.education.map((edu, idx) => (
                      <div key={idx} className="border-l-4 border-blue-200 pl-4 group">
                        {isEditing ? (
                          <div className="flex justify-between items-start">
                            <div>
                              <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => {
                                  const updatedEducation = [...editableData.education];
                                  updatedEducation[idx].degree = e.target.value;
                                  setEditableData({...editableData, education: updatedEducation});
                                }}
                                className="font-semibold text-lg w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                              />
                              <div className="flex items-center gap-2 mt-1">
                                <input
                                  type="text"
                                  value={edu.university}
                                  onChange={(e) => {
                                    const updatedEducation = [...editableData.education];
                                    updatedEducation[idx].university = e.target.value;
                                    setEditableData({...editableData, education: updatedEducation});
                                  }}
                                  className="text-gray-600 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                <span>,</span>
                                <input
                                  type="text"
                                  value={edu.year}
                                  onChange={(e) => {
                                    const updatedEducation = [...editableData.education];
                                    updatedEducation[idx].year = e.target.value;
                                    setEditableData({...editableData, education: updatedEducation});
                                  }}
                                  className="text-gray-600 w-20 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                              </div>
                            </div>
                            <button
                              onClick={() => removeEducation(edu.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="font-semibold text-lg">{edu.degree}</div>
                            <div className="text-gray-600">{edu.university}, {edu.year}</div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Side Content */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center">
                      <FaChalkboardTeacher className="mr-2 text-blue-600" /> Areas of Expertise
                    </h2>
                    {isEditing && (
                      <button 
                        className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm flex items-center"
                        onClick={() => document.getElementById('add-expertise-form').classList.toggle('hidden')}
                      >
                        <FaPlus className="mr-1" /> Add
                      </button>
                    )}
                  </div>
                  
                  {/* Add Expertise Form */}
                  {isEditing && (
                    <div id="add-expertise-form" className="mb-4 p-3 bg-blue-50 rounded-lg hidden">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newExpertise}
                          onChange={(e) => setNewExpertise(e.target.value)}
                          className="flex-1 p-2 border border-gray-300 rounded-md"
                          placeholder="e.g. Machine Learning"
                        />
                        <button
                          onClick={addExpertise}
                          className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {editableData.expertise.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm group relative"
                      >
                        {item}
                        {isEditing && (
                          <button
                            onClick={() => removeExpertise(item)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center">
                      <FaCalendarAlt className="mr-2 text-blue-600" /> Office Hours
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {editableData.schedule.map((day, idx) => (
                      <div key={idx} className="flex">
                        <div className="w-24 font-medium text-gray-700">{day.day}:</div>
                        <div className="flex-1">
                          {isEditing ? (
                            <div>
                              {day.slots.map((slot, slotIdx) => (
                                <div key={slotIdx} className="flex items-center gap-2 mb-1">
                                  <span>{slot}</span>
                                  <button
                                    onClick={() => removeScheduleSlot(day.day, slot)}
                                    className="text-red-500 hover:text-red-700 text-sm"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              ))}
                              {editingDay === day.day ? (
                                <div className="flex items-center gap-2 mt-2">
                                  <input
                                    type="text"
                                    value={newScheduleSlot}
                                    onChange={(e) => setNewScheduleSlot(e.target.value)}
                                    className="flex-1 p-1 text-sm border border-gray-300 rounded-md"
                                    placeholder="e.g. 10:00 AM - 12:00 PM"
                                  />
                                  <button
                                    onClick={() => addScheduleSlot(day.day)}
                                    className="px-2 py-1 bg-blue-600 text-white rounded-md text-xs hover:bg-blue-700"
                                  >
                                    Add
                                  </button>
                                  <button
                                    onClick={() => setEditingDay("")}
                                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md text-xs hover:bg-gray-400"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setEditingDay(day.day)}
                                  className="text-blue-600 hover:underline text-sm mt-1"
                                >
                                  + Add Slot
                                </button>
                              )}
                            </div>
                          ) : (
                            <>{day.slots.join(", ")}</>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quizzes Tab */}
          {activeTab === "quizzes" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaClipboardList className="mr-2 text-blue-600" /> Quizzes Created
                </h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors">
                  <span className="mr-2">Create Quiz</span> <span className="text-lg">+</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 rounded-tl-lg">Quiz Title</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Date Created</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Participants</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Average Score</th>
                      <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 rounded-tr-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {editableData.recentQuizzes.map((quiz) => (
                      <tr key={quiz.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 font-medium">{quiz.title}</td>
                        <td className="py-3 px-4 text-gray-600">{quiz.date}</td>
                        <td className="py-3 px-4 text-gray-600">{quiz.participants}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                              <div 
                                className="bg-blue-600 h-2.5 rounded-full" 
                                style={{ width: `${quiz.averageScore}%` }}
                              ></div>
                            </div>
                            <span className="text-gray-600">{quiz.averageScore}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex justify-center gap-3">
                            <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md">
                              <FaEdit />
                            </button>
                            <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md">
                              <FaChartBar />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-blue-600 font-medium hover:underline">
                  View All Quizzes
                </button>
              </div>
            </div>
          )}

          {/* Notes Tab */}
          {activeTab === "notes" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaFileAlt className="mr-2 text-blue-600" /> Notes Uploaded
                </h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors">
                  <span className="mr-2">Upload Note</span> <span className="text-lg">+</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {editableData.recentNotes.map((note) => (
                  <div 
                    key={note.id}
                    className="flex items-center border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                      <FaFileAlt className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{note.title}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-4">Uploaded: {note.date}</span>
                        <span>{note.size}</span>
                      </div>
                    </div>
                    <div className="text-gray-500">
                      <div className="flex items-center text-sm mb-1">
                        <FaDownload className="mr-1" /> {note.downloads}
                      </div>
                      <button className="text-blue-600 text-sm hover:underline">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-blue-600 font-medium hover:underline">
                  View All Notes
                </button>
              </div>
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === "schedule" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-600" /> Weekly Schedule
                </h2>
                {isEditing ? (
                  <div className="flex gap-2">
                    <button 
                      onClick={saveProfileChanges}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                    >
                      <FaSave /> Save
                    </button>
                    <button 
                      onClick={toggleEditing}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      <FaTimes /> Cancel
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={toggleEditing}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors"
                  >
                    <span className="mr-2">Update Schedule</span> <FaEdit />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {editableData.schedule.map((day, idx) => (
                  <div 
                    key={idx}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="bg-blue-600 text-white text-center py-2 font-medium">
                      {day.day}
                    </div>
                    <div className="p-4">
                      {isEditing ? (
                        <>
                          {day.slots.length > 0 ? (
                            <ul className="space-y-2">
                              {day.slots.map((slot, slotIdx) => (
                                <li 
                                  key={slotIdx}
                                  className="flex items-center justify-between text-sm bg-blue-50 rounded-lg p-2"
                                >
                                  <span>{slot}</span>
                                  <button
                                    onClick={() => removeScheduleSlot(day.day, slot)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <FaTrash />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="text-center text-gray-500 py-6">No slots</div>
                          )}
                          <div className="mt-2">
                            {editingDay === day.day ? (
                              <div className="flex flex-col gap-2">
                                <input
                                  type="text"
                                  value={newScheduleSlot}
                                  onChange={(e) => setNewScheduleSlot(e.target.value)}
                                  className="p-2 text-sm border border-gray-300 rounded-md"
                                  placeholder="e.g. 10:00 AM - 12:00 PM"
                                />
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => addScheduleSlot(day.day)}
                                    className="flex-1 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                                  >
                                    Add
                                  </button>
                                  <button
                                    onClick={() => setEditingDay("")}
                                    className="flex-1 py-1 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <button
                                onClick={() => setEditingDay(day.day)}
                                className="w-full mt-2 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
                              >
                                + Add Slot
                              </button>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          {day.slots.length > 0 ? (
                            <ul className="space-y-2">
                              {day.slots.map((slot, slotIdx) => (
                                <li 
                                  key={slotIdx}
                                  className="flex items-center text-sm bg-blue-50 rounded-lg p-2"
                                >
                                  <FaRegLightbulb className="text-blue-600 mr-2" />
                                  {slot}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="text-center text-gray-500 py-6">No slots</div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
                  <FaRegLightbulb className="mr-2" /> Note for Students
                </h3>
                {isEditing ? (
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    placeholder="Add a note for students..."
                  />
                ) : (
                  <p className="text-gray-700">
                    Please book appointments at least 24 hours in advance. For urgent queries, email me directly.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaTrophy className="mr-2 text-blue-600" /> Achievements & Accolades
                </h2>
                {isEditing && (
                  <button 
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm flex items-center"
                    onClick={() => document.getElementById('add-achievement-form').classList.toggle('hidden')}
                  >
                    <FaPlus className="mr-1" /> Add
                  </button>
                )}
              </div>

              {/* Add Achievement Form */}
              {isEditing && (
                <div id="add-achievement-form" className="mb-6 p-4 bg-blue-50 rounded-lg hidden">
                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      value={newAchievement}
                      onChange={(e) => setNewAchievement(e.target.value)}
                      className="p-2 border border-gray-300 rounded-md"
                      placeholder="e.g. Best Teacher Award 2024"
                    />
                    <div className="flex justify-end">
                      <button
                        onClick={addAchievement}
                        className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {editableData.achievements.map((achievement, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                      <FaTrophy />
                    </div>
                    <div className="flex-1">
                      {isEditing ? (
                        <div className="flex justify-between items-start">
                          <input
                            type="text"
                            value={achievement}
                            onChange={(e) => {
                              const updatedAchievements = [...editableData.achievements];
                              updatedAchievements[idx] = e.target.value;
                              setEditableData({...editableData, achievements: updatedAchievements});
                            }}
                            className="flex-1 p-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                          />
                          <button
                            onClick={() => removeAchievement(achievement)}
                            className="text-red-500 hover:text-red-700 p-1 ml-2"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ) : (
                        <p className="text-gray-800">{achievement}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostProfile;