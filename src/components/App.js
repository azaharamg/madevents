import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import MainPage from './MainPage';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/main'>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
