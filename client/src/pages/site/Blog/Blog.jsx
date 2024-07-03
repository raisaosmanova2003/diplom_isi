import React, { useState } from 'react'
import "./Blog.scss"
 import { Helmet } from 'react-helmet'
 import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Link } from "react-router-dom";
const Blog = () => {

  return (
    <>
     <Helmet>
                    <title>Blog</title>
                </Helmet>
      <section className="fixed-bg">
    <div class="fixed_bg_">
      <h1  data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="fade-down">THE BOOK LOVER</h1>
    </div>
  </section>
   <section className='blog_theme'>
   <div className="container">
    <div className="row">
    <div className="blog_head" >
      <h3 data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="fade-left">All Posts</h3>
    </div>
    <div className="col-7">
  <div class="blog_card"  data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="fade-right" >
    <div class="card-image">
      <img src="https://static.wixstatic.com/media/ad420a_1f0de414af0e48808a067779e92736ed~mv2.jpg/v1/fill/w_454,h_681,fp_0.50_0.50,q_90,enc_auto/ad420a_1f0de414af0e48808a067779e92736ed~mv2.jpg" alt="Room Image"/>
    </div>
    <div class="card-content">
      <div class="card-header">
        <div class="author-info">
          <div class="author-image">
            <img src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Admin"/>
          </div>
          <div class="author-details">
            <span>Admin</span>
            <span>Mar 21, 2023 • 1 min</span>
          </div>
        </div>
      </div>
      <h2 class="card-title">“The Traitor’s Daughter”</h2>
      <p class="card-description">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      <div class="card-footer">
        <span>0 views</span>
        <span>0 comments</span>
        <span class="likes">13 <i class="fa fa-heart" aria-hidden="true"></i></span>
      </div>
    </div>
  </div>

  </div>
  <div className="col-5"></div>
  
  <div className="col-5"></div>
  <div className="col-7">
  <div class="blog_card"  data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="fade-left">
    <div class="card-image">
      <img src="https://i0.wp.com/africaextended.com/wp-content/uploads/2021/10/Best-Apps-You-Can-Use-To-Read-Or-Listen-to-Books-on-the-Go.jpg?resize=668%2C400&ssl=1" alt="Room Image"/>
    </div>
    <div class="card-content">
      <div class="card-header">
        <div class="author-info">
          <div class="author-image">
            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Admin"/>
          </div>
          <div class="author-details">
            <span>Admin</span>
            <span>Mar 21, 2023 • 1 min</span>
          </div>
        </div>
      </div>
      <h2 class="card-title">The art of writing</h2>
      <p class="card-description">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      <div class="card-footer">
        <span>0 views</span>
        <span>0 comments</span>
        <span class="likes">13 <i class="fa fa-heart" aria-hidden="true"></i></span>
      </div>
    </div>
  </div>
  </div>
  <div className="col-7">
  <div class="blog_card"  data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="fade-left">
    <div class="card-image">
      <img src="https://static.wixstatic.com/media/84770f_453c55f05b8c451fa0455d6c792666bd~mv2.jpg/v1/fill/w_568,h_711,fp_0.50_0.50,q_90,enc_auto/84770f_453c55f05b8c451fa0455d6c792666bd~mv2.jpg" alt="Room Image"/>
    </div>
    <div class="card-content">
      <div class="card-header">
        <div class="author-info">
          <div class="author-image">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Admin"/>
          </div>
          <div class="author-details">
            <span>Admin</span>
            <span>Mar 21, 2023 • 1 min</span>
          </div>
        </div>
      </div>
      <h2 class="card-title">PLAYING WITH PATTERNS</h2>
      <p class="card-description">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      <div class="card-footer">
        <span>0 views</span>
        <span>0 comments</span>
        <span class="likes">13 <i class="fa fa-heart" aria-hidden="true"></i></span>
      </div>
    </div>
  </div>
  </div>
  <div className="col-5"></div>
  <div className="col-5"></div>
  <div className="col-7">
  <div class="blog_card"  data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="fade-left">
    <div class="card-image">
      <img src="https://static.wixstatic.com/media/84770f_dd1192028d8842c789ebfa9bdaa66937~mv2.jpg/v1/fill/w_568,h_376,fp_0.50_0.50,q_90,enc_auto/84770f_dd1192028d8842c789ebfa9bdaa66937~mv2.jpg" alt="Room Image"/>
    </div>
    <div class="card-content">
      <div class="card-header">
        <div class="author-info">
          <div class="author-image">
            <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Admin"/>
          </div>
          <div class="author-details">
            <span>Admin</span>
            <span>Mar 21, 2023 • 1 min</span>
          </div>
        </div>
      </div>
      <h2 class="card-title">PLAYING WITH PATTERNS</h2>
      <p class="card-description">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      <div class="card-footer">
        <span>0 views</span>
        <span>0 comments</span>
        <span class="likes">13 <i class="fa fa-heart" aria-hidden="true"></i></span>
      </div>
    </div>
  </div>
  </div>
  <div className="col-7">
  <div class="blog_card"  data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="fade-right">
    <div class="card-image">
      <img src="https://img2.storyblok.com/fit-in/1200x630/f/64062/1200x629/8ac6d6e332/reading-list-for-high-school-students.jpg" alt="Room Image"/>
    </div>
    <div class="card-content">
      <div class="card-header">
        <div class="author-info">
          <div class="author-image">
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Admin"/>
          </div>
          <div class="author-details">
            <span>Admin</span>
            <span>Mar 21, 2023 • 1 min</span>
          </div>
        </div>
      </div>
      <h2 class="card-title">PLAYING WITH PATTERNS</h2>
      <p class="card-description">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      <div class="card-footer">
        <span>0 views</span>
        <span>0 comments</span>
        <span class="likes">13 <i class="fa fa-heart" aria-hidden="true"></i></span>
      </div>
    </div>
  </div>
  </div>
  <div className="col-5"></div>
  <div className="col-5"></div>
  <div className="col-7">
  <div class="blog_card"  data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos="fade-left">
    <div class="card-image">
      <img src="https://static.wixstatic.com/media/ad420a_b81dce182a684673a08d4c1a529845b2~mv2.jpg/v1/fill/w_454,h_681,fp_0.50_0.50,q_90,enc_auto/ad420a_b81dce182a684673a08d4c1a529845b2~mv2.jpg" alt="Room Image"/>
    </div>
    <div class="card-content">
      <div class="card-header">
        <div class="author-info">
          <div class="author-image">
            <img src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Admin"/>
          </div>
          <div class="author-details">
            <span>Admin</span>
            <span>Mar 21, 2023 • 1 min</span>
          </div>
        </div>
      </div>
      <h2 class="card-title">PLAYING WITH PATTERNS</h2>
      <p class="card-description">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      <div class="card-footer">
        <span>0 views</span>
        <span>0 comments</span>
        <span class="likes">13 <i class="fa fa-heart" aria-hidden="true"></i></span>
      </div>
    </div>
  </div>
  </div>
    </div>
   </div>
  
   </section>
    </>
  )
}

export default Blog


