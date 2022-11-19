import React, {useState} from 'react';
import {Route, Routes, useParams} from 'react-router';

import './profile.css';

import {profile} from '../../mockData'
import {Link} from 'react-router-dom';
import {Post} from '../post';
import {tSIntersectionType} from '@babel/types';
import {AiOutlineCloseCircle} from 'react-icons/ai';

export const Profile = (props) => {
  const [activeSection, setSection] = useState('post');
  const [toggleModal, setModal] = useState(false);
  const [modalData, setModalData] = useState('');
  const {userName} = useParams(); // {userName: akashjain} => {userName}

  const openModal = (url) => {
    setModalData(url);
    setModal(true);
  }

  return (
    <div className='profile-container'>
      <div className='profile-top'>
        <div className='profile-image-wrapper'>
          <div className='profile-image' style={{'backgroundImage': 'url(./images/img1.jpeg'}} />
        </div>
        <div className='profile-intro'>
          <div className='profile-username'>
            {profile.userName}
          </div>
          <div className='profile-analytics'>
            <div className='count-wrapper'>
              <span className='count'>{profile.postsCount}</span> posts
            </div>
            <div className='count-wrapper'>
              <span className='count'>{profile.followersCount}</span> followers
            </div>
            <div className='count-wrapper'>
              <span className='count'>{profile.followingCount}</span> following
            </div>
          </div>
          <div className='profile-about'>
            <div className='profile-name'>
              {profile.name}
            </div>
            <div className='profile-desc'>
              {profile.about}
            </div>
            <div className='profile-link'>
              <Link to={profile.aboutLink}>{profile.aboutLink}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='profile-partition'></div>
      <div className='profile-bottom'>
        <div className='profile-tags'>
          <div className={`${activeSection === 'post' && 'active-tag'} post`} onClick={() => setSection('post')}>
            POST
          </div>
          <div className={`${activeSection === 'saved' && 'active-tag'} saved`} onClick={() => setSection('saved')}>
            SAVED
          </div>
          <div className={`${activeSection === 'tagname' && 'active-tag'} tagname`} onClick={() => setSection('tagname')}>
            TAGGED
          </div>
        </div>
      </div>
      <div className='profile-section'>
        {
          activeSection === "post" &&
          <div className="post-card-wrapper">
            <div className='post-card' onClick={() => openModal('THis is post 1')}>
              <img src='./images/img1.jpeg' />
            </div>
            <div className='post-card' onClick={() => openModal('this second')}>
              <img src='./images/img1.jpeg' />
            </div>
            <div className='post-card' onClick={() => openModal('that is third')}>
              <img src='./images/img1.jpeg' />
            </div>
            <div className='post-card'>
              <img src='./images/img1.jpeg' />
            </div>
            <div className='post-card'>
              <img src='./images/img1.jpeg' />
            </div>
          </div>
        }
        {
          activeSection === "saved" &&
          <div className="post-card-wrapper">
            <div className='post-card'>
              <img src='./images/img1.jpeg' />
            </div>
            <div className='post-card'>
              <img src='./images/img1.jpeg' />
            </div>
            <div className='post-card'>
              <img src='./images/img1.jpeg' />
            </div>
          </div>
        }
        {
          activeSection === "tagname" &&
          <div className="post-card-wrapper">
            No tagged post yet
          </div>
        }
      </div>

      {
        toggleModal &&
        <div className='modal'>
          
          <div className='modal-card'>
          <AiOutlineCloseCircle size={20} className='close-modal' onClick={() => setModal(false)}/>
            {modalData}
          </div>
        </div>
      }

    </div>
  )
}