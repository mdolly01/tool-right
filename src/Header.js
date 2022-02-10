import React from 'react';
import './Header.css';
import logo from './logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/toolright'>
                <img
                    className="header__icon"
                    src={logo}
                    alt="Tool Right Logo"
                />
            </Link>
        <div className='header__center'>
            <input type="text" />
            <Link to='/search'>
            <SearchIcon />
            </Link>
        </div>
        <div className='header__right'>
            <Link to='/tooltycoon'>
            <p>Become a{<br/>} Tool Tycoon</p>
            </Link>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Link to='/login'>
            <AccountCircleIcon />
            </Link>
        </div>

        </div>
    )
}

export default Header; 