import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import Provider from '../src/Provider'
import withAlert from '../src/withAlert'
import AlertWrapper, { getStyles } from '../src/AlertWrapper'

jest.useFakeTimers()

describe('public api', () => {
  class Child extends Component {
    render () {
      return <div />
    }
  }

  class AlertTemplate extends Component {
    render () {
      return <div />
    }
  }

  describe('Provider', () => {
    it('should wrap the component name to indicate that it have a global state', () => {
      // default name
      let ChildWithAlert = withAlert(Child)
      expect(ChildWithAlert.displayName).toBe(`WithAlert(Child)`)
      // named component
      const displayName = 'TheChildName'
      Child.displayName = displayName

      ChildWithAlert = withAlert(Child)
      expect(ChildWithAlert.displayName).toBe(`WithAlert(${displayName})`)
      // unamed Component
      ChildWithAlert = withAlert(() => (<div />))
      expect(ChildWithAlert.displayName).toBe(`WithAlert(Component)`)
    })

    it('should pass alert prop down to the wrapped component with the show, info, success, error and remove funcions', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const child = TestUtils.findRenderedComponentWithType(tree, Child)
      expect(child).toBeInstanceOf(Child)
      expect(child.props.alert).toBeInstanceOf(Object)
      expect(child.props.alert.show).toBeInstanceOf(Function)
      expect(child.props.alert.info).toBeInstanceOf(Function)
      expect(child.props.alert.success).toBeInstanceOf(Function)
      expect(child.props.alert.error).toBeInstanceOf(Function)
      expect(child.props.alert.remove).toBeInstanceOf(Function)
    })

    it('should use the given alertTemplate', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const message = 'Some Message'
      const child = TestUtils.findRenderedComponentWithType(tree, Child)
      child.props.alert.show(message)

      const alertTemplate = TestUtils.findRenderedComponentWithType(tree, AlertTemplate)
      expect(alertTemplate).toBeDefined()
    })

    it('should use the given position option', () => {
      const ChildWithAlert = withAlert(Child)

      let position = 'bottom left'
      let tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate} position={position}>
          <ChildWithAlert />
        </Provider>
      )

      let alertWrapper = TestUtils.findRenderedComponentWithType(tree, AlertWrapper)
      expect(alertWrapper.styles).toEqual(getStyles(position))

      position = 'bottom center'
      tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate} position={position}>
          <ChildWithAlert />
        </Provider>
      )

      alertWrapper = TestUtils.findRenderedComponentWithType(tree, AlertWrapper)
      expect(alertWrapper.styles).toEqual(getStyles(position))

      position = 'bottom right'
      tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate} position={position}>
          <ChildWithAlert />
        </Provider>
      )

      alertWrapper = TestUtils.findRenderedComponentWithType(tree, AlertWrapper)
      expect(alertWrapper.styles).toEqual(getStyles(position))

      position = 'top left'
      tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate} position={position}>
          <ChildWithAlert />
        </Provider>
      )

      alertWrapper = TestUtils.findRenderedComponentWithType(tree, AlertWrapper)
      expect(alertWrapper.styles).toEqual(getStyles(position))

      position = 'top center'
      tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate} position={position}>
          <ChildWithAlert />
        </Provider>
      )

      alertWrapper = TestUtils.findRenderedComponentWithType(tree, AlertWrapper)
      expect(alertWrapper.styles).toEqual(getStyles(position))

      position = 'top right'
      tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate} position={position}>
          <ChildWithAlert />
        </Provider>
      )

      alertWrapper = TestUtils.findRenderedComponentWithType(tree, AlertWrapper)
      expect(alertWrapper.styles).toEqual(getStyles(position))
    })

    it('should unsubscribe from updates on component unmount', () => {
      const ChildWithAlert = withAlert(Child)

      const div = document.createElement('div')
      const tree = ReactDOM.render(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>,
        div
      )

      const childWithAlert = TestUtils.findRenderedComponentWithType(tree, ChildWithAlert)
      childWithAlert.context.alertContainer._unsubscribe = jest.fn()

      ReactDOM.unmountComponentAtNode(div)
      expect(childWithAlert.context.alertContainer._unsubscribe).toHaveBeenCalled()
    })
  })

  describe('show', () => {
    it('should add an alert and return the object representing it', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const message = 'Some Message'
      const childWithAlert = TestUtils.findRenderedComponentWithType(tree, ChildWithAlert)
      const child = TestUtils.findRenderedComponentWithType(tree, Child)
      const alert = child.props.alert.show(message)

      expect(childWithAlert.context.alertContainer._getAlerts()[0].message).toEqual(message)
      expect(childWithAlert.context.alertContainer._getAlerts()[0]).toEqual(alert)
    })

    it('should accept type and timeout options', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const message = 'Some Message'
      const options = { type: 'success', timeout: 2000 }

      const childWithAlert = TestUtils.findRenderedComponentWithType(tree, ChildWithAlert)
      const child = TestUtils.findRenderedComponentWithType(tree, Child)
      child.props.alert.show(message, options)

      const { type, timeout } = childWithAlert.context.alertContainer._getAlerts()[0].options

      expect(type).toEqual(options.type)
      expect(timeout).toEqual(options.timeout)
    })

    it('should remove the alert after the given timeout', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const message = 'Some Message'
      const child = TestUtils.findRenderedComponentWithType(tree, Child)

      const timeout = 2000

      child.props.alert.remove = jest.fn()
      const alert = child.props.alert.show(message, { timeout })

      expect(child.props.alert.remove).not.toHaveBeenCalled()

      jest.runAllTimers()

      expect(child.props.alert.remove).toHaveBeenCalledWith(alert)
    })
  })

  describe('info, success and error', () => {
    it('should add an alert', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const childWithAlert = TestUtils.findRenderedComponentWithType(tree, ChildWithAlert)
      const child = TestUtils.findRenderedComponentWithType(tree, Child)

      child.props.alert.info('info')
      expect(childWithAlert.context.alertContainer._getAlerts()[0].message).toEqual('info')

      child.props.alert.success('success')
      expect(childWithAlert.context.alertContainer._getAlerts()[1].message).toEqual('success')

      child.props.alert.success('error')
      expect(childWithAlert.context.alertContainer._getAlerts()[2].message).toEqual('error')
    })

    it('should accept timeout option', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const message = 'Some Message'
      const options = { timeout: 2000 }

      const childWithAlert = TestUtils.findRenderedComponentWithType(tree, ChildWithAlert)
      const child = TestUtils.findRenderedComponentWithType(tree, Child)

      child.props.alert.info(message, options)
      expect(childWithAlert.context.alertContainer._getAlerts()[0].options.timeout).toEqual(options.timeout)

      child.props.alert.success(message, options)
      expect(childWithAlert.context.alertContainer._getAlerts()[1].options.timeout).toEqual(options.timeout)

      child.props.alert.error(message, options)
      expect(childWithAlert.context.alertContainer._getAlerts()[2].options.timeout).toEqual(options.timeout)
    })
  })

  describe('remove', () => {
    it('should remove the alert matching the id', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const message = 'Some Message'
      const childWithAlert = TestUtils.findRenderedComponentWithType(tree, ChildWithAlert)
      const child = TestUtils.findRenderedComponentWithType(tree, Child)

      const alert = child.props.alert.show(message)
      expect(childWithAlert.context.alertContainer._getAlerts()).toHaveLength(1)

      child.props.alert.remove(alert)
      expect(childWithAlert.context.alertContainer._getAlerts()).toHaveLength(0)
    })

    it('should call onClose callback', () => {
      const ChildWithAlert = withAlert(Child)
      const tree = TestUtils.renderIntoDocument(
        <Provider template={AlertTemplate}>
          <ChildWithAlert />
        </Provider>
      )

      const message = 'Some Message'
      const child = TestUtils.findRenderedComponentWithType(tree, Child)

      const onClose = jest.fn()
      const alert = child.props.alert.show(message, { onClose })

      child.props.alert.remove(alert)
      expect(onClose).toHaveBeenCalled()
    })
  })
})
