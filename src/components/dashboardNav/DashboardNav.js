import React, { useContext } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import app from '../../firebaseConfig';
import apiContext from '../../apiContext';

const DashboardNav = ({ match, history, showNav, handleClick }) => {
  const { user } = useContext(apiContext);
  const handleLogout = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        history.push('/');
      });
  };
  const showNavigation = showNav ? 'nav-in' : 'nav-out';
  return (
    <aside className={`nav ${showNavigation}`}>
      <h2>
        <Link to='/'>Invy</Link>
      </h2>
      <p>
        Welcome <span>{user.displayName}</span>
      </p>

      <nav>
        <ul>
          <li>
            <NavLink
              onClick={() => {
                handleClick(!showNav);
              }}
              to={`${match.path}/overview`}
              activeClassName='selected'
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                handleClick(!showNav);
              }}
              activeClassName='selected'
              to={`${match.path}/products`}
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => {
                handleClick(!showNav);
              }}
              activeClassName='selected'
              to={`${match.path}/order`}
            >
              Place order
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                handleClick(!showNav);
              }}
              activeClassName='selected'
              to={`${match.path}/order-history`}
            >
              Order history
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                handleClick(!showNav);
              }}
              activeClassName='selected'
              to={`${match.path}/add-products`}
            >
              Add Products
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className='btn btn-auth'>
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default withRouter(DashboardNav);
