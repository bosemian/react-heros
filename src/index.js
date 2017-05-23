import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { App } from './components';
import HeroDetail from './components/Hero/HeroDetail'
import Header from './components/App/Header'

import './style/style.css'

ReactDOM.render(
  <Router>
    <div className="container">
      <Route exact path="/" component={Header}></Route>
      <Route exact path="/" component={App}></Route>
      <Route path="/hero/:id" component={HeroDetail}></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
