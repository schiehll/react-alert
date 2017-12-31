import React, { Component } from 'react'
import Broadcast from './Broadcast'

class Provider extends Component {
  alertRootElement = document.createElement('div')

  componentDidMount () {
    document.body.insertBefore(this.alertRootElement, document.body.firstChild)
  }

  componentWillUnmount () {
    document.body.removeChild(this.alertRootElement)
  }

  render () {
    return (
      <Broadcast alertRoot={this.alertRootElement}>
        {this.props.children}
      </Broadcast>
    )
  }
}

export default Provider
