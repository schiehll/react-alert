import React, { Component } from 'react'

export const getStyles = ({ position, zIndex }) => {
  const initialStyles = {
    position: 'fixed',
    zIndex
  }
  switch (position) {
    case 'top left':
      return {
        top: 0,
        left: 0,
        ...initialStyles
      }
    case 'top right':
      return {
        top: 0,
        right: 0,
        ...initialStyles
      }
    case 'bottom left':
      return {
        bottom: 0,
        left: 0,
        ...initialStyles
      }
    case 'bottom right':
      return {
        right: 0,
        bottom: 0,
        ...initialStyles
      }
    case 'top center':
      return {
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      }
    case 'bottom center':
      return {
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      }
    case 'center right':
      return {
        bottom: '50%',
        right: 0,
        ...initialStyles
      }
    case 'center left':
      return {
        bottom: '50%',
        left: 0,
        ...initialStyles
      }
  }
}

class Wrapper extends Component {
  styles = getStyles(this.props.options)

  render() {
    const { children, options, ...props } = this.props

    return (
      <div style={this.styles} {...props}>
        {children}
      </div>
    )
  }
}

export default Wrapper
