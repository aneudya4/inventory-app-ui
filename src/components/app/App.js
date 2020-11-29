import React, { useState, useEffect } from 'react';
import './App.css';
import AuthFormsWrapper from '../authFormsWrapper/AuthFormsWrapper';
import Header from '../header/Header';
import Dashboard from '../dashboard/Dashboard';
import Homepage from '../homepage/Homepage';
import ApiContext from '../../apiContext';
import ServerError from '../server-error/ServerError';
import NotFound from '../not-found/NotFound';
import app from '../../firebaseConfig';
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
          <Route path='/accounts' component={AuthFormsWrapper} />
          <Route exact path='/server-error' component={ServerError} />
          <Route exact path='/' component={Homepage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
