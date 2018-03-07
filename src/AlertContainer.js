import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { TransitionGroup } from 'react-transition-group'
import AlertTransition from './AlertTransition'
import AlertWrapper from './AlertWrapper'

class AlertContainer extends Component {
  show = (message = '', options = {}) => {
    const id = new Date().getTime()
    const { context } = this.props

    const alertOptions = {
      ...context.options,
      ...options
    }

    const alert = {
      id,
      message,
      options: alertOptions
    }

    if (alert.options.timeout) {
      setTimeout(() => {
        this.remove(alert)
      }, alert.options.timeout)
    }

    alert.close = () => this.remove(alert)
    context.addAlert(alert)

    alert.options.onOpen && alert.options.onOpen()

    return alert
  }

  remove = alert => {
    const { context } = this.props
    const filteredAlerts = context.alerts.filter(a => a.id !== alert.id)

    if (context.alerts.length > filteredAlerts.length) {
      context.removeAlert(alert)
      alert.options.onClose && alert.options.onClose()
    }
  }

  success = (message = '', options = {}) => {
    options.type = 'success'
    return this.show(message, options)
  }

  error = (message = '', options = {}) => {
    options.type = 'error'
    return this.show(message, options)
  }

  info = (message = '', options = {}) => {
    options.type = 'info'
    return this.show(message, options)
  }

  render() {
    const { context, component: WrapperdComponent, ...props } = this.props

    return (
      <Fragment>
        <WrapperdComponent
          {...props}
          alert={{
            show: this.show,
            success: this.success,
            info: this.info,
            error: this.error,
            remove: this.remove
          }}
        />
        {ReactDOM.createPortal(
          <AlertWrapper {...context.options}>
            <TransitionGroup>
              {context.alerts.map(alert => (
                <AlertTransition
                  type={context.options.transition}
                  key={alert.id}
                >
                  <context.alertTemplate
                    style={{ margin: context.options.offset }}
                    {...alert}
                  />
                </AlertTransition>
              ))}
            </TransitionGroup>
          </AlertWrapper>,
          context.alertRoot
        )}
      </Fragment>
    )
  }
}

export default AlertContainer
