import React from 'react'
import DefaultContext from './Context'

const withAlert = (Context = DefaultContext) => WrappedComponent => {
  const WithAlert = props => (
    <Context.Consumer>
      {alert => <WrappedComponent {...props} alert={alert} />}
    </Context.Consumer>
  )

  WithAlert.displayName = `WithAlert(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`

  return WithAlert
}

export default withAlert
