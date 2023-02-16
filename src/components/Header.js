import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="py-2 border-b border-slate-300 flex justify-between bg-white">
      <img src={Logo} alt="Reservamos" className="ml-3" />
      <ul className="flex">
        <li className="mr-3 px-3 py-2 font-bold">
          <Link to="/">Inicio</Link>
        </li>
        <li className="mr-3 px-3 py-2 font-bold">
          <Link to="/history">Historial</Link>
        </li>
      </ul>
    </div>
  );
};
