import React from "react";
import CountUp from "react-countup";

const OurNumbers = () => {
    return (
        <section className="py-15 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-blue-700">
                        Our <strong className="text-orange-400">Numbers</strong>
                        <img
                            src="https://cdn.unstop.com/uploads/images/home/graph-icon.svg?d=38x27"
                            alt="increasing"
                            className="inline-block ml-2 w-6 h-6"
                            loading="lazy"
                        />
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                    <div className="bg-white shadow-md rounded-lg p-6 text-center h-40"> {/* Increased height */}
                        <h3 className="text-3xl font-bold text-blue-600">
                            <CountUp end={10000} separator="," suffix="+" duration={2.5} />
                        </h3>
                        <span className="text-gray-600 font-bold ">Students Registered</span>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 text-center h-40"> {/* Increased height */}
                        <h3 className="text-3xl font-bold text-blue-600">
                            <CountUp end={20000} separator="," suffix="+" duration={2.5} />
                        </h3>
                        <span className="text-gray-600  font-bold ">Assessments Completed</span>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center h-40"> {/* Increased height */}
                        <h3 className="text-3xl font-bold text-blue-600">
                            <CountUp end={200} suffix="+" duration={2.5} />
                        </h3>
                        <span className="text-gray-600 font-bold ">Number of Mentors</span>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 text-center h-40"> {/* Increased height */}
                        <h3 className="text-3xl font-bold text-blue-600">
                            <CountUp end={70} suffix="+" duration={2.5} />
                        </h3>
                        <span className="text-gray-600 font-bold ">Merit Achievers</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OurNumbers;