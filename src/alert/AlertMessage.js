import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert'
import Message from './Message'
import Icon, {IconPlaceholder} from './Icon'
import Close from './Close'

class AlertMessage extends Component {
  static defaultProps = {
    id: '',
    icon: null,
    message: '',
    type: 'info',
    theme: 'dark',
    time: 0,
    onRemoveAlert: () => {}
  }

  static propTypes = {
    id: PropTypes.string,
    icon: PropTypes.element,
    message: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    type: PropTypes.oneOf(['info', 'info-game','success', 'success-game', 'error', 'error-game']),
    theme: PropTypes.oneOf(['dark', 'light','green', 'yellow', 'red']),
    time: PropTypes.number,
    onRemoveAlert: PropTypes.func
  }

  _removeItself = () => {
    const {onRemoveAlert, id} = this.props
    onRemoveAlert(id)
  }

  componentDidMount () {
    const {time} = this.props

    if (time > 0) {
      setTimeout(() => {
        this._removeItself()
      }, time)
    }
  }

  render () {
    const {message, theme, icon, type} = this.props
    const themes ={
        dark: theme === 'dark',
        light: theme === 'light',
        green: theme === 'green',
        yellow: theme === "yellow",
        red: theme === "red"
    } 

    return (
      <Alert glam={themes}>
        <IconPlaceholder>
          {icon || <Icon glam={{type}} />}
        </IconPlaceholder>
        <Message>
          {message}
        </Message>
        <Close
          glam={themes}
          onClick={this._removeItself}
        />
      </Alert>
    )
  }
}

export default AlertMessage
