import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUserGraduate, FaClipboardCheck, FaChalkboardTeacher, FaMedal } from "react-icons/fa";

const OurNumbers = () => {
    const stats = [
        {
            value: 10000,
            label: "Students Registered",
            icon: <FaUserGraduate className="text-3xl" />,
            color: "from-blue-500 to-blue-700"
        },
        {
            value: 20000,
            label: "Assessments Completed",
            icon: <FaClipboardCheck className="text-3xl" />,
            color: "from-indigo-500 to-indigo-700"
        },
        {
            value: 200,
            label: "Number of Mentors",
            icon: <FaChalkboardTeacher className="text-3xl" />,
            color: "from-purple-500 to-purple-700"
        },
        {
            value: 70,
            label: "Merit Achievers",
            icon: <FaMedal className="text-3xl" />,
            color: "from-orange-400 to-orange-600"
        }
    ];

    return (
        <section className="py-16 md:py-24 z-0 relative overflow-hidden">
            {/* Background styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 -z-10"></div>
            
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-2 relative inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Our </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Numbers</span>
                        <motion.img
                            src="https://cdn.unstop.com/uploads/images/home/graph-icon.svg?d=38x27"
                            alt="increasing"
                            className="inline-block ml-2 w-8 h-8"
                            loading="lazy"
                            initial={{ y: -5 }}
                            animate={{ y: 5 }}
                            transition={{ 
                                repeat: Infinity, 
                                repeatType: "reverse", 
                                duration: 1.5 
                            }}
                        />
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                        Our platform's impact in numbers - growing every day with students, mentors and assessments
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col items-center justify-center relative z-10 overflow-hidden">
                                {/* Background gradient that shows on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${stat.color}`}></div>
                                
                                {/* Icon */}
                                <div className={`mb-4 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                                    {stat.icon}
                                </div>
                                
                                {/* Number with count-up */}
                                <h3 className="text-4xl font-extrabold mb-2">
                                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                                        <CountUp 
                                            end={stat.value} 
                                            separator="," 
                                            suffix="+" 
                                            duration={2.5}
                                            enableScrollSpy
                                            scrollSpyOnce
                                        />
                                    </span>
                                </h3>
                                
                                {/* Label */}
                                <span className="text-gray-700 font-medium text-center">{stat.label}</span>
                            </div>
                            
                            {/* Card shadow that enlarges on hover */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.color} opacity-20 blur-xl scale-95 group-hover:scale-105 transition-transform duration-300 -z-10`}></div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Additional achievements row */}
                <motion.div 
                    className="mt-12 bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="font-medium text-gray-800 text-center md:text-left">Trusted and recognized by:</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center">
                            <span className="text-gray-700 font-semibold">50+ Colleges</span>
                        </div>
                        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center">
                            <span className="text-gray-700 font-semibold">20+ Competitions</span>
                        </div>
                        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center">
                            <span className="text-gray-700 font-semibold">15+ Corporate Partners</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurNumbers;