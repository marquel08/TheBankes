import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Admin from './pages/AdminPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
