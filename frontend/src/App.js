import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './components/Login';
//import UserRegistration from './UserRegistration';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin'
import SignUp from './components/SignUp';
import MainPage from './components/MainPage'
function App(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/AdminLogin" element={<AdminLogin />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/MainPage" element={<MainPage />} />
             

                
            </Routes>
        </BrowserRouter>
    );
}
export default App;