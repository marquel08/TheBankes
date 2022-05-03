import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

function SignUp(){
    return(
  <div>
      
  <nav>
  <div className="HeaderPages">SignUp </div>
          <Link to="/Home"> Home</Link>
 
  </nav>
  

  <form className="container">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./Home">sign in?</a>
                </p>
            </form>
            <Footer/>
</div>


    )
}

export default SignUp;