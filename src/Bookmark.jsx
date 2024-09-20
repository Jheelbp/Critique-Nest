import React from "react";
import './Bookmark.css'; 
import image from './Images/funnt.png'; 
import smoke from './Images/smoke.png';
import sirens from './Images/sirens.png';
import stand from './Images/stand.png';
import brain from './Images/brain.png';
import adam from './Images/adam.png';
import lucy from './Images/Lucy.png';
import wtr1 from './Images/wtr1.png';
import wtr2 from './Images/wtr2.png';
import wtr3 from './Images/wtr3.png';
import wtr4 from './Images/wtr4.png';
import wtr5 from './Images/wtr5.png';
import wtr6 from './Images/wtr6.png';

const WhatToReadNow = () => {
  return (
    <div className="read-now-container">
      <div className="read-now-header">
        <img src={image} alt="Books" className="read-now-image" />
        <div className="read-now-text">
          <h1>What to Read Now</h1>
          <p>Book recommendations from editors at The New York Times Book Review.</p>
        </div>
      </div>
      <hr className="divider"/>
      <div className="read-now-content">
        <h2>Our Latest Picks</h2>
        <p>Explore the latest books our editors are recommending, covering a wide range of genres and interests.</p>
      </div>
      <div className="read-now-boxes">
        <div className="box">
          <img src={smoke} alt="Box 1" className="box-image"/>
          <p>Text for Box 1</p>
        </div>
        <div className="box">
          <img src={sirens} alt="Box 2" className="box-image"/>
          <p>Text for Box 2</p>
        </div>
        <div className="box">
          <img src={stand} alt="Box 3" className="box-image"/>
          <p>Text for Box 3</p>
        </div>
        <div className="box">
          <img src={brain} alt="Box 4" className="box-image"/>
          <p>Text for Box 4</p>
        </div>
        <div className="box">
          <img src={adam} alt="Box 5" className="box-image"/>
          <p>Text for Box 5</p>
        </div>
        <div className="box">
          <img src={lucy} alt="Box 6" className="box-image"/>
          <p>Text for Box 6</p>
        </div>
    </div>

    <hr className="divider"/> 

      <div className="read-now-boxes">
        <div className="box">
          <img src={wtr1} alt="Box 1" className="box-image"/>
          <p>Text for Box 1</p>
        </div>
        <div className="box">
          <img src={wtr2} alt="Box 2" className="box-image"/>
          <p>Text for Box 2</p>
        </div>
        <div className="box">
          <img src={wtr3} alt="Box 3" className="box-image"/>
          <p>Text for Box 3</p>
        </div>
        <div className="box">
          <img src={wtr4} alt="Box 4" className="box-image"/>
          <p>Text for Box 4</p>
        </div>
        <div className="box">
          <img src={wtr5} alt="Box 5" className="box-image"/>
          <p>Text for Box 5</p>
        </div>
        <div className="box">
          <img src={wtr6} alt="Box 6" className="box-image"/>
          <p>Text for Box 6</p>
        </div>
      </div>
    </div>

    
  );
};

export default WhatToReadNow;
