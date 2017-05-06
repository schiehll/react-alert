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
    type: PropTypes.oneOf(['info', 'success', 'error']),
    theme: PropTypes.oneOf(['dark', 'light']),
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
    const dark = theme === 'dark'

    return (
      <Alert glam={{dark}}>
        <IconPlaceholder>
          {icon || <Icon glam={{type}} />}
        </IconPlaceholder>
        <Message>
          {message}
        </Message>
        <Close
          glam={{dark}}
          onClick={this._removeItself}
        />
      </Alert>
    )
  }
}

export default AlertMessage
