import React, { useRef } from 'react'
import { Transition as AlertTransition } from 'react-transition-group'
import { transitions } from './options'

const duration = 250
const durationFrom = 500

const defaultStyle = {
  [transitions.FADE]: {
    transition: `opacity ${duration}ms ease`,
    opacity: 0
  },
  [transitions.SCALE]: {
    transform: 'scale(1)',
    transition: `all ${duration}ms ease-in-out`
  },
  [transitions.ENTER_FROM_RIGHT]: {
    transform: 'translateX(0)',
    transition: `transform ${durationFrom}ms ease-in-out`
  },
  [transitions.ENTER_FROM_LEFT]: {
    transform: 'translateX(-100%)',
    transition: `transform ${durationFrom}ms ease-in-out`
  },
  [transitions.ENTER_FROM_TOP]: {
    transform: 'translateY(-100%)',
    transition: `transform ${durationFrom}ms ease-in-out`
  },
  [transitions.ENTER_FROM_BOTTOM]: {
    transform: 'translateY(100%)',
    transition: `transform ${durationFrom}ms ease-in-out`
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
    exiting: { transform: 'scale(0)' },
    exited: { transform: 'scale(1)' }
  },
  [transitions.ENTER_FROM_RIGHT]: {
    entering: { transform: 'translateX(0)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(100%)' },
    exited: { transform: 'translateX(100%)' }
  },
  [transitions.ENTER_FROM_LEFT]: {
    entering: { transform: 'translateX(0)' },
    entered: { transform: 'translateX(-100%)' },
    exited: { transform: 'translateX(0)' }
  },
  [transitions.ENTER_FROM_TOP]: {
    entering: { transform: 'translateY(0)' },
    entered: { transform: 'translateY(-100%)' },
    exited: { transform: 'translateY(0)' }
  },
  [transitions.ENTER_FROM_BOTTOM]: {
    entering: { transform: 'translateY(0)' },
    entered: { transform: 'translateY(100%)' },
    exited: { transform: 'translateY(0)' }
  }
}

const Transtion = ({ children, type, ...props }) => {
  const ref = useRef(null)

  return (
    <AlertTransition nodeRef={ref} {...props} timeout={duration}>
      {state => (
        <div
          ref={ref}
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
}

export default Transtion
