import React from 'react'
import "./Section3.scss"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Section3 = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const cards = [
    { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
    { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
    { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
    { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
  ];

  const Card = ({ title, copy, button }) => (
    <div className="main_card">
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <button className="btn">{button}</button>
      </div>
    </div>
  );
  return (
<section className='bestSeller'>
<div className="container">
    <div className="row">
        <div className="box">
        <section className="page-content">
    {cards.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        copy={card.copy}
        button={card.button}
      />
    ))}
  </section>
        </div>
    </div>
</div>
</section>
         
  )
}

export default Section3
