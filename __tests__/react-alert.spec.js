import React, { useRef, createContext } from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup, act } from 'react-testing-library'
import { Provider, useAlert, withAlert } from '../src'
import { getStyles } from '../src/Wrapper'

const styleString = style =>
  Object.entries(style).reduce((styleString, [propName, propValue]) => {
    return `${styleString}${propName}:${propValue};`
  }, '')

jest.useFakeTimers()

jest.mock('react-transition-group', () => {
  const FakeTransition = ({ children }) => children('entered')
  const FakeTransitionGroup = ({ children }) => children

  return { TransitionGroup: FakeTransitionGroup, Transition: FakeTransition }
})

describe('react-alert', () => {
  const Template = ({ message, close, options: { type }, style }) => (
    <div data-testid="alert" style={style}>
      <div>{message}</div>
      <div>type: {type}</div>
      <button onClick={close}>Close</button>
    </div>
  )

  let Child = () => {
    const alert = useAlert()

    return <button onClick={() => alert.show('Message')}>Show Alert</button>
  }

  afterEach(cleanup)

  it('should show an alert', () => {
    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))

    expect(getByText(/message/i)).toBeInTheDocument()
  })

  it('should remove an alert on close click', () => {
    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    const alertElement = getByText(/message/i)
    expect(getByText(/message/i)).toBeInTheDocument()

    fireEvent.click(getByText(/close/i))
    expect(alertElement).not.toBeInTheDocument()
  })

  it('should show multiple alerts', () => {
    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText, queryAllByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    fireEvent.click(getByText(/show alert/i))

    expect(queryAllByText(/message/i)).toHaveLength(2)
  })

  it('should close an alert automatic after the given timeout', () => {
    const App = props => (
      <Provider template={Template} timeout={2000}>
        <Child />
      </Provider>
    )

    const { getByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    const alertElement = getByText(/message/i)

    expect(alertElement).toBeInTheDocument()
    act(() => jest.runAllTimers())
    expect(alertElement).not.toBeInTheDocument()
  })

  it('should be able to show an alert calling success', () => {
    Child = () => {
      const alert = useAlert()

      return (
        <button onClick={() => alert.success('Message')}>Show Alert</button>
      )
    }

    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    expect(getByText(/type: success/i)).toBeInTheDocument()
  })

  it('should be able to show an alert calling error', () => {
    Child = () => {
      const alert = useAlert()

      return <button onClick={() => alert.error('Message')}>Show Alert</button>
    }

    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    expect(getByText(/type: error/i)).toBeInTheDocument()
  })

  it('should be able to show an alert calling info', () => {
    Child = () => {
      const alert = useAlert()

      return <button onClick={() => alert.info('Message')}>Show Alert</button>
    }

    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    expect(getByText(/type: info/i)).toBeInTheDocument()
  })

  it('should call onOpen and onClose callbacks', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()

    Child = () => {
      const alert = useAlert()

      return (
        <button onClick={() => alert.info('Message', { onOpen, onClose })}>
          Show Alert
        </button>
      )
    }

    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    expect(onOpen).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText(/close/i))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should accept different position options', () => {
    const positions = [
      'top left',
      'top right',
      'bottom left',
      'bottom right',
      'top center',
      'bottom center'
    ]

    positions.forEach(position => {
      const App = props => (
        <Provider
          data-testid="provider"
          template={Template}
          position={position}
        >
          <Child />
        </Provider>
      )

      const { getByText, getByTestId } = render(<App />)
      fireEvent.click(getByText(/show alert/i))

      const providerElement = getByTestId('provider')
      const styles = styleString(getStyles(position))
      expect(providerElement).toHaveStyle(styles)
      cleanup()
    })
  })

  it('should accept a containerStyle option', () => {
    const containerStyle = { zIndex: 50, border: '1px solid red' }
    const App = props => (
      <Provider
        data-testid="provider"
        template={Template}
        containerStyle={containerStyle}
      >
        <Child />
      </Provider>
    )

    const { getByText, getByTestId } = render(<App />)
    fireEvent.click(getByText(/show alert/i))

    const providerElement = getByTestId('provider')
    const styles = styleString(containerStyle)
    expect(providerElement).toHaveStyle(styles)
  })

  it('should respect the given offset option', () => {
    const App = props => (
      <Provider template={Template} offset="30px">
        <Child />
      </Provider>
    )

    const { getByText, getByTestId } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    const alertElement = getByTestId('alert')
    expect(alertElement).toHaveStyle('margin: 30px')
  })

  it('should remove the alert matching the given id on remove call', () => {
    Child = () => {
      const alert = useAlert()
      const alertRef = useRef(null)

      return (
        <div>
          <button
            onClick={() => {
              alertRef.current = alert.show('Message')
            }}
          >
            Show Alert
          </button>
          <button
            onClick={() => {
              if (alertRef.current) alert.remove(alertRef.current)
            }}
          >
            Remove Alert
          </button>
        </div>
      )
    }

    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText, getByTestId } = render(<App />)
    fireEvent.click(getByText(/show alert/i))
    const alertElement = getByText(/message/i)
    expect(getByText(/message/i)).toBeInTheDocument()

    fireEvent.click(getByText(/remove alert/i))
    expect(alertElement).not.toBeInTheDocument()
  })

  it('should work with withAlert HOC', () => {
    Child = withAlert()(({ alert }) => {
      return <button onClick={() => alert.show('Message')}>Show Alert</button>
    })

    const App = props => (
      <Provider template={Template}>
        <Child />
      </Provider>
    )

    const { getByText } = render(<App />)
    fireEvent.click(getByText(/show alert/i))

    expect(getByText(/message/i)).toBeInTheDocument()
  })

  it('should accept a context option', () => {
    const BottomLeftAlertContext = createContext()

    Child = () => {
      const alert = useAlert()
      const bottomLeftAlert = useAlert(BottomLeftAlertContext)

      return (
        <div>
          <button
            data-testid="default-context"
            onClick={() => alert.show('Message')}
          >
            Show Alert
          </button>
          <button
            data-testid="custom-context"
            onClick={() => bottomLeftAlert.show('Bottom Left Message')}
          >
            Show Bottom Left Alert
          </button>
        </div>
      )
    }

    const App = props => (
      <Provider template={Template}>
        <Provider
          template={Template}
          context={BottomLeftAlertContext}
          position="bottom left"
        >
          <Child />
        </Provider>
      </Provider>
    )

    const { getByText, getByTestId } = render(<App />)

    fireEvent.click(getByTestId('default-context'))
    expect(getByText(/message/i)).toBeInTheDocument()

    fireEvent.click(getByTestId('custom-context'))
    expect(getByText(/bottom left message/i)).toBeInTheDocument()
  })
})
