import React from 'react'
import "./Basket.css"
import  { useContext, useEffect } from 'react'
import MainContext from '../../../context/context';
import { Helmet } from 'react-helmet-async';
const Basket = () => {
    const {addToBasket,deleteFromBasket,basket}=useContext(MainContext)
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
<div className="basket_card">
<div className="cart-item">
    <img src="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_125,h_125,al_c,q_85,usm_0.66_1.00_0.01/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.webp" alt="Product Image" className="product-image" />
    <div className="product-details">
        <span className="product-name">I'm a product</span>
        <div className="price-details">
            <span className="original-price">$40.00</span>
            <span className="discounted-price">$5.00</span>
        </div>
    </div>
    <div className="quantity">
        <button className="quantity-btn">-</button>
        <button className="quantity-input">1</button>
        <button className="quantity-btn">+</button>
    </div>
    <span className="price">$5.00</span>
    <button className="remove-btn"><i class="fa-regular fa-trash-can"></i></button>
</div>

</div>
               
                
                </div>
                
                
                <div className="promo-code">
                    <label htmlFor="promo-code">Enter a promo code</label>
                    <input type="text" id="promo-code" placeholder="Enter a promo code"  /> 
                    <button className="apply-btn">Apply</button>
                    
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
                    <span>Subtotal</span>
                    <span>$5.00</span>
                </div>
                <hr />
               
                <div className="summary-total">
                    <span>Total</span>
                    <span>$5.00</span>
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


