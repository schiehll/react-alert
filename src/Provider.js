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
    template: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
  }

  static defaultProps = {
    offset: '10px',
    position: 'top center',
    timeout: 0,
    type: 'info',
    transition: 'fade',
    zIndex: 100
  }

  alertRootElement = document.createElement('div')

  componentDidMount () {
    document.body.appendChild(this.alertRootElement)
  }

  componentWillUnmount () {
    document.body.removeChild(this.alertRootElement)
  }

  render () {
    const { children, template, offset, position, timeout, type, transition, zIndex } = this.props

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
