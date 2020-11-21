import React, { useState, useEffect } from 'react';
import './App.css';
import SignUpWrapper from './components/signUpWrapper/SignUpWrapper';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import ApiContext from './apiContext';
import PrivateRoute from './components/privateRoutes/PrivateRoutes';
import app from './firebaseConfig';

import { Route } from 'react-router-dom';
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
        {/* <PrivateRoute exact path='/auth/dashboard' component={Dashboard} /> */}

        <Route
          exact
          path={['/', '/accounts/register', '/accounts/login']}
          component={Header}
        />
        <Route path='/auth/dashboard' component={Dashboard} />
        <Route path='/accounts' component={SignUpWrapper} />
        <Route exact path='/' component={Homepage} />
      </ApiContext.Provider>
    </div>
  );
}

export default App;
