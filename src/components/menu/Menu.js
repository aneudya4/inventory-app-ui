import React from 'react';
import './menu.css';
const Menu = ({ showNav, handleShowNav }) => {
  return (
    <div className='menu'>
      <input
        type='checkbox'
        id='toggle-checkbox'
        onChange={() => handleShowNav(!showNav)}
        checked={showNav}
      />
      <label htmlFor='toggle-checkbox' className='toggle-label'>
        Menu
      </label>
    </div>
  );
};

export default Menu;
