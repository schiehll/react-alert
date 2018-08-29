import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import ShallowRenderer from 'react-test-renderer/shallow'
import Provider from '../src/Provider'
import withAlert from '../src/withAlert'
import Wrapper, { getStyles } from '../src/Wrapper'

jest.useFakeTimers()

describe('public api', () => {
  class Child extends Component {
    render() {
      return <div />
    }
  }

  class AlertTemplate extends Component {
    render() {
      return <div />
    }
  }

  let ChildWithAlert
  let tree
  const message = 'Some Message'
  let provider
  let child

  function renderProviderTree(AlertTemplate, options = {}, alertProps = {}) {
    const tree = TestUtils.renderIntoDocument(
      <Provider template={AlertTemplate} {...options}>
        <ChildWithAlert {...alertProps} />
      </Provider>
    )
    provider = TestUtils.findRenderedComponentWithType(tree, Provider)
    child = TestUtils.findRenderedComponentWithType(tree, Child)
    return tree
  }

  beforeEach(() => {
    ChildWithAlert = withAlert(Child)
    tree = renderProviderTree(AlertTemplate)
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(tree).parentNode)
  })

  describe('Provider', () => {
    it('should wrap the component name to indicate that it have a global state', () => {
      // default name
      expect(ChildWithAlert.displayName).toBe(`WithAlert(Child)`)

      // named component
      const displayName = 'TheChildName'
      Child.displayName = displayName
      ChildWithAlert = withAlert(Child)
      expect(ChildWithAlert.displayName).toBe(`WithAlert(${displayName})`)

      // unamed Component
      ChildWithAlert = withAlert(() => <div />)
      expect(ChildWithAlert.displayName).toBe(`WithAlert(Component)`)
    })

    it('should pass alert prop down to the wrapped component with the show, info, success, error and remove funcions', () => {
      expect(child).toBeInstanceOf(Child)
      expect(child.props.alert).toBeInstanceOf(Object)
      expect(child.props.alert.show).toBeInstanceOf(Function)
      expect(child.props.alert.info).toBeInstanceOf(Function)
      expect(child.props.alert.success).toBeInstanceOf(Function)
      expect(child.props.alert.error).toBeInstanceOf(Function)
      expect(child.props.alert.remove).toBeInstanceOf(Function)
    })

    it('should pass other props down to the wrapped component', () => {
      tree = renderProviderTree(AlertTemplate, {}, { customProp: true })
      expect(child.props.customProp).toBe(true)
    })

    it('should use the given alertTemplate', () => {
      child.props.alert.show(message)

      const alertTemplate = TestUtils.findRenderedComponentWithType(
        tree,
        AlertTemplate
      )
      expect(alertTemplate).toBeDefined()
    })
  })

  describe('Wrapper', () => {
    const options = [
      { position: 'bottom left' },
      { position: 'bottom right' },
      { position: 'bottom center' },
      { position: 'top left' },
      { position: 'top right' },
      { position: 'top center' }
    ]

    options.forEach(option => {
      it('should use the given position "' + option.position + '"', () => {
        child.props.alert.show(message, option)
        const wrapper = TestUtils.findRenderedComponentWithType(tree, Wrapper)
        expect(wrapper.styles).toEqual(getStyles({ ...option, zIndex: 100 }))
      })
    })
  })

  describe('show', () => {
    it('should add an alert and return the object representing it', () => {
      const alert = child.props.alert.show(message)
      expect(provider.state.alerts[0].message).toEqual(message)
      expect(provider.state.alerts[0]).toEqual(alert)
    })

    it('should accept type and timeout options', () => {
      const options = { type: 'success', timeout: 2000 }
      child.props.alert.show(message, options)
      const { type, timeout } = provider.state.alerts[0].options

      expect(type).toEqual(options.type)
      expect(timeout).toEqual(options.timeout)
    })

    it('should call custom onOpen function if provided', () => {
      const onOpen = jest.fn()
      child.props.alert.show(message)

      expect(onOpen).not.toHaveBeenCalled()

      child.props.alert.show(message, { onOpen })

      expect(onOpen).toHaveBeenCalled()
    })

    it('should remove the alert after the given timeout', () => {
      const timeout = 2000

      child.props.alert.show(message, { timeout })

      expect(provider.state.alerts).toHaveLength(1)

      jest.runAllTimers()

      expect(provider.state.alerts).toHaveLength(0)
    })
  })

  describe('info, success and error', () => {
    it('should add an alert', () => {
      child.props.alert.info('info')
      expect(provider.state.alerts[0].message).toEqual('info')

      child.props.alert.success('success')
      expect(provider.state.alerts[1].message).toEqual('success')

      child.props.alert.success('error')
      expect(provider.state.alerts[2].message).toEqual('error')
    })

    it('should accept timeout option', () => {
      const options = { timeout: 2000 }

      child.props.alert.info(message, options)
      expect(provider.state.alerts[0].options.timeout).toEqual(options.timeout)

      child.props.alert.success(message, options)
      expect(provider.state.alerts[1].options.timeout).toEqual(options.timeout)

      child.props.alert.error(message, options)
      expect(provider.state.alerts[2].options.timeout).toEqual(options.timeout)
    })
  })

  describe('remove', () => {
    it('should remove the alert matching the id', () => {
      const alert = child.props.alert.show(message)

      expect(provider.state.alerts).toHaveLength(1)

      child.props.alert.remove(alert)
      expect(provider.state.alerts).toHaveLength(0)
    })

    it('should call onClose callback', () => {
      const onClose = jest.fn()
      const alert = child.props.alert.show(message, { onClose })

      child.props.alert.remove(alert)
      expect(onClose).toHaveBeenCalled()
    })

    it(`lifecycle componentWillUnmount method should have been called`, () => {
      const componentWillUnmount = jest.fn()

      class Foo extends Provider {
        constructor(props) {
          super(props)
          this.componentWillUnmount = componentWillUnmount
        }

        render() {
          return <Provider {...this.props} />
        }
      }

      const renderer = new ShallowRenderer()
      renderer.render(<Foo template={AlertTemplate} />)
      renderer.unmount()

      expect(componentWillUnmount).toHaveBeenCalled()
    })
  })
})
