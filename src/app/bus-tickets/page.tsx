"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/Home/Search";

const ResultsPage = () => {
  // Dummy bus results
  const buses = [
    {
      id: 1,
      operator: "Shyamoli Paribahan",
      route: "Dhaka → Chittagong",
      departure: "01:00 PM",
      departureDate: "Wed, 1 Oct",
      departureCity: "Dhaka",
      arrival: "09:00 PM",
      arrivalDate: "Wed, 1 Oct",
      arrivalCity: "Chittagong",
      duration: "8h 0m",
      price: 900,
      discount: 100,
      seats: 15,
    },
    {
      id: 2,
      operator: "Shyamoli Paribahan",
      route: "Dhaka → Chittagong",
      departure: "11:15 PM",
      departureDate: "Wed, 1 Oct",
      departureCity: "Dhaka",
      arrival: "07:15 AM",
      arrivalDate: "Thu, 2 Oct",
      arrivalCity: "Chittagong",
      duration: "8h 0m",
      price: 900,
      discount: 100,
      seats: 18,
    },
    {
      id: 3,
      operator: "Evergreen Transport Ltd",
      route: "Dhaka → Cox’s Bazar",
      departure: "08:45 PM",
      departureDate: "Wed, 1 Oct",
      departureCity: "Dhaka",
      arrival: "02:00 AM",
      arrivalDate: "Thu, 2 Oct",
      arrivalCity: "Cox’s Bazar",
      duration: "5h 15m",
      price: 1000,
      discount: 0,
      seats: 31,
    },
  ];


  return (
    <div className="custom-container py-12">
      <Search customStyle="border" />
      <section className="mt-4 flex gap-8">
        {/* Sidebar Filters */}
        <aside className="basis-[20%] bg-white rounded-2xl border p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Filters</h3>
            <Button size="sm" variant="outline">
              Reset
            </Button>
          </div>
          <Separator />

          {/* Bus Type */}
          <div>
            <h4 className="text-sm font-medium mb-2">Bus Type</h4>
            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="nonac" />
                <label htmlFor="ac" className="text-sm">
                  AC
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="nonac" />
                <label htmlFor="nonac" className="text-sm">
                  Non AC
                </label>
              </div>
            </div>
          </div>

          {/* Operator */}
          <div>
            <h4 className="text-sm font-medium mb-2">Operator</h4>
            <Input placeholder="Search Operator" />
          </div>

          {/* Boarding Point */}
          <div>
            <h4 className="text-sm font-medium mb-2">Boarding Point</h4>
            <Input placeholder="Search Boarding" />
          </div>

          {/* Dropping Point */}
          <div>
            <h4 className="text-sm font-medium mb-2">Dropping Point</h4>
            <Input placeholder="Search Dropping" />
          </div>

          {/* Departure Time */}
          <div>
            <h4 className="text-sm font-medium mb-2">Departure Time</h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                🌅 Early Morning (Before 6 AM)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                ☀️ Morning (6 AM - 12 PM)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🌤️ Afternoon (12 PM - 6 PM)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🌙 Evening (After 6 PM)
              </Button>
            </div>
          </div>
        </aside>

        {/* Results */}
        <main className="space-y-6 basis-[80%]">
          <div className="flex justify-between items-center">
            <div>
              <p>Showing 254 results</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">Low to High</Button>
              <Button variant="outline">High to Low</Button>
            </div>
          </div>

          {/* Bus Cards */}
          {buses.map((bus) => (
            <div
              key={bus.id}
              className="p-6 flex gap-4 items-center shadow-none"
            >
              <div className="basis-[30%]">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-medium">
                    {bus.operator}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-2">
                  <p className="text-sm text-gray-600">{bus.route}</p>
                  {bus.discount > 0 && (
                    <p className="text-sm text-red-500">
                      🎉 Get {bus.discount} TK Discount
                    </p>
                  )}
                </CardContent>
              </div>

              {/* Timing + Price */}
              <div className="basis-[70%] space-y-2 flex gap-4 justify-between items-center">
                <div className="basis-[60%] flex items-center justify-between px-4">
                  {/* Departure */}
                  <div className="text-left">
                    <p className="text-base font-semibold">{bus.departure}</p>
                    <p className="text-xs text-gray-500">{bus.departureDate}</p>
                    <p className="text-xs text-gray-500">{bus.departureCity}</p>
                  </div>

                  {/* Duration with line */}
                  <div className="flex items-center flex-col mx-4">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <div className="w-24 h-[2px] bg-primary mx-1"></div>
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{bus.duration}</p>
                  </div>

                  {/* Arrival */}
                  <div className="text-right">
                    <p className="text-base font-semibold">{bus.arrival}</p>
                    <p className="text-xs text-gray-500">{bus.arrivalDate}</p>
                    <p className="text-xs text-gray-500">{bus.arrivalCity}</p>
                  </div>
                </div>

                <div className="basis-[20%] text-center">
                  <p className="text-lg font-semibold text-primary">
                    ৳{bus.price}
                  </p>
                </div>

                <div className="basis-[20%]">
                  <Button className="bg-primary text-white px-8 py-4" size="lg">
                    Book Ticket
                  </Button>
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    {bus.seats} Seats Available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default ResultsPage;
