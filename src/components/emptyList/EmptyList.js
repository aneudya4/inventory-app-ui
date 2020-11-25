import React from 'react';
import './emptyList.css';
import img from './images/empty.svg';
const EmptyList = ({ message }) => {
  return (
    <div className='empty-list'>
      <div className='img-container'>
        <img src={img} alt='emtpy box' />
      </div>
      <span>{message}</span>
    </div>
  );
};

export default EmptyList;
