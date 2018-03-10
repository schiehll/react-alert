# react-alert

> This is the docs for v3, if you are still using v2 (React 15) you should look [here](https://github.com/schiehll/react-alert/tree/v2)

[![travis build](https://img.shields.io/travis/schiehll/react-alert.svg?style=flat-square)](https://travis-ci.org/schiehll/react-alert)
[![version](https://img.shields.io/npm/v/react-alert.svg?style=flat-square)](http://npm.im/react-alert)

## Demo

[![Edit l2mo430lzq](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/l2mo430lzq)

## Installation

```bash
$ npm install --save react-alert
```

In v3 you can now provide your own alert template, making things way more customizable. For that reason, we now have two packages, the core one `react-alert` and one with a basic implementation of an alert template, so if you don't need a custom alert you can just plug `react-alert-template-basic` in.

If that's the case you will need to install it too:

```bash
$ npm install --save react-alert react-alert-template-basic
```

Also, this package expect the following peer dependencies:

```js
"prop-types": "^15.6.0"
"react": "^16.2.0"
"react-dom": "^16.2.0"
"react-transition-group": "^2.2.1"
```

So make sure that you have those installed too!

## Usage

First you have to wrap your app with the Provider giving it the alert template and optionally some options:

```js
// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App'

// optional cofiguration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

class Root extends Component  {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    )
  }
}

render(<Root />, document.getElementById('root'))
```

Then you wrap the components that you want to be able to show alerts:

```js
// App.js
import React, { Component } from 'react'
import { withAlert } from 'react-alert'

class App extends Component  {
  render () {
    return (
      <button
        onClick={() => {
          this.props.alert.show('Oh look, an alert!')
        }}
      >
        Show Alert
      </button>
    )
  }
}

export default withAlert(App)
```

And that's it!

## Options

You can pass the following options to `Provider`:

```js
offset: PropTypes.string // the margin of each alert
position: PropTypes.oneOf([
  'top left',
  'top right',
  'top center',
  'bottom left',
  'bottom right',
  'bottom center'
]) // the position of the alerts in the page
timeout: PropTypes.number // timeout to alert remove itself, if  set to 0 it never removes itself
type: PropTypes.oneOf(['info', 'success', 'error']) // the default alert type used when calling this.props.alert.show
transition: PropTypes.oneOf(['fade', 'scale']) // the transition animation
zIndex: PropTypes.number // the z-index of alerts
template: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired // the alert template to be used
```

Here's the defaults:

```js
offset: '10px'
position: 'top center'
timeout: 0
type: 'info'
transition: 'fade',
zIndex: 100
```

Those options will be applied to all alerts.

## Api

When you wrap a component using `withAlert` you receive the `alert` prop. Here's all you can do with it:

```js
// show
const alert = this.props.alert.show('Some message', {
  timeout: 2000 , // custom timeout just for this one alert
  type: 'success',
  onOpen: () => { console.log('hey') }, // callback that will be executed after this alert open
  onClose: () => { console.log('closed') } // callback that will be executed after this alert is removed
})

// info
// just an alias to this.props.alert.show(msg, { type: 'info' })
const alert = this.props.alert.info('Some info', {
  timeout: 2000 , // custom timeout just for this one alert
  onOpen: () => { console.log('hey') }, // callback that will be executed after this alert open
  onClose: () => { console.log('closed') } // callback that will be executed after this alert is removed
})

// success
// just an alias to this.props.alert.show(msg, { type: 'success' })
const alert = this.props.alert.success('Some success', {
  timeout: 2000 , // custom timeout just for this one alert
  onOpen: () => { console.log('hey') }, // callback that will be executed after this alert open
  onClose: () => { console.log('closed') } // callback that will be executed after this alert is removed
})

// error
// just an alias to this.props.alert.show(msg, { type: 'error' })
const alert = this.props.alert.error('Some error', {
  timeout: 2000 , // custom timeout just for this one alert
  onOpen: () => { console.log('hey') }, // callback that will be executed after this alert open
  onClose: () => { console.log('closed') } // callback that will be executed after this alert is removed
})

// remove
// use it to remove an alert programmatically
this.props.alert.remove(alert)
```

## Using a custom alert template

If you ever need to have an alert just the way you want, you can provide your own template! Here's a simple example:

```js
// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import App from './App'

class AlertTemplate extends Component {
  render () {
    // the style contains only the margin given as offset
    // options contains all given options, obviously
    // message is the alert message...
    // close is a function that closes the alert
    const { style, options, message, close } = this.props

    return (
      <div style={style}>
        {options.type === 'info' && '!'}
        {options.type === 'success' && ':)'}
        {options.type === 'error' && ':('}
        {message}
        <button onClick={close}>X</button>
      </div>
    )
  }
}

class Root extends Component  {
  render () {
    return (
      <AlertProvider template={AlertTemplate}>
        <App />
      </AlertProvider>
    )
  }
}

render(<Root />, document.getElementById('root'))
```

Easy, right?

## Using a component as a message

You can also pass in a component as a message, like this:

```js
this.props.alert.show(<div style={{ color: 'blue' }}>Some Message</div>)
```

## Templates

 - [Basic](https://github.com/schiehll/react-alert-template-basic)
 - [Dark](https://github.com/schiehll/react-alert-template-oldschool-dark)

Feel free to submit a PR with your own. 
