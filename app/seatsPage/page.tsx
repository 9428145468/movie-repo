"use client"
import React, { useState } from "react";
import Link from "next/link";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [ticketCount, setTicketCount] = useState<number>(1);
  const [ticketPrice, setTicketPrice] = useState<number>(100);

  const toggleSeatSelection = (seatId: string) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        if (prevSelectedSeats.length < ticketCount) {
          return [...prevSelectedSeats, seatId];
        } else {
          return prevSelectedSeats;
        }
      }
    });
  };

  const renderSeat = (seatId: string, isDisabled: boolean) => {
    const isSelected = selectedSeats.includes(seatId);
    return (
      <div
        key={seatId}
        className={`w-10 h-10 m-1 flex items-center justify-center border rounded cursor-pointer ${
          isSelected ? "bg-teal-500 text-white" : "bg-stone-700 text-stone-300"
        } ${isDisabled ? "bg-stone-400 cursor-not-allowed" : ""}
        hover:border-teal-500 hover:bg-stone-600 hover:text-teal-500`}
        onClick={() => !isDisabled && toggleSeatSelection(seatId)}
      >
        {seatId.split("-")[1]}
      </div>
    );
  };

  const rows = [
    { label: "A", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { label: "B", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { label: "C", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { label: "D", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { label: "E", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { label: "F", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { label: "G", seats: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  ];

  const handleProceedToPayment = () => {
    window.location.href = "/src/app/payment/payment.tsx";
  };

  return (
    <div className="flex flex-col items-center py-4 bg-stone-900 text-white min-h-screen">
      <div className="w-full flex flex-row justify-between items-center ml-10 mr-20 mb-4 pl-10">
        <div className="basis-1/3 ml-5">
          <h1 className="text-xl text-stone-300 font-normal">Movie Title</h1>
          <p className="text-sm font-semibold text-stone-500">
            Cinema Multiplex: Surat
          </p>
        </div>
        <div className="flex basis-3/3 justify-end items-center w-full">
          <select
            className="p-2 border rounded text-xs bg-stone-700 text-stone-300 border-stone-600"
            value={ticketCount}
            onChange={(e) => setTicketCount(Number(e.target.value))}
          >
            <option value={1}>1 Ticket</option>
            <option value={2}>2 Tickets</option>
            <option value={3}>3 Tickets</option>
            <option value={4}>4 Tickets</option>
            <option value={5}>5 Tickets</option>
            <option value={6}>6 Tickets</option>
            <option value={7}>7 Tickets</option>
            <option value={8}>8 Tickets</option>
            <option value={9}>9 Tickets</option>
            <option value={10}>10 Tickets</option>
          </select>
        </div>
      </div>
      <div className="w-full bg-stone-800 flex justify-space-between items-center mb-4 py-2 ">
        <button className="px-4 py-2 ml-10 mr-2 border border-teal-500 rounded-lg text-teal-500 hover:bg-teal-500 hover:text-white bg-stone-700">
          03:00 PM
        </button>
        <button className="px-4 py-2 mr-2 border border-teal-500 rounded-lg text-teal-500 hover:bg-teal-500 hover:text-white bg-stone-700">
          05:00 PM
        </button>
        <button className="px-4 py-2 mr-2 border border-teal-500 rounded-lg text-teal-500 hover:bg-teal-500 hover:text-white bg-stone-700">
          07:00 PM
        </button>
      </div>

      <div className="flex flex-row w-full text-center mb-4">
        <p className="text-base basis-3/4 text-stone-400 font-normal">
          Rs. 160 Royal Sofa
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        {rows.map(({ label, seats }, rowIndex) => (
          <div key={rowIndex} className="flex items-center mb-2">
            <div className="mr-4 text-stone-400 font-normal">{label}</div>
            <div className="grid grid-cols-11 gap-1">
              {seats.map((seat, seatIndex) => {
                const seatId = `${label}-${seat}`;
                return renderSeat(seatId, seat === null);
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="glow-effect w-64 border-t-2 border-teal-400 h-2 bg-stone-700 mx-auto"></div>
        <p className="text-center mt-2 text-stone-400">Screen!</p>
      </div>
      {selectedSeats.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-stone-800 p-4 border-t-2 border-stone-600">
          <div className="flex justify-between items-center">
            <span>Total Amount: Rs. {selectedSeats.length * ticketPrice}</span>
            <Link href="/payment" legacyBehavior>
            <a className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
              <span>Proceed to Payment</span>
            </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatSelection;
