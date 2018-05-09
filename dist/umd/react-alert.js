;(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('react'),
        require('react-transition-group'),
        require('prop-types'),
        require('react-dom')
      )
    : typeof define === 'function' && define.amd
      ? define([
          'exports',
          'react',
          'react-transition-group',
          'prop-types',
          'react-dom'
        ], factory)
      : factory(
          (global.ReactAlert = {}),
          global.React,
          global.ReactTransitionGroup,
          global.PropTypes,
          global.ReactDOM
        )
})(this, function(exports, React, reactTransitionGroup, PropTypes, reactDom) {
  'use strict'

  var React__default = 'default' in React ? React['default'] : React
  PropTypes =
    PropTypes && PropTypes.hasOwnProperty('default')
      ? PropTypes['default']
      : PropTypes

  var Context = React.createContext()

  var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  var createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }

    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()

  var _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }

      return target
    }

  var inherits = function(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var objectWithoutProperties = function(obj, keys) {
    var target = {}

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
      target[i] = obj[i]
    }

    return target
  }

  var possibleConstructorReturn = function(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }

    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }

  var getStyles = function getStyles(_ref) {
    var position = _ref.position,
      zIndex = _ref.zIndex

    switch (position) {
      case 'top left':
        return {
          position: 'fixed',
          top: 0,
          right: 'auto',
          bottom: 'auto',
          left: 0,
          zIndex: zIndex
        }
      case 'top right':
        return {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 'auto',
          left: 'auto',
          zIndex: zIndex
        }
      case 'bottom left':
        return {
          position: 'fixed',
          top: 'auto',
          right: 'auto',
          bottom: 0,
          left: 0,
          zIndex: zIndex
        }
      case 'bottom right':
        return {
          position: 'fixed',
          top: 'auto',
          right: 0,
          bottom: 0,
          left: 'auto',
          zIndex: zIndex
        }
      case 'top center':
        return {
          position: 'fixed',
          top: 0,
          right: 'auto',
          bottom: 'auto',
          left: '50%',
          transform: 'translate(-50%, 0%)',
          zIndex: zIndex
        }
      case 'bottom center':
        return {
          position: 'fixed',
          top: 'auto',
          right: 'auto',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, 0%)',
          zIndex: zIndex
        }
    }
  }

  var Wrapper = (function(_Component) {
    inherits(Wrapper, _Component)

    function Wrapper() {
      var _ref2

      var _temp, _this, _ret

      classCallCheck(this, Wrapper)

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      return (
        (_ret = ((_temp = ((_this = possibleConstructorReturn(
          this,
          (_ref2 =
            Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call.apply(
            _ref2,
            [this].concat(args)
          )
        )),
        _this)),
        (_this.styles = getStyles(_this.props.options)),
        _temp)),
        possibleConstructorReturn(_this, _ret)
      )
    }

    createClass(Wrapper, [
      {
        key: 'render',
        value: function render() {
          var _props = this.props,
            children = _props.children,
            options = _props.options,
            props = objectWithoutProperties(_props, ['children', 'options'])

          return React__default.createElement(
            'div',
            _extends({ style: this.styles }, props),
            children
          )
        }
      }
    ])
    return Wrapper
  })(React.Component)

  var duration = 250

  var defaultStyle = {
    fade: {
      transition: 'opacity ' + duration + 'ms ease',
      opacity: 0
    },
    scale: {
      transform: 'scale(1)',
      transition: 'all ' + duration + 'ms ease-in-out'
    }
  }

  var transitionStyles = {
    fade: {
      entering: { opacity: 0 },
      entered: { opacity: 1 }
    },
    scale: {
      entering: { transform: 'scale(0)' },
      entered: { transform: 'scale(1)' },
      exiting: { transform: 'scale(0)' },
      exited: { transform: 'scale(1)' }
    }
  }

  var Transtion = function Transtion(_ref) {
    var children = _ref.children,
      type = _ref.type,
      props = objectWithoutProperties(_ref, ['children', 'type'])
    return React__default.createElement(
      reactTransitionGroup.Transition,
      _extends({}, props, { timeout: duration }),
      function(state) {
        return React__default.createElement(
          'div',
          {
            style: _extends(
              {},
              defaultStyle[type],
              transitionStyles[type][state]
            )
          },
          children
        )
      }
    )
  }

  var Provider = (function(_Component) {
    inherits(Provider, _Component)

    function Provider() {
      var _ref

      var _temp, _this, _ret

      classCallCheck(this, Provider)

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      return (
        (_ret = ((_temp = ((_this = possibleConstructorReturn(
          this,
          (_ref =
            Provider.__proto__ || Object.getPrototypeOf(Provider)).call.apply(
            _ref,
            [this].concat(args)
          )
        )),
        _this)),
        (_this.state = {
          root: null,
          alerts: []
        }),
        (_this.timerId = []),
        (_this.show = function() {
          var message =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : ''
          var options =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {}

          var id = Math.random()
            .toString(36)
            .substr(2, 9)

          var _this$props = _this.props,
            timeout = _this$props.timeout,
            type = _this$props.type

          var alertOptions = _extends(
            {
              timeout: timeout,
              type: type
            },
            options
          )

          var alert = {
            id: id,
            message: message,
            options: alertOptions
          }

          alert.close = function() {
            return _this.remove(alert)
          }

          if (alert.options.timeout) {
            var timerId = setTimeout(function() {
              _this.remove(alert)

              _this.timerId.splice(_this.timerId.indexOf(timerId), 1)
            }, alert.options.timeout)

            _this.timerId.push(timerId)
          }

          _this.setState(
            function(prevState) {
              return {
                alerts: prevState.alerts.concat(alert)
              }
            },
            function() {
              alert.options.onOpen && alert.options.onOpen()
            }
          )

          return alert
        }),
        (_this.remove = function(alert) {
          _this.setState(function(prevState) {
            var lengthBeforeRemove = prevState.alerts.length
            var alerts = prevState.alerts.filter(function(a) {
              return a.id !== alert.id
            })

            if (lengthBeforeRemove > alerts.length && alert.options.onClose) {
              alert.options.onClose()
            }

            return { alerts: alerts }
          })
        }),
        (_this.success = function() {
          var message =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : ''
          var options =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {}

          options.type = 'success'
          return _this.show(message, options)
        }),
        (_this.error = function() {
          var message =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : ''
          var options =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {}

          options.type = 'error'
          return _this.show(message, options)
        }),
        (_this.info = function() {
          var message =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : ''
          var options =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {}

          options.type = 'info'
          return _this.show(message, options)
        }),
        _temp)),
        possibleConstructorReturn(_this, _ret)
      )
    }

    createClass(Provider, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var root = document.createElement('div')
          document.body.appendChild(root)

          this.setState({ root: root })
        }
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.timerId.forEach(clearTimeout)

          document.body.removeChild(this.state.root)
        }
      },
      {
        key: 'render',
        value: function render() {
          var _state = this.state,
            root = _state.root,
            alerts = _state.alerts
          var _props = this.props,
            children = _props.children,
            offset = _props.offset,
            position = _props.position,
            timeout = _props.timeout,
            type = _props.type,
            transition = _props.transition,
            zIndex = _props.zIndex,
            AlertComponent = _props.template

          var options = {
            offset: offset,
            position: position,
            timeout: timeout,
            type: type,
            transition: transition,
            zIndex: zIndex
          }

          var alert = _extends({}, this.state, {
            show: this.show,
            remove: this.remove,
            success: this.success,
            error: this.error,
            info: this.info
          })

          return React__default.createElement(
            Context.Provider,
            { value: alert },
            children,
            root &&
              reactDom.createPortal(
                React__default.createElement(
                  Wrapper,
                  { options: options },
                  React__default.createElement(
                    reactTransitionGroup.TransitionGroup,
                    null,
                    alerts.map(function(alert) {
                      return React__default.createElement(
                        Transtion,
                        { type: options.transition, key: alert.id },
                        React__default.createElement(
                          AlertComponent,
                          _extends(
                            {
                              style: { margin: options.offset }
                            },
                            alert
                          )
                        )
                      )
                    })
                  )
                ),
                root
              )
          )
        }
      }
    ])
    return Provider
  })(React.Component)

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
    zIndex: PropTypes.number,
    template: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired
  }
  Provider.defaultProps = {
    offset: '10px',
    position: 'top center',
    timeout: 0,
    type: 'info',
    transition: 'fade',
    zIndex: 100
  }

  var Alert = Context.Consumer

  var withAlert = function withAlert(WrappedComponent) {
    var WithAlert = (function(_Component) {
      inherits(WithAlert, _Component)

      function WithAlert() {
        classCallCheck(this, WithAlert)
        return possibleConstructorReturn(
          this,
          (WithAlert.__proto__ || Object.getPrototypeOf(WithAlert)).apply(
            this,
            arguments
          )
        )
      }

      createClass(WithAlert, [
        {
          key: 'render',
          value: function render() {
            var _this2 = this

            return React__default.createElement(
              Context.Consumer,
              null,
              function(alert) {
                return React__default.createElement(
                  WrappedComponent,
                  _extends({}, _this2.props, { alert: alert })
                )
              }
            )
          }
        }
      ])
      return WithAlert
    })(React.Component)

    WithAlert.displayName =
      'WithAlert(' +
      (WrappedComponent.displayName || WrappedComponent.name || 'Component') +
      ')'

    return WithAlert
  }

  exports.Provider = Provider
  exports.Alert = Alert
  exports.withAlert = withAlert

  Object.defineProperty(exports, '__esModule', { value: true })
})
