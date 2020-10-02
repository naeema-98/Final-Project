import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
//import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Contactus from './screens/Contactus';
import Aboutus from './screens/Aboutus';
//import styled from 'styled-components';
import TooltipReact from "./Tooltip";
import logo from "./logo.png";


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        
      
        <header className="header">
          <div className="">
            <button className="brand-button" onClick={openMenu}>&#9776;</button>
            <Link to="/" ><img src={logo} alt="store" className="Logo" /></Link>
          </div>
          <div className="header-links">
          <a href="/cart" data-tip data-for="Your Cart"><span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span></a>
          <TooltipReact place="bottom" id="Your Cart"><span>Your Cart</span></TooltipReact>

          <a href="/cart" data-tip data-for="Your Points"><span><i class="fa fa-gem" aria-hidden="true"></i></span></a>
          <TooltipReact place="bottom" id="Your Points"><span>Your Points</span></TooltipReact>
          
          <a href="/cart" data-tip data-for="Notifications"><span><i class="fa fa-bell" aria-hidden="true"></i></span></a>
          <TooltipReact place="bottom" id="Notifications"><span>Your Notifications</span></TooltipReact>  
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin" style={{fontSize:25, fontWeight: "bold"}}>Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <div className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                    <Link to="/products">Products</Link>
                    </li>
                    
                  
                </div>
              </div>
            )}
          </div>
          
        </header>

        
        {/*<hr className="line"></hr>
         /*<NavBar />*/ }
        <aside className="sidebar">
          
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <h2 className="BBeta"> B & Beta</h2>
          <ul className="categories">
            <li>
              <Link to="/Aboutus" className="Links"><i class="far fa-address-card"></i>&nbsp;&nbsp;&nbsp;About Us</Link>
            </li>

            <li>
              <Link to="/contactus" className="Links "><i class="fab fa-staylinked"></i>&nbsp;&nbsp;&nbsp;Contact Us</Link>
            </li>
            </ul>
            <h3 class="BBeta">Categories</h3>
          
          <ul className="categories" >
            <li>
              <Link to="/category/Perfume" className="Links"><i class="fas fa-chess-queen"></i>&nbsp;&nbsp;&nbsp;Perfumes</Link>
            </li>
            <li>
              <Link to="/category/Watch" className="Links"><i class="fas fa-stopwatch"></i>&nbsp;&nbsp;&nbsp;Watches</Link>
            </li>

            <li>
              <Link to="/category/Watch" className="Links"><i class="far fa-star"></i>&nbsp;&nbsp;&nbsp;Wishlist</Link>
            </li>           
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/Contactus" component={Contactus} />
            <Route path="/Aboutus" component={Aboutus} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            {/* <Route path="/shipping" component={ShippingScreen} />  */}
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
