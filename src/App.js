import './App.css';
import SignUpWrapper from './components/signUpWrapper/SignUpWrapper';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Route
        exact
        path={['/', '/accounts/register', '/accounts/login']}
        component={Header}
      />
      <Route path='/auth/dashboard' component={Dashboard} />
      <Route path='/accounts' component={SignUpWrapper} />
    </div>
  );
}

export default App;
