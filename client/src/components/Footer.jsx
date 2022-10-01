import React from 'react';
import logo from '../img/dawaLogo.png';
const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt='logo' />

      <span>
        Made with The infamous <b>React.js</b>
      </span>
    </div>
  );
};

export default Footer;
