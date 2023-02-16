import React, { useState, useEffect, useCallback } from "react";
import { getPlaces, getWeather } from "../services/api";
import { Loading } from "./Loading";
import { useDispatch } from "react-redux";
import { addWeather } from "../store/weatherSlice";

export const Search = ({ setWeather, setLoadingResult, city, setCity }) => {
  const [search, setSearch] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value.length > 2) {
      setLoading(true);
      const listPlaces = await getPlaces(value);
      const somePlaces = listPlaces.slice(0, 10);
      setPlaces(somePlaces);
      setLoading(false);
    } else {
      setPlaces([]);
      setWeather(null);
      setSelectedPlace(null);
    }
  };

  const handleWeather = useCallback(
    async (selected) => {
      setLoadingResult(true);
      const itemWeather = await getWeather(selected);
      const formatWeather = {
        city: selectedPlace.display || "Mérida",
        current: {
          temp: itemWeather.current.temp,
          weather: itemWeather.current.weather[0],
        },
        daily: itemWeather.daily.map((day) => ({
          date: day.dt,
          temp: day.temp.day,
          min: day.temp.min,
          max: day.temp.max,
          weather: day.weather[0],
        })),
      };
      setWeather(formatWeather);
      dispatch(addWeather(formatWeather));
      setLoadingResult(false);
    },
    [setWeather, setLoadingResult, selectedPlace, dispatch]
  );

  const handleSelect = (place) => {
    setSelectedPlace(place);
    setSearch(`${place.city_name}, ${place.display}`);
    setPlaces([]);
  };

  useEffect(() => {
    if (selectedPlace) {
      handleWeather({ lat: selectedPlace.lat, lon: selectedPlace.long });
    }
  }, [selectedPlace, handleWeather]);

  useEffect(() => {
    if (city) {
      handleWeather({ lat: city.lat, lon: city.lon });
      setSearch(`${city.display}, ${city.state}`);
      setSelectedPlace(city);
    }
  }, [city, handleWeather]);

  const handleClear = () => {
    setSearch("");
    setPlaces([]);
    setWeather(null);
    setSelectedPlace(null);
    setCity(null);
  };

  return (
    <div className="w-1/3 mx-auto">
      <div className="relative">
        <h3 className="text-center font-bold text-xl mb-5">
          ¿A donde quieres viajar?
        </h3>
        <div className="flex bg-white rounded-lg border border-slate-300">
          <label className="font-bold text-lg flex justify-center items-center mx-3 rounded-l-lg text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </label>
          <input
            className="pr-3 py-3 outline-none rounded-r-lg w-full"
            type="text"
            placeholder="Buscar"
            value={search || ""}
            onChange={handleChange}
            disabled={selectedPlace && true}
          />
          {search.length > 0 && selectedPlace && (
            <button className="text-red-400 mr-2" onClick={handleClear}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          )}
        </div>
        {loading && <Loading />}
        {places.length === 0 &&
          !loading &&
          search.length > 2 &&
          !selectedPlace && (
            <p className="absolute bg-gray-100 border border-slate-200 w-full z-10 text-center py-3">
              No se encontraron resultados
            </p>
          )}
        {places.length > 0 && !loading && (
          <ul className="absolute bg-gray-100 border border-slate-200 w-full z-10">
            {places.map((place) => (
              <li
                key={place.id}
                className="py-3 px-5 hover:bg-slate-200 cursor-pointer"
                onClick={() => handleSelect(place)}
              >
                <b>{place.city_name}</b>, {place.state} - {place.display}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
