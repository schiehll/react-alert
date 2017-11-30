/*! react-alert v2.4.0 by Reinaldo Schiehll <rn.schiehll@gmail.com> */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _jsx = _interopDefault(require('babel-runtime/helpers/jsx'));
var _classCallCheck = _interopDefault(require('babel-runtime/helpers/classCallCheck'));
var _possibleConstructorReturn = _interopDefault(require('babel-runtime/helpers/possibleConstructorReturn'));
var _inherits = _interopDefault(require('babel-runtime/helpers/inherits'));
var React = require('react');
var React__default = _interopDefault(React);
var reactTransitionGroup = require('react-transition-group');
var nanoid = _interopDefault(require('nanoid'));
var glamorous = _interopDefault(require('glamorous/dist/glamorous.cjs.tiny'));

var Container = glamorous('div')({
  position: 'fixed',
  right: 0,
  bottom: 0,
  margin: '14px',
  zIndex: 999999
}, function (props) {
  switch (props.glam.position) {
    case 'top left':
      return {
        margin: props.glam.offset + 'px',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0
      };
    case 'top right':
      return {
        margin: props.glam.offset + 'px',
        top: 0,
        right: 0,
        bottom: 'auto',
        left: 'auto'
      };
    case 'bottom left':
      return {
        margin: props.glam.offset + 'px',
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: 0
      };
    case 'bottom right':
      return {
        margin: props.glam.offset + 'px',
        top: 'auto',
        right: 0,
        bottom: 0,
        left: 'auto'
      };
    case 'top center':
      return {
        margin: props.glam.offset + 'px',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: '50%',
        transform: 'translate(-50%,0%)'
      };
    case 'bottom center':
      return {
        margin: props.glam.offset + 'px',
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%,0%)'
      };
  }
});

var Alert = glamorous('div')({
  width: '300px',
  minHeight: '50px',
  margin: '10px 0 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '2px',
  fontSize: '12px',
  fontWeight: "bold",
  fontFamily: "roboto",
  boxShadow: '0 8px 12px 0 rgba(0,0,0,0.3)',
  position: 'relative',
  '&.scale-enter': {
    transform: 'scale(0)'
  },
  '&.scale-enter.scale-enter-active': {
    transform: 'scale(1)',
    transition: 'all 250ms cubic-bezier(0, 0, 0.5, 1.5)'
  },
  '&.scale-leave': {
    transform: 'scale(1)'
  },
  '&.scale-leave.scale-leave-active': {
    transform: 'scale(0)',
    transition: 'all 250ms ease-in-out'
  },
  '&.fade-enter': {
    opacity: '0.1'
  },
  '&.fade-enter.fade-enter-active': {
    opacity: '1',
    transition: 'all 250ms ease-out'
  },
  '&.fade-leave': {
    opacity: '1'
  },
  '&.fade-leave.fade-leave-active': {
    opacity: '0.1',
    transition: 'all 250ms ease-in'
  }
}, function (props) {
  var backgroundColor;
  console.log("props.glam: ", props.glam);
  if (props.glam.dark) backgroundColor = '#333';else if (props.glam.light) backgroundColor = '#fff';else if (props.glam.green) backgroundColor = '#5cb85c';else if (props.glam.yellow) backgroundColor = '#efe22d';else if (props.glam.red) backgroundColor = '#f4424b';
  return {
    backgroundColor: backgroundColor,
    color: '' + (props.glam.dark || props.glam.green || props.glam.red ? '#fff' : '#333')
  };
});

var Message = glamorous('div')({
  flex: 3,
  textAlign: 'center',
  textTransform: 'uppercase',
  padding: '8px 10px',
  marginRight: '50px'
});

var Icon = glamorous('div')({
  width: '32px',
  height: '32px'
}, function (props) {
  switch (props.glam.type) {
    case 'error':
      return {
        'background': 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADgAAAA4AGiX/7KAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAATVQTFRF/////0lJ/2BA9FVK9VJH4D422jw19E9KzjEr0C8q8VBJzC0p3z853j038VFJ8VNJ8lJK0jIv0TEszzAszi4q8FJJ8VJJxicjxigk8VJJ8lJJ2DozxCUi0TItvyEevR4c8VJJ8VJJ8VJJthcVthcWuhsZuxsZshISsxMSrQ4OrQ8PrRAQrg8PrhAQrxMTsBcXsR0dshsbx21tx25u0zQv035+1Ken1bCw1tbW17W117a217y8172919fX2L292ZCQ2djY2pOT2tbW2zw22z0325aW29bW3JiY36Oj4Gll4KSk4aen5W5q7e3t7u7u7+/v8VJJ8VNK8VVN8dXV8ltS9N7e9X139X53+KOe+K6p+K6q+bWx+e3t+r25+r66+sC9/Pf3/eHg/efm/vLx/vj4//r5////J6xKzgAAACl0Uk5TAAcIGBkhIi0vMUlQWVyEl5iqrL/BwcjLy9rj5unq6+3y8/X7+/z8/v57VdvTAAABZ0lEQVQ4y3WTZ0ODMBCGA61WUQEHKLVqqTPuURX33is4auuurfn/P0HIwADx/cJx70NyOXIARFI003Jc17FMTQFpZY0iilQ0sglb1UsoppKuin7GRinZmT8/l0cS5XPR91I/INgaqo3+kU3r0Nmr/8iNex7o5Hys/ufvn1efRNVGvcLOEp7WoHGliTH+DIlaEDSvadYI+sf6U8ehPnziY/x0TDumAI1t2yB5/P5Cn19LRySvAZPVU8UxncFZQpjA4hXXRP9qDlLCAg6SEJeBTwkHuChNnBOfEK4MuNudgZxwJVvcet52RAymiwx8z9vixEjqmDce0ToD+pKNOtmkwM4iBboSrT6AkBKH08QfV+I/ay9MboQLrNAF+oXfffHwtkqza/unyzSabBcvTHmeFQYXeNATv3JlmFBBTVzaBDHWkrr2MWK0QzI4AlFolY4eJ6a6Y6MnDC8hJgbaJPPNxn9ouLdTGP9fxnvZxOoj2NIAAAAASUVORK5CYII=\') no-repeat'
      };
    case 'info':
      return {
        'background': 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAj1QTFRF/////21J/4Bg/4BN/1ot/3VV/3pS/29E/3BI/31V/2I2/3BI/3pU/2s+/2Q3/2Q0/3pT/3pT/3pS/2U3/2o7/2Q1/14t/2Q1/3pT/2Iz/3pT/1wr/3pT/3pT/18v/1oo/1sp/1cl/3pT/3pT/3RL/1gn/3pT/1Yi/1km/1cj/1cj/1Ec/1Id/1Ie/1UhFxcZGBgaGRkbGhkbGhobGxoZGxocHBscHhsdHhwZHxweIB4dIR0eJCIeJh8fJiMZJx8gKSYfMCIhNCQhNzEYPDtBPSYiPTtBPTxBPjtBPjxBPztAPz5BQCciQTgfQjxAQ0FARTseRUNARzw/R0RASCkjS0dATD0+TUEYTko/Uj49VSwjVVA+Vj8+WFI+Wi4jWj88YFg9YVEYYVk9YjAjYkA7ZFw9ZUE8aFcXaWA8b1oZcGY8ckQ7d0U6d2s7fWcWgkc6gnU6gzgihUIyiG8WiXo5jUs6jX45jn45lIM4lTshlYQ4mU47mX0UnUcxnk85pFI8pJA2pT4gp4cTsJo1so8Ss501tUEftpERt6A0vFpAwpsRxUQex19Cya8yzWRHzaMP0WRE06cO1F881rox2mhH2r0x20gc3qoD368L4Eod42xK5MUw5bMJ5rQI6bIA6bUG6ksb6m9M67MA67MB67QB67QC67UD7nBL8HNO8M4v8kwa9Ewa9XVP99Uu+E4a+NUu+XhS+ndR/HhS/Ngt/dkt/tot/08Z/1Aa/1Qf/1Qg/2xA/3RL/3VM/3pT/9stKoh6AQAAAC90Uk5TAAcIChEYGR4gLS85SWJwdYSXmKu1v8DAwcTI0trj5Ozt8vLz9PX1+Pj6/f7+/v6dEYHZAAAB6klEQVQ4y22T90PUMBTH25MheMrdqVixCFzlXMjDvQcQQHFvBRT33nuzHAiCew8wKss9iPPyt9kmTcJx/fzWfj/NeH1P0yS6P2SYlmUaIb+uxZMUDEcl4WBSv9gXiERjiAR8ffPEjGgcGYkqT8mMepCZIr9XeWvV7CvKcNfwqfVfr0Ew5Z7ahZ8joFY9hM7dgKI/8jnA7qfOfxPt/vFmLxyXRsS5bVDmXRuWPqT45azpT6URtOun6nMUXaAU46tQ8lMYYV3zy/wWqvz4ee3Ux+82wnlp+LWQyD9sRi20twxe4Scws10YIc0Qwml0jFK6ejLG+BKsI65haKab3yld320Lm2bYQkcx1LmGqVk8/1qNGu2cbpljC/guzH3PDUsIF9EBJ6c75jkCPgIVhBmWu8WD8pXPmbBvERPaFhRcZ4bJD/ltF6plOb22nwm4CeZ/cgyDX7MGbfvOhbOruPB2O+wktjGMFerZiiX3eU5PLecCfjGtoNk20lipD6IzVIAF9VBIyATd+VlfFqPDDYLbgpMAPWQ4/917kAIUC0neQN4wnZdPSJZJtj4i6aLl/v0mXmQPkE3718sYl9yn7T2M8YNiBifOyEntN3qxRv5QX9zwjvkl47yRyR7zrQ8elTV24qTc0SOGJKi3/wHRRNJlmuTUXwAAAABJRU5ErkJggg==\') no-repeat'
      };
    case 'success':
      return {
        'background': 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAEKAAABCgEWpLzLAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAHJQTFRF////ZsxmbbZJYL9gZrtVar9VZsJcbMRYaMZVasFYaL9XbMFbasRZaMFZacRXa8NYasFaasJaasFZasJaasNZasNYasJYasJZasJZasJZasJZasJZasJYasJZasJZasJZasJZasJaasJZasJZasJZasJZ2IAizQAAACV0Uk5TAAUHCA8YGRobHSwtPEJJUVtghJeYrbDByNjZ2tvj6vLz9fb3/CyrN0oAAADnSURBVDjLjZPbWoUgFIQnbNPBIgNKiwwo5v1fsQvMvUXI5oqPf4DFOgCrhLKjC8GNVgnsJY3nKm9kgTsduVHU3SU/TdxpOp15P7OiuV/PVzk5L3d0ExuachyaTWkAkLFtiBKAqZHPh/yuAYSv8R7XE0l6AVXnwBNJUsE2+GMOzWL8k3OEW7a/q5wOIS9e7t5qnGExvF5Bvlc4w/LEM4Abt+d0S5BpAHD7seMcf7+ZHfclp10TlYZc2y2nOqc6OwruxUWx0rDjNJtyp6HkUW4bJn0VWdf/a7nDpj1u++PBOR694+Ftj/8PKNdnDLn/V8YAAAAASUVORK5CYII=\') no-repeat'
      };
    case 'success-game':
      return {
        'background': 'url(\'data:image/png;base64,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\') no-repeat'
      };
  }
});

var IconPlaceholder = glamorous('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '50px'
});

var Close = glamorous('div')({
  width: '50px',
  height: '100%',
  borderRadius: '0 2px 2px 0',
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: 0,
  ':hover': {
    opacity: '0.5'
  }
}, function (props) {
  return {
    background: 'url(\'data:image/svg+xml;utf8,<svg fill="' + (props.glam.dark ? '%23fff' : '%23333') + '" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>\') no-repeat',
    backgroundPosition: '50%',
    backgroundSize: '25px',
    backgroundColor: (props.glam.dark ? '#444' : '#f3f3f3') + ' !important'
  };
});

var AlertMessage$1 = function (_Component) {
  _inherits(AlertMessage, _Component);

  function AlertMessage() {
    var _temp, _this, _ret;

    _classCallCheck(this, AlertMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this._removeItself = function () {
      var _this$props = _this.props,
          onRemoveAlert = _this$props.onRemoveAlert,
          id = _this$props.id;

      onRemoveAlert(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AlertMessage.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var time = this.props.time;


    if (time > 0) {
      setTimeout(function () {
        _this2._removeItself();
      }, time);
    }
  };

  AlertMessage.prototype.render = function render() {
    var _props = this.props,
        message = _props.message,
        theme = _props.theme,
        icon = _props.icon,
        type = _props.type;

    console.log("theme: ", theme);
    var themes = {
      dark: theme === 'dark',
      light: theme === 'light',
      green: theme === 'green',
      yellow: theme === "yellow",
      red: theme === "red"
    };

    return _jsx(Alert, {
      glam: themes
    }, void 0, _jsx(IconPlaceholder, {}, void 0, icon || _jsx(Icon, {
      glam: { type: type }
    })), _jsx(Message, {}, void 0, message), _jsx(Close, {
      glam: themes,
      onClick: this._removeItself
    }));
  };

  return AlertMessage;
}(React.Component);

AlertMessage$1.defaultProps = {
  id: '',
  icon: null,
  message: '',
  type: 'info',
  theme: 'dark',
  time: 0,
  onRemoveAlert: function onRemoveAlert() {}
};

var AlertContainer$2 = function (_Component) {
  _inherits(AlertContainer, _Component);

  function AlertContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, AlertContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
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


      var alert = Object.assign({
        id: nanoid(7),
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

  AlertContainer.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        position = _props.position,
        offset = _props.offset,
        transition = _props.transition;


    return _jsx(Container, {
      glam: { position: position, offset: offset }
    }, void 0, _jsx(reactTransitionGroup.CSSTransitionGroup, {
      transitionName: transition,
      transitionEnterTimeout: 250,
      transitionLeaveTimeout: 250
    }, void 0, this.state.alerts.map(function (alert) {
      return React__default.createElement(AlertMessage$1, Object.assign({
        key: alert.id
      }, alert, {
        onRemoveAlert: _this2.removeAlert
      }));
    })));
  };

  return AlertContainer;
}(React.Component);

AlertContainer$2.defaultProps = {
  offset: 14,
  position: 'top right',
  theme: 'dark',
  time: 5000,
  transition: 'scale'
};

module.exports = AlertContainer$2;
//# sourceMappingURL=index.js.map
