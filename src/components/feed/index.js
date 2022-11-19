import React from 'react';

import {FeedCard} from './feedCard';
import {feed} from '../../mockData';

import './feed.css';

export const Feed = () => {
  return (
    <div className='feed-container'>
      {
        feed.map((feedCard, index) => {
          return (
            <FeedCard key={index} data={feedCard} />
          )
        })
      }
    </div>
  )
}