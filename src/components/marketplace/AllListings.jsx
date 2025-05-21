import React from "react";
import { FaStar, FaRegQuestionCircle } from "react-icons/fa";

const AllListings = ({ filteredListings, activeTab, activeCourse }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Browse All Resources</h2>
          <p className="text-gray-600">
            {filteredListings.length} items found
            {activeTab !== "all" && ` in ${activeTab.replace("_", " ")}`}
            {activeCourse !== "all" && ` for ${activeCourse.toUpperCase()}`}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredListings.map(listing => (
            <div 
              key={listing.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={listing.image} 
                  alt={listing.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs font-medium px-2 py-1 m-1 rounded">
                  {listing.course.toUpperCase()}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">{listing.title}</h3>
                  <span className="text-green-700 font-medium">₹{listing.price}</span>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  {listing.subject} · {listing.type.replace("_", " ")}
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(listing.rating) ? "" : "text-gray-300"} size={12} />
                    ))}
                  </div>
                  <span>{listing.rating} ({listing.sales} sold)</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm font-medium transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">
              <FaRegQuestionCircle className="inline-block" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No resources found</h3>
            <p className="text-gray-500">
              Try changing your filters or check back later
            </p>
          </div>
        )}
        
        {filteredListings.length > 0 && (
          <div className="mt-8 text-center">
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllListings;