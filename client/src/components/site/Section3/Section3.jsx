import React, { useState } from 'react'
import "./Section3.scss"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section3 = () => {
  return (
<section className='bestSeller'>
<div className="container">
    <div className="row">
        <div className="box">
  <div className="container">
  <div className='b_cards'>
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="box_header">
<div className='custom-section text-center '>
    <div className="col-md-6 offset-md-3">
          <span className='th'>This Month's</span>
          <p className='rec'>RECOMMENDED BOOKS </p>
        
        </div>
        <div className="b_cards">
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
   
</div>

<div className="box_header">
<div className='custom-section text-center '>
    <div className="col-md-6 offset-md-3">
          <span className='th'> This Month's </span>
          <p className='rec'> Discounted Books</p>
        </div>

<div className="b_cards">
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
</div>  
    </div>
    
</div>
<div className="box_header">
<div className='custom-section text-center '>
    <div className="col-md-6 offset-md-3">
          <span className='th'>New </span>
          <p className='rec'>Releases </p>

        </div>
        <div className="b_cards">
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
</div>  
    </div>
   
</div>
<div className="box_header">
<div className='custom-section text-center '>
    <div className="col-md-6 offset-md-3">
          <span className='th'>Children's</span>
          <p className='rec'>BOOKS </p>

        
        </div>
        <div className="b_cards">
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
</div>  
    </div>
   
</div>
<div className="box_header">
<div className='custom-section text-center '>
    <div className="col-md-6 offset-md-3">
          <span className='th'>Award Winners </span>
          <p className='rec'>BOOKS </p>

        
        </div>
        <div className="b_cards">
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
  <div className="profile-card">
    <div className="profile-card-header">
      <img
        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg"
        alt="Sally Ramos"
        className="profile-card-img"
      />
      <div className="profile-card-info">
        <h2>Sally Ramos</h2>
        <p className="profile-card-price">$120.00</p>
      </div>
      <div className="profile-card-buttons">
        <button type="button" className="profile-card-button btn-heart">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" className="profile-card-button">
          View Details
        </button>
        <button type="button" className="profile-card-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="profile-card-section">
      <div className="profile-card-details">
        <p>
          Product Designer at @Company.<br />
          Working on @myproject in my free time<br />
        </p>
      </div>
    </div>
  </div>
</div>  
    </div>
   
</div>
        </div>
        <section className='coming_soon'>
        <div className="container">
          <div className="row">
          <div className='custom-section text-center'>
          <div className="col-md-6 offset-md-3">
          <span className='bi'>Coming Up</span>
          <p className='bes'>BOOK LAUNCH</p>
        
        </div>  
          </div>
          
          </div>
        </div>
        
        <div className="container">
  <div className="row">
  <div className="book-launch">
      <div className="book-launch_details">
        <h1>Introducing The Land of AILOO</h1>
        <p>By Mark Walker</p>
        <div className="event-info">
          <div className="event-detail">
            <h3>When</h3>
            <p>Jul 12, 2035, 7:00 PM</p>
          </div>
          <div className="event-detail">
            <h3>Where</h3>
            <p>500 Terry Francois Street, San Francisco, CA, USA</p>
          </div>
        </div>
        <button className="rsvp-button">RSVP NOW</button>
      </div>
      <div className="image-container">
        <img 
          src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/5/12/1/rx_amazon_design-remix-by-corey-damen-jenkins.jpeg.rend.hgtvcom.616.770.suffix/1620869060266.jpeg" 
          alt="The Land of AILOO" 
          className="book-image"
        />
      </div>
    </div>
  </div>
</div>
        </section>

        
    </div>
</div>


</section>
         
  )
}

export default Section3
