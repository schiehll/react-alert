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
    })

    test('should add an alert object to state', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()

      expect(instance.state.alerts).toHaveLength(0)
      instance.show('Some message')
      expect(instance.state.alerts).toHaveLength(1)
    })
  })

  describe('removeAll', () => {
    test('should remove all alerts from state', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()

      expect(instance.state.alerts).toHaveLength(0)
      instance.show('Some message')
      instance.show('Some message')
      expect(instance.state.alerts).toHaveLength(2)
      instance.removeAll()
      expect(instance.state.alerts).toHaveLength(0)
    })
  })

  describe('_removeAlert', () => {
    test('should remove a given alert from state', () => {
      const wrapper = shallow(<AlertContainer />)
      const instance = wrapper.instance()

      expect(instance.state.alerts).toHaveLength(0)
      instance.show('Some message')
      expect(instance.state.alerts).toHaveLength(1)
      instance._removeAlert(instance.state.alerts[0].id)
      expect(instance.state.alerts).toHaveLength(0)
    })
  })
})
