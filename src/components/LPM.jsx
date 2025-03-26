import React from "react";

const LPM = () => {
    const images = [
        {
            title: "learn",
            image:
                "https://cdn.unstop.com/uploads/images/home/learn-bg-new.png?d=747x534",
            link: "https://sdietxam.com/courses",
        },
        {
            title: "practice",
            image:
                "https://cdn.unstop.com/uploads/images/home/practice-bg-new.png?d=747x533",
            link: "https://sdietxam.com/practice",
        },
        {
            title: "mentorships",
            image:
                "https://cdn.unstop.com/uploads/images/home/mentorships-bg-new.png?d=747x534",
            link: "https://sdietxam.com/mentor",
        },
    ];

    return (
        <section className="relative mb-24">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="flex flex-wrap justify-center gap-8">
                    {images.map((ele, index) => (
                        <div
                            key={index}
                            className="relative w-full lg:w-1/3 transition-transform transform hover:-translate-y-3"
                        >
                            <a href={ele.link}>
                                <img
                                    src={ele.image}
                                    alt={ele.title}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </a>
                            <span className="absolute bottom-8 left-0 w-full text-center text-xl font-semibold capitalize text-gray-800">
                                {ele.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Element */}
            <div
                className="absolute right-10 top-0 w-10 h-24 bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                        "url(https://d8it4huxumps7.cloudfront.net/uploads/images/63de43bdce283_multi_color_dot.png?d=76x188)",
                }}
            ></div>
        </section>
    );
};

export default LPM;