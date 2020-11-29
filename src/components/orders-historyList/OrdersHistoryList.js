import React from 'react';
import OrdersHistory from '../orders-history/OrdersHistory';
import './OrdersHistoryList.css';
const OrdersHistoryList = ({ orders }) => {
  return (
    <div className='past-order-container'>
      <h3>Order History</h3>
      <div className='order-headers'>
        <span> Name</span>
        <span>Client Email</span>
        <span>Order Total</span>
      </div>

      <div className='past-order-details order-details'>
        {orders.map((order) => (
          <OrdersHistory key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersHistoryList;
