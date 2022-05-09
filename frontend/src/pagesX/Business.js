import React from "react";
import img1 from '../assets/business1.png';
import img2 from '../assets/business2.png';
import '../stylesX/pagesX.css';

function Business() {
    return (
        <>
        <div className="card">
            <div className="imgBox">
                <img src={img1} width='100%' height='100%'/>
            </div>
            <div className="cardBox">
                <h1 className="cardTitle">Free Business Checkings</h1>
                <br/>
                <p>Manage your money with convenience and flexibility.</p>
                <br/>
                <p>For value with no fees, The Bankers free business checking account combines the most requested business banking features for your convenience.</p>
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
                <h1 className="cardTitle">Free Business Savings</h1>
                <br/>
                <p>Earn more for your business! Built for convenience and supported by superior customer service, The Bankers business savings account offers competitive features to meet the needs of your business today and the flexibility to grow with it tomorrow..</p>
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

export default Business;