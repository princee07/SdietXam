
import { Link } from "react-router-dom";
import Experts from "../images/Experts.png"; // Replace with your actual image path

const Practice = () => {


  return (
    <div>
      {/* Hero Section */}
      <section className="py-4 relative bg-gray-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-light mb-4 relative leading-tight">
              Unlock Your
              <br />
              <strong className="font-bold text-7xl text-gray-400">Potential!</strong>
              <span className="block w-1/2 h-1 bg-yellow-400 mt-2 mx-auto lg:mx-0"></span>
            </h1>
            <p className="text-2xl text-gray-700">
              Solve easy to complex problems and get hands-on experience to achieve your{" "}
              <b>University Rank!</b>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center w-full lg:w-2/3">
            <img
              src={Experts}
              alt="Practice Guidance"
              className="max-w-md w-full rounded-lg"
            />
          </div>
        </div>
      </section>

     

      
    </div>
  );
};

export default Practice;