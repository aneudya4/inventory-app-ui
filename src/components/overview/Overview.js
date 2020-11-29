import React from 'react';
import { formatter } from '../ultils/index';
import './overview.css';
const Overview = ({ products, orders }) => {
  const totalSales = orders.reduce(function (a, b) {
    return parseFloat(a) + parseInt(b.order_total);
  }, 0);

  const stockTotal = products.reduce(function (a, b) {
    return parseFloat(a) + parseInt(b.stock_total);
  }, 0);

  return (
    <div className='overview'>
      <h2>Overview</h2>
      <div className='inventory-details'>
        <div className='details-card'>
          <i className='fas fa-dollar-sign'></i>
          <span>{formatter.format(totalSales)}</span>
          <span>Total Sales</span>
        </div>
        <div className='details-card'>
          <i className='fas fa-box-open'></i>
          <span>{orders.length}</span>
          <span>Total Orders</span>
        </div>
        <div className='details-card'>
          <i className='fas fa-boxes'></i>
          <span>{stockTotal}</span>
          <span>Products in stock</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
