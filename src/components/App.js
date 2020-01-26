import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheet/app.scss';
import Landing from './Landing';
import MainPage from './MainPage';

function App() {
  return (
    <div className='app--container'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/main' component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
