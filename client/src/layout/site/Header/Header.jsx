import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
  <nav>
    <div className="header_logo">
     <button className='bink'>BINK .</button>
     <button className='publish'>PUBLISHER</button>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">
      ☰
    </label>
    <ul className="menu ">
      <li>
      <div class="dropdown">
  <div  class="dropbtn">Pages</div>
  <div class="dropdown-content">
    <Link to="">Home</Link>
    <Link to="about">About </Link>
    <Link to="contact">Contact </Link>
    <Link to="blog">Blog </Link>
    <Link to="faq">FAQ </Link>
    <Link to="/detail/:id">Detail </Link>
  </div>
  
</div>
      </li>
      <li>
      <Link to="bookstore">Bookstore</Link>
      </li>
      <li>
      <Link to="basket"><i  class="fa-solid fa-cart-shopping"></i></Link>
      </li>
      <li>
      <Link to="wishlist"><i style={{color:"red"}} class="fa-solid fa-heart"></i></Link>
      </li>
      <li>
      <Link to="">Login</Link>
      </li>
    </ul>
  
  </nav>
</header>

  )
}

export default Header


