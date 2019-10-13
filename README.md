# react-alert

> alerts for React

[![travis build](https://img.shields.io/travis/schiehll/react-alert.svg?style=flat-square)](https://travis-ci.org/schiehll/react-alert)
[![version](https://img.shields.io/npm/v/react-alert.svg?style=flat-square)](http://npm.im/react-alert)

## Demo

[![Edit l2mo430lzq](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/l2mo430lzq)

## Installation

```bash
$ npm install --save react-alert
```

### Templates

You can provide your own alert template if you need to. Otherwise you can just plug in one of the following:

* [Basic](https://github.com/schiehll/react-alert-template-basic)
* [Dark](https://github.com/schiehll/react-alert-template-oldschool-dark)

Feel free to submit a PR with the link for your own template.

To get started, try installing the basic one:

```bash
$ npm install --save react-alert react-alert-template-basic
```

### Peer dependencies

This package expect the following peer dependencies:

```
  "react": "^16.8.1"
  "react-dom": "^16.8.1"
```

So make sure that you have those installed too!

## Usage

First you have to wrap your app with the Provider giving it the alert template and optionally some options:

```js
// index.js
import React from 'react'
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App'

// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)

render(<Root />, document.getElementById('root'))
```

Then import the `useAlert` hook to be able to show alerts:

```js
// App.js
import React from 'react'
import { useAlert } from 'react-alert'

const App = () => {
  const alert = useAlert()

  return (
    <button
      onClick={() => {
        alert.show('Oh look, an alert!')
      }}
    >
      Show Alert
    </button>
  )
}

export default App
```

And that's it!

You can also use it with a HOC:

```js
import React from 'react'
import { withAlert } from 'react-alert'

const App = ({ alert }) => (
  <button
    onClick={() => {
      alert.show('Oh look, an alert!')
    }}
  >
    Show Alert
  </button>
)

export default withAlert()(App)
```

## Options

You can pass the following options as props to `Provider`:

```js
offset: PropTypes.string // the margin of each alert
position: PropTypes.oneOf([
  'top left',
  'top right',
  'top center',
  'middle left',
  'middle',
  'middle right',
  'bottom left',
  'bottom right',
  'bottom center'
]) // the position of the alerts in the page
timeout: PropTypes.number // timeout to alert remove itself, if  set to 0 it never removes itself
type: PropTypes.oneOf(['info', 'success', 'error']) // the default alert type used when calling this.props.alert.show
transition: PropTypes.oneOf(['fade', 'scale']) // the transition animation
containerStyle: PropTypes.Object // style to be applied in the alerts container
template: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired // the alert template to be used
```

Note that the position, type and transition strings are available as constants which can be imported the next way:

```js
import { positions, transitions, types } from 'react-alert'
```

and have such values:

```js
export const positions = {
  TOP_LEFT: 'top left',
  TOP_CENTER: 'top center',
  TOP_RIGHT: 'top right',
  MIDDLE_LEFT: 'middle left',
  MIDDLE: 'middle',
  MIDDLE_RIGHT: 'middle right',
  BOTTOM_LEFT: 'bottom left',
  BOTTOM_CENTER: 'bottom center',
  BOTTOM_RIGHT: 'bottom right'
}

export const types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}

export const transitions = {
  FADE: 'fade',
  SCALE: 'scale'
}
```

Here's the defaults:

```js
offset: '10px'
position: positions.TOP_CENTER
timeout: 0
type: types.INFO
transition: transitions.FADE,
containerStyle: {
  zIndex: 100
}
```

Those options will be applied to all alerts (please, also have a look at [edge-cases](#showing-alerts-in-different-positions-at-the-same-time))

## Api

After getting the `alert` with the `useAlert` hook, this is what you can do with it:

```js
// show
const alert = alert.show('Some message', {
  timeout: 2000, // custom timeout just for this one alert
  type: 'success',
  onOpen: () => {
    console.log('hey')
  }, // callback that will be executed after this alert open
  onClose: () => {
    console.log('closed')
  } // callback that will be executed after this alert is removed
})

// info
// just an alias to alert.show(msg, { type: 'info' })
const alert = alert.info('Some info', {
  timeout: 2000, // custom timeout just for this one alert
  onOpen: () => {
    console.log('hey')
  }, // callback that will be executed after this alert open
  onClose: () => {
    console.log('closed')
  } // callback that will be executed after this alert is removed
})

// success
// just an alias to alert.show(msg, { type: 'success' })
const alert = alert.success('Some success', {
  timeout: 2000, // custom timeout just for this one alert
  onOpen: () => {
    console.log('hey')
  }, // callback that will be executed after this alert open
  onClose: () => {
    console.log('closed')
  } // callback that will be executed after this alert is removed
})

// error
// just an alias to alert.show(msg, { type: 'error' })
const alert = alert.error('Some error', {
  timeout: 2000, // custom timeout just for this one alert
  onOpen: () => {
    console.log('hey')
  }, // callback that will be executed after this alert open
  onClose: () => {
    console.log('closed')
  } // callback that will be executed after this alert is removed
})

// remove
// use it to remove an alert programmatically
alert.remove(alert)

// removeAll
// use it to remove all alerts programmatically
alert.removeAll()
```

## Using a custom alert template

If you ever need to have an alert just the way you want, you can provide your own template! Here's a simple example:

```js
import React from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import App from './App'

// the style contains only the margin given as offset
// options contains all alert given options
// message is the alert message
// close is a function that closes the alert
const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style}>
    {options.type === 'info' && '!'}
    {options.type === 'success' && ':)'}
    {options.type === 'error' && ':('}
    {message}
    <button onClick={close}>X</button>
  </div>
)

const Root = () => (
  <AlertProvider template={AlertTemplate}>
    <App />
  </AlertProvider>
)

render(<Root />, document.getElementById('root'))
```

Easy, right?

## Using a component as a message

You can also pass in a component as a message, like this:

```js
alert.show(<div style={{ color: 'blue' }}>Some Message</div>)
```

## Showing alerts in different positions at the same time

First of all, if have a need to separate the logic of showing alerts in different
positions at the same time it is possible to use multiple AlertProviders in one project and
nest them across the DOM tree. Also you can use different Contexts to get the references
to each type of alert separately.

```js
import React, { createContext } from 'react'
import { render } from 'react-dom'
import { useAlert, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const TopRightAlertContext = createContext()

const App = () => {
  const alert = useAlert()
  const topRightAlert = useAlert(TopRightAlertContext)

  return (
    <div>
      <button onClick={() => alert.show('Oh look, an alert!')}>
        Show Alert
      </button>
      <button
        onClick={() =>
          topRightAlert.show('Oh look, an alert in the top right corner!')
        }
      >
        Show Top Right Alert
      </button>
    </div>
  )
}

const Root = () => (
  <AlertProvider template={AlertTemplate}>
    <AlertProvider
      template={AlertTemplate}
      position={positions.TOP_RIGHT}
      context={TopRightAlertContext}
    >
      <App />
    </AlertProvider>
  </AlertProvider>
)

render(<Root />, document.getElementById('root'))
```

Another use case is when you don't want to nest a couple of AlertProviders
because it will somehow complicate management of alerts (for example when you
need to show alerts in more than three different positions).

In this case you can pass the position directly to the alert. The alerts without
individual position property will take it from the Provider.
Instead, passing the position to methods `show`, `success`, `info`, `error` will
overlap the Provider's position.

Passing the property `position` will look like this:

```js
alert.show('Oh look, an alert!', { position: positions.BOTTOM_LEFT })
```

An example of showing alerts simultaneously in three different positions:

```js
import React from 'react'
import { render } from 'react-dom'
import {
  Provider as AlertProvider,
  useAlert,
  positions,
  transitions
} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const alertOptions = {
  offset: '25px',
  timeout: 3000,
  transition: transitions.SCALE
}

const App = () => {
  const alert = useAlert()

  const showAlert = () => {
    alert.show('Oh look, an alert!', { position: positions.BOTTOM_LEFT }) //alert will be shown in bottom left
    alert.show('Oh look, an alert!', { position: positions.BOTTOM_RIGHT }) //alert will be shown in bottom right
    alert.show('Oh look, an alert!') //alert will use the Provider's position `top right`
  }

  return <button onClick={showAlert}>Show Alert</button>
}

const Root = () => (
  <AlertProvider template={AlertTemplate}>
    <AlertProvider
      template={AlertTemplate}
      position={positions.TOP_RIGHT} //default position for all alerts without individual position
      {...alertOptions}
    >
      <App />
    </AlertProvider>
  </AlertProvider>
)

render(<Root />, document.getElementById('root'))
```
