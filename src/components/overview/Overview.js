import React, { useEffect, useContext, useState } from 'react';
import OrdersList from '../OrdersList/OrdersList';
import config from '../config';
import apiContext from '../../apiContext';
import Dashboard from '../dashboard/Dashboard';
import './overview.css';
const Overview = ({ products, orders }) => {
  console.log(orders);
  const totalSales = orders.reduce(function (a, b) {
    console.log(a, 'mmg');
    return parseFloat(a) + parseInt(b.order_total);
  }, 0);
  console.log(totalSales, 'HJERE');
  return (
    <div className='overview'>
      <h2>Overview</h2>
      <div className='inventory-details'>
        <div className='details-card'>
          <i className='fas fa-dollar-sign'></i>
          <span>{`$${totalSales}`}</span>
          <span>Total Sales</span>
        </div>
        <div className='details-card'>
          <i className='fas fa-box-open'></i>
          <span>{orders.length}</span>
          <span>Total Orders</span>
        </div>
        <div className='details-card'>
          <i className='fas fa-boxes'></i>
          <span>{products.length}</span>
          <span>Products in stock</span>
        </div>
      </div>
    </div>
    // </Dashboard>
  );
};

export default Overview;
