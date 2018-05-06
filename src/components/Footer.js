import React from 'react';
import '../styles/Footer.css'

const Footer = (props) => (
  <div className="footer">
    <div className="footerLeft">
      <span className="footerLeft__text">
        FOLLOW SPACEX
      </span>
      <span className="footerLeft__line">
        |
      </span>
      <button className="buttonSocial">TWITTER</button>
      <button className="buttonSocial">YOUTUBE</button>
      <button className="buttonSocial">FLICKR</button>
      <button className="buttonSocial">INSTAGRAM</button>
    </div>
    <div className="footerRight">
      <span className="footerRight__companyName">
        2018 SPACE EXPLORATION TECHNOLOGIES CORP.
      </span>
    </div>
  </div>

);

export default Footer;
