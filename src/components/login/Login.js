import React, { useCallback, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import app from '../../firebaseConfig';
import { AuthContext } from '../auth/Auth';
import { Link } from 'react-router-dom';
import './login.css';
const Login = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
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
        alert('err');
      }
    },
    [history]
  );

  if (currentUser) {
    return <Redirect to='/auth/dashboard/overview' />;
  }

  return (
    <div className='login-form form'>
      <form onSubmit={handleLogin}>
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
