import './App.css';
import SignUpWrapper from './components/signUpWrapper/SignUpWrapper';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import { AuthProvider } from './components/auth/Auth';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Route
          exact
          path={['/', '/accounts/register', '/accounts/login']}
          component={Header}
        />
        <Route path='/auth/dashboard' component={Dashboard} />
        <Route path='/accounts' component={SignUpWrapper} />
        <Route exact path='/' component={Homepage} />
      </AuthProvider>
    </div>
  );
}

export default App;
