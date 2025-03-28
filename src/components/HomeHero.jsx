import React from "react";
import { motion } from "framer-motion";
import plane from "../images/paper-plane.png"
const HomeHero = () => {
    const images = [
        {
            title: "learn",
            image:
                "https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406",
            link: "https://sdietxam.com/courses",
        },
        {
            title: "practice",
            image:
                "https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406",
            link: "https://sdietxam.com/practice",
        },
        {
            title: "mentorships",
            image:
                "https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406",
            link: "https://sdietxam.com/mentor",
        },
        {
            title: "compete",
            image:
                "https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406",
            link: "https://sdietxam.com/compete",
        },
        {
            title: "jobs",
            image:
                "https://cdn.unstop.com/uploads/images/home/home-hero-jobs.png?d=324x406",
            link: "https://sdietxam.com/job-portal",
        },
        {
            title: "blogs",
            image:
                "https://cdn.unstop.com/uploads/images/home/home-hero-blogs.png?d=324x406",
            link: "https://sdietxam.com/blog",
        },
    ];

    return (
        <section className="py-4 relative bg-gray-50">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
                {/* Left Section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-light mb-4 relative leading-tight">
                        Connecting
                        <br />
                        <strong className="font-bold text-7xl">Satyugians, Skills, Success</strong>
                        <span className="block w-1/2 h-1 bg-yellow-400 mt-2 mx-auto lg:mx-0"></span>
                    </h1>
                    <p className="text-2xl text-gray-700">
    Explore opportunities designed for <b>Satyugian's</b> to excel academically, score high marks, earn merit, enhance skills, and climb the leaderboard.
</p>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap justify-center gap-6 w-full lg:w-2/3">
                    {images.map((ele, index) => (
                        <div
                            key={index}
                            className="relative w-1/3 transition-transform transform hover:-translate-y-3"
                        >
                            <span className="absolute top-4 left-4 text-lg font-semibold capitalize z-10">
                                {ele.title}
                            </span>
                            <a href={ele.link}>
                                <img
                                    src={ele.image}
                                    alt={ele.title}
                                    className="w-full rounded-lg shadow-md"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <motion.img
                src= {plane} // You can replace this with a better airplane icon
                alt="Paper Airplane"
               
                className="absolute w-12 h-12"
                initial={{ x: -50, y: 120, opacity: 0.8 }}
                animate={{
                    x: [0, 200, 250, 100, 0], // Moves in a circular pattern
                    y: [300, 200, 100, 250, 300], // Moves up and then returns down
                    rotate: [0, 20, 0, -20, 0], // Adds slight tilt for realism
                    opacity: [1, 1, 1, 1, 1], // Keeps visibility constant
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ bottom: "100%", left: "10%" }}
            />
            {/* Decorative Elements */}
            <div
                className="absolute left-10 top-1/4 w-10 h-24 bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                        "url(https://d8it4huxumps7.cloudfront.net/uploads/images/63d4b178b31d5_home_hero_before.svg)",
                }}
            ></div>
            <div
                className="absolute right-10 bottom-1/4 w-10 h-24 bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                        "url(https://d8it4huxumps7.cloudfront.net/uploads/images/63de43bdce283_multi_color_dot.png?d=76x188)",
                }}
            ></div>
        </section>
    );
};

export default HomeHero;