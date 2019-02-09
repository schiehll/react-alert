import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup } from 'react-transition-group'
import { createPortal } from 'react-dom'
import DefaultContext from './Context'
import Wrapper from './Wrapper'
import Transition from './Transition'

const Provider = ({
  children,
  offset,
  position,
  timeout,
  type,
  transition,
  containerStyle,
  template: AlertComponent,
  context: Context,
  ...props
}) => {
  const root = useRef(null)
  const timersId = useRef([])
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    root.current = document.createElement('div')
    document.body.appendChild(root.current)

    return () => {
      timersId.current.forEach(clearTimeout)

      if (root.current) document.body.removeChild(root.current)
    }
  }, [])

  const remove = alert => {
    setAlerts(prevState => {
      const lengthBeforeRemove = prevState.length
      const alerts = prevState.filter(a => a.id !== alert.id)

      if (lengthBeforeRemove > alerts.length && alert.options.onClose) {
        alert.options.onClose()
      }

      return alerts
    })
  }

  const show = (message = '', options = {}) => {
    const id = Math.random()
      .toString(36)
      .substr(2, 9)

    const alertOptions = {
      timeout,
      type,
      ...options
    }

    const alert = {
      id,
      message,
      options: alertOptions
    }

    alert.close = () => remove(alert)

    if (alert.options.timeout) {
      const timerId = setTimeout(() => {
        remove(alert)

        timersId.current.splice(timersId.current.indexOf(timerId), 1)
      }, alert.options.timeout)

      timersId.current.push(timerId)
    }

    setAlerts(alerts => alerts.concat(alert))
    if (alert.options.onOpen) alert.options.onOpen()

    return alert
  }

  const success = (message = '', options = {}) => {
    options.type = 'success'
    return show(message, options)
  }

  const error = (message = '', options = {}) => {
    options.type = 'error'
    return show(message, options)
  }

  const info = (message = '', options = {}) => {
    options.type = 'info'
    return show(message, options)
  }

  const alertContext = {
    root: root.current,
    alerts,
    show,
    remove,
    success,
    error,
    info
  }

  return (
    <Context.Provider value={alertContext}>
      {children}
      {root.current &&
        createPortal(
          <Wrapper options={{ position, containerStyle }} {...props}>
            <TransitionGroup>
              {alerts.map(alert => (
                <Transition type={transition} key={alert.id} appear={true}>
                  <AlertComponent style={{ margin: offset }} {...alert} />
                </Transition>
              ))}
            </TransitionGroup>
          </Wrapper>,
          root.current
        )}
    </Context.Provider>
  )
}

Provider.propTypes = {
  offset: PropTypes.string,
  position: PropTypes.oneOf([
    'top left',
    'top right',
    'top center',
    'bottom left',
    'bottom right',
    'bottom center'
  ]),
  timeout: PropTypes.number,
  type: PropTypes.oneOf(['info', 'success', 'error']),
  transition: PropTypes.oneOf(['fade', 'scale']),
  containerStyle: PropTypes.object,
  template: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  context: PropTypes.shape({
    Provider: PropTypes.object,
    Consumer: PropTypes.object
  })
}

Provider.defaultProps = {
  offset: '10px',
  position: 'top center',
  timeout: 0,
  type: 'info',
  transition: 'fade',
  containerStyle: {
    zIndex: 100
  },
  context: DefaultContext
}

export default Provider
