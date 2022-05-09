import React from "react";
import '../stylesX/HomeLoans.css';
import img1 from '../assets/house.png';

function HomeLoans() {
    return( 
        <div id='homeloansBody'>
            <div id='loanBanner'>
                <h1 id='loanTitle'>Your homebuying journey begins here.</h1>
                <h2>From finding your new home to making it yours, we've got you covered.</h2>
                <br/><br/>
                <img src={img1} width='50%' height='50%'/>
            </div>
            <br/><br/>

            <div id='loanBody'>
                <h1 id='loanBodyTitle'>As easy as 1-2-3!</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet, ex vim eius fierent definitiones. Ne aeque utroque accusam eos, duo libris everti signiferumque at, et erant accusamus est. Mei omittam theophrastus ut, volumus maiestatis mei ea. Nec ut ubique ignota torquatos. Nec te menandri deseruisse, autem illum persius quo no. Tota legere alterum in eum, summo patrioque complectitur vis ne, eu movet graeci sea. His soluta graece eirmod id.</p>
                    <br/>
                    <p>No qui minim ludus persequeris, no ponderum omittantur est, vim ad impedit civibus. Aeterno impedit iudicabit his ad. Ut dolore accommodare sit, est wisi inimicus te, nam duis dicant convenire in. In sit aeque nihil scriptorem, ne vel offendit oportere constituam. Vis paulo definiebas id. Qui no melius incorrupte.</p>
                    <br/>
                    <p>Sit ut illum falli philosophia, his elit rebum cu. Ius mundi percipit scribentur te, ne sale scripta qui, mei at integre similique. In vel consequat eloquentiam dissentiunt, te pri causae accusamus, mea ferri nobis at. Commodo elaboraret has at, ludus veniam eirmod pri ea.</p>
                    <br/>
                    <p>Erat dicit ea vix. Te error possim adipisci pri. Eum persecuti necessitatibus at, vivendum antiopam et his, nec cu dissentiet suscipiantur. In mel oblique incorrupte. Sit ex aperiam alienum expetendis. Pri dico probo fugit ne.</p>
                    <br/>
                    <p>Mutat aliquid referrentur eu vel. Ex mea maiorum atomorum patrioque, an unum luptatum sea, vis id meliore democritum. Debet semper dolorem ei duo, his alia clita persius ad. Verear mandamus pro te, harum partiendo forensibus ea usu. Illud causae tibique has cu, an mel magna feugait, meis deleniti constituam nam cu.</p>
            </div>
        </div>
    )
}

export default HomeLoans;