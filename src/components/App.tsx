import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  HomePage,
  LoginPage,
} from '../pages';

export default function App() {
  //const [isPayment, setIsPayment] = useState<boolean>(false);
  return (
    <>
      <h1>Hello</h1>
      <Router>
        <div>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
