import React from "react";
import '../Styles/Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header id='head'>
            <Link to='/'><h1 id='siteTitle'>The Bankers</h1></Link>

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