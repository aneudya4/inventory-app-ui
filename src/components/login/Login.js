import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
const Login = (props) => {
  return (
    <div className='login-form form'>
      <form>
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
