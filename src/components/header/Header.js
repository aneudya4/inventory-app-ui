import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = (props) => {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to='/auth/dashboard/overview'>Dashboard</Link>
          </li>
          <li>
            <Link to='/accounts/register'>Register</Link>
          </li>
          <li>
            <Link to='/accounts/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
