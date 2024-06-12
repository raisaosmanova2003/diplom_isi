import React from 'react'
import "./Section3.scss"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Section3 = () => {
  //  const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };

  // const cards = [
  //   { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
  //   { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
  //   { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
  //   { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
  // ];

  // const Card = ({ title, copy, button }) => (
  //   <div className="main_card">
  //     <div className="content">
  //       <h2 className="title">{title}</h2>
  //       <p className="copy">{copy}</p>
  //       <button className="btn">{button}</button>
  //     </div>
  //   </div>
  // );
  return (
<section className='bestSeller'>
<div className="container">
    <div className="row">
        <div className="box">
        {/* <section className="page-content">
    {cards.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        copy={card.copy}
        button={card.button}
      />
    ))}
  </section> */}
  <div className="container">
  <div className='b_cards'>
  {/* <a
    href="https://www.mythrillfiction.com/the-dark-rider"
    alt="Mythrill"
    target="_blank"
  >
    <div className="b_card">
      <div className="wrapper">
        <img
          src="https://productimages.hepsiburada.net/s/35/375-375/10459456274482.jpg"
          className="cover-image"
        />
      </div>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgrahamhiscott.co.uk%2Fhttp%2Feuropeanwriterstour.com%2Fimages-2023%2Fbatman-resmi&psig=AOvVaw1GNGvCgoSdNuAEKc9VMUR-&ust=1718220298367000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiqp9Cj1IYDFQAAAAAdAAAAABAY"
        className="title"
      />
      <img
        src="https://i.pinimg.com/474x/71/cd/1a/71cd1a5e0dcd531eafede9d18285cdb6.jpg"
        className="character"
      />
    </div>
  </a>
  <a
    href="https://www.mythrillfiction.com/force-mage"
    alt="Mythrill"
    target="_blank"
  >
    <div className="b_card">
      <div className="wrapper">
        <img
          src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
          className="cover-image"
        />
      </div>
      <img
        src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
        className="title"
      />
      <img
        src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
        className="character"
      />
    </div>
  </a> */}
  <>
  
  <title>Tarjetas Giratorias (flip card)</title>
  <div className="wrapper">
    <div className="card">
      <div className="face front">
        <img
          src="https://st2.depositphotos.com/1053646/6104/i/950/depositphotos_61040615-stock-photo-dubai-downtown-night-scene.jpg"
          alt="city"
        />
        <h1 className="text-h1">City</h1>
      </div>
      <div className="face back">
        <h2 className="text-h2">City</h2>
        <p className="text-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          repellat maiores aperiam nemo officia, praesentium suscipit? Eum
          voluptate fuga eius accusamus harum cum unde natus.
        </p>
        <div className="links">
          <a className="link-a" href="#">
            Details
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="face front">
        <img
          src="https://assets.vogue.com/photos/5b7da39dc337016620cb79c0/master/w_1600%2Cc_limit/06-new-interior-design-books-fall-2018.jpg"
          alt="city"
        />
        <h1 className="text-h1">City</h1>
      </div>
      <div className="face back">
        <h2 className="text-h2">City</h2>
        <p className="text-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          repellat maiores aperiam nemo officia, praesentium suscipit? Eum
          voluptate fuga eius accusamus harum cum unde natus.
        </p>
        <div className="links">
          <a className="link-a" href="#">
            Details
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="face front">
        <img
          src="https://static.wixstatic.com/media/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_223,h_223,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_0f554db9ccd946dfb1f67dad05d6a2ba~mv2_d_2479_2483_s_4_2.jpg"
          alt="city"
        />
        <h1 className="text-h1">City</h1>
      </div>
      <div className="face back">
        <h2 className="text-h2">City</h2>
        <p className="text-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          repellat maiores aperiam nemo officia, praesentium suscipit? Eum
          voluptate fuga eius accusamus harum cum unde natus.
        </p>
        <div className="links">
          <a className="link-a" href="#">
            Details
          </a>
        </div>
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
          
        </div>
        <button type="button" className="profile-card-button">
          Following
        </button>
      </div>
      <div className="profile-card-section">
        <div className="profile-card-details">
          <p>Product Designer at @Company.<br />Working on @myproject in my free time</p>
          <div className="profile-card-stats">
            <p>
              <span>15k</span> Followers
            </p>
            <p>
              <span>7k</span> Following
            </p>
            <p>Since April 30, 2023</p>
          </div>
        </div>
      </div>
    </div>
   
   
</>

</div>

</div>
        </div>
    </div>
</div>


</section>
         
  )
}

export default Section3
