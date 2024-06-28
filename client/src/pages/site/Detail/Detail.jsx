import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
const Detail = () => {

  const {id}=useParams()
    const [itemData,setItemData]=useState([])
    useEffect(() => {
      axios.get(`http://localhost:4500/api/books/${id}`)
      .then((res) => {
        setItemData(res.data);
        console.log(id)

      })
      
  }, []);
  const {addToBasket}=useContext(MainContext)
  return (
    <section className='detail'>
    <Helmet>
      <title>
        Detail
      </title>
    </Helmet>
      {/* <div class="book-container">
    <div class="book-details">
        <img src={itemData.image} alt="Book Image" className="book__image" />
        <div class="book-info">
            <h3>Book Description</h3>
            <p>{itemData.title}</p>
        </div>
    </div>
    
    <div class="book-actions">
        <h2 class="book-heading">{itemData.bookname}</h2>
        <div class="book-price">{itemData.price}$</div>
        <div class="detail_quantity">
            <label for="detail_quantity-input">Quantity</label>
            <input type="number" id="detail_quantity-input" />
        </div>
        <button class="action-btn add-to-cart"   onClick={()=>{
                addToBasket(itemData._id)
                
            }}>Add to Cart</button>
        <button class="action-btn buy-now">Buy Now</button>
    </div>
</div> */}
<div class="book-container">
<div class="book-details">
    <img src="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_624,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg" alt="Book Image" className="book__image" />
    <div class="book-info">
        <h3>Book Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at ipsum a lacus tempor bibendum. Integer vehicula est vitae nisi auctor, vel scelerisque elit viverra.</p>
    </div>
</div>

<div class="book-actions">
    <h2 class="book-heading">Book Title</h2>
    <div class="book-price">$22.00</div>
    <div class="detail_quantity">
        <label for="detail_quantity-input">Quantity</label>
        <input type="number" id="detail_quantity-input" />
    </div>
    <button class="action-btn add-to-cart">Add to Cart</button>
    <button class="action-btn buy-now">Buy Now</button>
</div>
</div>

    </section>
  )
}

export default Detail


