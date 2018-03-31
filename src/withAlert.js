import React, { Component } from 'react'
import { Context } from './Context'

const withAlert = WrappedComponent => {
  class WithAlert extends Component {
    static displayName = `WithAlert(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    render() {
      return (
        <Context.Consumer>
          {alert => <WrappedComponent {...this.props} alert={alert} />}
        </Context.Consumer>
      )
    }
  }

  return WithAlert
}

export default withAlert
