import React from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import { Route } from 'react-router-dom';

const SignUpWrapper = ({ match }) => {
  return (
    <div className='auth-forms'>
      <Route exact path={`${match.path}/login`} component={Login} />
      <Route exact path={`${match.path}/register`} component={Register} />
    </div>
  );
};

export default SignUpWrapper;
