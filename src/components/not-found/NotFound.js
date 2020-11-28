import React from 'react';
import { Link } from 'react-router-dom';
import img from './images/notfound.svg';
const NotFound = (props) => {
  return (
    <div className='server-error'>
      <div className='img-container'>
        <img src={img} alt='server error' />
      </div>
      <div className='error-info'>
        <Link to='/'>Go To Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
