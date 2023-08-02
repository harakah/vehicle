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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/payment.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************!*\
  !*** (webpack)/path-to-regexp/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !true);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if ( true && as.startsWith('/')) {
        const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(cleanedAs, this.locale)), pages, rewrites, query, p => resolveDynamicRoute(p, pages), this.locales);
        resolvedAs = rewritesResult.asPath;

        if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
          // if this directly matches a page we need to update the href to
          // allow the correct page chunk to be loaded
          pathname = rewritesResult.resolvedHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      } else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if ( true && asPath.startsWith('/')) {
      let rewrites;
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
      const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, p => resolveDynamicRoute(p, pages), this.locales);
      resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

      if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
        // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        pathname = rewritesResult.resolvedHref;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    } else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;
exports.getSafeParamName = void 0;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // ensure only a-zA-Z are used for param names for proper interpolating
// with path-to-regexp


const getSafeParamName = paramName => {
  let newParamName = '';

  for (let i = 0; i < paramName.length; i++) {
    const charCode = paramName.charCodeAt(i);

    if (charCode > 64 && charCode < 91 || // A-Z
    charCode > 96 && charCode < 123 // a-z
    ) {
        newParamName += paramName[i];
      }
  }

  return newParamName;
};

exports.getSafeParamName = getSafeParamName;

function matchHas(req, has, query) {
  const params = {};
  const allMatch = has.every(hasItem => {
    let value;
    let key = hasItem.key;

    switch (hasItem.type) {
      case 'header':
        {
          key = key.toLowerCase();
          value = req.headers[key];
          break;
        }

      case 'cookie':
        {
          value = req.cookies[hasItem.key];
          break;
        }

      case 'query':
        {
          value = query[key];
          break;
        }

      case 'host':
        {
          const {
            host
          } = (req == null ? void 0 : req.headers) || {}; // remove port from host if present

          const hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
          value = hostname;
          break;
        }

      default:
        {
          break;
        }
    }

    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      const matcher = new RegExp(`^${hasItem.value}$`);
      const matches = value.match(matcher);

      if (matches) {
        if (matches.groups) {
          Object.keys(matches.groups).forEach(groupKey => {
            params[groupKey] = matches.groups[groupKey];
          });
        } else if (hasItem.type === 'host' && matches[0]) {
          params.host = matches[0];
        }

        return true;
      }
    }

    return false;
  });

  if (allMatch) {
    return params;
  }

  return false;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireWildcard(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _router = __webpack_require__(/*! ../router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  let matchedPage = false;
  let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
  let fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(parsedAs.pathname), locales).pathname);
  let resolvedHref;

  const handleRewrite = rewrite => {
    const matcher = customRouteMatcher(rewrite.source);
    let params = matcher(parsedAs.pathname);

    if (rewrite.has && params) {
      const hasParams = (0, _prepareDestination.matchHas)({
        headers: {
          host: document.location.hostname
        },
        cookies: document.cookie.split('; ').reduce((acc, item) => {
          const [key, ...value] = item.split('=');
          acc[key] = value.join('=');
          return acc;
        }, {})
      }, rewrite.has, parsedAs.query);

      if (hasParams) {
        Object.assign(params, hasParams);
      } else {
        params = false;
      }
    }

    if (params) {
      if (!rewrite.destination) {
        // this is a proxied rewrite which isn't handled on the client
        return true;
      }

      const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
      parsedAs = destRes.parsedDestination;
      asPath = destRes.newUrl;
      Object.assign(query, destRes.parsedDestination.query);
      fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(asPath), locales).pathname);

      if (pages.includes(fsPathname)) {
        // check if we now match a page as this means we are done
        // resolving the rewrites
        matchedPage = true;
        resolvedHref = fsPathname;
        return true;
      } // check if we match a dynamic-route, if so we break the rewrites chain


      resolvedHref = resolveHref(fsPathname);

      if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
        matchedPage = true;
        return true;
      }
    }
  };

  let finished = false;

  for (let i = 0; i < rewrites.beforeFiles.length; i++) {
    // we don't end after match in beforeFiles to allow
    // continuing through all beforeFiles rewrites
    handleRewrite(rewrites.beforeFiles[i]);
  }

  matchedPage = pages.includes(fsPathname);

  if (!matchedPage) {
    if (!finished) {
      for (let i = 0; i < rewrites.afterFiles.length; i++) {
        if (handleRewrite(rewrites.afterFiles[i])) {
          finished = true;
          break;
        }
      }
    } // check dynamic route before processing fallback rewrites


    if (!finished) {
      resolvedHref = resolveHref(fsPathname);
      matchedPage = pages.includes(resolvedHref);
      finished = matchedPage;
    }

    if (!finished) {
      for (let i = 0; i < rewrites.fallback.length; i++) {
        if (handleRewrite(rewrites.fallback[i])) {
          finished = true;
          break;
        }
      }
    }
  }

  return {
    asPath,
    parsedAs,
    matchedPage,
    resolvedHref
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/common/assets/css/style.js":
/*!****************************************!*\
  !*** ./src/common/assets/css/style.js ***!
  \****************************************/
/*! exports provided: ResetCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCSS", function() { return ResetCSS; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(["::selection{background:#333333;color:#ffffff;}html{box-sizing:border-box;-ms-overflow-style:scrollbar;}*,*::before,*::after{box-sizing:inherit;}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}*:focus{outline:none;}html,html a,h1,h2,h3,h4,h5,h6,a,p,li,dl,th,dt,input,textarea,span,div{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-shadow:1px 1px 1px rgba(0,0,0,0.004);}body{margin:0;padding:0;overflow-x:hidden;-webkit-tap-highlight-color:transparent;}ul{margin:0;padding:0;}li{list-style-type:none;}a{text-decoration:none;}a:hover{text-decoration:none;}button.modalCloseBtn{color:", " !important;&.alt{background-color:", " !important;box-shadow:0 8px 38px rgba(16,172,132,0.5) !important;}}.reuseModalHolder{border:0 !important;background-color:transparent !important;&.search-modal,&.video-modal{background-color:rgba(255,255,255,0.96) !important;overflow-y:auto !important;.innerRndComponent{display:flex !important;align-items:center !important;justify-content:center !important;iframe{max-width:700px !important;max-height:380px !important;width:100% !important;height:100% !important;border-radius:5px !important;}}}&.demo_switcher_modal{border:0 !important;background-color:rgba(16,30,77,0.8) !important;.innerRndComponent{border-radius:8px !important;}}&.video-modal{background-color:transparent !important;}.innerRndComponent{padding-right:0 !important;}}.reuseModalCloseBtn{cursor:pointer !important;}.reuseModalOverlay,.reuseModalParentWrapper{z-index:99999!important;}.reuseModalHolder{padding:0 !important;&.demo_switcher_modal{border:0 !important;background-color:rgba(16,30,77,0.9) !important;.innerRndComponent{border-radius:8px !important;}}}button.modalCloseBtn{position:fixed !important;z-index:999991 !important;background-color:transparent !important;top:10px !important;right:10px !important;min-width:34px !important;min-height:34px !important;padding:0 !important;span.btn-icon{font-size:22px !important;transform:rotate(45deg) !important;}&.alt{border-radius:50% !important;z-index:999999 !important;padding:0 !important;transition:all 0.3s ease !important;top:25px !important;right:30px !important;min-width:40px !important;min-height:40px !important;span.btn-icon{font-size:20px !important;}&:hover{opacity:0.88 !important;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'));

/***/ }),

/***/ "./src/common/assets/image/agencyModern/badge.png":
/*!********************************************************!*\
  !*** ./src/common/assets/image/agencyModern/badge.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/badge-f0f0ea02b7eb602e4701907b51112618.png";

/***/ }),

/***/ "./src/common/assets/image/agencyModern/mail.svg":
/*!*******************************************************!*\
  !*** ./src/common/assets/image/agencyModern/mail.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzEuMDEyIDMxLjAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuMDEyIDMxLjAxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGZpbGw9IiMwZjIxMzciIGQ9Ik0yNS4xMDksMjEuNTFjLTAuMTIzLDAtMC4yNDYtMC4wNDUtMC4zNDItMC4xMzZsLTUuNzU0LTUuMzk4Yy0wLjIwMS0wLjE4OC0wLjIxMS0wLjUwNS0wLjAyMi0wLjcwNgoJCQljMC4xODktMC4yMDMsMC41MDQtMC4yMTIsMC43MDctMC4wMjJsNS43NTQsNS4zOThjMC4yMDEsMC4xODgsMC4yMTEsMC41MDUsMC4wMjIsMC43MDZDMjUuMzc1LDIxLjQ1NywyNS4yNDMsMjEuNTEsMjUuMTA5LDIxLjUxegoJCQkiLz4KCQk8cGF0aCBmaWxsPSIjMGYyMTM3IiBkPSJNNS45MDIsMjEuNTFjLTAuMTMzLDAtMC4yNjYtMC4wNTMtMC4zNjUtMC4xNThjLTAuMTg5LTAuMjAxLTAuMTc5LTAuNTE4LDAuMDIyLTAuNzA2bDUuNzU2LTUuMzk4CgkJCWMwLjIwMi0wLjE4OCwwLjUxOS0wLjE4LDAuNzA3LDAuMDIyYzAuMTg5LDAuMjAxLDAuMTc5LDAuNTE4LTAuMDIyLDAuNzA2bC01Ljc1Niw1LjM5OEM2LjE0OCwyMS40NjUsNi4wMjUsMjEuNTEsNS45MDIsMjEuNTF6Ii8+Cgk8L2c+Cgk8cGF0aCBmaWxsPSIjMGYyMTM3IiAgZD0iTTI4LjUxMiwyNi41MjlIMi41Yy0xLjM3OCwwLTIuNS0xLjEyMS0yLjUtMi41VjYuOTgyYzAtMS4zNzksMS4xMjItMi41LDIuNS0yLjVoMjYuMDEyYzEuMzc4LDAsMi41LDEuMTIxLDIuNSwyLjV2MTcuMDQ3CgkJQzMxLjAxMiwyNS40MDgsMjkuODksMjYuNTI5LDI4LjUxMiwyNi41Mjl6IE0yLjUsNS40ODJjLTAuODI3LDAtMS41LDAuNjczLTEuNSwxLjV2MTcuMDQ3YzAsMC44MjcsMC42NzMsMS41LDEuNSwxLjVoMjYuMDEyCgkJYzAuODI3LDAsMS41LTAuNjczLDEuNS0xLjVWNi45ODJjMC0wLjgyNy0wLjY3My0xLjUtMS41LTEuNUgyLjV6Ii8+Cgk8cGF0aCBmaWxsPSIjMGYyMTM3IiAgZD0iTTE1LjUwNiwxOC4wMThjLTAuNjY1LDAtMS4zMy0wLjIyMS0xLjgzNi0wLjY2MkwwLjgzLDYuMTU1QzAuNjIyLDUuOTc0LDAuNiw1LjY1OCwwLjc4MSw1LjQ0OQoJCWMwLjE4My0wLjIwOCwwLjQ5OC0wLjIyNywwLjcwNi0wLjA0OGwxMi44NCwxMS4yYzAuNjM5LDAuNTU3LDEuNzE5LDAuNTU3LDIuMzU3LDBMMjkuNTA4LDUuNDE5CgkJYzAuMjA3LTAuMTgxLDAuNTIyLTAuMTYxLDAuNzA2LDAuMDQ4YzAuMTgxLDAuMjA5LDAuMTYsMC41MjQtMC4wNDgsMC43MDZMMTcuMzQyLDE3LjM1NQoJCUMxNi44MzUsMTcuNzk3LDE2LjE3MSwxOC4wMTgsMTUuNTA2LDE4LjAxOHoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/common/assets/image/agencyModern/nav-bg.png":
/*!*********************************************************!*\
  !*** ./src/common/assets/image/agencyModern/nav-bg.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAGCAYAAAC/8aJEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7VTdTcMwEL6LWok3wgRkhIyQEfrIA7NUGQF2AIktgA06gtnAfeAJ5ON+bMehDSKISq3UT7FOse8ul+++M8IRgfpVDXDBq4oLeGENVaiBsFYnpOscgBh9JBibPRkbmA10ZsM9rh/vYAYWcABQf9PE9GLHhCQyEO2MEiFUT2QTZ30MOD4y+LiEbLEOAm3ZvsaQDTv77B0qp3YZPHwEP/6e1sx438BM4NTBrkqwKQi5BCEgKWNQRUkKF4k+/xyxFQIJOjhKREVavYlgr3Wrxa2ehYrfyXxBGhE89k/OQvvbjintVDGIrSnlL+ORCpLYNCqKH1S3F9aEnDIVPuFL5OG/UF4b37FzjVDp63H9cLUADCtWnjDf8mZbzs4vK3Bm5Kc5lujFLL7F/dhNLaDo+qfLGWJnTxHDBBdjnjer5bMSQGR3hpBCSWlC2FjaZwz4AlPclEesfwPyAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/common/assets/image/agencyModern/phone.svg":
/*!********************************************************!*\
  !*** ./src/common/assets/image/agencyModern/phone.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjAyLjU5MiAyMDIuNTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuNTkyIDIwMi41OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTE5OC4wNDgsMTYwLjEwNWwtMzEuMjg2LTMxLjI5Yy02LjIzMS02LjIwNi0xNi41NTItNi4wMTYtMjMuMDAxLDAuNDMzbC0xNS43NjEsMTUuNzYxCgkJCWMtMC45OTUtMC41NTEtMi4wMjYtMS4xMjQtMy4xMS0xLjczMmMtOS45NTMtNS41MTUtMjMuNTc3LTEzLjA3NC0zNy45MTQtMjcuNDIxQzcyLjU5OSwxMDEuNDgsNjUuMDMsODcuODM0LDU5LjUsNzcuODc0CgkJCWMtMC41ODctMS4wNTYtMS4xNDUtMi4wNzItMS42OTYtMy4wMzhsMTAuNTc5LTEwLjU2NWw1LjItNS4yMDdjNi40Ni02LjQ2LDYuNjM5LTE2Ljc3OCwwLjQxOS0yMy4wMDFMNDIuNzE1LDQuNzY5CgkJCWMtNi4yMTYtNi4yMTYtMTYuNTQxLTYuMDI3LTIzLjAwMSwwLjQzM2wtOC44MTgsOC44NjhsMC4yNDMsMC4yNGMtMi45NTYsMy43NzItNS40MjksOC4xMjQtNy4yNjUsMTIuODE2CgkJCWMtMS42OTYsNC40NjYtMi43NTIsOC43MjktMy4yMzUsMTIuOTk4Yy00LjEzLDM0LjI1LDExLjUyLDY1LjU1LDUzLjk5NCwxMDguMDI4YzU4LjcxMSw1OC43MDcsMTA2LjAyNyw1NC4yNzMsMTA4LjA2Nyw1NC4wNTUKCQkJYzQuNDQ5LTAuNTMsOC43MDctMS41OTMsMTMuMDM4LTMuMjc1YzQuNjUyLTEuODE4LDkuMDAxLTQuMjg0LDEyLjc2OS03LjIzM2wwLjE5MywwLjE2OGw4LjkzMy04Ljc0NwoJCQlDMjA0LjA3OSwxNzYuNjYxLDIwNC4yNjUsMTY2LjM0MywxOTguMDQ4LDE2MC4xMDV6IE0xOTAuNjgzLDE3Ni4xNjRsLTMuOTM3LDMuOTNsLTEuNTY4LDEuNTA3CgkJCWMtMi40NjksMi4zODctNi43NDMsNS43NC0xMi45ODQsOC4xODFjLTMuNTQzLDEuMzY0LTcuMDM2LDIuMjQtMTAuNTksMi42NjNjLTAuNDQ3LDAuMDQzLTQ0Ljk1LDMuODQtMTAwLjAyOS01MS4yMzUKCQkJQzE0Ljc0Myw5NC4zOCw3LjIzOCw2Ny4zOTUsMTAuMzg0LDQxLjI1OWMwLjM5NC0zLjQ2NCwxLjI2My02Ljk1LDIuNjUyLTEwLjU5M2MyLjQ2Mi02LjI3Nyw1LjgxMi0xMC41NDcsOC4xODEtMTMuMDJsNS40NDMtNS40OTcKCQkJYzIuNjIzLTIuNjMsNi43MTQtMi44MzEsOS4xMTItMC40MzNsMzEuMjg2LDMxLjI4NmMyLjM5NCwyLjQwMSwyLjIwNSw2LjQ5Mi0wLjQyMiw5LjEzTDQ1LjUwNyw3My4yNGwxLjk1LDMuMjgyCgkJCWMxLjA4NCwxLjgyOSwyLjIzLDMuODc5LDMuNDU0LDYuMTA2YzUuODEyLDEwLjQ4MiwxMy43NjQsMjQuODMsMjkuMTIxLDQwLjE3M2MxNS4zMTcsMTUuMzI1LDI5LjY0NCwyMy4yNyw0MC4wOTQsMjkuMDY3CgkJCWMyLjI1OCwxLjI0OSw0LjMyLDIuMzk4LDYuMTcsMy41bDMuMjg5LDEuOTVsMjEuMTE1LTIxLjEyMmMyLjYzNC0yLjYyMyw2LjczOS0yLjgxNyw5LjEzNy0wLjQyNmwzMS4yNzIsMzEuMjc5CgkJCUMxOTMuNSwxNjkuNDQ2LDE5My4zMSwxNzMuNTM3LDE5MC42ODMsMTc2LjE2NHoiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/common/assets/image/agencyModern/tick-circle.png":
/*!**************************************************************!*\
  !*** ./src/common/assets/image/agencyModern/tick-circle.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHiSURBVHgBpZVfTttAEMZnxqlUqaqUG9SRIFWfCAcoTS7QeG8ANwgnCJyA5gS0J3BSDlCXHqB+Q/yRYm7gB5CQkGeYMSbExiEQvjeP17+Z3fl2jFCj7v+wmX2AgNDrg0gHEPziVQyACUs2+dd2P+u+xSew0zAQjw5BoAnPCSFh5v0qmOYfts5/HwhRuBRmEvAJ6XDr/GhYzjODHQ0ReA9WkAD+OF7/vjsDds/CbdFs8AYhs4s+u3EO/HYxmdoWXgUQHgl5n7RpQRFK8YpbZNWtAPsVtd0AOZvMhe+dIYR9eJ1ihW1rIR1t4EE5kQIB0X8xSiDRbfW6J6Ff5wb0aIOAoVPOwiPt9n4tLOMevIemvKM/tcdkVqrGGD2J1t2egjcNUoTTHHYDqTTyyp7CCpF2KSlVCDIwg+s5xTnEKhPuRV9cIh89s1ZnEUzXxg1FxtWMBlUrBXDLvb/tfstilmTOIvU84csGskwEMajJ5ttZfT0Nd5EaG3quA1giQhhjdxo2JaPpi+7vs+VBYruhqOVSzb4Db9SDM/IuR2tuLMgjWFEGi4oxNrPN8ZpepTr/LYOpb81mj/CK8skDNJyb0ouU6oTZsQlTSrBodQ4m+wWwr8vuvWeeJYrzoXAN42jTpdXv7gAMkt+TqYfaqAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/common/assets/image/hostingModern/car-accident-report.png":
/*!***********************************************************************!*\
  !*** ./src/common/assets/image/hostingModern/car-accident-report.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/car-accident-report-c7b66e53b185d9a41dba7fb4bde7c709.png";

/***/ }),

/***/ "./src/common/assets/image/hostingModern/logo.png":
/*!********************************************************!*\
  !*** ./src/common/assets/image/hostingModern/logo.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-cefa2e477e6e60ad61893d8c45739705.png";

/***/ }),

/***/ "./src/common/assets/image/hostingModern/paypal.svg":
/*!**********************************************************!*\
  !*** ./src/common/assets/image/hostingModern/paypal.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg==");

/***/ }),

/***/ "./src/common/components/Box/index.js":
/*!********************************************!*\
  !*** ./src/common/components/Box/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "./src/common/components/base.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Box\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-18lhchm-0"
})(_base__WEBPACK_IMPORTED_MODULE_5__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_4__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_4__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_4__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_4__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BoxWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "./src/common/components/Checkbox/checkbox.style.js":
/*!**********************************************************!*\
  !*** ./src/common/components/Checkbox/checkbox.style.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ "./src/common/components/base.js");



const CheckBoxStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "checkboxstyle__CheckBoxStyle",
  componentId: "sc-6k1skb-0"
})(["display:inline-flex;.reusecore__field-label{color:", ";font-size:", "px;font-weight:", ";}&.label_left{label{display:flex;align-items:center;.reusecore__field-label{margin-right:", "px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.reusecore__field-label{margin-left:", "px;}}}input[type='checkbox']{&.checkbox{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;pointer-events:none;&:checked + div{border-color:", ";background-color:", ";&::after{opacity:1;visibility:visible;transform:rotate(45deg) scale(1);}}}+ div{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:3px;border:1px solid ", ";position:relative;transition:all 0.3s ease;&::after{content:'';width:4px;height:10px;transform:rotate(45deg) scale(0.8);border-bottom:2px solid ", ";border-right:2px solid ", ";position:absolute;top:0;opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:0.3s;}}}", ""], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.4', '500'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#dadada'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), _base__WEBPACK_IMPORTED_MODULE_2__["base"]); // prop types can also be added from the style functions

CheckBoxStyle.propTypes = {};
CheckBoxStyle.displayName = 'CheckBoxStyle';
/* harmony default export */ __webpack_exports__["default"] = (CheckBoxStyle);

/***/ }),

/***/ "./src/common/components/Checkbox/index.js":
/*!*************************************************!*\
  !*** ./src/common/components/Checkbox/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useToggle */ "./src/common/components/useToggle/index.js");
/* harmony import */ var _checkbox_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox.style */ "./src/common/components/Checkbox/checkbox.style.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Checkbox\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CheckBox = (_ref) => {
  let {
    className,
    isChecked,
    labelText,
    value,
    id,
    htmlFor,
    labelPosition,
    isMaterial,
    disabled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "isChecked", "labelText", "value", "id", "htmlFor", "labelPosition", "isMaterial", "disabled"]);

  // use toggle hooks
  const [toggleValue, toggleHandler] = Object(_useToggle__WEBPACK_IMPORTED_MODULE_3__["default"])(isChecked); // Add all classs to an array

  const addAllClasses = ['reusecore__checkbox']; // Add label position class

  if (labelPosition) {
    addAllClasses.push(`label_${labelPosition}`);
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // label control


  const LabelField = labelText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "reusecore__field-label",
    children: labelText
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);

  const position = labelPosition || 'right';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_checkbox_style__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({
    className: addAllClasses.join(' ')
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: htmlFor,
      children: [position === 'left' || position === 'right' ? LabelField : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
        type: "checkbox",
        className: "checkbox",
        id: id,
        value: value,
        checked: toggleValue,
        onChange: toggleHandler,
        disabled: disabled
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

CheckBox.propTypes = {
  /** ClassName of the Checkbox */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** labelText of the checkbox field */
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Note: id and htmlFor must be same.
   */
  htmlFor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),

  /** Set checkbox id in number || string */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),

  /** value of the checkbox field */
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** labelText of the checkbox field */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['right', 'left']),

  /** Checkbox toggle state based on isChecked prop */
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /** disabled of the checkbox field */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/** Checkbox default proptype */

CheckBox.defaultProps = {
  isChecked: false,
  labelText: 'Checkbox label',
  labelPosition: 'right',
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),

/***/ "./src/common/components/Heading/index.js":
/*!************************************************!*\
  !*** ./src/common/components/Heading/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "./src/common/components/base.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Heading\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "sc-1vy1c89-0"
})(_base__WEBPACK_IMPORTED_MODULE_5__["base"], styled_system__WEBPACK_IMPORTED_MODULE_4__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_4__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_4__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_4__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_4__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Heading'));

const Heading = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeadingWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = _objectSpread({
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "./src/common/components/Image/index.js":
/*!**********************************************!*\
  !*** ./src/common/components/Image/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "./src/common/components/base.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Image\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "sc-1fp6mzl-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_4__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Image'));

const Image = (_ref) => {
  let {
    src,
    alt
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src", "alt"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageWrapper, _objectSpread({
    src: src,
    alt: alt
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "./src/common/components/Input/index.js":
/*!**********************************************!*\
  !*** ./src/common/components/Input/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.style */ "./src/common/components/Input/input.style.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Input\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable */




const Input = (_ref) => {
  let {
    label,
    value,
    onBlur,
    onFocus,
    onChange,
    inputType,
    isMaterial,
    icon,
    iconPosition,
    passwordShowHide,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }); // toggle function

  const handleToggle = () => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      toggle: !state.toggle
    }));
  }; // add focus class


  const handleOnFocus = event => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  const handleOnBlur = event => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  const handleOnChange = event => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  const getInputFocusClass = () => {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  let inputElement, htmlFor; // Add all classs to an array

  const addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push(`icon-${iconPosition}`);
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  const LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  const LabelField = label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
    htmlFor: htmlFor,
    children: label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 31
  }, undefined); // Input type check


  switch (inputType) {
    case 'textarea':
      inputElement = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", _objectSpread(_objectSpread({}, props), {}, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined);
      break;

    case 'password':
      inputElement = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, props), {}, {
          id: htmlFor,
          name: htmlFor,
          type: state.toggle ? 'password' : 'text',
          value: state.value,
          onChange: handleOnChange,
          onBlur: handleOnBlur,
          onFocus: handleOnFocus
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined), passwordShowHide && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_style__WEBPACK_IMPORTED_MODULE_3__["EyeButton"], {
          onClick: handleToggle,
          className: state.toggle ? 'eye' : 'eye-closed',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined);
      break;

    default:
      inputElement = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "field-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, props), {}, {
          id: htmlFor,
          name: htmlFor,
          type: inputType,
          value: state.value,
          onChange: handleOnChange,
          onBlur: handleOnBlur,
          onFocus: handleOnFocus
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "input-icon",
          children: icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 20
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_input_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: `${addAllClasses.join(' ')} ${getInputFocusClass()}`,
    children: [LabelPosition === 'top' && LabelField, inputElement, isMaterial && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "highlight"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 22
    }, undefined), LabelPosition === 'bottom' && LabelField]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 5
  }, undefined);
};
/** Inout prop type checking. */


Input.propTypes = {
  /** className of the Input component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** Set input label value. */
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** The input value, required for a controlled component. */
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['string', 'number']),

  /** Make default input into material style input. */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /** Password show hide icon button prop [*only for password field]. */
  passwordShowHide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /** Set input type of the input element. Default type is text. */
  inputType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['text', 'email', 'password', 'number', 'textarea']),

  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /** Set input field icon position. Default position is 'left'. */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right']),

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/** Inout default type. */

Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/common/components/Input/input.style.js":
/*!****************************************************!*\
  !*** ./src/common/components/Input/input.style.js ***!
  \****************************************************/
/*! exports provided: EyeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeButton", function() { return EyeButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const InputField = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "inputstyle__InputField",
  componentId: "sc-w8zb17-0"
})(["position:relative;.field-wrapper{position:relative;}&.icon-left,&.icon-right{.field-wrapper{display:flex;align-items:center;> .input-icon{position:absolute;top:0;bottom:auto;display:flex;align-items:center;justify-content:center;width:34px;height:40px;}}}&.icon-left{.field-wrapper{> .input-icon{left:0;right:auto;}> input{padding-left:34px;}}}&.icon-right{.field-wrapper{> .input-icon{left:auto;right:0;}> input{padding-right:34px;}}}label{display:block;color:", ";font-size:", "px;font-weight:", ";margin-bottom:", "px;transition:0.2s ease all;}textarea,input{font-size:16px;padding:11px;display:block;width:100%;color:", ";box-shadow:none;border-radius:4px;box-sizing:border-box;border:1px solid ", ";transition:border-color 0.2s ease;&:focus{outline:none;border-color:", ";}}textarea{min-height:150px;}&.is-material{label{position:absolute;left:0;top:10px;}input,textarea{border-radius:0;border-top:0;border-left:0;border-right:0;padding-left:0;padding-right:0;}textarea{min-height:40px;padding-bottom:0;}.highlight{position:absolute;height:1px;top:auto;left:50%;bottom:0;width:0;pointer-events:none;transition:all 0.2s ease;}&.icon-left,&.icon-right{.field-wrapper{flex-direction:row-reverse;> .input-icon{width:auto;}> input{flex:1;}}}&.icon-left{.field-wrapper{> input{padding-left:20px;}}label{top:-15px;font-size:12px;}}&.icon-right{.field-wrapper{> input{padding-right:20px;}}}&.is-focus{input{border-color:", ";}label{top:-16px;font-size:12px;color:", ";}.highlight{width:100%;height:2px;background-color:", ";left:0;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.labelColor', '#767676'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.4', '500'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'));
const EyeButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "inputstyle__EyeButton",
  componentId: "sc-w8zb17-1"
})(["width:43px;height:40px;border:0;padding:0;margin:0;top:0;right:0;position:absolute;outline:none;cursor:pointer;box-shadow:none;display:flex;align-items:center;justify-content:center;background-color:transparent;> span{width:12px;height:12px;display:block;border:solid 1px ", ";border-radius:75% 15%;transform:rotate(45deg);position:relative;&:before{content:'';display:block;width:4px;height:4px;border-radius:50%;left:3px;top:3px;position:absolute;border:solid 1px ", ";}}&.eye-closed{> span{&:after{content:'';display:block;width:1px;height:20px;left:calc(50% - 1px / 2);top:-4px;position:absolute;background-color:", ";transform:rotate(-12deg);}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./src/common/components/Link/index.js":
/*!*********************************************!*\
  !*** ./src/common/components/Link/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "./src/common/components/base.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Link\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('a').withConfig({
  displayName: "Link__LinkWrapper",
  componentId: "sc-febuxj-0"
})({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_4__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Link'));

const Link = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);
Link.propTypes = _objectSpread({
  as: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired
}, _base__WEBPACK_IMPORTED_MODULE_4__["base"].propTypes);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "./src/common/components/List/index.js":
/*!*********************************************!*\
  !*** ./src/common/components/List/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _list_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.style */ "./src/common/components/List/list.style.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\List\\index.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable */




const List = (_ref) => {
  let {
    className,
    icon,
    text,
    link
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "icon", "text", "link"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_list_style__WEBPACK_IMPORTED_MODULE_3__["ListWrapper"], {
    className: className,
    children: link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: link,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [icon, text]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [icon, text]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/common/components/List/list.style.js":
/*!**************************************************!*\
  !*** ./src/common/components/List/list.style.js ***!
  \**************************************************/
/*! exports provided: ListWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWrapper", function() { return ListWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "liststyle__ListWrapper",
  componentId: "sc-p1c3xv-0"
})([""]);


/***/ }),

/***/ "./src/common/components/Text/index.js":
/*!*********************************************!*\
  !*** ./src/common/components/Text/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "./src/common/components/base.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Text\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-1vr9bep-0"
})(_base__WEBPACK_IMPORTED_MODULE_5__["base"], styled_system__WEBPACK_IMPORTED_MODULE_4__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_4__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_4__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_4__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_4__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: content
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = _objectSpread({
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "./src/common/components/UI/Container/index.js":
/*!*****************************************************!*\
  !*** ./src/common/components/UI/Container/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/common/components/UI/Container/style.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\UI\\Container\\index.js";



const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width
}) => {
  // Add all classs to an array
  const addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/common/components/UI/Container/style.js":
/*!*****************************************************!*\
  !*** ./src/common/components/UI/Container/style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1e965po-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:768px){", ";}"], props => props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]), props => props.width || '1170px', props => props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]));
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "./src/common/components/UI/ContainerTwo/index.js":
/*!********************************************************!*\
  !*** ./src/common/components/UI/ContainerTwo/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/common/components/UI/ContainerTwo/style.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\UI\\Container\\index.js";



const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width
}) => {
  // Add all classs to an array
  const addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/common/components/UI/ContainerTwo/style.js":
/*!********************************************************!*\
  !*** ./src/common/components/UI/ContainerTwo/style.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1jxz5qe-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1200px){max-width:", ";padding:0;}@media (min-width:1400px){padding:0;max-width:", ";width:100%;}@media (max-width:768px){", ";}"], props => props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]), props => props.width || '1170px', props => props.width || '1300px', props => props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]));
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "./src/common/components/UIElements/Logo/index.js":
/*!********************************************************!*\
  !*** ./src/common/components/UIElements/Logo/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Text */ "./src/common/components/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Link */ "./src/common/components/Link/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Image */ "./src/common/components/Image/index.js");


var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\UIElements\\Logo\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Logo = (_ref) => {
  let {
    logoWrapperStyle,
    logoStyle,
    titleStyle,
    withAchor,
    anchorProps,
    logoSrc,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread(_objectSpread({}, props), logoWrapperStyle), {}, {
    children: withAchor ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", _objectSpread(_objectSpread({}, anchorProps), {}, {
      children: logoSrc ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
        src: logoSrc,
        alt: title
      }, logoStyle), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Text__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
        content: title
      }, titleStyle), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: logoSrc ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
        src: logoSrc,
        alt: title
      }, logoStyle), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Text__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
        content: title
      }, titleStyle), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined)
    }, void 0, false)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined);
};

Logo.propTypes = {
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/common/components/base.js":
/*!***************************************!*\
  !*** ./src/common/components/base.js ***!
  \***************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** this is our Base Component every components must be Extend it */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"], styled_system__WEBPACK_IMPORTED_MODULE_0__["width"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["height"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_0__["color"], styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_0__["order"], styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_0__["display"]);
base.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_0__["display"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["width"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["height"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["color"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["order"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"].propTypes);

/***/ }),

/***/ "./src/common/components/useToggle/index.js":
/*!**************************************************!*\
  !*** ./src/common/components/useToggle/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (initialValue => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const toggler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue(value => !value), []);
  return [value, toggler];
});

/***/ }),

/***/ "./src/common/contexts/DrawerContext.js":
/*!**********************************************!*\
  !*** ./src/common/contexts/DrawerContext.js ***!
  \**********************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\contexts\\DrawerContext.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/common/data/AgencyModern/index.js":
/*!***********************************************!*\
  !*** ./src/common/data/AgencyModern/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const data = {
//   WorkHardList: [
//     { id: 1, title: 'Vehicle Specifications' },
//     { id: 2, title: 'Title Records' },
//     { id: 3, title: 'Junk / Salvage / Insurance Records' },
//     { id: 4, title: 'Accident Records' },
//     { id: 5, title: 'Theft Records' },
//     { id: 6, title: 'Lien / Impound / Export Records' },
//     { id: 7, title: 'Salvage Auction Records' },
//     { id: 8, title: 'Sale Records' },
//     { id: 9, title: 'Title Checks' },
//     { id: 10, title: 'NMVTIS Consumer Access Disclaimer' },
//   ],
// };
// export default data;
const data = {
  WorkHardList: [{
    id: 1,
    title: 'Major Accident'
  }, {
    id: 2,
    title: 'Mileage Rollback'
  }, {
    id: 3,
    title: 'Multiple Owners'
  }, {
    id: 4,
    title: 'Structural Damage'
  }, {
    id: 5,
    title: 'Vehicle Service History'
  }, {
    id: 6,
    title: 'Lease, Personal, Taxi or Police Use'
  }, {
    id: 7,
    title: 'Total Loss'
  }, {
    id: 8,
    title: 'Rebuilt'
  }, {
    id: 9,
    title: 'Flood Damage'
  }, {
    id: 10,
    title: 'Airbag Deployment'
  }, {
    id: 11,
    title: 'Mileage Rollover'
  }, {
    id: 12,
    title: 'Salvaged'
  }, {
    id: 13,
    title: 'Hail Damage'
  }, {
    id: 14,
    title: 'Branded a Lemon'
  }, {
    id: 15,
    title: 'Last Reported Mileage'
  }, {
    id: 16,
    title: 'Junked'
  }, {
    id: 17,
    title: 'State Owned'
  }, {
    id: 18,
    title: 'Length of Ownership'
  }, {
    id: 19,
    title: 'Estimated Miles Driven Per Year'
  }, {
    id: 20,
    title: 'Not Actual Mileage'
  }, {
    id: 21,
    title: 'Recall Information'
  }, {
    id: 22,
    title: 'Warranty Information'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/common/theme/hostingModern/colors.js":
/*!**************************************************!*\
  !*** ./src/common/theme/hostingModern/colors.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");

const colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#ffffff',
  text: '#343D48',
  textPrimary: '#0F2137',
  primary: lib_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_PRIMARY"],
  primaryHover: lib_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_PRIMARY"],
  backgroundHover: lib_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_BACKGROUND_PRIMARY"],
  border: '#dce5ea',
  secondary: lib_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_SECONDARY"],
  tertiary: lib_constant__WEBPACK_IMPORTED_MODULE_0__["COLOR_SECONDARY"]
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./src/common/theme/hostingModern/index.js":
/*!*************************************************!*\
  !*** ./src/common/theme/hostingModern/index.js ***!
  \*************************************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./src/common/theme/hostingModern/colors.js");

const theme = {
  breakpoints: ['576px', '768px', '991px', '1220px'],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      border: '1px solid',
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        boxShadow: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryBoxShadow
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warning: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    error: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    primaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        boxShadow: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryBoxShadow
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warningWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    errorWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    transparentBg: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      padding: 0,
      height: 'auto',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};

/***/ }),

/***/ "./src/containers/AgencyModern/Guarantee/index.js":
/*!********************************************************!*\
  !*** ./src/containers/AgencyModern/Guarantee/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Zoom */ "react-reveal/Zoom");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_components_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/components/Box */ "./src/common/components/Box/index.js");
/* harmony import */ var common_components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/components/Text */ "./src/common/components/Text/index.js");
/* harmony import */ var common_components_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/components/Heading */ "./src/common/components/Heading/index.js");
/* harmony import */ var common_components_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/components/Image */ "./src/common/components/Image/index.js");
/* harmony import */ var common_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/components/UI/Container */ "./src/common/components/UI/Container/index.js");
/* harmony import */ var common_assets_image_agencyModern_badge_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/assets/image/agencyModern/badge.png */ "./src/common/assets/image/agencyModern/badge.png");
/* harmony import */ var common_assets_image_agencyModern_badge_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(common_assets_image_agencyModern_badge_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\AgencyModern\\Guarantee\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const GuaranteeSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Box__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, sectionWrapper), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Box__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, row), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Box__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, textArea), {}, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
            bottom: true,
            cascade: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, title), {}, {
              children: "30 Days Money Back Guarantee"
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, description), {}, {
              content: "We have provided 30 Days Money Back Guarantee in case of dissatisfaction with our product. We care for our customers and their values. "
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Box__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, row), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Box__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, imageArea), {}, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_4___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Image__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({
              m: "auto"
            }, ImageOne), {}, {
              src: common_assets_image_agencyModern_badge_png__WEBPACK_IMPORTED_MODULE_10___default.a,
              alt: "Guarantee"
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

GuaranteeSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  ImageOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
GuaranteeSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '0px'],
    pb: ['0px', '0px', '0px', '25px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textArea: {
    width: [1, 1, '65%', 1 / 2],
    mb: ['40px', '50px', '60px', '80px']
  },
  imageArea: {
    width: [1, 1, '40%', 1, 1 / 2]
  },
  title: {
    fontSize: ['28px', '30px', '32px', '36px', '36px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '20px',
    textAlign: 'center'
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center'
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GuaranteeSection);

/***/ }),

/***/ "./src/containers/AgencyModern/Navbar/index.js":
/*!*****************************************************!*\
  !*** ./src/containers/AgencyModern/Navbar/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_components_UIElements_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/components/UIElements/Logo */ "./src/common/components/UIElements/Logo/index.js");
/* harmony import */ var common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/components/UI/ContainerTwo */ "./src/common/components/UI/ContainerTwo/index.js");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "./src/containers/AgencyModern/Navbar/navbar.style.js");
/* harmony import */ var common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/assets/image/hostingModern/logo.png */ "./src/common/assets/image/hostingModern/logo.png");
/* harmony import */ var common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\AgencyModern\\Navbar\\index.js";







const Navbar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "agencyModern-navbar navbar",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UIElements_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: "/",
        logoSrc: common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        title: lib_constant__WEBPACK_IMPORTED_MODULE_6__["NAME"],
        className: "main-logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/containers/AgencyModern/Navbar/navbar.style.js":
/*!************************************************************!*\
  !*** ./src/containers/AgencyModern/Navbar/navbar.style.js ***!
  \************************************************************/
/*! exports provided: MenuArea, MobileMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuArea", function() { return MenuArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenu", function() { return MobileMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_assets_image_agencyModern_nav_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/assets/image/agencyModern/nav-bg.png */ "./src/common/assets/image/agencyModern/nav-bg.png");



const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "navbarstyle__NavbarWrapper",
  componentId: "sc-bp0781-0"
})(["width:100%;padding:25px 0 26px;background-color:transparent;position:fixed;z-index:9999;transition:all 0.3s ease;@media only screen and (max-width:1366px){padding:20px 0 21px;}> div.container{width:100%;display:flex;align-items:center;}"]);
const MenuArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__MenuArea",
  componentId: "sc-bp0781-1"
})(["display:flex;align-items:center;width:100%;.menubar{display:none;}@media only screen and (max-width:1024px){justify-content:flex-end;}@media only screen and (max-width:768px){.menubar{display:block;}}.menu-items{display:flex;align-items:center;margin-right:11px;opacity:1;visibility:visible;transition:all 0.3s ease;@media only screen and (max-width:1366px){margin-right:13px;}@media only screen and (max-width:768px){display:none;}li{margin:0 19px;a{color:", ";font-family:DM Sans;font-size:16px;font-weight:400;transition:all 0.3s ease;&:hover{color:", ";}}&.is-current{background:transparent url(", ") no-repeat center bottom / contain;a{color:", ";}}@media only screen and (max-width:1366px){margin:0 17px;}&:first-child{margin-left:0;}&:last-child{margin-right:0;}}}.menu-right{margin-left:auto;}&.active{.menu-items{opacity:0;visibility:hidden;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.menu', '#02073E'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.menu', '#FF825C'), common_assets_image_agencyModern_nav_bg_png__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.menu', '#FF825C'));
const MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "navbarstyle__MobileMenu",
  componentId: "sc-bp0781-2"
})(["display:none;@media only screen and (max-width:991px){display:flex;width:100%;height:calc(100vh - 70px);padding:27px 0 40px;opacity:0;visibility:hidden;position:absolute;top:82px;flex-direction:column;background-color:", ";transition:all 0.3s ease;color:", ";&.active{opacity:1;visibility:visible;box-shadow:0 3px 12px ", ";}.container{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;}ul{padding-bottom:20px;li{a{display:block;padding:13px 0;border-radius:5px;transition:all 0.3s ease;color:", ";}&:hover{a{padding:13px 15px;color:", ";}}}}.reusecore__button{width:100%;border-radius:4px;background-image:-moz-linear-gradient( -31deg,rgb(64,219,216) 0%,rgb(44,31,132) 100% );background-image:-webkit-linear-gradient( -31deg,rgb(64,219,216) 0%,rgb(44,31,132) 100% );background-image:-ms-linear-gradient( -31deg,rgb(64,219,216) 0%,rgb(44,31,132) 100% );@media only screen and (max-width:480px){margin-top:20px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#000'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.shadow', 'rgba(38, 78, 118, 0.1)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textPrimary', '#02073E'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'));
/* harmony default export */ __webpack_exports__["default"] = (NavbarWrapper);

/***/ }),

/***/ "./src/containers/AgencyModern/WorkHard/index.js":
/*!*******************************************************!*\
  !*** ./src/containers/AgencyModern/WorkHard/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_feather_chevronRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/feather/chevronRight */ "react-icons-kit/feather/chevronRight");
/* harmony import */ var react_icons_kit_feather_chevronRight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_feather_chevronRight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/components/UI/ContainerTwo */ "./src/common/components/UI/ContainerTwo/index.js");
/* harmony import */ var common_components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/components/Text */ "./src/common/components/Text/index.js");
/* harmony import */ var common_components_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/components/Heading */ "./src/common/components/Heading/index.js");
/* harmony import */ var common_components_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/components/Image */ "./src/common/components/Image/index.js");
/* harmony import */ var common_components_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/components/List */ "./src/common/components/List/index.js");
/* harmony import */ var common_components_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/components/Link */ "./src/common/components/Link/index.js");
/* harmony import */ var _workHard_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workHard.style */ "./src/containers/AgencyModern/WorkHard/workHard.style.js");
/* harmony import */ var common_data_AgencyModern__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/data/AgencyModern */ "./src/common/data/AgencyModern/index.js");
/* harmony import */ var common_assets_image_hostingModern_car_accident_report_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/assets/image/hostingModern/car-accident-report.png */ "./src/common/assets/image/hostingModern/car-accident-report.png");
/* harmony import */ var common_assets_image_hostingModern_car_accident_report_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(common_assets_image_hostingModern_car_accident_report_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_assets_image_agencyModern_tick_circle_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/assets/image/agencyModern/tick-circle.png */ "./src/common/assets/image/agencyModern/tick-circle.png");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\AgencyModern\\WorkHard\\index.js";










 // import illustration from 'common/assets/image/hostingModern/car-report.png';




const WorkHard = ({
  data,
  error,
  vin
}) => {
  var _data$mark;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["Section"], {
        children: [// Show Loading
        !data && !error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["Content"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
            as: "h3",
            children: "Please wait"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "Collecting available data...",
            m: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["Loader"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, undefined) // Show Error
        : error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["Content"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
            as: "h3",
            color: "#ff4751",
            children: "Failed!\xA0\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
            as: "h3",
            children: "The provided VIN has errors Please double check the first three characters of the VIN. VINs do not include the letters I (i), O (o), Q (q), U (u) or Z (z), or the number 0."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
            lineHeight: "unset !important",
            content: vin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
            href: "/",
            children: ["Check again ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
              icon: react_icons_kit_feather_chevronRight__WEBPACK_IMPORTED_MODULE_2__["chevronRight"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined) // Show Collected Data
        :
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["Content"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["Title"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
              as: "h3",
              color: "#42bf00",
              children: "Success!\xA0\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], {
              as: "h3",
              children: "We found records for this vehicle:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["Mark"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["PreLogo"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["ManufactureLogo"], {
                imageSrc: (data === null || data === void 0 ? void 0 : (_data$mark = data.mark) === null || _data$mark === void 0 ? void 0 : _data$mark.toLowerCase()) || ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["MarkTitle"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
                content: data === null || data === void 0 ? void 0 : data.vehicle,
                lineHeight: "unset !important",
                textAlign: "left !important"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
                lineHeight: "unset !important",
                content: `${data === null || data === void 0 ? void 0 : data.records} Record(s)`,
                textAlign: "left !important"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "Discover all the information about this vehicle in a matter of seconds.",
            textAlign: "left !important"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "Vehicle History Report checks for:",
            textAlign: "left !important"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
            children: common_data_AgencyModern__WEBPACK_IMPORTED_MODULE_11__["default"].WorkHardList.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: "list-item",
              icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
                src: common_assets_image_agencyModern_tick_circle_png__WEBPACK_IMPORTED_MODULE_13__["default"],
                alt: "tick icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 27
              }, undefined),
              text: item.title,
              textAlign: "left !important"
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_workHard_style__WEBPACK_IMPORTED_MODULE_10__["Illustration"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
            src: common_assets_image_hostingModern_car_accident_report_png__WEBPACK_IMPORTED_MODULE_12___default.a,
            alt: "Illustration"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WorkHard);

/***/ }),

/***/ "./src/containers/AgencyModern/WorkHard/workHard.style.js":
/*!****************************************************************!*\
  !*** ./src/containers/AgencyModern/WorkHard/workHard.style.js ***!
  \****************************************************************/
/*! exports provided: Section, Title, Content, Illustration, ListGroup, Mark, MarkTitle, PreLogo, ManufactureLogo, Loader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Illustration", function() { return Illustration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return ListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return Mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkTitle", function() { return MarkTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLogo", function() { return PreLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufactureLogo", function() { return ManufactureLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "workHardstyle__SectionWrapper",
  componentId: "sc-j4s1fl-0"
})(["background:", ";padding:110px 0 30px;@media only screen and (max-width:1440px){padding:110px 0 30px;}@media only screen and (max-width:1024px){padding:110px 0 30px;}@media only screen and (max-width:768px){padding:20px 0 65px;}@media only screen and (max-width:480px){padding:0px 0 70px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.backgroundHover'));
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "workHardstyle__Section",
  componentId: "sc-j4s1fl-1"
})(["display:flex;align-items:center;@media only screen and (max-width:768px){flex-direction:column-reverse;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "workHardstyle__Title",
  componentId: "sc-j4s1fl-2"
})(["display:flex;@media only screen and (max-width:768px){display:block;}"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workHardstyle__Content",
  componentId: "sc-j4s1fl-3"
})(["padding:100px 0 110px;width:40%;@media only screen and (min-width:1024px) and (max-width:1366px){width:43%;}@media only screen and (min-width:768px) and (max-width:1024px){width:48%;}@media only screen and (max-width:768px){width:100%;margin-top:30px;}h2{font-weight:700;font-size:36px;line-height:1.52;letter-spacing:-1px;@media only screen and (max-width:1440px){font-size:30px;}@media only screen and (min-width:768px) and (max-width:1024px){font-size:24px;}@media only screen and (max-width:768px){font-size:24px;text-align:center;margin-top:15px;}}p{font-size:15px;line-height:42px;@media only screen and (min-width:1024px) and (max-width:1366px){line-height:32px;}@media only screen and (min-width:768px) and (max-width:1024px){line-height:28px;}@media only screen and (max-width:768px){line-height:32px;text-align:center;}}.explore{color:", ";font-weight:700;font-size:15px;line-height:42px;margin-top:30px;display:inline-flex;align-items:center;@media only screen and (max-width:768px){justify-content:center;margin-left:-50px;width:100%;}i{line-height:1;margin-left:2px;transition:0.3s ease 0s;}&:hover i{margin-left:7px;}@media only screen and (min-width:1024px) and (max-width:1366px){margin-top:15px;}@media only screen and (max-width:768px){margin-top:15px;}@media only screen and (max-width:480px){margin-top:25px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.linkColor'));
const Illustration = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.figure.withConfig({
  displayName: "workHardstyle__Illustration",
  componentId: "sc-j4s1fl-4"
})(["width:55%;margin:0 0 0 5%;@media only screen and (max-width:768px){margin-bottom:30px;width:100%;margin:0;}@media only screen and (max-width:480px){display:none;}"]);
const ListGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workHardstyle__ListGroup",
  componentId: "sc-j4s1fl-5"
})(["column-count:2;margin-top:10px;@media only screen and (min-width:768px) and (max-width:1024px){margin-top:25px;}@media only screen and (max-width:768px){margin:0 auto;margin-top:40px;padding-top:0;padding-bottom:0;}@media only screen and (max-width:411px){column-count:1;}.list-item{display:flex;align-items:center;@media only screen and (min-width:768px) and (max-width:1024px){font-size:12px;}img{margin-right:10px;}&:not(:last-child){margin-bottom:22px;}}"]);
const Mark = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workHardstyle__Mark",
  componentId: "sc-j4s1fl-6"
})(["display:flex;"]);
const MarkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workHardstyle__MarkTitle",
  componentId: "sc-j4s1fl-7"
})(["display:block;"]);
const PreLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workHardstyle__PreLogo",
  componentId: "sc-j4s1fl-8"
})(["margin-bottom:0;margin-right:14px;width:80px;height:80px;border-radius:50%;flex-shrink:0;margin-right:14px;margin-bottom:10px;padding:12px;background:#fff;border:1px solid ", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'));
const ManufactureLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workHardstyle__ManufactureLogo",
  componentId: "sc-j4s1fl-9"
})(["background-image:url(\"/car-manufacture/", ".png\");width:100%;height:100%;background-size:cover;"], props => props.imageSrc);
const breatheAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}"]);
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workHardstyle__Loader",
  componentId: "sc-j4s1fl-10"
})(["border:16px solid ", ";border-radius:50%;border-top:16px solid ", ";width:120px;height:120px;animation:", " 2s linear infinite;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.backgroundHover'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'), breatheAnimation);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./src/containers/AgencyModern/agencyModern.style.js":
/*!***********************************************************!*\
  !*** ./src/containers/AgencyModern/agencyModern.style.js ***!
  \***********************************************************/
/*! exports provided: GlobalStyle, ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(["body{font-family:'DM Sans',sans-serif;}h1,h2,h3,h4,h5,h6{font-family:'DM Sans',sans-serif;margin-top:0;}p{font-family:'DM Sans',sans-serif;}section{position:relative;}"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "agencyModernstyle__ContentWrapper",
  componentId: "sc-qo5esg-0"
})(["overflow:hidden;.menuLeft{margin-left:105px;}.menuRight{margin-left:auto;}.sticky-nav-active{.agencyModern-navbar{background-color:#fff;box-shadow:0px 3px 8px 0px rgba(43,83,135,0.08);}}"]);

/***/ }),

/***/ "./src/containers/HostingModern/Faq/faq.style.js":
/*!*******************************************************!*\
  !*** ./src/containers/HostingModern/Faq/faq.style.js ***!
  \*******************************************************/
/*! exports provided: ContentWrapper, LoadingWrapper, InvoiceList, FaqItem, Line, Quantity, Secured, Checkout, EmailInputWrapper, PhoneInputWrapper, PaypalAccess, ButtonPaypal, Loader, SuccessCheckmark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingWrapper", function() { return LoadingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceList", function() { return InvoiceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqItem", function() { return FaqItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return Quantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Secured", function() { return Secured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInputWrapper", function() { return EmailInputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneInputWrapper", function() { return PhoneInputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalAccess", function() { return PaypalAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPaypal", function() { return ButtonPaypal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessCheckmark", function() { return SuccessCheckmark; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_assets_image_agencyModern_mail_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/assets/image/agencyModern/mail.svg */ "./src/common/assets/image/agencyModern/mail.svg");
/* harmony import */ var common_assets_image_agencyModern_phone_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/assets/image/agencyModern/phone.svg */ "./src/common/assets/image/agencyModern/phone.svg");




const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "faqstyle__SectionWrapper",
  componentId: "sc-hulvfz-0"
})(["padding:0px 0 120px;@media only screen and (max-width:1440px){padding:0 0 90px;}@media only screen and (max-width:480px){padding:0 0 90px;}"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__ContentWrapper",
  componentId: "sc-hulvfz-1"
})(["display:", ";flex-direction:row;column-count:2;box-shadow:rgb(32 39 49 / 29%) 0px 20px 50px;@media only screen and (max-width:768px){display:grid;column-count:1;}"], props => props.hidden ? 'none' : 'flex');
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__LoadingWrapper",
  componentId: "sc-hulvfz-2"
})(["margin:60px auto;padding:70px 70px;display:block;text-align:center;box-shadow:rgb(32 39 49 / 29%) 0px 20px 50px;@media only screen and (max-width:768px){display:block;column-count:1;}"]);
const InvoiceList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__InvoiceList",
  componentId: "sc-hulvfz-3"
})(["flex:0 0 50%;background:#f5f6f7;padding:10px 70px;flex-wrap:wrap;@media only screen and (max-width:768px){flex:unset;padding:10px 16px;}.react-reveal{flex:0 0 50%;margin-top:40px;@media only screen and (max-width:768px){flex:0 0 calc(50% - 25px);}@media only screen and (max-width:767px){flex:0 0 100%;}}"]);
const FaqItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__FaqItem",
  componentId: "sc-hulvfz-4"
})(["h4{font-weight:500;font-size:18px;line-height:30px;letter-spacing:-0.5px;color:", ";}p{font-size:15px;line-height:32px;color:", ";}a{font-weight:500;font-size:15px;line-height:42px;display:inline-flex;align-items:center;color:", ";i{line-height:1;margin-left:2px;transition:0.3s ease 0s;}&:hover i{margin-left:7px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textPrimary'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.linkColor'));
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.hr.withConfig({
  displayName: "faqstyle__Line",
  componentId: "sc-hulvfz-5"
})(["color:rgba(0,0,0,0.65);"]);
const Quantity = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__Quantity",
  componentId: "sc-hulvfz-6"
})(["display:flex;flex-wrap:nowrap;justify-content:space-between;.price{display:flex;}.base-price{text-decoration:line-through;}"]);
const Secured = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__Secured",
  componentId: "sc-hulvfz-7"
})(["display:flex;flex-wrap:nowrap;img{flex-shrink:0;width:105px;border-style:none;height:28px;}p{color:#666;margin:0 0 0 12px;}@media only screen and (max-width:768px){display:block;p{color:#666;margin:0;}}"]);
const Checkout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__Checkout",
  componentId: "sc-hulvfz-8"
})(["padding:60px;width:100%;.button{display:block;margin:24px 0;width:100%;}@media only screen and (max-width:768px){padding:10px 24px;}"]);
const EmailInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__EmailInputWrapper",
  componentId: "sc-hulvfz-9"
})(["position:relative;@media (max-width:768px){width:100%;}&::before{content:url(", ");display:block;position:relative;width:22px;left:22px;top:46px;z-index:9;}input{border-radius:5px;background-color:rgb(255,255,255);box-shadow:0px 7px 25px 0px rgba(22,53,76,0.08) !important;border:0 !important;margin-bottom:30px;height:60px;padding-left:60px !important;color:#343d48;opacity:1;font-weight:500;@media (max-width:768px){}&:focus{border:0;box-shadow:0px 7px 25px 0px rgba(22,53,76,0.08);}&:placeholder{font-size:16px;color:#343d48;opacity:1;}}.input-icon{left:10px !important;right:auto;top:7px !important;height:46px !important;svg{color:#ececec;width:24px;height:30px;}}"], common_assets_image_agencyModern_mail_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
const PhoneInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__PhoneInputWrapper",
  componentId: "sc-hulvfz-10"
})(["position:relative;@media (max-width:768px){width:100%;}&::before{content:url(", ");display:block;position:relative;width:22px;left:22px;top:46px;z-index:9;}input{border-radius:5px;background-color:rgb(255,255,255);box-shadow:0px 7px 25px 0px rgba(22,53,76,0.08) !important;border:0 !important;height:60px;padding-left:60px !important;color:#343d48;opacity:1;font-weight:500;@media (max-width:768px){}&:focus{border:0;box-shadow:0px 7px 25px 0px rgba(22,53,76,0.08);}&:placeholder{font-size:16px;color:#343d48;opacity:1;}}.input-icon{left:10px !important;right:auto;top:7px !important;height:46px !important;svg{color:#ececec;width:24px;height:30px;}}"], common_assets_image_agencyModern_phone_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
const PaypalAccess = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__PaypalAccess",
  componentId: "sc-hulvfz-11"
})(["display:", ";"], props => props.hidden ? 'none' : 'contents');
const ButtonPaypal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "faqstyle__ButtonPaypal",
  componentId: "sc-hulvfz-12"
})(["background:#ffc4394a;display:", ";text-align:center;height:55px;border-radius:4px;position:relative;width:100%;box-sizing:border-box;border:none;vertical-align:top;cursor:pointer;overflow:hidden;img{margin:0px 4vw;height:24px;position:relative;top:25%;}@media (max-width:768px){height:37px;img{margin:0px 4vw;height:19px;position:relative;top:25%;}}"], props => props.hidden ? 'none' : 'inline-block');
const breatheAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}"]);
const rotateCircle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotate(-45deg);}5%{transform:rotate(-45deg);}12%{transform:rotate(-405deg);}100%{transform:rotate(-405deg);}"]);
const iconLineTip = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{width:0;left:1px;top:19px;}54%{width:0;left:1px;top:19px;}70%{width:50px;left:-8px;top:37px;}84%{width:17px;left:21px;top:48px;}100%{width:25px;left:14px;top:45px;}"]);
const iconLineLong = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{width:0;right:46px;top:54px;}65%{width:0;right:46px;top:54px;}84%{width:55px;right:0px;top:35px;}100%{width:47px;right:8px;top:38px;}"]);
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__Loader",
  componentId: "sc-hulvfz-13"
})(["margin:0 auto;border:16px solid ", ";border-radius:50%;border-top:16px solid ", ";width:120px;height:120px;animation:", " 2s linear infinite;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.backgroundHover'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'), breatheAnimation);
const SuccessCheckmark = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "faqstyle__SuccessCheckmark",
  componentId: "sc-hulvfz-14"
})(["width:80px;height:115px;margin:0 auto;.check-icon{width:80px;height:80px;position:relative;border-radius:50%;box-sizing:content-box;border:4px solid #4CAF50;&::before{top:3px;left:-2px;width:30px;transform-origin:100% 50%;border-radius:100px 0 0 100px;}&::after{top:0;left:30px;width:60px;transform-origin:0 50%;border-radius:0 100px 100px 0;animation:rotate-circle 4.25s ease-in;}&::before,&::after{content:'';height:100px;position:absolute;background:#FFFFFF;transform:rotate(-45deg);}.icon-line{height:5px;background-color:#4CAF50;display:block;border-radius:2px;position:absolute;z-index:10;&.line-tip{top:46px;left:14px;width:25px;transform:rotate(45deg);animation:icon-line-tip 0.75s;}&.line-long{top:38px;right:8px;width:47px;transform:rotate(-45deg);animation:icon-line-long 0.75s;}}.icon-circle{top:-4px;left:-4px;z-index:10;width:80px;height:80px;border-radius:50%;position:absolute;box-sizing:content-box;border:4px solid rgba(76,175,80,.5);}.icon-fix{top:8px;width:5px;left:26px;z-index:1;height:85px;position:absolute;transform:rotate(-45deg);background-color:#FFFFFF;}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./src/containers/HostingModern/Faq/index.js":
/*!***************************************************!*\
  !*** ./src/containers/HostingModern/Faq/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-paypal-button-v2 */ "react-paypal-button-v2");
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/components/Input */ "./src/common/components/Input/index.js");
/* harmony import */ var common_components_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/components/Checkbox */ "./src/common/components/Checkbox/index.js");
/* harmony import */ var common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/components/UI/ContainerTwo */ "./src/common/components/UI/ContainerTwo/index.js");
/* harmony import */ var common_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/components/UI/Container */ "./src/common/components/UI/Container/index.js");
/* harmony import */ var common_components_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/components/Heading */ "./src/common/components/Heading/index.js");
/* harmony import */ var common_components_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/components/Text */ "./src/common/components/Text/index.js");
/* harmony import */ var common_components_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/components/Link */ "./src/common/components/Link/index.js");
/* harmony import */ var react_icons_kit_feather_chevronRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/feather/chevronRight */ "react-icons-kit/feather/chevronRight");
/* harmony import */ var react_icons_kit_feather_chevronRight__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_feather_chevronRight__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _SectionHeading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SectionHeading */ "./src/containers/HostingModern/SectionHeading/index.js");
/* harmony import */ var _faq_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./faq.style */ "./src/containers/HostingModern/Faq/faq.style.js");
/* harmony import */ var lib_validate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lib/validate */ "./src/lib/validate.js");
/* harmony import */ var common_assets_image_hostingModern_paypal_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/assets/image/hostingModern/paypal.svg */ "./src/common/assets/image/hostingModern/paypal.svg");
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");


var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\HostingModern\\Faq\\index.js";



 // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
















const Faq = ({
  data,
  vin
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [phone, setPhone] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const [warning, setWarning] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    email: '*Required',
    phone: '*Required',
    checked: '*Required'
  });
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const validEmail = Object(lib_validate__WEBPACK_IMPORTED_MODULE_16__["validateEmail"])(email);
  const validPhone = Object(lib_validate__WEBPACK_IMPORTED_MODULE_16__["validatePhone"])(phone);
  const isCompleted = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => {
    if (validEmail && checked && validPhone) {
      return true;
    }

    return false;
  });

  const successPaid = async details => {
    setLoading(true);

    try {
      const payload = {
        details,
        phone,
        email,
        productName: vin,
        amount: `${lib_constant__WEBPACK_IMPORTED_MODULE_18__["PRICE"]} USD`,
        total: `${lib_constant__WEBPACK_IMPORTED_MODULE_18__["PRICE"]} USD`,
        receiptDetail: `${(data === null || data === void 0 ? void 0 : data.vehicle) || ''}`
      };
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${lib_constant__WEBPACK_IMPORTED_MODULE_18__["APIURL"]}mailer`, payload);
      setLoading(false);
      setSuccess(true);
    } catch (e) {
      setLoading(false);
      setSuccess(true);
    } finally {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push({
          pathname: `${lib_constant__WEBPACK_IMPORTED_MODULE_18__["URLWEB"]}report/${vin}`
        });
      }, 3000);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "faq",
    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["LoadingWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["Loader"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], {
          as: "h4",
          children: "Collecting data payment..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, undefined), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["LoadingWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["SuccessCheckmark"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "check-icon",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "icon-line line-tip"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "icon-line line-long"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "icon-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "icon-fix"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], {
          as: "h4",
          children: "Payment successfull!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
          content: "Your report has been sent to your email",
          fontSize: "20px !important"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, undefined), !success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SectionHeading__WEBPACK_IMPORTED_MODULE_14__["default"], {
        slogan: "Purchase the report now and find out detailed history of",
        title: data === null || data === void 0 ? void 0 : data.vehicle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["ContentWrapper"], {
        hidden: loading,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["InvoiceList"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["FaqItem"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], {
              as: "h4",
              children: "Order Summary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["Quantity"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  content: "1 Report",
                  mb: "0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Link__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  href: `/report/${lib_constant__WEBPACK_IMPORTED_MODULE_18__["SAMPLE_REPORT"]}`,
                  rel: "noopener noreferrer",
                  target: "_blank",
                  children: ["See Example Report ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
                    icon: react_icons_kit_feather_chevronRight__WEBPACK_IMPORTED_MODULE_13__["chevronRight"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 42
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "price",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: "base-price",
                  content: `$${lib_constant__WEBPACK_IMPORTED_MODULE_18__["BASE_PRICE"]}`,
                  fontWeight: "500"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 21
                }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  content: `$${lib_constant__WEBPACK_IMPORTED_MODULE_18__["PRICE"]}`,
                  fontWeight: "600"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["Line"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, undefined)]
          }, "1", true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["FaqItem"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["Quantity"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], {
                as: "h4",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
                content: `$${lib_constant__WEBPACK_IMPORTED_MODULE_18__["PRICE"]}`,
                fontSize: "20px !important",
                fontWeight: "600"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["Line"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, undefined)]
          }, "2", true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["FaqItem"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["Secured"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/paypal.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
                content: "Pay through a secure payment service"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }, undefined)]
          }, "3", true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["Checkout"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], {
            as: "h4",
            mb: "0",
            children: "Where should we send your report?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["PhoneInputWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
              inputType: "text",
              onChange: e => setPhone(e),
              placeholder: "Enter Phone Number",
              iconPosition: "left",
              "aria-label": "phone",
              minLength: "17"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 15
          }, undefined), !validPhone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
            content: warning.phone,
            fontSize: "14px !important",
            mt: "7px",
            color: "#767676",
            mb: "0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 30
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["EmailInputWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
              inputType: "email",
              onChange: e => setEmail(e),
              placeholder: "Enter Email Address",
              iconPosition: "left",
              "aria-label": "email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 15
          }, undefined), !validEmail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
            content: warning.email,
            fontSize: "14px !important",
            mt: "-24px",
            color: "#767676"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 31
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
            isChecked: checked,
            checked: checked,
            onChange: e => setChecked(e.target.checked),
            className: "AGREE_TNC",
            labelText: "I agree to Terms and Condition"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 15
          }, undefined), !checked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
            content: warning.email,
            fontSize: "14px !important",
            mt: "7px",
            color: "#767676"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 27
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 116
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 122
            }, undefined)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["ButtonPaypal"], {
            disabled: true,
            hidden: isCompleted(),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: common_assets_image_hostingModern_paypal_svg__WEBPACK_IMPORTED_MODULE_17__["default"],
              alt: "paypal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_faq_style__WEBPACK_IMPORTED_MODULE_15__["PaypalAccess"], {
            hidden: !isCompleted(),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_4__["PayPalButton"], {
              amount: lib_constant__WEBPACK_IMPORTED_MODULE_18__["PRICE"],
              shippingPreference: "NO_SHIPPING",
              onSuccess: details => successPaid(details),
              options: {
                clientId: lib_constant__WEBPACK_IMPORTED_MODULE_18__["PAYPAL_CLIENTID"],
                disableFunding: 'credit,card',
                enableFunding: 'venmo'
              },
              disableCard: true,
              style: {
                background: 'black'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./src/containers/HostingModern/Footer/footer.style.js":
/*!*************************************************************!*\
  !*** ./src/containers/HostingModern/Footer/footer.style.js ***!
  \*************************************************************/
/*! exports provided: FooterInner, CopyrightInfo, FooterWidget, Nav, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterInner", function() { return FooterInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightInfo", function() { return CopyrightInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWidget", function() { return FooterWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);



const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "sc-160yxey-0"
})(["background-color:#ffffff;padding:160px 0 75px;position:relative;@media only screen and (max-width:1440px){padding:160px 0 55px;}@media only screen and (max-width:768px){padding:160px 0 20px;}"]);
const FooterInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "footerstyle__FooterInner",
  componentId: "sc-160yxey-1"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;@media screen and (max-width:768px){justify-content:flex-start;}.react-reveal{@media screen and (max-width:768px){width:90%;}@media screen and (max-width:480px){width:100%;}@media screen and (max-width:360px){width:100%;}}"]);
const CopyrightInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "footerstyle__CopyrightInfo",
  componentId: "sc-160yxey-2"
})(["margin:auto;text-align:center;color:#979494;@media only screen and (max-width:768px){margin:auto;text-align:left;}p{font-size:14px;line-height:18px;margin-top:24px;a{color:", ";}}.copyright{color:", ";margin-top:20px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textPrimary'), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#0f2137', 0.6));
const FooterWidget = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "footerstyle__FooterWidget",
  componentId: "sc-160yxey-3"
})(["display:flex;margin:10px auto;justify-content:center;.logo{height:35px;}@media only screen and (max-width:768px){width:33%;margin-bottom:30px;}@media screen and (max-width:480px){width:50%;}"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "footerstyle__Nav",
  componentId: "sc-160yxey-4"
})(["a{color:", ";display:flex;align-items:center;font-size:15px;line-height:2.5;transition:0.3s ease 0s;img{margin-right:12px;}&:hover{color:", ";}}"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#02073E', 0.8), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'));
/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "./src/containers/HostingModern/Footer/index.js":
/*!******************************************************!*\
  !*** ./src/containers/HostingModern/Footer/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/components/UI/ContainerTwo */ "./src/common/components/UI/ContainerTwo/index.js");
/* harmony import */ var common_components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/components/Image */ "./src/common/components/Image/index.js");
/* harmony import */ var common_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/components/Link */ "./src/common/components/Link/index.js");
/* harmony import */ var common_components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/components/Text */ "./src/common/components/Text/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer.style */ "./src/containers/HostingModern/Footer/footer.style.js");
/* harmony import */ var common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/assets/image/hostingModern/logo.png */ "./src/common/assets/image/hostingModern/logo.png");
/* harmony import */ var common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\HostingModern\\Footer\\index.js";








 // import { footer as data } from 'common/data/HostingModern';

const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer_style__WEBPACK_IMPORTED_MODULE_7__["FooterInner"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_footer_style__WEBPACK_IMPORTED_MODULE_7__["CopyrightInfo"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
            up: true,
            delay: 100,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: 'flex',
                justifyContent: 'center !important'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                m: "20px",
                src: common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: "Logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "https://www.paypal.com/webapps/mpp/paypal-popup",
                target: "_blank",
                title: "How PayPal Works",
                onclick: "javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://www.paypalobjects.com/webstatic/mktg/logo/bdg_secured_by_pp_2line.png",
                  alt: "Secured by Paypal",
                  style: {
                    display: 'inline-block',
                    padding: '2px',
                    paddingBottom: '1rem!important',
                    maxWidth: '100%!important'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    display: 'block !important'
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://www.paypal.com/webapps/mpp/how-paypal-works",
                    target: "_blank",
                    children: "How PayPal Works"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["This site is protected by reCAPTCHA and the Google and ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                rel: "noopener noreferrer",
                target: "_blank",
                href: "https://policies.google.com/terms",
                children: "Terms of service"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 72
              }, undefined), " apply.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 191
              }, undefined), "NMVTIS Data is used for Vehicle Auto Vin Check and Car History Reports Copyright \xA9 2022 ", lib_constant__WEBPACK_IMPORTED_MODULE_9__["NAME"], ". All rights reserved.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 133
              }, undefined), "The use of this Web site constitutes acceptance of the ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                href: "/terms-and-conditions",
                children: "Terms of Conditions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 72
              }, undefined), " and ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                href: "/privacy-policy",
                children: "Privacy Policy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 138
              }, undefined), "."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: "copyright",
              content: `© 2022 ${lib_constant__WEBPACK_IMPORTED_MODULE_9__["NAME"]}. All rights reserved.`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/containers/HostingModern/SectionHeading/index.js":
/*!**************************************************************!*\
  !*** ./src/containers/HostingModern/SectionHeading/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/components/Heading */ "./src/common/components/Heading/index.js");
/* harmony import */ var _sectionHeading_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sectionHeading.style */ "./src/containers/HostingModern/SectionHeading/sectionHeading.style.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\HostingModern\\SectionHeading\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SectionHeading = (_ref) => {
  let {
    title,
    slogan
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "slogan"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sectionHeading_style__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      as: "h4",
      children: slogan
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      as: "h2",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SectionHeading);

/***/ }),

/***/ "./src/containers/HostingModern/SectionHeading/sectionHeading.style.js":
/*!*****************************************************************************!*\
  !*** ./src/containers/HostingModern/SectionHeading/sectionHeading.style.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const HGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.hgroup.withConfig({
  displayName: "sectionHeadingstyle__HGroup",
  componentId: "sc-1ly5p3g-0"
})(["margin-bottom:", ";margin-top:", ";@media (max-width:480px){margin-bottom:", ";}text-align:", ";h4{color:", ";font-weight:500;font-size:16px;line-height:40px;margin:0;@media (max-width:1440px){line-height:2;}}h2{color:", ";font-weight:500;font-size:24px;line-height:50px;letter-spacing:-0.5px;margin:0;@media (max-width:480px){font-size:18px;line-height:34px;}}"], props => {
  var _props$mb;

  return (_props$mb = props.mb) !== null && _props$mb !== void 0 ? _props$mb : '50px';
}, props => {
  var _props$mt;

  return (_props$mt = props.mt) !== null && _props$mt !== void 0 ? _props$mt : '50px';
}, props => {
  var _props$mb2;

  return (_props$mb2 = props.mb) !== null && _props$mb2 !== void 0 ? _props$mb2 : '30px';
}, props => {
  var _props$textAlign;

  return (_props$textAlign = props.textAlign) !== null && _props$textAlign !== void 0 ? _props$textAlign : 'center';
}, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.tertiary'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textPrimary'));
/* harmony default export */ __webpack_exports__["default"] = (HGroup);

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

/***/ "./src/lib/validate.js":
/*!*****************************!*\
  !*** ./src/lib/validate.js ***!
  \*****************************/
/*! exports provided: validateEmail, validatePhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePhone", function() { return validatePhone; });
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePhone(phone) {
  const re = /^.{9,}$/;
  return re.test(phone);
}

/***/ }),

/***/ "./src/pages/payment.js":
/*!******************************!*\
  !*** ./src/pages/payment.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common_theme_hostingModern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/theme/hostingModern */ "./src/common/theme/hostingModern/index.js");
/* harmony import */ var common_assets_css_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/assets/css/style */ "./src/common/assets/css/style.js");
/* harmony import */ var containers_AgencyModern_agencyModern_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/AgencyModern/agencyModern.style */ "./src/containers/AgencyModern/agencyModern.style.js");
/* harmony import */ var common_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/contexts/DrawerContext */ "./src/common/contexts/DrawerContext.js");
/* harmony import */ var containers_AgencyModern_Guarantee__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! containers/AgencyModern/Guarantee */ "./src/containers/AgencyModern/Guarantee/index.js");
/* harmony import */ var containers_AgencyModern_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/AgencyModern/Navbar */ "./src/containers/AgencyModern/Navbar/index.js");
/* harmony import */ var containers_HostingModern_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! containers/HostingModern/Footer */ "./src/containers/HostingModern/Footer/index.js");
/* harmony import */ var containers_HostingModern_Faq__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! containers/HostingModern/Faq */ "./src/containers/HostingModern/Faq/index.js");
/* harmony import */ var containers_AgencyModern_WorkHard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! containers/AgencyModern/WorkHard */ "./src/containers/AgencyModern/WorkHard/index.js");
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\pages\\payment.js";

















const fetcher = async url => {
  const res = await fetch(url); // If the status code is not in the range 200-299,
  // we still try to parse and throw it.

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.'); // Attach extra info to the error object.

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const AgencyModern = () => {
  const {
    query,
    push
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(() => query.vin && `${lib_constant__WEBPACK_IMPORTED_MODULE_16__["APIURL"]}preparation?vin=${query.vin}`, fetcher, false, {
    method: 'GET',
    header: {
      "Content-Type": "applicaton/json"
    }
  });
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    // if (!query.vin) {
    //   push({
    //     pathname: '/',
    //     query: { failed: true }
    //   });
    // }
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = lib_constant__WEBPACK_IMPORTED_MODULE_16__["CRISPID"];

    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: common_theme_hostingModern__WEBPACK_IMPORTED_MODULE_7__["theme"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: [lib_constant__WEBPACK_IMPORTED_MODULE_16__["NAME"], " - Prepare VIN"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "Description",
          content: "Original and Actual Carfax"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "theme-color",
          content: lib_constant__WEBPACK_IMPORTED_MODULE_16__["COLOR_PRIMARY"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Bree+Serif|DM+Sans:400,400i,500,500i,700,700i&display=swap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_assets_css_style__WEBPACK_IMPORTED_MODULE_8__["ResetCSS"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_AgencyModern_agencyModern_style__WEBPACK_IMPORTED_MODULE_9__["GlobalStyle"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_AgencyModern_agencyModern_style__WEBPACK_IMPORTED_MODULE_9__["ContentWrapper"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_stickynode__WEBPACK_IMPORTED_MODULE_5___default.a, {
          top: 0,
          innerZ: 9999,
          activeClass: "sticky-nav-active",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_10__["DrawerProvider"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_AgencyModern_Navbar__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_AgencyModern_WorkHard__WEBPACK_IMPORTED_MODULE_15__["default"], {
          data: data === null || data === void 0 ? void 0 : data.data,
          error: error,
          vin: query.vin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined), !error && data !== null && data !== void 0 && data.success ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_HostingModern_Faq__WEBPACK_IMPORTED_MODULE_14__["default"], {
          data: data === null || data === void 0 ? void 0 : data.data,
          vin: query.vin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 40
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 83
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_AgencyModern_Guarantee__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_HostingModern_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AgencyModern);

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/feather/chevronRight":
/*!*******************************************************!*\
  !*** external "react-icons-kit/feather/chevronRight" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/chevronRight");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-paypal-button-v2":
/*!*****************************************!*\
  !*** external "react-paypal-button-v2" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-paypal-button-v2");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-reveal/Zoom":
/*!************************************!*\
  !*** external "react-reveal/Zoom" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Zoom");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXNzZXRzL2Nzcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2Fzc2V0cy9pbWFnZS9hZ2VuY3lNb2Rlcm4vYmFkZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXNzZXRzL2ltYWdlL2FnZW5jeU1vZGVybi9tYWlsLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2Fzc2V0cy9pbWFnZS9hZ2VuY3lNb2Rlcm4vbmF2LWJnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2Fzc2V0cy9pbWFnZS9hZ2VuY3lNb2Rlcm4vcGhvbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXNzZXRzL2ltYWdlL2FnZW5jeU1vZGVybi90aWNrLWNpcmNsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9jYXItYWNjaWRlbnQtcmVwb3J0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXNzZXRzL2ltYWdlL2hvc3RpbmdNb2Rlcm4vcGF5cGFsLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvQm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9DaGVja2JveC9jaGVja2JveC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvQ2hlY2tib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9JbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvSW5wdXQvaW5wdXQuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0xpc3QvbGlzdC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvVUkvQ29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9VSS9Db250YWluZXIvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL1VJL0NvbnRhaW5lclR3by9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvVUlFbGVtZW50cy9Mb2dvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy91c2VUb2dnbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb250ZXh0cy9EcmF3ZXJDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0YS9BZ2VuY3lNb2Rlcm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi90aGVtZS9ob3N0aW5nTW9kZXJuL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3RoZW1lL2hvc3RpbmdNb2Rlcm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQWdlbmN5TW9kZXJuL0d1YXJhbnRlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BZ2VuY3lNb2Rlcm4vTmF2YmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0FnZW5jeU1vZGVybi9OYXZiYXIvbmF2YmFyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0FnZW5jeU1vZGVybi9Xb3JrSGFyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BZ2VuY3lNb2Rlcm4vV29ya0hhcmQvd29ya0hhcmQuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQWdlbmN5TW9kZXJuL2FnZW5jeU1vZGVybi5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib3N0aW5nTW9kZXJuL0ZhcS9mYXEuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9GYXEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9Gb290ZXIvZm9vdGVyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvc3RpbmdNb2Rlcm4vRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvc3RpbmdNb2Rlcm4vU2VjdGlvbkhlYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9TZWN0aW9uSGVhZGluZy9zZWN0aW9uSGVhZGluZy5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BheW1lbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvbGlzaGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMta2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMta2l0L2ZlYXRoZXIvY2hldnJvblJpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wYXlwYWwtYnV0dG9uLXYyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXZlYWwvWm9vbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXdyaXRlc1Jlc3VsdCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZ2V0U2FmZVBhcmFtTmFtZSIsInBhcmFtTmFtZSIsIm5ld1BhcmFtTmFtZSIsImkiLCJjaGFyQ29kZSIsImFsbE1hdGNoIiwiaGFzIiwiaGFzSXRlbSIsInJlcSIsIm1hdGNoZXMiLCJncm91cEtleSIsInZhbGlkYXRlIiwicGFyc2VkRGVzdGluYXRpb24iLCJoYWRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsImNvbXBpbGVOb25QYXRoIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwibWF0Y2hlZFBhZ2UiLCJmc1BhdGhuYW1lIiwiaGFuZGxlUmV3cml0ZSIsInJld3JpdGUiLCJoYXNQYXJhbXMiLCJoZWFkZXJzIiwiY29va2llcyIsImFjYyIsImRlc3RSZXMiLCJmaW5pc2hlZCIsInJld3JpdGVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUmVzZXRDU1MiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lR2V0IiwiQm94V3JhcHBlciIsInN0eWxlZCIsInRoZW1lZCIsImZsZXhCb3giLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiQm94IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJvbmVPZiIsIndpZHRoIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXlPZiIsImhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJmbGV4Iiwib3JkZXIiLCJhbGlnblNlbGYiLCJib3JkZXIiLCJib3JkZXJUb3AiLCJib3JkZXJSaWdodCIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJib3JkZXJDb2xvciIsImRlZmF1bHRQcm9wcyIsIkNoZWNrQm94U3R5bGUiLCJkaXYiLCJkaXNwbGF5TmFtZSIsIkNoZWNrQm94IiwiY2xhc3NOYW1lIiwiaXNDaGVja2VkIiwibGFiZWxUZXh0IiwiaHRtbEZvciIsImxhYmVsUG9zaXRpb24iLCJpc01hdGVyaWFsIiwidG9nZ2xlVmFsdWUiLCJ0b2dnbGVIYW5kbGVyIiwidXNlVG9nZ2xlIiwiYWRkQWxsQ2xhc3NlcyIsIkxhYmVsRmllbGQiLCJwb3NpdGlvbiIsImpvaW4iLCJIZWFkaW5nV3JhcHBlciIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJIZWFkaW5nIiwibXQiLCJtYiIsIkltYWdlV3JhcHBlciIsIm1heFdpZHRoIiwiSW1hZ2UiLCJhbHQiLCJJbnB1dCIsImxhYmVsIiwib25CbHVyIiwib25Gb2N1cyIsIm9uQ2hhbmdlIiwiaW5wdXRUeXBlIiwiaWNvbiIsImljb25Qb3NpdGlvbiIsInBhc3N3b3JkU2hvd0hpZGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidG9nZ2xlIiwiZm9jdXMiLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVPbkZvY3VzIiwiaGFuZGxlT25CbHVyIiwiaGFuZGxlT25DaGFuZ2UiLCJnZXRJbnB1dEZvY3VzQ2xhc3MiLCJpbnB1dEVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsIkxhYmVsUG9zaXRpb24iLCJvYmplY3QiLCJmdW5jIiwiSW5wdXRGaWVsZCIsIkV5ZUJ1dHRvbiIsImJ1dHRvbiIsIkxpbmtXcmFwcGVyIiwidGV4dERlY29yYXRpb24iLCJMaXN0IiwiTGlzdFdyYXBwZXIiLCJUZXh0V3JhcHBlciIsIlRleHQiLCJDb250YWluZXIiLCJmdWxsV2lkdGgiLCJub0d1dHRlciIsIm1vYmlsZUd1dHRlciIsIkNvbnRhaW5lcldyYXBwZXIiLCJMb2dvIiwibG9nb1dyYXBwZXJTdHlsZSIsImxvZ29TdHlsZSIsInRpdGxlU3R5bGUiLCJ3aXRoQWNob3IiLCJhbmNob3JQcm9wcyIsImxvZ29TcmMiLCJ0aXRsZSIsIm1yIiwid2hpdGVTcGFjZSIsInRoZW1lIiwiY29tcG9zZSIsImJveFNpemluZyIsInNwYWNlIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJib3JkZXJzIiwiaW5pdGlhbFZhbHVlIiwic2V0VmFsdWUiLCJ0b2dnbGVyIiwidXNlQ2FsbGJhY2siLCJpbml0aWFsU3RhdGUiLCJpc09wZW4iLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsIkRyYXdlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRHJhd2VyUHJvdmlkZXIiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJXb3JrSGFyZExpc3QiLCJjb2xvcnMiLCJ0cmFuc3BhcmVudCIsImJsYWNrIiwid2hpdGUiLCJ0ZXh0UHJpbWFyeSIsInByaW1hcnkiLCJDT0xPUl9QUklNQVJZIiwicHJpbWFyeUhvdmVyIiwiYmFja2dyb3VuZEhvdmVyIiwiQ09MT1JfQkFDS0dST1VORF9QUklNQVJZIiwic2Vjb25kYXJ5IiwiQ09MT1JfU0VDT05EQVJZIiwidGVydGlhcnkiLCJicmVha3BvaW50cyIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwibGluZUhlaWdodHMiLCJzb2xpZCIsImNvcHkiLCJsZXR0ZXJTcGFjaW5ncyIsIm5vcm1hbCIsInRyYWNrZWQiLCJ0aWdodCIsIm1lZ2EiLCJyYWRpdXMiLCJ3aWR0aHMiLCJoZWlnaHRzIiwibWF4V2lkdGhzIiwiY29sb3JTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJwcmltYXJ5Qm94U2hhZG93Iiwic2Vjb25kYXJ5SG92ZXIiLCJ3YXJuaW5nIiwieWVsbG93IiwieWVsbG93SG92ZXIiLCJwcmltYXJ5V2l0aEJnIiwic2Vjb25kYXJ5V2l0aEJnIiwid2FybmluZ1dpdGhCZyIsImVycm9yV2l0aEJnIiwidHJhbnNwYXJlbnRCZyIsImJ1dHRvblN0eWxlcyIsInRleHRCdXR0b24iLCJwYWRkaW5nIiwib3V0bGluZWQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiZmFiIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ0xlZnQiLCJleHRlbmRlZEZhYiIsIkd1YXJhbnRlZVNlY3Rpb24iLCJzZWN0aW9uV3JhcHBlciIsInJvdyIsImRlc2NyaXB0aW9uIiwidGV4dEFyZWEiLCJpbWFnZUFyZWEiLCJJbWFnZU9uZSIsIkd1YXJhbnRlZUltYWdlIiwicHQiLCJwYiIsIm1sIiwiTmF2YmFyIiwibG9nbyIsIk5BTUUiLCJOYXZiYXJXcmFwcGVyIiwiaGVhZGVyIiwiTWVudUFyZWEiLCJuYXYiLCJuYXZCZyIsIk1vYmlsZU1lbnUiLCJXb3JrSGFyZCIsInZpbiIsImNoZXZyb25SaWdodCIsIm1hcmsiLCJ2ZWhpY2xlIiwicmVjb3JkcyIsImRhdGFMaXN0IiwiVGljayIsImlsbHVzdHJhdGlvbiIsIlNlY3Rpb25XcmFwcGVyIiwic2VjdGlvbiIsIlNlY3Rpb24iLCJUaXRsZSIsIkNvbnRlbnQiLCJJbGx1c3RyYXRpb24iLCJmaWd1cmUiLCJMaXN0R3JvdXAiLCJNYXJrIiwiTWFya1RpdGxlIiwiUHJlTG9nbyIsIk1hbnVmYWN0dXJlTG9nbyIsImltYWdlU3JjIiwiYnJlYXRoZUFuaW1hdGlvbiIsImtleWZyYW1lcyIsIkxvYWRlciIsIkdsb2JhbFN0eWxlIiwiQ29udGVudFdyYXBwZXIiLCJoaWRkZW4iLCJMb2FkaW5nV3JhcHBlciIsIkludm9pY2VMaXN0IiwiRmFxSXRlbSIsIkxpbmUiLCJociIsIlF1YW50aXR5IiwiU2VjdXJlZCIsIkNoZWNrb3V0IiwiRW1haWxJbnB1dFdyYXBwZXIiLCJNYWlsIiwiUGhvbmVJbnB1dFdyYXBwZXIiLCJQaG9uZSIsIlBheXBhbEFjY2VzcyIsIkJ1dHRvblBheXBhbCIsInJvdGF0ZUNpcmNsZSIsImljb25MaW5lVGlwIiwiaWNvbkxpbmVMb25nIiwiU3VjY2Vzc0NoZWNrbWFyayIsIkZhcSIsInVzZVJvdXRlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJzZXRXYXJuaW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInZhbGlkRW1haWwiLCJ2YWxpZGF0ZUVtYWlsIiwidmFsaWRQaG9uZSIsInZhbGlkYXRlUGhvbmUiLCJpc0NvbXBsZXRlZCIsInN1Y2Nlc3NQYWlkIiwiZGV0YWlscyIsInBheWxvYWQiLCJwcm9kdWN0TmFtZSIsImFtb3VudCIsIlBSSUNFIiwidG90YWwiLCJyZWNlaXB0RGV0YWlsIiwiYXhpb3MiLCJwb3N0IiwiQVBJVVJMIiwiVVJMV0VCIiwiU0FNUExFX1JFUE9SVCIsIkJBU0VfUFJJQ0UiLCJwYXlwYWxfbG9nbyIsImNsaWVudElkIiwiUEFZUEFMX0NMSUVOVElEIiwiZGlzYWJsZUZ1bmRpbmciLCJlbmFibGVGdW5kaW5nIiwiYmFja2dyb3VuZCIsIkZvb3RlcldyYXBwZXIiLCJmb290ZXIiLCJGb290ZXJJbm5lciIsIkNvcHlyaWdodEluZm8iLCJyZ2JhIiwiRm9vdGVyV2lkZ2V0IiwiTmF2IiwiRm9vdGVyIiwiTG9nb0ltYWdlIiwicGFkZGluZ0JvdHRvbSIsIlNlY3Rpb25IZWFkaW5nIiwic2xvZ2FuIiwiSEdyb3VwIiwiaGdyb3VwIiwiRU1BSUwiLCJNT1RUTyIsIkNSSVNQSUQiLCJGSVJFQkFTRV9EQVRBQkFTRV9VUkwiLCJCT1RfVE9LRU4iLCJDTElFTlRfSURfR09PR0xFIiwiQ0xJRU5UX1NFQ1JFVF9HT09HTEUiLCJSRUZSRVNIX1RPS0VOX0dPT0dMRSIsIlRPS0VOX0dPT0dMRSIsIkZJUkVCQVNFX0FQSV9LRVkiLCJGSVJFQkFTRV9BVVRIX0RPTUFJTiIsIkZJUkVCQVNFX1BST0pFQ1RfSUQiLCJGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJGSVJFQkFTRV9BUFBfSUQiLCJGSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCIsIk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MiLCJBUElfS0VZX0NBUkZBWF9QUk8iLCJ0ZXN0IiwiZmV0Y2hlciIsIm9rIiwiRXJyb3IiLCJpbmZvIiwianNvbiIsInN0YXR1cyIsIkFnZW5jeU1vZGVybiIsInVzZVNXUiIsInVzZUVmZmVjdCIsIiRjcmlzcCIsIkNSSVNQX1dFQlNJVEVfSUQiLCJkIiwicyIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBOztBQVNBOztBQUNBOztBQXVCQSxNQUFNQSxVQUEyQyxHQUFqRDs7QUFFQSw2Q0FLUTtBQUNOLE1BQUksSUFBSixFQUE4QztBQUM5QyxNQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCLE9BRmpCLENBR047QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLFFBQU0sQ0FBTkEsa0NBQTBDQyxHQUFELElBQVM7QUFDaEQsY0FBMkM7QUFDekM7QUFDQTtBQUVI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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcGF5bWVudC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgbGV0IGJhc2U6IFVSTFxuXG4gIHRyeSB7XG4gICAgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKFdyYXBBcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmXG4gICAgICAgICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJlxuICAgICAgICAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUylcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faFxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcbmltcG9ydCB7IFJvdXRlSGFzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuLy8gZW5zdXJlIG9ubHkgYS16QS1aIGFyZSB1c2VkIGZvciBwYXJhbSBuYW1lcyBmb3IgcHJvcGVyIGludGVycG9sYXRpbmdcbi8vIHdpdGggcGF0aC10by1yZWdleHBcbmV4cG9ydCBjb25zdCBnZXRTYWZlUGFyYW1OYW1lID0gKHBhcmFtTmFtZTogc3RyaW5nKSA9PiB7XG4gIGxldCBuZXdQYXJhbU5hbWUgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1OYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhckNvZGUgPSBwYXJhbU5hbWUuY2hhckNvZGVBdChpKVxuXG4gICAgaWYgKFxuICAgICAgKGNoYXJDb2RlID4gNjQgJiYgY2hhckNvZGUgPCA5MSkgfHwgLy8gQS1aXG4gICAgICAoY2hhckNvZGUgPiA5NiAmJiBjaGFyQ29kZSA8IDEyMykgLy8gYS16XG4gICAgKSB7XG4gICAgICBuZXdQYXJhbU5hbWUgKz0gcGFyYW1OYW1lW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdQYXJhbU5hbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoSGFzKFxuICByZXE6IEluY29taW5nTWVzc2FnZSxcbiAgaGFzOiBSb3V0ZUhhc1tdLFxuICBxdWVyeTogUGFyYW1zXG4pOiBmYWxzZSB8IFBhcmFtcyB7XG4gIGNvbnN0IHBhcmFtczogUGFyYW1zID0ge31cbiAgY29uc3QgYWxsTWF0Y2ggPSBoYXMuZXZlcnkoKGhhc0l0ZW0pID0+IHtcbiAgICBsZXQgdmFsdWU6IHVuZGVmaW5lZCB8IHN0cmluZ1xuICAgIGxldCBrZXkgPSBoYXNJdGVtLmtleVxuXG4gICAgc3dpdGNoIChoYXNJdGVtLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2hlYWRlcic6IHtcbiAgICAgICAga2V5ID0ga2V5IS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIHZhbHVlID0gcmVxLmhlYWRlcnNba2V5XSBhcyBzdHJpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2Nvb2tpZSc6IHtcbiAgICAgICAgdmFsdWUgPSAocmVxIGFzIGFueSkuY29va2llc1toYXNJdGVtLmtleV1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3F1ZXJ5Jzoge1xuICAgICAgICB2YWx1ZSA9IHF1ZXJ5W2tleSFdXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdob3N0Jzoge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHJlcT8uaGVhZGVycyB8fCB7fVxuICAgICAgICAvLyByZW1vdmUgcG9ydCBmcm9tIGhvc3QgaWYgcHJlc2VudFxuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGhvc3Q/LnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKVxuICAgICAgICB2YWx1ZSA9IGhvc3RuYW1lXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFoYXNJdGVtLnZhbHVlICYmIHZhbHVlKSB7XG4gICAgICBwYXJhbXNbZ2V0U2FmZVBhcmFtTmFtZShrZXkhKV0gPSB2YWx1ZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gbmV3IFJlZ0V4cChgXiR7aGFzSXRlbS52YWx1ZX0kYClcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChtYXRjaGVyKVxuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICBpZiAobWF0Y2hlcy5ncm91cHMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhtYXRjaGVzLmdyb3VwcykuZm9yRWFjaCgoZ3JvdXBLZXkpID0+IHtcbiAgICAgICAgICAgIHBhcmFtc1tncm91cEtleV0gPSBtYXRjaGVzLmdyb3VwcyFbZ3JvdXBLZXldXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNJdGVtLnR5cGUgPT09ICdob3N0JyAmJiBtYXRjaGVzWzBdKSB7XG4gICAgICAgICAgcGFyYW1zLmhvc3QgPSBtYXRjaGVzWzBdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgaWYgKGFsbE1hdGNoKSB7XG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU5vblBhdGgodmFsdWU6IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlLmluY2x1ZGVzKCc6JykpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcmFtcykpIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLU2BcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsICdnJyksIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwgJ2cnKSxcbiAgICAgICAgICBgLS1FU0NBUEVEX1BBUkFNX0NPTE9OJHtrZXl9YFxuICAgICAgICApXG4gICAgfVxuICB9XG4gIHZhbHVlID0gdmFsdWVcbiAgICAucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCAnXFxcXCQxJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywgJysnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQ09MT04vZywgJzonKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywgJz8nKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csICcqJylcblxuICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgLy8gY29ycmVjdGx5XG4gIHJldHVybiBwYXRoVG9SZWdleHBcbiAgICAuY29tcGlsZShgLyR7dmFsdWV9YCwgeyB2YWxpZGF0ZTogZmFsc2UgfSkocGFyYW1zKVxuICAgIC5zdWJzdHIoMSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgY29uc3QgaGFkTG9jYWxlID0gcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGVcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGNvbXBpbGVOb25QYXRoKHZhbHVlLCBwYXJhbXMpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgbGV0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICAvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbiAgaWYgKGhhZExvY2FsZSkge1xuICAgIHBhcmFtS2V5cyA9IHBhcmFtS2V5cy5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICduZXh0SW50ZXJuYWxMb2NhbGUnKVxuICB9XG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIChwYXJzZWREZXN0aW5hdGlvbiBhcyBhbnkpLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uLCB7IG1hdGNoSGFzIH0gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBkZWxCYXNlUGF0aCB9IGZyb20gJy4uL3JvdXRlcidcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgcmV3cml0ZXM6IHtcbiAgICBiZWZvcmVGaWxlczogUmV3cml0ZVtdXG4gICAgYWZ0ZXJGaWxlczogUmV3cml0ZVtdXG4gICAgZmFsbGJhY2s6IFJld3JpdGVbXVxuICB9LFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBtYXRjaGVkUGFnZTogYm9vbGVhblxuICBwYXJzZWRBczogUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD5cbiAgYXNQYXRoOiBzdHJpbmdcbiAgcmVzb2x2ZWRIcmVmPzogc3RyaW5nXG59IHtcbiAgbGV0IG1hdGNoZWRQYWdlID0gZmFsc2VcbiAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gIGxldCBmc1BhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgbm9ybWFsaXplTG9jYWxlUGF0aChkZWxCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSksIGxvY2FsZXMpLnBhdGhuYW1lXG4gIClcbiAgbGV0IHJlc29sdmVkSHJlZlxuXG4gIGNvbnN0IGhhbmRsZVJld3JpdGUgPSAocmV3cml0ZTogUmV3cml0ZSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgbGV0IHBhcmFtcyA9IG1hdGNoZXIocGFyc2VkQXMucGF0aG5hbWUpXG5cbiAgICBpZiAocmV3cml0ZS5oYXMgJiYgcGFyYW1zKSB7XG4gICAgICBjb25zdCBoYXNQYXJhbXMgPSBtYXRjaEhhcyhcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGhvc3Q6IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29va2llczogZG9jdW1lbnQuY29va2llXG4gICAgICAgICAgICAuc3BsaXQoJzsgJylcbiAgICAgICAgICAgIC5yZWR1Y2U8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBba2V5LCAuLi52YWx1ZV0gPSBpdGVtLnNwbGl0KCc9JylcbiAgICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZS5qb2luKCc9JylcbiAgICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgfSwge30pLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgcmV3cml0ZS5oYXMsXG4gICAgICAgIHBhcnNlZEFzLnF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChoYXNQYXJhbXMpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIGhhc1BhcmFtcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgICBwYXJzZWRBcyA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb25cbiAgICAgIGFzUGF0aCA9IGRlc3RSZXMubmV3VXJsXG4gICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICBmc1BhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoZGVsQmFzZVBhdGgoYXNQYXRoKSwgbG9jYWxlcykucGF0aG5hbWVcbiAgICAgIClcblxuICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgIG1hdGNoZWRQYWdlID0gdHJ1ZVxuICAgICAgICByZXNvbHZlZEhyZWYgPSBmc1BhdGhuYW1lXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihmc1BhdGhuYW1lKVxuXG4gICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICBtYXRjaGVkUGFnZSA9IHRydWVcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV0IGZpbmlzaGVkID0gZmFsc2VcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJld3JpdGVzLmJlZm9yZUZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gd2UgZG9uJ3QgZW5kIGFmdGVyIG1hdGNoIGluIGJlZm9yZUZpbGVzIHRvIGFsbG93XG4gICAgLy8gY29udGludWluZyB0aHJvdWdoIGFsbCBiZWZvcmVGaWxlcyByZXdyaXRlc1xuICAgIGhhbmRsZVJld3JpdGUocmV3cml0ZXMuYmVmb3JlRmlsZXNbaV0pXG4gIH1cbiAgbWF0Y2hlZFBhZ2UgPSBwYWdlcy5pbmNsdWRlcyhmc1BhdGhuYW1lKVxuXG4gIGlmICghbWF0Y2hlZFBhZ2UpIHtcbiAgICBpZiAoIWZpbmlzaGVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJld3JpdGVzLmFmdGVyRmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhhbmRsZVJld3JpdGUocmV3cml0ZXMuYWZ0ZXJGaWxlc1tpXSkpIHtcbiAgICAgICAgICBmaW5pc2hlZCA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZHluYW1pYyByb3V0ZSBiZWZvcmUgcHJvY2Vzc2luZyBmYWxsYmFjayByZXdyaXRlc1xuICAgIGlmICghZmluaXNoZWQpIHtcbiAgICAgIHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGZzUGF0aG5hbWUpXG4gICAgICBtYXRjaGVkUGFnZSA9IHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZilcbiAgICAgIGZpbmlzaGVkID0gbWF0Y2hlZFBhZ2VcbiAgICB9XG5cbiAgICBpZiAoIWZpbmlzaGVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJld3JpdGVzLmZhbGxiYWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoYW5kbGVSZXdyaXRlKHJld3JpdGVzLmZhbGxiYWNrW2ldKSkge1xuICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFzUGF0aCxcbiAgICBwYXJzZWRBcyxcbiAgICBtYXRjaGVkUGFnZSxcbiAgICByZXNvbHZlZEhyZWYsXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IFByZXZpZXdEYXRhIH0gZnJvbSAnbmV4dC90eXBlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IChzdHJpbmcgfCBudW1iZXIpW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBsb2NhbGVcbiAgICovXG4gIGxvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogQWxsIGNvbmZpZ3VyZWQgbG9jYWxlc1xuICAgKi9cbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBUaGUgY29uZmlndXJlZCBkZWZhdWx0IGxvY2FsZVxuICAgKi9cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgYWZ0ZXJJbnRlcmFjdGl2ZT86IHN0cmluZ1tdOyBiZWZvcmVJbnRlcmFjdGl2ZT86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nPzogYm9vbGVhblxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmV4cG9ydCBjb25zdCBSZXNldENTUyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICA6OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIGh0bWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG4gIH1cblxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG5cbiAgKiB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuICAqOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgaHRtbCxcbiAgaHRtbCBhLFxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2LFxuICBhLFxuICBwLFxuICBsaSxcbiAgZGwsXG4gIHRoLFxuICBkdCxcbiAgaW5wdXQsXG4gIHRleHRhcmVhLFxuICBzcGFuLFxuICBkaXYge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMDQpO1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLyogTW9kYWwgZGVmYXVsdCBzdHlsZSAqL1xuICBidXR0b24ubW9kYWxDbG9zZUJ0biB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9ICFpbXBvcnRhbnQ7XG4gICAgJi5hbHQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnknLCAnIzEwYWM4NCcpfSAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMzhweCByZ2JhKDE2LCAxNzIsIDEzMiwgMC41KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAucmV1c2VNb2RhbEhvbGRlciB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAmLnNlYXJjaC1tb2RhbCxcbiAgICAmLnZpZGVvLW1vZGFsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NikgIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIC5pbm5lclJuZENvbXBvbmVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBpZnJhbWUge1xuICAgICAgICAgIG1heC13aWR0aDogNzAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5kZW1vX3N3aXRjaGVyX21vZGFsIHtcbiAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMzAsIDc3LCAwLjgpICFpbXBvcnRhbnQ7XG4gICAgICAuaW5uZXJSbmRDb21wb25lbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi52aWRlby1tb2RhbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaW5uZXJSbmRDb21wb25lbnQge1xuICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAucmV1c2VNb2RhbENsb3NlQnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yZXVzZU1vZGFsT3ZlcmxheSxcbiAgLnJldXNlTW9kYWxQYXJlbnRXcmFwcGVye1xuICAgIHotaW5kZXg6IDk5OTk5IWltcG9ydGFudDtcbiAgfVxuXG4gIC5yZXVzZU1vZGFsSG9sZGVyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgJi5kZW1vX3N3aXRjaGVyX21vZGFsIHtcbiAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMzAsIDc3LCAwLjkpICFpbXBvcnRhbnQ7XG4gICAgICAuaW5uZXJSbmRDb21wb25lbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidXR0b24ubW9kYWxDbG9zZUJ0biB7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTk5OTkxICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMzRweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgc3Bhbi5idG4taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYuYWx0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgei1pbmRleDogOTk5OTk5ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlICFpbXBvcnRhbnQ7XG4gICAgICB0b3A6IDI1cHggIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtaW4td2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcblxuICAgICAgc3Bhbi5idG4taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC44OCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYWRnZS1mMGYwZWEwMmI3ZWI2MDJlNDcwMTkwN2I1MTExMjYxOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVGt1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0NqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJS0NTQjJhV1YzUW05NFBTSXdJREFnTXpFdU1ERXlJRE14TGpBeE1pSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ016RXVNREV5SURNeExqQXhNanNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnbzhaejRLQ1R4blBnb0pDVHh3WVhSb0lHWnBiR3c5SWlNd1pqSXhNemNpSUdROUlrMHlOUzR4TURrc01qRXVOVEZqTFRBdU1USXpMREF0TUM0eU5EWXRNQzR3TkRVdE1DNHpOREl0TUM0eE16WnNMVFV1TnpVMExUVXVNems0WXkwd0xqSXdNUzB3TGpFNE9DMHdMakl4TVMwd0xqVXdOUzB3TGpBeU1pMHdMamN3TmdvSkNRbGpNQzR4T0RrdE1DNHlNRE1zTUM0MU1EUXRNQzR5TVRJc01DNDNNRGN0TUM0d01qSnNOUzQzTlRRc05TNHpPVGhqTUM0eU1ERXNNQzR4T0Rnc01DNHlNVEVzTUM0MU1EVXNNQzR3TWpJc01DNDNNRFpETWpVdU16YzFMREl4TGpRMU55d3lOUzR5TkRNc01qRXVOVEVzTWpVdU1UQTVMREl4TGpVeGVnb0pDUWtpTHo0S0NRazhjR0YwYUNCbWFXeHNQU0lqTUdZeU1UTTNJaUJrUFNKTk5TNDVNRElzTWpFdU5URmpMVEF1TVRNekxEQXRNQzR5TmpZdE1DNHdOVE10TUM0ek5qVXRNQzR4TlRoakxUQXVNVGc1TFRBdU1qQXhMVEF1TVRjNUxUQXVOVEU0TERBdU1ESXlMVEF1TnpBMmJEVXVOelUyTFRVdU16azRDZ2tKQ1dNd0xqSXdNaTB3TGpFNE9Dd3dMalV4T1Mwd0xqRTRMREF1TnpBM0xEQXVNREl5WXpBdU1UZzVMREF1TWpBeExEQXVNVGM1TERBdU5URTRMVEF1TURJeUxEQXVOekEyYkMwMUxqYzFOaXcxTGpNNU9FTTJMakUwT0N3eU1TNDBOalVzTmk0d01qVXNNakV1TlRFc05TNDVNRElzTWpFdU5URjZJaTgrQ2drOEwyYytDZ2s4Y0dGMGFDQm1hV3hzUFNJak1HWXlNVE0zSWlBZ1pEMGlUVEk0TGpVeE1pd3lOaTQxTWpsSU1pNDFZeTB4TGpNM09Dd3dMVEl1TlMweExqRXlNUzB5TGpVdE1pNDFWall1T1RneVl6QXRNUzR6Tnprc01TNHhNakl0TWk0MUxESXVOUzB5TGpWb01qWXVNREV5WXpFdU16YzRMREFzTWk0MUxERXVNVEl4TERJdU5Td3lMalYyTVRjdU1EUTNDZ2tKUXpNeExqQXhNaXd5TlM0ME1EZ3NNamt1T0Rrc01qWXVOVEk1TERJNExqVXhNaXd5Tmk0MU1qbDZJRTB5TGpVc05TNDBPREpqTFRBdU9ESTNMREF0TVM0MUxEQXVOamN6TFRFdU5Td3hMalYyTVRjdU1EUTNZekFzTUM0NE1qY3NNQzQyTnpNc01TNDFMREV1TlN3eExqVm9Nall1TURFeUNna0pZekF1T0RJM0xEQXNNUzQxTFRBdU5qY3pMREV1TlMweExqVldOaTQ1T0RKak1DMHdMamd5Tnkwd0xqWTNNeTB4TGpVdE1TNDFMVEV1TlVneUxqVjZJaTgrQ2drOGNHRjBhQ0JtYVd4c1BTSWpNR1l5TVRNM0lpQWdaRDBpVFRFMUxqVXdOaXd4T0M0d01UaGpMVEF1TmpZMUxEQXRNUzR6TXkwd0xqSXlNUzB4TGpnek5pMHdMalkyTWt3d0xqZ3pMRFl1TVRVMVF6QXVOakl5TERVdU9UYzBMREF1Tml3MUxqWTFPQ3d3TGpjNE1TdzFMalEwT1FvSkNXTXdMakU0TXkwd0xqSXdPQ3d3TGpRNU9DMHdMakl5Tnl3d0xqY3dOaTB3TGpBME9Hd3hNaTQ0TkN3eE1TNHlZekF1TmpNNUxEQXVOVFUzTERFdU56RTVMREF1TlRVM0xESXVNelUzTERCTU1qa3VOVEE0TERVdU5ERTVDZ2tKWXpBdU1qQTNMVEF1TVRneExEQXVOVEl5TFRBdU1UWXhMREF1TnpBMkxEQXVNRFE0WXpBdU1UZ3hMREF1TWpBNUxEQXVNVFlzTUM0MU1qUXRNQzR3TkRnc01DNDNNRFpNTVRjdU16UXlMREUzTGpNMU5Rb0pDVU14Tmk0NE16VXNNVGN1TnprM0xERTJMakUzTVN3eE9DNHdNVGdzTVRVdU5UQTJMREU0TGpBeE9Ib2lMejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhMM04yWno0S1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZNQUFBQUdDQVlBQUFDLzhhSkVBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRlVTVVJCVkhnQjdWVGRUY013RUw2TFdvazN3Z1JraEl5UUVmcklBN05VR1FGMkFJa3RnQTA2Z3RuQWZlQUo1T04rYk1laERTS0lTcTNVVDdGT3NlOHVsKysrTThJUmdmcFZEWERCcTRvTGVHRU5WYWlCc0ZZbnBPc2NnQmg5SkJpYlBSa2JtQTEwWnNNOXJoL3ZZQVlXY0FCUWY5UEU5R0xIaENReUVPMk1FaUZVVDJRVFozME1PRDR5K0xpRWJMRU9BbTNadnNhUURUdjc3QjBxcDNZWlBId0VQLzZlMXN4NDM4Qk00TlRCcmtxd0tRaTVCQ0VnS1dOUVJVa0tGNGsrL3h5eEZRSUpPamhLUkVWYXZZbGdyM1dyeGEyZWhZcmZ5WHhCR2hFODlrL09RdnZiamludFZER0lyU25sTCtPUkNwTFlOQ3FLSDFTM0Y5YUVuRElWUHVGTDVPRy9VRjRiMzdGempWRHA2M0g5Y0xVQURDdFduakRmOG1aYnpzNHZLM0JtNUtjNWx1akZMTDdGL2RoTkxhRG8rcWZMR1dKblR4SERCQmRqbmplcjViTVNRR1IzaHBCQ1NXbEMyRmphWnd6NEFsUGNsRWVzZndQeUFBQUFBRWxGVGtTdVFtQ0NcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01UZ3VNUzR4TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlRMkZ3WVY4eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lLQ1NCMmFXVjNRbTk0UFNJd0lEQWdNakF5TGpVNU1pQXlNREl1TlRreUlpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU1ESXVOVGt5SURJd01pNDFPVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQR2MrQ2drOFp6NEtDUWs4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qTURFd01EQXlPeUlnWkQwaVRURTVPQzR3TkRnc01UWXdMakV3Tld3dE16RXVNamcyTFRNeExqSTVZeTAyTGpJek1TMDJMakl3TmkweE5pNDFOVEl0Tmk0d01UWXRNak11TURBeExEQXVORE16YkMweE5TNDNOakVzTVRVdU56WXhDZ2tKQ1dNdE1DNDVPVFV0TUM0MU5URXRNaTR3TWpZdE1TNHhNalF0TXk0eE1TMHhMamN6TW1NdE9TNDVOVE10TlM0MU1UVXRNak11TlRjM0xURXpMakEzTkMwek55NDVNVFF0TWpjdU5ESXhRemN5TGpVNU9Td3hNREV1TkRnc05qVXVNRE1zT0RjdU9ETTBMRFU1TGpVc056Y3VPRGMwQ2drSkNXTXRNQzQxT0RjdE1TNHdOVFl0TVM0eE5EVXRNaTR3TnpJdE1TNDJPVFl0TXk0d016aHNNVEF1TlRjNUxURXdMalUyTld3MUxqSXROUzR5TURkak5pNDBOaTAyTGpRMkxEWXVOak01TFRFMkxqYzNPQ3d3TGpReE9TMHlNeTR3TURGTU5ESXVOekUxTERRdU56WTVDZ2tKQ1dNdE5pNHlNVFl0Tmk0eU1UWXRNVFl1TlRReExUWXVNREkzTFRJekxqQXdNU3d3TGpRek0yd3RPQzQ0TVRnc09DNDROamhzTUM0eU5ETXNNQzR5TkdNdE1pNDVOVFlzTXk0M056SXROUzQwTWprc09DNHhNalF0Tnk0eU5qVXNNVEl1T0RFMkNna0pDV010TVM0Mk9UWXNOQzQwTmpZdE1pNDNOVElzT0M0M01qa3RNeTR5TXpVc01USXVPVGs0WXkwMExqRXpMRE0wTGpJMUxERXhMalV5TERZMUxqVTFMRFV6TGprNU5Dd3hNRGd1TURJNFl6VTRMamN4TVN3MU9DNDNNRGNzTVRBMkxqQXlOeXcxTkM0eU56TXNNVEE0TGpBMk55dzFOQzR3TlRVS0NRa0pZelF1TkRRNUxUQXVOVE1zT0M0M01EY3RNUzQxT1RNc01UTXVNRE00TFRNdU1qYzFZelF1TmpVeUxURXVPREU0TERrdU1EQXhMVFF1TWpnMExERXlMamMyT1MwM0xqSXpNMnd3TGpFNU15d3dMakUyT0d3NExqa3pNeTA0TGpjME53b0pDUWxETWpBMExqQTNPU3d4TnpZdU5qWXhMREl3TkM0eU5qVXNNVFkyTGpNME15d3hPVGd1TURRNExERTJNQzR4TURWNklFMHhPVEF1TmpnekxERTNOaTR4TmpSc0xUTXVPVE0zTERNdU9UTnNMVEV1TlRZNExERXVOVEEzQ2drSkNXTXRNaTQwTmprc01pNHpPRGN0Tmk0M05ETXNOUzQzTkMweE1pNDVPRFFzT0M0eE9ERmpMVE11TlRRekxERXVNelkwTFRjdU1ETTJMREl1TWpRdE1UQXVOVGtzTWk0Mk5qTmpMVEF1TkRRM0xEQXVNRFF6TFRRMExqazFMRE11T0RRdE1UQXdMakF5T1MwMU1TNHlNelVLQ1FrSlF6RTBMamMwTXl3NU5DNHpPQ3czTGpJek9DdzJOeTR6T1RVc01UQXVNemcwTERReExqSTFPV013TGpNNU5DMHpMalEyTkN3eExqSTJNeTAyTGprMUxESXVOalV5TFRFd0xqVTVNMk15TGpRMk1pMDJMakkzTnl3MUxqZ3hNaTB4TUM0MU5EY3NPQzR4T0RFdE1UTXVNREpzTlM0ME5ETXROUzQwT1RjS0NRa0pZekl1TmpJekxUSXVOak1zTmk0M01UUXRNaTQ0TXpFc09TNHhNVEl0TUM0ME16TnNNekV1TWpnMkxETXhMakk0Tm1NeUxqTTVOQ3d5TGpRd01Td3lMakl3TlN3MkxqUTVNaTB3TGpReU1pdzVMakV6VERRMUxqVXdOeXczTXk0eU5Hd3hMamsxTERNdU1qZ3lDZ2tKQ1dNeExqQTROQ3d4TGpneU9Td3lMakl6TERNdU9EYzVMRE11TkRVMExEWXVNVEEyWXpVdU9ERXlMREV3TGpRNE1pd3hNeTQzTmpRc01qUXVPRE1zTWprdU1USXhMRFF3TGpFM00yTXhOUzR6TVRjc01UVXVNekkxTERJNUxqWTBOQ3d5TXk0eU55dzBNQzR3T1RRc01qa3VNRFkzQ2drSkNXTXlMakkxT0N3eExqSTBPU3cwTGpNeUxESXVNems0TERZdU1UY3NNeTQxYkRNdU1qZzVMREV1T1RWc01qRXVNVEUxTFRJeExqRXlNbU15TGpZek5DMHlMall5TXl3MkxqY3pPUzB5TGpneE55dzVMakV6Tnkwd0xqUXlObXd6TVM0eU56SXNNekV1TWpjNUNna0pDVU14T1RNdU5Td3hOamt1TkRRMkxERTVNeTR6TVN3eE56TXVOVE0zTERFNU1DNDJPRE1zTVRjMkxqRTJOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhaejRLUEM5blBnbzhMM04yWno0S1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSGlTVVJCVkhnQnBaVmZUdHRBRU1abnhxbFVxYXFVRzlTUklGV2ZDQWNvVFM3UWVHOEFOd2duQ0p5QTVnUzBKM0JTRGxDWEhxQitRL3lSWW03Z0I1Q1FrR2VZTVNiRXhpRVF2amVQMTcrWjNmbDJqRkNqN3Yrd21YMkFnTkRyZzBnSEVQemlWUXlBQ1VzMitkZDJQK3UreFNldzB6QVFqdzVCb0FuUENTRmg1djBxbU9ZZnRzNS9Id2hSdUJSbUV2QUo2WERyL0doWXpqT0RIUTBSZUE5V2tBRCtPRjcvdmpzRGRzL0NiZEZzOEFZaHM0cyt1M0VPL0hZeG1kb1dYZ1VRSGdsNW43UnBRUkZLOFlwYlpOV3RBUHNWdGQwQU9adk1oZStkSVlSOWVKMWloVzFySVIxdDRFRTVrUUlCMFg4eFNpRFJiZlc2SjZGZjV3YjBhSU9Bb1ZQT3dpUHQ5bjR0TE9NZXZJZW12S00vdGNka1ZxckdHRDJKMXQyZWdqY05Vb1RUSEhZRHFUVHl5cDdDQ3BGMktTbFZDREl3ZytzNXhUbkVLaFB1UlY5Y0loODlzMVpuRVV6WHhnMUZ4dFdNQmxVckJYREx2Yi90ZnN0aWxtVE9JdlU4NGNzR3Nrd0VNYWpKNXR0WmZUME5kNUVhRzNxdUExZ2lRaGhqZHhvMkphUHBpKzd2cytWQllydWhxT1ZTemI0RGI5U0RNL0l1UjJ0dUxNZ2pXRkVHaTRveE5yUE44WnBlcFRyL0xZT3BiODFtai9DSzhza0ROSnliMG91VTZvVFpzUWxUU3JCb2RRNG0rd1d3cjh2dXZXZWVKWXJ6b1hBTjQyalRwZFh2N2dBTWt0K1RxWWZhcUFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jYXItYWNjaWRlbnQtcmVwb3J0LWM3YjY2ZTUzYjE4NWQ5YTQxZGJhN2ZiNGJkZTdjNzA5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLWNlZmEyZTQ3N2U2ZTYwYWQ2MTg5M2Q4YzQ1NzM5NzA1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRBd0lpQm9aV2xuYUhROUlqTXlJaUIyYVdWM1FtOTRQU0l3SURBZ01UQXdJRE15SWlCNGJXeHVjejBpYUhSMGNEb21JM2d5UmpzbUkzZ3lSanQzZDNjdWR6TXViM0puSmlONE1rWTdNakF3TUNZamVESkdPM04yWnlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK1BIQmhkR2dnWm1sc2JEMGlJekF3TXpBNE55SWdaRDBpVFNBeE1pQTBMamt4TnlCTUlEUXVNaUEwTGpreE55QkRJRE11TnlBMExqa3hOeUF6TGpJZ05TNHpNVGNnTXk0eElEVXVPREUzSUV3Z01DQXlOUzQ0TVRjZ1F5QXRNQzR4SURJMkxqSXhOeUF3TGpJZ01qWXVOVEUzSURBdU5pQXlOaTQxTVRjZ1RDQTBMak1nTWpZdU5URTNJRU1nTkM0NElESTJMalV4TnlBMUxqTWdNall1TVRFM0lEVXVOQ0F5TlM0Mk1UY2dUQ0EyTGpJZ01qQXVNakUzSUVNZ05pNHpJREU1TGpjeE55QTJMamNnTVRrdU16RTNJRGN1TXlBeE9TNHpNVGNnVENBNUxqZ2dNVGt1TXpFM0lFTWdNVFF1T1NBeE9TNHpNVGNnTVRjdU9TQXhOaTQ0TVRjZ01UZ3VOeUF4TVM0NU1UY2dReUF4T1NBNUxqZ3hOeUF4T0M0M0lEZ3VNVEUzSURFM0xqY2dOaTQ1TVRjZ1F5QXhOaTQySURVdU5qRTNJREUwTGpZZ05DNDVNVGNnTVRJZ05DNDVNVGNnV2lCTklERXlMamtnTVRJdU1qRTNJRU1nTVRJdU5TQXhOUzR3TVRjZ01UQXVNeUF4TlM0d01UY2dPQzR6SURFMUxqQXhOeUJNSURjdU1TQXhOUzR3TVRjZ1RDQTNMamtnT1M0NE1UY2dReUEzTGprZ09TNDFNVGNnT0M0eUlEa3VNekUzSURndU5TQTVMak14TnlCTUlEa2dPUzR6TVRjZ1F5QXhNQzQwSURrdU16RTNJREV4TGpjZ09TNHpNVGNnTVRJdU5DQXhNQzR4TVRjZ1F5QXhNaTQ1SURFd0xqVXhOeUF4TXk0eElERXhMakl4TnlBeE1pNDVJREV5TGpJeE55QmFJajQ4TDNCaGRHZytQSEJoZEdnZ1ptbHNiRDBpSXpBd016QTROeUlnWkQwaVRTQXpOUzR5SURFeUxqRXhOeUJNSURNeExqVWdNVEl1TVRFM0lFTWdNekV1TWlBeE1pNHhNVGNnTXpBdU9TQXhNaTR6TVRjZ016QXVPU0F4TWk0Mk1UY2dUQ0F6TUM0M0lERXpMall4TnlCTUlETXdMalFnTVRNdU1qRTNJRU1nTWprdU5pQXhNaTR3TVRjZ01qY3VPQ0F4TVM0Mk1UY2dNallnTVRFdU5qRTNJRU1nTWpFdU9TQXhNUzQyTVRjZ01UZ3VOQ0F4TkM0M01UY2dNVGN1TnlBeE9TNHhNVGNnUXlBeE55NHpJREl4TGpNeE55QXhOeTQ0SURJekxqUXhOeUF4T1M0eElESTBMamd4TnlCRElESXdMaklnTWpZdU1URTNJREl4TGprZ01qWXVOekUzSURJekxqZ2dNall1TnpFM0lFTWdNamN1TVNBeU5pNDNNVGNnTWprZ01qUXVOakUzSURJNUlESTBMall4TnlCTUlESTRMamdnTWpVdU5qRTNJRU1nTWpndU55QXlOaTR3TVRjZ01qa2dNall1TkRFM0lESTVMalFnTWpZdU5ERTNJRXdnTXpJdU9DQXlOaTQwTVRjZ1F5QXpNeTR6SURJMkxqUXhOeUF6TXk0NElESTJMakF4TnlBek15NDVJREkxTGpVeE55Qk1JRE0xTGprZ01USXVOekUzSUVNZ016WWdNVEl1TlRFM0lETTFMallnTVRJdU1URTNJRE0xTGpJZ01USXVNVEUzSUZvZ1RTQXpNQzR4SURFNUxqTXhOeUJESURJNUxqY2dNakV1TkRFM0lESTRMakVnTWpJdU9URTNJREkxTGprZ01qSXVPVEUzSUVNZ01qUXVPQ0F5TWk0NU1UY2dNalFnTWpJdU5qRTNJREl6TGpRZ01qRXVPVEUzSUVNZ01qSXVPQ0F5TVM0eU1UY2dNakl1TmlBeU1DNHpNVGNnTWpJdU9DQXhPUzR6TVRjZ1F5QXlNeTR4SURFM0xqSXhOeUF5TkM0NUlERTFMamN4TnlBeU55QXhOUzQzTVRjZ1F5QXlPQzR4SURFMUxqY3hOeUF5T0M0NUlERTJMakV4TnlBeU9TNDFJREUyTGpjeE55QkRJRE13SURFM0xqUXhOeUF6TUM0eUlERTRMak14TnlBek1DNHhJREU1TGpNeE55QmFJajQ4TDNCaGRHZytQSEJoZEdnZ1ptbHNiRDBpSXpBd016QTROeUlnWkQwaVRTQTFOUzR4SURFeUxqRXhOeUJNSURVeExqUWdNVEl1TVRFM0lFTWdOVEVnTVRJdU1URTNJRFV3TGpjZ01USXVNekUzSURVd0xqVWdNVEl1TmpFM0lFd2dORFV1TXlBeU1DNHlNVGNnVENBME15NHhJREV5TGpreE55QkRJRFF6SURFeUxqUXhOeUEwTWk0MUlERXlMakV4TnlBME1pNHhJREV5TGpFeE55Qk1JRE00TGpRZ01USXVNVEUzSUVNZ016Z2dNVEl1TVRFM0lETTNMallnTVRJdU5URTNJRE0zTGpnZ01UTXVNREUzSUV3Z05ERXVPU0F5TlM0eE1UY2dUQ0F6T0NBek1DNDFNVGNnUXlBek55NDNJRE13TGpreE55QXpPQ0F6TVM0MU1UY2dNemd1TlNBek1TNDFNVGNnVENBME1pNHlJRE14TGpVeE55QkRJRFF5TGpZZ016RXVOVEUzSURReUxqa2dNekV1TXpFM0lEUXpMakVnTXpFdU1ERTNJRXdnTlRVdU5pQXhNeTR3TVRjZ1F5QTFOUzQ1SURFeUxqY3hOeUExTlM0MklERXlMakV4TnlBMU5TNHhJREV5TGpFeE55QmFJajQ4TDNCaGRHZytQSEJoZEdnZ1ptbHNiRDBpSXpBd09XTmtaU0lnWkQwaVRTQTJOeTQxSURRdU9URTNJRXdnTlRrdU55QTBMamt4TnlCRElEVTVMaklnTkM0NU1UY2dOVGd1TnlBMUxqTXhOeUExT0M0MklEVXVPREUzSUV3Z05UVXVOU0F5TlM0M01UY2dReUExTlM0MElESTJMakV4TnlBMU5TNDNJREkyTGpReE55QTFOaTR4SURJMkxqUXhOeUJNSURZd0xqRWdNall1TkRFM0lFTWdOakF1TlNBeU5pNDBNVGNnTmpBdU9DQXlOaTR4TVRjZ05qQXVPQ0F5TlM0NE1UY2dUQ0EyTVM0M0lESXdMakV4TnlCRElEWXhMamdnTVRrdU5qRTNJRFl5TGpJZ01Ua3VNakUzSURZeUxqZ2dNVGt1TWpFM0lFd2dOalV1TXlBeE9TNHlNVGNnUXlBM01DNDBJREU1TGpJeE55QTNNeTQwSURFMkxqY3hOeUEzTkM0eUlERXhMamd4TnlCRElEYzBMalVnT1M0M01UY2dOelF1TWlBNExqQXhOeUEzTXk0eUlEWXVPREUzSUVNZ056SWdOUzQyTVRjZ056QXVNU0EwTGpreE55QTJOeTQxSURRdU9URTNJRm9nVFNBMk9DNDBJREV5TGpJeE55QkRJRFk0SURFMUxqQXhOeUEyTlM0NElERTFMakF4TnlBMk15NDRJREUxTGpBeE55Qk1JRFl5TGpZZ01UVXVNREUzSUV3Z05qTXVOQ0E1TGpneE55QkRJRFl6TGpRZ09TNDFNVGNnTmpNdU55QTVMak14TnlBMk5DQTVMak14TnlCTUlEWTBMalVnT1M0ek1UY2dReUEyTlM0NUlEa3VNekUzSURZM0xqSWdPUzR6TVRjZ05qY3VPU0F4TUM0eE1UY2dReUEyT0M0MElERXdMalV4TnlBMk9DNDFJREV4TGpJeE55QTJPQzQwSURFeUxqSXhOeUJhSWo0OEwzQmhkR2crUEhCaGRHZ2dabWxzYkQwaUl6QXdPV05rWlNJZ1pEMGlUU0E1TUM0M0lERXlMakV4TnlCTUlEZzNJREV5TGpFeE55QkRJRGcyTGpjZ01USXVNVEUzSURnMkxqUWdNVEl1TXpFM0lEZzJMalFnTVRJdU5qRTNJRXdnT0RZdU1pQXhNeTQyTVRjZ1RDQTROUzQ1SURFekxqSXhOeUJESURnMUxqRWdNVEl1TURFM0lEZ3pMak1nTVRFdU5qRTNJRGd4TGpVZ01URXVOakUzSUVNZ056Y3VOQ0F4TVM0Mk1UY2dOek11T1NBeE5DNDNNVGNnTnpNdU1pQXhPUzR4TVRjZ1F5QTNNaTQ0SURJeExqTXhOeUEzTXk0eklESXpMalF4TnlBM05DNDJJREkwTGpneE55QkRJRGMxTGpjZ01qWXVNVEUzSURjM0xqUWdNall1TnpFM0lEYzVMak1nTWpZdU56RTNJRU1nT0RJdU5pQXlOaTQzTVRjZ09EUXVOU0F5TkM0Mk1UY2dPRFF1TlNBeU5DNDJNVGNnVENBNE5DNHpJREkxTGpZeE55QkRJRGcwTGpJZ01qWXVNREUzSURnMExqVWdNall1TkRFM0lEZzBMamtnTWpZdU5ERTNJRXdnT0RndU15QXlOaTQwTVRjZ1F5QTRPQzQ0SURJMkxqUXhOeUE0T1M0eklESTJMakF4TnlBNE9TNDBJREkxTGpVeE55Qk1JRGt4TGpRZ01USXVOekUzSUVNZ09URXVOQ0F4TWk0MU1UY2dPVEV1TVNBeE1pNHhNVGNnT1RBdU55QXhNaTR4TVRjZ1dpQk5JRGcxTGpVZ01Ua3VNekUzSUVNZ09EVXVNU0F5TVM0ME1UY2dPRE11TlNBeU1pNDVNVGNnT0RFdU15QXlNaTQ1TVRjZ1F5QTRNQzR5SURJeUxqa3hOeUEzT1M0MElESXlMall4TnlBM09DNDRJREl4TGpreE55QkRJRGM0TGpJZ01qRXVNakUzSURjNElESXdMak14TnlBM09DNHlJREU1TGpNeE55QkRJRGM0TGpVZ01UY3VNakUzSURnd0xqTWdNVFV1TnpFM0lEZ3lMalFnTVRVdU56RTNJRU1nT0RNdU5TQXhOUzQzTVRjZ09EUXVNeUF4Tmk0eE1UY2dPRFF1T1NBeE5pNDNNVGNnUXlBNE5TNDFJREUzTGpReE55QTROUzQzSURFNExqTXhOeUE0TlM0MUlERTVMak14TnlCYUlqNDhMM0JoZEdnK1BIQmhkR2dnWm1sc2JEMGlJekF3T1dOa1pTSWdaRDBpVFNBNU5TNHhJRFV1TkRFM0lFd2dPVEV1T1NBeU5TNDNNVGNnUXlBNU1TNDRJREkyTGpFeE55QTVNaTR4SURJMkxqUXhOeUE1TWk0MUlESTJMalF4TnlCTUlEazFMamNnTWpZdU5ERTNJRU1nT1RZdU1pQXlOaTQwTVRjZ09UWXVOeUF5Tmk0d01UY2dPVFl1T0NBeU5TNDFNVGNnVENBeE1EQWdOUzQyTVRjZ1F5QXhNREF1TVNBMUxqSXhOeUE1T1M0NElEUXVPVEUzSURrNUxqUWdOQzQ1TVRjZ1RDQTVOUzQ0SURRdU9URTNJRU1nT1RVdU5DQTBMamt4TnlBNU5TNHlJRFV1TVRFM0lEazFMakVnTlM0ME1UY2dXaUkrUEM5d1lYUm9Qand2YzNablBnPT1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmbGV4V3JhcCxcbiAgZmxleERpcmVjdGlvbixcbiAgYWxpZ25JdGVtcyxcbiAganVzdGlmeUNvbnRlbnQsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmNvbnN0IEJveFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKFxuICBiYXNlLFxuICB0aGVtZWQoJ0JveCcpLFxuICAocHJvcHMpID0+XG4gICAgcHJvcHMuZmxleEJveCAmJlxuICAgIGNzcyhcbiAgICAgIHsgZGlzcGxheTogJ2ZsZXgnIH0sXG4gICAgICBmbGV4V3JhcCxcbiAgICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgICBhbGlnbkl0ZW1zLFxuICAgICAganVzdGlmeUNvbnRlbnQsXG4gICAgICB0aGVtZWQoJ0ZsZXhCb3gnKVxuICAgIClcbik7XG5cbmNvbnN0IEJveCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxCb3hXcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQm94V3JhcHBlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgLyoqIFVzaW5nIHRoaXMgcHJvcHMgd2UgY2FuIGNvbnZlcnQgb3VyIEJveCBDb21wb25lbnQgdG8gYSBGbGV4IENvbnRhaW5lciBvciBDb21wb25lbnQgKi9cbiAgZmxleEJveDogUHJvcFR5cGVzLmJvb2wsXG4gIGFzOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdkaXYnLFxuICAgICdhcnRpY2xlJyxcbiAgICAnc2VjdGlvbicsXG4gICAgJ2FkZHJlc3MnLFxuICAgICdoZWFkZXInLFxuICAgICdmb290ZXInLFxuICAgICduYXYnLFxuICAgICdtYWluJyxcbiAgXSksXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZm9udFNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGZsZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGFsaWduU2VsZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJUb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJSaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlckJvdHRvbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlckxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJDb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG59O1xuXG5Cb3guZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2RpdicsXG59O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmNvbnN0IENoZWNrQm94U3R5bGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgLyogU3dpdGNoIGxhYmVsIGRlZmF1bHQgc3R5bGUgKi9cbiAgLnJldXNlY29yZV9fZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dENvbG9yJywgJyM0ODQ4NDgnKX07XG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuNCcsICcxNicpfXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy40JywgJzUwMCcpfTtcbiAgfVxuXG4gIC8qIFN3aXRjaCBsYWJlbCBzdHlsZSB3aGVuIGxhYmVsUG9zaXRpb24gb24gbGVmdCAqL1xuICAmLmxhYmVsX2xlZnQge1xuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnJldXNlY29yZV9fZmllbGQtbGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWVHZXQoJ3NwYWNlLjMnLCAnMTAnKX1weDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBTd2l0Y2ggbGFiZWwgc3R5bGUgd2hlbiBsYWJlbFBvc2l0aW9uIG9uIHJpZ2h0ICovXG4gICYubGFiZWxfcmlnaHQge1xuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAucmV1c2Vjb3JlX19maWVsZC1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lR2V0KCdzcGFjZS4zJywgJzEwJyl9cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogQ2hlY2tib3ggZGVmYXVsdCBzdHlsZSAqL1xuICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAmLmNoZWNrYm94IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAmOmNoZWNrZWQgKyBkaXYge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5JywgJyMwMjg0ODknKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5JywgJyMwMjg0ODknKX07XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICsgZGl2IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuYm9yZGVyQ29sb3InLCAnI2RhZGFkYScpfTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLndoaXRlJywgJyNmZmZmZmYnKX07XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB2aXNpYmlsaXR5O1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIHN1cHBvcnQgYmFzZSBjb21wb25lbnQgcHJvcHMgKi9cbiAgJHtiYXNlfVxuYDtcblxuLy8gcHJvcCB0eXBlcyBjYW4gYWxzbyBiZSBhZGRlZCBmcm9tIHRoZSBzdHlsZSBmdW5jdGlvbnNcbkNoZWNrQm94U3R5bGUucHJvcFR5cGVzID0ge307XG5cbkNoZWNrQm94U3R5bGUuZGlzcGxheU5hbWUgPSAnQ2hlY2tCb3hTdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94U3R5bGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi4vdXNlVG9nZ2xlJztcbmltcG9ydCBDaGVja0JveFN0eWxlIGZyb20gJy4vY2hlY2tib3guc3R5bGUnO1xuXG5jb25zdCBDaGVja0JveCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgaXNDaGVja2VkLFxuICBsYWJlbFRleHQsXG4gIHZhbHVlLFxuICBpZCxcbiAgaHRtbEZvcixcbiAgbGFiZWxQb3NpdGlvbixcbiAgaXNNYXRlcmlhbCxcbiAgZGlzYWJsZWQsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIC8vIHVzZSB0b2dnbGUgaG9va3NcbiAgY29uc3QgW3RvZ2dsZVZhbHVlLCB0b2dnbGVIYW5kbGVyXSA9IHVzZVRvZ2dsZShpc0NoZWNrZWQpO1xuXG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5XG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ3JldXNlY29yZV9fY2hlY2tib3gnXTtcblxuICAvLyBBZGQgbGFiZWwgcG9zaXRpb24gY2xhc3NcbiAgaWYgKGxhYmVsUG9zaXRpb24pIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goYGxhYmVsXyR7bGFiZWxQb3NpdGlvbn1gKTtcbiAgfVxuXG4gIC8vIGlzTWF0ZXJpYWwgcHJvcCBjaGVja2luZ1xuICBpZiAoaXNNYXRlcmlhbCkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaCgnaXMtbWF0ZXJpYWwnKTtcbiAgfVxuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8vIGxhYmVsIGNvbnRyb2xcbiAgY29uc3QgTGFiZWxGaWVsZCA9IGxhYmVsVGV4dCAmJiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicmV1c2Vjb3JlX19maWVsZC1sYWJlbFwiPntsYWJlbFRleHR9PC9zcGFuPlxuICApO1xuXG4gIGNvbnN0IHBvc2l0aW9uID0gbGFiZWxQb3NpdGlvbiB8fCAncmlnaHQnO1xuXG4gIHJldHVybiAoXG4gICAgPENoZWNrQm94U3R5bGUgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0gey4uLnByb3BzfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtodG1sRm9yfT5cbiAgICAgICAge3Bvc2l0aW9uID09PSAnbGVmdCcgfHwgcG9zaXRpb24gPT09ICdyaWdodCcgPyBMYWJlbEZpZWxkIDogJyd9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY2hlY2tlZD17dG9nZ2xlVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiAvPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L0NoZWNrQm94U3R5bGU+XG4gICk7XG59O1xuXG5DaGVja0JveC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIENoZWNrYm94ICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogbGFiZWxUZXh0IG9mIHRoZSBjaGVja2JveCBmaWVsZCAqL1xuICBsYWJlbFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE5vdGU6IGlkIGFuZCBodG1sRm9yIG11c3QgYmUgc2FtZS5cbiAgICovXG4gIGh0bWxGb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKiogU2V0IGNoZWNrYm94IGlkIGluIG51bWJlciB8fCBzdHJpbmcgKi9cbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKiogdmFsdWUgb2YgdGhlIGNoZWNrYm94IGZpZWxkICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBsYWJlbFRleHQgb2YgdGhlIGNoZWNrYm94IGZpZWxkICovXG4gIGxhYmVsUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3JpZ2h0JywgJ2xlZnQnXSksXG5cbiAgLyoqIENoZWNrYm94IHRvZ2dsZSBzdGF0ZSBiYXNlZCBvbiBpc0NoZWNrZWQgcHJvcCAqL1xuICBpc0NoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBkaXNhYmxlZCBvZiB0aGUgY2hlY2tib3ggZmllbGQgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuLyoqIENoZWNrYm94IGRlZmF1bHQgcHJvcHR5cGUgKi9cbkNoZWNrQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNDaGVja2VkOiBmYWxzZSxcbiAgbGFiZWxUZXh0OiAnQ2hlY2tib3ggbGFiZWwnLFxuICBsYWJlbFBvc2l0aW9uOiAncmlnaHQnLFxuICBkaXNhYmxlZDogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2hlY2tCb3g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgZm9udEZhbWlseSxcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxuICBsaW5lSGVpZ2h0LFxuICBsZXR0ZXJTcGFjaW5nLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCB7IGJhc2UsIHRoZW1lZCB9IGZyb20gJy4uL2Jhc2UnO1xuXG5jb25zdCBIZWFkaW5nV3JhcHBlciA9IHN0eWxlZCgncCcpKFxuICBiYXNlLFxuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG4gIHRoZW1lZCgnSGVhZGluZycpXG4pO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPEhlYWRpbmdXcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvSGVhZGluZ1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFzOiBQcm9wVHlwZXMub25lT2YoWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddKSxcbiAgbXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBtYjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmb250V2VpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgdGV4dEFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxldHRlclNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICAuLi5iYXNlLnByb3BUeXBlcyxcbn07XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2gyJyxcbiAgbXQ6IDAsXG4gIG1iOiAnMXJlbScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZCgnaW1nJykoXG4gIHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gIH0sXG4gIGJhc2UsXG4gIHRoZW1lZCgnSW1hZ2UnKVxuKTtcblxuY29uc3QgSW1hZ2UgPSAoeyBzcmMsIGFsdCwgLi4ucHJvcHMgfSkgPT4gKFxuICA8SW1hZ2VXcmFwcGVyIHNyYz17c3JjfSBhbHQ9e2FsdH0gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG5cbkltYWdlLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBtOiAwLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IElucHV0RmllbGQsIHsgRXllQnV0dG9uIH0gZnJvbSAnLi9pbnB1dC5zdHlsZSc7XG5jb25zdCBJbnB1dCA9ICh7XG4gIGxhYmVsLFxuICB2YWx1ZSxcbiAgb25CbHVyLFxuICBvbkZvY3VzLFxuICBvbkNoYW5nZSxcbiAgaW5wdXRUeXBlLFxuICBpc01hdGVyaWFsLFxuICBpY29uLFxuICBpY29uUG9zaXRpb24sXG4gIHBhc3N3b3JkU2hvd0hpZGUsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgLy8gdXNlIHRvZ2dsZSBob29rc1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB0b2dnbGU6IGZhbHNlLFxuICAgIGZvY3VzOiBmYWxzZSxcbiAgICB2YWx1ZTogJycsXG4gIH0pO1xuXG4gIC8vIHRvZ2dsZSBmdW5jdGlvblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICB0b2dnbGU6ICFzdGF0ZS50b2dnbGUsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gYWRkIGZvY3VzIGNsYXNzXG4gIGNvbnN0IGhhbmRsZU9uRm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGZvY3VzOiB0cnVlLFxuICAgIH0pO1xuICAgIG9uRm9jdXMoZXZlbnQpO1xuICB9O1xuXG4gIC8vIHJlbW92ZSBmb2N1cyBjbGFzc1xuICBjb25zdCBoYW5kbGVPbkJsdXIgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBvbkJsdXIoZXZlbnQpO1xuICB9O1xuXG4gIC8vIGhhbmRsZSBpbnB1dCB2YWx1ZVxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIC8vIGdldCBpbnB1dCBmb2N1cyBjbGFzc1xuICBjb25zdCBnZXRJbnB1dEZvY3VzQ2xhc3MgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLmZvY3VzID09PSB0cnVlIHx8IHN0YXRlLnZhbHVlICE9PSAnJykge1xuICAgICAgcmV0dXJuICdpcy1mb2N1cyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgLy8gaW5pdCB2YXJpYWJsZVxuICBsZXQgaW5wdXRFbGVtZW50LCBodG1sRm9yO1xuXG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5XG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ3JldXNlY29yZV9faW5wdXQnXTtcblxuICAvLyBBZGQgaXMtbWF0ZXJpYWwgY2xhc3NcbiAgaWYgKGlzTWF0ZXJpYWwpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goJ2lzLW1hdGVyaWFsJyk7XG4gIH1cblxuICAvLyBBZGQgaWNvbiBwb3NpdGlvbiBjbGFzcyBpZiBpbnB1dCBlbGVtZW50IGhhcyBpY29uXG4gIGlmIChpY29uICYmIGljb25Qb3NpdGlvbikge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChgaWNvbi0ke2ljb25Qb3NpdGlvbn1gKTtcbiAgfVxuXG4gIC8vIEFkZCBuZXcgY2xhc3NcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gaWYgbGFibGUgaXMgbm90IGVtcHR5XG4gIGlmIChsYWJlbCkge1xuICAgIGh0bWxGb3IgPSBsYWJlbC5yZXBsYWNlKC9cXHMrL2csICdfJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIC8vIExhYmVsIHBvc2l0aW9uXG4gIGNvbnN0IExhYmVsUG9zaXRpb24gPSBpc01hdGVyaWFsID09PSB0cnVlID8gJ2JvdHRvbScgOiAndG9wJztcblxuICAvLyBMYWJlbCBmaWVsZFxuICBjb25zdCBMYWJlbEZpZWxkID0gbGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9e2h0bWxGb3J9PntsYWJlbH08L2xhYmVsPjtcblxuICAvLyBJbnB1dCB0eXBlIGNoZWNrXG4gIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgaWQ9e2h0bWxGb3J9XG4gICAgICAgICAgbmFtZT17aHRtbEZvcn1cbiAgICAgICAgICB2YWx1ZT17c3RhdGUudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlT25CbHVyfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZU9uRm9jdXN9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcHBlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgaWQ9e2h0bWxGb3J9XG4gICAgICAgICAgICBuYW1lPXtodG1sRm9yfVxuICAgICAgICAgICAgdHlwZT17c3RhdGUudG9nZ2xlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J31cbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlT25CbHVyfVxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlT25Gb2N1c31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtwYXNzd29yZFNob3dIaWRlICYmIChcbiAgICAgICAgICAgIDxFeWVCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLnRvZ2dsZSA/ICdleWUnIDogJ2V5ZS1jbG9zZWQnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgPC9FeWVCdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXBwZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGlkPXtodG1sRm9yfVxuICAgICAgICAgICAgbmFtZT17aHRtbEZvcn1cbiAgICAgICAgICAgIHR5cGU9e2lucHV0VHlwZX1cbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlT25CbHVyfVxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlT25Gb2N1c31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpY29uICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWljb25cIj57aWNvbn08L3NwYW4+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJbnB1dEZpZWxkXG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzZXMuam9pbignICcpfSAke2dldElucHV0Rm9jdXNDbGFzcygpfWB9XG4gICAgPlxuICAgICAge0xhYmVsUG9zaXRpb24gPT09ICd0b3AnICYmIExhYmVsRmllbGR9XG4gICAgICB7aW5wdXRFbGVtZW50fVxuICAgICAge2lzTWF0ZXJpYWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCIgLz59XG4gICAgICB7TGFiZWxQb3NpdGlvbiA9PT0gJ2JvdHRvbScgJiYgTGFiZWxGaWVsZH1cbiAgICA8L0lucHV0RmllbGQ+XG4gICk7XG59O1xuXG4vKiogSW5vdXQgcHJvcCB0eXBlIGNoZWNraW5nLiAqL1xuSW5wdXQucHJvcFR5cGVzID0ge1xuICAvKiogY2xhc3NOYW1lIG9mIHRoZSBJbnB1dCBjb21wb25lbnQuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogU2V0IGlucHV0IGxhYmVsIHZhbHVlLiAqL1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogVGhlIGlucHV0IHZhbHVlLCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC4gKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZihbJ3N0cmluZycsICdudW1iZXInXSksXG5cbiAgLyoqIE1ha2UgZGVmYXVsdCBpbnB1dCBpbnRvIG1hdGVyaWFsIHN0eWxlIGlucHV0LiAqL1xuICBpc01hdGVyaWFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogUGFzc3dvcmQgc2hvdyBoaWRlIGljb24gYnV0dG9uIHByb3AgWypvbmx5IGZvciBwYXNzd29yZCBmaWVsZF0uICovXG4gIHBhc3N3b3JkU2hvd0hpZGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBTZXQgaW5wdXQgdHlwZSBvZiB0aGUgaW5wdXQgZWxlbWVudC4gRGVmYXVsdCB0eXBlIGlzIHRleHQuICovXG4gIGlucHV0VHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAndGV4dCcsXG4gICAgJ2VtYWlsJyxcbiAgICAncGFzc3dvcmQnLFxuICAgICdudW1iZXInLFxuICAgICd0ZXh0YXJlYScsXG4gIF0pLFxuXG4gIC8qKiBBZGQgaWNvbiBpbiBpbnB1dCBmaWVsZC4gVGhpcyBwcm9wIHdpbGwgbm90IHdvcmsgd2l0aCBwYXNzd29yZFxuICAgKiBhbmQgdGV4dGFyZWEgZmllbGQuXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKiBTZXQgaW5wdXQgZmllbGQgaWNvbiBwb3NpdGlvbi4gRGVmYXVsdCBwb3NpdGlvbiBpcyAnbGVmdCcuICovXG4gIGljb25Qb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYC5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKiBJbm91dCBkZWZhdWx0IHR5cGUuICovXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlucHV0VHlwZTogJ3RleHQnLFxuICBpc01hdGVyaWFsOiBmYWxzZSxcbiAgaWNvblBvc2l0aW9uOiAnbGVmdCcsXG4gIG9uQmx1cjogKCkgPT4ge30sXG4gIG9uRm9jdXM6ICgpID0+IHt9LFxuICBvbkNoYW5nZTogKCkgPT4ge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBJbnB1dEZpZWxkID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC8qIElucHV0IGZpZWxkIHdyYXBwZXIgKi9cbiAgLmZpZWxkLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC8qIElmIGlucHV0IGhhcyBpY29uIHRoZW4gdGhlc2Ugc3R5ZWwgKi9cbiAgJi5pY29uLWxlZnQsXG4gICYuaWNvbi1yaWdodCB7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICA+IC5pbnB1dC1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogV2hlbiBpY29uIHBvc2l0aW9uIGluIGxlZnQgKi9cbiAgJi5pY29uLWxlZnQge1xuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgID4gLmlucHV0LWljb24ge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgIH1cbiAgICAgID4gaW5wdXQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogV2hlbiBpY29uIHBvc2l0aW9uIGluIHJpZ2h0ICovXG4gICYuaWNvbi1yaWdodCB7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgPiAuaW5wdXQtaWNvbiB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgPiBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogTGFiZWwgZGVmYXVsdCBzdHlsZSAqL1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5sYWJlbENvbG9yJywgJyM3Njc2NzYnKX07XG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMuNCcsICcxNicpfXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy40JywgJzUwMCcpfTtcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lR2V0KCdzcGFjZS4zJywgJzEwJyl9cHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbiAgfVxuXG4gIC8qIElucHV0IGFuZCB0ZXh0YXJlYSBkZWZhdWx0IHN0eWxlICovXG4gIHRleHRhcmVhLFxuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0Q29sb3InLCAnIzQ4NDg0OCcpfTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5pbmFjdGl2ZUljb24nLCAnI2ViZWJlYicpfTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnknLCAnIzAyODQ4OScpfTtcbiAgICB9XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gIH1cblxuICAvKiBJbnB1dCBtYXRlcmlhbCBzdHlsZSAqL1xuICAmLmlzLW1hdGVyaWFsIHtcbiAgICBsYWJlbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIGlucHV0LFxuICAgIHRleHRhcmVhIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgLyogSWYgaW5wdXQgaGFzIGljb24gdGhlbiB0aGVzZSBzdHllbCAqL1xuICAgICYuaWNvbi1sZWZ0LFxuICAgICYuaWNvbi1yaWdodCB7XG4gICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgPiAuaW5wdXQtaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgPiBpbnB1dCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFdoZW4gaWNvbiBwb3NpdGlvbiBpbiBsZWZ0ICovXG4gICAgJi5pY29uLWxlZnQge1xuICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICA+IGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFdoZW4gaWNvbiBwb3NpdGlvbiBpbiByaWdodCAqL1xuICAgICYuaWNvbi1yaWdodCB7XG4gICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgID4gaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBNYXRlcmlhbCBpbnB1dCBmb2N1cyBzdHlsZSAqL1xuICAgICYuaXMtZm9jdXMge1xuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5pbmFjdGl2ZUljb24nLCAnI2ViZWJlYicpfTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICB0b3A6IC0xNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dENvbG9yJywgJyM0ODQ4NDgnKX07XG4gICAgICB9XG5cbiAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5JywgJyMwMjg0ODknKX07XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBFeWVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogNDNweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICA+IHNwYW4ge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IHNvbGlkIDFweCAke3RoZW1lR2V0KCdjb2xvcnMudGV4dENvbG9yJywgJyM0ODQ4NDgnKX07XG4gICAgYm9yZGVyLXJhZGl1czogNzUlIDE1JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGxlZnQ6IDNweDtcbiAgICAgIHRvcDogM3B4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJHt0aGVtZUdldCgnY29sb3JzLnRleHRDb2xvcicsICcjNDg0ODQ4Jyl9O1xuICAgIH1cbiAgfVxuXG4gICYuZXllLWNsb3NlZCB7XG4gICAgPiBzcGFuIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxcHggLyAyKTtcbiAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0Q29sb3InLCAnIzQ4NDg0OCcpfTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCB7IEV5ZUJ1dHRvbiB9O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGJhc2UsIHRoZW1lZCB9IGZyb20gJy4uL2Jhc2UnO1xuXG5jb25zdCBMaW5rV3JhcHBlciA9IHN0eWxlZCgnYScpKFxuICB7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfSxcbiAgYmFzZSxcbiAgdGhlbWVkKCdMaW5rJylcbik7XG5cbmNvbnN0IExpbmsgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8TGlua1dyYXBwZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9MaW5rV3JhcHBlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAuLi5iYXNlLnByb3BUeXBlcyxcbn07XG5cbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2EnLFxuICBtOiAwLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IExpc3RXcmFwcGVyIH0gZnJvbSAnLi9saXN0LnN0eWxlJztcblxuY29uc3QgTGlzdCA9ICh7IGNsYXNzTmFtZSwgaWNvbiwgdGV4dCwgbGluaywgLi4ucHJvcHMgfSkgPT4gKFxuICA8TGlzdFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIHtsaW5rID8gKFxuICAgICAgPExpbmsgaHJlZj17bGlua30+XG4gICAgICAgIDxhPlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKSA6IChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge2ljb259XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApfVxuICA8L0xpc3RXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBMaXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IHsgTGlzdFdyYXBwZXIgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkKCdwJykoXG4gIGJhc2UsXG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZyxcbiAgdGhlbWVkKCdUZXh0Jylcbik7XG5cbmNvbnN0IFRleHQgPSAoeyBjb250ZW50LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxUZXh0V3JhcHBlciB7Li4ucHJvcHN9Pntjb250ZW50fTwvVGV4dFdyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG10OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbWI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmb250RmFtaWx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZm9udFdlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIHRleHRBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxpbmVIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBsZXR0ZXJTcGFjaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgLi4uYmFzZS5wcm9wVHlwZXMsXG59O1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdwJyxcbiAgbXQ6IDAsXG4gIG1iOiAnMXJlbScsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXJXcmFwcGVyIGZyb20gJy4vc3R5bGUnO1xuXG5jb25zdCBDb250YWluZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBmdWxsV2lkdGgsXG4gIG5vR3V0dGVyLFxuICBtb2JpbGVHdXR0ZXIsXG4gIHdpZHRoLFxufSkgPT4ge1xuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheVxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydjb250YWluZXInXTtcbiAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmdcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgIGZ1bGxXaWR0aD17ZnVsbFdpZHRofVxuICAgICAgbm9HdXR0ZXI9e25vR3V0dGVyfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgbW9iaWxlR3V0dGVyPXttb2JpbGVHdXR0ZXJ9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb250YWluZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZnVsbFdpZHRoICYmXG4gICAgY3NzYFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICBgfTtcbiAgJHsocHJvcHMpID0+XG4gICAgKHByb3BzLm5vR3V0dGVyICYmXG4gICAgICBjc3NgXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIGApIHx8XG4gICAgY3NzYFxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBgfTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBtYXgtd2lkdGg6IDk3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjIwcHgpIHtcbiAgICBtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCB8fCAnMTE3MHB4J307XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgJHsocHJvcHMpID0+XG4gICAgICBwcm9wcy5tb2JpbGVHdXR0ZXIgJiZcbiAgICAgIGNzc2BcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgYH07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcldyYXBwZXI7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGFpbmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmZ1bGxXaWR0aCAmJlxuICAgIGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYH07XG4gICR7KHByb3BzKSA9PlxuICAgIChwcm9wcy5ub0d1dHRlciAmJlxuICAgICAgY3NzYFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICBgKSB8fFxuICAgIGNzc2BcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgYH07XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgbWF4LXdpZHRoOiA5NzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCB8fCAnMTE3MHB4J307XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCB8fCAnMTMwMHB4J307XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgJHsocHJvcHMpID0+XG4gICAgICBwcm9wcy5tb2JpbGVHdXR0ZXIgJiZcbiAgICAgIGNzc2BcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgYH07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXh0IGZyb20gJy4uLy4uL1RleHQnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vSW1hZ2UnO1xuXG5jb25zdCBMb2dvID0gKHtcbiAgbG9nb1dyYXBwZXJTdHlsZSxcbiAgbG9nb1N0eWxlLFxuICB0aXRsZVN0eWxlLFxuICB3aXRoQWNob3IsXG4gIGFuY2hvclByb3BzLFxuICBsb2dvU3JjLFxuICB0aXRsZSxcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPExpbmsgey4uLnByb3BzfSB7Li4ubG9nb1dyYXBwZXJTdHlsZX0+XG4gICAge3dpdGhBY2hvciA/IChcbiAgICAgIDxhIHsuLi5hbmNob3JQcm9wc30+XG4gICAgICAgIHtsb2dvU3JjID8gKFxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29TcmN9IGFsdD17dGl0bGV9IHsuLi5sb2dvU3R5bGV9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHQgY29udGVudD17dGl0bGV9IHsuLi50aXRsZVN0eWxlfSAvPlxuICAgICAgICApfVxuICAgICAgPC9hPlxuICAgICkgOiAoXG4gICAgICA8PlxuICAgICAgICB7bG9nb1NyYyA/IChcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvU3JjfSBhbHQ9e3RpdGxlfSB7Li4ubG9nb1N0eWxlfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0IGNvbnRlbnQ9e3RpdGxlfSB7Li4udGl0bGVTdHlsZX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICl9XG4gIDwvTGluaz5cbik7XG5cbkxvZ28ucHJvcFR5cGVzID0ge1xuICBsb2dvU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsb2dvV3JhcHBlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsb2dvU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRpdGxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHdpdGhBY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFuY2hvclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuTG9nby5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvZ29XcmFwcGVyU3R5bGU6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtcjogJzFyZW0nLFxuICAgICdhOmhvdmVyLGE6Zm9jdXMnOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlU3R5bGU6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIiwiLyoqIHRoaXMgaXMgb3VyIEJhc2UgQ29tcG9uZW50IGV2ZXJ5IGNvbXBvbmVudHMgbXVzdCBiZSBFeHRlbmQgaXQgKi9cbmltcG9ydCB7XG4gIHNwYWNlLFxuICBib3JkZXJzLFxuICBib3JkZXJDb2xvcixcbiAgd2lkdGgsXG4gIG1pbldpZHRoLFxuICBtYXhXaWR0aCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG4gIG1heEhlaWdodCxcbiAgZGlzcGxheSxcbiAgZm9udFNpemUsXG4gIGZsZXgsXG4gIG9yZGVyLFxuICBhbGlnblNlbGYsXG4gIGNvbG9yLFxuICBjb21wb3NlLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lZCA9IChrZXkpID0+IChwcm9wcykgPT4gcHJvcHMudGhlbWVba2V5XTtcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBjb21wb3NlKFxuICAoKSA9PiAoeyBib3hTaXppbmc6ICdib3JkZXItYm94JyB9KSxcbiAgc3BhY2UsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbiAgbWF4V2lkdGgsXG4gIGhlaWdodCxcbiAgbWluSGVpZ2h0LFxuICBtYXhIZWlnaHQsXG4gIGZvbnRTaXplLFxuICBjb2xvcixcbiAgZmxleCxcbiAgb3JkZXIsXG4gIGFsaWduU2VsZixcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGRpc3BsYXlcbik7XG5cbmJhc2UucHJvcFR5cGVzID0ge1xuICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5ib3JkZXJzLnByb3BUeXBlcyxcbiAgLi4uYm9yZGVyQ29sb3IucHJvcFR5cGVzLFxuICAuLi53aWR0aC5wcm9wVHlwZXMsXG4gIC4uLmhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mbGV4LnByb3BUeXBlcyxcbiAgLi4ub3JkZXIucHJvcFR5cGVzLFxuICAuLi5hbGlnblNlbGYucHJvcFR5cGVzLFxufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKGluaXRpYWxWYWx1ZSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IHRvZ2dsZXIgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRWYWx1ZSgodmFsdWUpID0+ICF2YWx1ZSksIFtdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgdG9nZ2xlcl07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVE9HR0xFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc09wZW46ICFzdGF0ZS5pc09wZW4sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBEcmF3ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBjb25zdCBEcmF3ZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPERyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCIvLyBjb25zdCBkYXRhID0ge1xuLy8gICBXb3JrSGFyZExpc3Q6IFtcbi8vICAgICB7IGlkOiAxLCB0aXRsZTogJ1ZlaGljbGUgU3BlY2lmaWNhdGlvbnMnIH0sXG4vLyAgICAgeyBpZDogMiwgdGl0bGU6ICdUaXRsZSBSZWNvcmRzJyB9LFxuLy8gICAgIHsgaWQ6IDMsIHRpdGxlOiAnSnVuayAvIFNhbHZhZ2UgLyBJbnN1cmFuY2UgUmVjb3JkcycgfSxcbi8vICAgICB7IGlkOiA0LCB0aXRsZTogJ0FjY2lkZW50IFJlY29yZHMnIH0sXG4vLyAgICAgeyBpZDogNSwgdGl0bGU6ICdUaGVmdCBSZWNvcmRzJyB9LFxuLy8gICAgIHsgaWQ6IDYsIHRpdGxlOiAnTGllbiAvIEltcG91bmQgLyBFeHBvcnQgUmVjb3JkcycgfSxcbi8vICAgICB7IGlkOiA3LCB0aXRsZTogJ1NhbHZhZ2UgQXVjdGlvbiBSZWNvcmRzJyB9LFxuLy8gICAgIHsgaWQ6IDgsIHRpdGxlOiAnU2FsZSBSZWNvcmRzJyB9LFxuLy8gICAgIHsgaWQ6IDksIHRpdGxlOiAnVGl0bGUgQ2hlY2tzJyB9LFxuLy8gICAgIHsgaWQ6IDEwLCB0aXRsZTogJ05NVlRJUyBDb25zdW1lciBBY2Nlc3MgRGlzY2xhaW1lcicgfSxcbi8vICAgXSxcbi8vIH07XG4vLyBleHBvcnQgZGVmYXVsdCBkYXRhO1xuXG5jb25zdCBkYXRhID0ge1xuICBXb3JrSGFyZExpc3Q6IFtcbiAgICB7IGlkOiAxLCB0aXRsZTogJ01ham9yIEFjY2lkZW50JyB9LFxuICAgIHsgaWQ6IDIsIHRpdGxlOiAnTWlsZWFnZSBSb2xsYmFjaycgfSxcbiAgICB7IGlkOiAzLCB0aXRsZTogJ011bHRpcGxlIE93bmVycycgfSxcbiAgICB7IGlkOiA0LCB0aXRsZTogJ1N0cnVjdHVyYWwgRGFtYWdlJyB9LFxuICAgIHsgaWQ6IDUsIHRpdGxlOiAnVmVoaWNsZSBTZXJ2aWNlIEhpc3RvcnknIH0sXG4gICAgeyBpZDogNiwgdGl0bGU6ICdMZWFzZSwgUGVyc29uYWwsIFRheGkgb3IgUG9saWNlIFVzZScgfSxcbiAgICB7IGlkOiA3LCB0aXRsZTogJ1RvdGFsIExvc3MnIH0sXG4gICAgeyBpZDogOCwgdGl0bGU6ICdSZWJ1aWx0JyB9LFxuICAgIHsgaWQ6IDksIHRpdGxlOiAnRmxvb2QgRGFtYWdlJyB9LFxuICAgIHsgaWQ6IDEwLCB0aXRsZTogJ0FpcmJhZyBEZXBsb3ltZW50JyB9LFxuICAgIHsgaWQ6IDExLCB0aXRsZTogJ01pbGVhZ2UgUm9sbG92ZXInIH0sXG4gICAgeyBpZDogMTIsIHRpdGxlOiAnU2FsdmFnZWQnIH0sXG4gICAgeyBpZDogMTMsIHRpdGxlOiAnSGFpbCBEYW1hZ2UnIH0sXG4gICAgeyBpZDogMTQsIHRpdGxlOiAnQnJhbmRlZCBhIExlbW9uJyB9LFxuICAgIHsgaWQ6IDE1LCB0aXRsZTogJ0xhc3QgUmVwb3J0ZWQgTWlsZWFnZScgfSxcbiAgICB7IGlkOiAxNiwgdGl0bGU6ICdKdW5rZWQnIH0sXG4gICAgeyBpZDogMTcsIHRpdGxlOiAnU3RhdGUgT3duZWQnIH0sXG4gICAgeyBpZDogMTgsIHRpdGxlOiAnTGVuZ3RoIG9mIE93bmVyc2hpcCcgfSxcbiAgICB7IGlkOiAxOSwgdGl0bGU6ICdFc3RpbWF0ZWQgTWlsZXMgRHJpdmVuIFBlciBZZWFyJyB9LFxuICAgIHsgaWQ6IDIwLCB0aXRsZTogJ05vdCBBY3R1YWwgTWlsZWFnZScgfSxcbiAgICB7IGlkOiAyMSwgdGl0bGU6ICdSZWNhbGwgSW5mb3JtYXRpb24nIH0sXG4gICAgeyBpZDogMjIsIHRpdGxlOiAnV2FycmFudHkgSW5mb3JtYXRpb24nIH0sXG4gIF0sXG59O1xuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiIsImltcG9ydCB7IENPTE9SX1BSSU1BUlksIENPTE9SX1NFQ09OREFSWSwgQ09MT1JfQkFDS0dST1VORF9QUklNQVJZIH0gZnJvbSBcImxpYi9jb25zdGFudFwiO1xuY29uc3QgY29sb3JzID0ge1xuICB0cmFuc3BhcmVudDogJ3RyYW5zcGFyZW50JyxcbiAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgdGV4dDogJyMzNDNENDgnLFxuICB0ZXh0UHJpbWFyeTogJyMwRjIxMzcnLFxuICBwcmltYXJ5OiBDT0xPUl9QUklNQVJZLFxuICBwcmltYXJ5SG92ZXI6IENPTE9SX1BSSU1BUlksXG4gIGJhY2tncm91bmRIb3ZlcjogQ09MT1JfQkFDS0dST1VORF9QUklNQVJZLFxuICBib3JkZXI6ICcjZGNlNWVhJyxcbiAgc2Vjb25kYXJ5OiBDT0xPUl9TRUNPTkRBUlksXG4gIHRlcnRpYXJ5OiBDT0xPUl9TRUNPTkRBUlksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvcnM7XG4iLCJpbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICBicmVha3BvaW50czogWyc1NzZweCcsICc3NjhweCcsICc5OTFweCcsICcxMjIwcHgnXSxcbiAgc3BhY2U6IFswLCA1LCA4LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDMzLCAzNSwgNDAsIDUwLCA2MCwgNzAsIDgwLCA4NSwgOTAsIDEwMF0sXG4gIGZvbnRTaXplczogWzEwLCAxMiwgMTQsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDM2LCA0OCwgODAsIDk2XSxcbiAgZm9udFdlaWdodHM6IFsxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDAsIDgwMCwgOTAwXSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBzb2xpZDogMSxcbiAgICB0aXRsZTogMS4yNSxcbiAgICBjb3B5OiAxLjUsXG4gIH0sXG4gIGxldHRlclNwYWNpbmdzOiB7XG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcbiAgICB0cmFja2VkOiAnMC4xZW0nLFxuICAgIHRpZ2h0OiAnLTAuMDVlbScsXG4gICAgbWVnYTogJzAuMjVlbScsXG4gIH0sXG4gIGJvcmRlcnM6IFtcbiAgICAwLFxuICAgICcxcHggc29saWQnLFxuICAgICcycHggc29saWQnLFxuICAgICczcHggc29saWQnLFxuICAgICc0cHggc29saWQnLFxuICAgICc1cHggc29saWQnLFxuICAgICc2cHggc29saWQnLFxuICBdLFxuICByYWRpdXM6IFszLCA0LCA1LCAxMCwgMjAsIDMwLCA2MCwgMTIwLCAnNTAlJ10sXG4gIHdpZHRoczogWzM2LCA0MCwgNDQsIDQ4LCA1NCwgNzAsIDgxLCAxMjgsIDI1Nl0sXG4gIGhlaWdodHM6IFszNiwgNDAsIDQ0LCA0NiwgNDgsIDU0LCA3MCwgODEsIDEyOF0sXG4gIG1heFdpZHRoczogWzE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTIsIDc2OCwgMTAyNCwgMTUzNl0sXG4gIGNvbG9ycyxcbiAgY29sb3JTdHlsZXM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBjb2xvcjogY29sb3JzLnByaW1hcnksXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5wcmltYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMudHJhbnNwYXJlbnQsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMucHJpbWFyeUhvdmVyLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnByaW1hcnlIb3ZlcixcbiAgICAgICAgYm94U2hhZG93OiBjb2xvcnMucHJpbWFyeUJveFNoYWRvdyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5zZWNvbmRhcnlIb3ZlcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5zZWNvbmRhcnlIb3ZlcixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICBjb2xvcjogY29sb3JzLnllbGxvdyxcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMueWVsbG93LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMueWVsbG93SG92ZXIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMueWVsbG93SG92ZXIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5SG92ZXIsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLnNlY29uZGFyeUhvdmVyLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5LFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnNlY29uZGFyeSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmltYXJ5V2l0aEJnOiB7XG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMucHJpbWFyeSxcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMucHJpbWFyeSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5wcmltYXJ5SG92ZXIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMucHJpbWFyeUhvdmVyLFxuICAgICAgICBib3hTaGFkb3c6IGNvbG9ycy5wcmltYXJ5Qm94U2hhZG93LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlY29uZGFyeVdpdGhCZzoge1xuICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnNlY29uZGFyeSxcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnNlY29uZGFyeUhvdmVyLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnNlY29uZGFyeUhvdmVyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdhcm5pbmdXaXRoQmc6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy55ZWxsb3csXG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLnllbGxvdyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy55ZWxsb3dIb3ZlcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy55ZWxsb3dIb3ZlcixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlcnJvcldpdGhCZzoge1xuICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnNlY29uZGFyeUhvdmVyLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5zZWNvbmRhcnlIb3ZlcixcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRyYW5zcGFyZW50Qmc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBidXR0b25TdHlsZXM6IHtcbiAgICB0ZXh0QnV0dG9uOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjb2xvcjogY29sb3JzLnByaW1hcnksXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy50cmFuc3BhcmVudCxcbiAgICB9LFxuICAgIG91dGxpbmVkOiB7XG4gICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnRyYW5zcGFyZW50LFxuICAgIH0sXG4gICAgZmFiOiB7XG4gICAgICBib3JkZXI6ICcwJyxcbiAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgJ3NwYW4uYnRuLWljb24nOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGV4dGVuZGVkRmFiOiB7XG4gICAgICBib3JkZXI6ICcwJyxcbiAgICAgIG1pbldpZHRoOiAnNTBweCcsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwcHgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gIH0sXG4gIC8vIEZsZXhCb3g6IHtcbiAgLy8gICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbidcbiAgLy8gfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IFpvb20gZnJvbSAncmVhY3QtcmV2ZWFsL1pvb20nO1xuaW1wb3J0IEJveCBmcm9tICdjb21tb24vY29tcG9uZW50cy9Cb3gnO1xuaW1wb3J0IFRleHQgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvVGV4dCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21tb24vY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21tb24vY29tcG9uZW50cy9JbWFnZSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL1VJL0NvbnRhaW5lcic7XG5cbmltcG9ydCBHdWFyYW50ZWVJbWFnZSBmcm9tICdjb21tb24vYXNzZXRzL2ltYWdlL2FnZW5jeU1vZGVybi9iYWRnZS5wbmcnO1xuXG5jb25zdCBHdWFyYW50ZWVTZWN0aW9uID0gKHtcbiAgc2VjdGlvbldyYXBwZXIsXG4gIHJvdyxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB0ZXh0QXJlYSxcbiAgaW1hZ2VBcmVhLFxuICBJbWFnZU9uZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHsuLi5zZWN0aW9uV3JhcHBlcn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHsuLi5yb3d9PlxuICAgICAgICAgIDxCb3ggey4uLnRleHRBcmVhfT5cbiAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBjYXNjYWRlPlxuICAgICAgICAgICAgICA8SGVhZGluZyB7Li4udGl0bGV9PjMwIERheXMgTW9uZXkgQmFjayBHdWFyYW50ZWU8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgey4uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJXZSBoYXZlIHByb3ZpZGVkIDMwIERheXMgTW9uZXkgQmFjayBHdWFyYW50ZWUgaW4gY2FzZSBvZiBkaXNzYXRpc2ZhY3Rpb24gd2l0aCBvdXIgcHJvZHVjdC4gV2UgY2FyZSBmb3Igb3VyIGN1c3RvbWVycyBhbmQgdGhlaXIgdmFsdWVzLiBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB7Li4ucm93fT5cbiAgICAgICAgICA8Qm94IHsuLi5pbWFnZUFyZWF9PlxuICAgICAgICAgICAgPFpvb20+XG4gICAgICAgICAgICAgIDxJbWFnZSBtPVwiYXV0b1wiIHsuLi5JbWFnZU9uZX0gc3JjPXtHdWFyYW50ZWVJbWFnZX0gYWx0PVwiR3VhcmFudGVlXCIgLz5cbiAgICAgICAgICAgIDwvWm9vbT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbkd1YXJhbnRlZVNlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBzZWN0aW9uV3JhcHBlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgcm93OiBQcm9wVHlwZXMub2JqZWN0LFxuICB0aXRsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgaW1hZ2VBcmVhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBJbWFnZU9uZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkd1YXJhbnRlZVNlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBzZWN0aW9uV3JhcHBlcjoge1xuICAgIGFzOiAnc2VjdGlvbicsXG4gICAgcHQ6IFsnMHB4JywgJzBweCcsICcwcHgnLCAnMHB4J10sXG4gICAgcGI6IFsnMHB4JywgJzBweCcsICcwcHgnLCAnMjVweCddLFxuICB9LFxuICByb3c6IHtcbiAgICBmbGV4Qm94OiB0cnVlLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICB0ZXh0QXJlYToge1xuICAgIHdpZHRoOiBbMSwgMSwgJzY1JScsIDEgLyAyXSxcbiAgICBtYjogWyc0MHB4JywgJzUwcHgnLCAnNjBweCcsICc4MHB4J10sXG4gIH0sXG4gIGltYWdlQXJlYToge1xuICAgIHdpZHRoOiBbMSwgMSwgJzQwJScsIDEsIDEgLyAyXSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogWycyOHB4JywgJzMwcHgnLCAnMzJweCcsICczNnB4JywgJzM2cHgnXSxcbiAgICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgICBjb2xvcjogJ2hlYWRpbmdDb2xvcicsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjAyNWVtJyxcbiAgICBtYjogJzIwcHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IFsnMTVweCcsICcxNXB4JywgJzE2cHgnLCAnMTZweCcsICcxNnB4J10sXG4gICAgY29sb3I6ICd0ZXh0Q29sb3InLFxuICAgIGxpbmVIZWlnaHQ6ICcxLjc1JyxcbiAgICBtYjogJzAnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gIEltYWdlT25lOiB7XG4gICAgbWw6ICdhdXRvJyxcbiAgICBtcjogJ2F1dG8nLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3VhcmFudGVlU2VjdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21tb24vY29tcG9uZW50cy9VSUVsZW1lbnRzL0xvZ28nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21tb24vY29tcG9uZW50cy9VSS9Db250YWluZXJUd28nO1xuaW1wb3J0IE5hdmJhcldyYXBwZXIgZnJvbSAnLi9uYXZiYXIuc3R5bGUnO1xuaW1wb3J0IGxvZ28gZnJvbSAnY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2xvZ28ucG5nJztcbmltcG9ydCB7IE5BTUUgfSBmcm9tICdsaWIvY29uc3RhbnQnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhcldyYXBwZXIgY2xhc3NOYW1lPVwiYWdlbmN5TW9kZXJuLW5hdmJhciBuYXZiYXJcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxMb2dvXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgIGxvZ29TcmM9e2xvZ299XG4gICAgICAgICAgdGl0bGU9e05BTUV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFpbi1sb2dvXCJcbiAgICAgICAgLz5cbiAgICAgICAgey8qIGVuZCBvZiBsb2dvICovfVxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIHsvKiBzdGFydCBtb2JpbGUgbWVudSAqL31cbiAgICAgIHsvKiA8TW9iaWxlTWVudSBjbGFzc05hbWU9e2Btb2JpbGUtbWVudSAke21vYmlsZU1lbnUgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTY3JvbGxzcHlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnVcIlxuICAgICAgICAgICAgaXRlbXM9e3Njcm9sbEl0ZW1zfVxuICAgICAgICAgICAgb2Zmc2V0PXstODR9XG4gICAgICAgICAgICBjdXJyZW50Q2xhc3NOYW1lPVwiYWN0aXZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGF0YS5tb2JpbGVNZW51SXRlbXMubWFwKChtZW51LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtgbWVudV9rZXkke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgIDxBbmNob3JMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPXttZW51LnBhdGh9XG4gICAgICAgICAgICAgICAgICBvZmZzZXQ9e21lbnUub2Zmc2V0fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSGFuZGxlTWVudUNsb3NlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHttZW51LmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvQW5jaG9yTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2Nyb2xsc3B5PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTW9iaWxlTWVudT4gKi99XG4gICAgICB7LyogZW5kIG9mIG1vYmlsZSBtZW51ICovfVxuICAgIDwvTmF2YmFyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuaW1wb3J0IG5hdkJnIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvYWdlbmN5TW9kZXJuL25hdi1iZy5wbmcnO1xuXG5jb25zdCBOYXZiYXJXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHggMCAyNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMXB4O1xuICB9XG4gID4gZGl2LmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUFyZWEgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgLm1lbnViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubWVudWJhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLm1lbnUtaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgbGkge1xuICAgICAgbWFyZ2luOiAwIDE5cHg7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5tZW51JywgJyMwMjA3M0UnKX07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBETSBTYW5zO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMubWVudScsICcjRkY4MjVDJyl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmlzLWN1cnJlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJHtuYXZCZ30pIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tIC8gY29udGFpbjtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5tZW51JywgJyNGRjgyNUMnKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgICAgIG1hcmdpbjogMCAxN3B4O1xuICAgICAgfVxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubWVudS1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTW9iaWxlTWVudSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIHBhZGRpbmc6IDI3cHggMCA0MHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDgycHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5JywgJyMwMDAnKX07XG4gICAgJi5hY3RpdmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxMnB4XG4gICAgICAgICR7dGhlbWVHZXQoJ2NvbG9ycy5zaGFkb3cnLCAncmdiYSgzOCwgNzgsIDExOCwgMC4xKScpfTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICB1bCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIGxpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTNweCAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGV4dFByaW1hcnknLCAnIzAyMDczRScpfTtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeScpfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnJldXNlY29yZV9fYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgIC0zMWRlZyxcbiAgICAgICAgcmdiKDY0LCAyMTksIDIxNikgMCUsXG4gICAgICAgIHJnYig0NCwgMzEsIDEzMikgMTAwJVxuICAgICAgKTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAtMzFkZWcsXG4gICAgICAgIHJnYig2NCwgMjE5LCAyMTYpIDAlLFxuICAgICAgICByZ2IoNDQsIDMxLCAxMzIpIDEwMCVcbiAgICAgICk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAtMzFkZWcsXG4gICAgICAgIHJnYig2NCwgMjE5LCAyMTYpIDAlLFxuICAgICAgICByZ2IoNDQsIDMxLCAxMzIpIDEwMCVcbiAgICAgICk7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9mZWF0aGVyL2NoZXZyb25SaWdodCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvVUkvQ29udGFpbmVyVHdvJztcbmltcG9ydCBUZXh0IGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL1RleHQnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvSGVhZGluZyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvSW1hZ2UnO1xuaW1wb3J0IExpc3QgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvTGlzdCc7XG5pbXBvcnQgTGluayBmcm9tICdjb21tb24vY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBTZWN0aW9uV3JhcHBlciwge1xuICBUaXRsZSxcbiAgU2VjdGlvbixcbiAgQ29udGVudCxcbiAgSWxsdXN0cmF0aW9uLFxuICBMaXN0R3JvdXAsXG4gIE1hcmssXG4gIE1hcmtUaXRsZSxcbiAgUHJlTG9nbyxcbiAgTWFudWZhY3R1cmVMb2dvLFxuICBMb2FkZXJcbn0gZnJvbSAnLi93b3JrSGFyZC5zdHlsZSc7XG5pbXBvcnQgZGF0YUxpc3QgZnJvbSAnY29tbW9uL2RhdGEvQWdlbmN5TW9kZXJuJztcbi8vIGltcG9ydCBpbGx1c3RyYXRpb24gZnJvbSAnY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2Nhci1yZXBvcnQucG5nJztcbmltcG9ydCBpbGx1c3RyYXRpb24gZnJvbSAnY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2Nhci1hY2NpZGVudC1yZXBvcnQucG5nJztcbmltcG9ydCBUaWNrIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvYWdlbmN5TW9kZXJuL3RpY2stY2lyY2xlLnBuZyc7XG5cbmNvbnN0IFdvcmtIYXJkID0gKHsgZGF0YSwgZXJyb3IsIHZpbiB9KSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uV3JhcHBlcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgIHsgXG4gICAgICAgICAgICAvLyBTaG93IExvYWRpbmdcbiAgICAgICAgICAgICFkYXRhICYmICFlcnJvciA/XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlxuICAgICAgICAgICAgICAgIFBsZWFzZSB3YWl0XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPFRleHQgY29udGVudD1cIkNvbGxlY3RpbmcgYXZhaWxhYmxlIGRhdGEuLi5cIiBtPVwiMFwiIC8+IFxuICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG5cbiAgICAgICAgICAgIC8vIFNob3cgRXJyb3JcbiAgICAgICAgICAgIDogKGVycm9yKSA/XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiNmZjQ3NTFcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRmFpbGVkISZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgYXM9XCJoM1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUaGUgcHJvdmlkZWQgVklOIGhhcyBlcnJvcnMgUGxlYXNlIGRvdWJsZSBjaGVjayB0aGUgZmlyc3QgdGhyZWUgY2hhcmFjdGVycyBvZiB0aGUgVklOLiBWSU5zIGRvIG5vdCBpbmNsdWRlIHRoZSBsZXR0ZXJzIEkgKGkpLCBPIChvKSwgUSAocSksIFUgKHUpIG9yIFogKHopLCBvciB0aGUgbnVtYmVyIDAuIFxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxUZXh0IGxpbmVIZWlnaHQ9XCJ1bnNldCAhaW1wb3J0YW50XCIgY29udGVudD17dmlufSAvPiBcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICBDaGVjayBhZ2FpbiA8SWNvbiBpY29uPXtjaGV2cm9uUmlnaHR9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQ29udGVudD5cblxuICAgICAgICAgICAgLy8gU2hvdyBDb2xsZWN0ZWQgRGF0YVxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICAgICAgYXM9XCJoM1wiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIiM0MmJmMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN1Y2Nlc3MhJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBXZSBmb3VuZCByZWNvcmRzIGZvciB0aGlzIHZlaGljbGU6XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICA8TWFyaz5cbiAgICAgICAgICAgICAgICA8UHJlTG9nbz5cbiAgICAgICAgICAgICAgICAgIDxNYW51ZmFjdHVyZUxvZ28gaW1hZ2VTcmM9e2RhdGE/Lm1hcms/LnRvTG93ZXJDYXNlKCkgfHwgJyd9IC8+XG4gICAgICAgICAgICAgICAgPC9QcmVMb2dvPlxuICAgICAgICAgICAgICAgIDxNYXJrVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtkYXRhPy52ZWhpY2xlfVxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwidW5zZXQgIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnQgIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbGluZUhlaWdodD1cInVuc2V0ICFpbXBvcnRhbnRcIiBjb250ZW50PXtgJHtkYXRhPy5yZWNvcmRzfSBSZWNvcmQocylgfSB0ZXh0QWxpZ249XCJsZWZ0ICFpbXBvcnRhbnRcIiAvPiBcbiAgICAgICAgICAgICAgICA8L01hcmtUaXRsZT5cbiAgICAgICAgICAgICAgPC9NYXJrPlxuICAgICAgICAgICAgICA8VGV4dCBjb250ZW50PVwiRGlzY292ZXIgYWxsIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIHZlaGljbGUgaW4gYSBtYXR0ZXIgb2Ygc2Vjb25kcy5cIiB0ZXh0QWxpZ249XCJsZWZ0ICFpbXBvcnRhbnRcIiAvPlxuXG4gICAgICAgICAgICAgIDxUZXh0IGNvbnRlbnQ9XCJWZWhpY2xlIEhpc3RvcnkgUmVwb3J0IGNoZWNrcyBmb3I6XCIgdGV4dEFsaWduPVwibGVmdCAhaW1wb3J0YW50XCIgLz5cbiAgICAgICAgICAgICAgPExpc3RHcm91cD5cbiAgICAgICAgICAgICAgICB7ZGF0YUxpc3QuV29ya0hhcmRMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpc3RcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8SW1hZ2Ugc3JjPXtUaWNrfSBhbHQ9XCJ0aWNrIGljb25cIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdCAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8SWxsdXN0cmF0aW9uPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aWxsdXN0cmF0aW9ufSBhbHQ9XCJJbGx1c3RyYXRpb25cIiAvPlxuICAgICAgICAgIDwvSWxsdXN0cmF0aW9uPlxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb25XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV29ya0hhcmQ7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgU2VjdGlvbldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgYmFja2dyb3VuZDogJHt0aGVtZUdldCgnY29sb3JzLmJhY2tncm91bmRIb3ZlcicpfTtcbiAgcGFkZGluZzogMTEwcHggMCAzMHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIHBhZGRpbmc6IDExMHB4IDAgMzBweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIHBhZGRpbmc6IDExMHB4IDAgMzBweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMjBweCAwIDY1cHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIHBhZGRpbmc6IDBweCAwIDcwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMDBweCAwIDExMHB4O1xuICB3aWR0aDogNDAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgIHdpZHRoOiA0MyU7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5leHBsb3JlIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmxpbmtDb2xvcicpfTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSAwcztcbiAgICB9XG4gICAgJjpob3ZlciBpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElsbHVzdHJhdGlvbiA9IHN0eWxlZC5maWd1cmVgXG4gIHdpZHRoOiA1NSU7XG4gIG1hcmdpbjogMCAwIDAgNSU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpc3RHcm91cCA9IHN0eWxlZC5kaXZgXG4gIGNvbHVtbi1jb3VudDogMjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSB7XG4gICAgY29sdW1uLWNvdW50OiAxO1xuICB9XG4gIC5saXN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWFyayA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5leHBvcnQgY29uc3QgTWFya1RpdGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJlTG9nbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeScpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNYW51ZmFjdHVyZUxvZ28gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvY2FyLW1hbnVmYWN0dXJlLyR7cHJvcHMgPT4gcHJvcHMuaW1hZ2VTcmN9LnBuZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbmA7XG5cbmNvbnN0IGJyZWF0aGVBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5iYWNrZ3JvdW5kSG92ZXInKX07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeScpfTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBhbmltYXRpb246ICR7YnJlYXRoZUFuaW1hdGlvbn0gMnMgbGluZWFyIGluZmluaXRlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbldyYXBwZXI7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBwe1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICAubWVudUxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDVweDtcbiAgfVxuICAubWVudVJpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIC5zdGlja3ktbmF2LWFjdGl2ZSB7XG4gICAgLmFnZW5jeU1vZGVybi1uYXZiYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IDBweCByZ2JhKDQzLCA4MywgMTM1LCAwLjA4KTtcbiAgICB9XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkICwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5pbXBvcnQgTWFpbCBmcm9tICdjb21tb24vYXNzZXRzL2ltYWdlL2FnZW5jeU1vZGVybi9tYWlsLnN2Zyc7XG5pbXBvcnQgUGhvbmUgZnJvbSAnY29tbW9uL2Fzc2V0cy9pbWFnZS9hZ2VuY3lNb2Rlcm4vcGhvbmUuc3ZnJztcblxuY29uc3QgU2VjdGlvbldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgcGFkZGluZzogMHB4IDAgMTIwcHg7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgcGFkZGluZzogMCAwIDkwcHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIHBhZGRpbmc6IDAgMCA5MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiAgJHtwcm9wcyA9PiBwcm9wcy5oaWRkZW4gPyAnbm9uZScgOiAnZmxleCd9O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2x1bW4tY291bnQ6IDI7XG4gIGJveC1zaGFkb3c6IHJnYigzMiAzOSA0OSAvIDI5JSkgMHB4IDIwcHggNTBweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgY29sdW1uLWNvdW50OiAxO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDYwcHggYXV0bztcbiAgcGFkZGluZzogNzBweCA3MHB4O1xuICAvLyB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYigzMiAzOSA0OSAvIDI5JSkgMHB4IDIwcHggNTBweDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbHVtbi1jb3VudDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEludm9pY2VMaXN0ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMCAwIDUwJTtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmNztcbiAgcGFkZGluZzogMTBweCA3MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4OiB1bnNldDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIH1cbiAgLnJlYWN0LXJldmVhbCB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDUwJSAtIDI1cHgpO1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGYXFJdGVtID0gc3R5bGVkLmRpdmBcbiAgaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0UHJpbWFyeScpfTtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0Jyl9O1xuICB9XG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5saW5rQ29sb3InKX07XG4gICAgaSB7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgMHM7XG4gICAgfVxuICAgICY6aG92ZXIgaSB7XG4gICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuaHJgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuYDtcblxuZXhwb3J0IGNvbnN0IFF1YW50aXR5ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLnByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5iYXNlLXByaWNlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3VyZWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgaW1nIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogMjhweDtcbiAgfVxuICBwIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHAge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tvdXQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLmJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAyNHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEVtYWlsSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogdXJsKCR7TWFpbH0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBsZWZ0OiAyMnB4O1xuICAgIHRvcDogNDZweDtcbiAgICB6LWluZGV4OiA5O1xuICB9XG4gIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJveC1zaGFkb3c6IDBweCA3cHggMjVweCAwcHggcmdiYSgyMiwgNTMsIDc2LCAwLjA4KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzQzZDQ4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB9XG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3gtc2hhZG93OiAwcHggN3B4IDI1cHggMHB4IHJnYmEoMjIsIDUzLCA3NiwgMC4wOCk7XG4gICAgfVxuXG4gICAgJjpwbGFjZWhvbGRlciB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzM0M2Q0ODtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIC5pbnB1dC1pY29uIHtcbiAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiA3cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudDtcbiAgICBzdmcge1xuICAgICAgY29sb3I6ICNlY2VjZWM7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQaG9uZUlucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoJHtQaG9uZX0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBsZWZ0OiAyMnB4O1xuICAgIHRvcDogNDZweDtcbiAgICB6LWluZGV4OiA5O1xuICB9XG4gIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJveC1zaGFkb3c6IDBweCA3cHggMjVweCAwcHggcmdiYSgyMiwgNTMsIDc2LCAwLjA4KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzM0M2Q0ODtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgfVxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDdweCAyNXB4IDBweCByZ2JhKDIyLCA1MywgNzYsIDAuMDgpO1xuICAgIH1cblxuICAgICY6cGxhY2Vob2xkZXIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMzNDNkNDg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAuaW5wdXQtaWNvbiB7XG4gICAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0NnB4ICFpbXBvcnRhbnQ7XG4gICAgc3ZnIHtcbiAgICAgIGNvbG9yOiAjZWNlY2VjO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUGF5cGFsQWNjZXNzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogICR7cHJvcHMgPT4gcHJvcHMuaGlkZGVuID8gJ25vbmUnIDogJ2NvbnRlbnRzJ307XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uUGF5cGFsID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogI2ZmYzQzOTRhO1xuICBkaXNwbGF5OiAke3Byb3BzID0+IHByb3BzLmhpZGRlbiA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snfTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGltZyB7XG4gICAgbWFyZ2luOiAwcHggNHZ3O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNSU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIGltZyB7XG4gICAgICBtYXJnaW46IDBweCA0dnc7XG4gICAgICBoZWlnaHQ6IDE5cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDI1JTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGJyZWF0aGVBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG5gO1xuXG5jb25zdCByb3RhdGVDaXJjbGUgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgNSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAxMiUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcbiAgfVxuYDtcblxuY29uc3QgaWNvbkxpbmVUaXAgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgbGVmdDogMXB4O1xuICAgICAgdG9wOiAxOXB4O1xuICB9XG4gIDU0JSB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGxlZnQ6IDFweDtcbiAgICAgIHRvcDogMTlweDtcbiAgfVxuICA3MCUge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBsZWZ0OiAtOHB4O1xuICAgICAgdG9wOiAzN3B4O1xuICB9XG4gIDg0JSB7XG4gICAgICB3aWR0aDogMTdweDtcbiAgICAgIGxlZnQ6IDIxcHg7XG4gICAgICB0b3A6IDQ4cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICB0b3A6IDQ1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IGljb25MaW5lTG9uZyA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICByaWdodDogNDZweDtcbiAgICAgIHRvcDogNTRweDtcbiAgfVxuICA2NSUge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICByaWdodDogNDZweDtcbiAgICAgIHRvcDogNTRweDtcbiAgfVxuICA4NCUge1xuICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgdG9wOiAzNXB4O1xuICB9XG4gIDEwMCUge1xuICAgICAgd2lkdGg6IDQ3cHg7XG4gICAgICByaWdodDogOHB4O1xuICAgICAgdG9wOiAzOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMTZweCBzb2xpZCAke3RoZW1lR2V0KCdjb2xvcnMuYmFja2dyb3VuZEhvdmVyJyl9O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnknKX07XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYW5pbWF0aW9uOiAke2JyZWF0aGVBbmltYXRpb259IDJzIGxpbmVhciBpbmZpbml0ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdWNjZXNzQ2hlY2ttYXJrID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAuY2hlY2staWNvbiB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgYm9yZGVyOiA0cHggc29saWQgIzRDQUY1MDtcbiAgICAgIFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDAgMCAxMDBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTAwcHggMTAwcHggMDtcbiAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZS1jaXJjbGUgNC4yNXMgZWFzZS1pbjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaWNvbi1saW5lIHtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgXG4gICAgICAgICAgJi5saW5lLXRpcCB7XG4gICAgICAgICAgICAgIHRvcDogNDZweDtcbiAgICAgICAgICAgICAgbGVmdDogMTRweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBpY29uLWxpbmUtdGlwIDAuNzVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLmxpbmUtbG9uZyB7XG4gICAgICAgICAgICAgIHRvcDogMzhweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ3cHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogaWNvbi1saW5lLWxvbmcgMC43NXM7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuaWNvbi1jaXJjbGUge1xuICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgICBsZWZ0OiAtNHB4O1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoNzYsIDE3NSwgODAsIC41KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmljb24tZml4IHtcbiAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAgIH1cbiAgfVxufVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFBheVBhbEJ1dHRvbiB9IGZyb20gJ3JlYWN0LXBheXBhbC1idXR0b24tdjInO1xuLy8gaW1wb3J0IHsgUGF5UGFsU2NyaXB0UHJvdmlkZXIsIFBheVBhbEJ1dHRvbnMgfSBmcm9tIFwiQHBheXBhbC9yZWFjdC1wYXlwYWwtanNcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tICdyZWFjdC1pY29ucy1raXQnO1xuaW1wb3J0IElucHV0IGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCBDaGVja2JveCBmcm9tICdjb21tb24vY29tcG9uZW50cy9DaGVja2JveCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL1VJL0NvbnRhaW5lclR3byc7XG5pbXBvcnQgU2luZ2xlQ29udGFpbmVyIGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL1VJL0NvbnRhaW5lcic7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21tb24vY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBUZXh0IGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL1RleHQnO1xuaW1wb3J0IExpbmsgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQgeyBjaGV2cm9uUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvZmVhdGhlci9jaGV2cm9uUmlnaHQnO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJy4uL1NlY3Rpb25IZWFkaW5nJztcbmltcG9ydCBTZWN0aW9uV3JhcHBlciwgeyBcbiAgQ29udGVudFdyYXBwZXIsIFxuICBGYXFJdGVtLCBcbiAgSW52b2ljZUxpc3QsXG4gIExpbmUsXG4gIFF1YW50aXR5LFxuICBTZWN1cmVkLFxuICBDaGVja291dCxcbiAgRW1haWxJbnB1dFdyYXBwZXIsXG4gIEJ1dHRvblBheXBhbCxcbiAgUGF5cGFsQWNjZXNzLFxuICBMb2FkaW5nV3JhcHBlcixcbiAgTG9hZGVyLFxuICBQaG9uZUlucHV0V3JhcHBlcixcbiAgU3VjY2Vzc0NoZWNrbWFya1xufSBmcm9tICcuL2ZhcS5zdHlsZSc7XG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsLCB2YWxpZGF0ZVBob25lIH0gZnJvbSAnbGliL3ZhbGlkYXRlJztcbmltcG9ydCBwYXlwYWxfbG9nbyBmcm9tICdjb21tb24vYXNzZXRzL2ltYWdlL2hvc3RpbmdNb2Rlcm4vcGF5cGFsLnN2Zyc7XG5pbXBvcnQgeyBBUElVUkwsIFBSSUNFLCBCQVNFX1BSSUNFLCBQQVlQQUxfQ0xJRU5USUQsIFNBTVBMRV9SRVBPUlQsIFVSTFdFQiB9IGZyb20gJ2xpYi9jb25zdGFudCc7XG5cbmNvbnN0IEZhcSA9ICh7IGRhdGEsIHZpbiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3dhcm5pbmcsIHNldFdhcm5pbmddID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnKlJlcXVpcmVkJyxcbiAgICBwaG9uZTogJypSZXF1aXJlZCcsXG4gICAgY2hlY2tlZDogJypSZXF1aXJlZCdcbiAgfSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB2YWxpZEVtYWlsID0gdmFsaWRhdGVFbWFpbChlbWFpbCk7XG4gIGNvbnN0IHZhbGlkUGhvbmUgPSB2YWxpZGF0ZVBob25lKHBob25lKTtcbiAgXG4gIGNvbnN0IGlzQ29tcGxldGVkID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh2YWxpZEVtYWlsICYmIGNoZWNrZWQgJiYgdmFsaWRQaG9uZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VjY2Vzc1BhaWQgPSBhc3luYyAoZGV0YWlscykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIGRldGFpbHMsXG4gICAgICAgIHBob25lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcHJvZHVjdE5hbWU6IHZpbixcbiAgICAgICAgYW1vdW50OiBgJHtQUklDRX0gVVNEYCxcbiAgICAgICAgdG90YWw6IGAke1BSSUNFfSBVU0RgLFxuICAgICAgICByZWNlaXB0RGV0YWlsOiBgJHtkYXRhPy52ZWhpY2xlIHx8ICcnfWBcbiAgICAgIH07XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0FQSVVSTH1tYWlsZXJgLCBwYXlsb2FkKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgfSBmaW5hbGx5IHsgXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiBgJHtVUkxXRUJ9cmVwb3J0LyR7dmlufWBcbiAgICAgICAgfSk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbldyYXBwZXIgaWQ9XCJmYXFcIj5cbiAgICAgIHsvKiBEaXNwbGF5IExvYWRpbmcgUHVyY2hhc2UgKi99XG4gICAgICB7bG9hZGluZyAmJlxuICAgICAgICA8U2luZ2xlQ29udGFpbmVyPlxuICAgICAgICAgIDxMb2FkaW5nV3JhcHBlcj5cbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiID5Db2xsZWN0aW5nIGRhdGEgcGF5bWVudC4uLjwvSGVhZGluZz5cbiAgICAgICAgICA8L0xvYWRpbmdXcmFwcGVyPlxuICAgICAgICA8L1NpbmdsZUNvbnRhaW5lcj5cbiAgICAgIH1cbiAgICAgXG4gICAgICB7LyogRGlzcGxheSBzdWNjZXNzIHB1cmNoYXNlICovfVxuICAgICAge3N1Y2Nlc3MgJiYgXG4gICAgICAgIDxTaW5nbGVDb250YWluZXI+XG4gICAgICAgICAgPExvYWRpbmdXcmFwcGVyPlxuICAgICAgICAgICAgPFN1Y2Nlc3NDaGVja21hcms+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2staWNvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tbGluZSBsaW5lLXRpcFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWxpbmUgbGluZS1sb25nXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tZml4XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TdWNjZXNzQ2hlY2ttYXJrPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiID5QYXltZW50IHN1Y2Nlc3NmdWxsITwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGNvbnRlbnQ9XCJZb3VyIHJlcG9ydCBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWxcIiBmb250U2l6ZT1cIjIwcHggIWltcG9ydGFudFwiIC8+XG4gICAgICAgICAgPC9Mb2FkaW5nV3JhcHBlcj5cbiAgICAgICAgPC9TaW5nbGVDb250YWluZXI+XG4gICAgICB9XG5cbiAgICAgIHsvKiBEaXNwbGF5IGRldGFpbCBwdXJjaGFzZSAqL31cbiAgICAgIHshc3VjY2VzcyAmJlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgICAgc2xvZ2FuPVwiUHVyY2hhc2UgdGhlIHJlcG9ydCBub3cgYW5kIGZpbmQgb3V0IGRldGFpbGVkIGhpc3Rvcnkgb2ZcIlxuICAgICAgICAgICAgdGl0bGU9e2RhdGE/LnZlaGljbGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udGVudFdyYXBwZXIgaGlkZGVuPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIDxJbnZvaWNlTGlzdD5cbiAgICAgICAgICAgICAgPEZhcUl0ZW0ga2V5PVwiMVwiPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiA+T3JkZXIgU3VtbWFyeTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8UXVhbnRpdHk+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb250ZW50PVwiMSBSZXBvcnRcIiBtYj1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydC8ke1NBTVBMRV9SRVBPUlR9YH0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFNlZSBFeGFtcGxlIFJlcG9ydCA8SWNvbiBpY29uPXtjaGV2cm9uUmlnaHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJiYXNlLXByaWNlXCIgY29udGVudD17YCQke0JBU0VfUFJJQ0V9YH0gZm9udFdlaWdodD1cIjUwMFwiIC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbnRlbnQ9e2AkJHtQUklDRX1gfSBmb250V2VpZ2h0PVwiNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUXVhbnRpdHk+XG4gICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgPC9GYXFJdGVtPlxuICAgICAgICAgICAgICA8RmFxSXRlbSBrZXk9XCIyXCI+XG4gICAgICAgICAgICAgICAgPFF1YW50aXR5PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiPlRvdGFsPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFRleHQgY29udGVudD17YCQke1BSSUNFfWB9IGZvbnRTaXplPVwiMjBweCAhaW1wb3J0YW50XCIgZm9udFdlaWdodD1cIjYwMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9RdWFudGl0eT5cbiAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICA8L0ZhcUl0ZW0+XG4gICAgICAgICAgICAgIDxGYXFJdGVtIGtleT1cIjNcIj5cbiAgICAgICAgICAgICAgICA8U2VjdXJlZD5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BheXBhbC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgPFRleHQgY29udGVudD1cIlBheSB0aHJvdWdoIGEgc2VjdXJlIHBheW1lbnQgc2VydmljZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TZWN1cmVkPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L0ZhcUl0ZW0+XG4gICAgICAgICAgICA8L0ludm9pY2VMaXN0PlxuICAgICAgICAgICAgPENoZWNrb3V0PlxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgbWI9XCIwXCI+V2hlcmUgc2hvdWxkIHdlIHNlbmQgeW91ciByZXBvcnQ/PC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8UGhvbmVJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBob25lKGUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZSBOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiMTdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvUGhvbmVJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgIHshdmFsaWRQaG9uZSAmJjxUZXh0IGNvbnRlbnQ9e3dhcm5pbmcucGhvbmV9IGZvbnRTaXplPVwiMTRweCAhaW1wb3J0YW50XCIgbXQ9XCI3cHhcIiBjb2xvcj1cIiM3Njc2NzZcIiBtYj1cIjBcIiAvPn1cbiAgICAgICAgICAgICAgPEVtYWlsSW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRW1haWxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgIHshdmFsaWRFbWFpbCAmJiA8VGV4dCBjb250ZW50PXt3YXJuaW5nLmVtYWlsfSBmb250U2l6ZT1cIjE0cHggIWltcG9ydGFudFwiIG10PVwiLTI0cHhcIiBjb2xvcj1cIiM3Njc2NzZcIiAvPn1cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgaXNDaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2hlY2tlZChlLnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJBR1JFRV9UTkNcIlxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkkgYWdyZWUgdG8gVGVybXMgYW5kIENvbmRpdGlvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHshY2hlY2tlZCA/IDxUZXh0IGNvbnRlbnQ9e3dhcm5pbmcuZW1haWx9IGZvbnRTaXplPVwiMTRweCAhaW1wb3J0YW50XCIgbXQ9XCI3cHhcIiBjb2xvcj1cIiM3Njc2NzZcIiAvPiA6IDw+PGJyIC8+PGJyIC8+PC8+fVxuICAgICAgICAgICAgICA8QnV0dG9uUGF5cGFsIGRpc2FibGVkIGhpZGRlbj17aXNDb21wbGV0ZWQoKX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BheXBhbF9sb2dvfSBhbHQ9XCJwYXlwYWxcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvblBheXBhbD5cbiAgICAgICAgICAgICAgPFBheXBhbEFjY2VzcyBoaWRkZW49eyFpc0NvbXBsZXRlZCgpfT5cbiAgICAgICAgICAgICAgICA8UGF5UGFsQnV0dG9uXG4gICAgICAgICAgICAgICAgICBhbW91bnQ9e1BSSUNFfVxuICAgICAgICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlPVwiTk9fU0hJUFBJTkdcIlxuICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXsoZGV0YWlscykgPT4gc3VjY2Vzc1BhaWQoZGV0YWlscyl9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudElkOiBQQVlQQUxfQ0xJRU5USUQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGdW5kaW5nOiAnY3JlZGl0LGNhcmQnLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVGdW5kaW5nOiAndmVubW8nXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZUNhcmQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxQYXlQYWxTY3JpcHRQcm92aWRlciBcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3sgXG4gICAgICAgICAgICAgICAgICAgIFwiY2xpZW50LWlkXCI6IFBBWVBBTF9DTElFTlRJRCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgICAgICAgICAgICAgICAgIGludGVudDogXCJjYXB0dXJlXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID4gXG4gICAgICAgICAgICAgICAgICA8UGF5UGFsQnV0dG9ucyBzdHlsZT17eyBsYXlvdXQ6IFwiaG9yaXpvbnRhbFwiIH19IC8+XG4gICAgICAgICAgICAgICAgPC9QYXlQYWxTY3JpcHRQcm92aWRlcj4gKi99XG4gICAgICAgICAgICAgIDwvUGF5cGFsQWNjZXNzPlxuICAgICAgICAgICAgPC9DaGVja291dD5cbiAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIH1cbiAgICA8L1NlY3Rpb25XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFxO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTYwcHggMCA3NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgcGFkZGluZzogMTYwcHggMCA1NXB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAxNjBweCAwIDIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAucmVhY3QtcmV2ZWFsIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29weXJpZ2h0SW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk3OTQ5NDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIGEge1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0UHJpbWFyeScpfTtcbiAgICB9XG4gIH1cbiAgLmNvcHlyaWdodCB7XG4gICAgY29sb3I6ICR7cmdiYSgnIzBmMjEzNycsIDAuNil9O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJXaWRnZXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuICBhIHtcbiAgICBjb2xvcjogJHtyZ2JhKCcjMDIwNzNFJywgMC44KX07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMi41O1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZSAwcztcbiAgICBpbWcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeScpfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL1VJL0NvbnRhaW5lclR3byc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvSW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQgVGV4dCBmcm9tICdjb21tb24vY29tcG9uZW50cy9UZXh0JztcblxuaW1wb3J0IEZvb3RlcldyYXBwZXIsIHtcbiAgRm9vdGVySW5uZXIsXG4gIENvcHlyaWdodEluZm8sXG4gIC8vIEZvb3RlcldpZGdldCxcbiAgLy8gTmF2LFxufSBmcm9tICcuL2Zvb3Rlci5zdHlsZSc7XG5pbXBvcnQgTG9nb0ltYWdlIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9sb2dvLnBuZyc7XG5pbXBvcnQgeyBOQU1FIH0gZnJvbSAnbGliL2NvbnN0YW50JztcblxuLy8gaW1wb3J0IHsgZm9vdGVyIGFzIGRhdGEgfSBmcm9tICdjb21tb24vZGF0YS9Ib3N0aW5nTW9kZXJuJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb290ZXJXcmFwcGVyPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEZvb3RlcklubmVyPlxuICAgICAgICAgIDxDb3B5cmlnaHRJbmZvPlxuICAgICAgICAgICAgPEZhZGUgdXAgZGVsYXk9ezEwMH0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlciAhaW1wb3J0YW50JyB9fT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgbT1cIjIwcHhcIiBzcmM9e0xvZ29JbWFnZX0gYWx0PVwiTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBheXBhbC5jb20vd2ViYXBwcy9tcHAvcGF5cGFsLXBvcHVwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJIb3cgUGF5UGFsIFdvcmtzXCIgb25jbGljaz1cImphdmFzY3JpcHQ6d2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LnBheXBhbC5jb20vd2ViYXBwcy9tcHAvcGF5cGFsLXBvcHVwJywnV0lQYXlwYWwnLCd0b29sYmFyPW5vLCBsb2NhdGlvbj1ubywgZGlyZWN0b3JpZXM9bm8sIHN0YXR1cz1ubywgbWVudWJhcj1ubywgc2Nyb2xsYmFycz15ZXMsIHJlc2l6YWJsZT15ZXMsIHdpZHRoPTEwNjAsIGhlaWdodD03MDAnKTsgcmV0dXJuIGZhbHNlO1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS93ZWJzdGF0aWMvbWt0Zy9sb2dvL2JkZ19zZWN1cmVkX2J5X3BwXzJsaW5lLnBuZ1wiIGFsdD1cIlNlY3VyZWQgYnkgUGF5cGFsXCIgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHBhZGRpbmc6ICcycHgnLCBwYWRkaW5nQm90dG9tOiAnMXJlbSFpbXBvcnRhbnQnLCBtYXhXaWR0aDogJzEwMCUhaW1wb3J0YW50JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrICFpbXBvcnRhbnQnIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGF5cGFsLmNvbS93ZWJhcHBzL21wcC9ob3ctcGF5cGFsLXdvcmtzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgSG93IFBheVBhbCBXb3Jrc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIDxGb290ZXJXaWRnZXQ+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2F1dG9jaGVja30gYWx0PVwiYXV0b2NoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz17Y2FyZmF4fSBhbHQ9XCJjYXJmYXhcIiAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtjb3BhcnR9IGFsdD1cImNvcGFydFwiIC8+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e252bXRpc30gYWx0PVwibnZtdGlzXCIgLz5cbiAgICAgICAgICAgICAgPC9Gb290ZXJXaWRnZXQ+ICovfVxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGlzIHNpdGUgaXMgcHJvdGVjdGVkIGJ5IHJlQ0FQVENIQSBhbmQgdGhlIEdvb2dsZSBhbmQgPExpbmsgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vdGVybXNcIj5UZXJtcyBvZiBzZXJ2aWNlPC9MaW5rPiBhcHBseS48YnIgLz5cbiAgICAgICAgICAgICAgICBOTVZUSVMgRGF0YSBpcyB1c2VkIGZvciBWZWhpY2xlIEF1dG8gVmluIENoZWNrIGFuZCBDYXIgSGlzdG9yeSBSZXBvcnRzIENvcHlyaWdodCDCqSAyMDIyIHtOQU1FfS4gQWxsIHJpZ2h0cyByZXNlcnZlZC48YnIgLz5cbiAgICAgICAgICAgICAgICBUaGUgdXNlIG9mIHRoaXMgV2ViIHNpdGUgY29uc3RpdHV0ZXMgYWNjZXB0YW5jZSBvZiB0aGUgPExpbmsgaHJlZj1cIi90ZXJtcy1hbmQtY29uZGl0aW9uc1wiPlRlcm1zIG9mIENvbmRpdGlvbnM8L0xpbms+IGFuZCA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+UHJpdmFjeSBQb2xpY3k8L0xpbms+LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtgwqkgMjAyMiAke05BTUV9LiBBbGwgcmlnaHRzIHJlc2VydmVkLmB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPC9Db3B5cmlnaHRJbmZvPlxuey8qIFxuICAgICAgICAgIDxGb290ZXJXaWRnZXQ+XG4gICAgICAgICAgICA8RmFkZSB1cCBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiID5BYm91dCBVczwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5hYm91dFVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpdGVtLmlkfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgPC9Gb290ZXJXaWRnZXQ+ICovfVxuXG4gICAgICAgICAgey8qIDxGb290ZXJXaWRnZXQ+XG4gICAgICAgICAgICA8RmFkZSB1cCBkZWxheT17MzAwfT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiPk91ciBJbmZvcm1hdGlvbjwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5vdXJJbmZvcm1hdGlvbi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDwvRm9vdGVyV2lkZ2V0PiAqL31cbiAgICAgICAgICBcbiAgICAgICAgPC9Gb290ZXJJbm5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvRm9vdGVyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21tb24vY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBIR3JvdXAgZnJvbSAnLi9zZWN0aW9uSGVhZGluZy5zdHlsZSc7XG5cbmNvbnN0IFNlY3Rpb25IZWFkaW5nID0gKHsgdGl0bGUsIHNsb2dhbiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIR3JvdXAgey4uLnByb3BzfT5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIj57c2xvZ2FufTwvSGVhZGluZz5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIj57dGl0bGV9PC9IZWFkaW5nPlxuICAgIDwvSEdyb3VwPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRpbmc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgSEdyb3VwID0gc3R5bGVkLmhncm91cGBcbiAgbWFyZ2luLWJvdHRvbTogJHsocHJvcHMpID0+IHByb3BzLm1iID8/ICc1MHB4J307XG4gIG1hcmdpbi10b3A6ICR7KHByb3BzKSA9PiBwcm9wcy5tdCA/PyAnNTBweCd9O1xuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAkeyhwcm9wcykgPT4gcHJvcHMubWIgPz8gJzMwcHgnfTtcbiAgfVxuICB0ZXh0LWFsaWduOiAkeyhwcm9wcykgPT4gcHJvcHMudGV4dEFsaWduID8/ICdjZW50ZXInfTtcbiAgaDQge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMudGVydGlhcnknKX07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIH1cbiAgfVxuICBoMiB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0UHJpbWFyeScpfTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSEdyb3VwO1xuIiwiZXhwb3J0IGNvbnN0IFBBWVBBTF9DTElFTlRJRCA9ICdBVkw4Tjg5bV9HcjFJUGR0bFNBbG81SllKQ2ZiYmw2dWtrSEtCME1la2hzYVNfYmN2MzE0Ry0ycnI3ckpUU2N3WlR5VjROamtQWFZ5WmhUUic7XG5leHBvcnQgY29uc3QgQVBJVVJMID0gJy9hcGkvJztcbmV4cG9ydCBjb25zdCBVUkxXRUIgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XG5cbi8vIFBST0pFQ1QgTkFNSU5HXG5leHBvcnQgY29uc3QgTkFNRSA9ICdWZWhpY2xlIFBhcGVyIFByZW1pdW0nO1xuXG4vLyBQUklDSU5HXG5leHBvcnQgY29uc3QgQkFTRV9QUklDRSA9ICczOS45OSc7XG5cbmV4cG9ydCBjb25zdCBQUklDRSA9IDA7XG5cbi8vIEVNQUlMXG5leHBvcnQgY29uc3QgRU1BSUwgPSAndmVoaWNsZXBhcGVycHJlbWl1bUBnbWFpbC5jb20nO1xuXG4vLyBNT1RUT1xuZXhwb3J0IGNvbnN0IE1PVFRPID0gJ09yaWdpbmFsIGFuZCBBY3R1YWwgQ2FyZmF4IFZlaGljbGUgSGlzdG9yeSBSZXBvcnRzJztcblxuLy8gQ09MT1JcbmV4cG9ydCBjb25zdCBDT0xPUl9QUklNQVJZID0gJyMxOTc2ZDInO1xuZXhwb3J0IGNvbnN0IENPTE9SX1NFQ09OREFSWSA9ICcjMjA4QkQzJztcbmV4cG9ydCBjb25zdCBDT0xPUl9CQUNLR1JPVU5EX1BSSU1BUlkgPSAnI2Y1ZjZmNyc7XG5cbi8vIFNBTVBMRSBSRVBPUlRcbmV4cG9ydCBjb25zdCBTQU1QTEVfUkVQT1JUID0gJ0tNSEhUNktEWERVMDk3NjM1JztcblxuLy8gQ1JJU1AgSURcbmV4cG9ydCBjb25zdCBDUklTUElEID0gJzQxMWI2OGQ5LWQ4N2QtNGYyZi04ZGUwLTdkMDY3OGQ1ZDAzNSc7XG5cbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9EQVRBQkFTRV9VUkwgPSAnaHR0cHM6Ly92ZWhpY2xlcGFwZXJwcmVtaXVtLWEyYmMzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS8nXG5leHBvcnQgY29uc3QgQk9UX1RPS0VOID0gJzIxMjU1Mzc5MDE6QUFFSUhFaDNKdkkxdk5NNW9mai11UXNFSDEzRllVY0Jjek0nXG4vLyBleHBvcnQgY29uc3QgUEFTU1dPUkQgPSAnbWFrYW5rZXJ1cHVrJ1xuZXhwb3J0IGNvbnN0IENMSUVOVF9JRF9HT09HTEUgPSAnMjQxMDc5MzUzMzgzLWQ0YzFlNHFhZHRhaThqYjVvaWI4YXI1cWpubDBwZThsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TRUNSRVRfR09PR0xFID0gJ0dPQ1NQWC1CTUxzcFIzYWdZUEFWczZHZ0Fxa05uUWNZRDJ1J1xuZXhwb3J0IGNvbnN0IFJFRlJFU0hfVE9LRU5fR09PR0xFID0gJzEvLzA0NjllNmJqMkdXckxDZ1lJQVJBQUdBUVNOd0YtTDlJckV5dVowenU1Vlo1Yl94enFsdTZybGtPTGZ1b1JLeExBMURzSEtaOTZSSEJPa1ZLWFZFRDZRY0NlYzFQVXVDR2Mwc1knXG5leHBvcnQgY29uc3QgVE9LRU5fR09PR0xFID0gJ3lhMjkuYTBBVnZaVnNwd2FpUkRyR1BhMjM5OHRwSFpzc2g0WVBkWTA3TWZHZmFLNEhzaldoRFZDOWV3ajFPZVdCUDJEaWFoLVQ3NS05QkJkWktTejhXclp6VndNdi1QUkJHMVJWdTJvUkZVTDZNZDZzUlpjanhGWWFqR2xCWV9hcDlMQjFmRzZSOW92eFNzMnpBTXc1UUhCTkpJUE5oaUozMm9hQ2dZS0Fka1NBUkVTRlFHYmR3YUlnTnNoWHF2b2RwcWQxSGhaa0lKeGxnMDE2MydcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BUElfS0VZID0gJ0FJemFTeUNwY2g5dTUxWnB5dWlGMnBxNk9lZEQyc0JJSXMwSkM5USdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BVVRIX0RPTUFJTiA9ICd2ZWhpY2xlcGFwZXJwcmVtaXVtLWEyYmMzLmZpcmViYXNlYXBwLmNvbSdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9QUk9KRUNUX0lEID0gJ3ZlaGljbGVwYXBlcnByZW1pdW0tYTJiYzMnXG5leHBvcnQgY29uc3QgRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQgPSAndmVoaWNsZXBhcGVycHJlbWl1bS1hMmJjMy5hcHBzcG90LmNvbSdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEID0gJzYzNzI4Mjg1MjUwNidcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BUFBfSUQgPSAnMTo2MzcyODI4NTI1MDY6d2ViOjk5MzU5MmE2YjNkZjhmZjVlZTg5MjMnXG5leHBvcnQgY29uc3QgRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQgPSAnRy1LNVozUE5DS0dQJ1xuZXhwb3J0IGNvbnN0IE5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MgPSAnRy1LNVozUE5DS0dQJ1xuZXhwb3J0IGNvbnN0IEFQSV9LRVlfQ0FSRkFYX1BSTyA9ICdjYjM1M2QzNDFhZWM1MzdjNDhhMjc0OTIzZjY5ZGQ3MidcbiIsImV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUGhvbmUocGhvbmUpIHtcbiAgY29uc3QgcmUgPSAvXi57OSx9JC87XG4gIHJldHVybiByZS50ZXN0KHBob25lKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnY29tbW9uL3RoZW1lL2hvc3RpbmdNb2Rlcm4nO1xuaW1wb3J0IHsgUmVzZXRDU1MgfSBmcm9tICdjb21tb24vYXNzZXRzL2Nzcy9zdHlsZSc7XG5pbXBvcnQge1xuICBHbG9iYWxTdHlsZSxcbiAgQ29udGVudFdyYXBwZXIsXG59IGZyb20gJ2NvbnRhaW5lcnMvQWdlbmN5TW9kZXJuL2FnZW5jeU1vZGVybi5zdHlsZSc7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJ2NvbW1vbi9jb250ZXh0cy9EcmF3ZXJDb250ZXh0JztcbmltcG9ydCBHdWFyYW50ZWVTZWN0aW9uIGZyb20gJ2NvbnRhaW5lcnMvQWdlbmN5TW9kZXJuL0d1YXJhbnRlZSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ2NvbnRhaW5lcnMvQWdlbmN5TW9kZXJuL05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9Gb290ZXInO1xuaW1wb3J0IEZhcSBmcm9tICdjb250YWluZXJzL0hvc3RpbmdNb2Rlcm4vRmFxJztcbmltcG9ydCBXb3JrSGFyZCBmcm9tICdjb250YWluZXJzL0FnZW5jeU1vZGVybi9Xb3JrSGFyZCc7XG5pbXBvcnQgeyBBUElVUkwsIE5BTUUsIENPTE9SX1BSSU1BUlksIENSSVNQSUQgfSBmcm9tICdsaWIvY29uc3RhbnQnO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgdXJsID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICAvLyBJZiB0aGUgc3RhdHVzIGNvZGUgaXMgbm90IGluIHRoZSByYW5nZSAyMDAtMjk5LFxuICAvLyB3ZSBzdGlsbCB0cnkgdG8gcGFyc2UgYW5kIHRocm93IGl0LlxuICBpZiAoIXJlcy5vaykge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YS4nKTtcbiAgICAvLyBBdHRhY2ggZXh0cmEgaW5mbyB0byB0aGUgZXJyb3Igb2JqZWN0LlxuICAgIGVycm9yLmluZm8gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGVycm9yLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICByZXR1cm4gcmVzLmpzb24oKTtcbn1cblxuY29uc3QgQWdlbmN5TW9kZXJuID0gKCkgPT4geyBcbiAgY29uc3QgeyBxdWVyeSwgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUigoKSA9PiBxdWVyeS52aW4gJiYgYCR7QVBJVVJMfXByZXBhcmF0aW9uP3Zpbj0ke3F1ZXJ5LnZpbn1gLFxuICAgIGZldGNoZXIsXG4gICAgZmFsc2UsXG4gICAge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcjogeyBcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdG9uL2pzb25cIiB9XG4gICAgfVxuICApO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmICghcXVlcnkudmluKSB7XG4gICAgLy8gICBwdXNoKHtcbiAgICAvLyAgICAgcGF0aG5hbWU6ICcvJyxcbiAgICAvLyAgICAgcXVlcnk6IHsgZmFpbGVkOiB0cnVlIH1cbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cblxuICAgIHdpbmRvdy4kY3Jpc3AgPSBbXTtcbiAgICB3aW5kb3cuQ1JJU1BfV0VCU0lURV9JRCA9IENSSVNQSUQ7XG4gICAgKCgpID0+IHtcbiAgICAgIGNvbnN0IGQgPSBkb2N1bWVudDtcbiAgICAgIGNvbnN0IHMgPSBkLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICBzLnNyYyA9IFwiaHR0cHM6Ly9jbGllbnQuY3Jpc3AuY2hhdC9sLmpzXCI7XG4gICAgICBzLmFzeW5jID0gMTtcbiAgICAgIGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKHMpO1xuICAgIH0pKCk7XG4gIH0pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e05BTUV9IC0gUHJlcGFyZSBWSU48L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJEZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJPcmlnaW5hbCBhbmQgQWN0dWFsIENhcmZheFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17Q09MT1JfUFJJTUFSWX0gLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJyZWUrU2VyaWZ8RE0rU2Fuczo0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaSZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFJlc2V0Q1NTIC8+XG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgPFN0aWNreSB0b3A9ezB9IGlubmVyWj17OTk5OX0gYWN0aXZlQ2xhc3M9XCJzdGlja3ktbmF2LWFjdGl2ZVwiPlxuICAgICAgICAgICAgPERyYXdlclByb3ZpZGVyPlxuICAgICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8L0RyYXdlclByb3ZpZGVyPlxuICAgICAgICAgIDwvU3RpY2t5PlxuICAgICAgICAgIDxXb3JrSGFyZCBkYXRhPXtkYXRhPy5kYXRhfSBlcnJvcj17ZXJyb3J9IHZpbj17cXVlcnkudmlufSAvPlxuICAgICAgICAgIHsoIWVycm9yICYmIGRhdGE/LnN1Y2Nlc3MpID8gPEZhcSBkYXRhPXtkYXRhPy5kYXRhfSB2aW49e3F1ZXJ5LnZpbn0vPiA6IDxiciAvPiB9XG4gICAgICAgICAgPEd1YXJhbnRlZVNlY3Rpb24gLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW5jeU1vZGVybjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9saXNoZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy1raXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L2ZlYXRoZXIvY2hldnJvblJpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBheXBhbC1idXR0b24tdjJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmV2ZWFsL0ZhZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmV2ZWFsL1pvb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==