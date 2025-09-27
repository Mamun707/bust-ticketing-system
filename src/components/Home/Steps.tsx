import React from "react";

const steps = [
  {
    icon: "🔍",
    number: 1,
    title: "Search Routes",
    desc: "Enter your departure and destination cities, select your travel date and find available buses.",
    bg: "bg-blue-100",
    numBg: "bg-blue-600",
  },
  {
    icon: "🪑",
    number: 2,
    title: "Choose Seats",
    desc: "Select your preferred seats from our interactive seat map and choose any additional services.",
    bg: "bg-green-100",
    numBg: "bg-green-600",
  },
  {
    icon: "💳",
    number: 3,
    title: "Secure Payment",
    desc: "Complete your booking with our secure payment system and receive your e-ticket instantly.",
    bg: "bg-purple-100",
    numBg: "bg-purple-600",
  },
];

const Steps = () => (
  <section className="py-16 bg-white">
    <div className="custom-container px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Buy Tickets in 3 Easy Steps
      </h2>
      <p className="text-gray-600 text-lg mb-12">
        Simple, fast, and secure booking process
      </p>

      <div className="grid md:grid-cols-3 gap-16">
        {steps.map(({ number, title, desc }) => (
          <div key={number} className="text-center">
            <div
              className={`bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-semibold`}
            >
              {number}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
