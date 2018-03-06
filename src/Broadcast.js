import { Component } from 'react'
import PropTypes from 'prop-types'
import AlertContainer from './AlertContainer'

class Broadcast extends Component {
  static displayName = 'AlertsBroadcast'

  static propTypes = {
    alertRoot: PropTypes.object.isRequired,
    alertTemplate: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
    options: PropTypes.object.isRequired
  }

  static childContextTypes = {
    alertContainer: PropTypes.object.isRequired,
    alertRoot: PropTypes.object.isRequired,
    alertTemplate: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
    options: PropTypes.object.isRequired
  }

  alertContainer = new AlertContainer(this.props.options)

  getChildContext() {
    const { alertRoot, alertTemplate, options } = this.props

    return {
      alertContainer: this.alertContainer,
      alertRoot,
      alertTemplate,
      options
    }
  }

  render() {
    return this.props.children
  }
}

export default Broadcast
