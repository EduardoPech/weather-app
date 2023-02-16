import axios from "axios";

const apiReservamos = axios.create({
  baseURL: process.env.REACT_APP_RESERVAMOS_URL,
});

export const getPlaces = async (query) => {
  const { data } = await apiReservamos.get("/places", {
    params: {
      q: query,
    },
  });
  return data;
};

const apiWeather = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_URL,
});

export const getWeather = async ({ lat, lon }) => {
  const { data } = await apiWeather.get("/onecall", {
    params: {
      lat,
      lon,
      exclude: "hourly",
      units: "metric",
      appid: process.env.REACT_APP_WEATHER_KEY,
      lang: "es",
    },
  });
  return data;
};

export default apiReservamos;
