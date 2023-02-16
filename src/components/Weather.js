import React from "react";
import { CardToday } from "./CardToday";
import { CardDay } from "./CardDay";

export const Weather = ({ weather }) => {
  return (
    <div className="p-5 my-10 bg-blue-300 border border-slate-300 text-center w-full grid grid-cols-3 shadow-md rounded-md">
      <CardToday {...weather} />
      <div className="col-span-2">
        <ul className="grid grid-cols-4 gap-3">
          {weather.daily.map((day) => (
            <CardDay {...day} key={day.date} />
          ))}
        </ul>
      </div>
    </div>
  );
};
