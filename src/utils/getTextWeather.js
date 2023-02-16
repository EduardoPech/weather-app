const getTextWeather = (weather) => {
  switch (weather) {
    case "Thunderstorm":
      return "Tormenta";
    case "Drizzle":
      return "Llovizna";
    case "Rain":
      return "Lluvia";
    case "Snow":
      return "Nieve";
    case "Clear":
      return "Despejado";
    case "Clouds":
      return "Nublado";
    case "Mist":
      return "Niebla";
    case "Smoke":
      return "Humo";
    case "Haze":
      return "Bruma";
    case "Dust":
      return "Polvo";
    case "Fog":
      return "Niebla";
    case "Sand":
      return "Arena";
    case "Ash":
      return "Ceniza";
    case "Squall":
      return "Ráfaga";
    case "Tornado":
      return "Tornado";
    default:
      return "Despejado";
  }
};

export default getTextWeather;
