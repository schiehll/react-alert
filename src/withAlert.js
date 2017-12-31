import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const withAlert = WrappedComponent => {
  class WithAlert extends Component {
    static displayName = `WithAlert(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`

    static contextTypes = {
      alertContainer: PropTypes.object.isRequired,
      alertRoot: PropTypes.object.isRequired
    }

    state = {
      alerts: []
    }

    setAlerts = alerts => {
      this.setState({ alerts })
    }

    componentWillMount () {
      this.setState({ alerts: this.context.alertContainer.getAlerts() })
    }

    componentDidMount () {
      this.context.alertContainer.subscribe(this.setAlerts)
    }

    componentWillUnmount () {
      this.context.alertContainer.unsubscribe(this.setAlerts)
    }

    render () {
      return (
        <Fragment>
          <WrappedComponent
            {...this.props}
            alert={this.context.alertContainer}
        />
          {ReactDOM.createPortal(
            this.state.alerts.map((alert, index) => <div key={index}>{alert}</div>),
            this.context.alertRoot
          )}
        </Fragment>
      )
    }
  }

  return WithAlert
}

export default withAlert
