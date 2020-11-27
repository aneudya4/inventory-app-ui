import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebaseConfig';
import img from './images/serverError.png';
import './serverError.css';
const ServerError = (props) => {
  useEffect(() => {
    app.auth().signOut();
  });
  return (
    <div className='server-error'>
      <div className='img-container'>
        <img src={img} alt='server error' />
      </div>
      <div className='error-info'>
        <p>Something wrong on our side , We are working on it.</p>
        <Link to='/'>Go To Home Page</Link>
      </div>
    </div>
  );
};

export default ServerError;
