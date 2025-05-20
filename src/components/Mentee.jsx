import React, { useState } from "react";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";
import Footer from "./Footer";
import { 
  FaStar, FaGraduationCap, FaUserCircle, FaComment, 
  FaChalkboardTeacher, FaArrowRight 
} from "react-icons/fa";
import MentorProfile from "./MentorProfile";
import ChatWindow from "./ChatWindow";

const mentees = [
  {
    name: "Aman Kumar",
    field: "Computer Science",
    description: "Aspiring full-stack developer, passionate about web technologies.",
    image: Image1,
    available: true,
    rating: 4.8,
    color: "bg-green-200",
  },
  {
    name: "Riya Sharma",
    field: "Mechanical Engineering",
    description: "Innovator in sustainable design and automation.",
    image: Image2,
    available: false,
    rating: 4.6,
    color: "bg-red-200",
  },
  {
    name: "Vikram Singh",
    field: "Electronics & Communication",
    description: "Exploring IoT and embedded systems with hands-on projects.",
    image: Image3,
    available: true,
    rating: 4.9,
    color: "bg-blue-200",
  },
  {
    name: "Priya Patel",
    field: "Artificial Intelligence",
    description: "AI enthusiast focused on NLP and deep learning.",
    image: Image4,
    available: true,
    rating: 5.0,
    color: "bg-yellow-200",
  },
  {
    name: "Vikram Singh",
    field: "Electronics & Communication",
    description: "Exploring IoT and embedded systems with hands-on projects.",
    image: Image3,
    available: true,
    rating: 4.9,
    color: "bg-blue-200",
  },
  {
    name: "Priya Patel",
    field: "Artificial Intelligence",
    description: "AI enthusiast focused on NLP and deep learning.",
    image: Image4,
    available: true,
    rating: 5.0,
    color: "bg-yellow-200",
  },
];

const Mentee = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [activeChatMentor, setActiveChatMentor] = useState(null);

  // Sample mentor data - replace with your actual data
  const mentors = [
    {
      id: 1,
      name: "Dr. Anita Sharma",
      photo: "https://randomuser.me/api/portraits/women/33.jpg",
      specialty: "Computer Science",
      experience: "15+ years",
      rating: 4.9,
      students: 328,
      courses: ["Data Structures", "Algorithms", "Machine Learning"],
      education: [
        { degree: "Ph.D. in Computer Science", university: "IIT Delhi", year: "2008" },
        { degree: "M.Tech in Computer Science", university: "IIT Bombay", year: "2004" },
        { degree: "B.Tech in Computer Science", university: "Delhi University", year: "2002" }
      ],
      bio: "Dr. Anita Sharma is a renowned Computer Science professor with expertise in machine learning and data science. With over 15 years of teaching experience, she has guided hundreds of students in their academic and professional journeys.",
      achievements: [
        "Best Teacher Award 2022",
        "Published 25+ research papers",
        "IEEE Senior Member",
        "Technical Consultant for 3 AI startups"
      ]
    },
    {
      id: 2,
      name: "Prof. Raj Kumar",
      photo: "https://randomuser.me/api/portraits/men/54.jpg",
      specialty: "Electronics Engineering",
      experience: "12+ years",
      rating: 4.7,
      students: 256,
      courses: ["Digital Electronics", "VLSI Design", "Microprocessors"],
      education: [
        { degree: "Ph.D. in Electronics", university: "IIT Kanpur", year: "2010" },
        { degree: "M.Tech in VLSI Design", university: "NIT Trichy", year: "2006" }
      ],
      bio: "Prof. Raj Kumar is an accomplished Electronics professor specializing in VLSI design and embedded systems. He combines industrial experience with academic excellence, having worked at Intel for 5 years before joining academia."
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      specialty: "Mathematics",
      experience: "10+ years",
      rating: 4.8,
      students: 412,
      courses: ["Calculus", "Linear Algebra", "Probability & Statistics"],
      education: [
        { degree: "Ph.D. in Applied Mathematics", university: "Cambridge University", year: "2012" },
        { degree: "M.Sc in Mathematics", university: "Oxford University", year: "2008" }
      ],
      bio: "Dr. Priya Patel is passionate about making mathematics accessible to all students. With a doctorate from Cambridge, she brings international teaching standards to her classes."
    },
    {
      id: 4,
      name: "Dr. Suresh Kumar",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      specialty: "Business Administration",
      experience: "18+ years",
      rating: 4.9,
      students: 520,
      courses: ["Strategic Management", "Marketing Management", "Entrepreneurship"],
      bio: "Dr. Suresh Kumar is a distinguished professor of Business Administration with extensive corporate experience. Before entering academia, he held executive positions at multiple Fortune 500 companies."
    }
  ];

  const openProfile = (mentor) => {
    setSelectedMentor(mentor);
  };

  const closeProfile = () => {
    setSelectedMentor(null);
  };

  const startChat = (mentor) => {
    setActiveChatMentor(mentor);
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <div className="container mx-auto mt-12 px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Meet the Toppers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {mentees.map((mentee, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-80 hover:shadow-2xl transition duration-300"
            >
              {/* Top section with background color */}
              <div className={`${mentee.color} p-4 relative`}>
                {mentee.available && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    Available
                  </span>
                )}
                <img
                  src={mentee.image}
                  alt={mentee.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-white"
                />
              </div>

              {/* Card details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{mentee.name}</h3>
                <p className="text-sm text-gray-600 font-medium">{mentee.field}</p>
                <p className="text-gray-700 mt-2 text-sm">{mentee.description}</p>

                {/* Rating */}
                <div className="flex justify-center items-center mt-2">
                  {Array.from({ length: Math.floor(mentee.rating) }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">⭐</span>
                  ))}
                  {mentee.rating % 1 !== 0 && <span className="text-yellow-500 text-lg">⭐</span>}
                  <span className="ml-1 text-gray-700 font-medium">({mentee.rating})</span>
                </div>

                {/* Action Buttons - Updated with both Profile and Chat buttons */}
                <div className="mt-4 flex justify-center space-x-2">
                  <button 
                    onClick={() => startChat({
                      id: index,
                      name: mentee.name,
                      photo: mentee.image,
                      specialty: mentee.field,
                      bio: mentee.description,
                      rating: mentee.rating
                    })} 
                    className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center transition-colors"
                  >
                    <FaComment className="mr-1" /> Chat
                  </button>
                  <button 
                    onClick={() => openProfile({
                      id: index,
                      name: mentee.name,
                      photo: mentee.image,
                      specialty: mentee.field,
                      experience: "Student",
                      bio: mentee.description,
                      courses: [mentee.field, "Student Projects"],
                      rating: mentee.rating,
                      students: 0,
                      available: mentee.available
                    })}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center"
                  >
                    <span className="mr-1">Profile</span> <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Mentors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mentors are industry veterans and academic experts ready to guide you through your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor) => (
              <div 
                key={mentor.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <img 
                    src={mentor.photo} 
                    alt={mentor.name} 
                    className="h-32 w-32 rounded-full border-4 border-white shadow-md object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white rounded-full px-3 py-1 text-sm font-bold flex items-center">
                    <FaStar className="mr-1" /> {mentor.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{mentor.name}</h3>
                  <div className="flex items-center mb-3 text-gray-600">
                    <FaChalkboardTeacher className="mr-1 text-blue-500" />
                    <span>{mentor.specialty}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {mentor.experience} experience
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {mentor.courses.slice(0, 2).map((course, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                      {mentor.courses.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{mentor.courses.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-600">
                      <FaUserCircle className="inline mr-1" /> {mentor.students} students
                    </span>
                    
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => startChat(mentor)} 
                        className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center transition-colors"
                      >
                        <FaComment className="mr-1" /> Chat
                      </button>
                      <button 
                        onClick={() => openProfile(mentor)} 
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center"
                      >
                        <span className="mr-1">Profile</span> <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Profile Modal */}
        {selectedMentor && (
          <MentorProfile 
            mentor={selectedMentor} 
            onClose={closeProfile} 
            startChat={() => startChat(selectedMentor)} 
          />
        )}

        {/* Chat Window */}
        {showChat && activeChatMentor && (
          <ChatWindow 
            mentor={activeChatMentor} 
            onClose={closeChat} 
          />
        )}
      </section>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Mentee;
