/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button } from "../ui/button";
const seats = [
  ["A1", "A3", "A4"],
  ["B1", "B3", "B4"],
  ["C1", "C3", "C4"],
  ["D1", "D3", "D4"],
  ["E1", "E3", "E4"],
  ["F1", "F3", "F4"],
  ["G1", "G3", "G4"],
  ["H1", "H3", "H4"],
  ["I1", "I3", "I4"],
  ["J1", "J3", "J4"],
  ["K1", "K3", "K4"],
];

const Seats = ({ bus }: any) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const soldSeats = ["B2", "B3", "B4", "C1"]; // example sold seats

  const toggleSeat = (seat: string) => {
    if (soldSeats.includes(seat)) return;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < 4) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };
  return (
    <>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-8">
        {/* Bus Info */}
        <div>
          <h3 className="text-lg font-semibold">{bus.operator}</h3>
          <p className="text-sm text-muted">16, Ashok leyland, AC</p>
          <p className="text-sm text-muted">Coach No. #888-AC</p>
          <div className="flex justify-between text-sm mt-3">
            <div>
              <p className="font-semibold">Departure:</p>
              <p className="text-sm text-muted">{bus?.departureCity}</p>
              <p className="text-sm text-muted">
                {bus.departure} ({bus.departureDate})
              </p>
            </div>
            <div>
              <p className="font-semibold">Arrival:</p>
              <p className="text-sm text-muted">{bus?.arrivalCity}</p>
              <p className="text-sm text-muted">
                {bus.arrival} ({bus.arrivalDate})
              </p>
            </div>
          </div>
          <p className="text-xs font-medium mt-2 text-destructive">
            *Trip time may delay due to traffic
          </p>
        </div>

        <p className="text-sm mb-2 bg-primary/50 py-2 text-center rounded mt-2">
          Maximum 4 seats can be selected.
        </p>

        {/* Seat Legend */}
        <div className="grid grid-cols-3 justify-between py-2 mb-2 ">
          <div className="flex gap-2 items-center">
            <p className="h-4 w-4 border rounded"></p>
            <p className="text-sm">Available</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="h-4 w-4 border rounded bg-gray-300"></p>
            <p className="text-sm">Sold</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="h-4 w-4 border bg-primary rounded"></p>
            <p className="text-sm">Selected</p>
          </div>
        </div>

        {/* Seat Layout */}
        <div className="border py-4 px-16 rounded-md">
          {seats.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-between items-center gap-8 mb-2"
            >
              {/* Left single seat */}
              <button
                onClick={() => toggleSeat(row[0])}
                className={`w-12 h-12 rounded-lg text-sm font-medium border flex items-center justify-center transition
                    ${
                      soldSeats.includes(row[0])
                        ? "bg-gray-300 cursor-not-allowed text-gray-500"
                        : selectedSeats.includes(row[0])
                        ? "bg-primary text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
              >
                {row[0]}
              </button>

              {/* Right double seats */}
              <div className="flex gap-3">
                {row.slice(1).map((seat) => (
                  <button
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    className={`w-12 h-12 rounded-lg text-sm font-medium border flex items-center justify-center transition
                        ${
                          soldSeats.includes(seat)
                            ? "bg-gray-300 cursor-not-allowed text-gray-500"
                            : selectedSeats.includes(seat)
                            ? "bg-primary text-white"
                            : "bg-white hover:bg-gray-100"
                        }`}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="sticky bottom-0 left-0 w-full bg-white shadow-2xl shadow-primary p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium">
            {selectedSeats.length} ticket(s) selected
          </p>
          <p className="text-sm font-semibold">BDT 0</p>
        </div>
        <Button
          disabled={selectedSeats.length === 0}
          className="bg-primary text-white w-full"
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default Seats;
