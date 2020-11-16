import React from 'react';
import './orderList.css';
const OrdersList = () => {
  return (
    <div className='orders-list'>
      <table className='steelBlueCols'>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Jane</td>
            <td>09/20/2020</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Jane</td>
            <td>09/20/2020</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Jane</td>
            <td>09/20/2020</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Jane</td>
            <td>09/20/2020</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Jane</td>
            <td>09/20/2020</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Jane</td>
            <td>09/20/2020</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Jane</td>
            <td>09/20/2020</td>
            <td>$120,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OrdersList;
