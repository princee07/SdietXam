import React, { useState } from "react";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const examsData = [
    { name: "GATE 2025", date: "Feb 3, 2025", deadline: "Sep 30, 2024", category: "Engineering", link: "https://gate.iitk.ac.in" },
    { name: "NPTEL Exam", date: "Oct 15, 2024", deadline: "Aug 25, 2024", category: "MOOC", link: "https://nptel.ac.in" },
    { name: "TCS NQT", date: "Nov 10, 2024", deadline: "Oct 15, 2024", category: "Placement", link: "https://learning.tcsionhub.in" },
    { name: "Infosys Placement Test", date: "Sep 20, 2024", deadline: "Sep 10, 2024", category: "Placement", link: "https://careers.infosys.com" },
    { name: "GATE 2025", date: "Feb 3, 2025", deadline: "Sep 30, 2024", category: "Engineering", link: "https://gate.iitk.ac.in" },
    { name: "NPTEL Exam", date: "Oct 15, 2024", deadline: "Aug 25, 2024", category: "MOOC", link: "https://nptel.ac.in" },
    { name: "TCS NQT", date: "Nov 10, 2024", deadline: "Oct 15, 2024", category: "Placement", link: "https://learning.tcsionhub.in" },
    { name: "Infosys Placement Test", date: "Sep 20, 2024", deadline: "Sep 10, 2024", category: "Placement", link: "https://careers.infosys.com" },
   
];

const ExamUpdates = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");

    const filteredExams = examsData.filter((exam) => 
        (category === "All" || exam.category === category) &&
        exam.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
 <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Upcoming Exams & Placement Tests</h1>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <input
                    type="text"
                    placeholder="Search exams..."
                    className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/4"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Placement">Placement</option>
                    <option value="MOOC">MOOC</option>
                    <option value="Government">Government</option>
                </select>
            </div>

            {/* Exam List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam, index) => (
                    <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
                        <h2 className="text-lg font-semibold text-gray-700">{exam.name}</h2>
                        <p className="text-gray-500 text-sm flex items-center mt-1">
                            <FaCalendarAlt className="mr-2 text-blue-500" /> Exam Date: {exam.date}
                        </p>
                        <p className="text-gray-500 text-sm flex items-center mt-1">
                            ⏳ Deadline: {exam.deadline}
                        </p>
                        <a href={exam.link} target="_blank" rel="noopener noreferrer"
                            className="text-blue-600 flex items-center mt-2 hover:underline">
                            Official Website <FaExternalLinkAlt className="ml-1" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-12"> {/* Added margin-top */}
        <Footer/>
            </div>
       
        </>
       
    );
};

export default ExamUpdates;
