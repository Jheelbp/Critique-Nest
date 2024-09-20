import CardItem from "./CardItem";
import "./Card.css";
import image1 from './Images/brain.png';
import image2 from './Images/adam.png';
import image3 from './Images/sirens.png';
import image4 from './Images/shadow.png';
import image5 from './Images/stand.png';
import image6 from './Images/smoke.png';

export default function Intro() {
    return (
      <section className='intro'>
        <div className='main-content'>
          <div className='cards'>
            <h1>Popular Searches</h1>
            <div className="cards__container">
              <div className="cards__wrapper">
                <ul className="cards__items">
                  <CardItem 
                    src={image1} 
                    text="Indulge in Rom-Coms: Discover Our Exquisite  Collection!" 
                    label="Love On The Brain" 
                    path="/love" 
                  />
                  <CardItem
                    src={image2} 
                    text="Unleash Adventure, Discover Yourself: Dive Into the World of Young Adult Books!" 
                    label="They Both Die At The End" 
                    path="/horror" 
                  />
                  <CardItem 
                    src={image3} 
                    text="Feel Every Word, Embrace Every Tear: Journey Through the Depths of Emotional Books." 
                    label="Over The Sirens" 
                    path="/catering" 
                  />
                </ul>
                <ul className="cards__items">
                  <CardItem 
                    src={image4} 
                    text="Where Shadows Whisper and Spirits Awaken: Enter the Realm of Ghost Stories." 
                    label="Shadow Girl" 
                    path="/wedding" 
                  />
                  <CardItem 
                    src={image5} 
                    text="City Streets, Real Stories: Dive Into the Pulse of Urban Fiction." 
                    label="The Stand-In" 
                    path="/love" 
                  />
                  <CardItem 
                    src={image6} 
                    text="Escape to Enchanted Worlds: Where Fantasy Fiction Knows No Limits." 
                    label="The City Of Smoke & Starlight" 
                    path="/shop" 
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }