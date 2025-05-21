import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300">
      <button 
        className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg text-gray-800">{question}</h3>
        <div className="text-blue-600">
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </button>
      <div className={`px-6 pb-6 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "Is it allowed to sell notes?",
      answer: "Yes, selling your own handwritten notes and solutions is permitted. However, selling copyrighted materials or exam papers is prohibited."
    },
    {
      id: 2,
      question: "How do I get paid as a seller?",
      answer: "Payments are processed every two weeks via UPI, bank transfer, or your preferred payment method after a small platform fee."
    },
    {
      id: 3,
      question: "What if I'm not satisfied with a purchase?",
      answer: "We offer a 3-day money-back guarantee if the materials don't match the description or are of poor quality."
    },
    {
      id: 4,
      question: "How do I know the content is good quality?",
      answer: "All materials are rated by buyers, and our verification team checks new sellers' first uploads for quality assurance."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium inline-block mb-3">
            Help
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600">Got questions? We have answers</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(faq => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/market/faq" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View all FAQs <FaChevronRight className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;