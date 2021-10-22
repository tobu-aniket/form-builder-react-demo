"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fields = _interopRequireDefault(require("../fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function form(_ref) {
  let {
    fields,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("form", null, fields.map((field, index) => (0, _fields.default)(field)), children);
}

var _default = form;
exports.default = _default;