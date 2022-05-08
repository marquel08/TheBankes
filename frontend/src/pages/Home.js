import React from "react";
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <>
            <div id='header2'>
                <ul>
                    <li>Credit Cards</li> |
                    <li>Home Loans</li> |
                    <li>Investment</li>
                </ul>
            </div>

            <div id='homeBody'>
                <div id='loginSection'>
                    <h2>LOGIN</h2>
                    <br />
                    <form id='loginForm'>
                        <span class='loginIcon'><FontAwesomeIcon icon={faUser} /> &nbsp;</span> <input type='text' id='userID' placeholder='User ID' required />
                        <br /><br />
                        <span class='loginIcon'><FontAwesomeIcon icon={faKey} /> &nbsp;</span> <input type='password' id='password' placeholder='Password' required />
                        <br /><br />
                        <input type='submit' id='submitBtn' value='Sign In' onSubmit={''} />
                    </form>
                    <br />
                    <Link to='/signup'>Not enrolled? Sign up now →</Link>
                </div>

                <div id='homeBG'>
                    <div className='blurbHome'>
                        <h1>Bank the right way at The Bankers.</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet, ex vim eius fierent definitiones. Ne aeque utroque accusam eos, duo libris everti signiferumque at, et erant accusamus est. Mei omittam theophrastus ut, volumus maiestatis mei ea. Nec ut ubique ignota torquatos. Nec te menandri deseruisse, autem illum persius quo no. Tota legere alterum in eum, summo patrioque complectitur vis ne, eu movet graeci sea. His soluta graece eirmod id.</p>
                        <br />
                        <p>No qui minim ludus persequeris, no ponderum omittantur est, vim ad impedit civibus. Aeterno impedit iudicabit his ad. Ut dolore accommodare sit, est wisi inimicus te, nam duis dicant convenire in. In sit aeque nihil scriptorem, ne vel offendit oportere constituam. Vis paulo definiebas id. Qui no melius incorrupte.</p>
                        <br />
                        <p>Sit ut illum falli philosophia, his elit rebum cu. Ius mundi percipit scribentur te, ne sale scripta qui, mei at integre similique. In vel consequat eloquentiam dissentiunt, te pri causae accusamus, mea ferri nobis at. Commodo elaboraret has at, ludus veniam eirmod pri ea.</p>
                        <br />
                        <p>Erat dicit ea vix. Te error possim adipisci pri. Eum persecuti necessitatibus at, vivendum antiopam et his, nec cu dissentiet suscipiantur. In mel oblique incorrupte. Sit ex aperiam alienum expetendis. Pri dico probo fugit ne.</p>
                        <br />
                        <p>Mutat aliquid referrentur eu vel. Ex mea maiorum atomorum patrioque, an unum luptatum sea, vis id meliore democritum. Debet semper dolorem ei duo, his alia clita persius ad. Verear mandamus pro te, harum partiendo forensibus ea usu. Illud causae tibique has cu, an mel magna feugait, meis deleniti constituam nam cu.</p>
                    </div>
                </div>

                <br />
                <div className='blurbHome2'>
                    <h1>Choose what's right for you.</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet, ex vim eius fierent definitiones. Ne aeque utroque accusam eos, duo libris everti signiferumque at, et erant accusamus est. Mei omittam theophrastus ut, volumus maiestatis mei ea. Nec ut ubique ignota torquatos. Nec te menandri deseruisse, autem illum persius quo no. Tota legere alterum in eum, summo patrioque complectitur vis ne, eu movet graeci sea. His soluta graece eirmod id.</p>
                    <br />
                    <p>No qui minim ludus persequeris, no ponderum omittantur est, vim ad impedit civibus. Aeterno impedit iudicabit his ad. Ut dolore accommodare sit, est wisi inimicus te, nam duis dicant convenire in. In sit aeque nihil scriptorem, ne vel offendit oportere constituam. Vis paulo definiebas id. Qui no melius incorrupte.</p>
                    <br />
                    <p>Sit ut illum falli philosophia, his elit rebum cu. Ius mundi percipit scribentur te, ne sale scripta qui, mei at integre similique. In vel consequat eloquentiam dissentiunt, te pri causae accusamus, mea ferri nobis at. Commodo elaboraret has at, ludus veniam eirmod pri ea.</p>
                    <br />
                    <p>Erat dicit ea vix. Te error possim adipisci pri. Eum persecuti necessitatibus at, vivendum antiopam et his, nec cu dissentiet suscipiantur. In mel oblique incorrupte. Sit ex aperiam alienum expetendis. Pri dico probo fugit ne.</p>
                    <br />
                    <p>Mutat aliquid referrentur eu vel. Ex mea maiorum atomorum patrioque, an unum luptatum sea, vis id meliore democritum. Debet semper dolorem ei duo, his alia clita persius ad. Verear mandamus pro te, harum partiendo forensibus ea usu. Illud causae tibique has cu, an mel magna feugait, meis deleniti constituam nam cu.</p>
                </div>
            </div>
        </>
    )
}

export default Home;