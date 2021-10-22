"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(_ref) {
  let {
    key,
    label,
    customClassName = '',
    placeholder = ''
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
    for: key
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: key,
    className: customClassName,
    placeholder: placeholder
  }));
}

function TextArea(_ref2) {
  let {
    key,
    label,
    customClassName = '',
    placeholder = '',
    rows = '2',
    cols = '50'
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
    for: key
  }, label), /*#__PURE__*/_react.default.createElement("textarea", {
    type: "textarea",
    id: key,
    className: customClassName,
    placeholder: placeholder,
    rows: rows,
    cols: cols
  }));
}

function Checkbox(_ref3) {
  let {
    key,
    label,
    customClassName = '',
    placeholder = ''
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: key,
    className: customClassName,
    placeholder: placeholder
  }), label && /*#__PURE__*/_react.default.createElement("label", {
    for: key
  }, label));
}

function Select(_ref4) {
  let {
    key,
    label,
    options,
    customClassName = '',
    placeholder = ''
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
    for: key
  }, label), /*#__PURE__*/_react.default.createElement("select", {
    type: "text",
    id: key,
    className: customClassName,
    placeholder: placeholder
  }, options.map(opt => /*#__PURE__*/_react.default.createElement("option", {
    value: opt
  }, opt))));
}

function RenderField(field) {
  switch (field.type) {
    case 'input':
      return /*#__PURE__*/_react.default.createElement(Input, field);

    case 'textarea':
      return /*#__PURE__*/_react.default.createElement(TextArea, field);

    case 'checkbox':
      return /*#__PURE__*/_react.default.createElement(Checkbox, field);

    case 'select':
      return /*#__PURE__*/_react.default.createElement(Select, field);
    // case 'radiogroup':
    //   return <RadioGroup {...field} />
    // case 'button':
    //   return <Button {...field} />

    default:
      return /*#__PURE__*/_react.default.createElement("div", null, field.type, " not supported");
  }
}

var _default = RenderField;
exports.default = _default;