import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import apiContext from '../../apiContext';
import app from '../../firebaseConfig';

const Header = (props) => {
  const { user } = useContext(apiContext);
  const renderAuthNav = () => {
    if (!user) {
      return (
        <>
          <li>
            <Link to='/accounts/register'>Register</Link>
          </li>
          <li>
            <Link to='/accounts/login'>login</Link>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <Link to='/auth/dashboard/overview'>Dashboard</Link>
        </li>
        <li>
          <Link onClick={() => app.auth().signOut()} to='/'>
            Logout
          </Link>
        </li>
      </>
    );
  };
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>{renderAuthNav()}</ul>
      </nav>
    </header>
  );
};

export default Header;
