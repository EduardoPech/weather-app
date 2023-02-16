const getIconWeather = (icon, size = "small") => {
  const sizeIcon = size === "small" ? "" : "@2x";
  return `${process.env.REACT_APP_WEATHER_ICON_URL}/${icon}${sizeIcon}.png`;
};

export default getIconWeather;
