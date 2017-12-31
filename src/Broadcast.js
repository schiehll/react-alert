import { Component } from 'react'
import PropTypes from 'prop-types'
import AlertContainer from './AlertContainer'

class Broadcast extends Component {
  static displayName = 'AlertsBroadcast'

  static propTypes = {
    alertRoot: PropTypes.object.isRequired
  }

  static childContextTypes = {
    alertContainer: PropTypes.object.isRequired,
    alertRoot: PropTypes.object.isRequired
  }

  alertContainer = new AlertContainer()

  getChildContext () {
    return {
      alertContainer: this.alertContainer,
      alertRoot: this.props.alertRoot
    }
  }

  render () {
    return this.props.children
  }
}

export default Broadcast
