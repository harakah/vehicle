module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/preparation.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/preparation.js":
/*!**************************************!*\
  !*** ./src/pages/api/preparation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_4__);





const handler = next_connect__WEBPACK_IMPORTED_MODULE_4___default()() // use connect based middleware
.use(cors__WEBPACK_IMPORTED_MODULE_3___default()()).get(async (req, res) => {
  const {
    query: {
      vin
    }
  } = req;

  try {
    if (vin) {
      // https://api.carfax.pro
      const {
        data: {
          carfax
        }
      } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.carfax.pro/wp-json/v1/get_report_check/${vin}`);

      if (carfax.Records) {
        const firstWord = carfax.Vehicle.replace(/ .*/, '');
        const response = {
          records: carfax.Records,
          vehicle: carfax.Vehicle,
          mark: firstWord,
          year: carfax.Year,
          vin: carfax.VIN,
          body: carfax.Body
        };
        res.status(200).json({
          success: true,
          data: response
        });
      } else {
        res.status(404).json({
          success: false,
          message: `VIN: ${vin} not found.`
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: `VIN: ${vin} not found.`
      });
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: `VIN: ${vin} not found.`
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "lodash/find":
/*!******************************!*\
  !*** external "lodash/find" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9wcmVwYXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZmluZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwibmMiLCJ1c2UiLCJjb3JzIiwiZ2V0IiwicmVxIiwicmVzIiwicXVlcnkiLCJ2aW4iLCJkYXRhIiwiY2FyZmF4IiwiYXhpb3MiLCJSZWNvcmRzIiwiZmlyc3RXb3JkIiwiVmVoaWNsZSIsInJlcGxhY2UiLCJyZXNwb25zZSIsInJlY29yZHMiLCJ2ZWhpY2xlIiwibWFyayIsInllYXIiLCJZZWFyIiwiVklOIiwiYm9keSIsIkJvZHkiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQ1hDLG1EQUFFLEdBQ0Y7QUFERSxDQUVEQyxHQUZELENBRUtDLDJDQUFJLEVBRlQsRUFHQ0MsR0FIRCxDQUdLLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUN2QixRQUFNO0FBQUVDLFNBQUssRUFBRTtBQUFFQztBQUFGO0FBQVQsTUFBcUJILEdBQTNCOztBQUNBLE1BQUk7QUFDRixRQUFJRyxHQUFKLEVBQVM7QUFDUDtBQUNBLFlBQU07QUFBRUMsWUFBSSxFQUFFO0FBQUVDO0FBQUY7QUFBUixVQUF1QixNQUFNQyw0Q0FBSyxDQUFDUCxHQUFOLENBQVcsc0RBQXFESSxHQUFJLEVBQXBFLENBQW5DOztBQUNBLFVBQUlFLE1BQU0sQ0FBQ0UsT0FBWCxFQUFvQjtBQUNsQixjQUFNQyxTQUFTLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxPQUFmLENBQXVCLEtBQXZCLEVBQTZCLEVBQTdCLENBQWxCO0FBQ0EsY0FBTUMsUUFBUSxHQUFHO0FBQ2ZDLGlCQUFPLEVBQUVQLE1BQU0sQ0FBQ0UsT0FERDtBQUVmTSxpQkFBTyxFQUFFUixNQUFNLENBQUNJLE9BRkQ7QUFHZkssY0FBSSxFQUFFTixTQUhTO0FBSWZPLGNBQUksRUFBRVYsTUFBTSxDQUFDVyxJQUpFO0FBS2ZiLGFBQUcsRUFBRUUsTUFBTSxDQUFDWSxHQUxHO0FBTWZDLGNBQUksRUFBRWIsTUFBTSxDQUFDYztBQU5FLFNBQWpCO0FBUUFsQixXQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCbEIsY0FBSSxFQUFFTztBQUF2QixTQUFyQjtBQUNELE9BWEQsTUFXTztBQUNMVixXQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxLQUFYO0FBQWtCQyxpQkFBTyxFQUFHLFFBQU9wQixHQUFJO0FBQXZDLFNBQXJCO0FBQ0Q7QUFDRixLQWpCRCxNQWlCTztBQUNMRixTQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFLEtBQVg7QUFBa0JDLGVBQU8sRUFBRyxRQUFPcEIsR0FBSTtBQUF2QyxPQUFyQjtBQUNEO0FBQ0YsR0FyQkQsQ0FxQkUsT0FBT3FCLEdBQVAsRUFBWTtBQUNadkIsT0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxhQUFPLEVBQUcsUUFBT3BCLEdBQUk7QUFBdkMsS0FBckI7QUFDRDtBQUNGLENBN0JELENBREY7QUFnQ2VSLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDdENBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2FwaS9wcmVwYXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2FwaS9wcmVwYXJhdGlvbi5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgX2ZpbmQgZnJvbSAnbG9kYXNoL2ZpbmQnO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcblxuY29uc3QgaGFuZGxlciA9IFxuICBuYygpXG4gIC8vIHVzZSBjb25uZWN0IGJhc2VkIG1pZGRsZXdhcmVcbiAgLnVzZShjb3JzKCkpXG4gIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeTogeyB2aW4gfSB9ID0gcmVxO1xuICAgIHRyeSB7XG4gICAgICBpZiAodmluKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vYXBpLmNhcmZheC5wcm9cbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IGNhcmZheCB9IH0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmNhcmZheC5wcm8vd3AtanNvbi92MS9nZXRfcmVwb3J0X2NoZWNrLyR7dmlufWApO1xuICAgICAgICBpZiAoY2FyZmF4LlJlY29yZHMpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFdvcmQgPSBjYXJmYXguVmVoaWNsZS5yZXBsYWNlKC8gLiovLCcnKTtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICAgIHJlY29yZHM6IGNhcmZheC5SZWNvcmRzLFxuICAgICAgICAgICAgdmVoaWNsZTogY2FyZmF4LlZlaGljbGUsXG4gICAgICAgICAgICBtYXJrOiBmaXJzdFdvcmQsXG4gICAgICAgICAgICB5ZWFyOiBjYXJmYXguWWVhcixcbiAgICAgICAgICAgIHZpbjogY2FyZmF4LlZJTixcbiAgICAgICAgICAgIGJvZHk6IGNhcmZheC5Cb2R5XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3BvbnNlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBWSU46ICR7dmlufSBub3QgZm91bmQuYCB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogYFZJTjogJHt2aW59IG5vdCBmb3VuZC5gIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogYFZJTjogJHt2aW59IG5vdCBmb3VuZC5gIH0pO1xuICAgIH1cbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZmluZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZ2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9