# react-alert [![npm](https://badge.fury.io/js/react-alert.svg)](http://badge.fury.io/js/react-alert) [![Build Status](https://travis-ci.org/schiehll/react-alert.svg?branch=master)](https://travis-ci.org/schiehll/react-alert)

A simple react alert (toaster style) component

## Demo

You can see a live demo [here](http://schiehll.github.io/react-alert/).

## Installation

```bash
$ npm install react-alert
```

It expects external `react`, `react-dom` and `react-addons-css-transition-group`.

## Usage

To use it, you have to import the `AlertContainer` component, like this:

```js
import React from 'react';
import AlertContainer from 'react-alert';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  showAlert(){
    msg.show('Some text or component', {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png" />
    });
  }

  render(){
    return(
      <div>
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
        <button onClick={this.showAlert}>Show Alert</button>
      </div>
    );
  }
}
```

## Options

The `AlertContainer` component accepts the following options:

```js
{
  //defaults
  offset: 14, //the offset of the alert from the page border, can be any number
  position: 'bottom left', //the position of the alert, can be [bottom left, bottom right, top left, top right]
  theme: 'dark', //the color theme of the alert, can be [dark, light]
  time: 5000, //the time in miliseconds to the alert close itself, use 0 to prevent auto close (apply to all alerts)
  transition: 'scale' //the transition animation, can be [scale, fade]
}
```

When you call the `show` method, you can include the following options as a second parameter:

```js
{
  time: 0, //the time in miliseconds to the alert close itself, use 0 to prevent auto close (apply to this alert only), default is 5000
  type: 'info', //the alert type, can be [info, success, error], default is info
  icon: <img src="path/to/some/img/32x32.png" /> //the icon to show in the alert, if none is given the default of each type will be showed
}
```

## Api

Once you have the reference of the `AlertContainer` you can call the following methods:

```js
//show an alert
msg.show('Some message or component');
//show an info alert
msg.info('Some info message or component');
//show a success alert
msg.success('Some success message or component');
//show an error alert
msg.error('Some error message or component');
//removes all alerts from the page
msg.removeAll();
```
## Using React Components as alert content

You can also use a React Component to show a alert message, like this:

```js
//show an alert with a React Component as content
msg.show(<AComponent aProp="some message" />);
```