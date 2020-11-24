import React, { useCallback, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import app from '../../firebaseConfig';
import apiContext from '../../apiContext';
import { Link } from 'react-router-dom';
import './login.css';
const Login = ({ history }) => {
  const { user } = useContext(apiContext);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);

        history.push('/auth/dashboard/overview');
      } catch (error) {
        setLoginError(true);
      }
    },
    [history]
  );

  if (user) {
    return <Redirect to='/auth/dashboard/overview' />;
  }

  return (
    <div className='login-form form'>
      <form onSubmit={handleLogin}>
        {loginError && (
          <span className='validation-errors'>User Account Does Not Exist</span>
        )}
        <h3>Log In</h3>
        <label htmlFor='email'>
          Your Email*
          <input
            id='email'
            name='email'
            type='email'
            placeholder='jhonDoe@email.com'
          />
        </label>

        <label htmlFor='password'>
          Your Password*
          <input
            id='password'
            name='password'
            type='password'
            placeholder='your password'
          />
        </label>

        <button className='btn'>Login</button>
        <span>
          need an account ? <Link to='./register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
