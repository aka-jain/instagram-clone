import React from 'react';
import {AiOutlineComment, AiOutlineHeart, AiOutlineMore, AiOutlineShareAlt} from 'react-icons/ai';

import './feedCard.css';

export const FeedCard = (props) => {
  const {data} = props;
  return (
    <div className='feed-card'>
      <div className='top'>
        <div className='profile'>
          <div className='profile-icon'>
            <img src="./images/profile.jpeg" />
          </div>
          <div className='profile-detail'>
            <div className='profile-name'>
              {data.name}
            </div>
            <div className='profile-location'>
              {data.location}
            </div>
          </div>
        </div>
        <AiOutlineMore className='profile-more-menu' />
      </div>
      <div className='mid'>
        <img src={data.image} />
      </div>
      <div className='bottom'>
        <div className='profile-reaction'>
          <AiOutlineHeart className="reaction-icon" size={30} />
          <AiOutlineComment className="reaction-icon" size={30} />
          <AiOutlineShareAlt className="reaction-icon" size={30} />
        </div>
        <div className='profile-likes'>
          {data.likesCount} Likes
        </div>
        <div className='comment-container'>
          {
            data.comments.map((comment) => {
              return (
                <div className='comment-box' key={comment.id}>
                  <span className='comment-user-name'>{comment.author}</span>
                  <span className='comment'> {comment.comment}</span>
                </div>
              )
            })
          }
        </div>
        <div className='add-comment'>
          <input type="text" placeholder="Add a comment..." />
        </div>
      </div>
    </div >
  )
}