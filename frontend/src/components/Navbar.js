import React  from 'react'
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"


function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
      <h3 className="logo"> Logo </h3> 

      <ul className='nav-links'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/AboutUs'><li>About Us</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
      </ul>
      </div>
    </nav>
    
  );
}
export default Navbar;
