import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserContext } from './context/UserContext.js';
import Header from './components/Header.js';
import { useContext } from 'react';
import Auth from './components/Auth/Auth.js';
import Duties from './components/Duties/Duties.js';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/duties" component={Duties} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/duties" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
