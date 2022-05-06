import React from "react";
import '../Styles/Header.css';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';

function Header() {
    return(
        <header id='head'>
            <Link to='/'><img src={Logo} width='140px' height='100px' /></Link>

            <nav>
                <ul id='navBar'>
                    <li>Personal</li>
                    <li>Commercial</li>
                    <li>Business</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;