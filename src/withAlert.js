import React from 'react'
import DefaultContext from './Context'

const withAlert = (Context = DefaultContext) => WrappedComponent => {
  const WithAlert = (props, forwardedRef) => (
    <Context.Consumer>
      {alert => (
        <WrappedComponent ref={forwardedRef} {...props} alert={alert.current} />
      )}
    </Context.Consumer>
  )

  WithAlert.displayName = `WithAlert(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`

  return React.forwardRef(WithAlert)
}

export default withAlert
