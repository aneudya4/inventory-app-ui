import React, { useCallback, useContext, useState } from 'react';
import apiContext from '../../apiContext';
import config from '../config';
import { Redirect } from 'react-router-dom';

import app from '../../firebaseConfig';
import { Link } from 'react-router-dom';
import './register.css';
const Register = ({ history }) => {
  const { user } = useContext(apiContext);
  const [validateForm, setValidateForm] = useState(false);
  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault();
      const { name, email, password } = e.target.elements;
      console.log(name.value, email.value, 'HERE MMGF');
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
        await postUser(name.value, email.value);
        history.push('/accounts/login');
      } catch (error) {
        alert('error');
      }
    },
    [history]
  );
  const postUser = async (name, email) => {
    await fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
      body: JSON.stringify({ name, email }),
    });
  };

  if (user) {
    return <Redirect to='/auth/dashboard/overview' />;
  }
  return (
    <div className='register-form form'>
      <form onSubmit={handleRegister}>
        <h3>Register</h3>
        {validateForm && (
          <span className='validation-errors'>
            *Password has to be at least 6 characters
          </span>
        )}
        <label htmlFor='email'>
          Your Name<span>*</span>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='John Doe'
            required
            maxLength='20'
          />
        </label>
        <label htmlFor='email'>
          Your Email<span>*</span>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='JohnDoe@email.com'
            required
          />
        </label>
        <label htmlFor='password'>
          Your Passwords<span>*</span>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Create a Password'
            required
          />
        </label>
        <button className='btn'>Register</button>
        <span>
          Already have an account? <Link to='./login'>Log in</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
