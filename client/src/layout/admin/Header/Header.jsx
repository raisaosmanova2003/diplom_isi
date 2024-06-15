import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom";
const Header = () => {
  return (
        <header className="header">
  <nav>
    <div className="header_logo">
     <button className='bink'>Admin .</button>
    <button className='publish'>Page</button>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">
      ☰
    </label>
    <ul className="menu ">
      <li>
      <Link to="">Products</Link>
      </li>
      <li>
      <Link to="add">Add</Link>
      </li>
    </ul>
  
  </nav>
</header>
    
  )
}

export default Header
