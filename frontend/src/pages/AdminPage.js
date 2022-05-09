import React from "react";
import '../Styles/AdminPage.css';
import {Link} from 'react-router-dom';

function AdminPage() {
    return(
        <div id='adminBody'>
            <div id='headerAdmin'>
            <ul>
                <Link to='/'><li>Logout</li></Link>
            </ul>
            </div>
            
            <h1 id='welcomeMsg'>Welcome back, Admin Name.</h1>
            <br/>
            

            <div className="bBox">
                <h1 id='actionLabel'>AVAILABLE ACTIONS</h1>
                <hr/>
                <br/>
                <button className="actBtn">Manage Users</button>
                &nbsp;
                <button className="actBtn">View all Transactions</button>
                &nbsp;
                <button className="actBtn">Send Overdraft Bill</button>
            </div>
            <br/><br/>
        </div>
    )
}

export default AdminPage;