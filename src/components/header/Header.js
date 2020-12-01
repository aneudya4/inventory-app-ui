import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import ApiContext from '../../apiContext';
import app from '../../firebaseConfig';

const Header = (props) => {
  const { user } = useContext(ApiContext);
  const renderAuthNav = () => {
    if (!user) {
      return (
        <>
          <li>
            <Link to='/accounts/register'>Register</Link>
          </li>
          <li>
            <Link to='/accounts/login'>Log In</Link>
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
      <Link to='/'>
        <h1>Invy</h1>
      </Link>
      <nav>
        <ul>{renderAuthNav()}</ul>
      </nav>
    </header>
  );
};

export default Header;
