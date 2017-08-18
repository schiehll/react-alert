import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import AlertMessage from './AlertMessage'

jest.useFakeTimers()

describe('AlertMessage', () => {
  test('should render the given message', () => {
    const props = {
      message: 'Some important message'
    }

    const component = renderer.create(
      <AlertMessage {...props} />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render the given icon if any', () => {
    const props = {
      icon: <div>Icon</div>
    }

    const component = renderer.create(
      <AlertMessage {...props} />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should use the given theme', () => {
    const props = {
      theme: 'light'
    }

    const component = renderer.create(
      <AlertMessage {...props} />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should change the icon based on the given type prop', () => {
    const props = {
      type: 'info'
    }
    let component = renderer.create(
      <AlertMessage {...props} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    props.type = 'error'
    component = renderer.create(
      <AlertMessage {...props} />
    )

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    props.type = 'success'
    component = renderer.create(
      <AlertMessage {...props} />
    )

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('_removeItself', async () => {
    test('should call the given onRemoveAlert function after the given time', () => {
      const props = {
        onRemoveAlert: jest.fn(),
        time: 3
      }

      const component = renderer.create(
        <AlertMessage {...props} />
      )

      component.toJSON()
      setTimeout(() => {
        expect(props.onRemoveAlert).toHaveBeenCalled()
      }, props.time)

      jest.runOnlyPendingTimers()
    })

    test('should call the default onRemoveAlert', () => {
      const props = {
        time: 3
      }

      const wrapper = shallow(<AlertMessage {...props} />)
      const instance = wrapper.instance()

      expect(typeof (instance.props.onRemoveAlert)).toBe('function')
      expect(instance.props.onRemoveAlert()).toBe(undefined)
    })
  })
})
