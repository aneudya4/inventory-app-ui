import React from 'react';
import PastOrder from '../pastOrder/PastOrder';
const PastOrdersList = ({ orders }) => {
  return (
    <div className='past-order'>
      <ul>
        {orders.map((order) => (
          <PastOrder key={order.id} order={order} />
        ))}
      </ul>
    </div>
  );
};

export default PastOrdersList;
