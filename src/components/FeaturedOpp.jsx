import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Correct import for Autoplay
import { MdArrowRightAlt } from "react-icons/md";

const FeaturedOpp = ({ type }) => {
    const windowSize = useRef(window.innerWidth);
    const [selectedCategory, setSelectedCategory] = useState("All"); // State to track selected category

    const opportunities = [
        {
            title: "Codegoda 2023",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/63e102313d79b_codegoda-2023.jpg?d=413x236",
            link: "https://unstop.com/hackathons/codegoda-2023-agoda-600316?refId=FEHOM",
            category: "Hackathon",
            registered: "6,451 Registered",
            timeLeft: "1 month left",
        },
        {
            title: "Unstop Awards 2023",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/63b6573964184_newsletter.jpg?d=700x400",
            link: "https://unstop.com/awards/2023",
            category: "Event",
            registered: "Nominate Now",
            timeLeft: "",
        },
        {
            title: "L'Oréal Brandstorm 2023",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/639c28d07908f_loreal-brandstorm-2023.jpg?d=413x236",
            link: "https://unstop.com/competitions/loreal-brandstorm-2023-loreal-553616?refId=FEHOM",
            category: "Hackathon",
            registered: "",
            timeLeft: "4 days left",
        },
        {
            title: "Stock Market Showdown",
            image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1676809200.png?d=700x400",
            link: "https://unstop.com/competitions/stock-market-showdown-sigfest23-manipal-university-mu-jaipur-615612?refId=FEHOM",
            category: "Event",
            registered: "575 Registered",
            timeLeft: "3 days left",
        },
        {
            title: "Flipkart Girls Wanna Code 4.0",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/63e269c2926dd_flipkart-girls-wanna-code-40.png?d=413x236",
            link: "https://unstop.com/hackathons/flipkart-girls-wanna-code-40-flipkart-604383?refId=FEHOM",
            category: "Hackathon",
            registered: "575 Registered",
            timeLeft: "2 days left",
        },
        {
            title: "Online Quizzing Festival",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/63d78159f1066_online-quizzing-festival-oqf-season-8.jpg?d=413x236",
            link: "https://unstop.com/online-quizzing-festival?refId=FEHOM",
            category: "Ideathon",
            registered: "30,745 Registered",
            timeLeft: "9 days left",
        },
    ];

    // Filter opportunities based on the selected category
    const filteredOpportunities =
        selectedCategory === "All"
            ? opportunities
            : opportunities.filter((opp) => opp.category === selectedCategory);

    return (
        <section className={`featuredopp ${type}-feature py-12`}>
            <div className="container mx-auto bg-gradient-to-b from-blue-50 to-white border border-gray-200 rounded-2xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Opportunities</h2>
                    <p className="text-lg text-gray-600">
                        Participate in these exceptional opportunities curated for the exceptional you!
                    </p>
                    {/* Category Filter Buttons */}
                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === "All" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                                }`}
                            onClick={() => setSelectedCategory("All")}
                        >
                            All
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === "Ideathon" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                                }`}
                            onClick={() => setSelectedCategory("Ideathon")}
                        >
                            Ideathon
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === "Hackathon" ? "bg-green-600 text-white" : "bg-green-100 text-green-600"
                                }`}
                            onClick={() => setSelectedCategory("Hackathon")}
                        >
                            Hackathon
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === "Event" ? "bg-yellow-600 text-white" : "bg-yellow-100 text-yellow-600"
                                }`}
                            onClick={() => setSelectedCategory("Event")}
                        >
                            Event
                        </button>
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={windowSize.current <= 1000 ? 1 : 3}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    speed={800}
                >
                    {filteredOpportunities.map((opp, index) => (
                        <SwiperSlide key={index}>
                            <a href={opp.link} target="_blank" rel="noreferrer">
                                <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
                                    <div className="bg-white">
                                        <img src={opp.image} alt={opp.title} className="w-full h-48 object-cover" />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{opp.title}</h4>
                                        <div className="flex justify-between items-center text-sm text-gray-600">
                                            {opp.registered && (
                                                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                                    {opp.registered}
                                                </div>
                                            )}
                                            {opp.timeLeft && (
                                                <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                                                    {opp.timeLeft}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedOpp;