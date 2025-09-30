/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"; // ✅

const Search = ({ customStyle = "card-shadow" }: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // states
  const [tripType, setTripType] = useState("oneway");
  const [fromCity, setFromCity] = useState<string | null>(null);
  const [toCity, setToCity] = useState<string | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [passengers, setPassengers] = useState<string>("1");

  const cities = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Khulna",
    "Rajshahi",
    "Barisal",
    "Rangpur",
    "Cox's Bazar",
    "Jessore",
    "Comilla",
  ];

  // ✅ Sync states with params on mount
  useEffect(() => {
    const tripTypeParam = searchParams.get("tripType");
    const fromParam = searchParams.get("from");
    const toParam = searchParams.get("to");
    const departureParam = searchParams.get("departure");
    const returnParam = searchParams.get("return");
    const passengersParam = searchParams.get("passengers");

    if (tripTypeParam) setTripType(tripTypeParam);
    if (fromParam) setFromCity(fromParam);
    if (toParam) setToCity(toParam);
    if (departureParam) setDepartureDate(new Date(departureParam));
    if (returnParam) setReturnDate(new Date(returnParam));
    if (passengersParam) setPassengers(passengersParam);
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (tripType) params.append("tripType", tripType);
    if (fromCity) params.append("from", fromCity);
    if (toCity) params.append("to", toCity);
    if (departureDate) params.append("departure", departureDate.toISOString());
    if (returnDate) params.append("return", returnDate.toISOString());
    if (passengers) params.append("passengers", passengers);

    router.push(`/bus-tickets?${params.toString()}`);
  };

  return (
    <div className={`${customStyle} bg-white rounded-2xl p-6 md:p-8 space-y-6`}>
      {/* Trip Type */}
      <div className="flex items-center gap-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
          />
          One Way
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="round"
            checked={tripType === "round"}
            onChange={() => setTripType("round")}
          />
          Round Trip
        </label>
      </div>

      {/* Search Form */}
      <div className="flex flex-wrap gap-4">
        {/* From City */}
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-2">From</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full h-12 justify-between">
                {fromCity || "Select departure city"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput placeholder="Select departure city" />
                <CommandList>
                  <CommandEmpty>No city found.</CommandEmpty>
                  <CommandGroup>
                    {cities.map((city, index) => (
                      <CommandItem
                        key={index}
                        onSelect={() => setFromCity(city)}
                      >
                        {city}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* To City */}
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-2">To</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full h-12 justify-between">
                {toCity || "Select destination city"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput placeholder="Search city..." />
                <CommandList>
                  <CommandEmpty>No city found.</CommandEmpty>
                  <CommandGroup>
                    {cities.map((city, index) => (
                      <CommandItem key={index} onSelect={() => setToCity(city)}>
                        {city}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Departure Date */}
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-2">
            Departure Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full h-12 justify-between">
                {departureDate ? format(departureDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Return Date */}
        {tripType === "round" && (
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-2">
              Return Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-between"
                >
                  {returnDate ? format(returnDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                />
              </PopoverContent>
            </Popover>
          </div>
        )}

        {/* Passengers */}
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-2">
            Passengers
          </label>
          <Select
            value={passengers}
            onValueChange={(val) => setPassengers(val)}
          >
            <SelectTrigger className="w-full h-12 border">
              <SelectValue placeholder="Select passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
              <SelectItem value="2">2 Passengers</SelectItem>
              <SelectItem value="3">3 Passengers</SelectItem>
              <SelectItem value="4+">4+ Passengers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="basis-[8%]">
          <button
            onClick={handleSearch}
            className="w-full h-full gradient-bg flex justify-center items-center text-white rounded-md cursor-pointer"
          >
            <SearchIcon width="28px" height="28px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
