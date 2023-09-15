import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavLink>
        <img  className="h-14 w-14" src="../public/img/atomo.png"></img>
        <h2 className="text-2xl font-bold text-black"></h2>
        </NavLink>
      <li><NavLink to='/' className='text-black font-bold text-2xl'>Inicio</NavLink></li>
    </header>
  );
};

export default Header;
