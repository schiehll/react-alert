import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from './AlertContext'

class AlertProvider extends React.Component {
  static propTypes = {
    offset: PropTypes.string,
    position: PropTypes.oneOf([
      'top left',
      'top right',
      'top center',
      'bottom left',
      'bottom right',
      'bottom center'
    ]),
    timeout: PropTypes.number,
    type: PropTypes.oneOf(['info', 'success', 'error']),
    transition: PropTypes.oneOf(['fade', 'scale']),
    zIndex: PropTypes.number,
    template: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired
  }

  static defaultProps = {
    offset: '10px',
    position: 'top center',
    timeout: 0,
    type: 'info',
    transition: 'fade',
    zIndex: 100
  }

  state = {
    isClient: false,
    alerts: []
  }

  alertRootElement = null

  addAlert = alert => {
    this.setState(prevState => ({
      alerts: prevState.alerts.concat(alert)
    }))
  }

  removeAlert = alert => {
    this.setState(prevState => ({
      alerts: prevState.alerts.filter(a => a.id !== alert.id)
    }))
  }

  componentDidMount() {
    this.setState({ isClient: true })
  }

  render() {
    const {
      children,
      template,
      offset,
      position,
      timeout,
      type,
      transition,
      zIndex
    } = this.props

    if (this.state.isClient) {
      if (!this.alertRootElement) {
        this.alertRootElement = document.createElement('div')
        document.body.appendChild(this.alertRootElement)
      }
    } else {
      return null
    }

    return (
      <Provider
        value={{
          alertRoot: this.alertRootElement,
          alertTemplate: template,
          alerts: this.state.alerts,
          addAlert: this.addAlert,
          removeAlert: this.removeAlert,
          options: {
            offset,
            position,
            timeout,
            type,
            transition,
            zIndex
          }
        }}
      >
        {children}
      </Provider>
    )
  }
}

export default AlertProvider
