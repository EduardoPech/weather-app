import React from "react";
import formatDate from "../utils/formatDate";
import formatTemp from "../utils/formatTemp";

export const CardDay = ({ date, weather, min, max }) => {
  return (
    <li
      className="flex justify-between items-center p-3 md:block bg-blue-400 shadow rounded-md"
      key={date}
    >
      <span className="font-bold capitalize w-20">{formatDate(date)}</span>
      <img
        className="mx-auto"
        src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
        alt="Clima"
      />
      <div className="flex justify-center items-center">
        <span className="font-bold mr-3">{formatTemp(min)}</span>
        <div className="w-10 md:w-28 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full h-2.5 relative flex items-center">
          <div
            className="from-yellow-500 to-red-500 h-2.5"
            style={{ width: "100%" }}
          ></div>
        </div>
        <span className="font-bold ml-3">{formatTemp(max)}</span>
      </div>
    </li>
  );
};
