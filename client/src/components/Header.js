import React from 'react';
import '../stylesheet/header.scss';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header--logo' src={Logo} alt='MadEventsLogo' />
      </Link>
    </header>
  );
}

export default Header;
