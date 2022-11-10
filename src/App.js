import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/app.scss';
import './styles/main.scss';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

function App() {

  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  return (
    <Switch>
      {!accessToken ?
        <Route path='*'>
          <Login setAccessToken={setAccessToken} />
        </Route>
        :
        <Route path='*'>
          <Home setAccessToken={setAccessToken} />
        </Route>
      }
    </Switch>
  );
}

export default App;
