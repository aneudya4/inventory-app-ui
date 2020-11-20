import React from 'react';
import OrdersList from '../OrdersList/OrdersList';
import './overview.css';
const Overview = (props) => {
  return (
    <div className='overview'>
      <h2>Overview</h2>
      <div className='inventory-details'>
        <div className='details-card'>
          <i className='fas fa-dollar-sign'></i>
          <span>$250,000</span>
          <span>Total Sales</span>
        </div>
        <div className='details-card'>
          <i className='fas fa-box-open'></i>
          <span>2500</span>
          <span>Product solds</span>
        </div>
        <div className='details-card'>
          <i className='fas fa-boxes'></i>
          <span>850</span>
          <span>Products in stock</span>
        </div>
      </div>
      {/* <OrdersList /> */}
    </div>
  );
};

export default Overview;
