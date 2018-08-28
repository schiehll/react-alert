import React from 'react'
import { Transition as AlertTransition } from 'react-transition-group'

const duration = 250

const defaultStyle = {
  fade: {
    transition: `opacity ${duration}ms ease`,
    opacity: 0
  },
  scale: {
    transform: 'scale(1)',
    transition: `all ${duration}ms ease-in-out`
  }
}

const transitionStyles = {
  fade: {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
  },
  scale: {
    entering: { transform: 'scale(0)' },
    entered: { transform: 'scale(1)' },
    exiting: { transform: 'scale(0)' },
    exited: { transform: 'scale(1)' }
  }
}

const Transtion = ({ children, type, ...props }) => (
  <AlertTransition {...props} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle[type],
          ...transitionStyles[type][state]
        }}
      >
        {children}
      </div>
    )}
  </AlertTransition>
)

export default Transtion
