"use strict";

// This file was generated by the following command:
// 
//   docker run -v ${PWD}:/root \
//              -w /root \
//              --rm \
//              node:alpine \
//              npx babel /root/src/react/script.js
//
// and the output was copied and pasted to this file.
//
// @see https://babeljs.io/docs/en/babel-preset-env
// @see https://babeljs.io/docs/en/babel-preset-react

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _super.call(this, props);
    _this.state = {
      name: props.name,
      items: ['a', 'b', 'c']
    };
    _this.del = _this.del.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(List, [{
    key: "del",
    value: function del(item) {
      var newItems = this.state.items.filter(function (i) {
        return i !== item;
      });
      this.setState({
        items: newItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      var action = this.del;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, this.state.name), /*#__PURE__*/React.createElement("ul", null, this.state.items.map(function (i) {
        return /*#__PURE__*/React.createElement(Item, {
          name: i,
          action: action
        });
      })));
    }
  }]);

  return List;
}(React.Component);

function Item(props) {
  var name = props.name;
  var action = props.action;
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return action(name);
    }
  }, name));
}

ReactDOM.render( /*#__PURE__*/React.createElement(List, {
  name: "List FZ"
}), document.getElementById('list'));