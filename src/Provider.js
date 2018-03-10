import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Broadcast from './Broadcast'

class Provider extends Component {
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
    isClient: false
  }

  alertRootElement = null

  componentDidMount() {
    this.setState({ isClient: true })
  }

  componentWillUnmount() {
    document.body.removeChild(this.alertRootElement)
    this.alertRootElement = null
  }

  render() {
    if (this.state.isClient) {
      if (!this.alertRootElement) {
        this.alertRootElement = document.createElement('div')
        document.body.appendChild(this.alertRootElement)
      }
    } else {
      return null
    }

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

    return (
      <Broadcast
        alertRoot={this.alertRootElement}
        alertTemplate={template}
        options={{ offset, position, timeout, type, transition, zIndex }}
      >
        {children}
      </Broadcast>
    )
  }
}

export default Provider
