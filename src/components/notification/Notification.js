import React from 'react';
import './notification.css';
const Notification = ({ message, showNotification }) => {
  const notificationIn = showNotification ? 'notification-in' : null;
  return (
    <div className={`notification ${notificationIn}`}>
      <span>
        {message}
        <i className='fas fa-cart-arrow-down'></i>
      </span>
    </div>
  );
};

export default Notification;
