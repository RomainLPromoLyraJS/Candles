import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="" alt="logo" />
        <NavLink className="header__link" to="#">Bougies</NavLink>
        <NavLink className="header__link" to="#">Mon Histoire</NavLink>
      </div>
      <div className="header__user">
        <NavLink className="header__user__link" to="#">Mon Compte</NavLink>
        <img className="header__user__img" src="" alt="panier"/>
      </div>
    </header>
  );
}

export default Header;