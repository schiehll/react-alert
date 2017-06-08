# react-alert

> A simple react alert (toaster style) component.

[![travis build](https://img.shields.io/travis/schiehll/react-alert.svg?style=flat-square)](https://travis-ci.org/schiehll/react-alert)
[![Coveralls branch](https://img.shields.io/coveralls/schiehll/react-alert/master.svg?style=flat-square)](https://coveralls.io/github/schiehll/react-alert?branch=master)
[![version](https://img.shields.io/npm/v/react-alert.svg?style=flat-square)](http://npm.im/react-alert)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

## Demo

You can see a live demo [here](http://schiehll.github.io/react-alert/).

## Installation

```bash
$ npm install react-alert
```

## Usage

To use it, you have to import the `AlertContainer` component, like this:

```js
import React, {Component} from 'react'
import AlertContainer from 'react-alert'

export default class App extends Component {
  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Some text or component', {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png" />
    })
  }

  render () {
    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <button onClick={this.showAlert}>Show Alert</button>
      </div>
    )
  }
}
```

## Api

Once you have the reference of the `AlertContainer` you can call the following methods:

```js
// show an alert
this.msg.show('Some message or component')
// show an info alert
this.msg.info('Some info message or component')
// show a success alert
this.msg.success('Some success message or component')
// show an error alert
this.msg.error('Some error message or component')
// removes all alerts from the page
this.msg.removeAll()
```
## Options

The `AlertContainer` component accepts the following props:

```js
{
  // defaults
  offset: 14, // the offset of the alert from the page border, can be any number
  position: 'bottom left', // the position of the alert, can be [bottom left, bottom right, top left, top right]
  theme: 'dark', // the color theme of the alert, can be [dark, light]
  time: 5000, // the time in miliseconds to the alert close itself, use 0 to prevent auto close (apply to all alerts)
  transition: 'scale' // the transition animation, can be [scale, fade]
}
```

When you call `show`, `info`, `success` and `error` method, you can include the following options as a second parameter:

```js
{
  time: 0, // the time in miliseconds to the alert close itself, use 0 to prevent auto close (apply to this alert only), default is 5000
  icon: <img src="path/to/some/img/32x32.png" />, // the icon to show in the alert, if none is given the default of each type will be showed
  onClose: () => {} // the function called when message is closed
}
```

When you call the `show` method, you can additionally include the `info` option:

```js
{
  type: 'info' // the alert type, can be [info, success, error], default is info
}
```

## Using React Components as alert content

You can also use a React Component to show an alert message, like this:

```js
// show an alert with a React Component as content
this.msg.show(<AComponent aProp="some message" />)
```
