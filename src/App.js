import React from 'react';
import './App.css';
import logo from './images/instagram-logo.png';

import Post from './components/Post';

function App() {
  return (
    <div className='app'>
      <div className='app-header'>
        <img className='app-header-image' src={logo} alt='instagram logo' />
      </div>
      <Post />

      {/* Posts */}
      {/* Post */}
    </div>
  );
}

export default App;
