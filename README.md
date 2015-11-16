# react-alert

A simple alert component for react

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
      offset: 20,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  showAlert(){
    this.alert.show('Some text or component', {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png" />
    });
  }

  render(){
    return(
      <div>
        <AlertContainer ref={(a) => this.alert = a} {...this.alertOptions} />
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
  offset: 20, //the offset of the alert from the page border, can be any number
  position: 'bottom left', //the position of the alert, can be [bottom left, bottom right, top left, top right]
  theme: 'dark', //the color theme of the alert, can be [dark, light]
  time: 5000, //the time in miliseconds to the alert close itself, use 0 to prevent auto close (apply to all alerts)
  transition: 'scale' //the transition animation, can be [scale, fade]
}
```

When you call the `show` method, you can include the following options as a second parameter:

```js
{
  time: 0, //the time in miliseconds to the alert close itself, use 0 to prevent auto close (apply to this alert only)
  type: 'info', //the alert type, can be [info, success, error]
  icon: <img src="path/to/some/img/32x32.png" /> //the icon to show in the alert, if none is given the default of each type will be showed
}
```

You can also call the `info`, the `success` or the `error` method directly to set the alert type automatically, like this:

```js
this.alert.info('Some info message!');
this.alert.success('Some success message!');
this.alert.error('Some error message!');
```