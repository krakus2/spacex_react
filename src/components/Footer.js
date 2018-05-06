import React from 'react';
import '../styles/Footer.css'

const Footer = (props) => (
  <div className="footer">
    <div className="footer__footerLeft">
      <span className="footer__footerLeft__text">
        FOLLOW SPACEX
      </span>
      <span className="footer__footerLeft__line">
        |
      </span>
      <button className="footer__footerLeft__button">TWITTER</button>
      <button className="footer__footerLeft__button">YOUTUBE</button>
      <button className="footer__footerLeft__button">FLICKR</button>
      <button className="footer__footerLeft__button">INSTAGRAM</button>
    </div>
    <div className="footer__footerRight">
      <span className="footer__footerRight__companyName">
        2018 SPACE EXPLORATION TECHNOLOGIES CORP.
      </span>
    </div>
  </div>

);

export default Footer;
