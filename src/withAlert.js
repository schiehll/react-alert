import React, { Component } from 'react'
import { Consumer } from './AlertContext'
import AlertContainer from './AlertContainer'

const withAlert = WrappedComponent => {
  class WithAlert extends Component {
    static displayName = `WithAlert(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    render() {
      return (
        <Consumer>
          {context => {
            return (
              <AlertContainer component={WrappedComponent} context={context} {...this.props} />
            )
          }}
        </Consumer>
      )
    }
  }

  return WithAlert
}

export default withAlert
