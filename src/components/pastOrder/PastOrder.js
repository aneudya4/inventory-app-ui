import React from 'react';
import { formatter } from '../ultils/index';

const PastOrder = ({ order }) => {
  return (
    <div className='past-orders orders'>
      <span> {order.client}</span>
      <span>{order.client_email}</span>
      <span>{formatter.format(order.order_total)}</span>
    </div>
  );
};

export default PastOrder;
