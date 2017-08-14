'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorousCjs = require('glamorous/dist/glamorous.cjs.tiny');

var _glamorousCjs2 = _interopRequireDefault(_glamorousCjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = (0, _glamorousCjs2.default)('div')({
  flex: 3,
  textAlign: 'center',
  textTransform: 'uppercase',
  padding: '8px 10px',
  marginRight: '50px'
});

exports.default = Message;