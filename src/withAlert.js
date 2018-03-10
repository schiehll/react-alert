import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import AlertWrapper from './AlertWrapper'
import AlertTranstion from './AlertTransition'
import { TransitionGroup } from 'react-transition-group'

const withAlert = WrappedComponent => {
  class WithAlert extends Component {
    static displayName = `WithAlert(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    static contextTypes = {
      alertContainer: PropTypes.object.isRequired,
      alertRoot: PropTypes.object.isRequired,
      alertTemplate: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
      options: PropTypes.object.isRequired
    }

    state = {
      alerts: []
    }

    syncAlerts = alerts => {
      this.setState({ alerts: [...alerts] })
    }

    componentWillMount() {
      this.setState({ alerts: [...this.context.alertContainer._getAlerts()] })
    }

    componentDidMount() {
      this.context.alertContainer._subscribe(this.syncAlerts)
    }

    componentWillUnmount() {
      this.context.alertContainer._unsubscribe(this.syncAlerts)
    }

    render() {
      const {
        alertContainer,
        alertTemplate: AlertComponent,
        alertRoot,
        options
      } = this.context

      return (
        <Fragment>
          <WrappedComponent {...this.props} alert={alertContainer} />
          {ReactDOM.createPortal(
            <AlertWrapper {...options}>
              <TransitionGroup>
                {this.state.alerts.map(alert => (
                  <AlertTranstion type={options.transition} key={alert.id}>
                    <AlertComponent
                      style={{ margin: options.offset }}
                      {...alert}
                    />
                  </AlertTranstion>
                ))}
              </TransitionGroup>
            </AlertWrapper>,
            alertRoot
          )}
        </Fragment>
      )
    }
  }

  return WithAlert
}

export default withAlert
