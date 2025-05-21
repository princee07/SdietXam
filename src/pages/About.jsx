import React from "react";
import { motion } from "framer-motion";
import { 
  FaBookOpen, 
  FaTrophy, 
  FaChalkboardTeacher, 
  FaQuestionCircle, 
  FaCheckCircle,
  FaRocket,
  FaUsers,
  FaLaptopCode
} from "react-icons/fa";

const About = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <FaBookOpen className="text-4xl" />,
      title: "Exam Preparation",
      description: "Access a variety of study materials and past papers to get ready for exams.",
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: <FaQuestionCircle className="text-4xl" />,
      title: "Interactive Quizzes",
      description: "Test your knowledge with subject-wise quizzes and improve your scores.",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      title: "Leaderboard",
      description: "Compete with peers and track your performance on live leaderboards.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Assignments",
      description: "Solve assignments and get feedback to improve your learning skills.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const benefits = [
    { text: "Personalized learning path for every student", icon: <FaUsers /> },
    { text: "Engaging, interactive content that makes learning fun", icon: <FaLaptopCode /> },
    { text: "Regular updates with new study materials", icon: <FaRocket /> },
    { text: "24/7 access from any device", icon: <FaCheckCircle /> }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-orange-100 to-yellow-100 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="bg-blue-100 text-blue-800 text-sm font-medium rounded-full px-4 py-1.5">
              About Us
            </span>
            
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">SDIET</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Xam</span>
            </h1>
            
            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mt-6"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
            
            <p className="mt-8 text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              SDIETXam is a platform designed for college students to prepare for exams, play quizzes, track rankings on the leaderboard, and solve assignments. It's an all-in-one solution for interactive and smart learning.
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 mx-auto`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Us Section with Stats */}
          <div className="mb-24">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 inline-block">
                Why Choose SDIETXAM?
              </h2>
              <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                Our platform is built for <span className="font-bold">students, by students.</span> We focus on making learning interactive, competitive, and stress-free.
              </p>
            </motion.div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <span className="text-4xl font-bold text-blue-600 block">1000+</span>
                <span className="text-gray-600">Active Users</span>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-4xl font-bold text-indigo-600 block">500+</span>
                <span className="text-gray-600">Quizzes</span>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-4xl font-bold text-orange-500 block">50+</span>
                <span className="text-gray-600">Subjects</span>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-4xl font-bold text-green-600 block">24/7</span>
                <span className="text-gray-600">Support</span>
              </motion.div>
            </div>
            
            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">What Makes Us Different</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="bg-white/20 p-3 rounded-full text-white mr-4">
                      {benefit.icon}
                    </div>
                    <p className="text-white text-lg">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials with Enhanced Design */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">What Our Students Say</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg relative"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl mr-1">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  "SDIETXAM has transformed how I study. The quizzes are fun and challenging, and I've seen a significant improvement in my grades since I started using it!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                    RS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Rahul Sharma</h4>
                    <p className="text-gray-600 text-sm">Computer Science Student</p>
                  </div>
                </div>
                <div className="absolute top-4 right-8 text-6xl opacity-10 text-blue-400">"</div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg relative"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl mr-1">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  "The leaderboard feature motivates me to keep improving. I love competing with friends while learning. SDIETXAM makes studying feel like less of a chore!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg mr-4">
                    PS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Priya Singh</h4>
                    <p className="text-gray-600 text-sm">Electrical Engineering Student</p>
                  </div>
                </div>
                <div className="absolute top-4 right-8 text-6xl opacity-10 text-purple-400">"</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div 
            className="text-center z-0 py-12 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-sm border border-blue-100 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Boost Your Academic Success?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have already improved their grades and study habits with SDIETXAM.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <a
                  href="/signup"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                >
                  <span>Get Started Now</span>
                  <FaRocket className="ml-2" />
                </a>
              </motion.div>
              
              <p className="mt-6 text-sm text-gray-500">No credit card required • Free sign-up • Cancel anytime</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
