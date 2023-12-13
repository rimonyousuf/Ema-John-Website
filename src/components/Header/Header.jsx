import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg' 
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <nav>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;