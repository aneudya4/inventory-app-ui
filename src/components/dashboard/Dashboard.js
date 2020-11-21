import React, { useEffect, useContext, useState } from 'react';
import config from '../config';
import apiContext from '../../apiContext';
import { Route, Redirect } from 'react-router-dom';
import Overview from '../overview/Overview';
import DashboardOptions from '../dashboardOptions/DashboardOptions';
import './dashboard.css';

const Dashboard = (props) => {
  const [userDbData, setUserDbData] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState(false);
  const { user, setUser } = useContext(apiContext);

  useEffect(() => {
    if (user !== null) {
      fetch(`${config.API_ENDPOINT}/users/${user.email}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`,
        },
      })
        .then((data) => data.json())
        .then(({ id, name }) => {
          const newUserData = { ...user, id, name };
          setUserDbData(newUserData);
        });
    }
  }, [user]);

  useEffect(() => {
    if (userDbData !== null) {
      fetch(`${config.API_ENDPOINT}/products/${userDbData.id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`,
        },
      })
        .then((data) => data.json())
        .then((DBProducts) => {
          setProducts(DBProducts);
        });
    }
  }, [userDbData, setProducts]);

  useEffect(() => {
    if (userDbData !== null) {
      fetch(`${config.API_ENDPOINT}/orders/${userDbData.id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('ERROR');
        })
        .then((orders) => {
          setOrders(orders);
        })
        .catch((error) => {
          setErrors(true);
          console.error(error);
        });
    }
  }, [userDbData, setProducts]);

  if (!user) {
    return <Redirect to='/accounts/login' />;
  }
  return (
    <div className='dashboard'>
      <Route path={`${props.match.path}`} component={DashboardOptions} />
      <Route
        path={`${props.match.path}/overview`}
        render={(routerProps) => (
          <Overview {...routerProps} products={products} orders={orders} />
        )}
      />
    </div>
  );
};

export default Dashboard;
