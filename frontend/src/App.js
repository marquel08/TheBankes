import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from './axios';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Admin from './pages/AdminPage';

import Personal from './pagesX/Personal';
import Business from './pagesX/Business';
import Commercial from './pagesX/Commercial';
import ContactUs from './pagesX/ContactUs';
import CreditCards from './pagesX/CreditCards';
import HomeLoans from './pagesX/HomeLoans';
import Investment from './pagesX/Investment';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/business' element={<Business />} />
          <Route path='/commercial' element={<Commercial />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/creditcards' element={<CreditCards />} />
          <Route path='/homeloans' element={<HomeLoans />} />
          <Route path='/investment' element={<Investment />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
