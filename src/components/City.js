import React from "react";

export const City = ({ name, lat, lon, display, state, setCity }) => {
  const handleClick = (name) => {
    setCity({ name, lat, lon, display, state });
  };

  return (
    <div
      className="w-full h-40 bg-cover bg-center cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="w-full h-40 flex justify-center items-center 
             bg-blue-400 backdrop-brightness-75 hover:bg-blue-500 transition-all duration-300"
      >
        <span className="text-white text-3xl w-1/2 text-center">{name}</span>
      </div>
    </div>
  );
};
