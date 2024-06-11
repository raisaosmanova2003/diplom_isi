import React from 'react'
import './Slider.scss'
const Slider = () => {
  return (
    <div>
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://static.wixstatic.com/media/ea71bb_04fa8a795ad24075b39c085d743035a2~mv2_d_6284_1717_s_2.jpg/v1/fill/w_1663,h_655,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_04fa8a795ad24075b39c085d743035a2~mv2_d_6284_1717_s_2.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://prh.imgix.net/articles/top10-fiction-1600x800.jpg"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://joshuahellerrarebooks.com/wp-content/uploads/2023/06/63783ef59d37fd25848828fe_10-books-every-leader-should-read.webp" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    
  </a>
</div>

    </div>
  )
}

export default Slider
