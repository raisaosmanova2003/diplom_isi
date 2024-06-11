import React from 'react'
import "./Bookstore.scss"
const books = [
  { title: "Art Station", price: "$20.00", image: "https://via.placeholder.com/150", bestSale: true },
  { title: "Frida Kahlo", price: "$25.00", image: "https://via.placeholder.com/150", bestSale: false },
  { title: "Interior Design", price: "$22.00", image: "https://via.placeholder.com/150", bestSale: false },
  { title: "The Missing", price: "$25.00", image: "https://via.placeholder.com/150", bestSale: false },
];
const Bookstore = () => {

  return (
    <section className='bookstore'>
    <div class="container">
    
        <div class="bookstore_header">
        <h3  data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="zoom-in">Our</h3>
            <h1 data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="zoom-in">BOOKSTORE</h1>
        </div>
        <div className="filter_books">
        <div class="filter">
            <h2>Filter by</h2>
            <ul>
                <li>All</li>
                <li>Novels</li>
                <li>Design et Art</li>
                <li>Life Style</li>
                <li>Our books of the month</li>
                <li>Bestsellers</li>
                <li>Travel guides</li>
            </ul>
        </div>
        <div class="books">
            <div class="book-card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div class="best-sale">Best Sale</div>
                <div class="overlay">Quick View</div>
                <img src="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg" alt="Book 1"/>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$20.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src="https://static.wixstatic.com/media/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg" alt="Book 2"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$25.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src="https://static.wixstatic.com/media/ea71bb_a4061457e95b47b295a9533f89839dc4~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_a4061457e95b47b295a9533f89839dc4~mv2_d_2479_2483_s_4_2.jpg" alt="Book 3"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$22.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src="https://static.wixstatic.com/media/ea71bb_1c8d1b6ba0fd49838a1de426c1464053~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_1c8d1b6ba0fd49838a1de426c1464053~mv2_d_2479_2483_s_4_2.jpg" alt="Book 4"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$25.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div class="best-sale">Best Sale</div>
                <div class="overlay">Quick View</div>
                <img src="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg" alt="Book 1"/>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$20.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src="https://static.wixstatic.com/media/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg" alt="Book 2"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$25.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src="https://static.wixstatic.com/media/ea71bb_a4061457e95b47b295a9533f89839dc4~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_a4061457e95b47b295a9533f89839dc4~mv2_d_2479_2483_s_4_2.jpg" alt="Book 3"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$22.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src="https://static.wixstatic.com/media/ea71bb_1c8d1b6ba0fd49838a1de426c1464053~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_1c8d1b6ba0fd49838a1de426c1464053~mv2_d_2479_2483_s_4_2.jpg" alt="Book 4"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$25.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
        
    </div>
    
    </section>
  )
}

export default Bookstore

