import React from 'react';
import './Header.css';
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="" /></Link>
            
            <div>
                <Link to="/">Products</Link>
                <Link to="/checkout">CheckOut</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;