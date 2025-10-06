"use client";

import { useState } from "react";

const TripDetailsTab = () => {
  const [activeSubTab, setActiveSubTab] = useState<"boarding" | "dropping">(
    "boarding"
  );

  const boardingPoints = [
    {
      time: "09:30 PM",
      date: "3rd October 2025",
      name: "GABTOLI",
      code: "EGT0306-Gabtoli Mohib (01677170096)-CC",
    },
    {
      time: "10:00 PM",
      date: "3rd October 2025",
      name: "KALLYANPUR BRTC",
      code: "EGT0108-Kallyanpur-2 (01894737276)-OC",
    },
    {
      time: "10:30 PM",
      date: "3rd October 2025",
      name: "Panthapath Bus Point",
      code: "EGT0301-Panthapath (***)-CC",
    },
    {
      time: "10:45 PM",
      date: "3rd October 2025",
      name: "Fakirapole",
      code: "EGT0211-Fakirapol (***)-CC",
    },
    {
      time: "11:15 PM",
      date: "3rd October 2025",
      name: "ARAMBAGH",
      code: "EGT0103-Arambag (01894708160)-OC",
    },
    {
      time: "11:30 PM",
      date: "3rd October 2025",
      name: "Sonir Akhra",
      code: "EGT0212-Shonir Akhra (01870202829)-CC",
    },
    {
      time: "11:40 PM",
      date: "3rd October 2025",
      name: "Chittagong Road",
      code: "EGT0214-CTG Road-Abid (***)-CC",
    },
    {
      time: "11:45 PM",
      date: "3rd October 2025",
      name: "Sign Board",
      code: "EGT0213-Signboard (***)-CC",
    },
  ];

  const droppingPoints = [
    {
      time: "04:30 AM",
      date: "4th October 2025",
      name: "Dampara Bus Terminal",
      code: "EGT0410-Dampara (***)-DC",
    },
    {
      time: "04:45 AM",
      date: "4th October 2025",
      name: "Oxygen Mor",
      code: "EGT0415-Oxygen Mor (***)-DC",
    },
  ];

  const points = activeSubTab === "boarding" ? boardingPoints : droppingPoints;

  return (
    <div className="flex-1 overflow-y-auto px-8">
      <h3 className="text-lg font-semibold mb-4">Trip Details</h3>

      {/* Sub Tabs */}
      <div className="grid grid-cols-2 items-center border bg-gray-100 rounded-lg overflow-hidden mb-6">
        <button
          onClick={() => setActiveSubTab("boarding")}
          className={`px-5 py-2 text-sm font-medium cursor-pointer ${
            activeSubTab === "boarding"
              ? "bg-white shadow text-primary"
              : "text-gray-500"
          } rounded-md transition`}
        >
          Boarding
        </button>
        <button
          onClick={() => setActiveSubTab("dropping")}
          className={`px-5 py-2 text-sm font-medium cursor-pointer ${
            activeSubTab === "dropping"
              ? "bg-white shadow text-primary"
              : "text-gray-500"
          } rounded-md transition`}
        >
          Dropping
        </button>
      </div>

      {/* Trip Points */}
      <div className="space-y-6">
        {points.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            {/* Content */}
            <div className="flex items-center gap-12">
              <div>
                <p className="text-sm text-gray-500">Starts at</p>
                <p className="text-primary font-semibold text-sm leading-tight">
                  {item.time}
                </p>
                <p className="text-xs text-primary mb-1">{item.date}</p>
              </div>

              <div>
                <p className="text-gray-800 font-medium text-sm">{item.name}</p>
                <p className="text-gray-500 text-xs">{item.code}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripDetailsTab;
