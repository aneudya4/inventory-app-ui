import React, { useState, useEffect } from 'react';
import './App.css';
import SignUpWrapper from './components/signUpWrapper/SignUpWrapper';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import ApiContext from './apiContext';
import ServerError from './components/server-error/ServerError';
import NotFound from './components/not-found/NotFound';
import app from './firebaseConfig';

import { Route, Switch } from 'react-router-dom';
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  const value = {
    user: currentUser,
    setUser: setCurrentUser,
  };

  return (
    <div className='App'>
      <ApiContext.Provider value={value}>
        <Route
          exact
          path={['/', '/accounts/register', '/accounts/login']}
          component={Header}
        />
        <Switch>
          <Route path='/auth/dashboard' component={Dashboard} />
          <Route path='/accounts' component={SignUpWrapper} />
          <Route exact path='/server-error' component={ServerError} />
          <Route exact path='/' component={Homepage} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
