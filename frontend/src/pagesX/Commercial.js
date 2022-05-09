import React from "react";
import img1 from '../assets/commercial1.jpeg';
import img2 from '../assets/commercial2.jpg';
import '../stylesX/pagesX.css';

function Commercial() {
    return (
        <>
        <div className="card">
            <div className="imgBox">
                <img src={img1} width='100%' height='100%'/>
            </div>
            <div className="cardBox">
                <h1 className="cardTitle">Commercial Banking</h1>
                <br/>
                <p>The Bankers commercial banking provides market-leading solutions, industry expertise, and insights to help enable our clients' growth and success, enhancing the communities we serve.</p>
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
                <h1 className="cardTitle">Financial Support</h1>
                <br/>
                <p>Keep pace with change and construct a financial strategy to meet your organization's goals.</p>
                <br/>
                <p>From multi-family, industrial, office, hospitality, or retail, we can help you meet the challenges of commercial property development, investment, and management.</p>
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

export default Commercial;