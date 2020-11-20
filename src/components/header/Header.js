import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { AuthContext } from '../auth/Auth';
import app from '../../firebaseConfig';

const Header = (props) => {
  const { currentUser } = useContext(AuthContext);
  const renderAuthNav = () => {
    if (!currentUser) {
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
