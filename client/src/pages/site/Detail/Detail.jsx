import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
const Detail = () => {
 
  const {id}=useParams()
    const [itemData,setItemData]=useState([])
    const {addToBasket}=useContext(MainContext)
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
      axios.get(`http://localhost:4500/api/books/${id}`)
      .then((res) => {
        setItemData(res.data);
        setTotalPrice(data.price);
        console.log(id)

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setQuantity(value);
      // setTotalPrice(value * itemData.price);
      setTotalPrice(value * (itemData ? itemData.price : 0)); 
    }
  };

  const handleAddToBasket = () => {
    addToBasket(itemData, quantity);
  };
  return (
    <section className='detail'>
    <Helmet>
      <title>
        Detail
      </title>
    </Helmet>
      <div class="book-container">
    <div class="book-details">
        <img src={`http://localhost:4500/public/images/${itemData.image}`} alt="Book Image" className="book__image" />
        <div class="book-info">
            <h3>Book Description</h3>
            <p>{itemData.title}</p>
        </div>
    </div>
    
    <div class="book-actions">
        <h2 class="book-heading">{itemData.author}</h2>
        <div class="book-price">{totalPrice}$</div>
        <div class="detail_quantity">
            <label for="detail_quantity-input">Quantity</label>
            
            <input
              type="number"
              id="detail_quantity-input"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
        </div>

        <button className="action-btn add-to-cart" onClick={handleAddToBasket}>
            Add to Cart
          </button>
        <button class="action-btn buy-now">Buy Now</button>
    </div>
</div>


    </section>
  )
}

export default Detail


