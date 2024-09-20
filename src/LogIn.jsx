import React, { useState } from 'react'
import './Login.css';
import pswd from './assetsimg/password.png';
import email from './assetsimg/email.png';
import person from './assetsimg/person.png';

const LogIn = () => {
  const[action,setAction]=useState("Login");

  return (
    <div className='bodyln'>
      <div className='background'></div> {/* Add a background gradient */}
      <div className='containerln'>
        <div className='headerln'>
          <div className='textln'>{action}</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          {action === "Login" ? <div></div> : 
            <div className='input'>
              <img src={person} alt=""/>
              <input type="text" placeholder='Name'/>
            </div>
          }
          <div className='input'>
            <img src={email} alt=""/>
            <input type="email" placeholder='Email Id'/>
          </div>
          <div className='input'>
            <img src={pswd} alt=""/>
            <input type="password" placeholder='Password'/>
          </div>
        </div>

        {action === "Sign Up" ? <div></div> : 
          <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        }

        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
            Sign Up
          </div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
            Log In
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn;
