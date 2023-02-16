import React from "react";
import getTextWeather from "../utils/getTextWeather";
import getIconWeather from "../utils/getIconWeather";
import formatTemp from "../utils/formatTemp";

export const CardToday = ({ city, current }) => {
  return (
    <div className="text-center border-r border-slate-200 mr-3">
      <img
        className="mx-auto"
        src={getIconWeather(current.weather.icon, "large")}
        alt="Clima"
      />
      <h2 className="font-bold text-lg mb-3">{city}</h2>
      <p className="text-5xl mb-3">{formatTemp(current.temp)}</p>
      <p className="font-bold text-lg">{getTextWeather(current.main)}</p>
    </div>
  );
};
