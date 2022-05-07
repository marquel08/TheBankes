import image from "../assets/Checking.png";
import photo from "../assets/saving.png";

function Personal(){
    return (
<>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={photo} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-header">Free Checking</h5>
        <p class="card-text">
           No Hidden Fees, No Minimum Balance <br/>
           Get started with every convenience you need<br/>
           from a checking account. Bankers Free Checking <br/>
           gives you a solid financial foundation, including<br/>
           a Bankers VISA® Debit Card, free online banking with <br/>
           bill pay, eStatements and mobile banking with check<br/>
           deposits. You can also choose from Apple Pay®,<br/>
           Google Pay® and Samsung Pay™.<br/>
            </p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-header">Personal Savings</h5>
        <p class="card-text">
        Personal savings accounts from<br/>
        Bankers Bank are designed to help<br/>
        you meet your financial goals in <br/>
        short and long term. Our flexible<br/>
        options, supported by outstanding <br/>
        customer service, make it simple <br/>
        to set up and access your funds <br/>
        so they can grow.
        </p>
      </div>
    </div>
  </div>
</div>




</>
    );
}

export default Personal;