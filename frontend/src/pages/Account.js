import React from "react";
import '../Styles/Account.css';
import {Link} from 'react-router-dom';

function Account() {
    return(
        <>
        <div id='headerLogin'>
            <ul>
                <li>Transfer Money </li> |
                <li>Pay Bills</li> |
                <li>Close Account</li> |
                <Link to='/'><li>Logout</li></Link>
            </ul>
        </div>
        <div id='accBody'>
            <h1 id='welcomeMsg'>Welcome back, Firstname Lastname.</h1>

            <div className='aBox'>
                <h1 className="accTitle">CHECKINGS</h1>
                <hr/>
                <br/>
                <span className='balanceLabel'>BALANCE: $0.00</span> <button className="accBtn">Withdraw Money</button>
            </div>

            <br/>

            <div className='aBox'>
                <h1 className="accTitle">SAVINGS</h1>
                <hr/>
                <br/>
                <span className='balanceLabel'>BALANCE: $0.00</span> <button className="accBtn">Withdraw Money</button>
            </div>

            <br/> <br/> <br/>

            <div className='aBox'>
                <h1 className="accTitle">Recent Activity</h1>
                <hr/>
                <br/>
                TRANSACTION HISTORY HERE
            </div>
            <br/> <br/>
        </div>
        </>
    )
}

export default Account;