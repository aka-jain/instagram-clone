import React, {Profiler} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Feed} from './feed';
import {Header} from './header';
import {Post} from './post';
import {Profile} from './profile';


export const App = () => {
  return (

    <BrowserRouter>
      <Header></Header>
      <div className='instagram-container'>
        <Routes>
          <Route path="/" element={<Feed></Feed>} />
          <Route path="/:userName" element={<Profile></Profile>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}