import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react'
import image1 from './Images/img1.jpeg'
import image2 from './Images/img2.jpeg'
import image3 from './Images/img3.jpeg'
import hope from './Images/hope.jpg'
import Card from './Card';
import { Link } from 'react-router-dom';



function Main() {

  return (
 <class >
  <container>
  <section className='heroe'>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={hope} className="hope d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className=" title1 display-5 f text-body-emphasis  mb-20">Discover, Review, and Connect with the Best Books</h1>
        <p className="lead">Discover your next favorite read with our curated collection of book recommendations and in-depth reviews.</p>
        <div className=" button1 d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to="LogIn">
          <button type="button" className= " btn btn-outline-dark btn-lg px-4 me-md-2" >Log In</button>
          </Link>
          <Link to="LogIn">
          <button type="button" className="  btn btn-outline-dark btn-lg px-4">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  </section>

  <section className='after-heroe'>
  <div class="col-md-8 themed-grid-col">
        <div className=" title2 row">
          <div className=" col-md-6 themed-grid-col"><span className='subtitle1'>Your next great read is just a review away !</span><p className='para'>Finding your next page-turner has never been easier. Browse through honest reviews and recommendations to uncover the perfect book for your reading list.</p></div>
          <div className=" col-md-6 themed-grid-col"><span className='subtitle1'>Join a community of passionate readers .</span><p className='para'>Become part of a vibrant community where book lovers unite. Share your thoughts, exchange reviews, and connect with others who share your passion for literature.</p></div>
        </div>
      </div>
  </section>
  </container>

  <div className="maincontainer">
  
  <div className="thecard" >
    <div className="thefront"><img src={image1} className='images'></img></div>
    <div className="theback">"With Freedom, Books , Flowers and the Moon who could Not Be Happy"</div>
  </div>
  <div className="thecard" >
    <div className="thefront"><img src={image2} className='images'></img></div>
    <div className="theback">"I love walking into a bookstore Its like all my friends are sitting on shelves waving their pages at me"</div>
</div>
<div className="thecard" >
    <div className="thefront"><img src={image3} className='images'></img></div>
    <div className="theback">"You know you've read a good book when u turn the last page & feel like you have lost a friend"</div>
  </div>
</div>

 <section className='intro'>
<div>
    <Card/>
</div>
 </section>
 
 <section className='options'>
  <div className='dabba1'>
  <input type="search" className="form-control" placeholder="Search Genre" aria-label="Search"></input>
  <div className='options-container'>
    <ul className='options1'>
    <li>Art</li>
    <li>Ficiton</li>
    <li>Self Help</li>
    <li>Biography</li>
    <li>Romance</li>
    <li>Thriller</li>
    <li>Myster</li>
    <li>Business</li>
    </ul>
    <ul className='options1'>
    <li>Non-Fiction</li>
    <li>Poetry</li>
    <li>Comics</li>
    <li>Horror</li>
    <li>Non-Fiction</li>
    <li>Poetry</li>
    <li>Comics</li>
    <li>Horror</li>
    </ul>
    <ul className='options1'>
    <li>Non-Fiction</li>
    <li>Poetry</li>
    <li>Comics</li>
    <li>Horror</li>
    </ul>
    </div>
  </div>
 </section>
  <section className='footer'>
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg className=" icon bi me-2" width="100" height="100" ><use href="#bootstrap"></use></svg>
      </a>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>
  </footer>
  </section>
  <section>

  </section>
 </class>
  );
}

export default Main;