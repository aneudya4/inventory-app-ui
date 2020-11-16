import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const DashboardNav = ({ match }) => {
  return (
    <aside className='nav'>
      <h2>
        <Link to='/'>Logo</Link>
      </h2>
      <p>
        Welcome <span>Jhon Doe</span>
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
            <button className='btn btn-auth'>Sign Out</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default withRouter(DashboardNav);
