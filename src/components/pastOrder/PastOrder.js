import React from 'react';
const PastOrder = ({ order }) => {
  return (
    <div className='past-orders'>
      <li>
        {order.client}
        {order.client_email}
        {order.order_total}
      </li>
    </div>
  );
};

export default PastOrder;
