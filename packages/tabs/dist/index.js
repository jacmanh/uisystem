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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/tabs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/tabs/index.js":
/*!********************************!*\
  !*** ./packages/tabs/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./packages/tabs/style.scss");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



var Tabs = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Tabs, _HTMLElement);

  var _super = _createSuper(Tabs);

  function Tabs() {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this);
    _this._style = document.createElement('style');
    _this._style.textContent = _style_scss__WEBPACK_IMPORTED_MODULE_0__["default"];

    _this.attachShadow({
      mode: 'open'
    });

    var html = document.createRange().createContextualFragment(_this.render());

    _this.shadowRoot.appendChild(html);

    _this.shadowRoot.appendChild(_this._style);

    return _this;
  }

  _createClass(Tabs, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var tabsSlot = this.shadowRoot.querySelector('#tabsSlot');
      var panelsSlot = this.shadowRoot.querySelector('.panels slot');
      this.tabs = tabsSlot.assignedElements({
        flatten: true
      });
      this.panels = panelsSlot.assignedElements({
        flatten: true
      }); // Add aria role="tabpanel" to each content panel.

      if (this.panels) {
        var _iterator = _createForOfIteratorHelper(this.panels.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                i = _step$value[0],
                panel = _step$value[1];

            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('tabindex', 0);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // Add attributes to tabs


      var _iterator2 = _createForOfIteratorHelper(this.tabs.entries()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              _i2 = _step2$value[0],
              tab = _step2$value[1];

          tab.setAttribute('role', 'tab');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      tabsSlot.addEventListener('click', this._onTabClick.bind(this));
      this.selected = this._getSelectedTab() || 0;
    }
  }, {
    key: "_getSelectedTab",
    value: function _getSelectedTab() {
      var index = this.tabs.findIndex(function (tab) {
        return tab.hasAttribute('data-selected');
      });
      return index >= 0 ? index : null;
    }
  }, {
    key: "_onTabClick",
    value: function _onTabClick(e) {
      if (e.target.slot === 'tab') {
        this.selected = this.tabs.indexOf(e.target);
        e.target.focus();
      }
    }
  }, {
    key: "_selectTab",
    value: function _selectTab() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      for (var i = 0, tab; tab = this.tabs[i]; ++i) {
        var select = i === index;
        tab.setAttribute('tabindex', select ? 0 : -1);
        tab.setAttribute('aria-selected', select);
        this.panels[i].setAttribute('aria-hidden', !select);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return "\n      <div class=\"tabs\">\n        <slot id=\"tabsSlot\" name=\"tab\"></slot>\n      </div>\n      <div class=\"panels\">\n        <slot></slot>\n      </div>\n    ";
    }
  }, {
    key: "selected",
    get: function get() {
      return this.selected;
    },
    set: function set(index) {
      this._selectTab(index);

      this.setAttribute('selected', index);
    }
  }]);

  return Tabs;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('ui-tabs', Tabs);

/***/ }),

/***/ "./packages/tabs/style.scss":
/*!**********************************!*\
  !*** ./packages/tabs/style.scss ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  display: grid; }\n  :host ::slotted([slot=tab]) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    width: 100%;\n    height: 50%;\n    border: 1px solid var(--border-color);\n    border-left: none;\n    border-bottom: none;\n    background-color: transparent;\n    font-size: 1.3rem;\n    outline: none; }\n  :host ::slotted([slot=tab]:first-child) {\n    border-top: none; }\n  :host ::slotted([slot=tab]:hover),\n  :host ::slotted([slot=tab][aria-selected=true]) {\n    color: var(--action-color);\n    background-color: #fafbfd; }\n\n:host([vertical]) {\n  grid-template: \"a b\" 1fr / 70px; }\n\n.panels {\n  display: grid;\n  grid-template: \"content\" 100% / 1fr; }\n  .panels ::slotted(*) {\n    grid-area: content;\n    max-height: 100%;\n    overflow: auto;\n    outline: none; }\n  .panels ::slotted([aria-hidden=\"true\"]) {\n    display: block;\n    visibility: hidden;\n    overflow-y: hidden;\n    opacity: 0; }\n");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90YWJzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiVGFicyIsIl9zdHlsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50Iiwic3R5bGVzIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImh0bWwiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsInJlbmRlciIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsInRhYnNTbG90IiwicXVlcnlTZWxlY3RvciIsInBhbmVsc1Nsb3QiLCJ0YWJzIiwiYXNzaWduZWRFbGVtZW50cyIsImZsYXR0ZW4iLCJwYW5lbHMiLCJlbnRyaWVzIiwiaSIsInBhbmVsIiwic2V0QXR0cmlidXRlIiwidGFiIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vblRhYkNsaWNrIiwiYmluZCIsInNlbGVjdGVkIiwiX2dldFNlbGVjdGVkVGFiIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJoYXNBdHRyaWJ1dGUiLCJlIiwidGFyZ2V0Iiwic2xvdCIsImluZGV4T2YiLCJmb2N1cyIsInNlbGVjdCIsIl9zZWxlY3RUYWIiLCJIVE1MRWxlbWVudCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFB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QixvQkFBb0IsRUFBRSw2Q0FBNkMsdUJBQXVCLEVBQUUsMkZBQTJGLGlDQUFpQyxnQ0FBZ0MsRUFBRSx1QkFBdUIsc0NBQXNDLEVBQUUsYUFBYSxrQkFBa0IsMENBQTBDLEVBQUUsMEJBQTBCLHlCQUF5Qix1QkFBdUIscUJBQXFCLG9CQUFvQixFQUFFLCtDQUErQyxxQkFBcUIseUJBQXlCLHlCQUF5QixpQkFBaUIsRUFBRSxHQUFHLEUiLCJmaWxlIjoiLi9wYWNrYWdlcy90YWJzL2Rpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhY2thZ2VzL3RhYnMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuc2NzcydcblxuY2xhc3MgVGFicyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5fc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgdGhpcy5fc3R5bGUudGV4dENvbnRlbnQgPSBzdHlsZXNcblxuICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG5cbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQodGhpcy5yZW5kZXIoKSlcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoaHRtbClcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5fc3R5bGUpXG4gIH1cbiBcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgbGV0IHRhYnNTbG90ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyN0YWJzU2xvdCcpXG4gICAgbGV0IHBhbmVsc1Nsb3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnBhbmVscyBzbG90JylcblxuICAgIHRoaXMudGFicyA9IHRhYnNTbG90LmFzc2lnbmVkRWxlbWVudHMoeyBmbGF0dGVuOiB0cnVlIH0pXG4gICAgdGhpcy5wYW5lbHMgPSBwYW5lbHNTbG90LmFzc2lnbmVkRWxlbWVudHMoeyBmbGF0dGVuOiB0cnVlIH0pO1xuXG4gICAgLy8gQWRkIGFyaWEgcm9sZT1cInRhYnBhbmVsXCIgdG8gZWFjaCBjb250ZW50IHBhbmVsLlxuICAgIGlmICh0aGlzLnBhbmVscykge1xuICAgICAgZm9yIChsZXQgW2ksIHBhbmVsXSBvZiB0aGlzLnBhbmVscy5lbnRyaWVzKCkpIHtcbiAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RhYnBhbmVsJyk7XG4gICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRkIGF0dHJpYnV0ZXMgdG8gdGFic1xuICAgIGZvciAobGV0IFtpLCB0YWJdIG9mIHRoaXMudGFicy5lbnRyaWVzKCkpIHtcbiAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFiJyk7XG4gICAgfVxuXG4gICAgdGFic1Nsb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vblRhYkNsaWNrLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuX2dldFNlbGVjdGVkVGFiKCkgfHwgMDtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZChpbmRleCkge1xuICAgIHRoaXMuX3NlbGVjdFRhYihpbmRleCk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgaW5kZXgpO1xuICB9XG5cbiAgX2dldFNlbGVjdGVkVGFiKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcpKVxuICAgIHJldHVybiBpbmRleCA+PSAwID8gaW5kZXggOiBudWxsXG4gIH1cblxuICBfb25UYWJDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0LnNsb3QgPT09ICd0YWInKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YWJzLmluZGV4T2YoZS50YXJnZXQpO1xuICAgICAgZS50YXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0VGFiKGluZGV4ID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCB0YWI7IHRhYiA9IHRoaXMudGFic1tpXTsgKytpKSB7XG4gICAgICBsZXQgc2VsZWN0ID0gaSA9PT0gaW5kZXg7XG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHNlbGVjdCA/IDAgOiAtMSk7XG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0KTtcbiAgICAgIHRoaXMucGFuZWxzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAhc2VsZWN0KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG4gICAgICAgIDxzbG90IGlkPVwidGFic1Nsb3RcIiBuYW1lPVwidGFiXCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWxzXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndWktdGFicycsIFRhYnMpIiwiZXhwb3J0IGRlZmF1bHQgXCI6aG9zdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7IH1cXG4gIDpob3N0IDo6c2xvdHRlZChbc2xvdD10YWJdKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIDpob3N0IDo6c2xvdHRlZChbc2xvdD10YWJdOmZpcnN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7IH1cXG4gIDpob3N0IDo6c2xvdHRlZChbc2xvdD10YWJdOmhvdmVyKSxcXG4gIDpob3N0IDo6c2xvdHRlZChbc2xvdD10YWJdW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0pIHtcXG4gICAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmQ7IH1cXG5cXG46aG9zdChbdmVydGljYWxdKSB7XFxuICBncmlkLXRlbXBsYXRlOiBcXFwiYSBiXFxcIiAxZnIgLyA3MHB4OyB9XFxuXFxuLnBhbmVscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogXFxcImNvbnRlbnRcXFwiIDEwMCUgLyAxZnI7IH1cXG4gIC5wYW5lbHMgOjpzbG90dGVkKCopIHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgLnBhbmVscyA6OnNsb3R0ZWQoW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0pIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==