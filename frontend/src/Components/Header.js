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
                    
                    <li >
                    <a href="./Personal">Personal</a>
                   </li>
                    <li>
                    <a href="./Commercial">Commercial</a>
                    </li>
                    <li>
                    <a href="./Business">Business</a> 
                     </li>
                    <li>
                    <a href="./ContactUs">Contact Us</a> 
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;