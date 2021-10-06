import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <div className="header__logo">
        <img src="" alt="logo" />
        <NavLink to="#">Bougies</NavLink>
        <NavLink to="#">Mon Histoire</NavLink>
      </div>
      <div className="header__user">
      <NavLink to="#">Mon Compte</NavLink>
      <img src="" alt="panier"/>

      </div>
    </header>
  );
}

export default Header;