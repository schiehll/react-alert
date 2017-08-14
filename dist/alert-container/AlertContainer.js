'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _alert = require('../alert');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertContainer = function (_Component) {
  _inherits(AlertContainer, _Component);

  function AlertContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AlertContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlertContainer.__proto__ || Object.getPrototypeOf(AlertContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      alerts: []
    }, _this.success = function () {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.type = 'success';
      return _this.show(message, options);
    }, _this.error = function () {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.type = 'error';
      return _this.show(message, options);
    }, _this.info = function () {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.type = 'info';
      return _this.show(message, options);
    }, _this.show = function () {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          theme = _this$props.theme,
          time = _this$props.time;


      var alert = _extends({
        id: _shortid2.default.generate(),
        message: message,
        time: time,
        theme: theme
      }, options);

      _this.setState(function (prevState) {
        return {
          alerts: prevState.alerts.concat(alert)
        };
      });
      return alert.id;
    }, _this.removeAll = function () {
      var alertsRemoved = _this.state.alerts;
      _this.setState({ alerts: [] });
      alertsRemoved.forEach(function (alert) {
        return alert.onClose && alert.onClose();
      });
    }, _this.removeAlert = function (id) {
      var alertRemoved = _this.state.alerts.filter(function (alert) {
        return alert.id === id;
      })[0];
      _this.setState(function (prevState) {
        return {
          alerts: prevState.alerts.filter(function (alert) {
            return alert.id !== id;
          })
        };
      });
      alertRemoved && alertRemoved.onClose && alertRemoved.onClose();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AlertContainer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          position = _props.position,
          offset = _props.offset,
          transition = _props.transition;


      return _react2.default.createElement(
        _Container2.default,
        { glam: { position: position, offset: offset } },
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          {
            transitionName: transition,
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250
          },
          this.state.alerts.map(function (alert) {
            return _react2.default.createElement(_alert2.default, _extends({
              key: alert.id
            }, alert, {
              onRemoveAlert: _this2.removeAlert
            }));
          })
        )
      );
    }
  }]);

  return AlertContainer;
}(_react.Component);

AlertContainer.defaultProps = {
  offset: 14,
  position: 'bottom left',
  theme: 'dark',
  time: 5000,
  transition: 'scale'
};
AlertContainer.propTypes = {
  offset: _propTypes2.default.number,
  position: _propTypes2.default.oneOf(['bottom left', 'bottom right', 'top right', 'top left']),
  theme: _propTypes2.default.oneOf(['dark', 'light']),
  time: _propTypes2.default.number,
  transition: _propTypes2.default.oneOf(['scale', 'fade'])
};
exports.default = AlertContainer;