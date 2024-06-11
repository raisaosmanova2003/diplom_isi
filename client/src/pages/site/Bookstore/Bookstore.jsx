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
       {/* <div className="container">
       <div className="row">
        <div className="col-3">
        <div className="filter-section">
        <h3>Filter by</h3>
        <div className="filter-category">
          <h4>Collection</h4>
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
        <div className="filter-price">
          <h4>Price</h4>
        </div>
      </div>
        </div>
        <div className="col-9">
        <div className="bookstore-section">
        <h2>Our BOOKSTORE</h2>
        <div className="book-cards">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              {book.bestSale && <div className="best-sale">Best Sale</div>}
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.price}</p>
              <div className="buttons">
                <button className="add-to-cart-btn">Add to Cart</button>
                <button className="detail-btn">Detail</button>
              </div>
            </div>
          ))}
        </div>
      </div>

        
        </div>
       </div>
      
      
    </div> */}
    <div class="container">
    
        <div class="bookstore_header">
            <h1>BOOKSTORE</h1>
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
            <div class="book-card">
                <div class="best-sale">Best Sale</div>
                <div class="overlay">Quick View</div>
                <img src="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg" alt="Book 1"/>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$20.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card">
                <img src="https://static.wixstatic.com/media/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg" alt="Book 2"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$25.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card">
                <img src="https://static.wixstatic.com/media/ea71bb_a4061457e95b47b295a9533f89839dc4~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_a4061457e95b47b295a9533f89839dc4~mv2_d_2479_2483_s_4_2.jpg" alt="Book 3"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$22.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card">
                <img src="https://static.wixstatic.com/media/ea71bb_1c8d1b6ba0fd49838a1de426c1464053~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_1c8d1b6ba0fd49838a1de426c1464053~mv2_d_2479_2483_s_4_2.jpg" alt="Book 4"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$25.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card">
                <div class="best-sale">Best Sale</div>
                <div class="overlay">Quick View</div>
                <img src="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg" alt="Book 1"/>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$20.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card">
                <img src="https://static.wixstatic.com/media/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_5b55ec2330ee4f1588ffda1918ee708c~mv2_d_2479_2483_s_4_2.jpg" alt="Book 2"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$25.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card">
                <img src="https://static.wixstatic.com/media/ea71bb_a4061457e95b47b295a9533f89839dc4~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_a4061457e95b47b295a9533f89839dc4~mv2_d_2479_2483_s_4_2.jpg" alt="Book 3"/>
                <div class="overlay">Quick View</div>
                <div class="info">
                    <h3>I'm a product</h3>
                    <p>$22.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="book-card">
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

