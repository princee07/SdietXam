import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ankit Singh",
      program: "B.Tech, 3rd Year",
      initials: "AS",
      color: "blue",
      text: "I've earned over ₹25,000 by selling my handwritten notes and assignment solutions. It motivates me to make better notes knowing they'll help others too!",
      rating: 5
    },
    {
      id: 2,
      name: "Meera Kapoor",
      program: "BCA, 2nd Year",
      initials: "MK",
      color: "purple",
      text: "The sample papers I bought literally saved my semester. They were exactly what I needed for exam prep, and way more helpful than my textbooks.",
      rating: 5
    },
    {
      id: 3,
      name: "Raj Joshi",
      program: "BBA, 3rd Year",
      initials: "RJ",
      color: "amber",
      text: "Found a complete marketing project when I was stuck and had no idea where to start. Not only got an A+ but also learned so much from studying it!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Student Success Stories</h2>
          <p className="text-gray-600">See how our marketplace is helping students</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-${testimonial.color}-100 rounded-full mr-4 flex items-center justify-center font-bold text-${testimonial.color}-600`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="text-sm text-gray-500">{testimonial.program}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="text-yellow-400 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;