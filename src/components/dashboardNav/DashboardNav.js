import React, { useContext } from 'react';
import { Link, NavLink, withRouter, Redirect } from 'react-router-dom';
import app from '../../firebaseConfig';
import { AuthContext } from '../auth/Auth';

const DashboardNav = ({ match, history }) => {
  const { currentUser } = useContext(AuthContext);
  const handleLogout = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        history.push('/');
      });
  };

  if (!currentUser) {
    return <Redirect to='/' />;
  }
  return (
    <aside className='nav'>
      <h2>
        <Link to='/'>Logo</Link>
      </h2>
      <p>
        Welcome <span>{currentUser.displayName}</span>
      </p>

      <nav>
        <ul>
          <li>
            <NavLink to={`${match.path}/overview`} activeClassName='selected'>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='selected' to={`${match.path}/products`}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='selected' to={`${match.path}/orders`}>
              New order
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='selected' to={`${match.path}/customers`}>
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='selected' to={`${match.path}/order`}>
              Place order
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='selected' to={`${match.path}/past-order`}>
              Past orders
            </NavLink>
          </li>
          <li>
            <NavLink
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
