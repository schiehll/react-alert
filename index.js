//load styles
import './app/assets/styles/app';
//render app
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app/states/Home';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);