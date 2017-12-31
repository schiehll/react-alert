import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'
import nanoid from 'nanoid'
import Container from './Container'
import AlertMessage from '../alert'

class AlertContainer extends Component {
  static defaultProps = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  static propTypes = {
    offset: PropTypes.number,
    position: PropTypes.oneOf([
      'bottom left',
      'bottom right',
      'top right',
      'top left',
      'top center',
      'bottom center'
    ]),
    theme: PropTypes.oneOf(['dark', 'light', 'green', 'yellow', 'red']),
    time: PropTypes.number,
    transition: PropTypes.oneOf(['scale', 'fade'])
  }

  state = {
    alerts: []
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


  show = (message = '', options = {}) => {
    const {theme, time} = this.props

    const alert = {
      id: nanoid(7),
      message,
      time,
      theme,
      ...options
    }

    this.setState(prevState => ({
      alerts: prevState.alerts.concat(alert)
    }))
    return alert.id
  }

  removeAll = () => {
    const alertsRemoved = this.state.alerts
    this.setState({alerts: []})
    alertsRemoved.forEach(alert => alert.onClose && alert.onClose())
  }

  removeAlert = id => {
    const alertRemoved = this.state.alerts.filter(alert => alert.id === id)[0]
    this.setState(prevState => ({
      alerts: prevState.alerts.filter(alert => alert.id !== id)
    }))
    alertRemoved && alertRemoved.onClose && alertRemoved.onClose()
  }

  render () {
    const {position, offset, transition} = this.props

    return (
      <Container glam={{position, offset}}>
        <CSSTransitionGroup
          transitionName={transition}
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {this.state.alerts.map(alert => {
            return (
              <AlertMessage
                key={alert.id}
                {...alert}
                onRemoveAlert={this.removeAlert}
              />
            )
          })}
        </CSSTransitionGroup>
      </Container>
    )
  }
}

export default AlertContainer
