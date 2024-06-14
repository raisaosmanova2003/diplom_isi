import React from 'react'
import "./Faq.css"
const Faq = () => {
  return (
<section className='faq'>
<div className='faq_sec text-center'>
          <div className="col-md-6 offset-md-3">
          <span className='bi'>Frequently asked</span>
          <p className='bes'>Questions</p>
        
        </div>  
          </div>
          <div className="container">
          <div className="faq_box">
          <div class="faq-container">
<h1>Frequently Asked Questions</h1>
<div class="tabs">
    <span class="active-tab">General</span>
    <span>Setting up FAQs</span>
</div>
<div class="accordion">
    <div class="accordion-item">
        <input type="checkbox" id="faq1" class="accordion-toggle"/>
        <label for="faq1" class="accordion-title">
            <h2>What is an FAQ section?</h2>
        </label>
        <div class="accordion-content">
            <p>
                An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".
            </p>
            <div class="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-link"></i>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <input type="checkbox" id="faq2" class="accordion-toggle"/>
        <label for="faq2" class="accordion-title">
            <h2>Why do FAQs matter?</h2>
        </label>
        <div class="accordion-content">
        <p>
                An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".
            </p>
            <div class="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-link"></i>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <input type="checkbox" id="faq3" class="accordion-toggle"/>
        <label for="faq3" class="accordion-title">
            <h2>Where can I add my FAQs?</h2>
        </label>
        <div class="accordion-content">
        <p>
                An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".
            </p>
            <div class="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-link"></i>
            </div>
        </div>
    </div>
</div>
</div>
          </div>
          </div>
          
       

</section>

  )
}

export default Faq
