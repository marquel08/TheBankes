import { Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";


function Login() {
    return (

        <div>


            <nav>

                <Link to="/Home"> Home</Link>

            </nav>



            <form>
                <h3 >Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" formAction="/MainPage" className="btn btn-primary btn-block">Submit</button>
            </form>
            <Footer />
        </div>
    )
}

export default Login;