import React from 'react'
 import { Helmet } from 'react-helmet'
import "./Contact.css"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_grjf8ln', 'template_5xuve2d', form.current, {
        publicKey: 'Qa0Us55BIC_bhfUtg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <>
     <Helmet>
        <title>Contact</title>
      </Helmet>
       <section className="about" >
        <div className="aboutt">
          <div className="aboutt_title">
            <h2>
            We are in the whole country</h2>
            <h3>Please contact us</h3>
            
          </div>

        </div>
      </section>
      <section className='contact'>
      <div className="container">
        <div className="row">
        <div className="contact_cards">
        <div class="contact_card" data-aos="fade-right" data-aos-offset="400"
     data-aos-easing="ease-in-sine">
    <div class="contact_image">
      <img src="https://demo2.tokomoo.com/livre-el/wp-content/uploads/sites/20/2016/11/photo-1473398643778-d68e48a374c1.jpg" alt="Paris"/>
    </div>
    <h2>Paris</h2>
    <p>11/234 Main Street, Kingstown Downtown</p>
    <p>Call : +43-542-5789</p>
    <p>Email : contact@livre.com</p>
    <p>Open : 8am - 7pm</p>
    <button class="read-more-btn">READ MORE</button>
  </div>
  <div class="contact_card" data-aos="fade-down" data-aos-offset="400"
     data-aos-easing="ease-in-sine">
    <div class="contact_image">
      <img src="https://demo2.tokomoo.com/livre-el/wp-content/uploads/sites/20/2016/11/photo-1456254394237-131c81cd1f58.jpg" alt="Paris"/>
    </div>
    <h2>Las Vegas</h2>
    <p>11/234 Main Street, Kingstown Downtown</p>
    <p>Call : +43-542-5789</p>
    <p>Email : contact@livre.com</p>
    <p>Open : 8am - 7pm</p>
    <button class="read-more-btn">READ MORE</button>
  </div>
  <div class="contact_card" data-aos="fade-left" data-aos-offset="400"
     data-aos-easing="ease-in-sine">
    <div class="contact_image">
      <img src="https://demo2.tokomoo.com/livre-el/wp-content/uploads/sites/20/2016/11/photo-1461906903741-bf21de16ae85.jpg" alt="Paris"/>
    </div>
    <h2>London</h2>
    <p>11/234 Main Street, Kingstown Downtown</p>
    <p>Call : +43-542-5789</p>
    <p>Email : contact@livre.com</p>
    <p>Open : 8am - 7pm</p>
    <button class="read-more-btn">READ MORE</button>
  </div>
        </div>
       
        </div>
      </div>
     
      </section>

      <section className='contact_map'>

  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991245806564!2d2.292292315674607!3d48.85884417928795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf9fadb03d%3A0x8d5e2eaf4b97a15b!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1594730488998!5m2!1sen!2sus"
     >
    </iframe>
 
      </section>

      <section className='contacct'>
      <section className='cont'>
      <div className="section-header">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div className="container">
      <div className="row con">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-home" />
            </div>
            <div className="contact-info-content">
              <h4>Address</h4>
              <p>
                4671 Sugar Camp Road,
                <br /> Owatonna, Minnesota, <br />
                55060
              </p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone" />
            </div>
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="contact-info-content">
              <h4>Email</h4>
              <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} action="" id="contact-form">
            <h2>Send Message</h2>
            <div className="input-box">
              <input type="text" required="true" name="user_name" />
              <span>Full Name</span>
            </div>
            <div className="input-box">
              <input type="email" required="true" name="user_email" />
              <span>Email</span>
            </div>
            <div className="input-box">
              <textarea required="true" name="message" defaultValue={""} />
              <span>Type your Message...</span>
            </div>
            <div className="input-box">
              <input type="submit" defaultValue="Send" name="" />
            </div>
          </form>
        </div>
      </div>
    </div>
      </section>
    
  </section>
    </>
  )
}

export default Contact
