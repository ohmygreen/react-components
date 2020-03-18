'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSearchInput = styled.div(_templateObject());

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
    console.log('TEST3' + value);
    setInputValue(value);
  };

  return React__default.createElement(StyledSearchInput, null, React__default.createElement("div", {
    className: "search-holder"
  }, React__default.createElement("input", {
    type: "text",
    value: inputValue,
    onChange: handleOnChange
  })));
};

exports.SearchInput = SearchInput;
