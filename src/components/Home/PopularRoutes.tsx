import React from "react";

const routes = [
  {
    from: "New York",
    to: "Boston",
    duration: "4 hours journey",
    price: "$45",
    tag: "Popular",
  },
  {
    from: "Los Angeles",
    to: "San Francisco",
    duration: "6 hours journey",
    price: "$65",
    tag: "Trending",
  },
  {
    from: "Chicago",
    to: "Detroit",
    duration: "5 hours journey",
    price: "$38",
    tag: "Hot",
  },
];

const PopularRoutes = () => {
  return (
    <section className="custom-container py-16 bg-white">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Bus Routes
          </h2>
          <p className="text-gray-600 text-lg">
            Most booked destinations this month
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="relative gradient-bg rounded-xl p-6 text-white card-hover cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="min-h-[80px]">
                  <h3 className="text-xl font-semibold ">
                    {route.from} → {route.to}
                  </h3>
                  <p className="opacity-80 text-sm">{route.duration}</p>
                </div>
              </div>
              <span className="absolute -top-2 right-1 bg-destructive text-white bg-opacity-20 px-3 py-1 rounded-full text-xs">
                {route.tag}🔥
              </span>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold">{route.price}</span>
                <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
