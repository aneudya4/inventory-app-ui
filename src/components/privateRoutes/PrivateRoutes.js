import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';

const PrivateRoute = ({ component, ...rest }) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <component {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
};
export default PrivateRoute;
