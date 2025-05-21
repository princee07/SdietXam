import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaRegFileAlt, FaShoppingCart, FaStar } from "react-icons/fa";

const FeaturedListings = ({ listings }) => {
  if (!listings || listings.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">
              FEATURED
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Featured Resources</h2>
            <p className="text-gray-600">Top-rated materials from our community</p>
          </div>
          <Link to="/market/featured" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-3 sm:mt-0">
            View all <FaChevronRight className="ml-1 text-sm" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map(listing => (
            <div key={listing.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  FEATURED
                </div>
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-sm font-medium px-3 py-1 m-2 rounded">
                  {listing.course.toUpperCase()} · {listing.subject}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{listing.title}</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                    ₹{listing.price}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">By {listing.seller}</span>
                  <span className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" /> 
                    {listing.rating} ({listing.sales} sold)
                  </span>
                </div>
                <div className="flex justify-between">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition flex-1 mr-2 flex items-center justify-center">
                    <FaShoppingCart className="mr-2" /> Buy Now
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium transition flex items-center justify-center">
                    <FaRegFileAlt className="mr-2" /> Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;