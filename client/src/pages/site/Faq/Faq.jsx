

import React from 'react';
import "./Faq.css";

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
          <div className="faq-container">
            <div className="tabs">
              <span className="active-tab">General</span>
              <span>Setting up FAQs</span>
              <span>Shipping</span>
              <span>Returns</span>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <input type="checkbox" id="faq1" className="accordion-toggle"/>
                <label htmlFor="faq1" className="accordion-title">
                  <h2>What is an FAQ section?</h2>
                </label>
                <div className="accordion-content">
                  <p>
                    An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".
                  </p>
                  <div className="social-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <input type="checkbox" id="faq2" className="accordion-toggle"/>
                <label htmlFor="faq2" className="accordion-title">
                  <h2>Why do FAQs matter?</h2>
                </label>
                <div className="accordion-content">
                  <p>
                    FAQs help to reduce customer support inquiries by providing answers to common questions, saving time for both the business and customers.
                  </p>
                  <div className="social-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <input type="checkbox" id="faq3" className="accordion-toggle"/>
                <label htmlFor="faq3" className="accordion-title">
                  <h2>Where can I add my FAQs?</h2>
                </label>
                <div className="accordion-content">
                  <p>
                    You can add your FAQs on your website, in your email newsletters, or on your social media pages to provide quick answers to common questions.
                  </p>
                  <div className="social-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <input type="checkbox" id="faq4" className="accordion-toggle"/>
                <label htmlFor="faq4" className="accordion-title">
                  <h2>How can I contact support?</h2>
                </label>
                <div className="accordion-content">
                  <p>
                    You can contact our support team via email at support@example.com or by calling our hotline at 123-456-7890.
                  </p>
                  <div className="social-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <input type="checkbox" id="faq5" className="accordion-toggle"/>
                <label htmlFor="faq5" className="accordion-title">
                  <h2>What are your shipping policies?</h2>
                </label>
                <div className="accordion-content">
                  <p>
                    We offer worldwide shipping with different shipping options. You can find more details on our shipping page.
                  </p>
                  <div className="social-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <input type="checkbox" id="faq6" className="accordion-toggle"/>
                <label htmlFor="faq6" className="accordion-title">
                  <h2>How do I return a product?</h2>
                </label>
                <div className="accordion-content">
                  <p>
                    You can return a product by following the instructions on our returns page. Make sure to include your order number and reason for return.
                  </p>
                  <div className="social-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-link"></i>
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

export default Faq;
