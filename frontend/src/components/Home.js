import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MainPage from "./MainPage";
/**
 * Link is used to set the URL and keep track of brwosing history
 * Outlet - renders the current route selected
 * 
 * http://serveripaddress:portonwhichserverisrunning/resource
 */
function Home(){
    return (
        <>
        <Header>
       
            <nav>
          
            <ul>
                <li>

                    
                    <Link to="/SignUp"> Signup</Link>
                    <Link to="/AdminLogin"> AdminLogin</Link>
                    

                </li>
               
            </ul>
            </nav>
</Header>

            <form className="container">
                <h3>Sign In</h3>
              
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
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="./MainPage">password?</a>
                </p>

             
            </form>
           
  
        <Footer/>
        </>
    );
}


export default Home;