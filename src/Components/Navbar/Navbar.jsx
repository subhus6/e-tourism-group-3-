import React from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar=() => {
    return(
        <div className='navbar'>
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>E-Tourism</p>
          </div>
          <ul className="nav-menu">
            <li>Packages</li>
            <li>Flights</li>
            <li>Trains</li>
            <li>Bus</li>
          </ul>
          <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
          </div>
        </div>
    )
}
export default Navbar