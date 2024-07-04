"use client"
import { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dates = [
  "Fri 21 Jun",
  "Sat 22 Jun",
  "Sun 23 Jun",
  "Mon 24 Jun",
  "Tue 25 Jun",
];
const showTimes = [
  {
    cinema: "cinema names, cinema place",
    times: ["08:00 AM", "01:30 PM", "05:55 PM", "11:00 PM"],
  },
];

const TheaterList = () => {
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  return (
    <div className="min-h-screen bg-stone-950 p-5 text-white mx-auto px-20">
      <h1 className="text-5xl font-light mb-5">Movie Title</h1>
      <hr className="my-4 border-stone-700" />
      <div className="flex justify-between space-x-5 mb-5">
        <div className="flex-1">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-lg ${
                selectedDate === date ? "bg-red-500 text-white" : "bg-stone-700 text-stone-300"
              } mr-2 mb-2`}
            >
              {date}
            </button>
          ))}
        </div>
        <div className="flex-1 flex justify-end space-x-2">
          <div className="flex-1">
            <Select>
              <SelectTrigger className="w-[180px] bg-stone-800 text-stone-300 border-stone-600">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent className="bg-stone-800 text-stone-300 border-stone-600">
                <SelectItem value="light">Hindi-2D</SelectItem>
                <SelectItem value="dark">Hindi-3D</SelectItem>
                <SelectItem value="system">English-2D</SelectItem>
                <SelectItem value="system">English-3D</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select>
              <SelectTrigger className="w-[180px] bg-stone-800 text-stone-300 border-stone-600">
                <SelectValue placeholder="Filter Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-stone-800 text-stone-300 border-stone-600">
                <SelectItem value="light">Low-High</SelectItem>
                <SelectItem value="dark">High-Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select>
              <SelectTrigger className="w-[180px] bg-stone-800 text-stone-300 border-stone-600">
                <SelectValue placeholder="Filter Show Timings" />
              </SelectTrigger>
              <SelectContent className="bg-stone-800 text-stone-300 border-stone-600">
                <SelectItem value="light">Morning</SelectItem>
                <SelectItem value="dark">Noon</SelectItem>
                <SelectItem value="system">Evening</SelectItem>
                <SelectItem value="system">Night</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <hr className="my-2 border-stone-700" />
      <div className="space-y-5">
        {showTimes.map((show) => (
          <div key={show.cinema} className="bg-stone-800 p-5 flex justify-between rounded-lg">
            <div className="flex-1">
              <h2 className="text-md font-normal mb-3 text-stone-300">{show.cinema}</h2>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap">
                {show.times.map((time) => (
                  <Link href="/seatsPage"
                    key={time}
                    
                    className="px-4 py-2 border border-stone-600 rounded-lg mr-2 mb-2 text-sm text-teal-500 hover:bg-teal-500 hover:text-white"
                  >
                    {time}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheaterList;
