import React, {useState} from "react";
import '../Styles/Header.css';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function Header() {

    

    return(
        <>
        <header id='head'>
            <Link to='/'><img src={Logo} width='140px' height='100px' /></Link>

            <nav id='navMenu'>
                <ul id='navBar'>
                    <Link to='/personal'><li>Personal</li></Link>
                    <Link to='/commercial'><li>Commercial</li></Link>
                    <Link to='/business'><li>Business</li></Link>
                    <Link to='/contactus'><li>Contact Us</li></Link>
                </ul>
                <button id='burgerMenu'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </nav>
        </header>

       <div id='sideMenu'>
            <ul id='navBar2'>
                    <li>Personal</li>
                    <li>Commercial</li>
                    <li>Business</li>
                    <li>Contact Us</li>
                </ul>
        </div>
        </>
    )
}

export default Header;