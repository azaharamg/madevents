import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={Logo} alt='MadEventsLogo' />
      </Link>
    </header>
  );
}

export default Header;
