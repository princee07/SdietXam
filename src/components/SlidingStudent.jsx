import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillTrophy } from "react-icons/ai";

import { Autoplay} from "swiper/modules";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";

const SlidingStudent = ({ small, title }) => {
    const students = [
        {
            name: "John Doe",
            image: Image1,
            description: "Btech CSE 3rd year student.",
            position: "Rank: 1st",
        },
        {
            name: "Jane Smith",
            image: Image2,
            description: "Winner of multiple hackathons.",
            position: "Rank: 1st",
        },
        {
            name: "Alice Johnson",
            image: Image3,
            description: "Expert in data science competitions.",
            position: "Rank: 1st",
        },
        {
            name: "Bob Brown",
            image: Image4,
            description: "Achieved top rank in practice tests.",
            position: "Rank: 1st",
        },
        {
            name: "Jane Smith",
            image: Image2,
            description: "Winner of multiple hackathons.",
            position: "Rank: 1st",
        },
        {
            name: "Alice Johnson",
            image: Image3,
            description: "Expert in data science competitions.",
            position: "Rank: 1st",
        },
        {
            name: "Bob Brown",
            image: Image4,
            description: "Achieved top rank in practice tests.",
            position: "Rank: 1st",
        },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
            <p className="text-sm font-bold text-gray-600 flex items-center justify-center">
    {SlidingStudent.position} <AiFillTrophy className="text-yellow-500 ml-0 text-5xl" />
</p>

                <div className="text-center mb-8">
                    <small className="text-lg font-bold text-gray-500">{small}</small>
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                  
                  
                    autoplay={{
                        delay: 3000, // 3 seconds delay between slides
                        disableOnInteraction: false, // Keeps autoplay running even after user interaction
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {students.map((student, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-md rounded-lg p-4 text-center">
                                <img
                                    src={student.image}
                                    alt={student.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4 border border-gray-300"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {student.name}
                                </h3>
                                <p className="text-sm font-bold text-gray-600">
                                    {student.description}
                                </p>
                                <p className="text-sm font-bold text-gray-600">
                                    {student.position}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SlidingStudent;