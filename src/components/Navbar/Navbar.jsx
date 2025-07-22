import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo 4.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="" className='logo' />
      </Link>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'mobile-show' : ''}`}>
        <Link to='/' onClick={() => setMenuOpen(false)}><li>Home</li></Link>
        <Link to='/features' onClick={() => setMenuOpen(false)}><li>Features</li></Link>
        <Link to='/pricing' onClick={() => setMenuOpen(false)}><li>Pricing</li></Link>
        <Link to='/blog' onClick={() => setMenuOpen(false)}><li>Blog</li></Link>
      </ul>

      {/* Right Section: Currency + SignUp + Menu */}
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <Link to='/signup'>
          <button>
            Sign Up <img src={arrow_icon} alt="" />
          </button>
        </Link>

        {/* Hamburger now inside nav-right */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
