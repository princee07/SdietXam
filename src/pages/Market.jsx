import React, { useState } from "react";
import MarketHero from "../components/marketplace/MarketHero";
import CategorySelector from "../components/marketplace/CategorySelector";
import CourseFilter from "../components/marketplace/CourseFilter";
import FeaturedListings from "../components/marketplace/FeaturedListings";
import AllListings from "../components/marketplace/AllListings";
import HireAssignmentWorker from "../components/marketplace/HireAssignmentWorker";
import HowItWorks from "../components/marketplace/HowItWorks";
import EarnMoneyCTA from "../components/marketplace/EarnMoneyCTA";
import Testimonials from "../components/marketplace/Testimonials";
import FAQSection from "../components/marketplace/FAQSection";
import FinalCTA from "../components/marketplace/FinalCTA";
import Footer from "../components/Footer";

const Market = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [activeCourse, setActiveCourse] = useState("all");
  const [searchFilters, setSearchFilters] = useState({
    searchTerm: "",
    category: "all"
  });
  
  // Sample listings data - would come from API in real app
  const listings = [
    {
      id: 1,
      title: "Data Structures & Algorithms Notes",
      type: "notes",
      course: "btech",
      subject: "Computer Science",
      price: 149,
      rating: 4.8,
      sales: 42,
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      seller: "Arjun M.",
      featured: true
    },
    {
      id: 2,
      title: "Financial Management Complete Project",
      type: "project",
      course: "bba",
      subject: "Finance",
      price: 299,
      rating: 4.5,
      sales: 28,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      seller: "Priya S.",
      featured: true
    },
    {
      id: 3,
      title: "Web Development Assignment Solutions",
      type: "assignment",
      course: "bca",
      subject: "Web Technologies",
      price: 199,
      rating: 4.7,
      sales: 35,
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      seller: "Rahul K.",
      featured: true
    },
    {
      id: 4,
      title: "Operating Systems Sample Papers Solved",
      type: "sample_paper",
      course: "btech",
      subject: "Computer Science",
      price: 99,
      rating: 4.6,
      sales: 67,
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      seller: "Vikram J."
    },
    {
      id: 5,
      title: "Marketing Management Case Studies",
      type: "notes",
      course: "bba",
      subject: "Marketing",
      price: 179,
      rating: 4.4,
      sales: 23,
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      seller: "Neha A."
    },
    {
      id: 6,
      title: "Database Management System Project",
      type: "project",
      course: "bca",
      subject: "Database",
      price: 349,
      rating: 4.9,
      sales: 18,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      seller: "Amit P."
    },
  ];

  // Filter listings based on active tab and course
  const filteredListings = listings.filter(listing => {
    const matchesTab = activeTab === "all" || listing.type === activeTab;
    const matchesCourse = activeCourse === "all" || listing.course === activeCourse;
    return matchesTab && matchesCourse;
  });

  // Get featured listings
  const featuredListings = listings.filter(listing => listing.featured);
  
  const handleSearch = (filters) => {
    setSearchFilters(filters);
    // You would implement more complex search logic here
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Enhanced Hero Section */}
      <MarketHero onSearch={handleSearch} />
      
      {/* Categories Section */}
      <CategorySelector 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Course Filter Tabs */}
      <CourseFilter
        activeCourse={activeCourse}
        setActiveCourse={setActiveCourse}
      />
      
      {/* Featured Listings */}
      <FeaturedListings listings={featuredListings} />

      {/* Hire Assignment Worker - NEW FEATURE */}
      <HireAssignmentWorker />
      
      {/* All Listings */}
      <AllListings 
        filteredListings={filteredListings}
        activeTab={activeTab}
        activeCourse={activeCourse}
      />

      {/* How It Works */}
      <HowItWorks />

      {/* Earn Money CTA */}
      <EarnMoneyCTA />

      {/* Testimonials */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA */}
      <FinalCTA />
      <Footer/>
    </div>
  );
};

export default Market;