import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut}= useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then(result =>{})
        .catch(error => console.error(error));
    }
    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="" /></Link>
            
            <div>
                <Link to="/">Products</Link>
                <Link to="/checkout">CheckOut</Link>
                
                
                {
                    user && <span className='text-white'>{user.email}
                    <button className='margin-left' onClick={handleLogOut}>Sign out</button></span>
                    || <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;