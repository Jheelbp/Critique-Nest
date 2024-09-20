import React from 'react'
import './Header.css';
import { ReactComponent as Door } from '../svg/door-open.svg';
import { ReactComponent as Profile } from '../svg/person-circle.svg';
import { ReactComponent as Home } from '../svg/house.svg';
import { ReactComponent as BookMarks } from '../svg/bookmarks.svg';
import { ReactComponent as Features } from '../svg/archive.svg';
const Header = () => {
  return (
    <div>
        <section className='header'>
  <header className="p-3  border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href='/'><h1 className='font'>CritiQue <span>Nest</span></h1></a>
        
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
  

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" className=" hadto nav-link text-light" >
                <Home class="bi d-block mx-auto mb-1"  width="24" height="24"><use href="#home"></use></Home>
                Home
              </a>
            </li>
            <li>
              <a href="/Bookmark" class="nav-link text-white">
                <BookMarks class="bi d-block mx-auto mb-1" width="24" height="24"><use href="#speedometer2"></use></BookMarks>
                ToRead
              </a>
            </li>
            <li>
              <a href="/News" class="nav-link text-white">
                <Features class="bi d-block mx-auto mb-1" width="24" height="24"><use href="#table"></use></Features>
                Blogs
              </a>
            </li>
            <li>
              <a href="/Blog" class="nav-link text-white">
                <Door src="./svg/speedometer2"class="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"></use></Door>
                BOTD
              </a>
            </li>
            <li>
              
            </li>
          </ul>
        </div>

        <form className="search col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>
        <a href="LogIn" className="profile nav-link text-white">
        <Profile className=" bi d-block mx-auto  mb-1" width="24" height="24"><use href="#people-circle"></use></Profile>
                Profile
        </a>
      </div>
    </div>
  </header>
  </section>
    </div>
  )
}

export default Header
