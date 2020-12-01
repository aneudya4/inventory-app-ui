import React from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../not-found/NotFound';

const AuthFormsWrapper = ({ match }) => {
  return (
    <div className='auth-forms'>
      <Switch>
        <Route exact path={`${match.path}/login`} component={Login} />
        <Route exact path={`${match.path}/register`} component={Register} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </div>
  );
};

export default AuthFormsWrapper;
