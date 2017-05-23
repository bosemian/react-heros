import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { App } from './components';
import HeroDetail from './components/Hero/HeroDetail'

import './style/style.css'

ReactDOM.render(
  <Router>
    <div className="container">
      <Switch>
        <Route path="/hero/:id" component={HeroDetail}></Route>
        <Route exac path="/" component={App}></Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
