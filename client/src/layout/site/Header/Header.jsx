import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
  <nav>
    <div className="header_logo">
    <Link to=""> <button className='bink'>BINK .</button>
    <button className='publish'>PUBLISHER</button></Link>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">
      ☰
    </label>
    <ul className="menu ">
    <li> <Link to="">Home</Link></li>
    <li><Link to="about">About </Link></li>
    <li> <Link to="contact">Contact </Link></li>
    <li><Link to="blog">Blog </Link></li>
    <li> <Link to="/detail/:id">Detail </Link></li>
    <li><Link to="faq">FAQ </Link></li>
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
      <Link to="/login">Login</Link>
      </li>
    </ul>
  
  </nav>
</header>

  )
}

export default Header


