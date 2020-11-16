import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
const Register = (props) => {
  return (
    <div className='register-form form'>
      <form>
        <h3>Register</h3>
        <label htmlFor='email'>
          Your Name*
          <input id='name' name='name' type='text' placeholder='jhon Doe' />
        </label>
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

        <button className='btn'>Register</button>
        <span>
          already have an account ? <Link to='./login'>Log in</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
