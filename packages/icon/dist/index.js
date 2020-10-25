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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/icon/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/icon/index.js":
/*!********************************!*\
  !*** ./packages/icon/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./packages/icon/style.scss");
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



var Icon = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Icon, _HTMLElement);

  var _super = _createSuper(Icon);

  function Icon() {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    _this._style = document.createElement('style');
    _this._style.textContent = _style_scss__WEBPACK_IMPORTED_MODULE_0__["default"];
    return _this;
  }

  _createClass(Icon, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.shadowRoot.appendChild(this._style);
      this.classList.add("icon-".concat(this.iconName));
    }
  }, {
    key: "iconName",
    get: function get() {
      return this.getAttribute('name') || null;
    }
  }]);

  return Icon;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

window.customElements.define('ui-icon', Icon);

/***/ }),

/***/ "./packages/icon/style.scss":
/*!**********************************!*\
  !*** ./packages/icon/style.scss ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n:host([class^=\"icon-\"]),\n:host([class*=\"icon-\"]) {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'ui-icon' !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n:host([no-event]) {\n  pointer-events: none; }\n\n:host(.icon-login):before {\n  content: \"\"; }\n\n:host(.icon-register):before {\n  content: \"\"; }\n\n:host(:host(.icon-check)):before {\n  content: \"\"; }\n\n:host(.icon-albums):before {\n  content: \"\"; }\n\n:host(.icon-badge):before {\n  content: \"\"; }\n\n:host(.icon-blocked):before {\n  content: \"\"; }\n\n:host(.icon-blog):before {\n  content: \"\"; }\n\n:host(.icon-calendar-checked):before {\n  content: \"\"; }\n\n:host(.icon-calendar-day):before {\n  content: \"\"; }\n\n:host(.icon-calendar-eek):before {\n  content: \"\"; }\n\n:host(.icon-calendar-month):before {\n  content: \"\"; }\n\n:host(.icon-calendar):before {\n  content: \"\"; }\n\n:host(.icon-camera):before {\n  content: \"\"; }\n\n:host(.icon-close):before {\n  content: \"\"; }\n\n:host(.icon-computer):before {\n  content: \"\"; }\n\n:host(.icon-conversation):before {\n  content: \"\"; }\n\n:host(.icon-cupcake):before {\n  content: \"\"; }\n\n:host(.icon-face):before {\n  content: \"\"; }\n\n:host(.icon-faces):before {\n  content: \"\"; }\n\n:host(.icon-feed):before {\n  content: \"\"; }\n\n:host(.icon-headphones):before {\n  content: \"\"; }\n\n:host(.icon-heart):before {\n  content: \"\"; }\n\n:host(.icon-logout):before {\n  content: \"\"; }\n\n:host(.icon-magnify-glass):before {\n  content: \"\"; }\n\n:host(.icon-media):before {\n  content: \"\"; }\n\n:host(.icon-menu):before {\n  content: \"\"; }\n\n:host(.icon-photos):before {\n  content: \"\"; }\n\n:host(.icon-pin):before {\n  content: \"\"; }\n\n:host(.icon-play):before {\n  content: \"\"; }\n\n:host(.icon-plus):before {\n  content: \"\"; }\n\n:host(.icon-remove-playlist):before {\n  content: \"\"; }\n\n:host(.icon-save-playlist):before {\n  content: \"\"; }\n\n:host(.icon-settings-v2):before {\n  content: \"\"; }\n\n:host(.icon-settings):before {\n  content: \"\"; }\n\n:host(.icon-share):before {\n  content: \"\"; }\n\n:host(.icon-speech):before {\n  content: \"\"; }\n\n:host(.icon-star):before {\n  content: \"\"; }\n\n:host(.icon-stats):before {\n  content: \"\"; }\n\n:host(.icon-status):before {\n  content: \"\"; }\n\n:host(.icon-sticker):before {\n  content: \"\"; }\n\n:host(.icon-thunder):before {\n  content: \"\"; }\n\n:host(.icon-weather):before {\n  content: \"\"; }\n\n:host(.icon-widget):before {\n  content: \"\"; }\n");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9pY29uL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiSWNvbiIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJfc3R5bGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0eWxlcyIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImljb25OYW1lIiwiZ2V0QXR0cmlidXRlIiwiSFRNTEVsZW1lbnQiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0lBR01BLEk7Ozs7O0FBQ0osa0JBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFDQSxVQUFLQyxZQUFMLENBQWtCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQWxCOztBQUVBLFVBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQSxVQUFLRixNQUFMLENBQVlHLFdBQVosR0FBMEJDLG1EQUExQjtBQUxZO0FBTWI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLFVBQUwsQ0FBZ0JDLFdBQWhCLENBQTRCLEtBQUtOLE1BQWpDO0FBQ0EsV0FBS08sU0FBTCxDQUFlQyxHQUFmLGdCQUEyQixLQUFLQyxRQUFoQztBQUVEOzs7d0JBRWM7QUFDYixhQUFPLEtBQUtDLFlBQUwsQ0FBa0IsTUFBbEIsS0FBNkIsSUFBcEM7QUFDRDs7OztpQ0FqQmdCQyxXOztBQW9CbkJDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsTUFBdEIsQ0FBNkIsU0FBN0IsRUFBd0NqQixJQUF4QyxFOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBZSxtRkFBb0IseURBQXlELDBIQUEwSCxpQkFBaUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIseUJBQXlCLG1CQUFtQixtRkFBbUYsdUNBQXVDLEVBQUUsdUJBQXVCLHlCQUF5QixFQUFFLCtCQUErQixtQkFBbUIsRUFBRSxrQ0FBa0MsbUJBQW1CLEVBQUUsc0NBQXNDLG1CQUFtQixFQUFFLGdDQUFnQyxtQkFBbUIsRUFBRSwrQkFBK0IsbUJBQW1CLEVBQUUsaUNBQWlDLG1CQUFtQixFQUFFLDhCQUE4QixtQkFBbUIsRUFBRSwwQ0FBMEMsbUJBQW1CLEVBQUUsc0NBQXNDLG1CQUFtQixFQUFFLHNDQUFzQyxtQkFBbUIsRUFBRSx3Q0FBd0MsbUJBQW1CLEVBQUUsa0NBQWtDLG1CQUFtQixFQUFFLGdDQUFnQyxtQkFBbUIsRUFBRSwrQkFBK0IsbUJBQW1CLEVBQUUsa0NBQWtDLG1CQUFtQixFQUFFLHNDQUFzQyxtQkFBbUIsRUFBRSxpQ0FBaUMsbUJBQW1CLEVBQUUsOEJBQThCLG1CQUFtQixFQUFFLCtCQUErQixtQkFBbUIsRUFBRSw4QkFBOEIsbUJBQW1CLEVBQUUsb0NBQW9DLG1CQUFtQixFQUFFLCtCQUErQixtQkFBbUIsRUFBRSxnQ0FBZ0MsbUJBQW1CLEVBQUUsdUNBQXVDLG1CQUFtQixFQUFFLCtCQUErQixtQkFBbUIsRUFBRSw4QkFBOEIsbUJBQW1CLEVBQUUsZ0NBQWdDLG1CQUFtQixFQUFFLDZCQUE2QixtQkFBbUIsRUFBRSw4QkFBOEIsbUJBQW1CLEVBQUUsOEJBQThCLG1CQUFtQixFQUFFLHlDQUF5QyxtQkFBbUIsRUFBRSx1Q0FBdUMsbUJBQW1CLEVBQUUscUNBQXFDLG1CQUFtQixFQUFFLGtDQUFrQyxtQkFBbUIsRUFBRSwrQkFBK0IsbUJBQW1CLEVBQUUsZ0NBQWdDLG1CQUFtQixFQUFFLDhCQUE4QixtQkFBbUIsRUFBRSwrQkFBK0IsbUJBQW1CLEVBQUUsZ0NBQWdDLG1CQUFtQixFQUFFLGlDQUFpQyxtQkFBbUIsRUFBRSxpQ0FBaUMsbUJBQW1CLEVBQUUsaUNBQWlDLG1CQUFtQixFQUFFLGdDQUFnQyxtQkFBbUIsRUFBRSxHQUFHLEUiLCJmaWxlIjoiLi9wYWNrYWdlcy9pY29uL2Rpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhY2thZ2VzL2ljb24vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuc2NzcydcblxuXG5jbGFzcyBJY29uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSlcblxuICAgIHRoaXMuX3N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHRoaXMuX3N0eWxlLnRleHRDb250ZW50ID0gc3R5bGVzXG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5fc3R5bGUpXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGBpY29uLSR7dGhpcy5pY29uTmFtZX1gKVxuXG4gIH1cblxuICBnZXQgaWNvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgbnVsbFxuICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VpLWljb24nLCBJY29uKSIsImV4cG9ydCBkZWZhdWx0IFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG46aG9zdChbY2xhc3NePVxcXCJpY29uLVxcXCJdKSxcXG46aG9zdChbY2xhc3MqPVxcXCJpY29uLVxcXCJdKSB7XFxuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xcbiAgZm9udC1mYW1pbHk6ICd1aS1pY29uJyAhaW1wb3J0YW50O1xcbiAgc3BlYWs6IG5ldmVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyB9XFxuXFxuOmhvc3QoW25vLWV2ZW50XSkge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cXG46aG9zdCguaWNvbi1sb2dpbik6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupIBcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tcmVnaXN0ZXIpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSBXFxcIjsgfVxcblxcbjpob3N0KDpob3N0KC5pY29uLWNoZWNrKSk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupIJcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tYWxidW1zKTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6kg1xcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1iYWRnZSk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupIRcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tYmxvY2tlZCk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupIVcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tYmxvZyk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupIZcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tY2FsZW5kYXItY2hlY2tlZCk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupIdcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tY2FsZW5kYXItZGF5KTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6kiFxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1jYWxlbmRhci1lZWspOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSJXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLWNhbGVuZGFyLW1vbnRoKTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6kilxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1jYWxlbmRhcik6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupItcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tY2FtZXJhKTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6kjFxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1jbG9zZSk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupI1cXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tY29tcHV0ZXIpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSOXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLWNvbnZlcnNhdGlvbik6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupI9cXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tY3VwY2FrZSk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupJBcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tZmFjZSk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupKpcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tZmFjZXMpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSRXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLWZlZWQpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSSXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLWhlYWRwaG9uZXMpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSTXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLWhlYXJ0KTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6klFxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1sb2dvdXQpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSVXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLW1hZ25pZnktZ2xhc3MpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSWXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLW1lZGlhKTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6kl1xcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1tZW51KTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6kmFxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1waG90b3MpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSZXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLXBpbik6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupJpcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tcGxheSk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupJtcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tcGx1cyk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupJxcXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tcmVtb3ZlLXBsYXlsaXN0KTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6knVxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1zYXZlLXBsYXlsaXN0KTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6knlxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1zZXR0aW5ncy12Mik6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupJ9cXFwiOyB9XFxuXFxuOmhvc3QoLmljb24tc2V0dGluZ3MpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSgXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLXNoYXJlKTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6koVxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1zcGVlY2gpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSiXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLXN0YXIpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSjXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLXN0YXRzKTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu6kpFxcXCI7IH1cXG5cXG46aG9zdCguaWNvbi1zdGF0dXMpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSlXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLXN0aWNrZXIpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSmXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLXRodW5kZXIpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSnXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLXdlYXRoZXIpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi7qSoXFxcIjsgfVxcblxcbjpob3N0KC5pY29uLXdpZGdldCk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLupKlcXFwiOyB9XFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==