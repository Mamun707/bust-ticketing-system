import Image from "next/image";
import React from "react";
import img from "../../../public/images/image.avif";
import bus_ticket from "../../../public/images/bus_ticket.jpg";

const deals = [
  {
    discount: "50% OFF",
    route: "Seattle → Portland",
    description: "Comfortable 3-hour journey",
    price: "$22",
    oldPrice: "$44",
    image: img,
  },
  {
    discount: "40% OFF",
    route: "Atlanta → Nashville",
    description: "Scenic 4-hour route",
    price: "$27",
    oldPrice: "$45",
    image: bus_ticket,
  },
  {
    discount: "35% OFF",
    route: "Phoenix → Tucson",
    description: "Desert express route",
    price: "$19",
    oldPrice: "$29",
    image: img,
  },
];

const FlashDeals = () => {
  return (
    <section className="py-16">
      <div className="custom-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flash Deals</h2>
          <p className="text-xl opacity-90">Limited time offers - Book now!</p>
          <div className="mt-4 inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
            <span className="text-sm">⏰ Ends in:</span>
            <span id="countdown" className="font-bold text-lg">
              23:45:12
            </span>
          </div>
        </div>

        {/* Deals */}
        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="border bg-white text-gray-800 rounded-xl card-hover relative overflow-hidden"
            >
              <Image
                src={deal?.image}
                alt=""
                width={400}
                height={500}
                className="w-full h-[400px] object-cover"
              />
              <div className="px-6 pb-6">
                <div className="absolute top-0 right-0 bg-primary rounded-bl text-white px-3 py-1 text-sm font-bold">
                  {deal.discount}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">{deal.route}</h3>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {deal.price}
                    </span>
                    <span className="text-gray-500 line-through">
                      {deal.oldPrice}
                    </span>
                  </div>
                  <button className="w-full border bg-primary py-3 rounded-lg font-semibold text-white transition-colors cursor-pointer duration-300">
                    Grab Deal
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

export default FlashDeals;
