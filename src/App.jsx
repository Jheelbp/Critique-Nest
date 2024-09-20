import React from 'react';
import Main from './Main';
import LogIn from './LogIn'; 
import Blog from './Blog';
import Header from './Header/Header';
import First from './Cards/First-Card';
import Second from './Cards/Second-Card';
import News from './News';
import Bookmark from './Bookmark';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='Main'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/News" element={<News/>} />
          <Route path="/logIn" element={<LogIn />} /> 
          <Route path="/Blog" element={<Blog />} />
          <Route path="/love" element={<First />} />
          <Route path="/horror" element={<Second />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
