module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@redq/reuse-modal/es/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/@redq/reuse-modal/es/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.css":
/*!***********************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/assets/css/flaticon.css":
/*!********************************************!*\
  !*** ./src/common/assets/css/flaticon.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/assets/css/icon-example-page.css":
/*!*****************************************************!*\
  !*** ./src/common/assets/css/icon-example-page.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/lib/constant.js":
/*!*****************************!*\
  !*** ./src/lib/constant.js ***!
  \*****************************/
/*! exports provided: PAYPAL_CLIENTID, APIURL, URLWEB, NAME, BASE_PRICE, PRICE, EMAIL, MOTTO, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND_PRIMARY, SAMPLE_REPORT, CRISPID, FIREBASE_DATABASE_URL, BOT_TOKEN, CLIENT_ID_GOOGLE, CLIENT_SECRET_GOOGLE, REFRESH_TOKEN_GOOGLE, TOKEN_GOOGLE, FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID, NEXT_PUBLIC_GOOGLE_ANALYTICS, API_KEY_CARFAX_PRO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYPAL_CLIENTID", function() { return PAYPAL_CLIENTID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIURL", function() { return APIURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLWEB", function() { return URLWEB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PRICE", function() { return BASE_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE", function() { return PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL", function() { return EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOTTO", function() { return MOTTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_PRIMARY", function() { return COLOR_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_SECONDARY", function() { return COLOR_SECONDARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BACKGROUND_PRIMARY", function() { return COLOR_BACKGROUND_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_REPORT", function() { return SAMPLE_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRISPID", function() { return CRISPID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_DATABASE_URL", function() { return FIREBASE_DATABASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOT_TOKEN", function() { return BOT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_ID_GOOGLE", function() { return CLIENT_ID_GOOGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_SECRET_GOOGLE", function() { return CLIENT_SECRET_GOOGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN_GOOGLE", function() { return REFRESH_TOKEN_GOOGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_GOOGLE", function() { return TOKEN_GOOGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_API_KEY", function() { return FIREBASE_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_AUTH_DOMAIN", function() { return FIREBASE_AUTH_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_PROJECT_ID", function() { return FIREBASE_PROJECT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_STORAGE_BUCKET", function() { return FIREBASE_STORAGE_BUCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_MESSAGING_SENDER_ID", function() { return FIREBASE_MESSAGING_SENDER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_APP_ID", function() { return FIREBASE_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_MEASUREMENT_ID", function() { return FIREBASE_MEASUREMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_PUBLIC_GOOGLE_ANALYTICS", function() { return NEXT_PUBLIC_GOOGLE_ANALYTICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY_CARFAX_PRO", function() { return API_KEY_CARFAX_PRO; });
const PAYPAL_CLIENTID = 'AVL8N89m_Gr1IPdtlSAlo5JYJCfbbl6ukkHKB0MekhsaS_bcv314G-2rr7rJTScwZTyV4NjkPXVyZhTR';
const APIURL = '/api/';
const URLWEB = 'http://localhost:3000/'; // PROJECT NAMING

const NAME = 'Vehicle Paper Premium'; // PRICING

const BASE_PRICE = '39.99';
const PRICE = 0; // EMAIL

const EMAIL = 'vehiclepaperpremium@gmail.com'; // MOTTO

const MOTTO = 'Original and Actual Carfax Vehicle History Reports'; // COLOR

const COLOR_PRIMARY = '#1976d2';
const COLOR_SECONDARY = '#208BD3';
const COLOR_BACKGROUND_PRIMARY = '#f5f6f7'; // SAMPLE REPORT

const SAMPLE_REPORT = 'KMHHT6KDXDU097635'; // CRISP ID

const CRISPID = '411b68d9-d87d-4f2f-8de0-7d0678d5d035';
const FIREBASE_DATABASE_URL = 'https://vehiclepaperpremium-a2bc3-default-rtdb.firebaseio.com/';
const BOT_TOKEN = '2125537901:AAEIHEh3JvI1vNM5ofj-uQsEH13FYUcBczM'; // export const PASSWORD = 'makankerupuk'

const CLIENT_ID_GOOGLE = '241079353383-d4c1e4qadtai8jb5oib8ar5qjnl0pe8l.apps.googleusercontent.com';
const CLIENT_SECRET_GOOGLE = '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';
const REFRESH_TOKEN_GOOGLE = '1//0469e6bj2GWrLCgYIARAAGAQSNwF-L9IrEyuZ0zu5VZ5b_xzqlu6rlkOLfuoRKxLA1DsHKZ96RHBOkVKXVED6QcCec1PUuCGc0sY';
const TOKEN_GOOGLE = 'ya29.a0AVvZVspwaiRDrGPa2398tpHZssh4YPdY07MfGfaK4HsjWhDVC9ewj1OeWBP2Diah-T75-9BBdZKSz8WrZzVwMv-PRBG1RVu2oRFUL6Md6sRZcjxFYajGlBY_ap9LB1fG6R9ovxSs2zAMw5QHBNJIPNhiJ32oaCgYKAdkSARESFQGbdwaIgNshXqvodpqd1HhZkIJxlg0163';
const FIREBASE_API_KEY = 'AIzaSyCpch9u51ZpyuiF2pq6OedD2sBIIs0JC9Q';
const FIREBASE_AUTH_DOMAIN = 'vehiclepaperpremium-a2bc3.firebaseapp.com';
const FIREBASE_PROJECT_ID = 'vehiclepaperpremium-a2bc3';
const FIREBASE_STORAGE_BUCKET = 'vehiclepaperpremium-a2bc3.appspot.com';
const FIREBASE_MESSAGING_SENDER_ID = '637282852506';
const FIREBASE_APP_ID = '1:637282852506:web:993592a6b3df8ff5ee8923';
const FIREBASE_MEASUREMENT_ID = 'G-K5Z3PNCKGP';
const NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-K5Z3PNCKGP';
const API_KEY_CARFAX_PRO = 'cb353d341aec537c48a274923f69dd72';

/***/ }),

/***/ "./src/lib/ga.js":
/*!***********************!*\
  !*** ./src/lib/ga.js ***!
  \***********************/
/*! exports provided: pageview, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");
 // log the pageview with their URL

const pageview = url => {
  window.gtag('config', lib_constant__WEBPACK_IMPORTED_MODULE_0__["NEXT_PUBLIC_GOOGLE_ANALYTICS"], {
    page_path: url
  });
}; // log specific events happening.

const event = ({
  action,
  params
}) => {
  window.gtag('event', action, params);
};

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/ga */ "./src/lib/ga.js");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redq/reuse-modal/es/index.css */ "./node_modules/@redq/reuse-modal/es/index.css");
/* harmony import */ var _redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/assets/css/flaticon.css */ "./src/common/assets/css/flaticon.css");
/* harmony import */ var common_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(common_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var common_assets_css_icon_example_page_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/assets/css/icon-example-page.css */ "./src/common/assets/css/icon-example-page.css");
/* harmony import */ var common_assets_css_icon_example_page_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(common_assets_css_icon_example_page_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function CustomApp({
  Component,
  pageProps
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const handleRouteChange = url => {
      _lib_ga__WEBPACK_IMPORTED_MODULE_3__["pageview"](url);
    }; //When the component is mounted, subscribe to router changes
    //and log those page views


    router.events.on('routeChangeComplete', handleRouteChange); // If the component is unmounted, unsubscribe
    // from the event with the `off` method

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2dhLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWRxL3JldXNlLW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBBWVBBTF9DTElFTlRJRCIsIkFQSVVSTCIsIlVSTFdFQiIsIk5BTUUiLCJCQVNFX1BSSUNFIiwiUFJJQ0UiLCJFTUFJTCIsIk1PVFRPIiwiQ09MT1JfUFJJTUFSWSIsIkNPTE9SX1NFQ09OREFSWSIsIkNPTE9SX0JBQ0tHUk9VTkRfUFJJTUFSWSIsIlNBTVBMRV9SRVBPUlQiLCJDUklTUElEIiwiRklSRUJBU0VfREFUQUJBU0VfVVJMIiwiQk9UX1RPS0VOIiwiQ0xJRU5UX0lEX0dPT0dMRSIsIkNMSUVOVF9TRUNSRVRfR09PR0xFIiwiUkVGUkVTSF9UT0tFTl9HT09HTEUiLCJUT0tFTl9HT09HTEUiLCJGSVJFQkFTRV9BUElfS0VZIiwiRklSRUJBU0VfQVVUSF9ET01BSU4iLCJGSVJFQkFTRV9QUk9KRUNUX0lEIiwiRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiRklSRUJBU0VfQVBQX0lEIiwiRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwiQVBJX0tFWV9DQVJGQVhfUFJPIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiLCJDdXN0b21BcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsImdhIiwiZXZlbnRzIiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsZUFBZSxHQUFHLGtGQUF4QjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxPQUFmO0FBQ0EsTUFB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YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNvbnN0IFBBWVBBTF9DTElFTlRJRCA9ICdBVkw4Tjg5bV9HcjFJUGR0bFNBbG81SllKQ2ZiYmw2dWtrSEtCME1la2hzYVNfYmN2MzE0Ry0ycnI3ckpUU2N3WlR5VjROamtQWFZ5WmhUUic7XG5leHBvcnQgY29uc3QgQVBJVVJMID0gJy9hcGkvJztcbmV4cG9ydCBjb25zdCBVUkxXRUIgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XG5cbi8vIFBST0pFQ1QgTkFNSU5HXG5leHBvcnQgY29uc3QgTkFNRSA9ICdWZWhpY2xlIFBhcGVyIFByZW1pdW0nO1xuXG4vLyBQUklDSU5HXG5leHBvcnQgY29uc3QgQkFTRV9QUklDRSA9ICczOS45OSc7XG5cbmV4cG9ydCBjb25zdCBQUklDRSA9IDA7XG5cbi8vIEVNQUlMXG5leHBvcnQgY29uc3QgRU1BSUwgPSAndmVoaWNsZXBhcGVycHJlbWl1bUBnbWFpbC5jb20nO1xuXG4vLyBNT1RUT1xuZXhwb3J0IGNvbnN0IE1PVFRPID0gJ09yaWdpbmFsIGFuZCBBY3R1YWwgQ2FyZmF4IFZlaGljbGUgSGlzdG9yeSBSZXBvcnRzJztcblxuLy8gQ09MT1JcbmV4cG9ydCBjb25zdCBDT0xPUl9QUklNQVJZID0gJyMxOTc2ZDInO1xuZXhwb3J0IGNvbnN0IENPTE9SX1NFQ09OREFSWSA9ICcjMjA4QkQzJztcbmV4cG9ydCBjb25zdCBDT0xPUl9CQUNLR1JPVU5EX1BSSU1BUlkgPSAnI2Y1ZjZmNyc7XG5cbi8vIFNBTVBMRSBSRVBPUlRcbmV4cG9ydCBjb25zdCBTQU1QTEVfUkVQT1JUID0gJ0tNSEhUNktEWERVMDk3NjM1JztcblxuLy8gQ1JJU1AgSURcbmV4cG9ydCBjb25zdCBDUklTUElEID0gJzQxMWI2OGQ5LWQ4N2QtNGYyZi04ZGUwLTdkMDY3OGQ1ZDAzNSc7XG5cbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9EQVRBQkFTRV9VUkwgPSAnaHR0cHM6Ly92ZWhpY2xlcGFwZXJwcmVtaXVtLWEyYmMzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS8nXG5leHBvcnQgY29uc3QgQk9UX1RPS0VOID0gJzIxMjU1Mzc5MDE6QUFFSUhFaDNKdkkxdk5NNW9mai11UXNFSDEzRllVY0Jjek0nXG4vLyBleHBvcnQgY29uc3QgUEFTU1dPUkQgPSAnbWFrYW5rZXJ1cHVrJ1xuZXhwb3J0IGNvbnN0IENMSUVOVF9JRF9HT09HTEUgPSAnMjQxMDc5MzUzMzgzLWQ0YzFlNHFhZHRhaThqYjVvaWI4YXI1cWpubDBwZThsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TRUNSRVRfR09PR0xFID0gJ0dPQ1NQWC1CTUxzcFIzYWdZUEFWczZHZ0Fxa05uUWNZRDJ1J1xuZXhwb3J0IGNvbnN0IFJFRlJFU0hfVE9LRU5fR09PR0xFID0gJzEvLzA0NjllNmJqMkdXckxDZ1lJQVJBQUdBUVNOd0YtTDlJckV5dVowenU1Vlo1Yl94enFsdTZybGtPTGZ1b1JLeExBMURzSEtaOTZSSEJPa1ZLWFZFRDZRY0NlYzFQVXVDR2Mwc1knXG5leHBvcnQgY29uc3QgVE9LRU5fR09PR0xFID0gJ3lhMjkuYTBBVnZaVnNwd2FpUkRyR1BhMjM5OHRwSFpzc2g0WVBkWTA3TWZHZmFLNEhzaldoRFZDOWV3ajFPZVdCUDJEaWFoLVQ3NS05QkJkWktTejhXclp6VndNdi1QUkJHMVJWdTJvUkZVTDZNZDZzUlpjanhGWWFqR2xCWV9hcDlMQjFmRzZSOW92eFNzMnpBTXc1UUhCTkpJUE5oaUozMm9hQ2dZS0Fka1NBUkVTRlFHYmR3YUlnTnNoWHF2b2RwcWQxSGhaa0lKeGxnMDE2MydcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BUElfS0VZID0gJ0FJemFTeUNwY2g5dTUxWnB5dWlGMnBxNk9lZEQyc0JJSXMwSkM5USdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BVVRIX0RPTUFJTiA9ICd2ZWhpY2xlcGFwZXJwcmVtaXVtLWEyYmMzLmZpcmViYXNlYXBwLmNvbSdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9QUk9KRUNUX0lEID0gJ3ZlaGljbGVwYXBlcnByZW1pdW0tYTJiYzMnXG5leHBvcnQgY29uc3QgRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQgPSAndmVoaWNsZXBhcGVycHJlbWl1bS1hMmJjMy5hcHBzcG90LmNvbSdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEID0gJzYzNzI4Mjg1MjUwNidcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BUFBfSUQgPSAnMTo2MzcyODI4NTI1MDY6d2ViOjk5MzU5MmE2YjNkZjhmZjVlZTg5MjMnXG5leHBvcnQgY29uc3QgRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQgPSAnRy1LNVozUE5DS0dQJ1xuZXhwb3J0IGNvbnN0IE5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MgPSAnRy1LNVozUE5DS0dQJ1xuZXhwb3J0IGNvbnN0IEFQSV9LRVlfQ0FSRkFYX1BSTyA9ICdjYjM1M2QzNDFhZWM1MzdjNDhhMjc0OTIzZjY5ZGQ3MidcbiIsImltcG9ydCB7IE5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MgfSBmcm9tICdsaWIvY29uc3RhbnQnO1xuLy8gbG9nIHRoZSBwYWdldmlldyB3aXRoIHRoZWlyIFVSTFxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xuICB3aW5kb3cuZ3RhZygnY29uZmlnJywgTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUywge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KVxufVxuXG4vLyBsb2cgc3BlY2lmaWMgZXZlbnRzIGhhcHBlbmluZy5cbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgcGFyYW1zIH0pID0+IHtcbiAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCBwYXJhbXMpXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0ICogYXMgZ2EgZnJvbSAnLi4vbGliL2dhJ1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XG5pbXBvcnQgJ0ByZWRxL3JldXNlLW1vZGFsL2VzL2luZGV4LmNzcyc7XG5pbXBvcnQgJ2NvbW1vbi9hc3NldHMvY3NzL2ZsYXRpY29uLmNzcyc7XG5pbXBvcnQgJ3N3aXBlci9zd2lwZXItYnVuZGxlLmNzcyc7XG5pbXBvcnQgJ2NvbW1vbi9hc3NldHMvY3NzL2ljb24tZXhhbXBsZS1wYWdlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgZ2EucGFnZXZpZXcodXJsKVxuICAgIH1cbiAgICAvL1doZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLCBzdWJzY3JpYmUgdG8gcm91dGVyIGNoYW5nZXNcbiAgICAvL2FuZCBsb2cgdGhvc2UgcGFnZSB2aWV3c1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcblxuICAgIC8vIElmIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkLCB1bnN1YnNjcmliZVxuICAgIC8vIGZyb20gdGhlIGV2ZW50IHdpdGggdGhlIGBvZmZgIG1ldGhvZFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIH1cbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHEvcmV1c2UtbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=