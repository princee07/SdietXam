import React from "react";
import { FaSearch } from "react-icons/fa";
import Experts from "../images/Experts.png";
import Mentee from "../components/Mentee";

const Mentor = () => {
  return (
    <>
 <section className="py-4 relative bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-light mb-4 relative leading-tight">
            Lost?
            <br />
            Confused?
            <br />
            Need Life Hacks?
            <br />
            <strong className="font-bold text-7xl text-gray-400">Call a Mentor!</strong>
            <span className="block w-1/2 h-1 bg-yellow-400 mt-2 mx-auto lg:mx-0"></span>
          </h1>
          <p className="text-2xl text-gray-700">
            Connect with <b>SDIET</b> mentors who’ve been in your shoes! Get real-world advice, career tips, and guidance to level up your journey.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center w-full lg:w-2/3">
          <img
            src={Experts}
            alt="Mentor Guidance"
            className="max-w-md w-full rounded-lg "
          />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div
        className="absolute left-10 top-4/4 w-10 h-24 bg-cover bg-no-repeat"
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
    <Mentee/>
    </>

  );
};

export default Mentor;
