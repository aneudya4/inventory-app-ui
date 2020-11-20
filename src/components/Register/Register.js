import React, { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../auth/Auth';
import { Redirect } from 'react-router-dom';

import app from '../../firebaseConfig';
import { Link } from 'react-router-dom';
import './register.css';
const Register = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const [validateForm, setValidateForm] = useState(false);
  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault();
      const { name, email, password } = e.target.elements;
      if (password.value.length < 6) {
        setValidateForm(true);
        return;
      }
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(function (result) {
            return result.user.updateProfile({
              displayName: name.value,
            });
          });
        history.push('/accounts/login');
      } catch (error) {
        alert('error');
      }
    },
    [history]
  );

  if (currentUser) {
    return <Redirect to='/auth/dashboard/overview' />;
  }
  return (
    <div className='register-form form'>
      <form onSubmit={handleRegister}>
        <h3>Register</h3>
        {validateForm && (
          <span className='validation-errors'>
            *password has to be at least 6 characters
          </span>
        )}
        <label htmlFor='email'>
          Your Name*
          <input
            id='name'
            name='name'
            type='text'
            placeholder='jhon Doe'
            required
            maxLength='20'
          />
        </label>
        <label htmlFor='email'>
          Your Email*
          <input
            id='email'
            name='email'
            type='email'
            placeholder='jhonDoe@email.com'
            required
          />
        </label>
        <label htmlFor='password'>
          Your Password*
          <input
            id='password'
            name='password'
            type='password'
            placeholder='your password'
            required
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
