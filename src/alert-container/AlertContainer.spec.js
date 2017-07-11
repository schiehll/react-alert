import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import AlertContainer from './AlertContainer'

describe('AlertContainer', () => {
  test('should set its position based on the given position prop', () => {
    let props = {
      position: 'top left'
    }
    let component = renderer.create(
      <AlertContainer {...props} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    props = {
      position: 'top right'
    }
    component = renderer.create(
      <AlertContainer {...props} />
    )

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    props = {
      position: 'bottom right'
    }
    component = renderer.create(
      <AlertContainer {...props} />
    )

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    props = {
      position: 'bottom left'
    }
    component = renderer.create(
      <AlertContainer {...props} />
    )

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('show', () => {
    test('should be called on each type method call', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()
      instance.show = jest.fn()

      instance.success('Some message')
      instance.info('Some message')
      instance.error('Some message')

      expect(instance.show).toHaveBeenCalledTimes(3)
      expect(instance.show.mock.calls[0][0]).toBe('Some message')
      expect(instance.show.mock.calls[0][1]).toEqual({ type: 'success' })
      expect(instance.show.mock.calls[1][0]).toBe('Some message')
      expect(instance.show.mock.calls[1][1]).toEqual({ type: 'info' })
      expect(instance.show.mock.calls[2][0]).toBe('Some message')
      expect(instance.show.mock.calls[2][1]).toEqual({ type: 'error' })
    })

    test('should add an alert object to state', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()

      expect(instance.state.alerts).toHaveLength(0)
      instance.show('Some message')
      expect(instance.state.alerts).toHaveLength(1)
    })

    test('should be called with default method params', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()
      instance.show = jest.fn()

      instance.success()
      instance.info()
      instance.error()

      expect(instance.show).toHaveBeenCalledTimes(3)
      expect(instance.show.mock.calls[0][0]).toBe('')
      expect(instance.show.mock.calls[0][1]).toEqual({ type: 'success' })
      expect(instance.show.mock.calls[1][0]).toBe('')
      expect(instance.show.mock.calls[1][1]).toEqual({ type: 'info' })
      expect(instance.show.mock.calls[2][0]).toBe('')
      expect(instance.show.mock.calls[2][1]).toEqual({ type: 'error' })
    })

    test('should work with default options', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()

      instance.show()
      expect(instance.state.alerts[0].id).toBeDefined()
      expect(instance.state.alerts[0].message).toBe('')
      expect(instance.state.alerts[0].time).toBe(5000)
      expect(instance.state.alerts[0].theme).toBe('dark')
    })

    test('should work with custom options', () => {
      const wrapper = shallow(<AlertContainer time={123} theme='light' />)
      const instance = wrapper.instance()

      instance.show('custom message', { foo: 1, bar: 2 })
      expect(instance.state.alerts[0].id).toBeDefined()
      expect(instance.state.alerts[0].message).toBe('custom message')
      expect(instance.state.alerts[0].time).toBe(123)
      expect(instance.state.alerts[0].theme).toBe('light')
      expect(instance.state.alerts[0].foo).toBe(1)
      expect(instance.state.alerts[0].bar).toBe(2)
    })
  })

  describe('removeAll', () => {
    test('should remove all alerts from state, calling onClose function', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()
      const onCloseFn1 = jest.fn()
      const onCloseFn2 = jest.fn()

      expect(instance.state.alerts).toHaveLength(0)
      instance.show('Some message', { onClose: onCloseFn1 })
      instance.show('Some message', { onClose: onCloseFn2 })
      expect(instance.state.alerts).toHaveLength(2)
      instance.removeAll()
      expect(instance.state.alerts).toHaveLength(0)
      expect(onCloseFn1).toHaveBeenCalled()
      expect(onCloseFn2).toHaveBeenCalled()
    })
  })

  describe('removeAlert', () => {
    test('should remove a given alert from state', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()
      const onCloseFn = jest.fn()

      expect(instance.state.alerts).toHaveLength(0)
      instance.show('Some message', { onClose: onCloseFn })
      expect(instance.state.alerts).toHaveLength(1)
      instance.removeAlert(instance.state.alerts[0].id)
      expect(instance.state.alerts).toHaveLength(0)
      expect(onCloseFn).toHaveBeenCalled()
    })

    test('should not call close function if alert is manually closed', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()
      const onCloseFn = jest.fn()

      expect(instance.state.alerts).toHaveLength(0)
      instance.show('Some message', { onClose: onCloseFn })
      expect(instance.state.alerts).toHaveLength(1)
      instance.removeAlert(instance.state.alerts[0].id)

      onCloseFn.mockReset()
      
      instance.removeAlert('deleted id')
      expect(instance.state.alerts).toHaveLength(0)
      expect(onCloseFn).not.toHaveBeenCalled()
    })
  })
})
