import React from "react";
import '../stylesX/CreditCards.css';
import img1 from '../assets/card1.png';
import img2 from '../assets/card2.png';
import img3 from '../assets/card3.png';

function CreditCards() {
    return(
        <>
        <div id='creditCards'>
            <h1 id='title'>Our Most Popular Cards</h1>
            <br/>
            <div className="creditCardInfo">
                <img src={img1} height='200px' width='300px'/>
                <br/>
                <h3>Basic Debit</h3>
                <br/>
                <p>Lorem ipsum dolor sit amet, ex vim eius fierent definitiones. Ne aeque utroque accusam eos, duo libris everti signiferumque at, et erant accusamus est. Mei omittam theophrastus ut, volumus maiestatis mei ea. Nec ut ubique ignota torquatos. Nec te menandri deseruisse, autem illum persius quo no. Tota legere alterum in eum, summo patrioque complectitur vis ne, eu movet graeci sea. His soluta graece eirmod id.</p>
            </div>

            <div className="creditCardInfo">
                <img src={img2} height='200px' width='300px'/>
                <br/>
                <h3>Business Debit</h3>
                <br/>
                <p>Lorem ipsum dolor sit amet, ex vim eius fierent definitiones. Ne aeque utroque accusam eos, duo libris everti signiferumque at, et erant accusamus est. Mei omittam theophrastus ut, volumus maiestatis mei ea. Nec ut ubique ignota torquatos. Nec te menandri deseruisse, autem illum persius quo no. Tota legere alterum in eum, summo patrioque complectitur vis ne, eu movet graeci sea. His soluta graece eirmod id.</p>
            </div>

            <div className="creditCardInfo">
                <img src={img3} height='200px' width='300px'/>
                <br/>
                <h3>Premium Debit</h3>
                <br/>
                <p>Lorem ipsum dolor sit amet, ex vim eius fierent definitiones. Ne aeque utroque accusam eos, duo libris everti signiferumque at, et erant accusamus est. Mei omittam theophrastus ut, volumus maiestatis mei ea. Nec ut ubique ignota torquatos. Nec te menandri deseruisse, autem illum persius quo no. Tota legere alterum in eum, summo patrioque complectitur vis ne, eu movet graeci sea. His soluta graece eirmod id.</p>
            </div>
        </div>

        <div className="clearBoth"></div>
        <br/><br/>

        <div id='creditText'>
            <h1>Credit Cards, the smart way!</h1>
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
        </>
    )
}

export default CreditCards;