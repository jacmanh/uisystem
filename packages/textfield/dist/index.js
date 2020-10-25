module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/textfield/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/textfield/index.js":
/*!*************************************!*\
  !*** ./packages/textfield/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jacmanh_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jacmanh/utils */ "./packages/utils/dist/index.js");
/* harmony import */ var _jacmanh_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jacmanh_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./packages/textfield/style.scss");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Textfield = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Textfield, _HTMLElement);

  var _super = _createSuper(Textfield);

  function Textfield() {
    var _this;

    _classCallCheck(this, Textfield);

    _this = _super.call(this);
    _this._style = document.createElement('style');
    _this._style.type = 'text/css';

    _this._style.appendChild(document.createTextNode(_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"]));

    _this.attachShadow({
      mode: 'open'
    });

    _this._id = "textfield-".concat(Object(_jacmanh_utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])(3));
    return _this;
  }

  _createClass(Textfield, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      var html = document.createRange().createContextualFragment(this.render());
      this.shadowRoot.appendChild(html);
      this.shadowRoot.appendChild(this._style);
      this._input = this.shadowRoot.getElementById(this._id); // Init state

      this.dataset.filled = !!this.value; // Input Events

      this._input.addEventListener('focus', function (e) {
        return _this2.onFocus();
      });

      this._input.addEventListener('blur', function (e) {
        return _this2.onBlur();
      });

      this._input.addEventListener('input', function (e) {
        return _this2.onChange(e);
      });
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.classList.add('active');
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.classList.remove('active');
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.dataset.filled = !!e.currentTarget.value;
      this.closest('FORM').dispatchEvent(new CustomEvent('texfieldChange', {
        detail: {
          name: e.currentTarget.name,
          value: e.currentTarget.value
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return "\n      <label for=\"".concat(this._id, "\">\n        ").concat(this.getAttribute('label'), "\n      </label>\n      <input\n        id=\"").concat(this._id, "\"\n        type=\"").concat(this.getAttribute('type') || 'text', "\"\n        name=\"").concat(this.getAttribute('name') || '', "\"\n        ").concat(this.getAttribute('disabled') ? "disabled" : '', "\n        value=\"").concat(this.value, "\"\n      />\n    ");
    }
  }, {
    key: "value",
    get: function get() {
      return this._input && this._input.value || this.getAttribute('value') || '';
    }
  }]);

  return Textfield;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('ui-textfield', Textfield);

/***/ }),

/***/ "./packages/textfield/style.scss":
/*!***************************************!*\
  !*** ./packages/textfield/style.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: var(--primary-font);\n  box-sizing: border-box; }\n\n:host {\n  display: inline-block;\n  position: relative;\n  font-size: 14px;\n  border-radius: var(--input-border-radius);\n  background-color: #fff;\n  border: 1px solid var(--border-color);\n  padding: 5px 10px; }\n\n:host([disabled]) {\n  background-color: var(--input-disabled-color); }\n\nlabel {\n  position: absolute;\n  color: var(--input-label-color);\n  font-size: 1em;\n  transform-origin: top left;\n  top: 50%;\n  transform: translate(0, -50%) scale(1);\n  transition: all .1s ease-in-out; }\n  :host(.active) label,\n  :host([data-filled=true]) label {\n    transform: translate(0, -90%) scale(0.75); }\n  :host([disabled]) label {\n    opacity: 0.5; }\n\ninput {\n  display: block;\n  width: 100%;\n  min-height: 30px;\n  font-size: 1em;\n  padding-top: 8px;\n  color: var(--input-text-color);\n  border: none;\n  outline: 0; }\n  input::placeholder {\n    color: var(--input-label-color); }\n");

/***/ }),

/***/ "./packages/utils/dist/index.js":
/*!**************************************!*\
  !*** ./packages/utils/dist/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports =
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./packages/utils/index.js");
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  "./packages/utils/index.js":
  /*!*********************************!*\
    !*** ./packages/utils/index.js ***!
    \*********************************/

  /*! exports provided: uuid */

  /***/
  function packagesUtilsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uuid", function () {
      return uuid;
    });

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    var uuid = function uuid(length) {
      return _toConsumableArray(Array(length)).map(function (i) {
        return (~~(Math.random() * 36)).toString(36);
      }).join('');
    };
    /***/

  }
  /******/

});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGV4dGZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3RleHRmaWVsZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9wYWNrYWdlcy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZXh0ZmllbGQiLCJfc3R5bGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInN0eWxlcyIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJfaWQiLCJ1dWlkIiwiaHRtbCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwicmVuZGVyIiwic2hhZG93Um9vdCIsIl9pbnB1dCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsImZpbGxlZCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvbkZvY3VzIiwib25CbHVyIiwib25DaGFuZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJIVE1MRWxlbWVudCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiQXJyYXkiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNB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QUF1QixhQUFDO0FBQUEsZUFBRSxDQUFDLENBQUMsRUFBRUMsSUFBSSxDQUFKQSxXQUFKLEVBQUUsQ0FBRixXQUFGLEVBQUUsQ0FBRjtBQUF4QixjQUFQLEVBQU8sQ0FBUDtBQURLIiwiZmlsZSI6Ii4vcGFja2FnZXMvdGV4dGZpZWxkL2Rpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhY2thZ2VzL3RleHRmaWVsZC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHV1aWQgfSBmcm9tICdAamFjbWFuaC91dGlscydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5zY3NzJ1xuXG5jbGFzcyBUZXh0ZmllbGQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuX3N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHRoaXMuX3N0eWxlLnR5cGUgPSAndGV4dC9jc3MnXG4gICAgdGhpcy5fc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzKSlcblxuICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG4gICAgdGhpcy5faWQgPSBgdGV4dGZpZWxkLSR7dXVpZCgzKX1gXG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQodGhpcy5yZW5kZXIoKSlcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoaHRtbClcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5fc3R5bGUpXG5cbiAgICB0aGlzLl9pbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCh0aGlzLl9pZClcblxuICAgIC8vIEluaXQgc3RhdGVcbiAgICB0aGlzLmRhdGFzZXQuZmlsbGVkID0gISF0aGlzLnZhbHVlXG5cbiAgICAvLyBJbnB1dCBFdmVudHNcbiAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGUgPT4gdGhpcy5vbkZvY3VzKCkpXG4gICAgdGhpcy5faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5vbkJsdXIoKSlcbiAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gdGhpcy5vbkNoYW5nZShlKSlcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2lucHV0ICYmIHRoaXMuX2lucHV0LnZhbHVlKSB8fCB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKSB8fCAnJ1xuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9XG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIHRoaXMuZGF0YXNldC5maWxsZWQgPSAhIWUuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIHRoaXMuY2xvc2VzdCgnRk9STScpLmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3RleGZpZWxkQ2hhbmdlJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBuYW1lOiBlLmN1cnJlbnRUYXJnZXQubmFtZSxcbiAgICAgICAgICB2YWx1ZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gICAgICA8bGFiZWwgZm9yPVwiJHt0aGlzLl9pZH1cIj5cbiAgICAgICAgJHt0aGlzLmdldEF0dHJpYnV0ZSgnbGFiZWwnKX1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCIke3RoaXMuX2lkfVwiXG4gICAgICAgIHR5cGU9XCIke3RoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJykgfHwgJ3RleHQnfVwiXG4gICAgICAgIG5hbWU9XCIke3RoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgJyd9XCJcbiAgICAgICAgJHt0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSA/IFwiZGlzYWJsZWRcIiA6ICcnfVxuICAgICAgICB2YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIlxuICAgICAgLz5cbiAgICBgXG4gIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLXRleHRmaWVsZCcsIFRleHRmaWVsZCkiLCJleHBvcnQgZGVmYXVsdCBcIioge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuOmhvc3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW5wdXQtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4OyB9XFxuXFxuOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtZGlzYWJsZWQtY29sb3IpOyB9XFxuXFxubGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6IHZhcigtLWlucHV0LWxhYmVsLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpIHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDsgfVxcbiAgOmhvc3QoLmFjdGl2ZSkgbGFiZWwsXFxuICA6aG9zdChbZGF0YS1maWxsZWQ9dHJ1ZV0pIGxhYmVsIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTkwJSkgc2NhbGUoMC43NSk7IH1cXG4gIDpob3N0KFtkaXNhYmxlZF0pIGxhYmVsIHtcXG4gICAgb3BhY2l0eTogMC41OyB9XFxuXFxuaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBjb2xvcjogdmFyKC0taW5wdXQtdGV4dC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiAwOyB9XFxuICBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0taW5wdXQtbGFiZWwtY29sb3IpOyB9XFxuXCI7IiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWNrYWdlcy91dGlscy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGNvbnN0IHV1aWQgPSAobGVuZ3RoKSA9PiB7XG4gIHJldHVybiBbLi4uQXJyYXkobGVuZ3RoKV0ubWFwKGk9Pih+fihNYXRoLnJhbmRvbSgpKjM2KSkudG9TdHJpbmcoMzYpKS5qb2luKCcnKVxufSJdLCJzb3VyY2VSb290IjoiIn0=