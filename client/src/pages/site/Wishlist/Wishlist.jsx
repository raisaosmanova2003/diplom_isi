import React, { useContext, useState } from 'react'
import "./Wishlist.css"
import MainContext from '../../../context/context'
const Wishlist = () => {
  const { wishItems, addToWishlist }=useContext(MainContext)
  const[data,setdata]=useState([])
  return (
    <section className='Wishlist'>
       <div className="container">
       <div className="wishlist_container">
       <h2>My Wishlist</h2>
       <hr />
       {wishItems && wishItems.length > 0 ? (
            wishItems.map((item,index) => (
              <div key={index} className="wishlist-item">
                <img
                  src={`http://localhost:4500/public/images/${item.item.image} `}
                  alt="Book Image"
                  width="100px" height="100px"
                  className="wishlist_book-image"
                />
                <div className="wishlist_book-details">
                  <span className="wishlist_book-title">{item.item.bookname}</span>
                  <span className="wishlist_book-author">{item.item.author}</span>
                </div>
                <button className="remove-btn" onClick={() =>addToWishlist(item.item) }>
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            ))
          ) : (
            <p>No items in your wishlist.</p>
          )}      
        
            
       </div>
            
        </div>
    </section>
  )
}

export default Wishlist
 