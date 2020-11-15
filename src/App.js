import './App.css';
import SignUpWrapper from './components/signUpWrapper/SignUpWrapper';
import Header from './components/header/Header';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/accounts' component={SignUpWrapper} />
      </Switch>
    </div>
  );
}

export default App;
