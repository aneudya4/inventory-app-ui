import React from 'react';
import './notification.css';
const Notification = ({ message }) => {
  return (
    <div className='notification'>
      <span>
        {message}
        <i className='fas fa-cart-arrow-down'></i>
      </span>
    </div>
  );
};

export default Notification;
