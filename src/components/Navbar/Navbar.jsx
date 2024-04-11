import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';


function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className='nav-logo' />
      <ul className='nav-list'>
        <li className='nav-item'>Lorem</li>
        <li className='nav-item'>Ipsum</li>
        <li className='nav-item'>Dolor</li>
      </ul>
    </nav>
  );
}

export default Navbar;