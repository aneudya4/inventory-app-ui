import React from 'react';
import { Link } from 'react-router-dom';
import img from './images/inv.jpeg';
// import Header from '../header/Header';
import './homepage.css';
const HomePage = () => {
  return (
    <>
      <div className='banner'>
        <div id='overlay'></div>
        <div className='banner-info'>
          <h2>
            Invy helps you track all your sales and your products in stock
          </h2>
          <p>
            Easily <span>add</span> and <span>delete</span> products, add orders
            and <span>keep track</span> of them all
          </p>
          <Link to='/accounts/register'>Register</Link>
          <Link to='/accounts/login'>Login</Link>
        </div>
        <div className='banner-img'>
          <img src={img} alt='banner' />
        </div>
      </div>
    </>
  );
};
export default HomePage;
