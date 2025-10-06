/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { act, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Seats from "./Seats";
import TripDetailsTab from "./TripDetails";

export default function SeatSelectionSheet({ bus }: any) {
  const tabs = [
    { key: "seats", label: "Seats" },
    { key: "amenities", label: "Amenities" },
    { key: "policies", label: "Policies" },
    { key: "trip-details", label: "Trip Details" },
  ];

  const [activeTab, setActiveTab] = useState("seats");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-primary text-white px-8 py-4" size="lg">
          Book Ticket
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-lg flex flex-col p-0"
      >
        {/* Header */}
        <SheetHeader className="bg-primary px-4 border border-primary">
          <SheetTitle className="text-white">Select Seats</SheetTitle>
        </SheetHeader>

        <div className="flex justify-between border-b overflow-x-auto border-primary">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "px-6 py-3 text-sm md:text-base font-medium whitespace-nowrap cursor-pointer",
                activeTab === tab.key
                  ? "text-primary border-b-2 border-primary"
                  : "text-black hover:text-primary"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "seats" ? (
          <Seats bus={bus} />
        ) : activeTab === "trip-details" ? (
          <TripDetailsTab />
        ) : (
          ""
        )}
      </SheetContent>
    </Sheet>
  );
}
