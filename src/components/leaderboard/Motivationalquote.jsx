import React from "react";
import { FaAward } from "react-icons/fa";

const MotivationalQuote = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md text-center">
      <FaAward className="text-4xl text-blue-500 mx-auto mb-4" />
      <p className="text-xl text-gray-700 italic">
        "The secret of success is to do the common things uncommonly well."
      </p>
      <p className="text-gray-500 mt-2">— John D. Rockefeller</p>
    </div>
  );
};

export default MotivationalQuote;