import React from "react";

const Search = () => {
  return (
    <section className="gradient-bg pb-20">
      <div className="custom-container pt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Find Your Perfect Journey
          </h2>
          <p className="text-xl text-muted-bg">
            Book bus tickets across the country with ease
          </p>
        </div>

        <div className=" bg-white rounded-2xl p-8 card-shadow">
          <form id="searchForm" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  From
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fromCity"
                    placeholder="Enter departure city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="absolute right-3 top-3 text-gray-400">
                    📍
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  To
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="toCity"
                    placeholder="Enter destination city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="absolute right-3 top-3 text-gray-400">
                    📍
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Departure Date
                </label>
                <input
                  type="date"
                  id="departureDate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Return Date (Optional)
                </label>
                <input
                  type="date"
                  id="returnDate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Passengers
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4+ Passengers</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full gradient-bg text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              🔍 Search Buses
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
