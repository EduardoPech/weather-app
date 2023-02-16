import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../components/Header";
import { Weather } from "../components/Weather";
import { useDispatch } from "react-redux";
import { resetWeather } from "../store/weatherSlice";

export const History = () => {
  const dispatch = useDispatch();
  const listWeather = useSelector((state) => state.weather.listWeather);

  return (
    <div>
      <Header />
      <div className="my-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          Historial de búsquedas
        </h1>
        <p className="text-xl font-light">Los lugares que has buscado</p>
      </div>
      <div className="px-5">
        {listWeather.length > 0 && (
          <div className="text-center">
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-md"
              onClick={() => dispatch(resetWeather())}
            >
              Limpiar historial
            </button>
          </div>
        )}
        {listWeather.map((weather) => (
          <Weather weather={weather} key={weather.city} className="mb-5" />
        ))}

        {!listWeather.length && (
          <div className="text-center">
            <p className="text-2xl font-light">
              No has buscado ningún lugar aún
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
