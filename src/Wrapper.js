import React, { Component } from 'react'

export const getStyles = ({ offset = '10px', position, zIndex }) => {
  switch (position) {
    case 'top left':
      return {
        position: 'fixed',
        top: `${offset}`,
        left: `${offset}`,
        zIndex
      }
    case 'top right':
      return {
        position: 'fixed',
        top: `${offset}`,
        right: `${offset}`,
        zIndex
      }
    case 'bottom left':
      return {
        position: 'fixed',
        bottom: `${offset}`,
        left: `${offset}`,
        zIndex
      }
    case 'bottom right':
      return {
        position: 'fixed',
        bottom: `${offset}`,
        right: `${offset}`,
        zIndex
      }
    case 'top center':
      return {
        position: 'fixed',
        top: `${offset}`,
        left: `50%`,
        transform: 'translate(-50%, 0%)',
        zIndex
      }
    case 'bottom center':
      return {
        position: 'fixed',
        bottom: `${offset}`,
        left: `50%`,
        transform: 'translate(-50%, 0%)',
        zIndex
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
