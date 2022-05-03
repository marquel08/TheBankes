import React from "react";
import {Link} from "react-router-dom"

function MainPage () {
  return (
    <>
     <nav>
     <div className="HeaderPages"> </div>
        
 
     <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Transaction</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Transfer Activity</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contacts</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="./Home">Home</a>
  </li>
</ul>
 
  </nav>


 
    
    
    </>
  );
};

export default MainPage;