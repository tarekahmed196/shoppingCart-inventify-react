import React from 'react';
import './Header.css';
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img className='w-24 h-16' src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/checkout">CheckOut</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;