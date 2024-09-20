import React from 'react';
import './News.css';
import headerImg from './Images/mystery.png'; 
import gr1 from './Images/gr1.png';
import gr2 from './Images/gr2.png';
import gr3 from './Images/gr3.png';
import gr4 from './Images/gr4.png';

const News = () => {
  return (
    <div className="news-container">
      <div className="header-section">
        <img src={headerImg} alt="header" />
        <div className="header-text">
          The Past Year's Biggest Mystery & Thriller Hits
          <p>If you're in the market for a good mystery/thriller read to kick off the autumn reading season, we've gathered some of the best hits for you.</p>
        </div>
      </div>


      <div className="dabba">
        <div className="dabba1n">
          <div className="dabba1a">
            <img src={gr1} alt="gr1" />
          </div>
          <div className="dabba-text">
            <h3>6 New Books Recommended by Readers This Week</h3>
            <p>Need some fresh stories to read yourself in a new book universe? We got you covered with this bumper of book recommendations!</p>
          </div>
        </div>

        <div className="dabba2">
          <div className="dabba1a">
            <img src={gr2} alt="gr2" />
          </div>
          <div className="dabba-text">
            <h3>63 Reading Recommendations for Every Fall</h3>
            <p>Looking for that perfect autumn read to randomly explore? Check out our selections that have been handpicked to suit any vibe.</p>
          </div>
        </div>

        <div className="dabba3">
          <div className="dabba1a">
            <img src={gr3} alt="gr3" />
          </div>
          <div className="dabba-text">
            <h3>6 New Books to Celebrate Hispanic Heritage Month</h3>
            <p>Celebrate National Hispanic Heritage Month with these handpicked reads that bring you through the heritage of Latinx authors.</p>
          </div>
        </div>

        <div className="dabba4">
          <div className="dabba1a">
            <img src={gr4} alt="gr4" />
          </div>
          <div className="dabba-text">
            <h3>52 Doorstopper Books for Long Fall Evenings</h3>
            <p>If you're looking for something chunky to read through the long fall evenings, here are some doorstopper hits that will keep you entertained.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
