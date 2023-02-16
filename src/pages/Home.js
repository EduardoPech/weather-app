import React, { useState } from "react";
import { Search } from "../components/Search";
import { Weather } from "../components/Weather";
import { Loading } from "../components/Loading";
import { City } from "../components/City";
import { Hero } from "../components/Hero";
import listCities from "../utils/listCities";
import { Header } from "../components/Header";

export const Home = () => {
  const [weather, setWeather] = useState();
  const [loadingResult, setLoadingResult] = useState(false);
  const [city, setCity] = useState();

  return (
    <div className="bg-slate-100 h-screen">
      <Header />
      <div className="flex flex-col">
        <Hero />
        <div className="p-5">
          <Search
            setWeather={setWeather}
            setLoadingResult={setLoadingResult}
            city={city}
            setCity={setCity}
          />
        </div>
      </div>
      {loadingResult && (
        <div className="p-10 my-10">
          <Loading />
        </div>
      )}
      <div className="px-5">{weather && <Weather weather={weather} />}</div>
      {!weather && !loadingResult && (
        <div className="my-14">
          <h3 className="font-bold text-2xl mx-5 mb-5">
            Destinos más visitados
          </h3>
          <div className="grid grid-cols-5 gap-3 mx-5">
            {listCities.map((city) => (
              <City {...city} key={city.name} setCity={setCity} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
