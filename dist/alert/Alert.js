'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorousCjs = require('glamorous/dist/glamorous.cjs.tiny');

var _glamorousCjs2 = _interopRequireDefault(_glamorousCjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = (0, _glamorousCjs2.default)('div')({
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

exports.default = Alert;