// src/components/header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import accountIconSvg from '../../assets/icons/VectorAccountAlert.svg';
import searchIconSvg from '../../assets/icons/VectorSearch.svg';
import heartIconSvg from '../../assets/icons/VectorHeart.svg';
import cartIconSvg from '../../assets/icons/VectorCartShop.svg';
import Logo from '../../assets/icons/VectorLogo.svg'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Furniro" />
          <h1>Furniro</h1>
        </Link>
        <nav className="navigation">
          <ul className='icon'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="icons">
          <a href="#"><img src={accountIconSvg} alt="Icon account" /></a>
          <a href="#"><img src={searchIconSvg} alt="Icon search" /></a>
          <a href="#"><img src={heartIconSvg} alt="Icon heart" /></a>
          <a href="#"><img src={cartIconSvg} alt="Icon cart" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
