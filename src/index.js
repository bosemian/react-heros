import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { App } from './components';
import HeroDetail from './components/Hero/HeroDetail'
import Header from './components/App/Header'

import '../node_modules/bulma/css/bulma.css'
import '../node_modules/animate.css/animate.min.css'
import './style/style.css'

ReactDOM.render(
  <Router>
    <div className="container">
      <Header />
      <Route exact path="/" component={App}></Route>
      <Route path="/hero/:id" component={HeroDetail}></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
