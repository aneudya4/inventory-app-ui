import React from 'react';
import './menu.css';
const Menu = ({ showNav, handleClick }) => {
  return (
    <div className='menu'>
      <input type='checkbox' id='toggle-checkbox' defaultChecked={showNav} />
      <label
        onClick={() => handleClick(!showNav)}
        htmlFor='toggle-checkbox'
        className='toggle-label'
      >
        Menu
      </label>
    </div>
  );
};

export default Menu;
