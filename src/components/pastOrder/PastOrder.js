import React from 'react';
import numeral from 'numeral';

const PastOrder = ({ order }) => {
  return (
    <div className='past-orders orders'>
      <span> {order.client}</span>
      <span>{order.client_email}</span>
      <span>{numeral(order.order_total).format('($0,0)')}</span>
    </div>
  );
};

export default PastOrder;
