import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AdminRegister from './Components/AdminRegister';
import AdminRegisterLogin from './Components/AdminRegisterLogin';
import About from './Components/About';
import Boys from './Components/Boys';
import Girls from './Components/Girls';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import AdminPage from './Components/Adminpage';
import { CartProvider } from './Components/CartContext';
import AgeGroup0To4 from './Components/AgeGroup0To4';
import AgeGroup4To10 from './Components/AgeGroup4To10';
import AgeGroup10Plus from './Components/AgeGroup10Plus';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [cartItemCount, setCartItemCount] = React.useState(0);

  const handleCartItemCountChange = (count) => {
    setCartItemCount(count);
  };

  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} cartItemCount={cartItemCount} />
          <Routes>
            <Route path="/" element={<Home handleCartItemCountChange={handleCartItemCountChange} isLoggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/about" element={<About />} />
            <Route path="/boys" element={<Boys handleCartItemCountChange={handleCartItemCountChange} isLoggedIn={loggedIn} />} />
            <Route path="/girls" element={<Girls handleCartItemCountChange={handleCartItemCountChange} isLoggedIn={loggedIn} />} />
            <Route path="/category/0-4-years" element={<AgeGroup0To4 handleCartItemCountChange={handleCartItemCountChange} isLoggedIn={loggedIn} />} />
            <Route path="/category/4-10-years" element={<AgeGroup4To10 handleCartItemCountChange={handleCartItemCountChange} isLoggedIn={loggedIn} />} />
            <Route path="/category/10-years" element={<AgeGroup10Plus handleCartItemCountChange={handleCartItemCountChange} isLoggedIn={loggedIn} />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />} />
            <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setUser={setUser} />} />
            <Route path="/admin-register" element={<AdminRegister setLoggedIn={setLoggedIn} setUser={setUser} />} />
            <Route path="/admin-register-login" element={<AdminRegisterLogin setLoggedIn={setLoggedIn} setUser={setUser} />} />
            <Route path="/profile" element={loggedIn ? <Profile user={user} setUser={setUser} /> : <Navigate to="/" replace />} />
            <Route path="/edit-profile" element={loggedIn ? <EditProfile setUser={setUser} /> : <Navigate to="/" replace />} />
            <Route path="/cart" element={<Cart handleCartItemCountChange={handleCartItemCountChange} />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin" element={loggedIn ? <AdminPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} /> : <Navigate to="/admin-register-login" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
