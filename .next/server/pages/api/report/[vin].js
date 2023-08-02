module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/report/[vin].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase/initFirebase.js":
/*!**********************************!*\
  !*** ./firebase/initFirebase.js ***!
  \**********************************/
/*! exports provided: default, storage, database, ref, uploadString, refDB, setDB, getMetadata, getDownloadURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return firebase_storage__WEBPACK_IMPORTED_MODULE_1__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadString", function() { return firebase_storage__WEBPACK_IMPORTED_MODULE_1__["uploadString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return firebase_storage__WEBPACK_IMPORTED_MODULE_1__["getMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDownloadURL", function() { return firebase_storage__WEBPACK_IMPORTED_MODULE_1__["getDownloadURL"]; });

/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refDB", function() { return firebase_database__WEBPACK_IMPORTED_MODULE_2__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDB", function() { return firebase_database__WEBPACK_IMPORTED_MODULE_2__["set"]; });

/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");




const firebaseConfig = {
  apiKey: lib_constant__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_API_KEY"],
  authDomain: lib_constant__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_AUTH_DOMAIN"],
  projectId: lib_constant__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_PROJECT_ID"],
  storageBucket: lib_constant__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: lib_constant__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_MESSAGING_SENDER_ID"],
  appId: lib_constant__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_ID"],
  measurementId: lib_constant__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_MEASUREMENT_ID"],
  databaseURL: lib_constant__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_DATABASE_URL"]
};
let app;

try {
  app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["getApp"])();
} catch (e) {
  app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"])(firebaseConfig);
} // Get a reference to the storage service


const storage = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_1__["getStorage"])(app); // Get a reference to the analytics service
// const analytics = getAnalytics(app);
// Get a reference to the database service

const database = Object(firebase_database__WEBPACK_IMPORTED_MODULE_2__["getDatabase"])(app); // export



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

/***/ "./src/pages/api/report/[vin].js":
/*!***************************************!*\
  !*** ./src/pages/api/report/[vin].js ***!
  \***************************************/
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
/* harmony import */ var _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../firebase/initFirebase */ "./firebase/initFirebase.js");






const handler = next_connect__WEBPACK_IMPORTED_MODULE_4___default()() // use connect based middleware
.use(cors__WEBPACK_IMPORTED_MODULE_3___default()()).get(async (req, res) => {
  const {
    query: {
      vin
    }
  } = req;

  try {
    if (vin) {
      // Create a reference to the file whose metadata we want to retrieve
      const report = Object(_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_5__["ref"])(_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_5__["storage"], vin); // Get metadata properties

      Object(_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_5__["getDownloadURL"])(report).then(async url => {
        const {
          data: content
        } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url); // Metadata now contains the metadata for vin

        res.status(200).json({
          success: true,
          content
        });
      }).catch(err => {
        res.status(404).json({
          success: false,
          message: `VIN: ${vin} not found.`
        });
      });
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

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvaW5pdEZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9yZXBvcnQvW3Zpbl0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZGF0YWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2ZpbmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZ2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJGSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIkZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiRklSRUJBU0VfQVBQX0lEIiwibWVhc3VyZW1lbnRJZCIsIkZJUkVCQVNFX01FQVNVUkVNRU5UX0lEIiwiZGF0YWJhc2VVUkwiLCJGSVJFQkFTRV9EQVRBQkFTRV9VUkwiLCJhcHAiLCJnZXRBcHAiLCJlIiwiaW5pdGlhbGl6ZUFwcCIsInN0b3JhZ2UiLCJnZXRTdG9yYWdlIiwiZGF0YWJhc2UiLCJnZXREYXRhYmFzZSIsIlBBWVBBTF9DTElFTlRJRCIsIkFQSVVSTCIsIlVSTFdFQiIsIk5BTUUiLCJCQVNFX1BSSUNFIiwiUFJJQ0UiLCJFTUFJTCIsIk1PVFRPIiwiQ09MT1JfUFJJTUFSWSIsIkNPTE9SX1NFQ09OREFSWSIsIkNPTE9SX0JBQ0tHUk9VTkRfUFJJTUFSWSIsIlNBTVBMRV9SRVBPUlQiLCJDUklTUElEIiwiQk9UX1RPS0VOIiwiQ0xJRU5UX0lEX0dPT0dMRSIsIkNMSUVOVF9TRUNSRVRfR09PR0xFIiwiUkVGUkVTSF9UT0tFTl9HT09HTEUiLCJUT0tFTl9HT09HTEUiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwiQVBJX0tFWV9DQVJGQVhfUFJPIiwiaGFuZGxlciIsIm5jIiwidXNlIiwiY29ycyIsImdldCIsInJlcSIsInJlcyIsInF1ZXJ5IiwidmluIiwicmVwb3J0IiwicmVmIiwiZ2V0RG93bmxvYWRVUkwiLCJ0aGVuIiwidXJsIiwiZGF0YSIsImNvbnRlbnQiLCJheGlvcyIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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RUFBWTtBQUNaZixPQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkcsYUFBTyxFQUFHLFFBQU9kLEdBQUk7QUFBdkMsS0FBckI7QUFDRDtBQUNGLENBekJELENBREY7QUE0QmVSLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkNBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2FwaS9yZXBvcnQvW3Zpbl0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9hcGkvcmVwb3J0L1t2aW5dLmpzXCIpO1xuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgdXBsb2FkU3RyaW5nLCBnZXRNZXRhZGF0YSwgZ2V0RG93bmxvYWRVUkwgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYgYXMgcmVmREIsIHNldCBhcyBzZXREQiB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuaW1wb3J0IHtcbiAgRklSRUJBU0VfQVBJX0tFWSxcbiAgRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIEZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIEZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICBGSVJFQkFTRV9BUFBfSUQsXG4gIEZJUkVCQVNFX01FQVNVUkVNRU5UX0lELFxuICBGSVJFQkFTRV9EQVRBQkFTRV9VUkxcbn0gZnJvbSAnbGliL2NvbnN0YW50JztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICBhcHBJZDogRklSRUJBU0VfQVBQX0lELFxuICBtZWFzdXJlbWVudElkOiBGSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCxcbiAgZGF0YWJhc2VVUkw6IEZJUkVCQVNFX0RBVEFCQVNFX1VSTFxufTtcblxubGV0IGFwcDtcbnRyeSB7XG4gIGFwcCA9IGdldEFwcCgpO1xufSBjYXRjaCAoZSkge1xuICBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn1cblxuLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBzdG9yYWdlIHNlcnZpY2VcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7XG5cbi8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHNlcnZpY2Vcbi8vIGNvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xuXG4vLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRhdGFiYXNlIHNlcnZpY2VcbmNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoYXBwKTtcblxuLy8gZXhwb3J0XG5leHBvcnQge1xuICBhcHAgYXMgZGVmYXVsdCwgXG4gIHN0b3JhZ2UsXG4gIGRhdGFiYXNlLFxuICByZWYsXG4gIHVwbG9hZFN0cmluZyxcbiAgcmVmREIsXG4gIHNldERCLFxuICBnZXRNZXRhZGF0YSxcbiAgZ2V0RG93bmxvYWRVUkxcbn07XG4iLCJleHBvcnQgY29uc3QgUEFZUEFMX0NMSUVOVElEID0gJ0FWTDhOODltX0dyMUlQZHRsU0FsbzVKWUpDZmJibDZ1a2tIS0IwTWVraHNhU19iY3YzMTRHLTJycjdySlRTY3daVHlWNE5qa1BYVnlaaFRSJztcbmV4cG9ydCBjb25zdCBBUElVUkwgPSAnL2FwaS8nO1xuZXhwb3J0IGNvbnN0IFVSTFdFQiA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJztcblxuLy8gUFJPSkVDVCBOQU1JTkdcbmV4cG9ydCBjb25zdCBOQU1FID0gJ1ZlaGljbGUgUGFwZXIgUHJlbWl1bSc7XG5cbi8vIFBSSUNJTkdcbmV4cG9ydCBjb25zdCBCQVNFX1BSSUNFID0gJzM5Ljk5JztcblxuZXhwb3J0IGNvbnN0IFBSSUNFID0gMDtcblxuLy8gRU1BSUxcbmV4cG9ydCBjb25zdCBFTUFJTCA9ICd2ZWhpY2xlcGFwZXJwcmVtaXVtQGdtYWlsLmNvbSc7XG5cbi8vIE1PVFRPXG5leHBvcnQgY29uc3QgTU9UVE8gPSAnT3JpZ2luYWwgYW5kIEFjdHVhbCBDYXJmYXggVmVoaWNsZSBIaXN0b3J5IFJlcG9ydHMnO1xuXG4vLyBDT0xPUlxuZXhwb3J0IGNvbnN0IENPTE9SX1BSSU1BUlkgPSAnIzE5NzZkMic7XG5leHBvcnQgY29uc3QgQ09MT1JfU0VDT05EQVJZID0gJyMyMDhCRDMnO1xuZXhwb3J0IGNvbnN0IENPTE9SX0JBQ0tHUk9VTkRfUFJJTUFSWSA9ICcjZjVmNmY3JztcblxuLy8gU0FNUExFIFJFUE9SVFxuZXhwb3J0IGNvbnN0IFNBTVBMRV9SRVBPUlQgPSAnS01ISFQ2S0RYRFUwOTc2MzUnO1xuXG4vLyBDUklTUCBJRFxuZXhwb3J0IGNvbnN0IENSSVNQSUQgPSAnNDExYjY4ZDktZDg3ZC00ZjJmLThkZTAtN2QwNjc4ZDVkMDM1JztcblxuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX0RBVEFCQVNFX1VSTCA9ICdodHRwczovL3ZlaGljbGVwYXBlcnByZW1pdW0tYTJiYzMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tLydcbmV4cG9ydCBjb25zdCBCT1RfVE9LRU4gPSAnMjEyNTUzNzkwMTpBQUVJSEVoM0p2STF2Tk01b2ZqLXVRc0VIMTNGWVVjQmN6TSdcbi8vIGV4cG9ydCBjb25zdCBQQVNTV09SRCA9ICdtYWthbmtlcnVwdWsnXG5leHBvcnQgY29uc3QgQ0xJRU5UX0lEX0dPT0dMRSA9ICcyNDEwNzkzNTMzODMtZDRjMWU0cWFkdGFpOGpiNW9pYjhhcjVxam5sMHBlOGwuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXG5leHBvcnQgY29uc3QgQ0xJRU5UX1NFQ1JFVF9HT09HTEUgPSAnR09DU1BYLUJNTHNwUjNhZ1lQQVZzNkdnQXFrTm5RY1lEMnUnXG5leHBvcnQgY29uc3QgUkVGUkVTSF9UT0tFTl9HT09HTEUgPSAnMS8vMDQ2OWU2YmoyR1dyTENnWUlBUkFBR0FRU053Ri1MOUlyRXl1WjB6dTVWWjViX3h6cWx1NnJsa09MZnVvUkt4TEExRHNIS1o5NlJIQk9rVktYVkVENlFjQ2VjMVBVdUNHYzBzWSdcbmV4cG9ydCBjb25zdCBUT0tFTl9HT09HTEUgPSAneWEyOS5hMEFWdlpWc3B3YWlSRHJHUGEyMzk4dHBIWnNzaDRZUGRZMDdNZkdmYUs0SHNqV2hEVkM5ZXdqMU9lV0JQMkRpYWgtVDc1LTlCQmRaS1N6OFdyWnpWd012LVBSQkcxUlZ1Mm9SRlVMNk1kNnNSWmNqeEZZYWpHbEJZX2FwOUxCMWZHNlI5b3Z4U3MyekFNdzVRSEJOSklQTmhpSjMyb2FDZ1lLQWRrU0FSRVNGUUdiZHdhSWdOc2hYcXZvZHBxZDFIaFprSUp4bGcwMTYzJ1xuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX0FQSV9LRVkgPSAnQUl6YVN5Q3BjaDl1NTFacHl1aUYycHE2T2VkRDJzQklJczBKQzlRJ1xuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX0FVVEhfRE9NQUlOID0gJ3ZlaGljbGVwYXBlcnByZW1pdW0tYTJiYzMuZmlyZWJhc2VhcHAuY29tJ1xuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX1BST0pFQ1RfSUQgPSAndmVoaWNsZXBhcGVycHJlbWl1bS1hMmJjMydcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCA9ICd2ZWhpY2xlcGFwZXJwcmVtaXVtLWEyYmMzLmFwcHNwb3QuY29tJ1xuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQgPSAnNjM3MjgyODUyNTA2J1xuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX0FQUF9JRCA9ICcxOjYzNzI4Mjg1MjUwNjp3ZWI6OTkzNTkyYTZiM2RmOGZmNWVlODkyMydcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCA9ICdHLUs1WjNQTkNLR1AnXG5leHBvcnQgY29uc3QgTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyA9ICdHLUs1WjNQTkNLR1AnXG5leHBvcnQgY29uc3QgQVBJX0tFWV9DQVJGQVhfUFJPID0gJ2NiMzUzZDM0MWFlYzUzN2M0OGEyNzQ5MjNmNjlkZDcyJ1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBfZmluZCBmcm9tICdsb2Rhc2gvZmluZCc7XG5pbXBvcnQgX2dldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0JztcbmltcG9ydCB7IHN0b3JhZ2UsIHJlZiwgZ2V0TWV0YWRhdGEsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlyZWJhc2UvaW5pdEZpcmViYXNlJztcblxuY29uc3QgaGFuZGxlciA9IFxuICBuYygpXG4gIC8vIHVzZSBjb25uZWN0IGJhc2VkIG1pZGRsZXdhcmVcbiAgLnVzZShjb3JzKCkpXG4gIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeTogeyB2aW4gfSB9ID0gcmVxO1xuICAgIHRyeSB7XG4gICAgICBpZiAodmluKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgZmlsZSB3aG9zZSBtZXRhZGF0YSB3ZSB3YW50IHRvIHJldHJpZXZlXG4gICAgICAgIGNvbnN0IHJlcG9ydCA9IHJlZihzdG9yYWdlLCB2aW4pO1xuICAgICAgICAvLyBHZXQgbWV0YWRhdGEgcHJvcGVydGllc1xuICAgICAgICBnZXREb3dubG9hZFVSTChyZXBvcnQpXG4gICAgICAgICAgLnRoZW4oYXN5bmMgKHVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBjb250ZW50IH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICAgICAgICAgIC8vIE1ldGFkYXRhIG5vdyBjb250YWlucyB0aGUgbWV0YWRhdGEgZm9yIHZpblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBjb250ZW50IH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBWSU46ICR7dmlufSBub3QgZm91bmQuYCB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgVklOOiAke3Zpbn0gbm90IGZvdW5kLmAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgVklOOiAke3Zpbn0gbm90IGZvdW5kLmAgfSk7XG4gICAgfVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9kYXRhYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9maW5kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9nZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=