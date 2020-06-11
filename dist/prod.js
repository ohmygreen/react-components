'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var MaterialTextField = _interopDefault(require('@material-ui/core/TextField'));
var MaterialButton = _interopDefault(require('@material-ui/core/Button'));
var Fade = _interopDefault(require('@material-ui/core/Fade'));
var Zoom = _interopDefault(require('@material-ui/core/Zoom'));
var styles = require('@material-ui/core/styles');
var Tooltip$1 = _interopDefault(require('@material-ui/core/Tooltip'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSearchInput = styled__default.div(_templateObject());

var SearchInput = function SearchInput(_ref) {
  var _ref$searchValue = _ref.searchValue,
      searchValue = _ref$searchValue === void 0 ? '' : _ref$searchValue,
      onChange = _ref.onChange;

  var _useState = React.useState(searchValue),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  React.useEffect(function () {
    if (onChange) {
      onChange(inputValue);
    }
  }, [inputValue, onChange]);

  var handleOnChange = function handleOnChange(_ref2) {
    var value = _ref2.target.value;
    console.log('TESTING 3 ' + value);
    setInputValue(value);
  };

  return /*#__PURE__*/React__default.createElement(StyledSearchInput, null, /*#__PURE__*/React__default.createElement("div", {
    className: "search-holder"
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    value: inputValue,
    onChange: handleOnChange
  })));
};

var colors = {
  grey900: '#0a0c0d',
  grey800: '#2b2c2d',
  grey700: '#484a4b',
  grey600: '#646869',
  grey500: '#818587',
  grey400: '#9ea3a5',
  grey300: '#bcc1c3',
  grey200: '#dadfe1',
  grey100: '#e9eef0',
  grey50: '#f5f9fa',
  red900: '#b71c1c',
  red800: '#c62828',
  red700: '#d32f2f',
  red600: '#e53935',
  red500: '#f44336',
  red400: '#ef5350',
  red300: '#e57373',
  red200: '#ef9a9a',
  red100: '#ffcdd2',
  red50: '#ffebee',
  yellow900: '#ff6f00',
  yellow800: '#ff8f00',
  yellow700: '#ffa000',
  yellow600: '#ffb300',
  yellow500: '#ffc107',
  yellow400: '#ffca28',
  yellow300: '#ffd54f',
  yellow200: '#ffe082',
  yellow100: '#ffecb3',
  yellow50: '#fff8e1',
  green900: '#00682f',
  green800: '#018843',
  green700: '#0d994f',
  green600: '#1bac5b',
  green500: '#23bc65',
  green400: '#4fc67e',
  green300: '#72d194',
  green200: '#9dddb3',
  green100: '#c5ebd0',
  green50: '#e6f8ec',
  blue900: '#0d47a1',
  blue800: '#1565c0',
  blue700: '#1976d2',
  blue600: '#1e88e5',
  blue500: '#2196f3',
  blue400: '#42a5f5',
  blue300: '#64b5f6',
  blue200: '#90caf9',
  blue100: '#bbdefb',
  blue50: '#e3f2fd',
  white: '#ffffff'
};

var elevations = {
  elevation0: 'none',
  elevation1: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),\n    0 1px 1px 0 rgba(0, 0, 0, 0.14)",
  elevation2: "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.12),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14)",
  elevation3: "0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12),\n    0 3px 4px 0 rgba(0, 0, 0, 0.14)",
  elevation4: "0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14)",
  elevation6: "0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 1px 18px 0 rgba(0, 0, 0, 0.12),\n    0 6px 10px 0 rgba(0, 0, 0, 0.14)",
  elevation8: "0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14)",
  elevation10: "0 7px 7px -3px rgba(0, 0, 0, 0.2), 0 3px 16px 2px rgba(0, 0, 0, 0.12),\n    0 10px 12px 1px rgba(0, 0, 0, 0.14)",
  elevation12: "0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 5px 22px 4px rgba(0, 0, 0, 0.12),\n    0 12px 17px 2px rgba(0, 0, 0, 0.14)",
  elevation16: "0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\n    0 16px 24px 2px rgba(0, 0, 0, 0.14)",
  elevation24: "0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12),\n    0 24px 38px 3px rgba(0, 0, 0, 0.14),"
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  .MuiTextField-root {\n    width: 100%;\n    .MuiInputBase-input {\n      padding: 27px 12px 10px;\n    }\n    .MuiInputLabel-root {\n      transform: translate(12px, 10px) scale(0.75);\n    }\n    .MuiInputLabel-outlined.MuiInputLabel-shrink {\n      transform: translate(14px, -6px) scale(0.75);\n    }\n    label + .MuiInput-formControl {\n      margin-top: 0;\n    }\n    .MuiFilledInput-root {\n      &:read-only {\n        background-color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var TextFieldStyled = styled__default.div.attrs(function (props) {
  return {
    className: "rc-text-field ".concat(props.className ? props.className : '')
  };
})(_templateObject$1(), colors.grey50);

var TextField = function TextField(_ref) {
  var rest = _extends({}, _ref);

  return /*#__PURE__*/React__default.createElement(TextFieldStyled, null, /*#__PURE__*/React__default.createElement(MaterialTextField, rest));
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  .MuiButtonBase-root {\n    text-transform: capitalize;\n    padding: 6px 16px;\n  }\n  .MuiButton-contained {\n    &:hover {\n      box-shadow: ", ";\n    }\n    &:focus {\n      outline: 1px solid ", ";\n    }\n    &:active {\n      box-shadow: ", ";\n    }\n  }\n\n  .MuiButton-outlinedPrimary {\n    &:hover {\n      border-color: ", ";\n      background-color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n      outline: 1px solid ", ";\n    }\n    &:active {\n      border-color: ", ";\n      background-color: ", ";\n    }\n  }\n\n  .MuiButton-containedSecondary {\n    background-color: ", ";\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n    }\n    &:focus {\n      background-color: ", ";\n      outline: 1px solid ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n  }\n\n  .MuiButton-outlinedSecondary {\n    border-color: ", ";\n    color: ", ";\n    &:hover {\n      border-color: transparent;\n      background-color: ", ";\n    }\n    &:focus {\n      border-color: transparent;\n      outline: 1px solid ", ";\n    }\n    &:active {\n      border-color: transparent;\n      background-color: ", ";\n    }\n  }\n\n  .MuiButton-textPrimary {\n    &:hover {\n      background-color: ", ";\n    }\n    &:focus {\n      background-color: transparent;\n      outline: 1px solid ", " !important;\n    }\n    &:active {\n      background-color: ", ";\n    }\n  }\n\n  .MuiButton-textSecondary {\n    &:hover {\n      background-color: ", ";\n    }\n    &:focus {\n      background-color: transparent;\n      outline: 1px solid ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonStyled = styled__default.div.attrs(function (props) {
  return {
    className: "rc-button ".concat(props.className ? props.className : '')
  };
})(_templateObject$2(), elevations.elevation6, colors.blue100, elevations.elevation6, colors.blue800, colors.blue50, colors.blue800, colors.blue100, colors.blue800, colors.blue100, colors.grey200, colors.grey500, colors.grey300, colors.grey200, colors.blue100, colors.grey400, colors.grey500, colors.grey500, colors.grey100, colors.blue100, colors.grey200, colors.blue50, colors.blue100, colors.blue100, colors.grey100, colors.blue100, colors.grey200);

var Button = function Button(_ref) {
  var text = _ref.text,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$disableElevation = _ref.disableElevation,
      disableElevation = _ref$disableElevation === void 0 ? true : _ref$disableElevation,
      rest = _objectWithoutProperties(_ref, ["text", "color", "disableElevation"]);

  return /*#__PURE__*/React__default.createElement(ButtonStyled, null, /*#__PURE__*/React__default.createElement(MaterialButton, _extends({
    color: color,
    disableElevation: disableElevation
  }, rest), text));
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    path {\n      fill: ", ";\n    }\n  }\n  cursor: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var IconStyled = styled__default.div.attrs(function (props) {
  return {
    className: "rc-icon ".concat(props.className ? props.className : '')
  };
})(_templateObject$3(), function (props) {
  return props.pathColor ? props.pathColor : '';
}, function (props) {
  return !!props.onClick ? 'pointer' : 'auto';
});

var Icon = function Icon(_ref) {
  var pathColor = _ref.pathColor,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement(IconStyled, {
    onClick: onClick,
    pathColor: pathColor
  }, children);
};

var TooltipStyled = styles.withStyles(function (theme) {
  return {
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      boxShadow: theme.shadows[6],
      fontSize: 11,
      padding: '16px 10px',
      maxWidth: 'none'
    },
    arrow: {
      color: theme.palette.common.white
    }
  };
})(Tooltip$1);

var TooltipTitle = function TooltipTitle(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, title);
};

var Tooltip = function Tooltip(_ref2) {
  var children = _ref2.children,
      title = _ref2.title,
      _ref2$placement = _ref2.placement,
      placement = _ref2$placement === void 0 ? 'top' : _ref2$placement,
      _ref2$arrow = _ref2.arrow,
      arrow = _ref2$arrow === void 0 ? true : _ref2$arrow,
      _ref2$interactive = _ref2.interactive,
      interactive = _ref2$interactive === void 0 ? true : _ref2$interactive,
      transition = _ref2.transition,
      props = _objectWithoutProperties(_ref2, ["children", "title", "placement", "arrow", "interactive", "transition"]);

  var transitionComponent = !!transition ? transition === 'fade' ? Fade : transition === 'zoom' ? Zoom : undefined : undefined;
  return /*#__PURE__*/React__default.createElement(TooltipStyled, _extends({
    title: /*#__PURE__*/React__default.createElement(TooltipTitle, {
      title: title
    }),
    placement: placement,
    interactive: interactive,
    arrow: arrow,
    TransitionComponent: transitionComponent
  }, props), /*#__PURE__*/React__default.createElement("span", null, children));
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding: 24px 40px;\n  box-shadow: ", ";\n  color: ", ";\n  background-color: ", ";\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var CardStyled = styled__default.div.attrs(function (props) {
  return {
    className: "rc-card ".concat(props.className ? props.className : '')
  };
})(_templateObject$4(), elevations.elevation1, colors.grey800, colors.white, function (props) {
  return props.rounded && styled.css(["border-radius:4px;"]);
});

var Card = function Card(_ref) {
  var rounded = _ref.rounded,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React__default.createElement(CardStyled, {
    rounded: rounded,
    className: className
  }, children);
};

var VisibilityIcon = function VisibilityIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    opacity: ".9"
  }));
};

VisibilityIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var VisibilityOffIcon = function VisibilityOffIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z",
    opacity: ".9"
  }));
};

VisibilityOffIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var UnfoldMoreIcon = function UnfoldMoreIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z",
    opacity: ".9"
  }));
};

UnfoldMoreIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var UnfoldLessIcon = function UnfoldLessIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z",
    opacity: ".9"
  }));
};

UnfoldLessIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var TrendingUpIcon = function TrendingUpIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
    opacity: ".9"
  }));
};

TrendingUpIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var TrendingNeutralIcon = function TrendingNeutralIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M22 12l-4-4v3H3v2h15v3z",
    opacity: ".9"
  }));
};

TrendingNeutralIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var TrendingDownIcon = function TrendingDownIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z",
    opacity: ".9"
  }));
};

TrendingDownIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ThumbsUpDownIcon = function ThumbsUpDownIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z",
    opacity: ".9"
  }));
};

ThumbsUpDownIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ThumbUpIcon = function ThumbUpIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",
    opacity: ".9"
  }));
};

ThumbUpIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ThumbDownIcon = function ThumbDownIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",
    opacity: ".9"
  }));
};

ThumbDownIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var TextsmsIcon = function TextsmsIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z",
    opacity: ".9"
  }));
};

TextsmsIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var StoreMallDirectoryIcon = function StoreMallDirectoryIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z",
    opacity: ".9"
  }));
};

StoreMallDirectoryIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var StarIcon = function StarIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    opacity: ".9"
  }));
};

StarIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var SignalWifiOffIcon = function SignalWifiOffIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z",
    opacity: ".9"
  }));
};

SignalWifiOffIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ShoppingCartIcon = function ShoppingCartIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z",
    opacity: ".9"
  }));
};

ShoppingCartIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var SettingsIcon = function SettingsIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
    opacity: ".9"
  }));
};

SettingsIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var SendIcon = function SendIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z",
    opacity: ".9"
  }));
};

SendIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var SearchIcon = function SearchIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    opacity: ".9"
  }));
};

SearchIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ScheduleIcon = function ScheduleIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M11.99 2C17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12S6.47 2 11.99 2zM12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm.5 3v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z",
    opacity: ".9"
  }));
};

ScheduleIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var SaveIcon = function SaveIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z",
    opacity: ".9"
  }));
};

SaveIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var RestoreIcon = function RestoreIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z",
    opacity: ".9"
  }));
};

RestoreIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ReportIcon = function ReportIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z",
    opacity: ".9"
  }));
};

ReportIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ReportProblemIcon = function ReportProblemIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
    opacity: ".9"
  }));
};

ReportProblemIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ReplayIcon = function ReplayIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
    opacity: ".9"
  }));
};

ReplayIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var RefreshIcon = function RefreshIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",
    opacity: ".9"
  }));
};

RefreshIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var RadioButtonOnIcon = function RadioButtonOnIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    opacity: ".9"
  }));
};

RadioButtonOnIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var RadioButtonOffIcon = function RadioButtonOffIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    opacity: ".9"
  }));
};

RadioButtonOffIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var PlaylistAddIcon = function PlaylistAddIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z",
    opacity: ".9"
  }));
};

PlaylistAddIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var PlaceIcon = function PlaceIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z",
    opacity: ".9"
  }));
};

PlaceIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var PinDropIcon = function PinDropIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2a2 2 0 1 1-4 0zM5 20v2h14v-2H5z",
    opacity: ".9"
  }));
};

PinDropIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var PersonIcon = function PersonIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    opacity: ".9"
  }));
};

PersonIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var PersonAddIcon = function PersonAddIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    opacity: ".9"
  }));
};

PersonAddIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var PersonOutlineIcon = function PersonOutlineIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 5.9a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2zm0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1zM12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z",
    opacity: ".9"
  }));
};

PersonOutlineIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var PeopleIcon = function PeopleIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    opacity: ".9"
  }));
};

PeopleIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var PeopleOutlineIcon = function PeopleOutlineIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z",
    opacity: ".9"
  }));
};

PeopleOutlineIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var NotificationsIcon = function NotificationsIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2z",
    opacity: ".9"
  }));
};

NotificationsIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var NotificationsOnIcon = function NotificationsOnIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M6.58 3.58L5.15 2.15A10.472 10.472 0 0 0 1.03 10h2a8.445 8.445 0 0 1 3.55-6.42zM19.97 10h2a10.45 10.45 0 0 0-4.13-7.85l-1.43 1.43A8.426 8.426 0 0 1 19.97 10zm-1.97.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2v-5.5zM11.5 22a1.988 1.988 0 0 0 1.84-1.22c.1-.24.16-.5.16-.78h-4c0 1.1.9 2 2 2z",
    opacity: ".9"
  }));
};

NotificationsOnIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var NotificationsOffIcon = function NotificationsOffIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM18 10.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-.51.12-.99.32-1.45.56L18 14.18V10.5zm-.27 8.5l2 2L21 19.73 4.27 3 3 4.27l2.92 2.92C5.34 8.16 5 9.29 5 10.5V16l-2 2v1h14.73z",
    opacity: ".9"
  }));
};

NotificationsOffIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var NotificationsNoneIcon = function NotificationsNoneIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2zm-2 1H7v-6.5C7 8.01 9.01 6 11.5 6S16 8.01 16 10.5V17z",
    opacity: ".9"
  }));
};

NotificationsNoneIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var NotInterestedIcon = function NotInterestedIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",
    opacity: ".9"
  }));
};

NotInterestedIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var NewReleasesIcon = function NewReleasesIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z",
    opacity: ".9"
  }));
};

NewReleasesIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var NetworkWifiIcon = function NetworkWifiIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z",
    opacity: ".9"
  }));
};

NetworkWifiIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var NavigationIcon = function NavigationIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z",
    opacity: ".9"
  }));
};

NavigationIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var MyLocationIcon = function MyLocationIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
    opacity: ".9"
  }));
};

MyLocationIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var MoreVertIcon = function MoreVertIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    opacity: ".9"
  }));
};

MoreVertIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var MessengerIcon = function MessengerIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
    opacity: ".9"
  }));
};

MessengerIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var MessageIcon = function MessageIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
    opacity: ".9"
  }));
};

MessageIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var MenuIcon = function MenuIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
    opacity: ".9"
  }));
};

MenuIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var MapIcon = function MapIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z",
    opacity: ".9"
  }));
};

MapIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LoopIcon = function LoopIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z",
    opacity: ".9"
  }));
};

LoopIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LockIcon = function LockIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
    opacity: ".9"
  }));
};

LockIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LockOutlineIcon = function LockOutlineIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-5.1c1.71 0 3.1 1.39 3.1 3.1v2H9V6h-.1c0-1.71 1.39-3.1 3.1-3.1zM18 20H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z",
    opacity: ".9"
  }));
};

LockOutlineIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LockOpenIcon = function LockOpenIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z",
    opacity: ".9"
  }));
};

LockOpenIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LocationOffIcon = function LocationOffIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 6.5A2.5 2.5 0 0 1 14.5 9c0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7a7 7 0 0 0-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z",
    opacity: ".9"
  }));
};

LocationOffIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LocalShippingIcon = function LocalShippingIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
    opacity: ".9"
  }));
};

LocalShippingIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LiveHelpIcon = function LiveHelpIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z",
    opacity: ".9"
  }));
};

LiveHelpIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var InsertLinkIcon = function InsertLinkIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
    opacity: ".9"
  }));
};

InsertLinkIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var InsertDriveFileIcon = function InsertDriveFileIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z",
    opacity: ".9"
  }));
};

InsertDriveFileIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var InsertChartIcon = function InsertChartIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
    opacity: ".9"
  }));
};

InsertChartIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var InfoIcon = function InfoIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
    opacity: ".9"
  }));
};

InfoIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var InfoOutlineIcon = function InfoOutlineIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z",
    opacity: ".9"
  }));
};

InfoOutlineIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var HomeIcon = function HomeIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    opacity: ".9"
  }));
};

HomeIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var HelpIcon = function HelpIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z",
    opacity: ".9"
  }));
};

HelpIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var GroupAddIcon = function GroupAddIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86 0 1.07-.34 2.04-.9 2.86.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z",
    opacity: ".9"
  }));
};

GroupAddIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FullscreenIcon = function FullscreenIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
    opacity: ".9"
  }));
};

FullscreenIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FullscreenExitIcon = function FullscreenExitIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",
    opacity: ".9"
  }));
};

FullscreenExitIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ForumIcon = function ForumIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z",
    opacity: ".9"
  }));
};

ForumIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FolderIcon = function FolderIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z",
    opacity: ".9"
  }));
};

FolderIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FolderOpenIcon = function FolderOpenIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",
    opacity: ".9"
  }));
};

FolderOpenIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FlagIcon = function FlagIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",
    opacity: ".9"
  }));
};

FlagIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FilterListIcon = function FilterListIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z",
    opacity: ".9"
  }));
};

FilterListIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FavoriteIcon = function FavoriteIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    opacity: ".9"
  }));
};

FavoriteIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FavoriteOutlineIcon = function FavoriteOutlineIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",
    opacity: ".9"
  }));
};

FavoriteOutlineIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ExploreIcon = function ExploreIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 10.9c-.61 0-1.1.49-1.1 1.1 0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1 0-.61-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z",
    opacity: ".9"
  }));
};

ExploreIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ExpandMoreIcon = function ExpandMoreIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
    opacity: ".9"
  }));
};

ExpandMoreIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ExpandLessIcon = function ExpandLessIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
    opacity: ".9"
  }));
};

ExpandLessIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var EventIcon = function EventIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
    opacity: ".9"
  }));
};

EventIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var EqualizerIcon = function EqualizerIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z",
    opacity: ".9"
  }));
};

EqualizerIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var DoneIcon = function DoneIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    opacity: ".9"
  }));
};

DoneIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var DoneAllIcon = function DoneAllIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z",
    opacity: ".9"
  }));
};

DoneAllIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var DeleteIcon = function DeleteIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
    opacity: ".9"
  }));
};

DeleteIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CropFreeIcon = function CropFreeIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z",
    opacity: ".9"
  }));
};

CropFreeIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CreateIcon = function CreateIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
    opacity: ".9"
  }));
};

CreateIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ContentCopyIcon = function ContentCopyIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",
    opacity: ".9"
  }));
};

ContentCopyIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CommentIcon = function CommentIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
    opacity: ".9"
  }));
};

CommentIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CollectionsIcon = function CollectionsIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z",
    opacity: ".9"
  }));
};

CollectionsIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CloseIcon = function CloseIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    opacity: ".9"
  }));
};

CloseIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ChevronRightIcon = function ChevronRightIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
    opacity: ".9"
  }));
};

ChevronRightIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ChevronLeftIcon = function ChevronLeftIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
    opacity: ".9"
  }));
};

ChevronLeftIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CheckBoxIcon = function CheckBoxIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    opacity: ".9"
  }));
};

CheckBoxIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CheckBoxOutlineBlankIcon = function CheckBoxOutlineBlankIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    opacity: ".9"
  }));
};

CheckBoxOutlineBlankIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CenterFocusWeakIcon = function CenterFocusWeakIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
    opacity: ".9"
  }));
};

CenterFocusWeakIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CenterFocusStrongIcon = function CenterFocusStrongIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z",
    opacity: ".9"
  }));
};

CenterFocusStrongIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CancelIcon = function CancelIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    opacity: ".9"
  }));
};

CancelIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CameraAltIcon = function CameraAltIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M15 2l1.83 2H20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.17L9 2h6zm-3 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4z",
    opacity: ".9"
  }));
};

CameraAltIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CallIcon = function CallIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
    opacity: ".9"
  }));
};

CallIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var CachedIcon = function CachedIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19 8l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 0 1-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z",
    opacity: ".9"
  }));
};

CachedIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var BookmarkIcon = function BookmarkIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z",
    opacity: ".9"
  }));
};

BookmarkIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var BookmarkOutlineIcon = function BookmarkOutlineIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z",
    opacity: ".9"
  }));
};

BookmarkOutlineIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AutorenewIcon = function AutorenewIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z",
    opacity: ".9"
  }));
};

AutorenewIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AttachmentIcon = function AttachmentIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M7.5 18C4.46 18 2 15.54 2 12.5S4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5a2.5 2.5 0 0 1 0-5H17v1.5H9.5c-.55 0-1 .45-1 1s.45 1 1 1H18a2.5 2.5 0 0 0 0-5H7.5c-2.21 0-4 1.79-4 4s1.79 4 4 4H17V18H7.5z",
    opacity: ".9"
  }));
};

AttachmentIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AttachMoneyIcon = function AttachMoneyIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
    opacity: ".9"
  }));
};

AttachMoneyIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ArrowForwardIcon = function ArrowForwardIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    opacity: ".9"
  }));
};

ArrowForwardIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ArrowDropUpIcon = function ArrowDropUpIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M7 14l5-5 5 5z",
    opacity: ".9"
  }));
};

ArrowDropUpIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ArrowDropDownIcon = function ArrowDropDownIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M7 10l5 5 5-5z",
    opacity: ".9"
  }));
};

ArrowDropDownIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ArrowBackIcon = function ArrowBackIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
    opacity: ".9"
  }));
};

ArrowBackIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AddIcon = function AddIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z",
    opacity: ".9"
  }));
};

AddIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AddShoppingCartIcon = function AddShoppingCartIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z",
    opacity: ".9"
  }));
};

AddShoppingCartIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AccountCircleIcon = function AccountCircleIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z",
    opacity: ".9"
  }));
};

AccountCircleIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AccountBoxIcon = function AccountBoxIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M3 5v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z",
    opacity: ".9"
  }));
};

AccountBoxIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var AccessAlarmIcon = function AccessAlarmIcon(props) {
  return /*#__PURE__*/React__default.createElement("svg", props, /*#__PURE__*/React__default.createElement("path", {
    fill: "#0A0C0D",
    fillRule: "evenodd",
    d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
    opacity: ".9"
  }));
};

AccessAlarmIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

exports.AccessAlarmIcon = AccessAlarmIcon;
exports.AccountBoxIcon = AccountBoxIcon;
exports.AccountCircleIcon = AccountCircleIcon;
exports.AddIcon = AddIcon;
exports.AddShoppingCartIcon = AddShoppingCartIcon;
exports.ArrowBackIcon = ArrowBackIcon;
exports.ArrowDropDownIcon = ArrowDropDownIcon;
exports.ArrowDropUpIcon = ArrowDropUpIcon;
exports.ArrowForwardIcon = ArrowForwardIcon;
exports.AttachMoneyIcon = AttachMoneyIcon;
exports.AttachmentIcon = AttachmentIcon;
exports.AutorenewIcon = AutorenewIcon;
exports.BookmarkIcon = BookmarkIcon;
exports.BookmarkOutlineIcon = BookmarkOutlineIcon;
exports.Button = Button;
exports.CachedIcon = CachedIcon;
exports.CallIcon = CallIcon;
exports.CameraAltIcon = CameraAltIcon;
exports.CancelIcon = CancelIcon;
exports.Card = Card;
exports.CenterFocusStrongIcon = CenterFocusStrongIcon;
exports.CenterFocusWeakIcon = CenterFocusWeakIcon;
exports.CheckBoxIcon = CheckBoxIcon;
exports.CheckBoxOutlineBlankIcon = CheckBoxOutlineBlankIcon;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.CloseIcon = CloseIcon;
exports.CollectionsIcon = CollectionsIcon;
exports.CommentIcon = CommentIcon;
exports.ContentCopyIcon = ContentCopyIcon;
exports.CreateIcon = CreateIcon;
exports.CropFreeIcon = CropFreeIcon;
exports.DeleteIcon = DeleteIcon;
exports.DoneAllIcon = DoneAllIcon;
exports.DoneIcon = DoneIcon;
exports.EqualizerIcon = EqualizerIcon;
exports.EventIcon = EventIcon;
exports.ExpandLessIcon = ExpandLessIcon;
exports.ExpandMoreIcon = ExpandMoreIcon;
exports.ExploreIcon = ExploreIcon;
exports.FavoriteIcon = FavoriteIcon;
exports.FavoriteOutlineIcon = FavoriteOutlineIcon;
exports.FilterListIcon = FilterListIcon;
exports.FlagIcon = FlagIcon;
exports.FolderIcon = FolderIcon;
exports.FolderOpenIcon = FolderOpenIcon;
exports.ForumIcon = ForumIcon;
exports.FullscreenExitIcon = FullscreenExitIcon;
exports.FullscreenIcon = FullscreenIcon;
exports.GroupAddIcon = GroupAddIcon;
exports.HelpIcon = HelpIcon;
exports.HomeIcon = HomeIcon;
exports.Icon = Icon;
exports.InfoIcon = InfoIcon;
exports.InfoOutlineIcon = InfoOutlineIcon;
exports.InsertChartIcon = InsertChartIcon;
exports.InsertDriveFileIcon = InsertDriveFileIcon;
exports.InsertLinkIcon = InsertLinkIcon;
exports.LiveHelpIcon = LiveHelpIcon;
exports.LocalShippingIcon = LocalShippingIcon;
exports.LocationOffIcon = LocationOffIcon;
exports.LockIcon = LockIcon;
exports.LockOpenIcon = LockOpenIcon;
exports.LockOutlineIcon = LockOutlineIcon;
exports.LoopIcon = LoopIcon;
exports.MapIcon = MapIcon;
exports.MenuIcon = MenuIcon;
exports.MessageIcon = MessageIcon;
exports.MessengerIcon = MessengerIcon;
exports.MoreVertIcon = MoreVertIcon;
exports.MyLocationIcon = MyLocationIcon;
exports.NavigationIcon = NavigationIcon;
exports.NetworkWifiIcon = NetworkWifiIcon;
exports.NewReleasesIcon = NewReleasesIcon;
exports.NotInterestedIcon = NotInterestedIcon;
exports.NotificationsIcon = NotificationsIcon;
exports.NotificationsNoneIcon = NotificationsNoneIcon;
exports.NotificationsOffIcon = NotificationsOffIcon;
exports.NotificationsOnIcon = NotificationsOnIcon;
exports.PeopleIcon = PeopleIcon;
exports.PeopleOutlineIcon = PeopleOutlineIcon;
exports.PersonAddIcon = PersonAddIcon;
exports.PersonIcon = PersonIcon;
exports.PersonOutlineIcon = PersonOutlineIcon;
exports.PinDropIcon = PinDropIcon;
exports.PlaceIcon = PlaceIcon;
exports.PlaylistAddIcon = PlaylistAddIcon;
exports.RadioButtonOffIcon = RadioButtonOffIcon;
exports.RadioButtonOnIcon = RadioButtonOnIcon;
exports.RefreshIcon = RefreshIcon;
exports.ReplayIcon = ReplayIcon;
exports.ReportIcon = ReportIcon;
exports.ReportProblemIcon = ReportProblemIcon;
exports.RestoreIcon = RestoreIcon;
exports.SaveIcon = SaveIcon;
exports.ScheduleIcon = ScheduleIcon;
exports.SearchIcon = SearchIcon;
exports.SearchInput = SearchInput;
exports.SendIcon = SendIcon;
exports.SettingsIcon = SettingsIcon;
exports.ShoppingCartIcon = ShoppingCartIcon;
exports.SignalWifiOffIcon = SignalWifiOffIcon;
exports.StarIcon = StarIcon;
exports.StoreMallDirectoryIcon = StoreMallDirectoryIcon;
exports.TextField = TextField;
exports.TextsmsIcon = TextsmsIcon;
exports.ThumbDownIcon = ThumbDownIcon;
exports.ThumbUpIcon = ThumbUpIcon;
exports.ThumbsUpDownIcon = ThumbsUpDownIcon;
exports.Tooltip = Tooltip;
exports.TrendingDownIcon = TrendingDownIcon;
exports.TrendingNeutralIcon = TrendingNeutralIcon;
exports.TrendingUpIcon = TrendingUpIcon;
exports.UnfoldLessIcon = UnfoldLessIcon;
exports.UnfoldMoreIcon = UnfoldMoreIcon;
exports.VisibilityIcon = VisibilityIcon;
exports.VisibilityOffIcon = VisibilityOffIcon;
