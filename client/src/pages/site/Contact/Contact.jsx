import React from 'react'
 import { Helmet } from 'react-helmet'
import "./Contact.css"
const Contact = () => {
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

      <section className='contact_us'>
   <div className="container">
    <div className="row">
      <form className='contact_form' name="myform" action="" method="POST" onsubmit="return validForm()">
  <div className="contactform">
    <div style={{ textAlign: "center" }}>
      <h1>Contact us</h1>
     
    </div>
    <>
      <div className="column">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email.."
        />
        <label htmlFor="subject">Your Message</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: 170 }}
          defaultValue={""}
        />
        <input type="submit" defaultValue="Submit" />
      </div>
    </>
  </div>
</form>

    </div>
   </div>
      </section>
    </>
  )
}

export default Contact
