import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="" alt="LOGO" />
        <NavLink className="header__link" to="#">Bougies</NavLink>
        <NavLink className="header__link" to="#">Mon Histoire</NavLink>
      </div>
      <div className="header__user">
        <NavLink className="header__user__link" to="#">Mon Compte</NavLink>
        <BiShoppingBag />
      </div>
    </header>
  );
}

export default Header;