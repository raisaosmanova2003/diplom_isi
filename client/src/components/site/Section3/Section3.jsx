import React from 'react'
import "./Section3.scss"
const Section3 = () => {
  return (
//     <main className="main">
//     <section className="card-area">
//       {/* Card: City */}
//       <section className="card-section">
//         <div className="card">
//           <div className="flip-card">
//             <div className="flip-card__container">
//               <div className="card-front">
             
//                 <div className="card-front__tp card-front__tp--city">
//                   <img src="https://static.wixstatic.com/media/ea71bb_88f750dd06704bee9c4bed3acebaec54~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_134,h_134,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_88f750dd06704bee9c4bed3acebaec54~mv2_d_2479_2483_s_4_2.jpg" alt="" />
                  
//                 </div>
//                 <div className="card-front__bt">
//                   <p className="card-front__text-view card-front__text-view--city">
//                     View me
//                   </p>
//                 </div>
//               </div>
//               <div className="card-back">
//                 <video className="video__container" autoPlay="" muted="" loop="">
//                   <source
//                     className="video__media"
//                     src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
//                     type="video/mp4"
//                   />
//                 </video>
//               </div>
//             </div>
//           </div>
//           <div className="inside-page">
//             <div className="inside-page__container">
//               <h3 className="inside-page__heading inside-page__heading--city">
//                 For urban lovers
//               </h3>
//               <p className="inside-page__text">
//                 As cities never sleep, there are always something going on, no
//                 matter what time!
//               </p>
//               <a href="#" className="inside-page__btn inside-page__btn--city">
//                 View deals
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Card: Ski */}
//       <section className="card-section">
//         <div className="card">
//           <div className="flip-card">
//             <div className="flip-card__container">
//               <div className="card-front">
//                 <div className="card-front__tp card-front__tp--ski">
//                  <img  src="https://static.wixstatic.com/media/ea71bb_30bb0bbedfa6425380becfdccd67d02b~mv2_d_2479_2483_s_4_2.jpg/v1/fill/w_134,h_134,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_30bb0bbedfa6425380becfdccd67d02b~mv2_d_2479_2483_s_4_2.jpg" alt="" />
//                   <h2 className="card-front__heading">Ski trip</h2>
//                   <p className="card-front__text-price">From £199</p>
//                 </div>
//                 <div className="card-front__bt">
//                   <p className="card-front__text-view card-front__text-view--ski">
//                     View me
//                   </p>
//                 </div>
//               </div>
//               <div className="card-back">
//                 <video className="video__container" autoPlay="" muted="" loop="">
//                   <source
//                     className="video__media"
//                     src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611"
//                     type="video/mp4"
//                   />
//                 </video>
//               </div>
//             </div>
//           </div>
//           <div className="inside-page">
//             <div className="inside-page__container">
//               <h3 className="inside-page__heading inside-page__heading--ski">
//                 For snow lovers
//               </h3>
//               <p className="inside-page__text">
//                 Love snow? Why not take up exciting ski-in sessions and hit the
//                 slope?
//               </p>
//               <a href="#" className="inside-page__btn inside-page__btn--ski">
//                 View deals
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Card: Beach */}
//       <section className="card-section">
//         <div className="card">
//           <div className="flip-card">
//             <div className="flip-card__container">
//               <div className="card-front">
//                 <div className="card-front__tp card-front__tp--beach">
//                   <svg
//                     version="1.1"
//                     id="Layer_1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 60 60"
//                     style={{ enableBackground: "new 0 0 60 60" }}
//                     xmlSpace="preserve"
//                     className="card-front__icon"
//                   >
//                     <path
//                       d="M57.2,28h-7.4c-0.4-4-2-7.7-4.4-10.6l3.2-3.2c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0l-3.2,3.2c-3-2.4-6.6-4-10.6-4.4V2.8
//                                c0-1.1-0.9-2-2-2s-2,0.9-2,2v7.4c-4,0.4-7.7,2-10.6,4.4l-3.2-3.2c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l3.2,3.2
//                                c-2.4,3-4,6.6-4.4,10.6H2.8c-1.1,0-2,0.9-2,2s0.9,2,2,2h7.4c0.4,4,2,7.7,4.4,10.6l-3.2,3.2c-0.8,0.8-0.8,2,0,2.8
//                                c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l3.2-3.2c3,2.4,6.6,4,10.6,4.4v7.4c0,1.1,0.9,2,2,2s2-0.9,2-2v-7.4c4-0.4,7.7-2,10.6-4.4
//                                l3.2,3.2c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8l-3.2-3.2c2.4-3,4-6.6,4.4-10.6h7.4c1.1,0,2-0.9,2-2
//                                S58.3,28,57.2,28z M30,45.9c-8.8,0-15.9-7.2-15.9-15.9c0-8.8,7.2-15.9,15.9-15.9c8.8,0,15.9,7.2,15.9,15.9
//                                C45.9,38.8,38.8,45.9,30,45.9z"
//                     />
//                   </svg>
//                   <h2 className="card-front__heading">Beach time</h2>
//                   <p className="card-front__text-price">From £229</p>
//                 </div>
//                 <div className="card-front__bt">
//                   <p className="card-front__text-view card-front__text-view--beach">
//                     View me
//                   </p>
//                 </div>
//               </div>
//               <div className="card-back">
//                 <video className="video__container" autoPlay="" muted="" loop="">
//                   <source
//                     className="video__media"
//                     src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761"
//                     type="video/mp4"
//                   />
//                 </video>
//               </div>
//             </div>
//           </div>
//           <div className="inside-page">
//             <div className="inside-page__container">
//               <h3 className="inside-page__heading inside-page__heading--beach">
//                 For sun lovers
//               </h3>
//               <p className="inside-page__text">
//                 Relax and get sun-kissed tan in the sea or take up surfting for an
//                 adventure!
//               </p>
//               <a href="#" className="inside-page__btn inside-page__btn--beach">
//                 View deals
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Card: Camping */}
//       <section className="card-section">
//         <div className="card">
//           <div className="flip-card">
//             <div className="flip-card__container">
//               <div className="card-front">
//                 <div className="card-front__tp card-front__tp--camping">
//                   <svg
//                     version="1.1"
//                     id="Layer_1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 60 60"
//                     style={{ enableBackground: "new 0 0 60 60" }}
//                     xmlSpace="preserve"
//                     className="card-front__icon"
//                   >
//                     <path
//                       d="M57,52.1c0-0.4-0.1-0.7-0.3-1.1l-6.3-10.8L32.4,9l2.3-4c0.6-1,0.2-2.2-0.7-2.7c-1-0.6-2.2-0.2-2.7,0.7L30,5.2L28.7,3
//                                c-0.6-1-1.8-1.3-2.7-0.7c-1,0.6-1.3,1.8-0.7,2.7l2.3,4l-18,31.1L3.3,51C3.1,51.3,3,51.7,3,52.1c0,0.4,0.1,0.7,0.3,1
//                                c0.4,0.6,1,1,1.7,1h50c0.7,0,1.4-0.4,1.7-1C56.9,52.8,57,52.4,57,52.1z M34.7,49.8C34.2,50,32.1,50,30,50s-4.2,0-4.7-0.2
//                                c-0.2-0.5-0.2-2.1-0.2-3.6l0-4.3c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9l0,4.3C34.9,47.7,34.9,49.3,34.7,49.8z M13.1,42.1L28,16.5
//                                v16.7c-3.9,0.9-6.9,4.4-6.9,8.6l0,4.3c0,1.7,0,2.9,0.2,4H8.5L13.1,42.1z M38.7,50.1c0.2-1,0.2-2.3,0.2-4l0-4.3
//                                c0-4.2-2.9-7.7-6.9-8.6V16.5l15,25.7l4.6,7.9H38.7z"
//                     />
//                   </svg>
//                   <h2 className="card-front__heading">Camping trek</h2>
//                   <p className="card-front__text-price">From £129</p>
//                 </div>
//                 <div className="card-front__bt">
//                   <p className="card-front__text-view card-front__text-view--camping">
//                     View me
//                   </p>
//                 </div>
//               </div>
//               <div className="card-back">
//                 <video className="video__container" autoPlay="" muted="" loop="">
//                   <source
//                     className="video__media"
//                     src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761"
//                     type="video/mp4"
//                   />
//                 </video>
//               </div>
//             </div>
//           </div>
//           <div className="inside-page">
//             <div className="inside-page__container">
//               <h3 className="inside-page__heading inside-page__heading--camping">
//                 For nature lovers
//               </h3>
//               <p className="inside-page__text">
//                 Get your boots on for some hiking and explore all the beautiful
//                 scenery of nature!
//               </p>
//               <a href="#" className="inside-page__btn inside-page__btn--camping">
//                 View deals
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   </main>
<section className='bestSeller'>
<div className="container">
    <div className="row">
        <div className="box">
            <div className="cards"></div>
        </div>
    </div>
</div>
</section>
         
  )
}

export default Section3
