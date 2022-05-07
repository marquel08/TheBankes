
import '../Styles/business.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../assets/business.png"
import image1 from "../assets/buisness.png"

function Business(){
    return (
<>

<div class="row">

  <div class="col-sm-6">
  
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-header">Bankers Free Business Checkings</h5>
        <p class="card-text">
        Manage your money with convenience and flexibility.<br/>
        For value and flexibility with no fees,<br/>
        Bankers Free Business Checking combines<br/>
        the most requested business<br/>
        banking features for your convenience</p>
        <img src={image} class="card-img-top"  alt="..."/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-header">Bankers Free Business Savings</h5>
        
        <p class="card-text">
        with Bankers earn more for your business.<br/>
        Built for convenience and supported by superior<br/>
        customer service, Bankers Business Savings accounts<br/>
         offer competitive features to meet the needs of your business today <br/>
         – and the flexibility to grow with it tomorrow.<br/>


        </p>
        <img src={image1} class="card-img-top"  alt="..."/>
      </div>  
    </div>
  </div>

 
</div>


</>
    );
}

export default Business;