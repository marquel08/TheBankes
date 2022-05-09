import React from "react";
import img1 from '../assets/personal1.png';
import img2 from '../assets/personal2.png';
import '../stylesX/pagesX.css';

function Personal() {
    return (
        <>
        <div className="card">
            <div className="imgBox">
                <img src={img1} width='100%' height='100%'/>
            </div>
            <div className="cardBox">
                <h1 className="cardTitle">Free Checking Account</h1>
                <br/>
                <p>No hidden fees, no minimum balance!</p>
                <br/>
                <p>Get started with every convenience you need from a checking account. The Bankers gives you a solid financial foundation including a The Bankers Visa® Debit Card, free banking with online bill pay, eStatements, and mobile banking with checking deposits.</p>
                <br/>
                <p>You can also choose from Apple Pay®, Google Pay®, and Samsung Pay™.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, ex vim eius fierent definitiones. Ne aeque utroque accusam eos, duo libris everti signiferumque at, et erant accusamus est. Mei omittam theophrastus ut, volumus maiestatis mei ea. Nec ut ubique ignota torquatos. Nec te menandri deseruisse, autem illum persius quo no. Tota legere alterum in eum, summo patrioque complectitur vis ne, eu movet graeci sea. His soluta graece eirmod id.</p>
                <br/>
                <p>No qui minim ludus persequeris, no ponderum omittantur est, vim ad impedit civibus. Aeterno impedit iudicabit his ad. Ut dolore accommodare sit, est wisi inimicus te, nam duis dicant convenire in. In sit aeque nihil scriptorem, ne vel offendit oportere constituam. Vis paulo definiebas id. Qui no melius incorrupte.</p>
                <br/>
                <p>Sit ut illum falli philosophia, his elit rebum cu. Ius mundi percipit scribentur te, ne sale scripta qui, mei at integre similique. In vel consequat eloquentiam dissentiunt, te pri causae accusamus, mea ferri nobis at. Commodo elaboraret has at, ludus veniam eirmod pri ea.</p>

            </div>
        </div>
        
        <div className="clearBoth"></div>

        <div className="card">
            <div className="imgBox">
                <img src={img2} width='100%' height='100%'/>
            </div>
            <div className="cardBox">
                <h1 className="cardTitle">Personal Savings Account</h1>
                <br/>
                <p>Personal savings accounts from The Bankers are designed to help you meet your financial goals in short and long term.</p>
                <br/>
                <p>Our flexible options, supported by outstanding customer service, make it simple to set up and access your funds as they grow.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, ex vim eius fierent definitiones. Ne aeque utroque accusam eos, duo libris everti signiferumque at, et erant accusamus est. Mei omittam theophrastus ut, volumus maiestatis mei ea. Nec ut ubique ignota torquatos. Nec te menandri deseruisse, autem illum persius quo no. Tota legere alterum in eum, summo patrioque complectitur vis ne, eu movet graeci sea. His soluta graece eirmod id.</p>
                <br/>
                <p>No qui minim ludus persequeris, no ponderum omittantur est, vim ad impedit civibus. Aeterno impedit iudicabit his ad. Ut dolore accommodare sit, est wisi inimicus te, nam duis dicant convenire in. In sit aeque nihil scriptorem, ne vel offendit oportere constituam. Vis paulo definiebas id. Qui no melius incorrupte.</p>
                <br/>
                <p>Sit ut illum falli philosophia, his elit rebum cu. Ius mundi percipit scribentur te, ne sale scripta qui, mei at integre similique. In vel consequat eloquentiam dissentiunt, te pri causae accusamus, mea ferri nobis at. Commodo elaboraret has at, ludus veniam eirmod pri ea.</p>

            </div>
        </div>
        </>
    )
}

export default Personal;