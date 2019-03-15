import React from 'react'
import { Transition as AlertTransition } from 'react-transition-group'
import { transitions } from './options'

const duration = 250

const defaultStyle = {
  [transitions.FADE]: {
    transition: `opacity ${duration}ms ease`,
    opacity: 0
  },
  [transitions.SCALE]: {
    transform: 'scale(1)',
    transition: `all ${duration}ms ease-in-out`
  }
}

const transitionStyles = {
  [transitions.FADE]: {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
  },
  [transitions.SCALE]: {
    entering: { transform: 'scale(0)' },
    entered: { transform: 'scale(1)' },
    exiting: { transform: 'scale(1)' },
    exited: { transform: 'scale(0)' }
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
