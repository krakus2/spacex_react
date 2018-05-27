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
      <a href="https://twitter.com/spacex" target="_blank" className="buttonSocial">TWITTER</a>
      <a href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA" target="_blank" className="buttonSocial">YOUTUBE</a>
      <a href="https://www.flickr.com/photos/spacex/" target="_blank" className="buttonSocial">FLICKR</a>
      <a href="https://www.instagram.com/spacex/?hl=pl" target="_blank" className="buttonSocial">INSTAGRAM</a>
    </div>
    <div className="footerRight">
      <span className="footerRight__companyName">
        2018 SPACE EXPLORATION TECHNOLOGIES CORP.
      </span>
    </div>
  </div>

);

export default Footer;
