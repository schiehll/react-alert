'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Close = require('./Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertMessage = function (_Component) {
  _inherits(AlertMessage, _Component);

  function AlertMessage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AlertMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlertMessage.__proto__ || Object.getPrototypeOf(AlertMessage)).call.apply(_ref, [this].concat(args))), _this), _this._removeItself = function () {
      var _this$props = _this.props,
          onRemoveAlert = _this$props.onRemoveAlert,
          id = _this$props.id;

      onRemoveAlert(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AlertMessage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var time = this.props.time;


      if (time > 0) {
        setTimeout(function () {
          _this2._removeItself();
        }, time);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          theme = _props.theme,
          icon = _props.icon,
          type = _props.type;

      var dark = theme === 'dark';

      return _react2.default.createElement(
        _Alert2.default,
        { glam: { dark: dark } },
        _react2.default.createElement(
          _Icon.IconPlaceholder,
          null,
          icon || _react2.default.createElement(_Icon2.default, { glam: { type: type } })
        ),
        _react2.default.createElement(
          _Message2.default,
          null,
          message
        ),
        _react2.default.createElement(_Close2.default, {
          glam: { dark: dark },
          onClick: this._removeItself
        })
      );
    }
  }]);

  return AlertMessage;
}(_react.Component);

AlertMessage.defaultProps = {
  id: '',
  icon: null,
  message: '',
  type: 'info',
  theme: 'dark',
  time: 0,
  onRemoveAlert: function onRemoveAlert() {}
};
AlertMessage.propTypes = {
  id: _propTypes2.default.string,
  icon: _propTypes2.default.element,
  message: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]),
  type: _propTypes2.default.oneOf(['info', 'success', 'error']),
  theme: _propTypes2.default.oneOf(['dark', 'light']),
  time: _propTypes2.default.number,
  onRemoveAlert: _propTypes2.default.func
};
exports.default = AlertMessage;