import image from "../assets/commercial.png"
import image1 from "../assets/commercial1.png"
function Commercial(){
    return (
<>
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-header">Commercial Banking</h5>
        <p class="card-text">
        Bankers Commercial Banking provides<br/>
         market-leading solutions,<br/>
          industry expertise, and insights<br/>
           to help enable our clients' <br/>
           growth and success, enhancing <br/>
           the communities we serve.</p>
           <img src={image} class="card-img-top" alt="..."/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-header">Financial support to meet your commercial development needs</h5>
        <p class="card-text">
        Keep pace with change and construct<br/>
         a financial strategy to meet your <br/>
         organizational goals. From multi-family,<br/> 
         industrial or office, to hospitality or retail,<br/>
          we can help you meet the challenges of commercial<br/>
         property development, investment and management.<br/>

          </p>
          </div>
    </div>
  </div>
  
</div>

</>
    );
}

export default Commercial;