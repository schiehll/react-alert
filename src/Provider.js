import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup } from 'react-transition-group'
import { createPortal } from 'react-dom'
import DefaultContext from './Context'
import Wrapper from './Wrapper'
import Transition from './Transition'
import { positions, transitions, types } from './options'
import { groupBy } from './helpers'

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
  const alertContext = useRef(null)
  const timersId = useRef([])
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    root.current = document.createElement('div')
    document.body.appendChild(root.current)
    const timersIdRef = timersId.current

    return () => {
      timersIdRef.forEach(clearTimeout)
      if (root.current) document.body.removeChild(root.current)
    }
  }, [])

  const remove = useCallback(alert => {
    setAlerts(currentAlerts => {
      const lengthBeforeRemove = currentAlerts.length
      const filteredAlerts = currentAlerts.filter(a => a.id !== alert.id)

      if (lengthBeforeRemove > filteredAlerts.length && alert.options.onClose) {
        alert.options.onClose()
      }

      return filteredAlerts
    })
  }, [])

  const removeAll = useCallback(() => {
    alertContext.current.alerts.forEach(remove)
  }, [remove])

  const show = useCallback(
    (message = '', options = {}) => {
      const id = Math.random()
        .toString(36)
        .substr(2, 9)

      const alertOptions = {
        position: options.position || position,
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

      setAlerts(state => state.concat(alert))
      if (alert.options.onOpen) alert.options.onOpen()

      return alert
    },
    [position, remove, timeout, type]
  )

  const success = useCallback(
    (message = '', options = {}) => {
      options.type = types.SUCCESS
      return show(message, options)
    },
    [show]
  )

  const error = useCallback(
    (message = '', options = {}) => {
      options.type = types.ERROR
      return show(message, options)
    },
    [show]
  )

  const info = useCallback(
    (message = '', options = {}) => {
      options.type = types.INFO
      return show(message, options)
    },
    [show]
  )

  alertContext.current = {
    alerts,
    show,
    remove,
    removeAll,
    success,
    error,
    info
  }

  const alertsByPosition = groupBy(alerts, alert => alert.options.position)

  return (
    <Context.Provider value={alertContext}>
      {children}
      {root.current &&
        createPortal(
          <Fragment>
            {Object.keys(positions).map(key => {
              const position = positions[key]

              return (
                <TransitionGroup
                  appear
                  key={position}
                  options={{ position, containerStyle }}
                  component={Wrapper}
                  {...props}
                >
                  {alertsByPosition[position]
                    ? alertsByPosition[position].map(alert => (
                        <Transition type={transition} key={alert.id}>
                          <AlertComponent
                            style={{ margin: offset }}
                            {...alert}
                          />
                        </Transition>
                      ))
                    : null}
                </TransitionGroup>
              )
            })}
          </Fragment>,
          root.current
        )}
    </Context.Provider>
  )
}

Provider.propTypes = {
  offset: PropTypes.string,
  position: PropTypes.oneOf(
    Object.keys(positions).map(position => positions[position])
  ),
  timeout: PropTypes.number,
  type: PropTypes.oneOf(Object.keys(types).map(type => types[type])),
  transition: PropTypes.oneOf(
    Object.keys(transitions).map(transition => transitions[transition])
  ),
  containerStyle: PropTypes.object,
  template: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  context: PropTypes.shape({
    Provider: PropTypes.object,
    Consumer: PropTypes.object
  })
}

Provider.defaultProps = {
  offset: '10px',
  position: positions.TOP_CENTER,
  timeout: 0,
  type: types.INFO,
  transition: transitions.FADE,
  containerStyle: {
    zIndex: 100
  },
  context: DefaultContext
}

export default Provider
