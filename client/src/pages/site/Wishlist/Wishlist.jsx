import React, { useContext, useState } from 'react'
import "./Wishlist.css"
import MainContext from '../../../context/context'
const Wishlist = () => {
  const { wishlist, deleteFromWishlist }=useContext(MainContext)
  const[data,setdata]=useState([])
  return (
    <section className='Wishlist'>
       <div className="container">
       <div className="wishlist_container">
       <h2>My Wishlist</h2>
       <hr />
       {/* {wishlist && wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div key={item.id} className="wishlist-item">
                <img
                  src={`http://localhost:4500/public/images/${item.image} `}
                  alt="Book Image"
                  width="100px" height="100px"
                  className="wishlist_book-image"
                />
                <div className="wishlist_book-details">
                  <span className="wishlist_book-title">{item.bookname}</span>
                  <span className="wishlist_book-author">{item.author}</span>
                </div>
                <button className="remove-btn" onClick={() => deleteFromWishlist(item._id)}>
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            ))
          ) : (
            <p>No items in your wishlist.</p>
          )}       */}
          <div  className="wishlist-item">
<img src="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_624,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg" alt="Book Image" className="wishlist_book-image" />
<div className="wishlist_book-details">
    <span className="wishlist_book-title">Book Title</span>
    <span className="wishlist_book-author">Author Name</span>
</div>
<button className="remove-btn"><i class="fa-regular fa-trash-can"></i></button>
</div>
            
       </div>
            
        </div>
    </section>
  )
}

export default Wishlist
