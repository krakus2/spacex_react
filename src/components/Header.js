import React from 'react';
import space_x_logo from '../assets/space_x_logo_bw_centered.svg';
import arrow_pointer from '../assets/arrow_pointer.svg';
import '../styles/Header.css'

const Header = (props) => (
  <div className="header">
    {/* <svg className="icon">
      <use xlinkHref={space_x_logo}></use>
    </svg>; */}
    <button className="header__backButton">
      <img  className="header__backButton__img" src={arrow_pointer} alt="spacex"/>
      <div className="header__backButton__rectangle"></div>
      <span className="header__backButton__text">GO BACK</span>
    </button>
    <img  className="header__img" src={space_x_logo} alt="spacex"/>
  </div>
);

export default Header;
