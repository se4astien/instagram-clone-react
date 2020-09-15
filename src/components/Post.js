import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const Post = () => {
  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar
          className='post-avatar'
          alt='username'
          src='/static/images/avatar/1.jpg'
        />
        <h3>Username</h3>
      </div>

      <img
        className='post-image'
        src='http://lorempixel.com/600/300/sports/'
        alt='random picture'
      />
      <p className='post-text'>
        <strong>Username:</strong> Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Id, neque?
      </p>
    </div>
  );
};

export default Post;
