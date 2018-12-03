(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Old__ = __webpack_require__(2);


function plugin(Vue, values) {
  // Exit if the plugin has already been installed.
  if (plugin.installed) return; // Extend `Vue.prototype` to include our global event bus.

  Object.defineProperty(Vue.prototype, '$old', {
    get: function get() {
      return new __WEBPACK_IMPORTED_MODULE_0__Old__["a" /* default */](values);
    },
    configurable: true
  });
} // Check for `window.Vue`


if (typeof window !== 'undefined' && window.Vue) {
  // Install plugin automatically.
  window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Old =
/*#__PURE__*/
function () {
  /**
   * Create a new Old instance.
   */
  function Old() {
    var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Old);

    this.record(values);
  }
  /**
   * Get all the values.
   *
   * @return {object}
   */


  _createClass(Old, [{
    key: "all",
    value: function all() {
      return this.values;
    }
    /**
     * Determine if any values exists for the given field or object.
     *
     * @param {string} field
     */

  }, {
    key: "has",
    value: function has(field) {
      var hasValue = this.values.hasOwnProperty(field);

      if (!hasValue) {
        var values = Object.keys(this.values).filter(function (v) {
          return v.startsWith("".concat(field, ".")) || v.startsWith("".concat(field, "["));
        });
        hasValue = values.length > 0;
      }

      return hasValue;
    }
  }, {
    key: "first",
    value: function first(field) {
      return this.get(field)[0];
    }
  }, {
    key: "get",
    value: function get(field, fallback) {
      return this.values[field] || fallback;
    }
    /**
     * Determine if we have any values.
     */

  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.values).length > 0;
    }
    /**
     * Record the new old values.
     *
     * @param {object} values
     */

  }, {
    key: "record",
    value: function record() {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.values = values;
    }
    /**
     * Clear a specific field, object or all value fields.
     *
     * @param {string|null} field
     */

  }, {
    key: "clear",
    value: function clear(field) {
      if (!field) {
        this.values = {};
        return;
      }

      var values = Object.assign({}, this.values);
      Object.keys(values).filter(function (v) {
        return v === field || v.startsWith("".concat(field, ".")) || v.startsWith("".concat(field, "["));
      }).forEach(function (v) {
        return delete values[v];
      });
      this.values = values;
      Object.defineProperty(Vue.prototype, '$old', {
        get: function get() {
          return new Old(values);
        }
      });
    }
  }]);

  return Old;
}();

/* harmony default export */ __webpack_exports__["a"] = (Old);

/***/ })
/******/ ]);
});