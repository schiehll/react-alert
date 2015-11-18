//load styles
import './app/assets/styles/app';
//render app
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app/states/Home';

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);