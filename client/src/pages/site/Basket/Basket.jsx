import React, { useState } from 'react'
import "./Basket.css"
import  { useContext, useEffect } from 'react'
import MainContext from '../../../context/context';
import { Helmet } from 'react-helmet-async';
const Basket = () => {
    const {addToBasket,deleteFromBasket,basket}=useContext(MainContext)

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
  
    const handleApplyPromoCode = () => {
      const discountPercentage = parseInt(promoCode.replace(/[^0-9]/g, ''), 10);
      if (!isNaN(discountPercentage)) {
        setDiscount(discountPercentage);
      } else {
        alert('Invalid promo code');
      }
    };
  
    const calculateDiscountedPrice = (totalPrice) => {
      return totalPrice * ((100 - discount) / 100);
    };
  
    const totalItems = basket.reduce((acc, item) => acc + item.count, 0);
    const totalPrice = basket.reduce((acc, item) => acc + item.totalPrice, 0);
    const discountedPrice = calculateDiscountedPrice(totalPrice);
  return (
    <section className='basket'>
     <Helmet>
      <title>
        Basket
      </title>
    </Helmet>
        <div className="basket_container">
            <div className="basket_cart">
                <h2>My cart</h2>
                <hr />
                <div className="basket_cards">
            {basket.map((item, index) => (
              <div className="basket_card" key={index}>
                <div className="cart-item">
                  <img src={`http://localhost:4500/public/images/${item.item.image}`} alt="Product Image" className="product-image" />
                  <div className="product-details">
                    <span className="product-name">{item.item.author}</span>
                    <div className="price-details">
                      <span className="original-price">${item.item.price}</span>
                      <span className="discounted-price">${item.totalPrice}</span>
                    </div>
                  </div>
                  <div className="quantity">
                    <button className="quantity-btn" onClick={() => deleteFromBasket(item.item._id)}>-</button>
                    <button className="quantity-input">{item.count}</button>
                    <button className="quantity-btn" onClick={() => addToBasket(item.item)}>+</button>
                  </div>
                  <span className="price">${item.totalPrice}</span>
                 
                  <button className="remove-btn" onClick={() => deleteFromBasket(item.item._id, true)}>
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
            ))}
                </div>
                
                <div className="promo-code">
            <label htmlFor="promo-code">Enter a promo code</label>
            <input
              type="text"
              id="promo-code"
              placeholder="Enter a promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button className="apply-btn" onClick={handleApplyPromoCode}>Apply</button>
          </div>
                <div className="note">
                    <label htmlFor="note">Add a note</label>
                    <textarea id="note" placeholder="Instructions? Special requests? Add them here."></textarea>

                </div>
            </div>
           
            <div className="order-summary">
                <h2>Order summary</h2>
                <hr />
                <div className="summary-details">
                <span>Subtotal ({totalItems} items):</span>
                <span>${totalPrice.toFixed(2)}</span>
                </div>
                <hr />
               
                <div className="summary-total">
                    <span>Total ({totalItems} items) after discount:</span>
                    <span>${discountedPrice.toFixed(2)}</span>
                </div>
                <hr />
                <button className="checkout-btn">Checkout</button>
                <div className="secure-checkout">
                    <span><i class="fa-solid fa-lock"></i> Secure Checkout</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket


