import React from 'react';
import {Link} from 'react-router-dom';

import {AiOutlineHome, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';

import './header.css';

export const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='logo'>
          <Link to="/">
            <img src="./images/instagram_logo.png" />
          </Link>
        </div>
        <div className='search-bar'>
          <div className='search'>
            <input type="text" placeholder='search' />
            <AiOutlineSearch className='search-icon'/>
          </div>
        </div>
        <div className='nav'>
        <AiOutlineSearch size={25} className='search-icon-nav'/>
          <Link to="/"><AiOutlineHome size={25} /></Link>
          <Link to="/akash"><AiOutlineUser size={25} /></Link>
          
        </div>
      </div>
    </header>
  )
}