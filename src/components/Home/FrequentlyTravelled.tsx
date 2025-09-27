import React from "react";

const routes = [
  {
    code: "NY",
    from: "New York",
    to: "Washington DC",
    info: "Daily departures • 4.5 hours",
    price: "$42",
  },
  {
    code: "LA",
    from: "Los Angeles",
    to: "Las Vegas",
    info: "Multiple daily • 5 hours",
    price: "$35",
  },
  {
    code: "MI",
    from: "Miami",
    to: "Orlando",
    info: "Hourly departures • 3.5 hours",
    price: "$28",
  },
  {
    code: "TX",
    from: "Dallas",
    to: "Houston",
    info: "Every 2 hours • 4 hours",
    price: "$32",
  },
  {
    code: "MI",
    from: "Miami",
    to: "Orlando",
    info: "Hourly departures • 3.5 hours",
    price: "$28",
  },
  {
    code: "TX",
    from: "Dallas",
    to: "Houston",
    info: "Every 2 hours • 4 hours",
    price: "$32",
  },
];

const FrequentlyTravelled = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="custom-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Traveled Routes
          </h2>
          <p className="text-gray-600 text-lg">
            Routes our customers love the most
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md p-6 border card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {route.code}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 whitespace-nowrap">
                      <span className="font-semibold">{route.from}</span>
                      <span className="text-gray-400">→</span>
                      <span className="font-semibold">{route.to}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{route.info}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-gray-800">
                    {route.price}
                  </p>
                  <p className="text-success text-sm whitespace-nowrap">✓ Available</p>
                </div>
              </div>
              <button className="w-full border border-primary py-3 rounded-lg font-semibold text-primary cursor-pointer transition-colors">
                Select Route
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyTravelled;
