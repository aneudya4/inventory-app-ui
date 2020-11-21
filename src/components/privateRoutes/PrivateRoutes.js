import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import apiContext from '../../apiContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(apiContext);
  console.log(rest.path);
  return (
    <Route
      // {...rest}
      // exact
      path='/auth/dashboard/'
      render={(routeProps) =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/accounts/login'} />
        )
      }
    />
  );
};
export default PrivateRoute;
