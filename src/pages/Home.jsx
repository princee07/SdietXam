import React from "react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import LPM from "../components/LPM";
import OurNumbers from "../components/OurNumbers";
import SlidingStudent from "../components/SlidingStudent";
import FeaturedOpp from "../components/FeaturedOpp"; // Import FeaturedOpp
import Footer from "../components/Footer";
import About from "./About";
const Home = () => {
    return (
        <>
            
            <HomeHero />
            <div className="mt-12"> {/* Added margin-top */}
                <OurNumbers />
            </div>
            <SlidingStudent small={" YMCA "} title={"Rank Holder"} />
            <div className="mt-17">
            <LPM />
          
            </div>
           
            <FeaturedOpp type="home" />
            <div className="mt-12">
            <About />
          
            </div>
          
           
           
           
            <Footer />
        </>
    );
};

export default Home;