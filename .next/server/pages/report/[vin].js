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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/report/[vin].js");
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

/***/ "./src/common/assets/image/hostingModern/author1.png":
/*!***********************************************************!*\
  !*** ./src/common/assets/image/hostingModern/author1.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/author1-09fb68bf88372b97d6a0c7c5d80dd963.png";

/***/ }),

/***/ "./src/common/assets/image/hostingModern/car-report.png":
/*!**************************************************************!*\
  !*** ./src/common/assets/image/hostingModern/car-report.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/car-report-f7716b211387f9f4b81f78d011d0ea09.png";

/***/ }),

/***/ "./src/common/assets/image/hostingModern/features/1.png":
/*!**************************************************************!*\
  !*** ./src/common/assets/image/hostingModern/features/1.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAYAAABLJIP0AAAVL0lEQVR4nM1cCViTV9Y+2UiAAAFCICSsgbDIjiJ1XypddCpaW22r7T9Ta2fGTmfsMh37d2qX+Wvbv+tjnY6d2s1atdqOrUu1Wte6oyCyb2FNAgkkkIWEEPI/50J8qJLk+yCx//s8PGj4vvvd+373nnvOe84Nw+FwwK1CWXUTv73bYqhv1YCiQwvaXgt095qh19gPg/YhwJ6wWUwICeRBuCAAhMH+EBcdBvJYUcw9sya137KOAoDPifn2WFnWlVpVXpWiK62uRSPv1BmLbYN24LDZ4O/HAn4AF/x5HGAxGeR6+5ADLNZBMJitYBkYhAHbIHBYzB8jQvna5FhhQ3pCZGV+irhk2e25Tb7st0+IKatT8fccLVl2qqxtZnWLJt1qtRWG8HkQGuQPfhwWMBgMWu1hFwcG7dBr6Ae9oR84HPbRlLiImhmZ0jP3LsjbU5AeM+jtMXiVmHPlCuHH311cffh83R29JuscUWgghAUHECK89RxnWzpDP3T1mIAfwDk4f0rST6vvKfh4dn5Sn1ce4i1iKurbeW9uO/nXI5eaFlgHbDNiIgXA47JhaMi3y5TJZIB1wA5tnXpgsZg/zs1POL7rtYdf90bbEybmpS0HV356oPS3vUbLvHhxKHD9fEsIrkK73QHGfiv0mazA9/cDURgf+i02UKh0x/j+fsYHizJ3vPHk4p0Tes54ibla2xbwt38eeuPEZcWcOLEgQxDkD3b70ET6cnPnRn6jfUES+kwWGLDZIdDfDxKiwyAlLgKalT3QoekjSxZv6DNaQKHUnS3MiDn/+to710/NTBgY17PHQ8zek5UZT7z5zSZT/+AceZyQGEdvLEkkAqm1WG1kVzKYrGAfGiKDTpKGQ0q8CJKlQshKFkN2cjSEhQRAi7oHip74N3DYLPDncogNwiVW36YFDotx6N2nlqx7oCi7hnZf6A7of7cdL/77vw6/KhEJMtC4Dk5wluDjLQM26DVaCBHox0QJgyAuKhSSY8IhWx4NOXIJTEqMIjvaWFi14Ss4eqEepJGC63/FdtBHUii7L65/ZO7GV35/1146/WLTufjZ9/eteW/nz+tS40WpgTwObVLQPgzaHWDqHwC9sZ/MDBysKJQPk9OlkJUkJiTkJEdDgiSMcruZMjHsPVFJ2ne+Z+xbaLA/BPCiCjZ+fmK9Rm8Sffi3ZR9RbZMyMc99cHD1eztOr8tIEqf6sVnEEXMHXBZ4hY3YBwuxEWgf0FjGRAlgWlYcZCeLQR4bAanxIkiUhFMm4kbgrHIa/dE+Ev7fj8PGpVew9btLwGKxBz94tvgTrxHz0pZDK9/aduLZ7GSxHNfy0BjLD/szNATQb7WBEe2D2Uo6hnYgKUYIKXEikMcM24cMmRjCQwLGy8NNyE+VAroIZouNGObRQFPBYjIhKzm64MM9Z5kcFgy++1TxF57a9EjMx3vPz3ntixPrM5KibiIFDaN1YHDYPpitxABKIkLI4JNiwiEnWQI5KdGQnhBJ/uYrCAWBZJe6VNV2EzEwQg4a5Gy5ePIHu8+vlUaGtj/90Oxj7rrj1vieu9YqvP2P//opVhyaJeDzyFJA/wG9TiSE78+FiNBAkEnDISspGnJTosluEScO9RkJrvDcpv2w5T8XyKx0NSImgwFmqw1qm7su7n/v0YVFU+VaV+25JUZW/Nphm91RhAPV9Bih12QBdOLSEyMhRx4N2UnRhBSJKMRHw6WOnT+WwuMbvyE2yx0wWO3sMYF9yP59674XFru61OVSWrXhqxe7dCZRhiwKunoMIBYGw6ZnF8Pk9FgSDP5/Q16qFCIEgWRWu9rWYSR6jwrnQ3VzV/Dipz95+bu3f7dhrOuYY3345f5zhXt+qrgvNV6Ug9ueUtsHCwqSYcHUFJ+S0tCuhd1Hy2H/6Sra98pjhWS2oLbjCTgmeWzEnMMXGoo27zw+bazLx5wxb2w/+5xYGJSBaxKNbVAAF2pbNLQ76wmN7d2kXRyMwWyB+rZuqFZ0QVCAH+SnSckspQ4GWeLnK1ohIpRP6a7YyJDCd3ZdWLd2xdyzHol5acuBlQ1t3UnZcvH12AdnSVmdEjp7DBAZFjRuIjR6E1ytU0J7lx50ff2kPY3OCP0Dg8TJi40UEJtV1aiGaw0qmsQAuRf9ptGOniugbcVQ41pTZ9RTb3+78p2nl37plpgdR6seiBcLMoZGebUYgzSrdHClph3umpZGqZMY3F1tUMGpK00QHREEKXGRUFbXAW1qPXRoeslbnZwmRf8CGtq0UFrbQX6nxYsgJjKEKHt0gZ4zzm70rp2KoDugu5EgFszYc6Km552nwTUxL//78IMtyp5Y3HHwJieGdY9BqGjqdEtMT58Z3t9xGq7WK6Gpo4eQaejUQ96UJFizZCrxemfmJkBdi4a0daykAWSScJBGhsCd01IgJNCf2Ao0pONBbooE4qNDSYwUHMij1AL2SaHsCXt+84Flr61duGdMYr4/Vb04JkqQMZoUGAn0cNbgG3UHnMIf/ec89JmtJAiUScNg6arZcOhCHYmPOrp6oUWtI7Nl/pQksovIYoTE98Ggb6II4PlBekIU7DtdSZkY3KXiokJnfHO8on00Mdd7s3nXiaLaVq08LHjsXUcQxIOqpk4S+LlCaFAALJ2XCVwOG98CLJmTSWbIxUsNYDQPwOLZGfBAUS6se2AWrL1vOty/IIe4894gxYnkGCEJDejIysGBXGjvMkhf/+RQkfOz6z36+VrbzEAeJ8eVw4derqKjB641qN0+ZJIsCtgsBrEfC2ekwvcnq8n2qO7ug1m5iVAwKZbMPl8hPVFEwo8hGoE/zprQYN6MsxUd039BTGV9q19prTonMozv0pqz2Ezi+V6udZ/eQQnANjgErzx+B2nri4MlIJKEw+HzdUTh9zVwBkZHBBONhw5wWV9t1GSdu9rAu07Mqatts9o6dYvcvkkHkNC+vF7p9nEYQOLsWrVhB6x4/ksiOUQEB8CkxEjyb18jOiKESJ50XwJKKVpdX/GJ0pY54DS+FyvbC9BwjSUnjAZuhbjbuANmERfOTIUr1R0wMzcRbi9IBgwrYkapa74G7qqo6ImF1B+EY8e+l9YpcwDgECGmsV0rCw32rI8gMWhUGzu0IJO4furmvy4lGsivhfT4SGBQ8GNuBAr6io6eBPyYWVrbzm/X9EoDuJ41K1xKnd1GKK1xv5x+TVIQ8rgIMsjBQTut+zAX1qHplZ683BDMrG3RGHR9liIqQhJxtcEBVzwYYG8Ad7JLVa3w2b5L0KrS0WoxLUEEMkkY8afoAF+osX/g7tpWbS+7ukkFDIpvGE0QLqe6Vu8HlGjdymo7oEWlgz6zBTQ6EwpK5IfDYcFDNMQvNosFmUliKK1VDuebaMCPzYEahQrY2r5+YNOY+egMNSt1xP2n+9AbgQ4jSg3aXhN09RhJqhV3ExSw0VhjHIXhAsZWGJLgUqYKDA8+2XeJdp+4HCZ091mArdGZIYBH3eHy5/pBa6eeBITzJidTvg8jdYyYm5Q9hFzUZzFzoNL2kXKPaGEwyR2hF4zJssomNVQzGBAfHQYSkQBuDFM8IVMWBaF8tDNDwKbx5pELvZEQY4QginEFjASUmCfGaeqJmMvV7XCqtAkUqh5oau+G06UK6NMZYdN/LyMEYO4IXfiKRjXUtmqIHIHCOQpOGCmj3IGzJjaK/lafHBNBEndYOhLEpj4+rNXBe9hmywBw3UiBYwGVeJQJPOHDb87B1k+PQoRMDPic2wvkZNmQZHwAFw6dqSFZBEyvoMiEWg86ghPJMTkRFMglkfqRC/W0XjxuQjiD2Rgn4Cygk6nFrRDLxTCBHsx3/dBp2XHwdYyQ2AkUpv60fDps3n0WLte0w4Y1RRAVxof8tBgiMPkCaGf2nqykJFw5gaolSlHD1szhzBtSg78fB9TdBmjo0EJeimvtZHKqFERhQUSyfGLZNPDnsuHw+VqSA8KYKksm9gkhTuTKJRDA5ZCyESYth88BTJw6g3Z6jhAaM53BAhUeIu20hEhiaO8olMOrv78Dth8qJZG1UtMHP5yhXYBAG+joofZjtVGvRMNNgsNmAhNr4/rdaCyugMYTl4Q7IOkYt1QpOuHlrUcIMfgsnbYPmlXdPicGs6I4O7GKgiqQxEB/LrAxw1hltdHWWLGS4Fqjmnio7oQm3II/3XEadtrssHROBuSlSojzleHjZeQERvu4MxJJhcL1WLrG53GAjcknVLzoIhgDyo5uqFKoSXrWFZYvyCaVDbjeeT4UqFwhVx49XNBI8XqUYLEQgZkYEwED41lKbBbo+ixQ1+JeB5aKBHBbZvyvQgqMZCjx5aPnTAUmywAkSoTAFIf6k06Pp1IMZdCq5k6vD8YVsNP1bfTiNPSJ0Hs2UAwo0SyIwwOAnRobERgRyt81YBtcRCcWgZG4qazWvQQxEWAYgO1jPIVOF4YPQ44h+MuKWSQjQBWy6HAoqWwn5SLugJJsaHDA0dTY8FXszJRYc5xY0IwBXYQftdSmE+jo1bZ0EVcel4w3gJJGq0pP3nB3rwlqmrtIVSY+a1JCJITwA6BLZ4R4MfVSNKy42vbDZY/XGc0WDF7bp+XK1WSKJEaHKs5fawNRGHUPEUaEK5QJkNSJEHPkQh2RMrASCx1HTJghokXBZPfCH0zeldUrwWiykApOOsRg2IFhAfooLBc7KLp/GKokiAUKcGq+BemSi9sPl19xACOPjgeM1t5is0NdmwaKClMo3YPlZxg5Y7byeEkj6TQGpYfO1ZI3my2XEM8Tc+W4jBrbusn2nhofAZmySJJIyyXXUAd62YnRYYR0gatqDQYDrLahsvxUScl1Yh5eVPjzW9tPtxrN1jz+GKVa7uDvx6ZkZzq69PDGF8ehStEFrWo9yUgOaA2waNFkeGVNESk1wfhLqzdBkjQMkmOFxAdC/wNzVbIJBJbobWOQipUVrohBx1MYwtM+sXzWQRidop2dJzu57YfS4pTYCI/ZgtFAR6+yqRNM/VbiMboCFnl+vv8yKeoJFwTCbZlxUFSQDF//VE4EKnyrKDmIhUGQFh9JIm5vAuUNVx4+BplKrQHumZl62vnZ9QVXPDd7r8PhKKNDChAJggvNah2Z+u6AityimWnAZDHIm1tRlE284KslDaDU9MKjiwtgzZJC+M3MSV4nBUY8cLSJY2daUWOyVt0zO/N75yfXiZk/WdZcmBF7HtchnfNEuO8bTVYob1B5vBZngmMIYOncDJg6KRY+P3AZmChheCgW8AbwJWCGst/6S0cPh4p1O/mp0pIlsyeV3UQM4r75Gbs1elMVnYQ4vgEMFqkMDo2rxTIAGx5bQDrz3alKCA4JhMPnail7puMFimDp8SJSkT4aqL+oNH01KxZk7frF56P/s7p42rGcpKgydbeR1qxBsQpLxDwtwvw0CTBZTHIo4tFXdxNCcbfARP94Iny6SEuMJC6BEzhGrd4M8tiwurX3zzw4urmbXN3nHp77xvIXtudFhvFTqT43hM+F+lYt1LV0kQpwV4gKD4biORnEYZuVkwDzpiQTKdPlFuplFKTHgrOuEH/ju29R6+o+ev7ed2980k3ELJmXVb6g4OLRC5VtqWgEqZxB8mOzoVmvgyu1HW6Jwc58tmHFLSFhLLR16oDJZBJnDpNr6DLclhlz/re/KThxU1/HauDdp4vXOYYcJajpUllSjBEj5su4aTzAHNXpsibYvPsMPPnWXqI3S0UhhBwU5w1ma8V7zyz581hNjxk1ymOEg+v/a87GF7YcfTUrKSrdU58cJOHP80mGkg5wBmB4go5ieYOaaEUYshjMA8R/QkUP80a4lBrau6ueXTnz7Ty5RD/WI1yG08+smvftydLm2afLFJa0eFGep7NJKFw1q3pIeSrVOtuJAPvT1DFcJ4ypHHQXsOgR3Q2UJ3l+bGK7IsODQSL6ZRYE7eFtmbFnX378rs9cdcHjCbe0+9860GvsvzsuSuD24Ba206zSw1f/eBCKpsq9ToR1wAa1rVqS3y6t64DKxk6SEe3pNRMiMKcewvcnmQhXyx99LjT8LBbr2KF3Vt6Vkih1eV7SowDz+Yv3PnL3Xz47oO4xFmAeyBU5pOTVNkhqgb1BDA74WqOKeNQ4G7BuuEWlJwk7NOIhQTwI8ueSLCWTgnSJUbW214x2p3zvmw896o4UoEJMQUaC9ouX7nvkwRe/3s5kQB5WcI9FDk48PA6Ia3w8UCi74Wq9athGtGnxEAS0qnWk2hOXBWYWsYQNY7Mbs2BUSEGiVd2Giq3PL31sXkFas6cuUpLs7p6RUfPPZ0xr1759cLPDAejjjEkOqYRQ9XjMHOAJkWpFJ9S0dBEhCglBw63WGsBmt5NoGJcF+j1sEfOm+IZONIf9QCeuU2csf+/JO9YtL8q7SOU+WqdoD/xcmfrIS19/zuOyC/BcI1YSjAY5qaLphR83PTaiqwxD12cmtXsVjSq4UquEykY1NCm7yYEwZ80N5rdQe2bSSKd6ApKCyT29sb9sy/qlj6+gSAptYhDnrjaJfvc/337a0aWPTksQ5Yw+c41GD882YY3vI4umEI32zNVmsnOoewykigBtEc4GnF2+Og6ItpfJYJJZGBLkf+zj9Usfmz81hda3h4z7pP49T3367uELdXfKJGGp+LadSwsH29ltwJItkvrlsFjEUAZw/WjVqYwXaE9MZivUtXbXzM5PPPX+urv/nJYooV1HO6Hvdnh165EHP9xz7g9Wm30GnhtgAOO6yIW/cQbRr50cH5xbNFaVYoXu6sVTtm5cu5DyOesbMeEvvbhSqxSs37Rv45nylmnhAn4WGmYA73ylARUgH0h/lx7L1QwVBenSi//448K/T8+Km1B84rXvj9l28PK0TbtO/6m6RZseEsjLigoPGqm78Q1Bzu+R6ewxYu1NeZI0tOEP903/cE1x4VGvtO/tjn+2/9KsnUfKll+qbCuwDzkmo0CEhtYbX67jbANjHzwdB+C4kp8qvbJiQc6O1cVT3Z6jpv0sX73Ro5caEw+frSo6VlI/v11jlFqstkIM4NBQo5+CJ9A8Re7YN+d3VuG5SZPFBn5+7ItSIb8dxfs7p086dGdhcp0v+n9LvtXsm59Kc8obOrMUSr2soV2bqO42RBnM1ttx0MPUODB+If+ykyKmYRcffcRAf+4JcXiQMlEqbEoUCxSZMlH5/UX5Jb7u8y39ujcnzpU1ijR9ls7mDg0pHUW512Idlhy5XC5g9T4uv3iJCCJCeJLpObJbK/QAwP8BfoeUPWaq0VwAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/common/assets/image/hostingModern/features/2.png":
/*!**************************************************************!*\
  !*** ./src/common/assets/image/hostingModern/features/2.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/common/assets/image/hostingModern/features/3.png":
/*!**************************************************************!*\
  !*** ./src/common/assets/image/hostingModern/features/3.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/common/assets/image/hostingModern/illustration2.png":
/*!*****************************************************************!*\
  !*** ./src/common/assets/image/hostingModern/illustration2.png ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/common/assets/image/hostingModern/illustration3.png":
/*!*****************************************************************!*\
  !*** ./src/common/assets/image/hostingModern/illustration3.png ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAaCAYAAAD7aXGFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHdSURBVHgB7ZihcsJAEIY3TAWyEomsRCIjkUhkJI9TicwjRFZGIpGVSCQSR/9NFmbZkuSSaYdLct/MzoVLQ5OPu9u9ROQZ1+s1RsORR1GUkwdMyD9i074cHyV5R5DkQJDkQJDkQJDkQJDkQCEJtckUsUC8U4B9zDlun9+k3SJY0AUnMxRx3zRS8PxrNAs5/oKL/QQHMyoFMVPEBn1LGhkymxISQUJxzNPtLKFZyfZgFMgykyDm5lQxoyYYThe0Kf0WFY9BlBI0M6fue8di4cYHFrRDnMwfsqgVDRQlyCash831vQRQI+pgLljiy3idmtKAkLX4lrA0mX378FAnsShEhsPcXPiBSIZSInC5Q+UI0j88D5Idnt8OkufFpJjMTTeb770oydyc5rUgXm5SPPfp2TWVFXeFqGIO91WUJCK7xtYKYmq3JSIqM90saCtzujeoN54aFpNK4qqkce8mc5Qz30V181Ddytz2HqmiY9N9JAdBjNMGV4Yii7JfuPa5lpIqmjOY/TEPeKZUMnojzm8BxHhKPSk6G4rEjFrQ6lVJg6i/qqNy03aFy5bKKroNEXVAhCTqJs7455/kEbhHlrRRXcWOnjrQSZK6kZjKbLevS6GvQmqiOZX3d6TA//EDcqvOeRk4NZYAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/common/assets/image/hostingModern/illustration4.png":
/*!*****************************************************************!*\
  !*** ./src/common/assets/image/hostingModern/illustration4.png ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAbCAYAAADbAhkjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgB7Zgtc8JAEIbfdCqQyMrISmRlJDKyMjI/CRmJREZGIiv7E5BIHN1NNvTYhHD5aEnCPTM3gQtzHA97e5sDHP/D+Xz2qb1jpNDcFtRW1JbogYce0JeHdFnJ28zzvAwjQuRE1Ph6orajOX6jAy/ogPxLEX4lQb3uhURpOECkLqUxC2qfNOYHOtBalPEv+erWF4ajjNQQ/ThQO6q+Nf2GAC1pJcqQ9KZuDb3szCjoDM2Jl1uCqqygrSxrUWq9m4wuN5nQ3FhSgiK6TALJsVZYiaIBOYJiVCWlY5ZUYsjSiZx3w4hz7r0x7orirRVFJJmDcUhvaQJ7TARehtS29FLP2acW3ysfGkXJDsHhqSUlXbfZR0PzTumSqe48rTTJuilKkt1adXMIb+jLDpgwki4y1d0oq1YUfZgFBao7X+ey3iePyEpVN0uKJSdfcSVKCklearoo4wjazEVSieRYzlsno5vTTCy5+cJFlGT+CNUKmwvJRGqS2SG5NkG11grNWisXJeuSt38dcnsaaDdXSSWScxM0FKZlRPFSqyskUzwJRq1VJ2t5a9cbdbX9VzRU8XiVa4YiifkoJA35gDspWBZFUIJi1+fTC04/x1e5mZ/VwJEjPlIY5UOn86hnxImyxImyxImyxImyxImyZKyiykemWT2EDw4/MvBRT91xx6P4Acp+1Zm4yEkeAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/common/assets/image/hostingModern/logo.png":
/*!********************************************************!*\
  !*** ./src/common/assets/image/hostingModern/logo.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-cefa2e477e6e60ad61893d8c45739705.png";

/***/ }),

/***/ "./src/common/components/Animation/index.js":
/*!**************************************************!*\
  !*** ./src/common/components/Animation/index.js ***!
  \**************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
const AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 1s linear infinite;"], spinner);


/***/ }),

/***/ "./src/common/components/Button/button.style.js":
/*!******************************************************!*\
  !*** ./src/common/components/Button/button.style.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customVariant */ "./src/common/components/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "./src/common/components/base.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "sc-1ng8noy-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&:disabled{background-color:", ";}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('heights.3', '48'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('widths.3', '48'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radius.0', '3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.secondary', '#028489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], _customVariant__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"], _customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _customVariant__WEBPACK_IMPORTED_MODULE_3__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_4__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = _objectSpread(_objectSpread(_objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_1__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "./src/common/components/Button/index.js":
/*!***********************************************!*\
  !*** ./src/common/components/Button/index.js ***!
  \***********************************************/
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
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.style */ "./src/common/components/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./src/common/components/Loader/index.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Button\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Button = (_ref) => {
  let {
    type,
    title,
    icon,
    disabled,
    iconPosition,
    onClick,
    loader,
    loaderColor,
    isMaterial,
    isLoading,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  const buttonIcon = isLoading !== false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: loader ? loader : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      loaderColor: loaderColor || '#30C56D'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 28
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }, undefined) : icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "btn-icon",
    children: icon
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 15
  }, undefined); // set icon position

  const position = iconPosition || 'right';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_button_style__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props), {}, {
    children: [position === 'left' && buttonIcon, title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "btn-text",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }, undefined), position === 'right' && buttonIcon]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

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

/***/ "./src/common/components/Loader/index.js":
/*!***********************************************!*\
  !*** ./src/common/components/Loader/index.js ***!
  \***********************************************/
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
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.style */ "./src/common/components/Loader/loader.style.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\Loader\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Loader = (_ref) => {
  let {
    loaderColor,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_loader_style__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/common/components/Loader/loader.style.js":
/*!******************************************************!*\
  !*** ./src/common/components/Loader/loader.style.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _customVariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customVariant */ "./src/common/components/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Animation */ "./src/common/components/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "./src/common/components/base.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-146tvvk-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], props => props.loaderColor ? props.loaderColor : '#000000', _Animation__WEBPACK_IMPORTED_MODULE_3__["AnimSpinner"], _customVariant__WEBPACK_IMPORTED_MODULE_2__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_4__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "./src/common/components/ScrollSpyMenu/index.js":
/*!******************************************************!*\
  !*** ./src/common/components/ScrollSpyMenu/index.js ***!
  \******************************************************/
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
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/DrawerContext */ "./src/common/contexts/DrawerContext.js");


var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\common\\components\\ScrollSpyMenu\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const ScrollSpyMenu = (_ref) => {
  let {
    className,
    menuItems,
    drawerClose
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "menuItems", "drawerClose"]);

  const {
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_5__["DrawerContext"]); // empty array for scrollspy items

  const scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  const addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scrollspy__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props), {}, {
    children: menuItems.map((menu, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: menu.staticLink ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: menu.path,
        children: menu.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: drawerClose ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: menu.path,
          offset: menu.offset,
          onClick: toggleDrawer,
          children: menu.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: menu.path,
          offset: menu.offset,
          children: menu.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, undefined)
      }, void 0, false)
    }, `menu-item-${index}`, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, undefined))
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollSpyMenu);

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

/***/ "./src/common/components/customVariant.js":
/*!************************************************!*\
  !*** ./src/common/components/customVariant.js ***!
  \************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

const buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
const colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
const sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
const cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
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

/***/ "./src/common/data/HostingModern/index.js":
/*!************************************************!*\
  !*** ./src/common/data/HostingModern/index.js ***!
  \************************************************/
/*! exports provided: MenuItems, Services, accordions, features, pricingInfo, testimonials, faqs, footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordions", function() { return accordions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "features", function() { return features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pricingInfo", function() { return pricingInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testimonials", function() { return testimonials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqs", function() { return faqs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return footer; });
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");
/* harmony import */ var common_assets_image_hostingModern_features_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/assets/image/hostingModern/features/1.png */ "./src/common/assets/image/hostingModern/features/1.png");
/* harmony import */ var common_assets_image_hostingModern_features_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/assets/image/hostingModern/features/2.png */ "./src/common/assets/image/hostingModern/features/2.png");
/* harmony import */ var common_assets_image_hostingModern_features_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/assets/image/hostingModern/features/3.png */ "./src/common/assets/image/hostingModern/features/3.png");
/* harmony import */ var common_assets_image_hostingModern_author1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/assets/image/hostingModern/author1.png */ "./src/common/assets/image/hostingModern/author1.png");
/* harmony import */ var common_assets_image_hostingModern_author1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_assets_image_hostingModern_author1_png__WEBPACK_IMPORTED_MODULE_4__);

const MenuItems = [{
  label: 'Sample Report',
  path: `/report/${lib_constant__WEBPACK_IMPORTED_MODULE_0__["SAMPLE_REPORT"]}`,
  staticLink: true,
  offset: '70'
} // // {
//   label: 'How It Works',
//   path: '#services',
//   offset: '70',
// },
// {
//   label: 'How It Works',
//   path: '#howitworks',
//   offset: '70',
// },
// {
//   label: 'Pricing',
//   path: '#pricing',
//   offset: '70',
// },
// {
//   label: 'Login',
//   path: '#',
//   offset: '70',
// },
];
const Services = [{
  id: 1,
  title: 'Cloud Hosting',
  price: '$0.63/mo'
}, {
  id: 2,
  title: 'Web Hosting',
  price: '$0.75/mo'
}, {
  id: 3,
  title: 'VPS Hosting',
  price: '$0.68/mo'
}, {
  id: 4,
  title: 'WordPress Hosting',
  price: '$0.72/mo'
}, {
  id: 5,
  title: 'Domains',
  price: '$0.75/mo'
}, {
  id: 6,
  title: 'Email Hosting',
  price: '$0.56/mo'
}, {
  id: 7,
  title: 'VPN Service',
  price: '$0.69/mo'
}, {
  id: 8,
  title: 'Image Cloud',
  price: '$0.75/mo'
}];
const accordions = [{
  id: 1,
  expanded: true,
  title: 'Step 1. Find your Car',
  desc: 'Search by vehicle identification number (VIN) or US license plate to find the car you want to research.'
}, {
  id: 2,
  expanded: false,
  title: 'Step 2. Pick your Plan',
  desc: 'Multiple Reports if you\'re still shopping and considering many vehicles. A single report might be right for you if you\'ve found your dream car and are ready to buy.'
}, {
  id: 3,
  expanded: false,
  title: "Step 3. Check Vehicle History",
  desc: 'from your desktop. One time fee. No recurring charges.'
}];


 // import featureIcon4 from 'common/assets/image/hostingModern/features/4.png';
// import featureIcon5 from 'common/assets/image/hostingModern/features/5.png';
// import featureIcon6 from 'common/assets/image/hostingModern/features/6.png';

const features = [{
  id: 1,
  icon: common_assets_image_hostingModern_features_1_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  title: 'Vehicle History Report',
  desc: 'All Rreports provide a complete overview of vehicle current condition and past.'
}, {
  id: 2,
  icon: common_assets_image_hostingModern_features_2_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  title: 'Comprehensive and Informative',
  desc: 'Using this information you will be able to confidently explain to a potential buyer why the vehicle is worth its price!'
}, {
  id: 3,
  icon: common_assets_image_hostingModern_features_3_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  title: 'Secure Transaction',
  desc: 'Sending money or buying with debit and credit cards online, trust PayPal to help keep your transactions secure.'
} // {
//   id: 4,
//   icon: featureIcon4,
//   title: 'Multiple Options',
//   desc:
//     'Get your info tests delivered at home collect a sample from the your task.',
// },
// {
//   id: 5,
//   icon: featureIcon5,
//   title: '5 Star Rating service',
//   desc:
//     'Our greatest asset is the customer!',
// },
// {
//   id: 6,
//   icon: featureIcon6,
//   title: 'Integrated with Shopify',
//   desc:
//     'Get your info tests delivered at home collect a sample from the your task.',
// },
];
const pricingInfo = [{
  id: 1,
  title: 'Vehicle History Report + Lien Check',
  desc: 'Vehicle History Report',
  price: lib_constant__WEBPACK_IMPORTED_MODULE_0__["PRICE"],
  basePrice: lib_constant__WEBPACK_IMPORTED_MODULE_0__["BASE_PRICE"],
  header: 'Best Deal',
  buttonText: 'VIEW SAMPLE REPORT',
  isRecommended: true,
  features: [{
    id: 1,
    name: 'Ultimate access to all course, exercises and assessments',
    isDisabled: false
  }, {
    id: 2,
    name: 'Free access for all kind of exercise corrections with downloads.',
    isDisabled: false
  }, {
    id: 3,
    name: 'Total assessment corrections with free download access system',
    isDisabled: false
  }, {
    id: 4,
    name: 'Unlimited download of courses on the mobile app contents',
    isDisabled: true
  }]
} // {
//   id: 2,
//   title: 'Premium Pack',
//   desc: 'Check the history of 3 vehicles for one low price!',
//   price: 49.55,
//   buttonText: 'Start Free Trial',
//   isRecommended: true,
//   header: 'Best Deal',
//   features: [
//     {
//       id: 1,
//       name: 'Ultimate access to all course, exercises and assessments',
//       isDisabled: false,
//     },
//     {
//       id: 2,
//       name: 'Free acess for all kind of exercise corrections with downloads.',
//       isDisabled: false,
//     },
//     {
//       id: 3,
//       name: 'Total assessment corrections with free download access system',
//       isDisabled: false,
//     },
//     {
//       id: 4,
//       name: 'Unlimited download of courses on the mobile app contents',
//       isDisabled: false,
//     },
//   ],
// }
];

const testimonials = [{
  id: 1,
  image: common_assets_image_hostingModern_author1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  name: 'Melina Pettendorfer',
  designation: 'CEO of Uber',
  quote: "Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services"
}, {
  id: 2,
  image: common_assets_image_hostingModern_author1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  name: 'Kelsi Gordon',
  designation: 'Insurance Broker',
  quote: 'My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business'
}, {
  id: 3,
  image: common_assets_image_hostingModern_author1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  name: 'Tasha Zuzalek',
  designation: 'Facebook Project Manager',
  quote: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team."
}];
const faqs = [{
  id: 1,
  title: 'Which domain should I purchase?',
  desc: `We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result`
}, {
  id: 4,
  title: 'Can I upgrade or downgrade my web hosting plan',
  desc: `The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine.`
}, {
  id: 2,
  title: 'What are some tips when choosing a name?',
  desc: `Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.`
}, {
  id: 5,
  title: 'How do I upgrade the storage capacity of my hosting plan?',
  desc: `Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.`
}, {
  id: 3,
  title: 'What if I need help choosing the right domain?',
  desc: `Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates.`
}, {
  id: 6,
  title: 'What is in InMotion Hosting’s uptime rate?',
  desc: `Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install`
}, {
  id: 7,
  title: 'Learn from community on Brandwagon',
  desc: `Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.`
}];
const footer = {
  aboutUs: [{
    id: 1,
    title: 'Support Center'
  }, {
    id: 2,
    title: 'Customer Support'
  }, {
    id: 3,
    title: 'About Us'
  }, {
    id: 4,
    title: 'Copyright'
  }],
  ourInformation: [{
    id: 1,
    title: 'Return Policy'
  }, {
    id: 2,
    title: 'Privacy Policy'
  }, {
    id: 3,
    title: 'Terms & Conditions'
  }, {
    id: 4,
    title: 'Site Map'
  }],
  myAccount: [{
    id: 1,
    title: 'Press inquiries'
  }, {
    id: 2,
    title: 'Social media'
  }, {
    id: 3,
    title: 'directories'
  }, {
    id: 4,
    title: 'Images & B-roll'
  }]
};

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

/***/ "./src/containers/HostingModern/CallToAction/callToAction.style.js":
/*!*************************************************************************!*\
  !*** ./src/containers/HostingModern/CallToAction/callToAction.style.js ***!
  \*************************************************************************/
/*! exports provided: Content, ButtonWrap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrap", function() { return ButtonWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_assets_image_hostingModern_illustration2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/assets/image/hostingModern/illustration2.png */ "./src/common/assets/image/hostingModern/illustration2.png");



const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "callToActionstyle__SectionWrapper",
  componentId: "sc-1pol37a-0"
})(["position:relative;margin-bottom:-110px;z-index:10;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "callToActionstyle__Content",
  componentId: "sc-1pol37a-1"
})(["background:", " url(", ") no-repeat 66% center;border-radius:15px;padding:40px 75px;display:flex;align-items:center;justify-content:space-between;@media only screen and (max-width:768px){padding:30px 45px;}@media only screen and (max-width:767px){flex-wrap:wrap;}h3{color:#fff;font-family:'Bree Serif',serif;font-weight:400;font-size:36px;line-height:55px;letter-spacing:-0.5px;max-width:52%;@media only screen and (max-width:768px){font-size:26px;line-height:48px;}@media only screen and (max-width:767px){font-size:24px;line-height:40px;max-width:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'), common_assets_image_hostingModern_illustration2_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
const ButtonWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "callToActionstyle__ButtonWrap",
  componentId: "sc-1pol37a-2"
})(["display:flex;flex-direction:column;align-items:center;button{background-color:#fff;color:#183656;margin:15px 0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "./src/containers/HostingModern/CallToAction/index.js":
/*!************************************************************!*\
  !*** ./src/containers/HostingModern/CallToAction/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/components/UI/ContainerTwo */ "./src/common/components/UI/ContainerTwo/index.js");
/* harmony import */ var common_components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/components/Heading */ "./src/common/components/Heading/index.js");
/* harmony import */ var common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/components/Button */ "./src/common/components/Button/index.js");
/* harmony import */ var common_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/components/Link */ "./src/common/components/Link/index.js");
/* harmony import */ var common_assets_image_hostingModern_illustration3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/assets/image/hostingModern/illustration3.png */ "./src/common/assets/image/hostingModern/illustration3.png");
/* harmony import */ var common_assets_image_hostingModern_illustration4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/assets/image/hostingModern/illustration4.png */ "./src/common/assets/image/hostingModern/illustration4.png");
/* harmony import */ var _callToAction_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./callToAction.style */ "./src/containers/HostingModern/CallToAction/callToAction.style.js");
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\HostingModern\\CallToAction\\index.js";










const CallToAction = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_callToAction_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_callToAction_style__WEBPACK_IMPORTED_MODULE_8__["Content"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
          as: "h3",
          children: "Lost your order?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_callToAction_style__WEBPACK_IMPORTED_MODULE_8__["ButtonWrap"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: common_assets_image_hostingModern_illustration3_png__WEBPACK_IMPORTED_MODULE_6__["default"],
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
            href: `mailto:${lib_constant__WEBPACK_IMPORTED_MODULE_9__["EMAIL"]}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
              title: "CONTACT US NOW"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 44
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: common_assets_image_hostingModern_illustration4_png__WEBPACK_IMPORTED_MODULE_7__["default"],
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./src/containers/HostingModern/Navbar/index.js":
/*!******************************************************!*\
  !*** ./src/containers/HostingModern/Navbar/index.js ***!
  \******************************************************/
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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_ionicons_androidMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/ionicons/androidMenu */ "react-icons-kit/ionicons/androidMenu");
/* harmony import */ var react_icons_kit_ionicons_androidMenu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_androidMenu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit/ionicons/androidClose */ "react-icons-kit/ionicons/androidClose");
/* harmony import */ var react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/components/UI/ContainerTwo */ "./src/common/components/UI/ContainerTwo/index.js");
/* harmony import */ var common_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/components/ScrollSpyMenu */ "./src/common/components/ScrollSpyMenu/index.js");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var common_components_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/components/Image */ "./src/common/components/Image/index.js");
/* harmony import */ var common_components_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/components/Button */ "./src/common/components/Button/index.js");
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");
/* harmony import */ var common_data_HostingModern__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/data/HostingModern */ "./src/common/data/HostingModern/index.js");
/* harmony import */ var common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/assets/image/hostingModern/logo.png */ "./src/common/assets/image/hostingModern/logo.png");
/* harmony import */ var common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar.style */ "./src/containers/HostingModern/Navbar/navbar.style.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\HostingModern\\Navbar\\index.js";
















const Navbar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(({
  isPrint = false,
  onPrint
}, ref) => {
  const {
    0: mobileMenu,
    1: setMobileMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleHandleMenuClose = () => {
    setMobileMenu(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar_style__WEBPACK_IMPORTED_MODULE_16__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_UI_ContainerTwo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar_style__WEBPACK_IMPORTED_MODULE_16__["HeaderInner"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar_style__WEBPACK_IMPORTED_MODULE_16__["Logo"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
              src: common_assets_image_hostingModern_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
              alt: lib_constant__WEBPACK_IMPORTED_MODULE_13__["NAME"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar_style__WEBPACK_IMPORTED_MODULE_16__["PrimaryNav"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "primaryNav",
            menuItems: common_data_HostingModern__WEBPACK_IMPORTED_MODULE_14__["MenuItems"] // offset={-70}

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 12
          }, undefined), isPrint && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "joinButton",
              onClick: () => onPrint(),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
                title: "Export To PDF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "menubar",
          icon: mobileMenu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            style: {
              color: '#02073E'
            },
            className: "bar",
            size: 32,
            icon: react_icons_kit_ionicons_androidClose__WEBPACK_IMPORTED_MODULE_6__["androidClose"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
              style: {
                color: '#02073E'
              },
              className: "close",
              icon: react_icons_kit_ionicons_androidMenu__WEBPACK_IMPORTED_MODULE_5__["androidMenu"],
              size: 32
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, undefined),
          color: "#0F2137",
          variant: "textButton",
          onClick: handleMobileMenu
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navbar_style__WEBPACK_IMPORTED_MODULE_16__["MobileNav"], {
      className: mobileMenu ? 'is-active' : '',
      children: !isPrint && common_data_HostingModern__WEBPACK_IMPORTED_MODULE_14__["MenuItems"].map((menu, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: menu.path,
          onClick: handleHandleMenuClose,
          children: menu.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, undefined)
      }, `menu_key${index}`, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/containers/HostingModern/Navbar/navbar.style.js":
/*!*************************************************************!*\
  !*** ./src/containers/HostingModern/Navbar/navbar.style.js ***!
  \*************************************************************/
/*! exports provided: HeaderInner, Logo, PrimaryNav, MobileNav, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInner", function() { return HeaderInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryNav", function() { return PrimaryNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNav", function() { return MobileNav; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "navbarstyle__HeaderWrapper",
  componentId: "sc-1ad2mfu-0"
})(["background-color:#fff;padding:15px 0;@media print{display:none;}"]);
const HeaderInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "navbarstyle__HeaderInner",
  componentId: "sc-1ad2mfu-1"
})(["display:flex;align-items:center;@media only screen and (max-width:768px){justify-content:space-between;}.menubar{display:none;@media only screen and (max-width:768px){display:block;}}"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "navbarstyle__Logo",
  componentId: "sc-1ad2mfu-2"
})(["margin-right:50px;cursor:pointer;@media only screen and (min-width:1024px) and (max-height:1366px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio:1.5){margin-right:25px;}"]);
const PrimaryNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__PrimaryNav",
  componentId: "sc-1ad2mfu-3"
})(["display:flex;align-items:center;width:100%;@media only screen and (max-width:768px){display:none;}.primaryNav{display:flex;width:100%;li{a{color:", ";display:inline-flex;}margin-right:24px;}.is-current a{color:", ";}@media print{display:none;}}.joinButton{@media print{display:none;}white-space:nowrap;button{@media only screen and (min-width:1024px) and (max-height:1366px) and (orientation:portrait) and (-webkit-min-device-pixel-ratio:1.5){font-size:14px;min-width:auto;padding:0 10px;min-height:32px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textPrimary', '#02073E'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary'));
const MobileNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__MobileNav",
  componentId: "sc-1ad2mfu-4"
})(["background-color:#fff;padding:30px;opacity:0;visibility:hidden;left:0;right:0;position:absolute;box-shadow:rgba(0,0,0,0.15) 0 10px 13px 0px;top:100%;transition:0.3s ease 0s;&.is-active{opacity:1;visibility:visible;}.mobileNav{@media print{display:none;}li{a{color:", ";display:flex;padding:13px 0;}margin-right:24px;&:last-child{margin-left:auto;}}.is-current a{color:", ";}}.joinButton{margin-top:15px;display:block;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textPrimary', '#02073E'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary'));
/* harmony default export */ __webpack_exports__["default"] = (HeaderWrapper);

/***/ }),

/***/ "./src/containers/HostingModern/hostingModern.style.js":
/*!*************************************************************!*\
  !*** ./src/containers/HostingModern/hostingModern.style.js ***!
  \*************************************************************/
/*! exports provided: GlobalStyle, ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(["body{font-family:'DM Sans',sans-serif;}h1,h2,h3,h4,h5,h6,button,input,textarea{font-family:'DM Sans',sans-serif;}section{position:relative;}.reuseModalHolder.sample-modal{margin-top:100px;@media (min-width:768px){top:0!important;left:0!important;max-width:100%!important;max-height:100%!important;}}.reuseModalHolder.sample-modal .innerRndComponent{overflow-y:auto;}"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "hostingModernstyle__ContentWrapper",
  componentId: "sc-1sdrnhl-0"
})([".sticky-nav-active header{box-shadow:rgba(0,0,0,0.15) 0px 0px 20px;}"]);

/***/ }),

/***/ "./src/containers/Report/ReportNotFound/index.js":
/*!*******************************************************!*\
  !*** ./src/containers/Report/ReportNotFound/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/components/Heading */ "./src/common/components/Heading/index.js");
/* harmony import */ var common_components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/components/Text */ "./src/common/components/Text/index.js");
/* harmony import */ var _reportNotFound_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportNotFound.styles */ "./src/containers/Report/ReportNotFound/reportNotFound.styles.js");
/* harmony import */ var common_assets_image_hostingModern_car_report_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/assets/image/hostingModern/car-report.png */ "./src/common/assets/image/hostingModern/car-report.png");
/* harmony import */ var common_assets_image_hostingModern_car_report_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_assets_image_hostingModern_car_report_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/components/Image */ "./src/common/components/Image/index.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\Report\\ReportNotFound\\index.js";







const ReportSection = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_reportNotFound_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: common_assets_image_hostingModern_car_report_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "Illustration"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      as: "h3",
      children: "Please wait 5 to 10 minutes your report is being generated."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: "Refresh the page in a couple of minutes."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: "Please double-check that you entered the correct email address on the website."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: "You can check your email for the carfax report."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_components_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      as: "h5",
      children: "If you have any questions or problems, please contact live support at the bottom right of the screen."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ReportSection);

/***/ }),

/***/ "./src/containers/Report/ReportNotFound/reportNotFound.styles.js":
/*!***********************************************************************!*\
  !*** ./src/containers/Report/ReportNotFound/reportNotFound.styles.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ReportWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "reportNotFoundstyles__ReportWrapper",
  componentId: "sc-wf0a8g-0"
})(["text-align:center;margin:10px 100px;img{max-width:500px;margin:auto;}@media (max-width:768px){margin:10px 50px;text-align:left;img{max-width:100%;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ReportWrapper);

/***/ }),

/***/ "./src/containers/Report/ReportSection/index.js":
/*!******************************************************!*\
  !*** ./src/containers/Report/ReportSection/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reportSection_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportSection.styles */ "./src/containers/Report/ReportSection/reportSection.styles.js");
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");

var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\containers\\Report\\ReportSection\\index.js";


const {
  base64decode
} = __webpack_require__(/*! nodejs-base64 */ "nodejs-base64");




function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

const ReportSection = ({
  data
}) => {
  const content = data.content;
  let filtered = content && base64decode(content);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const g = document.getElementById('nav');
    const k = document.getElementById('printModal');
    if (g) g.remove();
    if (k) k.remove();
  }, [filtered]);
  filtered = replaceAll(filtered, '<meta content="width=device-width, initial-scale=1.0" name="viewport"/>', '');
  filtered = replaceAll(filtered, '="https://api.carfax.pro/wp-content/themes/apicarfaxpro/carfax/car-fax-files/css/', `="${lib_constant__WEBPACK_IMPORTED_MODULE_3__["URLWEB"]}carfax/css/vhr/`);
  filtered = replaceAll(filtered, '="https://api.carfax.pro/wp-content/themes/apicarfaxpro/carfax/car-fax-files/js/', `="${lib_constant__WEBPACK_IMPORTED_MODULE_3__["URLWEB"]}carfax/js/vhr/`);
  filtered = replaceAll(filtered, 'src="https://api.carfax.pro/wp-content/themes/apicarfaxpro/carfax/car-fax-files/img/', `src="${lib_constant__WEBPACK_IMPORTED_MODULE_3__["URLWEB"]}carfax/img/vhr/`);
  filtered = replaceAll(filtered, 'icon-Down-med', 'icon-down-med');
  filtered = replaceAll(filtered, 'icon-Up-med', 'icon-up-med');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_reportSection_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_reportSection_styles__WEBPACK_IMPORTED_MODULE_2__["Report"], {
      dangerouslySetInnerHTML: {
        __html: filtered
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ReportSection);

/***/ }),

/***/ "./src/containers/Report/ReportSection/reportSection.styles.js":
/*!*********************************************************************!*\
  !*** ./src/containers/Report/ReportSection/reportSection.styles.js ***!
  \*********************************************************************/
/*! exports provided: Report, Loader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const ReportWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "reportSectionstyles__ReportWrapper",
  componentId: "sc-zy3vga-0"
})([""]);
const Report = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "reportSectionstyles__Report",
  componentId: "sc-zy3vga-1"
})([""]);
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "reportSectionstyles__Loader",
  componentId: "sc-zy3vga-2"
})(["border:16px solid ", ";border-radius:50%;border-top:16px solid ", ";width:120px;height:120px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.backgroundHover'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary'));
/* harmony default export */ __webpack_exports__["default"] = (ReportWrapper);

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

/***/ "./src/pages/report/[vin].js":
/*!***********************************!*\
  !*** ./src/pages/report/[vin].js ***!
  \***********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_theme_hostingModern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/theme/hostingModern */ "./src/common/theme/hostingModern/index.js");
/* harmony import */ var containers_HostingModern_hostingModern_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/HostingModern/hostingModern.style */ "./src/containers/HostingModern/hostingModern.style.js");
/* harmony import */ var common_assets_css_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/assets/css/style */ "./src/common/assets/css/style.js");
/* harmony import */ var common_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/contexts/DrawerContext */ "./src/common/contexts/DrawerContext.js");
/* harmony import */ var containers_HostingModern_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/HostingModern/Navbar */ "./src/containers/HostingModern/Navbar/index.js");
/* harmony import */ var containers_Report_ReportSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! containers/Report/ReportSection */ "./src/containers/Report/ReportSection/index.js");
/* harmony import */ var lib_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/constant */ "./src/lib/constant.js");
/* harmony import */ var containers_HostingModern_CallToAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/HostingModern/CallToAction */ "./src/containers/HostingModern/CallToAction/index.js");
/* harmony import */ var containers_Report_ReportNotFound__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! containers/Report/ReportNotFound */ "./src/containers/Report/ReportNotFound/index.js");


var _jsxFileName = "E:\\vehiclepaperpremium-main\\src\\pages\\report\\[vin].js";








 // import Footer from 'containers/HostingModern/Footer';







const ReportVIN = ({
  data,
  vin
}) => {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = lib_constant__WEBPACK_IMPORTED_MODULE_11__["CRISPID"];

    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_theme_hostingModern__WEBPACK_IMPORTED_MODULE_5__["theme"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: data.success ? vin : `${lib_constant__WEBPACK_IMPORTED_MODULE_11__["NAME"]} - Report`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "Description",
        content: "Original and Actual Carfax"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "theme-color",
        content: lib_constant__WEBPACK_IMPORTED_MODULE_11__["COLOR_PRIMARY"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Bree+Serif|DM+Sans:400,400i,500,500i,700,700i&display=swap"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_assets_css_style__WEBPACK_IMPORTED_MODULE_7__["ResetCSS"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_HostingModern_hostingModern_style__WEBPACK_IMPORTED_MODULE_6__["GlobalStyle"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_HostingModern_hostingModern_style__WEBPACK_IMPORTED_MODULE_6__["ContentWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_stickynode__WEBPACK_IMPORTED_MODULE_4___default.a, {
        top: 0,
        innerZ: 9999,
        activeClass: "sticky-nav-active",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(common_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_8__["DrawerProvider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_HostingModern_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            isPrint: data.success,
            onPrint: () => window.print()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), data.success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_Report_ReportSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: data,
        vin: vin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 26
      }, undefined), !data.success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_Report_ReportNotFound__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(containers_HostingModern_CallToAction__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

async function getServerSideProps(context) {
  const {
    vin
  } = context.query;
  const res = await fetch(`${lib_constant__WEBPACK_IMPORTED_MODULE_11__["URLWEB"]}api/report/${vin}`);
  const data = await res.json(); // Pass data to the page via props

  return {
    props: {
      data,
      vin
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (ReportVIN);

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "nodejs-base64":
/*!********************************!*\
  !*** external "nodejs-base64" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodejs-base64");

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

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/ionicons/androidClose":
/*!********************************************************!*\
  !*** external "react-icons-kit/ionicons/androidClose" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidClose");

/***/ }),

/***/ "react-icons-kit/ionicons/androidMenu":
/*!*******************************************************!*\
  !*** external "react-icons-kit/ionicons/androidMenu" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/androidMenu");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXNzZXRzL2Nzcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2F1dGhvcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXNzZXRzL2ltYWdlL2hvc3RpbmdNb2Rlcm4vY2FyLXJlcG9ydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9mZWF0dXJlcy8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2ZlYXR1cmVzLzIucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXNzZXRzL2ltYWdlL2hvc3RpbmdNb2Rlcm4vZmVhdHVyZXMvMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9pbGx1c3RyYXRpb24yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2lsbHVzdHJhdGlvbjMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXNzZXRzL2ltYWdlL2hvc3RpbmdNb2Rlcm4vaWxsdXN0cmF0aW9uNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvQW5pbWF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLnN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9MaW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL1Njcm9sbFNweU1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL1RleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL1VJL0NvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvVUkvQ29udGFpbmVyVHdvL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9jdXN0b21WYXJpYW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29udGV4dHMvRHJhd2VyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGEvSG9zdGluZ01vZGVybi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3RoZW1lL2hvc3RpbmdNb2Rlcm4vY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdGhlbWUvaG9zdGluZ01vZGVybi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib3N0aW5nTW9kZXJuL0NhbGxUb0FjdGlvbi9jYWxsVG9BY3Rpb24uc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9DYWxsVG9BY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9OYXZiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9OYXZiYXIvbmF2YmFyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvc3RpbmdNb2Rlcm4vaG9zdGluZ01vZGVybi5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZXBvcnQvUmVwb3J0Tm90Rm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVwb3J0L1JlcG9ydE5vdEZvdW5kL3JlcG9ydE5vdEZvdW5kLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZXBvcnQvUmVwb3J0U2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZXBvcnQvUmVwb3J0U2VjdGlvbi9yZXBvcnRTZWN0aW9uLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9yZXBvcnQvW3Zpbl0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZWpzLWJhc2U2NFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvaW9uaWNvbnMvYW5kcm9pZENsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMta2l0L2lvbmljb25zL2FuZHJvaWRNZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXZlYWwvRmFkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbHNweVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1zeXN0ZW1cIiJdLCJuYW1lcyI6WyJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXdyaXRlc1Jlc3VsdCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZ2V0U2FmZVBhcmFtTmFtZSIsInBhcmFtTmFtZSIsIm5ld1BhcmFtTmFtZSIsImkiLCJjaGFyQ29kZSIsImFsbE1hdGNoIiwiaGFzIiwiaGFzSXRlbSIsInJlcSIsIm1hdGNoZXMiLCJncm91cEtleSIsInZhbGlkYXRlIiwicGFyc2VkRGVzdGluYXRpb24iLCJoYWRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsImNvbXBpbGVOb25QYXRoIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwibWF0Y2hlZFBhZ2UiLCJmc1BhdGhuYW1lIiwiaGFuZGxlUmV3cml0ZSIsInJld3JpdGUiLCJoYXNQYXJhbXMiLCJoZWFkZXJzIiwiY29va2llcyIsImFjYyIsImRlc3RSZXMiLCJmaW5pc2hlZCIsInJld3JpdGVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUmVzZXRDU1MiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lR2V0Iiwic3Bpbm5lciIsImtleWZyYW1lcyIsIkFuaW1TcGlubmVyIiwiQnV0dG9uU3R5bGUiLCJzdHlsZWQiLCJidXR0b24iLCJhbGlnbkl0ZW1zIiwiYm94U2hhZG93IiwiYnV0dG9uU3R5bGUiLCJjb2xvclN0eWxlIiwic2l6ZVN0eWxlIiwicHJvcFR5cGVzIiwidmFyaWFudCIsImRpc3BsYXlOYW1lIiwiQnV0dG9uIiwidHlwZSIsInRpdGxlIiwiaWNvbiIsImljb25Qb3NpdGlvbiIsImxvYWRlciIsImxvYWRlckNvbG9yIiwiaXNNYXRlcmlhbCIsImlzTG9hZGluZyIsImNsYXNzTmFtZSIsImFkZEFsbENsYXNzZXMiLCJidXR0b25JY29uIiwicG9zaXRpb24iLCJqb2luIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJvYmplY3QiLCJib29sIiwiY29sb3JzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIkhlYWRpbmdXcmFwcGVyIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRoZW1lZCIsIkhlYWRpbmciLCJtdCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5T2YiLCJtYiIsIkltYWdlV3JhcHBlciIsImRpc3BsYXkiLCJtYXhXaWR0aCIsImhlaWdodCIsIkltYWdlIiwiYWx0IiwiaXNSZXF1aXJlZCIsIkxpbmtXcmFwcGVyIiwidGV4dERlY29yYXRpb24iLCJhbnkiLCJMb2FkZXIiLCJ3aWR0aCIsIkxvYWRlclN0eWxlIiwic3BhbiIsIlNjcm9sbFNweU1lbnUiLCJtZW51SXRlbXMiLCJkcmF3ZXJDbG9zZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJzY3JvbGxJdGVtcyIsImZvckVhY2giLCJzbGljZSIsInRvZ2dsZURyYXdlciIsIm1lbnUiLCJpbmRleCIsInN0YXRpY0xpbmsiLCJsYWJlbCIsIm9mZnNldCIsImFycmF5IiwiY3VycmVudENsYXNzTmFtZSIsInNjcm9sbGVkUGFzdENsYXNzTmFtZSIsImNvbXBvbmVudFRhZyIsInN0eWxlIiwicm9vdEVsIiwib25VcGRhdGUiLCJUZXh0V3JhcHBlciIsIlRleHQiLCJDb250YWluZXIiLCJmdWxsV2lkdGgiLCJub0d1dHRlciIsIm1vYmlsZUd1dHRlciIsIkNvbnRhaW5lcldyYXBwZXIiLCJkaXYiLCJ0aGVtZSIsImNvbXBvc2UiLCJib3hTaXppbmciLCJzcGFjZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImZsZXgiLCJvcmRlciIsImFsaWduU2VsZiIsImJvcmRlcnMiLCJib3JkZXJDb2xvciIsInByb3AiLCJjYXJkcyIsImluaXRpYWxTdGF0ZSIsImlzT3BlbiIsInJlZHVjZXIiLCJhY3Rpb24iLCJjcmVhdGVDb250ZXh0IiwiRHJhd2VyUHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwiTWVudUl0ZW1zIiwiU0FNUExFX1JFUE9SVCIsIlNlcnZpY2VzIiwicHJpY2UiLCJhY2NvcmRpb25zIiwiZXhwYW5kZWQiLCJkZXNjIiwiZmVhdHVyZXMiLCJmZWF0dXJlSWNvbjEiLCJmZWF0dXJlSWNvbjIiLCJmZWF0dXJlSWNvbjMiLCJwcmljaW5nSW5mbyIsIlBSSUNFIiwiYmFzZVByaWNlIiwiQkFTRV9QUklDRSIsImhlYWRlciIsImJ1dHRvblRleHQiLCJpc1JlY29tbWVuZGVkIiwidGVzdGltb25pYWxzIiwiaW1hZ2UiLCJhdXRob3IxIiwiZGVzaWduYXRpb24iLCJxdW90ZSIsImZhcXMiLCJmb290ZXIiLCJhYm91dFVzIiwib3VySW5mb3JtYXRpb24iLCJteUFjY291bnQiLCJ0cmFuc3BhcmVudCIsImJsYWNrIiwid2hpdGUiLCJ0ZXh0UHJpbWFyeSIsInByaW1hcnkiLCJDT0xPUl9QUklNQVJZIiwicHJpbWFyeUhvdmVyIiwiYmFja2dyb3VuZEhvdmVyIiwiQ09MT1JfQkFDS0dST1VORF9QUklNQVJZIiwiYm9yZGVyIiwic2Vjb25kYXJ5IiwiQ09MT1JfU0VDT05EQVJZIiwidGVydGlhcnkiLCJicmVha3BvaW50cyIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwibGluZUhlaWdodHMiLCJzb2xpZCIsImNvcHkiLCJsZXR0ZXJTcGFjaW5ncyIsIm5vcm1hbCIsInRyYWNrZWQiLCJ0aWdodCIsIm1lZ2EiLCJyYWRpdXMiLCJ3aWR0aHMiLCJoZWlnaHRzIiwibWF4V2lkdGhzIiwiY29sb3JTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5Qm94U2hhZG93Iiwic2Vjb25kYXJ5SG92ZXIiLCJ3YXJuaW5nIiwieWVsbG93IiwieWVsbG93SG92ZXIiLCJwcmltYXJ5V2l0aEJnIiwic2Vjb25kYXJ5V2l0aEJnIiwid2FybmluZ1dpdGhCZyIsImVycm9yV2l0aEJnIiwidHJhbnNwYXJlbnRCZyIsImJ1dHRvblN0eWxlcyIsInRleHRCdXR0b24iLCJwYWRkaW5nIiwib3V0bGluZWQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiZmFiIiwiYm9yZGVyUmFkaXVzIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nTGVmdCIsImV4dGVuZGVkRmFiIiwiU2VjdGlvbldyYXBwZXIiLCJzZWN0aW9uIiwiQ29udGVudCIsImlsbHVzdHJhdGlvbiIsIkJ1dHRvbldyYXAiLCJDYWxsVG9BY3Rpb24iLCJFTUFJTCIsImlsbHVzdHJhdGlvbjIiLCJOYXZiYXIiLCJmb3J3YXJkUmVmIiwiaXNQcmludCIsIm9uUHJpbnQiLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsInVzZVN0YXRlIiwiaGFuZGxlTW9iaWxlTWVudSIsImhhbmRsZUhhbmRsZU1lbnVDbG9zZSIsImxvZ28iLCJOQU1FIiwiYW5kcm9pZENsb3NlIiwiYW5kcm9pZE1lbnUiLCJIZWFkZXJXcmFwcGVyIiwiSGVhZGVySW5uZXIiLCJMb2dvIiwiUHJpbWFyeU5hdiIsIm5hdiIsIk1vYmlsZU5hdiIsIkdsb2JhbFN0eWxlIiwiQ29udGVudFdyYXBwZXIiLCJSZXBvcnRTZWN0aW9uIiwiUmVwb3J0V3JhcHBlciIsImJhc2U2NGRlY29kZSIsInJlcGxhY2VBbGwiLCJzcGxpdCIsImZpbHRlcmVkIiwidXNlRWZmZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJrIiwicmVtb3ZlIiwiVVJMV0VCIiwiX19odG1sIiwiUmVwb3J0IiwiUEFZUEFMX0NMSUVOVElEIiwiQVBJVVJMIiwiTU9UVE8iLCJDUklTUElEIiwiRklSRUJBU0VfREFUQUJBU0VfVVJMIiwiQk9UX1RPS0VOIiwiQ0xJRU5UX0lEX0dPT0dMRSIsIkNMSUVOVF9TRUNSRVRfR09PR0xFIiwiUkVGUkVTSF9UT0tFTl9HT09HTEUiLCJUT0tFTl9HT09HTEUiLCJGSVJFQkFTRV9BUElfS0VZIiwiRklSRUJBU0VfQVVUSF9ET01BSU4iLCJGSVJFQkFTRV9QUk9KRUNUX0lEIiwiRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiRklSRUJBU0VfQVBQX0lEIiwiRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwiQVBJX0tFWV9DQVJGQVhfUFJPIiwiUmVwb3J0VklOIiwidmluIiwiJGNyaXNwIiwiQ1JJU1BfV0VCU0lURV9JRCIsImQiLCJzIiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsInN1Y2Nlc3MiLCJwcmludCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Tm5CLEVBT0csQ0FBQ25jLElBQUksQ0FBQzRjLE9BQU4saUJBQ0M7QUFBQSxnQ0FDRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLHNCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlDRCxDQTlDRDs7QUFnRE8sZUFBZUUsa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU07QUFBRVo7QUFBRixNQUFVWSxPQUFPLENBQUMxZSxLQUF4QjtBQUNBLFFBQU1uSCxHQUFHLEdBQUcsTUFBTXlCLEtBQUssQ0FBRSxHQUFFaWlCLG9EQUFPLGNBQWF1QixHQUFJLEVBQTVCLENBQXZCO0FBQ0EsUUFBTW5jLElBQUksR0FBRyxNQUFNOUksR0FBRyxDQUFDOGxCLElBQUosRUFBbkIsQ0FIZ0QsQ0FLaEQ7O0FBQ0EsU0FBTztBQUFFN3BCLFNBQUssRUFBRTtBQUFFNk0sVUFBRjtBQUFRbWM7QUFBUjtBQUFULEdBQVA7QUFDRDtBQUVjRCx3RUFBZixFOzs7Ozs7Ozs7OztBQzVFQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9yZXBvcnQvW3Zpbl0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9yZXBvcnQvW3Zpbl0uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLmFzUGF0aCkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5pbXBvcnQgeyBSb3V0ZUhhcyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbi8vIGVuc3VyZSBvbmx5IGEtekEtWiBhcmUgdXNlZCBmb3IgcGFyYW0gbmFtZXMgZm9yIHByb3BlciBpbnRlcnBvbGF0aW5nXG4vLyB3aXRoIHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgY29uc3QgZ2V0U2FmZVBhcmFtTmFtZSA9IChwYXJhbU5hbWU6IHN0cmluZykgPT4ge1xuICBsZXQgbmV3UGFyYW1OYW1lID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtTmFtZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoYXJDb2RlID0gcGFyYW1OYW1lLmNoYXJDb2RlQXQoaSlcblxuICAgIGlmIChcbiAgICAgIChjaGFyQ29kZSA+IDY0ICYmIGNoYXJDb2RlIDwgOTEpIHx8IC8vIEEtWlxuICAgICAgKGNoYXJDb2RlID4gOTYgJiYgY2hhckNvZGUgPCAxMjMpIC8vIGEtelxuICAgICkge1xuICAgICAgbmV3UGFyYW1OYW1lICs9IHBhcmFtTmFtZVtpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3UGFyYW1OYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEhhcyhcbiAgcmVxOiBJbmNvbWluZ01lc3NhZ2UsXG4gIGhhczogUm91dGVIYXNbXSxcbiAgcXVlcnk6IFBhcmFtc1xuKTogZmFsc2UgfCBQYXJhbXMge1xuICBjb25zdCBwYXJhbXM6IFBhcmFtcyA9IHt9XG4gIGNvbnN0IGFsbE1hdGNoID0gaGFzLmV2ZXJ5KChoYXNJdGVtKSA9PiB7XG4gICAgbGV0IHZhbHVlOiB1bmRlZmluZWQgfCBzdHJpbmdcbiAgICBsZXQga2V5ID0gaGFzSXRlbS5rZXlcblxuICAgIHN3aXRjaCAoaGFzSXRlbS50eXBlKSB7XG4gICAgICBjYXNlICdoZWFkZXInOiB7XG4gICAgICAgIGtleSA9IGtleSEudG9Mb3dlckNhc2UoKVxuICAgICAgICB2YWx1ZSA9IHJlcS5oZWFkZXJzW2tleV0gYXMgc3RyaW5nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdjb29raWUnOiB7XG4gICAgICAgIHZhbHVlID0gKHJlcSBhcyBhbnkpLmNvb2tpZXNbaGFzSXRlbS5rZXldXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdxdWVyeSc6IHtcbiAgICAgICAgdmFsdWUgPSBxdWVyeVtrZXkhXVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnaG9zdCc6IHtcbiAgICAgICAgY29uc3QgeyBob3N0IH0gPSByZXE/LmhlYWRlcnMgfHwge31cbiAgICAgICAgLy8gcmVtb3ZlIHBvcnQgZnJvbSBob3N0IGlmIHByZXNlbnRcbiAgICAgICAgY29uc3QgaG9zdG5hbWUgPSBob3N0Py5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgdmFsdWUgPSBob3N0bmFtZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGFzSXRlbS52YWx1ZSAmJiB2YWx1ZSkge1xuICAgICAgcGFyYW1zW2dldFNhZmVQYXJhbU5hbWUoa2V5ISldID0gdmFsdWVcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IG5ldyBSZWdFeHAoYF4ke2hhc0l0ZW0udmFsdWV9JGApXG4gICAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2gobWF0Y2hlcilcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMuZ3JvdXBzKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMobWF0Y2hlcy5ncm91cHMpLmZvckVhY2goKGdyb3VwS2V5KSA9PiB7XG4gICAgICAgICAgICBwYXJhbXNbZ3JvdXBLZXldID0gbWF0Y2hlcy5ncm91cHMhW2dyb3VwS2V5XVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzSXRlbS50eXBlID09PSAnaG9zdCcgJiYgbWF0Y2hlc1swXSkge1xuICAgICAgICAgIHBhcmFtcy5ob3N0ID0gbWF0Y2hlc1swXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIGlmIChhbGxNYXRjaCkge1xuICAgIHJldHVybiBwYXJhbXNcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVOb25QYXRoKHZhbHVlOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogc3RyaW5nIHtcbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcygnOicpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJhbXMpKSB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKGA6JHtrZXl9YCkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwqYCwgJ2cnKSxcbiAgICAgICAgICBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1NgXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fVxcXFw/YCwgJ2cnKSxcbiAgICAgICAgICBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTmBcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCtgLCAnZycpLCBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9QTFVTYClcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fSg/IVxcXFx3KWAsICdnJyksXG4gICAgICAgICAgYC0tRVNDQVBFRF9QQVJBTV9DT0xPTiR7a2V5fWBcbiAgICAgICAgKVxuICAgIH1cbiAgfVxuICB2YWx1ZSA9IHZhbHVlXG4gICAgLnJlcGxhY2UoLyg6fFxcKnxcXD98XFwrfFxcKHxcXCl8XFx7fFxcfSkvZywgJ1xcXFwkMScpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9QTFVTL2csICcrJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0NPTE9OL2csICc6JylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OL2csICc/JylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLUy9nLCAnKicpXG5cbiAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gIC8vIGNvcnJlY3RseVxuICByZXR1cm4gcGF0aFRvUmVnZXhwXG4gICAgLmNvbXBpbGUoYC8ke3ZhbHVlfWAsIHsgdmFsaWRhdGU6IGZhbHNlIH0pKHBhcmFtcylcbiAgICAuc3Vic3RyKDEpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhblxuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICAvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG4gIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpXG4gIGNvbnN0IGhhZExvY2FsZSA9IHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHREZWZhdWx0TG9jYWxlXG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBjb21waWxlTm9uUGF0aCh2YWx1ZSwgcGFyYW1zKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGxldCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgLy8gcmVtb3ZlIGludGVybmFsIHBhcmFtIGZvciBpMThuXG4gIGlmIChoYWRMb2NhbGUpIHtcbiAgICBwYXJhbUtleXMgPSBwYXJhbUtleXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSAnbmV4dEludGVybmFsTG9jYWxlJylcbiAgfVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSAocGFyc2VkRGVzdGluYXRpb24gYXMgYW55KS5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiwgeyBtYXRjaEhhcyB9IGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uLy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgZGVsQmFzZVBhdGggfSBmcm9tICcuLi9yb3V0ZXInXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIHJld3JpdGVzOiB7XG4gICAgYmVmb3JlRmlsZXM6IFJld3JpdGVbXVxuICAgIGFmdGVyRmlsZXM6IFJld3JpdGVbXVxuICAgIGZhbGxiYWNrOiBSZXdyaXRlW11cbiAgfSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgbWF0Y2hlZFBhZ2U6IGJvb2xlYW5cbiAgcGFyc2VkQXM6IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+XG4gIGFzUGF0aDogc3RyaW5nXG4gIHJlc29sdmVkSHJlZj86IHN0cmluZ1xufSB7XG4gIGxldCBtYXRjaGVkUGFnZSA9IGZhbHNlXG4gIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICBsZXQgZnNQYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoZGVsQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpLCBsb2NhbGVzKS5wYXRobmFtZVxuICApXG4gIGxldCByZXNvbHZlZEhyZWZcblxuICBjb25zdCBoYW5kbGVSZXdyaXRlID0gKHJld3JpdGU6IFJld3JpdGUpID0+IHtcbiAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgIGxldCBwYXJhbXMgPSBtYXRjaGVyKHBhcnNlZEFzLnBhdGhuYW1lKVxuXG4gICAgaWYgKHJld3JpdGUuaGFzICYmIHBhcmFtcykge1xuICAgICAgY29uc3QgaGFzUGFyYW1zID0gbWF0Y2hIYXMoXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBob3N0OiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvb2tpZXM6IGRvY3VtZW50LmNvb2tpZVxuICAgICAgICAgICAgLnNwbGl0KCc7ICcpXG4gICAgICAgICAgICAucmVkdWNlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KChhY2MsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgW2tleSwgLi4udmFsdWVdID0gaXRlbS5zcGxpdCgnPScpXG4gICAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWUuam9pbignPScpXG4gICAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIHJld3JpdGUuaGFzLFxuICAgICAgICBwYXJzZWRBcy5xdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAoaGFzUGFyYW1zKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCBoYXNQYXJhbXMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgICAgcGFyc2VkQXMgPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uXG4gICAgICBhc1BhdGggPSBkZXN0UmVzLm5ld1VybFxuICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgZnNQYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKGRlbEJhc2VQYXRoKGFzUGF0aCksIGxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICApXG5cbiAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhmc1BhdGhuYW1lKSkge1xuICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICBtYXRjaGVkUGFnZSA9IHRydWVcbiAgICAgICAgcmVzb2x2ZWRIcmVmID0gZnNQYXRobmFtZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoZnNQYXRobmFtZSlcblxuICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgbWF0Y2hlZFBhZ2UgPSB0cnVlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBmaW5pc2hlZCA9IGZhbHNlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXdyaXRlcy5iZWZvcmVGaWxlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIHdlIGRvbid0IGVuZCBhZnRlciBtYXRjaCBpbiBiZWZvcmVGaWxlcyB0byBhbGxvd1xuICAgIC8vIGNvbnRpbnVpbmcgdGhyb3VnaCBhbGwgYmVmb3JlRmlsZXMgcmV3cml0ZXNcbiAgICBoYW5kbGVSZXdyaXRlKHJld3JpdGVzLmJlZm9yZUZpbGVzW2ldKVxuICB9XG4gIG1hdGNoZWRQYWdlID0gcGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSlcblxuICBpZiAoIW1hdGNoZWRQYWdlKSB7XG4gICAgaWYgKCFmaW5pc2hlZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXdyaXRlcy5hZnRlckZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoYW5kbGVSZXdyaXRlKHJld3JpdGVzLmFmdGVyRmlsZXNbaV0pKSB7XG4gICAgICAgICAgZmluaXNoZWQgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGR5bmFtaWMgcm91dGUgYmVmb3JlIHByb2Nlc3NpbmcgZmFsbGJhY2sgcmV3cml0ZXNcbiAgICBpZiAoIWZpbmlzaGVkKSB7XG4gICAgICByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihmc1BhdGhuYW1lKVxuICAgICAgbWF0Y2hlZFBhZ2UgPSBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpXG4gICAgICBmaW5pc2hlZCA9IG1hdGNoZWRQYWdlXG4gICAgfVxuXG4gICAgaWYgKCFmaW5pc2hlZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXdyaXRlcy5mYWxsYmFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaGFuZGxlUmV3cml0ZShyZXdyaXRlcy5mYWxsYmFja1tpXSkpIHtcbiAgICAgICAgICBmaW5pc2hlZCA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhc1BhdGgsXG4gICAgcGFyc2VkQXMsXG4gICAgbWF0Y2hlZFBhZ2UsXG4gICAgcmVzb2x2ZWRIcmVmLFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5leHBvcnQgY29uc3QgUmVzZXRDU1MgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyO1xuICB9XG5cbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgfVxuXG4gICoge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIH1cbiAgKjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIGh0bWwsXG4gIGh0bWwgYSxcbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNixcbiAgYSxcbiAgcCxcbiAgbGksXG4gIGRsLFxuICB0aCxcbiAgZHQsXG4gIGlucHV0LFxuICB0ZXh0YXJlYSxcbiAgc3BhbixcbiAgZGl2IHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDA0KTtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8qIE1vZGFsIGRlZmF1bHQgc3R5bGUgKi9cbiAgYnV0dG9uLm1vZGFsQ2xvc2VCdG4ge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMud2hpdGUnLCAnI2ZmZmZmZicpfSAhaW1wb3J0YW50O1xuICAgICYuYWx0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5JywgJyMxMGFjODQnKX0gIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDM4cHggcmdiYSgxNiwgMTcyLCAxMzIsIDAuNSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLnJldXNlTW9kYWxIb2xkZXIge1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgJi5zZWFyY2gtbW9kYWwsXG4gICAgJi52aWRlby1tb2RhbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAuaW5uZXJSbmRDb21wb25lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZGVtb19zd2l0Y2hlcl9tb2RhbCB7XG4gICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYsIDMwLCA3NywgMC44KSAhaW1wb3J0YW50O1xuICAgICAgLmlubmVyUm5kQ29tcG9uZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgICYudmlkZW8tbW9kYWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmlubmVyUm5kQ29tcG9uZW50IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLnJldXNlTW9kYWxDbG9zZUJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmV1c2VNb2RhbE92ZXJsYXksXG4gIC5yZXVzZU1vZGFsUGFyZW50V3JhcHBlcntcbiAgICB6LWluZGV4OiA5OTk5OSFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmV1c2VNb2RhbEhvbGRlciB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICYuZGVtb19zd2l0Y2hlcl9tb2RhbCB7XG4gICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYsIDMwLCA3NywgMC45KSAhaW1wb3J0YW50O1xuICAgICAgLmlubmVyUm5kQ29tcG9uZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uLm1vZGFsQ2xvc2VCdG4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDk5OTk5MSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDM0cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHNwYW4uYnRuLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLmFsdCB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICAgIHotaW5kZXg6IDk5OTk5OSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAhaW1wb3J0YW50O1xuICAgICAgdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgIHNwYW4uYnRuLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuODggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYXV0aG9yMS0wOWZiNjhiZjg4MzcyYjk3ZDZhMGM3YzVkODBkZDk2My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2FyLXJlcG9ydC1mNzcxNmIyMTEzODdmOWY0YjgxZjc4ZDAxMWQwZWEwOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCSUNBWUFBQUJMSklQMEFBQVZMMGxFUVZSNG5NMWNDVmlUVjlZKzJVaUFBQUZDSUNTc2diRElqaUoxWHlwZGRDcGFXMjJyN1Q5VGEyZkdUbWZzTWgzN2QycVgrV3Zidit0am5ZNmQyczFhdGRxT3JVdTFXdGU2b3lDeWIyRk5BZ2tra0lXRUVQSS81MEo4cUpMayt5Q3gvL3M4UEdqNHZ2dmQrMzczbm52T2U4NE53K0Z3d0sxQ1dYVVR2NzNiWXFodjFZQ2lRd3ZhWGd0MDk1cWgxOWdQZy9ZaHdKNndXVXdJQ2VSQnVDQUFoTUgrRUJjZEJ2SllVY3c5c3lhMTM3S09Bb0RQaWZuMldGbldsVnBWWHBXaUs2MnVSU1B2MUJtTGJZTjI0TERaNE8vSEFuNEFGL3g1SEdBeEdlUjYrNUFETE5aQk1KaXRZQmtZaEFIYklIQll6QjhqUXZuYTVGaGhRM3BDWkdWK2lyaGsyZTI1VGI3c3QwK0lLYXRUOGZjY0xWbDJxcXh0Wm5XTEp0MXF0UldHOEhrUUd1UVBmaHdXTUJnTVd1MWhGd2NHN2RCcjZBZTlvUjg0SFBiUmxMaUltaG1aMGpQM0xzamJVNUFlTStqdE1YaVZtSFBsQ3VISDMxMWNmZmg4M1IyOUp1c2NVV2dnaEFVSEVDSzg5UnhuV3pwRFAzVDFtSUFmd0RrNGYwclNUNnZ2S2ZoNGRuNVNuMWNlNGkxaUt1cmJlVzl1Ty9uWEk1ZWFGbGdIYkROaUlnWEE0N0poYU1pM3k1VEpaSUIxd0E1dG5YcGdzWmcvenMxUE9MN3J0WWRmOTBiYkV5Ym1wUzBIVjM1Nm9QUzN2VWJMdkhoeEtIRDlmRXNJcmtLNzNRSEdmaXYwbWF6QTkvY0RVUmdmK2kwMlVLaDB4L2orZnNZSGl6SjN2UEhrNHAwVGVzNTRpYmxhMnhid3QzOGVldVBFWmNXY09MRWdReERrRDNiNzBFVDZjblBuUm42amZVRVMra3dXR0xEWklkRGZEeEtpd3lBbExnS2FsVDNRb2VralN4WnY2RE5hUUtIVW5TM01pRG4vK3RvNzEwL05UQmdZMTdQSFE4emVrNVVaVDd6NXpTWlQvK0FjZVp5UUdFZHZMRWtrQXFtMVdHMWtWektZckdBZkdpS0RUcEtHUTBxOENKS2xRc2hLRmtOMmNqU0VoUVJBaTdvSGlwNzROM0RZTFBEbmNvZ053aVZXMzZZRkRvdHg2TjJubHF4N29DaTdoblpmNkE3b2Y3Y2RMLzc3dnc2L0toRUpNdEM0RGs1d2x1RGpMUU0yNkRWYUNCSG94MFFKZ3lBdUtoU1NZOEloV3g0Tk9YSUpURXFNSWp2YVdGaTE0U3M0ZXFFZXBKR0M2My9GZHRCSFVpaTdMNjUvWk83R1YzNS8xMTQ2L1dMVHVmalo5L2V0ZVcvbnordFM0MFdwZ1R3T2JWTFFQZ3phSFdEcUh3QzlzWi9NREJ5c0tKUVBrOU9sa0pVa0ppVGtKRWREZ2lTTWNydVpNakhzUFZGSjJuZStaK3hiYUxBL0JQQ2lDalorZm1LOVJtOFNmZmkzWlI5UmJaTXlNYzk5Y0hEMWV6dE9yOHRJRXFmNnNWbkVFWE1IWEJaNGhZM1lCd3V4RVdnZjBGakdSQWxnV2xZY1pDZUxRUjRiQWFueElraVVoRk1tNGtiZ3JISWEvZEUrRXY3Zmo4UEdwVmV3OWJ0THdHS3hCejk0dHZnVHJ4SHowcFpESzkvYWR1TFo3R1N4SE5meTBCakxEL3N6TkFUUWI3V0JFZTJEMlVvNmhuWWdLVVlJS1hFaWtNY00yNGNNbVJqQ1F3TEd5OE5OeUUrVkFyb0lab3VOR09iUlFGUEJZakloS3ptNjRNTTlaNWtjRmd5KysxVHhGNTdhOUVqTXgzdlB6M250aXhQck01S2liaUlGRGFOMVlIRFlQcGl0eEFCS0lrTEk0Sk5pd2lFbldRSTVLZEdRbmhCSi91WXJDQVdCWkplNlZOVjJFekV3UWc0YTVHeTVlUElIdTgrdmxVYUd0ai85ME94ajdycmoxdmlldTlZcXZQMlAvL29wVmh5YUplRHp5RkpBL3dHOVRpU0U3OCtGaU5CQWtFbkRJU3NwR25KVG9zbHVFU2NPOVJrSnJ2RGNwdjJ3NVQ4WHlLeDBOU0ltZ3dGbXF3MXFtN3N1N24vdjBZVkZVK1ZhVisyNUpVWlcvTnBobTkxUmhBUFY5QmloMTJRQmRPTFNFeU1oUng0TjJVblJoQlNKS01SSHc2V09uVCtXd3VNYnZ5RTJ5eDB3V08zc01ZRjl5UDU5Njc0WEZydTYxT1ZTV3JYaHF4ZTdkQ1pSaGl3S3Vub01JQllHdzZabkY4UGs5RmdTRFA1L1ExNnFGQ0lFZ1dSV3U5cldZU1I2andyblEzVnpWL0RpcHo5NStidTNmN2Rock91WVkzMzQ1ZjV6aFh0K3FyZ3ZOVjZVZzl1ZVV0c0hDd3FTWWNIVUZKK1MwdEN1aGQxSHkySC82U3JhOThwamhXUzJvTGJqQ1RnbWVXekVuTU1YR29vMjd6dytiYXpMeDV3eGIydy8rNXhZR0pTQmF4S05iVkFBRjJwYk5MUTc2d21ON2Qya1hSeU13V3lCK3JadXFGWjBRVkNBSCtTblNja3NwUTRHV2VMbksxb2hJcFJQNmE3WXlKRENkM1pkV0xkMnhkeXpIb2w1YWN1QmxRMXQzVW5aY3ZIMTJBZG5TVm1kRWpwN0RCQVpGalJ1SWpSNkUxeXRVMEo3bHg1MGZmMmtQWTNPQ1AwRGc4VEppNDBVRUp0VjFhaUdhdzBxbXNRQXVSZjlwdEdPbml1Z2JjVlE0MXBUWjlSVGIzKzc4cDJubDM3cGxwZ2RSNnNlaUJjTE1vWkdlYlVZZ3pTcmRIQ2xwaDN1bXBaR3FaTVkzRjF0VU1HcEswMFFIUkVFS1hHUlVGYlhBVzFxUFhSb2VzbGJuWndtUmY4Q0d0cTBVRnJiUVg2bnhZc2dKaktFS0h0MGdaNHp6bTcwcnAyS29EdWd1NUVnRnN6WWM2S201NTJud1RVeEwvLzc4SU10eXA1WTNISHdKaWVHZFk5QnFHanFkRXRNVDU4WjN0OXhHcTdXSzZHcG80ZVFhZWpVUTk2VUpGaXpaQ3J4ZW1mbUprQmRpNGEwZGF5a0FXU1NjSkJHaHNDZDAxSWdKTkNmMkFvMHBPTkJib29FNHFORFNZd1VITWlqMUFMMlNhSHNDWHQrODRGbHI2MWR1R2RNWXI0L1ZiMDRKa3FRTVpvVUdBbjBjTmJnRzNVSG5NSWYvZWM4OUptdEpBaVVTY05nNmFyWmNPaENIWW1QT3JwNm9VV3RJN05sL3BRa3NvdklZb1RFOThHZ2I2SUk0UGxCZWtJVTdEdGRTWmtZM0tYaW9rSm5mSE84b24wME1kZDdzM25YaWFMYVZxMDhMSGpzWFVjUXhJT3FwazRTK0xsQ2FGQUFMSjJYQ1Z3T0c5OENMSm1UU1diSXhVc05ZRFFQd09MWkdmQkFVUzZzZTJBV3JMMXZPdHkvSUllNDg5NGd4WW5rR0NFSkRlakl5c0dCWEdqdk1raGYvK1JRa2ZPejZ6MzYrVnJiekVBZUo4ZVZ3NGRlcnFLakI2NDFxTjArWkpJc0N0Z3NCckVmQzJla3d2Y25xOG4ycU83dWcxbTVpVkF3S1piTVBsOGhQVkZFd284aEdvRS96cHJRWU42TXN4VWQwMzlCVEdWOXExOXByVG9uTW96djBwcXoyRXppK1Y2dWRaL2VRUW5BTmpnRXJ6eCtCMm5yaTRNbElKS0V3K0h6ZFVUaDl6VndCa1pIQkJPTmh3NXdXVjl0MUdTZHU5ckF1MDdNcWF0dHM5bzZkWXZjdmtrSGtOQyt2RjdwOW5FWVFPTHNXclZoQjZ4NC9rc2lPVVFFQjhDa3hFanliMThqT2lLRVNKNTBYd0pLS1ZwZFgvR0owcFk1NERTK0Z5dmJDOUJ3alNVbmpBWnVoYmpidUFObUVSZk9USVVyMVIwd016Y1JiaTlJQmd3cllrYXBhNzRHN3FxbzZJbUYxQitFWThlK2w5WXBjd0RnRUNHbXNWMHJDdzMyckk4Z01XaFVHenUwSUpPNGZ1cm12eTRsR3NpdmhmVDRTR0JROEdOdUJBcjZpbzZlQlB5WVdWcmJ6bS9YOUVvRHVKNDFLMXhLbmQxR0tLMXh2NXgrVFZJUThyZ0lNc2pCUVR1dCt6QVgxcUhwbFo2ODNCRE1yRzNSR0hSOWxpSXFRaEp4dGNFQlZ6d1lZRzhBZDdKTFZhM3cyYjVMMEtyUzBXb3hMVUVFTWtrWThhZm9BRitvc1gvZzd0cFdiUys3dWtrRkRJcHZHRTBRTHFlNlZ1OEhsR2pkeW1vN29FV2xnejZ6QlRRNkV3cEs1SWZEWWNGRE5NUXZOb3NGbVVsaUtLMVZEdWViYU1DUHpZRWFoUXJZMnI1K1lOT1krZWdNTlN0MXhQMm4rOUFiZ1E0alNnM2FYaE4wOVJoSnFoVjNFeFN3MFZoakhJWGhBc1pXR0pMZ1VxWUtEQTgrMlhlSmRwKzRIQ1owOTFtQXJkR1pJWUJIM2VIeTUvcEJhNmVlQklUekppZFR2ZzhqZFl5WW01UTloRnpVWnpGem9OTDJrWEtQYUdFd3lSMmhGNHpKc3NvbU5WUXpHQkFmSFFZU2tRQnVERk04SVZNV0JhRjh0RE5Ed0tieDVwRUx2WkVRWTRRZ2luRUZqQVNVbUNmR2FlcUptTXZWN1hDcXRBa1VxaDVvYXUrRzA2VUs2Tk1aWWROL0x5TUVZTzRJWGZpS1JqWFV0bXFJSElIQ09RcE9HQ21qM0lHekpqYUsvbGFmSEJOQkVuZFlPaExFcGo0K3JOWEJlOWhteXdCdzNVaUJZd0dWZUpRSlBPSERiODdCMWsrUFFvUk1EUGljMnd2a1pObVFaSHdBRnc2ZHFTRlpCRXl2b01pRVdnODZnaFBKTVRrUkZNZ2xrZnFSQy9XMFhqeHVRamlEMlJnbjRDeWdrNm5GclJETHhUQ0JIc3gzL2RCcDJYSHdkWXlRMkFrVXB2NjBmRHBzM24wV0x0ZTB3NFkxUlJBVnhvZjh0QmdpTVBrQ2FHZjJucXlrSkZ3NWdhb2xTbEhEMXN6aHpCdFNnNzhmQjlUZEJtam8wRUplaW12dFpIS3FGRVJoUVVTeWZHTFpOUERuc3VIdytWcVNBOEtZS2tzbTlna2hUdVRLSlJEQTVaQ3lFU1l0aDg4QlRKdzZnM1o2amhBYU01M0JBaFVlSXUyMGhFaGlhTzhvbE1PcnY3OER0aDhxSlpHMVV0TUhQNXloWFlCQUcram9vZlpqdFZHdlJNTk5nc05tQWhOcjQvcmRhQ3l1Z01ZVGw0UTdJT2tZdDFRcE91SGxyVWNJTWZnc25iWVBtbFhkUGljR3M2STRPN0dLZ2lxUXhFQi9MckF4dzFobHRkSFdXTEdTNEZxam1uaW83b1FtM0lJLzNYRWFkdHJzc0hST0J1U2xTb2p6bGVIalplUUVSdnU0TXhKSmhjTDFXTHJHNTNHQWpja25WTHpvSWhnRHlvNXVxRktvU1hyV0ZaWXZ5Q2FWRGJqZWVUNFVxRndoVng0OVhOQkk4WHFVWUxFUWdaa1lFd0VENDFsS2JCYm8raXhRMStKZUI1YUtCSEJiWnZ5dlFncU1aQ2p4NWFQblRBVW15d0FrU29UQUZJZjZrMDZQcDFJTVpkQ3E1azZ2RDhZVnNOUDFiZlRpTlBTSjBIczJVQXdvMFN5SXd3T0FuUm9iRVJnUnl0ODFZQnRjUkNjV2daRzRxYXpXdlFReEVXQVlnTzFqUElWT0Y0WVBRNDRoK011S1dTUWpRQld5NkhBb3FXd241U0x1Z0pKc2FIREEwZFRZOEZYc3pKUlljNXhZMEl3QlhZUWZ0ZFNtRStqbzFiWjBFVmNlbDR3M2dKSkdxMHBQM25CM3J3bHFtcnRJVlNZK2ExSkNKSVR3QTZCTFo0UjRNZlZTTkt5NDJ2YkRaWS9YR2MwV0RGN2JwK1hLMVdTS0pFYUhLczVmYXdOUkdIVVBFVWFFSzVRSmtOU0pFSFBrUWgyUk1yQVNDeDFIVEpnaG9rWEJaUGZDSDB6ZWxkVXJ3V2l5a0FwT09zUmcySUZoQWZvb0xCYzdLTHAvR0tva2lBVUtjR3ErQmVtU2k5c1BsMTl4QUNPUGpnZU0xdDVpczBOZG13YUtDbE1vM1lQbFp4ZzVZN2J5ZUVrajZUUUdwWWZPMVpJM215MlhFTThUYytXNGpCcmJ1c24ybmhvZkFabXlTSkpJeXlYWFVBZDYyWW5SWVlSMGdhdHFEUVlEckxhaHN2eFVTY2wxWWg1ZVZQanpXOXRQdHhyTjFqeitHS1ZhN3VEdng2WmtaenE2OVBER0Y4ZWhTdEVGcldvOXlVZ09hQTJ3YU5Ga2VHVk5FU2sxd2ZoTHF6ZEJralFNa21PRnhBZEMvd056VmJJSkJKYm9iV09RaXBVVnJvaEJ4MU1Zd3RNK3NYeldRUmlkb3AyZEp6dTU3WWZTNHBUWUNJL1pndEZBUjYreXFSTk0vVmJpTWJvQ0ZubCt2djh5S2VvSkZ3VENiWmx4VUZTUURGLy9WRTRFS255cktEbUloVUdRRmg5SkltNXZBdVVOVng0K0JwbEtyUUh1bVpsNjJ2blo5UVZYUERkN3I4UGhLS05EQ2hBSmdndk5haDJaK3U2QWl0eWltV25BWkRISW0xdFJsRTI4NEtzbERhRFU5TUtqaXd0Z3paSkMrTTNNU1Y0bkJVWThjTFNKWTJkYVVXT3lWdDB6Ty9ONzV5ZlhpWmsvV2RaY21CRjdIdGNobmZORXVPOGJUVllvYjFCNXZCWm5nbU1JWU9uY0RKZzZLUlkrUDNBWm1DaGhlQ2dXOEFid0pXQ0dzdC82UzBjUGg0cDFPL21wMHBJbHN5ZVYzVVFNNHI3NUdiczFlbE1WbllRNHZnRU1GcWtNRG8ycnhUSUFHeDViUURyejNhbEtDQTRKaE1QbmFpbDdwdU1GaW1EcDhTSlNrVDRhcUwrb05IMDFLeFprN2ZyRjU2UC9zN3A0MnJHY3BLZ3lkYmVSMXF4QnNRcEx4RHd0d3Z3MENUQlpUSElvNHRGWGR4TkNjYmZBUlA5NElueTZTRXVNSkM2QkV6aEdyZDRNOHRpd3VyWDN6enc0dXJtYlhOM25IcDc3eHZJWHR1ZEZodkZUcVQ0M2hNK0YrbFl0MUxWMGtRcHdWNGdLRDRiaU9SbkVZWnVWa3dEenBpUVRLZFBsRnVwbEZLVEhnck91RUgvanUyOVI2K28rZXY3ZWQyOTgwazNFTEptWFZiNmc0T0xSQzVWdHFXZ0VxWnhCOG1Pem9WbXZneXUxSFc2SndjNTh0bUhGTFNGaExMUjE2b0RKWkJKbkRwTnI2RExjbGhsei9yZS9LVGh4VTEvSGF1RGRwNHZYT1lZY0phanBVbGxTakJFajVzdTRhVHpBSE5YcHNpYll2UHNNUFBuV1hxSTNTMFVoaEJ3VTV3MW1hOFY3enl6NTgxaE5qeGsxeW1PRWcrdi9hODdHRjdZY2ZUVXJLU3JkVTU4Y0pPSFA4MG1Ha2c1d0JtQjRnbzVpZVlPYWFFVVlzaGpNQThSL1FrVVA4MGE0bEJyYXU2dWVYVG56N1R5NVJEL1dJMXlHMDgrc212ZnR5ZExtMmFmTEZKYTBlRkdlcDdOSktGdzFxM3BJZVNyVk90dUpBUHZUMURGY0o0eXBISFFYc09nUjNRMlVKM2wrYkdLN0lzT0RRU0w2WlJZRTdlRnRtYkZuWDM3OHJzOWNkY0hqQ2JlMCs5ODYwR3ZzdnpzdVN1RDI0QmEyMDZ6U3cxZi9lQkNLcHNxOVRvUjF3QWExclZxUzN5NnQ2NERLeGs2U0VlM3BOUk1pTUtjZXd2Y25tUWhYeXg5OUxqVDhMQmJyMktGM1Z0NlZraWgxZVY3U293RHorWXYzUG5MM1h6NDdvTzR4Rm1BZXlCVTVwT1RWTmtocWdiMUJEQTc0V3FPS2VOUTRHN0J1dUVXbEp3azdOT0loUVR3STh1ZVNMQ1dUZ25TSlViVzIxNHgycDN6dm13ODk2bzRVb0VKTVFVYUM5b3VYN252a3dSZS8zczVrUUI1V2NJOUZEazQ4UEE2SWEzdzhVQ2k3NFdxOWF0aEd0R254RUFTMHFuV2syaE9YQldZV3NZUU5ZN01iczJCVVNFR2lWZDJHaXEzUEwzMXNYa0ZhczZjdVVwTHM3cDZSVWZQUFoweHIxNzU5Y0xQREFlampqRWtPcVlSUTlYak1IT0FKa1dwRko5UzBkQkVoQ2dsQnc2M1dHc0JtdDVOb0dKY0YrajFzRWZPbStJWk9OSWY5UUNldVUyY3NmKy9KTzlZdEw4cTdTT1UrV3Fkb0QveGNtZnJJUzE5L3p1T3lDL0JjSTFZU2pBWTVxYUxwaFI4M1BUYWlxd3hEMTJjbXRYc1ZqU3E0VXF1RXlrWTFOQ203eVlFd1o4ME41cmRRZTJiU1NLZDZBcEtDeVQyOXNiOXN5L3FsajYrZ1NBcHRZaERucmphSmZ2Yy8zMzdhMGFXUFRrc1E1WXcrYzQxR0Q4ODJZWTN2STR1bUVJMzJ6TlZtc25Pb2V3eWtpZ0J0RWM0R25GMitPZzZJdHBmSllKSlpHQkxrZit6ajlVc2ZtejgxaGRhM2g0ejdwUDQ5VDMzNjd1RUxkWGZLSkdHcCtMYWRTd3NIMjlsdHdKSXRrdnJsc0ZqRVVBWncvV2pWcVl3WGFFOU1aaXZVdFhiWHpNNVBQUFgrdXJ2L25KWW9vVjFITzZIdmRuaDE2NUVIUDl4ejdnOVdtMzBHbmh0Z0FPTzZ5SVcvY1FiUnI1MGNINXhiTkZhVllvWHU2c1ZUdG01Y3U1RHlPZXNiTWVFdnZiaFNxeFNzMzdSdjQ1bnlsbW5oQW40V0dtWUE3M3lsQVJVZ0gwaC9seDdMMVF3VkJlblNpLy80NDhLL1Q4K0ttMUI4NHJYdmo5bDI4UEswVGJ0Ty82bTZSWnNlRXNqTGlnb1BHcW03OFExQnp1K1I2ZXd4WXUxTmVaSTB0T0VQOTAzL2NFMXg0Vkd2dE8vdGpuKzIvOUtzblVmS2xsK3FiQ3V3RHprbW8wQ0VodFliWDY3amJBTmpIendkQitDNGtwOHF2YkppUWM2TzFjVlQzWjZqcHYwc1g3M1JvNWNhRXcrZnJTbzZWbEkvdjExamxGcXN0a0lNNE5CUW81K0NKOUE4UmU3WU4rZDNWdUc1U1pQRkJuNSs3SXRTSWI4ZHhmczdwMDg2ZEdkaGNwMHYrbjlMdnRYc201OUtjOG9iT3JNVVNyMnNvVjJicU80MlJCbk0xdHR4ME1QVU9EQitJZit5a3lLbVlSY2ZmY1JBZis0SmNYaVFNbEVxYkVvVUN4U1pNbEg1L1VYNUpiN3U4eTM5dWpjbnpwVTFpalI5bHM3bURnMHBIVVc1MTJJZGxoeTVYQzVnOVQ0dXYzaUpDQ0pDZUpMcE9iSmJLL1FBd1A4QmZvZVVQV2FxMFZ3QUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJHQ0FZQUFBQnhMdUtFQUFBWHBFbEVRVlI0bk9WY0IzUmMxWm4rM24xdDNqU05OT3JkUmJLdDRvNXhwV012Q1JBYkVvalpKYnV3WVpNRnMybDdjdGdrWjdPUXNnUVNscHhRRWxKb0FlTXNNUUVuTWNZQkIyS01jVyt5Sk11UzFhMlJOQnBObjNsMXo3MGpDeGtMZTFRTWh2M1ArWS9sbWZ2dTNQdS92MzczZjQvYjYrL0Z1VWdtQkw1NEZPOEcra0ZBWUpnV01nUVJwbVVoWXBtUUNFRkMxZUNWUkFSMURib0Z4QzBOYmZFRVp0a2RxTEo3MEpxSW9FME5JMGUwSTJIcUpZTzZXZGFmakJlMzZiR2lnS2JsZEd1cXh6U0JVcHNTeXVCSm44QlpuYldPN080eVNXN1RZYlVHREEyNXZJUjh4WUhHU0JBRGFnSmxEZ2NDdWdhdm9JQzNDSGpPaE05SVFEQUpISVNIVFJMQm1RYjhpU1JLYkE3TXk4cUZ4dk9BWloxeno4STVSNHlENk04U2pvT1RGK0FWWmVpV2lkWkV0THdoRVZsd3lJb3VHTkRVcWdGRG16S282NFVKeThpMkxBNFdVb3R0U2tUQldSWjRqdk9mU0tnOU9hTFU2aEhFb3hJaCs2Wkw5cjBleWRia0ZVVG9oZzZCNDNEdUxZNlBKbFV3SmdDUkk4Z1dKUXpvQ1J4Vnc0dC8xeGUrcmxPTnIycE9SQmNZVkNWTUl6V1lJd0FocVg5aE1VRlMwdWtZU3BibGpjVWozbzZZV1EwTG42WmplVjVBMFdEdjRWSkozbG9reXErVU9PeHY1a3N5QlBCSUdoYjRDMDB3MUtSa3dxTk1WdEFTaitLTmdPL1duWkdCdTFyaXNZdGhhQURkdENDQjhBSTQvdXcveVE4SktMVTZjZmhQcWhtR1phRTlGcTV0andaclFmaXZ2eE1KSEpydjlEeDJxU2YzeVZMWm9ZYjBKQXpEbXBSTlRjakhHSmFKT0lBeTJZN09XRVE0RkEzYzlkcGc3MWQ5OFdnNTB3UlJtdFM3T0pLWTNta2FZQm53eUVyUDFaNkNueTNMeVB5WndDUHNUMnFRd01FdVMrUDJNZU1XakVzUWtNR0xNRGdPTzBQOXQ3N29hLy8rUUR4YVN1OHlFVVJ3NTV4MWNvaHUwVFIwUU5mZ2tKWCthN3g1MzEzdXpIN01TWGlFaUFuQk5NY2xHRExXMVoyYXNsaXlJMmpvK1ErMzE3LzRSSHZqTXdPYVdrcHNkdkFmb2xBbzBkK2l2b2VYRlVRTlBmdkZrMjJQUG5heStiVU9MVDY5WExJejB6VEhNZStZQkdQQ2dzd1JsTm5zMkJydzNYQlA4OEZqaDRMOU4wS1NQM1NCakVaVVFFU3k0VmhrOE9wN1c0ODJiZzMwM0o0alNIQVF3dnpnV0NodHdWREg1K1pGNUVnU2Z0M1QrdERqN2ZXL2p4bWFpN2M1d0gva0lubVBtQWJKQ25YNDVQSDJ4bDgvMkhuOGFZOG9JVXVVMkI3U3BiUUVReWZNbFd4TUxSL3JQUDdjdHQ2MnIwR1VJWWh5V3ZiNm9SUE5nM2dSRUczWVBkRHpoZi9wYXRwTXphbFV0a05MYzczY3ZvR3pPMS9kc2xCdXM2TXpHdUZXNzN2cmpmWkk4REtpMk1GZFFGcHlObUxPT1JGRmtlSTZ0R0h1WmNzcjNKNHdUU2tFN3V6cjUzYjE5MzNnbDFSVDhtVUZ4RFN4Y3MvcjJ4c0RmY3VJM2ZreEVja0k0amdZMFJEeVhKa05mNXB6NlN3WkhMcVM4Yk1LaDJocUFxTnhVazNBYmhxUWRBMDNIOXorZktQZnQ0dzRYQjgvb1dESXRCeHUrTUtCbVdzUGJmK0x3Rm5JdGlzd0JacHJqYzVFMXcyOG56WGRBQXdUK2J5RU94djMvM2lucjNVdGNicFpEZk94SmNzQ3NidlFGT3k5OGtzdGg1OHZsaDNJRm1RNGlBVG5LQ3dJdkhqR1ZtbEdXMlhQd0JNOUo2NTV1ZlBZTjZDNFA1NmE4ajZpZStEc2JyelYyYlQyQWRHeDlhc0ZGVThlam9WSE5TbHVhMXZuYVI5UTc1MHYydENyeFYxL2QvQ05BY013QkY2MlhaalJaeHhFZzRhdXE2eVVXRjk5YWNsY3U2ZXpMUms3SStVZ1BLMUtSN0ROQUR3V3dUMG5EajF2cUxGUGxGREFvcFFGWHBRQVhjZC90Ujk1MlM0UzVOcGtPQ1J5R2hPTG1EakZPakZRYmxmd1pQK0oxWHY3TzY0bE50Y25TaWpEUlAyTjRrUmpvSHYrOTdzYTc1U0lnQzVWUlkrbURUTzM4WGpEOEhnN3o0T0F3NXFHM1FQUlJEeFRrRzJ3UG9tQ0dTSkRWMEdJWUd5b1dlNzJTclpZUUZlSERZcTRPQkdVSFp5QWFqa0RtL3krZjRsR2dwbmtFeTRVU3J3bzArU1AvNE8vL1Z2VGJCSWN2QVhuRUhNdkhrdHBqSTN3a0RpQ3RjZjMrdnp4U0M2OTZQOERHYm9HV1JDVDYyZGU1TElUWG90UUNJTmlaRVRnWVZwQXNlTEFzNzZPMWY3SVlDNW5jNlF0RW83alVuQmtOSlR5UnlPMWpJYkJVeEFteFVGb2FzRHpwNk4wYVJBci9pZ2txdXQwSndEOVBjc2N3a0NzRWIvRkFYWVhCRjZBWmFVSE5oQkJRaklla2wveDk5ejVsZUtLbnc3R0k2eUE1SjVyYkdBb1c3Wm93NWRhRHg1b0R2Yk40U1VsN1VWYnBnRWJMK0t6QmFVb1V4ekl0ZG5aeEJRQUQycEorSklKdE1kamFJcUcwQndOUTR0SEdhakVZRXVid3FDQ014dzhUZUVOQTBqR0FVMWxZeW5XTThYaFFxWERoWEs3RTNtU0RJOG9ReVE4RTgyQUdrZHJQSXJmbjJ4SFdGWEI4ZWxqaDRhYVJMYmQxZnR5MWVJOENxM0VUUU9Dem5FTXlYODNIS2h1RHZubjBJcDBMR1JxS3JJVko1NmV1elN0cTlwakVXenE2Y0RHbm5hODBkc05JeElDSEM3d2dzVHVQaE5JSkFqSU5pek5MY2FhZ2xKOEpyOEVGVTUzV3ZNZkNBYXdMOUlGWGhtRDFrc3krbU9oM0kzKzdpc3Y5K1MrM2szcktJZGtRNFpzdzc3ZXRzOVQ0SG9zdnVVVXZtRU9xZk8zRy9iamgzdmVaSnJBVEVnUUlJc3lTbXgyTE1qSXd1WGVQRnlkazQrN3BzNWlURTN3YTBkMjRaSG1vekNTaVdGeitNZUsyWGk0ZGhFOFVtb3RuYkVJbm14dnd1djlQdXdOK3RHV2lDR3VKbE9tWlJtQW1zUk5sWE94WWVFbHd3aWprVHFDU1dzZk5CTFRFNHhkNFlHMVYyZm12Njd3QWdSQlUzRlNTMkovMkg4ZFJpa1BSaGR4YWlKUXM5Q1M0TnhaN09NQkNrNkxFZ284MlVpWUJzSzZqcVNtNG5na2lPUCtIbXc0dEROMWZXWTIxaFNXNDU2S0d2eHM5bUxjTzJNdTVtNTdHUkZkdys3THJzYzBweHRIUXdHc083d1R6M1cxQW9GZUlKa0VSUXBCTlVGV3dFc1MzSW9EQ3Mrak85QVB2NVpNYlpJS2d3clpzbUJRcURVdGpOZGl2dTlZTEhvTnZWblRiRTRJTmg0NEhBM250c1NqYzlJVkREV2ZUSnNkVHkrOEZNZkRnL2poaVhyMitZbDRCSmVVVHNlYlMxYXkvOGNOSFVHYU5DWGpXTFpqQy81K3hsendITUg2cmhhOGRHUTNYanI0RHFyTForRFY1ZGVnWWVWbm9ab21pQVVzZjNNVDNtNDZ3b29iS2I4VU45UXN4dFU1QmJqSTQ4Vk1wNXY1bFpIMHhTTzdzYlduZzMzaVY1UDQ1cHdsdUNRN0grdnFkcU10UEFpU2poVUlFbnhxclBDdC91N3FlWXFyVGtnUUh1MjZ0cGlhRVVkVDVUVElNZ3lXREY2WFY0eWdOeC8zdHRTbDVFN1ZsN3dIQ2xLVnBKeHZVNUF3VGF6S3pzZU5oZVY0dkhZUm1xTWgzTjkwQkwvYXZ4MXI5Mi9IMzVhdWdwM3d1R1hmMy9CMjAyR3NuYmNDMzZxb1JZM2JNenhmWnp5S0xYM2RxQStINk1rbSt0VUVBOUoyK3JwUWxabkx4dEJ3ZTJQeEZDeks4T0xlcGtOb3BZNCtEY0ZRVFROVkZUNUxYeVlydGpyaFpDeU00OUhnUWhvQ1NibzFORFdsSWZWc2pZV0hyMk9URzhhb2w1VFpuZmpzRzM4QTcvSGlDMFZUOFkxcFZmamwzS1VRUlFsYmU5OHJaS25qVzFKOUVaNWZzQUlub2lIY2ZXZ25udXBzUVNRNGtBclYxSGRKVWlxcVVhWTNJaGJCa3B5aTFJM25PSFJSRTgvd0lrbk5uVXNQMW1ZN3NFejBHdnBDbFloUENiNWtQUGVrbXF3RkdmTkp5aGxFVFVFV1JqZEhlaWUvV0xzSUVkUEVrODExZVBMUU84Z3RLRVV1NFRFckkydDRYSVhEaFMxZHJTajl5Ky9SMFhVQ1VKeTRzbVFhUGwrekNNdXljakRMbVhIRzNIZlU3Y2FXa3gwVFhqOTRBY2Rqb2FxNlVGK2w0RGUwYVFPR1ZwNnVaTTlHZE5GUE54M0d4V29TRXNjaFU1QlFxTmhScGpqUkZ3M2gwelVYWVhWK0tkYlBXNDZPZUJSZk9id0xMelVlUUUxVzd2Q3NMa0ZFUjE4M1ZsWFVZdXVOZDJER0NFRzBSRUo0dWFlRDVVTW5rM0VNNmlwVTA4SzJrKzJveVBCT1hEQ0VSNyttbGg5UGhLY0tDWTRyQ2h0NkFTWUJpbElJajRpYXhKSFFJRlRMaEU3REtZMFdRMG5hbW0ydnNNejA4MFhsK09yVVdkaTQ2SEtzYzdxeHhmZWVLZTBQRFdCcDVSeTh1dmdxRnBudVBQUU9udTFzUllSR0pocHhxTDlnalFGRG1TNk5LTHFHNWJsRkUxNC9WWTZZYWVTSERLTkVpSnA2ZnNJeXN6SEdOSDAwMmhQeVk5VzBtWGgxNGVWbmZFc2RKYzFEbnUxb3hndWR6WGloYmpmY3VVVW9Fa1JVWldZUGo1dG1kK0cxN25ZVWJYMFIzZTNIQWJzRDAvSks4STFGVitCNE5Jem5XbzZDZDdoT205dUloVlArWktMRXNaeU03MDRtYzRUdWVDemZzQ3dlWk9LQ3FYRjY4RlRUSVN4TUpDQVNnaHhSUXJITmppcG5CaTcyZVBHNS9CTGNYRmpHeGdZMEZWODUvQzZlUGJvWHRkNzNUSW1hWDBkUEIrWlBtWUVOYTI3SDhoRm1kdCt4Z3lrTnROa25Mb1JSaVdNS09LaXBicUhQMUNldGpCWUpoNFN1TS85QkhmRXVYWU5KTTlSRUxKVjBVUWZ2eXNDbkNzcnd0YW16OE16OEZmRGFuZGgwc20xNGpyMmhBU3lwbkkwZFMxY2lrRXpncDgxMXpLL3NHUFFqYWVqZzNaazRYOTFDSEpNTGg1QmxLQUkzQ1pweWl2WUZBN2hxeWd4c1hualpHZCsxeDZMWU9kaVBsM3Jhc2FHekJYOXVPQUIzWGpGS0JBSFZJMHlwUUZhd1A5Q0gydzd1d0ZNMHlhTjVDR1c3azFYVkJrM1hDVG12V0pFSnl4SXlRVks1dElVSis5OVpUamRlYUtuSDlkWmZ3WE9BV3hDUks4bk1iOHpMeU1MMXVZVzRxYkFNNitldm9KMEorTnJoZC9ITHVqMm9HbUZLWllvZHo5ZTFvWjYycDFCaHhHUDR3b3g1V0RkdEZqYjN0T083UjNiRGxCVUdkMHcyVVZsem5JVk13aWVGWWxueDdZNEVLYmd4NFhpZExja1lqSVN3cWJWeDZCTnJDRHV4VW1Za1NNaHp1bkJsVmg3V1RabUpKK1l1ZzkxbXh4OUhtQkp6b3JUaHlPR0NvYW1ZbnVuRmR5dHFzTzdBZHZ4a3psSWNEQTFpWTl1eE1WWFA2Wk5GZXdIZzVPV1FrQ1hKUGp2UCt4T2FsalAyYnBuVGlXMUtFTStJR2poMWhteFo4TVZqZUw2NURzOGZyOFBpa3FtSUorS29kSjJadERFeURWUzZNOUVZRFdGencwSGNXRnFKYXBjSEd6OGd1NTR3V2N4b2pISlo3aU14WGUyeWNlVGtaTXhMSFM3MUJ3WmpuV0VydEFxbjVRTTMxRjlIank1NFZ5Ymc5bUJuVHljT2RyY2lYLzRBRElqamtEU01sSVhibmF3THREa2VCbUxoVkt2WnFkSkUxMWcxUDNIQldMQnpwQ2ViRnp1RVBNak5YbDVxN2JZaXN5YzZMenZSRTBUWWhscFlkUVpIYXF6R01XaWRZNlhLZTVha1VjMVNIT3p6TTNJUVFsTGp3NE00a2VGTmRWYVlCalRMeEk5bUxnRFJOUHoyUkNNN01YVjVzbEdTbVFPM01OU1NPQkdmYkJySUVlWDJJc1Z4UWlpejIzdUtrcllqaDBQbTllT1pTMmVBVU1vR2YxeTFnUEZJMGd5REZZYlVIUFlFL1hqYjM4dDYrZnpSSU5Nc2FQcHBnQkxyZkVvbTRYQjY4SU1scXpETG5ZbEJMWVhGYk92dndUNS9MMzR5WndudXJxakYrclltUEh6c0VDcUtwK0s1QlpldzY2bFQxdExFZTg4Z1E2ZllkMzI1MDMxTW1PN3hvc3BROTc3YTE4bU9aOGZxWnB3OGovNVFBRGZ0ZlJNQzRWbGpUcExpd0lSblhVeUZzc0p3MnJudVRLek1LUVNtcDY2akVPY3ZXaHR4LzVGZGFLRHc1aERSem5JTTl1Tkh5MWVod3BuQjVxbWhpS0FvNFRlZExleTdoa1FVQmJ5QWUyc3V3dTFsbGZqU2diZXgrdTB0eUhXNmNYS2dGODUwQWJjUnhCU05jQ2dVeFQyS2FTYUVRRFFLbDRVZFZMVXRxdEpqckxJcFhyd3dPeC83QmdmZ2xSVW1LSXJKeElZU3ZXMmFEd0UxaVpDYVpKcEIvY25TekJ6Y1hscUJIMVF0WUx4am9HODRXN2l2Y2c0azA0SmZWVkhmMDRGSEd3N2dwV1dyR09USzRNcnNmR3ltdFZVa2hGM1JFRllYbE9LSkJaZWlkdXYvSWkvaXhzVTUrWmd5am9qRk5KVVhrVTJFN1ZTVEJRc0dadGpzUFdVMng1RzJhTEFHWkN5WXI0bHMyWWJkbDE1MzdyR21pYU9SSVA3YTM0TXR2WjI0WmZjMjVsaS9XRmFCQjJZdkhoNUhqM0VvMVBwYVp4K2VtYk1Zang3ZGl3ZGJHcEFoMlRCQVRZcmVQTnFsbVpXREkvNWVIT2s5aVhtdVRNelBLY1MySlZmQkxhUUh0cDI1UUEwNU5xZHZ1VHYvY0pZZ1E4aVFYU2lSRkZ6czd2dGpXN0MvSm5WS01QbFpKZFdpV25jbTQ3dW56bUtmdmRUVmltOGYyWVVINi9kaDE4cWJXQjQwL2RVTm1PdnhRdUo1eEF3REJkNTg3T2pyaGlUYmh0dnFtVStpQXBKa2tDR1lNMkhvekplTld6QzZqbXE3ODgvWmtvaCtMUUhCcDhVQXprQzF3LzBDZVBFZXFnWG5STmN0aTBVZ2ZvSVl6cHFpY3NaditicHcvYnV2czBpMGNmR1YrRXpSRk54eVlBY09oQWJ4RDRWbGVQQmdOM1JKSGpVeE42MVVPa0NmWWFpd24zN0VRdjBUMG5ERWJBUWhLSkh0R3hyaUVmalVKQVFuc1NGaGNMZ2lvL0RnTSs3T3V1WmdYelZGNGM5R25DQWdwR3Y0WWROaEpzU0psQzIwQ3FjSGFkbUtnMFVma3hmd2NFczltZ0w5Y0FvQzdpeWVoZ2YzdncyTDQwYnA2RW9KaEhhcEIwd0QzNnpid3c3OFRtbDhSeUlHTGcyODE5S1N5TEs3L0d0enlyYlFpSllsMmlCb2xnYlZBbVJld2pWWnVmYzlFdkJ0T0ZkMG9pM3hJVjNIdC9mOWJmd1NlVC9SdW9nanVPSE5UYWt2ZUlFQjNnL05tSXM1SmROWUlnaDZURE9rQVRSMVJ5U0FGZVV6MkxsVisyQS9IdXJ0T24xU2VwREhXbTQvV0d1b3dHbXVkYTBuNzRGeTBZYmo4UWdVaW9IOXFibUpEYkRSeDE3b3docDM5US9Fbzk1MER0NG0weE9kTXBOVGM5Sjh4QWdPNEo5bnpzTVRzeGNqNjQvUEloZ09zczB5ZkNBV2hzM21RUDkxdCtLZWhnTjRwRzRQZUZmR2FXdEtwOHlrRVVnU1JlM1ptUXRkTHA1UGh0bWhQZ2YraG5YcldKSVdNdzBVaVFyOHVoWTdPTmo3S2U0RGJQcjltNWtzZnYrYzdHOVp3YjdPRnRoa0c1NVpkQVZ5RlRzU0FJcHNDdjVweWt5OHNIZ2xObmFkd0hmMmJ3ZHhlYzVZeTdudkJnY3JHY1BWbVFVUFhldktlYlV0Rm9OaG1LeEJrL3ROZmYzd09JVUk0R0NSMjVyM0RNYlZoRXNRYmNOUG5uMGtkT3JFTXh6RU5lV1Z1S044QmhUcWEyQkI0d2llYkd2Q3hwYWpnTU1OZ2VmSGpORlFiZUVJd2FhcUZSbGVJb2ZvNDRYRE4rVXZyYTNEQStrWmRLWE5oVi81V20vK2Z0UGVGNGppdUFBNndEbFlORHJISXFsekplcGNxU2xSVkpBUWNJb3JoY3FPVVNpczJvK0djTWUwMmYvK3ZTazFQNm1QaFU5clVPUTJ0YmFjZGdFTnc4V3lncHVPdnJ1MWZxRG5LdDUrWWZYaHBRNzY2S09DYVI4UG5rbFVFK01SRkxteTZsNnVYVllUMUhYRURQMjArWWpGOU9ROVRsZzZvcWFHKzZkVzMweXJZTm83Y2o3UXN2RVNQNVEvalhkRjFBSm83eDBWem8rbXovbU1RNVNRaEFsSjRDR09ZSktqWkdJazV5dFowSGtGSzd5bEEvZFZMcndCYWh6R1pHQWRGd2pSaEpDYTRSMVRhKzY2eEpQVFRGdEtLSVpNYi81cC9FNTM5NmdycGlsOGhjMkJXK3AzUHJhNTQ5aS9Fa2NtenQvRHZCOE9VYmpNakE3aTRyenlsemRWcjFqZHFjYVJvRURZS0JaQkNDMm9SMkZETTlBVGorTTMweSsrYzU2MzlBOW1MSWpKT0pUN3lJZzJITVREcU16SzIvSHN6RVdyQTNvU01SYUZyS0YrdnRPWmNEekJhTXdMUEFLV0FaV1krTjJjSld1bVp1VHNOYUxCaVI4bGZCUTA1R3k5RG5mYitxcmx5MlZlUUEvcjhTV3dDRGNxRTRzMzhFSE1DeWE2alFoa2tjZWpsUXVYVG5WNTN6VVNrWStWUWJIbnRSTlJlQlhuOGY4c3I3M0lJNGdXYlFpUU9PNnN5U2xoU2NKWldBQkJSeUlPQjBmVVg4OWF0SGhlVnQ1TDlJa3hnOVVmRjdMMnBJQnlNeEZEaFN2cnpRZW16YW55Q21KZlp6S2VWbTllV3JnQnpXMTYxQ1FUeG4rVXpyemgwdXppWDBCTkRJZTlDNDVZTzZ3R0pLTlk0aTE0OFh0VGFpOGpJSnB2Q0VWTWg5SUdWT2lFOUNCK1VOZHdXOEhVTDk5ZVhIbXJUSGpOU01URzlWenorU0ptT3JRLzJESnhXL0dzdTc5Vk12Tnp0RyszWDB0ZktCZ3I5azBSdExocE1wemoycXo4Mzk1Zk9idHlsaXRyczVWTXBPN1FSMmxhVEV0MG1NazRwanN5ZG55bnZIcjJqVG1sai9ScVNZUnBtKzRZTlh2TUVOeFFxdzdhMVRpeVJMSDE2NldWbjFwYk9PWExHWUxVUjUyY01WUzJmM2pFc1FTVWFxNmRDSkUxK2VYZnZMTzRjdGtVMlg2NE5SbGx5TUY0OHVSeHZ6aUQvaGg5cVUxYzAzRjFadDR2NWpzOXorME05OSs5YmREL2J3UHhTRDVyamFXSGF1ZEpRQ3dYTjFMUEZqZ2tPYmdpcC9pUnl6SnlmbHBpcy9mVkp5SlFDWUdiVjhhTkdrM29qU0xjVUZIWHBjYmhKRUxrMW9MeS8xN295bnBvZnpoNDJ6dmh3RjBkc1hBTmkxNzBlUUhDTTFNY3J5NmRPdnRtaVJodFlTTWNzaVdsZVg1bXp1T0wzZDVmVHJlNVEwRkRRN3NhWTJ1YVFJbkphRkxlSDBNWFFSMWNCM042U0Y2VFhmVHoyYzZNbjNlcHNTc2FZdEhyajBaREszMWFjcFpKTjhSeDcvWFBuZUwzYjJLb2drNDl6WUtodjJsNkx0Q1g5alJQY1htMkxuQmt2cExGQ1p2dE1uMmFoVWVYbW1CWkxKbWtLRG1wYnh5aVM2Sk5pZlJoYjRvSXpuZG52akhQa2ZWR2l5TUVSUlNxanNVaUM1cWprWVYrVTZzT21VWlpWRGZ5TlZoT2EyUnZqalgwR0FLNHVKUG5Uem9JYVhmell2MU14YjJuM0s3czBYVHRrRWRTa0N2YTBSd080S1Ntd3l2STlEQitNcmR5ZnQ1UmRjckUvSm9LMCtBZ0VSNnpIUmxIODBYYjBXSWlydzlDblJZRlYyNmFWcEZQVGVUMGFja01qUkRKTWsxT3REalZLUW5CTXNuaGR4UFNxVmxhbThqeHpYTWMzcVJIRW5FME1zQlNCaDdKSWNkNkhnakEvd0YyVi81OUkwbEpmUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBWjJTVVJCVkhnQjdaeFBiQlJWSE1kLzd3MythU3ltZUtITEFiYUdpSHBoYUQwZ3RtWFVDeDRJR0xuSXhTVkJqQ2Z3WUZKS1RMc1gyc2lCa25oUU5PbHlFVTBnUVBEQVJSbHNSUTVTeHNSd0lDVGRZa0xYazJ0b0FpWjBIci9mbTUxbWQzWjJkMlk3YjJmLzhFbmFtWjJaem5hKyszdS9QKy9QTW1nZ08vVFBkUTAwblhHMmxRRkxnZ0Jkbm1DUUxMbFFRQlovNS9GRVhqRGJFZ0FMeS9aajg3cDF3b0lHd1VBaGhuNmtaNWwzcGJqZ2UvQ2RVQVRSQTZ1Q29WakN0QUV1YWJadG10WmtGaFNoUkpoQmZjVFFtRFlHVEJpZ2xvdTJMYzdNV0JNWElXSWlGY2JvSDAyaDJZL2hiaElhU3hhdEtEMHpkendERVJHSk1OSkNPSitHeGd2aUpUS0JWaVdNb1k4a0JkT21HOUJrd3BKaHRwMWVqUS9Tb0U2R0IwWVBBK00vb0NpdlF2T2hBMk9walltaGYrNHR6dFFWeVVKYkRFVWFtNzh3eGtBY2dSWkFnSmo2ZFc3aU13aEpLR0ZrMDlINGhaWDhvMVVRWURGaHZ4K21hUVVXUm9yQytWV0kzOEhXU3hiOXp0dEJ4UWtrVEJ1STRoSlluSnJDdEpFb0xvSEU0VkFENlZQYVJ4UUNVd3grZ1lKSXRZdXFDalBjZit4a3l6bmFJR0RkWnZPdXNXcVhWTXhqS0wzSHpTUzBLVmpkYjkrWUdQenYzdUxzRGYvelBqaCtSYnUxK21xNDZjbWp2OW5tNTI5OG14STYyN0VPRUlYb0VZeE4rNTBvczVoQ2hUd05EV0RRZUExMjdSNkF6VnNTMEp0d1BvZTdkeFloZHo4UHMrWnR1SEo1RGhwQklVcVpKY2U4Riszc0g1MEh4VkZJSCtpRGtmUytGVEVxa2J2L0wyUk8vOUlJZ2JMWDVvNzNGUjhvY2I0Rmg1c0NoYVErZVJkR3hqK0E3clhQMTd5MmUyMFhXdFhyK1BFeHNHN09nMEo2c09CY0tDNDRTNFRabEJpaW5FV1pieUZSVW9mZWdiQ1FoYWtXQjV1T3ZyQTRjNnJvdGNQUXdORzlYTEFMb0FoNnVLblRCOHVPVzMvTVMzOUN2b1hvM2JCT0N1alh6STRjK2s2dE9FVytac1ZpK2hMREU3aFIxcmN5OWUzSFpjMG44ODNQTUprK0Q3Zi8raHR5aTNuNVF3S2QrLzY2UEsrLzhYTEo5U1NhWW4rVFhNak5ucUVkS1F6bExXaXFYNE1peUZyMjdkOVJjb3hFSWNkYUNkY3lpc1VoWWVnNENhZ0V4cEo5NndkT1pYTTNIamw1RE9jR0tJVENjakZ1dEtrRlhiUDA0RkhWZTBVTkRmZlFWZ3FEZWNzZVVNam1MUnRLWHBOUENjcVZ5emRMWHZkdWVBbFV3b1dqUlNIelpRWW9wTHU3MUxlNGpqWUlkKy9rU2w1dmZxVVhsTUtZTEpxNW9ZL3FxdFAvN2hlN29JWG9NWEFvbVMvenBodjZpSjFsL295K1JnNnVLNEFpaUV6TW9Md3A2UU1VYVlKMU43djNjS0ZzZU5mdWZya3ZJeFE2OHFoaFlPdHM1N1pqVjFVTW1GSGE3ejZBS2lpbm1Sdy9EMUVqaEgySm8vdnRoTzZGVURER3QzS1U1Nmt3UGxDNFRzSlR2Q1JyamhKMEttdWdDYUFLKzl6WjMyVDZUdzVidGRNT1F1ekNlQ01MaFdDbmcwcHRUVlFMYWtwWmlCRy9iZ1J2ZlJRRDJkaDlqRjhYcDdlaWJqaEM1RW1ZaGswUjlVUDI2WHFJMzhmd1BLYzV0QkFqSkVKeDJ1OE1xY1FyakdETGYzSWVzOFY0b1RHbHVCSEEwTWZZOFF0VDNGVzV0QlN6ZjBFMCs3SEpUZXU0NWN5NGpvL2lDbGxGdFJ5U3ZHbWRzSnlvSk96WXJJWWlVSEZrb3YwNG94SlcxdGRvS3hNOG13R1cyV0JBREpBUVA1bGZRTE9BMFVoT3Y1Y1dvOW5QWmVBcExpYjlrc0tZMW5nZWJjaUVEb2M2cU55NU1pdVpMeE1pRFJHeTlPQWhxQ2JxOStEQ3pxenN1enR5ekZhSUxFVEV1Yk8vSzNXaWRHOTZqOGpBWnpldEwxZVc5NVJVMTJRMWxXWVloWVhDN3NIOVg4RytEOStVMVhLVWtLV1FLRkdHZG0rTEtaODR0TzNvUEkzaFFpZUIxbkx0MWtUSmNFUlpkWTNLSFlBT3c4Ky9sZ2xUOERVbWRBNFpmT2FNOTZCdmY0eGpOU3orYWs0MVFrNW45WTNHdmhPZ3M3blpmTi82d2YvUjEreUNOb1lKKzFQdmJFMlhpalBEVVp3Ym14SkQ2OUE3YjRjMkJJZGhUNW0zSml2T2ZLL2F0Y250WjhkcEVSUzBHL2hNNXR4azFSVjZWWVdoVW9GV2hrV1orTVVPUG90OHBob0VYOGpGMk5XV3oyK2tLQ0thaFZ3dUxTOU9DRkdJd01NbmRFTzZjVXY2SExsWU5MZ29SRjBMMG9mN1I2ZndEdzlEQzBEUkIreEg0NlkxRlNvdnEzdWxQamF0bE9EYXlhWmR2a1BKR3hOcGMyNWlDdXFnN3BYNm1PZFlmZXZmK2hISHBkYXh3a3pIcGtFd0V5UFBlNWluWElFNmllUkxMNlQxTURZV3UyTjJIT3lCU3Rsc0dDSVJ4aVUyZ1J4QjBuN0ZZTDFFS295TG9SL2RLemo3Q0hmM2drcGtrMWxPUjJFaFhwUUk0eUlYYitCR2NMNEhuYUdCNzdZNlJ5M2s5MWJSOXpSY0FuaVlDUnRwd3FCVUdDK0ZXZWlHelVXU0NXMHJ5RVZqR05YOHY3eUwvanRMZ0wzQTVUQXl0NXhSMDhid0JIRXlzTGlDYTN6Y0FBQUFBRWxGVGtTdVFtQ0NcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQa0FBQUI0Q0FZQUFBQXdvMVR0QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQXNFU1VSQlZIZ0I3WjByZHlMZEVvWXJaeDJCakl4c0dSazVzdVhJeUU5R3prODRQK09USXlNamtVZ2tNakt5WlNSeTNKeCtvU29VbmI0QmZkbDc5L3VzdFJjTkpOQWhQRjIxN3lLRUVFSUlJWVFRUWdnaGhCQkNDQ0dFQk0vZnYzL3pzdHpMQlB4SENDRnpBTUZmcGhDZGtoTXlINU9JVHNrSm1ZZVYza0x3WDZYb0R6SVNsSnlRZVZoVmppSDZrNHdBSlNja0hKN1JJQ2NEUThrSkNZdDhhTkVwT1NIenNHcDVibERSS1RraDg3RHFlQjZpUDhzQVVISkN3dVdwRkIwTmNsMFhoRllvT1NIejhLZm56NkZyN2FhKzlEc2hoRXlPU29zdXM3em5yK3pMOG5wM2Q3ZVhDNkhraExTZ3FUTEt2ZDdXcGM0bUhxTHp2aFN4YjVRMjJYTTVDdC9GVmFKVGNrTGtTN1lITGZmdTlwcjY4RUYyTFo5VzJ1UzhRSGE4eGx2NVdwL1NFMHBPRm9sRzZNZXlaRnFtbUJFRytRc3JkYUtXNTVXVk44OGQ1NFBYV1plLy95RTlvT1JrTWJoNmNLYWxpNzByZitUVVdPWWpzc2xZVGVuN2pFWEg2K3pLOGxHTjhqckVOWmQyMlRmbDcrMmtBMHBPa2tZak5vU3hxRjBINVAxMHBiaW1nYXZtdlgvb2UvY1JIdS83TGhYaGU4aStMWDkrS3kxUWNwSWtHclZOc3JwNjlVSG1zaURsL2J5a3Nhem4rejlMdjhhME9zNkU3OUVTM3lvNkpTZEpvWFhhWE9xamRxSGxmWWhJM2VOYzd0MjVYRnZuL3hKZTcrZFNmL0hZbFgvVHB1NEZLRGxKZ2hhNUVhRXRLaFl5RTVwMlczdkF0Wmp3dUVBOXluZlpjU0ZZVjdNU1NrNmlSdXZjUCtYN0Z4NWZkRFJLN1laT3hXOUJvenZPOTFGdXd4b0RxL1Y5WEFoZS9kOU15VW0wYU1OV0x1ZDE3aURsOW1oVUgyVHlTUU5uZzJiK0s0UkVoaTZWaEdpWXVZZURsM3RDYk8yNGcraVVuRVJGUS9SR1BYVkR1Yy80RXAyU2t5alF1aXhTM013OWpIUjBQV2VEMnBYY05IVzBBeHRTKzZuSEQ1U2NCRS9EVUUrazV0dElvL2V0a2xkRnRrRThmK3E2QmlrNUNScE56Mys2aDJLTjNwZHlrY2h0VUhJU0xMck9XZTRlS3VRbytPZ0RXU1ppTUpIYllCY2FDWkthWWFHTkk3cGl3MVo1bWVwaVJjbEpVRFFNYnVrMTI0clVROGxKTUtqZ0wzSWF4WVVVRm9LL0M3a2Exc2xKU0NCRjk0Sy9YcklDQ3FtSHE3V1NJQ2lqdUIvUFRjRUhoSktUMmRGVzlCL3VJUW8rSUpTY3pJb2JwbXFzS2Zpd1VISXlHMjdhcGJGbEk5dndVSEl5Q3lyNGkzdG8xN1ZXR2JrT1NrN21JcGZUV1BSOUtnTmRRb1NTazhseHE1aUN3d0lIUWthRGtwTkpjWXNiR3R1RXhxSUhDU1VuVTVQTGFhcmxPeHZheG9lU2s4bHdLNVlDUk8rdGtOR2g1R1JLY25mTU5IMGlLRG1aQkIzVlpxM3BCZFAwNmVBRUZUSTZicHNmWTEzenZDK3JTdkhZeG9ON09kOGkrS0o5d1pjRUpTZFRBTUV0aW1PWGoweVhWYzdrK2ozQXYxRytKb2JEUXZoQ0dyWUdYaUtjVDA1R3hZMXN1NWZwTWVFLyt1N2xuU0tVbkF4T3orMkNEVnZqYkMvZjl3TUhmeXdOMTlldGxnY3RxNDczTXVFWDErQkh5Y2tnWExnUCtJZmVqckZsc0ZVRHJOUlZCZkQrdXdXcytIcUFrcE9iMERYUmJZZk50cm8xNnNpdk1qSGwrZUhjNm5ZQUJaQjlrM3BrcCtUa0tqcjJBWWMwNkNLRFhMYWMwM3JPYmpOdEc4amtmR0tNZ2ZOS05vMm41T1FpV3ZiWlB0c0hYTlAzLytsejZONzZWd0pCLzRaY3ptV0g0SnNVRytnb09lbEZneGpBb3ZiWmJxS1Y3WGt4Um4wdGdlR1duZkxWakcxcTg5b3BPV2xGNjdSWXZhVXFkeUZISVlxRzMvdEhUZ3N6dm9iYXlOV3drU0lhQmQ5U1NkOHBPYW1scGM1ZFNJdmM3dmVScWlOQ0JwV3FOMUd6SmROaG5uc0tvblBFR3ptakliS0JRbnJJcmErUnlTa0Y3dno1RUVDS1hwNDM2dVBJUUd4NDdRdjI5NDVkZEVaeWNrQWJ5bjdJOXpvcVV0Zk5KZWwySlNyTzJxcCtLVFVqOUtLUDZKeUZSaXp5L3BMekJSMXNpNkxmVjlTbk0zZGNTRVNveks5eWxCdEE5bjhrWXBpdUw1aVcxSHdybGRieUM3Rys4WDJNRVJEbmpEUmRUaEg5QVR1OHhMcllKQ1ZmS0c1VEE1K2FGM0xqL3Q4NnJOUmVNOXBaWUNyNm14eEZQMVJsTU1zdHhubndsSHhoTkVSdlJPejFRQU5CcXZYNWFNRlUxZkx6MnNwcEE0aWY1ZjBpdHV5RWtpK0ltbTRpc0pOanEvbFFFMFVlM0hIMDg3bXhMN3BlR0sxQkVoZklWNGtJU3I0QTlFdUt4aU12SUtMUmVvUkJLbjdRVENvcnRXemxOQUVIQzE1a01jMWdZK3Q2NG1qZEd5M25YbkJFNzk4amZWR3I0OEdqUjdNYzMraVdTMFF3a2lkS1E5MTdyT2p0K2FxVHB6U3JDdzF1T2g0L2s4aWlPU041Z3Jqb25ibUh4NHplUzJIcmpuT0pCRWJ5aE5CUmE2aDdaKzdoS2FLM3g5TDE1RlpPMVNtMGhVUVd6U2w1SXVpb05RanV1N0NHYmptL2hPUWtWOUJQbnVreDB2ZENBb2VTUjQ1RzcxeU9YVHdHQkh0amFqNEtHRXVBenhlZit5TSsvN3ZBMTN1bjVCR2pvOHRzMXBSUnlGSHd1YjU0OXI3M2tpRDRYTXZQSGRIYytzM3hQeWdrWUNoNXBHamoyay8zRU9SQ2FyNlRlVWsxVGZjZ21sdm1oSVV4Q2drWVNoNFpFYXhrOG5VT09OZVV1dEVjZmlRZkpBOTY0Z29sajRpR1NTVzd3R1pIK1VpK2tnVFJsTDBRM2VZcDlIbzVKWStBR1FlMlhJT1AzS2l2Umo5K3ZRSDhYWmtlNHpiWVZWNHBlZURvUW9vUVBKU3VzUzZxa3FlS3YzZ0YzY2hJeVFORnU4WWc5Nk43T0lhdXNXaSsvRGZpTDdDVW5GeEdRL1JHT3JnT3ZVOVdGMXV3ZnVSTTBzVmZ6SUp1ZTZEa0FkRVN2WWRhMEdFcUNqbitEYXVFVzlpamdaSUh3bGpMTWMxRUlhY0xGVzduN3JzZkc2YnJwSmtKbG1PYUE1eTNEZFJaZ3VRYzFrcSswN0xPT1laTWJrS3ZlN2VoOWZKQ1RyTzFnaC9mZlFYK2YwYkp5VGs2WXd6UnU3cUtTb2o5M3RkU3lDazd3WVZzSzJsQnljbDNXdllYMjhwdDY1eUhDRkwwWEk5VGxMeTZYbDZ3VVBJSjBOUWNkZFNueWxPRnhObXcxa2xsNkNkYTJaOWlYTE84aFdoV3BhWGtJOUpTNzA0dE5XOWlLOGZOQ1VBdXgvYUdWSWhMY2wyUGU1L1lsWFkyV3VSR09vNDBOclhVdkpiS2NrbjNxVVJ6N1JFeHlUOWpXVFFDSjV5cjdGdktmaDJVdTVhdG5LSTVkaUQ1U09BenlOeHhJWUZqa3RzWDh0Qm5hN0tYSllWL3lPaG9nOXFUZks5ekwxbnVBNVZvYmt0VmJTUnVmcmpqNEFQaVlYL3lsbFpmMUIwTE9VWjNEazEwYU5TRzFCanNrVldlWHJ6Y0hrMXZmOGtwbUx6RzJoNmhycnpvWGFUcXZ5Vnc3dnlkbG9nRWlySzhMejJWMTg4SVl0dTJPUjdLM1VCbHVTb0VqTjh4ZmtibDMvRWlwNHY2T2dZZjd1b2UxQ3R2THZXeVczUi9YOHBxb0IxaWcwS09Rem5mS1hjekZVRlFGWHlUaU5BZFZKNzFMaHFxLzVVSXVHdDdVbVhQNUNoODNTRDhKSVhYVkJ5TmtXMWlRMlpjeFQrV2NyRzdsWnEwSGRYQXJVU0FudnVMbkR5SUlvcUR1NzQvNkZMNXd4VENtaC9CbDc2UVkwUkRYU1hvdmtPUGt6clRndU9tT2NLRm5PUm0xTDZRU3AwV1JDRjZlZDZJNEpiWlJwV0Y5SmJjVUNFZVhXbkNwRWVCOE1IMEo3b001Y0dWSnFseHpqaC9wdU1EVWJPYzlDYUFwYVFicWV6cmp1ejFOYWFHNklzbDk2andtWnhhbUx2bTFVSVdrMlp2OThlSStpcXlSZWg3TFhhODZ2aDFuTnVIbkxJU2lqMHdGWEZBa0JHOTVqemZZcHNDZkpQa1ZYUkhqOHlWTHBrOEVHbXZ0OVhTeEVyTysvanRmdGZGcG9xMUxSd0t1d3VuSVhUUlk3a1FkVEdvNUZWVSttcHFmSW40WTJCQ1d6WlJNRkxQUjQxSWhjdzhhYWRoUWxHVWdvTlJKYS9ETlhMNU5IcmxqbS9Gc2dHN3RTcENJY2VxQVlVT2pCclI4YitiWlhoMXcxei9hQVVIazB2ZUIxZWY3aFAxN1lwUGdTT21ZZk5HU0Q3SmFNdVczV0Uzc1E4QUMxSnlza3hhQm1HTkpudkhkT0MzbUxxQ202RGtKRGgwWkZrdTM2dHYxbzE1Yyt1MnB1VVFHN2RKenhpazVDUklYSVNGOEZYWkx4cURvYTlsRGNCVzZxcUNrMVVQcG9TU2s2RHBNYlRhOEkydFJwKzJIUnVldkV1MTY1U1NrMmh3UTZ0eGUwdFBqQitDbmZ6d1pFcE9vc1FOdlBKZHNVMlRxS3dyRmFWSW9UR05FRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVNRUmZKL0x6OEc3L3h3ZEZFQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFa0FBQUFhQ0FZQUFBRDdhWEdGQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUhkU1VSQlZIZ0I3WmloY3NKQUVJWTNUQVd5RW9tc1JDSWprVWhrSkk5VGljd2pSRlpHSXBHVlNDUVNSLzlORm1iWmt1U1NhWWRMY3QvTXpvVkxRNU9QdTl1OVJPUVoxK3MxUnNPUlIxR1Vrd2RNeUQ5aTA3NGNIeVY1UjVEa1FKRGtRSkRrUUpEa1FKRGtRQ0VKdGNrVXNVQzhVNEI5ekRsdW45K2szU0pZMEFVbk14UngzelJTOFB4ck5BczUvb0tML1FRSE15b0ZNVlBFQm4xTEdoa3lteElTUVVKeHpOUHRMS0ZaeWZaZ0ZNZ3lreURtNWxReG95WVlUaGUwS2YwV0ZZOUJsQkkwTTZmdWU4ZGk0Y1lIRnJSRG5Nd2ZzcWdWRFJRbHlDYXNoODMxdlFSUUkrcGdMbGppeTNpZG10S0FrTFg0bHJBMG1YMzc4RkFuc1NoRWhzUGNYUGlCU0laU0luQzVRK1VJMGo4OEQ1SWRudDhPa3VmRnBKak1UVGViNzcwb3lkeWM1clVnWG01U1BQZnAyVFdWRlhlRnFHSU85MVdVSkNLN3h0WUtZbXEzSlNJcU05MHNhQ3R6dWplb041NGFGcE5LNHFxa2NlOG1jNVF6MzBWMTgxRGR5dHoySHFtaVk5TjlKQWRCak5NR1Y0WWlpN0pmdVBhNWxwSXFtak9ZL1RFUGVLWlVNbm9qem04QnhIaEtQU2s2RzRyRWpGclE2bFZKZzZpL3FxTnkwM2FGeTViS0tyb05FWFZBaENUcUpzNzQ1NS9rRWJoSGxyUlJYY1dPbmpyUVNaSzZrWmpLYkxldlM2R3ZRbXFpT1pYM2Q2VEEvL0VEY3F2T2VSazROWllBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVvQUFBQWJDQVlBQUFEYkFoa2pBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSUNTVVJCVkhnQjdaZ3RjOEpBRUliZmRDcVF5TXJJU21SbEpES3lNakkvQ1JtSlJFWkdJaXY3RTVCSUhOMU5OdlRZaEhENWFFbkNQVE0zZ1F0ekhBOTdlNXNESFAvRCtYejJxYjFqcE5EY0Z0UlcxSmJvZ1ljZTBKZUhkRm5KMjh6enZBd2pRdVJFMVBoNm9yYWpPWDZqQXkvb2dQeExFWDRsUWIzdWhVUnBPRUNrTHFVeEMycWZOT1lIT3RCYWxQRXYrZXJXRjRhampOUVEvVGhRTzZxK05mMkdBQzFwSmNxUTlLWnVEYjNzekNqb0RNMkpsMXVDcXF5Z3JTeHJVV3E5bTR3dU41blEzRmhTZ2lLNlRBTEpzVlpZaWFJQk9ZSmlWQ1dsWTVaVVlzalNpWngzdzRoejdyMHg3b3JpclJWRkpKbURjVWh2YVFKN1RBUmVodFMyOUZMUDJhY1czeXNmR2tYSkRzSGhxU1VsWGJmWlIwUHpUdW1TcWU0OHJUVEp1aWxLa3QxYWRYTUliK2pMRHBnd2tpNHkxZDBvcTFZVWZaZ0ZCYW83WCtleTNpZVB5RXBWTjB1S0pTZGZjU1ZLQ2tsZWFyb280d2phekVWU2llUll6bHNubzV2VFRDeTUrY0pGbEdUK0NOVUttd3ZKUkdxUzJTRzVOa0cxMWdyTldpc1hKZXVTdDM4ZGNuc2FhRGRYU1NXU2N4TTBGS1psUlBGU3F5c2tVendKUnExVkoydDVhOWNiZGJYOVZ6UlU4WGlWYTRZaWlma29KQTM1Z0RzcFdCWkZVSUppMStmVEMwNC94MWU1bVovVndKRWpQbElZNVVPbjg2aG54SW15eElteXhJbXl4SW15eElteVpLeWl5a2VtV1QyRUR3NC9NdkJSVDkxeHg2UDRBY3ArMVptNHlFa2VBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby1jZWZhMmU0NzdlNmU2MGFkNjE4OTNkOGM0NTczOTcwNS5wbmdcIjsiLCJpbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3Qgc3Bpbm5lciA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuYDtcblxuY29uc3QgQW5pbVNwaW5uZXIgPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtzcGlubmVyfSAxcyBsaW5lYXIgaW5maW5pdGU7XG5gO1xuXG5leHBvcnQgeyBBbmltU3Bpbm5lciB9O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB2YXJpYW50LCBhbGlnbkl0ZW1zLCBib3hTaGFkb3cgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcbmltcG9ydCB7IGJ1dHRvblN0eWxlLCBjb2xvclN0eWxlLCBzaXplU3R5bGUgfSBmcm9tICcuLi9jdXN0b21WYXJpYW50JztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuY29uc3QgQnV0dG9uU3R5bGUgPSBzdHlsZWQuYnV0dG9uYFxuICAvKiBidXR0b24gZGVmYXVsdCBzdHlsZSAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy53aGl0ZScsICcjZmZmZmZmJyl9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeScsICcjMDI4NDg5Jyl9O1xuICBtaW4taGVpZ2h0OiAke3RoZW1lR2V0KCdoZWlnaHRzLjMnLCAnNDgnKX1weDtcbiAgbWluLXdpZHRoOiAke3RoZW1lR2V0KCd3aWR0aHMuMycsICc0OCcpfXB4O1xuICBib3JkZXItcmFkaXVzOiAke3RoZW1lR2V0KCdyYWRpdXMuMCcsICczJyl9cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcy40JywgJzE2Jyl9cHg7XG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cy40JywgJzUwMCcpfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZy10b3A6ICR7dGhlbWVHZXQoJ3NwYWNlLjInLCAnOCcpfXB4O1xuICBwYWRkaW5nLWJvdHRvbTogJHt0aGVtZUdldCgnc3BhY2UuMicsICc4Jyl9cHg7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZUdldCgnc3BhY2UuNCcsICcxNScpfXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAke3RoZW1lR2V0KCdzcGFjZS40JywgJzE1Jyl9cHg7XG4gIGJvcmRlcjogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgc3Bhbi5idG4tdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAke3RoZW1lR2V0KCdzcGFjZS4xJywgJzQnKX1weDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAke3RoZW1lR2V0KCdzcGFjZS4xJywgJzQnKX1weDtcbiAgfVxuICBzcGFuLmJ0bi1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5JywgJyMwMjg0ODknKX07XG4gIH1cblxuICAvKiBNYXRlcmlhbCBzdHlsZSBnb2VzIGhlcmUgKi9cbiAgJi5pcy1tYXRlcmlhbCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cblxuICAvKiBXaGVuIGJ1dHRvbiBvbiBsb2FkaW5nIHN0YWdlICovXG4gICYuaXMtbG9hZGluZyB7XG4gICAgLmJ0bi10ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogJHt0aGVtZUdldCgnc3BhY2UuMicsICc4Jyl9cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAke3RoZW1lR2V0KCdzcGFjZS4yJywgJzgnKX1weDtcbiAgICB9XG4gIH1cblxuICAvKiBTdHlsZSBzeXN0ZW0gc3VwcG9ydCAqL1xuICAke2FsaWduSXRlbXN9XG4gICR7Ym94U2hhZG93fVxuICAke2J1dHRvblN0eWxlfVxuICAke2NvbG9yU3R5bGV9XG4gICR7c2l6ZVN0eWxlfVxuICAke2Jhc2V9XG5gO1xuXG4vLyBwcm9wIHR5cGVzIGNhbiBhbHNvIGJlIGFkZGVkIGZyb20gdGhlIHN0eWxlIGZ1bmN0aW9uc1xuQnV0dG9uU3R5bGUucHJvcFR5cGVzID0ge1xuICAuLi5hbGlnbkl0ZW1zLnByb3BUeXBlcyxcbiAgLi4uYm94U2hhZG93LnByb3BUeXBlcyxcbiAgLi4udmFyaWFudC5wcm9wVHlwZXMsXG59O1xuXG5CdXR0b25TdHlsZS5kaXNwbGF5TmFtZSA9ICdCdXR0b25TdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblN0eWxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCdXR0b25TdHlsZSBmcm9tICcuL2J1dHRvbi5zdHlsZSc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIHR5cGUsXG4gIHRpdGxlLFxuICBpY29uLFxuICBkaXNhYmxlZCxcbiAgaWNvblBvc2l0aW9uLFxuICBvbkNsaWNrLFxuICBsb2FkZXIsXG4gIGxvYWRlckNvbG9yLFxuICBpc01hdGVyaWFsLFxuICBpc0xvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsncmV1c2Vjb3JlX19idXR0b24nXTtcblxuICAvLyBpc0xvYWRpbmcgcHJvcCBjaGVja2luZ1xuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKCdpcy1sb2FkaW5nJyk7XG4gIH1cblxuICAvLyBpc01hdGVyaWFsIHByb3AgY2hlY2tpbmdcbiAgaWYgKGlzTWF0ZXJpYWwpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goJ2lzLW1hdGVyaWFsJyk7XG4gIH1cblxuICAvLyBjbGFzc05hbWUgcHJvcCBjaGVja2luZ1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cblxuICAvLyBDaGVja2luZyBidXR0b24gbG9hZGluZyBzdGF0ZVxuICBjb25zdCBidXR0b25JY29uID1cbiAgICBpc0xvYWRpbmcgIT09IGZhbHNlID8gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7bG9hZGVyID8gbG9hZGVyIDogPExvYWRlciBsb2FkZXJDb2xvcj17bG9hZGVyQ29sb3IgfHwgJyMzMEM1NkQnfSAvPn1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKSA6IChcbiAgICAgIGljb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLWljb25cIj57aWNvbn08L3NwYW4+XG4gICAgKTtcblxuICAvLyBzZXQgaWNvbiBwb3NpdGlvblxuICBjb25zdCBwb3NpdGlvbiA9IGljb25Qb3NpdGlvbiB8fCAncmlnaHQnO1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblN0eWxlXG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgIGljb249e2ljb259XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBpY29uLXBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge3Bvc2l0aW9uID09PSAnbGVmdCcgJiYgYnV0dG9uSWNvbn1cbiAgICAgIHt0aXRsZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dFwiPnt0aXRsZX08L3NwYW4+fVxuICAgICAge3Bvc2l0aW9uID09PSAncmlnaHQnICYmIGJ1dHRvbkljb259XG4gICAgPC9CdXR0b25TdHlsZT5cbiAgKTtcbn07XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIGJ1dHRvbiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEFkZCBpY29uICovXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSksXG5cbiAgLyoqIEFkZCBpY29uICovXG4gIGljb246IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqIEFkZCBsb2FkZXIgKi9cbiAgbG9hZGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKiBBZGQgTWF0ZXJpYWwgZWZmZWN0ICovXG4gIGlzTWF0ZXJpYWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBCdXR0b24gTG9hZGluZyBzdGF0ZSAqL1xuICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBCdXR0b24gTG9hZGluZyBzdGF0ZSAqL1xuICBsb2FkZXJDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogSWYgdHJ1ZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZCAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFkanVzdCB5b3VyIGljb24gYW5kIGxvYWRlciBwb3NpdGlvbiBbaWYgeW91IHVzZSBsb2FkZXJdICovXG4gIGljb25Qb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcblxuICAvKiogVmFyaWFudCBjaGFuZ2UgYnV0dG9uIHNoYXBlICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3RleHRCdXR0b24nLCAnb3V0bGluZWQnLCAnZmFiJywgJ2V4dGVuZGVkRmFiJ10pLFxuXG4gIC8qKiBwcmltYXJ5IHx8IHNlY29uZGFyeSB8fCB3YXJuaW5nIHx8IGVycm9yICBjaGFuZ2UgdGV4dCBhbmQgYm9yZGVyIGNvbG9yLlxuICAgKiAgQW5kIHByaW1hcnlXaXRoQmcgfHwgc2Vjb25kYXJ5V2l0aEJnIHx8IHdhcm5pbmdXaXRoQmcgfHwgZXJyb3JXaXRoQmcgY2hhbmdlIHRleHQsIGJvcmRlciBhbmQgYmFja2dyb3VuZCBjb2xvciAqL1xuICBjb2xvcnM6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3ByaW1hcnknLFxuICAgICdzZWNvbmRhcnknLFxuICAgICd3YXJuaW5nJyxcbiAgICAnZXJyb3InLFxuICAgICdwcmltYXJ5V2l0aEJnJyxcbiAgICAnc2Vjb25kYXJ5V2l0aEJnJyxcbiAgICAnd2FybmluZ1dpdGhCZycsXG4gICAgJ2Vycm9yV2l0aEJnJyxcbiAgXSksXG5cbiAgLyoqXG4gICAqIEdldHMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b25cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpc01hdGVyaWFsOiBmYWxzZSxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgdHlwZTogJ2J1dHRvbicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgZm9udEZhbWlseSxcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxuICBsaW5lSGVpZ2h0LFxuICBsZXR0ZXJTcGFjaW5nLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCB7IGJhc2UsIHRoZW1lZCB9IGZyb20gJy4uL2Jhc2UnO1xuXG5jb25zdCBIZWFkaW5nV3JhcHBlciA9IHN0eWxlZCgncCcpKFxuICBiYXNlLFxuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG4gIHRoZW1lZCgnSGVhZGluZycpXG4pO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPEhlYWRpbmdXcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvSGVhZGluZ1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFzOiBQcm9wVHlwZXMub25lT2YoWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNiddKSxcbiAgbXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBtYjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmb250V2VpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgdGV4dEFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxldHRlclNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICAuLi5iYXNlLnByb3BUeXBlcyxcbn07XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2gyJyxcbiAgbXQ6IDAsXG4gIG1iOiAnMXJlbScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZCgnaW1nJykoXG4gIHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gIH0sXG4gIGJhc2UsXG4gIHRoZW1lZCgnSW1hZ2UnKVxuKTtcblxuY29uc3QgSW1hZ2UgPSAoeyBzcmMsIGFsdCwgLi4ucHJvcHMgfSkgPT4gKFxuICA8SW1hZ2VXcmFwcGVyIHNyYz17c3JjfSBhbHQ9e2FsdH0gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG5cbkltYWdlLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBtOiAwLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBiYXNlLCB0aGVtZWQgfSBmcm9tICcuLi9iYXNlJztcblxuY29uc3QgTGlua1dyYXBwZXIgPSBzdHlsZWQoJ2EnKShcbiAgeyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH0sXG4gIGJhc2UsXG4gIHRoZW1lZCgnTGluaycpXG4pO1xuXG5jb25zdCBMaW5rID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPExpbmtXcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvTGlua1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgLi4uYmFzZS5wcm9wVHlwZXMsXG59O1xuXG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdhJyxcbiAgbTogMCxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTG9hZGVyU3R5bGUgZnJvbSAnLi9sb2FkZXIuc3R5bGUnO1xuXG5jb25zdCBMb2FkZXIgPSAoeyBsb2FkZXJDb2xvciwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5XG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ3JldXNlY29yZV9fbG9hZGVyJ107XG5cbiAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmdcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPExvYWRlclN0eWxlXG4gICAgICBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfVxuICAgICAgbG9hZGVyQ29sb3I9e2xvYWRlckNvbG9yfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5Mb2FkZXIucHJvcFR5cGVzID0ge1xuICAvKiogQ2xhc3NOYW1lIG9mIHRoZSBMb2FkZXIgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBTZXQgbG9hZGVyIHdpZHRoIGluIG51bWJlciB8fCBzdHJpbmcgKi9cbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKiogU2V0IGxvYWRlciBoZWlnaHQgaW4gbnVtYmVyIHx8IHN0cmluZyAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKiogU2V0IGNvbG9yIGZvciBsb2FkZXIgKi9cbiAgbG9hZGVyQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Mb2FkZXIuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdmFyaWFudCB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgY29sb3JTdHlsZSB9IGZyb20gJy4uL2N1c3RvbVZhcmlhbnQnO1xuaW1wb3J0IHsgQW5pbVNwaW5uZXIgfSBmcm9tICcuLi9BbmltYXRpb24nO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG5jb25zdCBMb2FkZXJTdHlsZSA9IHN0eWxlZC5zcGFuYFxuICAvKiBsb2FkZXIgZGVmYXVsdCBzdHlsZSAqL1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5sb2FkZXJDb2xvciA/IHByb3BzLmxvYWRlckNvbG9yIDogJyMwMDAwMDAnfTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAvKiBhbmltYXRpb24gZ29lcyBoZXJlICovXG4gICR7QW5pbVNwaW5uZXJ9XG4gIC8qIFN0eWxlIHN5c3RlbSBjdXN0b21lIGNvbG9yIHZhcmlhbnQgKi9cbiAgJHtjb2xvclN0eWxlfVxuICAke2Jhc2V9XG5gO1xuXG4vLyBwcm9wIHR5cGVzIGNhbiBhbHNvIGJlIGFkZGVkIGZyb20gdGhlIHN0eWxlIGZ1bmN0aW9uc1xuTG9hZGVyU3R5bGUucHJvcFR5cGVzID0ge1xuICAuLi52YXJpYW50LnByb3BUeXBlcyxcbn07XG5cbkxvYWRlclN0eWxlLmRpc3BsYXlOYW1lID0gJ0xvYWRlclN0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyU3R5bGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSc7XG5pbXBvcnQgQW5jaG9yTGluayBmcm9tICdyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsJztcblxuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0RyYXdlckNvbnRleHQnO1xuXG5jb25zdCBTY3JvbGxTcHlNZW51ID0gKHsgY2xhc3NOYW1lLCBtZW51SXRlbXMsIGRyYXdlckNsb3NlLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XG4gIC8vIGVtcHR5IGFycmF5IGZvciBzY3JvbGxzcHkgaXRlbXNcbiAgY29uc3Qgc2Nyb2xsSXRlbXMgPSBbXTtcblxuICAvLyBjb252ZXJ0IG1lbnUgcGF0aCB0byBzY3JvbGxzcHkgaXRlbXNcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBzY3JvbGxJdGVtcy5wdXNoKGl0ZW0ucGF0aC5zbGljZSgxKSk7XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5XG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ3Njcm9sbHNweV9fbWVudSddO1xuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8vIENsb3NlIGRyYXdlciB3aGVuIGNsaWNrIG9uIG1lbnUgaXRlbVxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRScsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2Nyb2xsc3B5XG4gICAgICBpdGVtcz17c2Nyb2xsSXRlbXN9XG4gICAgICBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfVxuICAgICAgZHJhd2VyQ2xvc2U9e2RyYXdlckNsb3NlfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHttZW51SXRlbXMubWFwKChtZW51LCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtgbWVudS1pdGVtLSR7aW5kZXh9YH0+XG4gICAgICAgICAge21lbnUuc3RhdGljTGluayA/IChcbiAgICAgICAgICAgIDxhIGhyZWY9e21lbnUucGF0aH0+e21lbnUubGFiZWx9PC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7ZHJhd2VyQ2xvc2UgPyAoXG4gICAgICAgICAgICAgICAgPEFuY2hvckxpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnUucGF0aH1cbiAgICAgICAgICAgICAgICAgIG9mZnNldD17bWVudS5vZmZzZXR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21lbnUubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9BbmNob3JMaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxBbmNob3JMaW5rIGhyZWY9e21lbnUucGF0aH0gb2Zmc2V0PXttZW51Lm9mZnNldH0+XG4gICAgICAgICAgICAgICAgICB7bWVudS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L0FuY2hvckxpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC9TY3JvbGxzcHk+XG4gICk7XG59O1xuXG5TY3JvbGxTcHlNZW51LnByb3BUeXBlcyA9IHtcbiAgLyoqIGNsYXNzTmFtZSBvZiB0aGUgU2Nyb2xsU3B5TWVudS4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBtZW51SXRlbXMgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0IHByb3Agd2hpY2ggY29udGFpbiB5b3VyIG1lbnVcbiAgICogZGF0YS5cbiAgICovXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgLyoqIENsYXNzIG5hbWUgdGhhdCBhcHBseSB0byB0aGUgbmF2aWdhdGlvbiBlbGVtZW50IHBhaXJlZCB3aXRoIHRoZSBjb250ZW50IGVsZW1lbnQgaW4gdmlld3BvcnQuICovXG4gIGN1cnJlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIENsYXNzIG5hbWUgdGhhdCBhcHBseSB0byB0aGUgbmF2aWdhdGlvbiBlbGVtZW50cyB0aGF0IGhhdmUgYmVlbiBzY3JvbGxlZCBwYXN0IFtvcHRpb25hbF0uICovXG4gIHNjcm9sbGVkUGFzdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogSFRNTCB0YWcgZm9yIFNjcm9sbHNweSBjb21wb25lbnQgaWYgeW91IHdhbnQgdG8gdXNlIG90aGVyIHRoYW4gPHVsLz4gW29wdGlvbmFsXS4gKi9cbiAgY29tcG9uZW50VGFnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBTdHlsZSBhdHRyaWJ1dGUgdG8gYmUgcGFzc2VkIHRvIHRoZSBnZW5lcmF0ZWQgPHVsLz4gZWxlbWVudCBbb3B0aW9uYWxdLiAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKiogT2Zmc2V0IHZhbHVlIHRoYXQgYWRqdXN0cyB0byBkZXRlcm1pbmUgdGhlIGVsZW1lbnRzIGFyZSBpbiB0aGUgdmlld3BvcnQgW29wdGlvbmFsXS4gKi9cbiAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IG9mIHNjcm9sbGFibGUgY29udGFpbmVyIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBxdWVyeVNlbGVjdG9yIFtvcHRpb25hbF0uICovXG4gIHJvb3RFbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgYWN0aXZlIGl0ZW0gaGFzIGJlZW4gdXBkYXRlZCBbb3B0aW9uYWxdLlxuICAgKi9cbiAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuU2Nyb2xsU3B5TWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudFRhZzogJ3VsJyxcbiAgY3VycmVudENsYXNzTmFtZTogJ2lzLWN1cnJlbnQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5TWVudTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vYmFzZSc7XG5cbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkKCdwJykoXG4gIGJhc2UsXG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZyxcbiAgdGhlbWVkKCdUZXh0Jylcbik7XG5cbmNvbnN0IFRleHQgPSAoeyBjb250ZW50LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxUZXh0V3JhcHBlciB7Li4ucHJvcHN9Pntjb250ZW50fTwvVGV4dFdyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG10OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbWI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmb250RmFtaWx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZm9udFdlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIHRleHRBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxpbmVIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBsZXR0ZXJTcGFjaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgLi4uYmFzZS5wcm9wVHlwZXMsXG59O1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdwJyxcbiAgbXQ6IDAsXG4gIG1iOiAnMXJlbScsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXJXcmFwcGVyIGZyb20gJy4vc3R5bGUnO1xuXG5jb25zdCBDb250YWluZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBmdWxsV2lkdGgsXG4gIG5vR3V0dGVyLFxuICBtb2JpbGVHdXR0ZXIsXG4gIHdpZHRoLFxufSkgPT4ge1xuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheVxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydjb250YWluZXInXTtcbiAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmdcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgIGZ1bGxXaWR0aD17ZnVsbFdpZHRofVxuICAgICAgbm9HdXR0ZXI9e25vR3V0dGVyfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgbW9iaWxlR3V0dGVyPXttb2JpbGVHdXR0ZXJ9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb250YWluZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZnVsbFdpZHRoICYmXG4gICAgY3NzYFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICBgfTtcbiAgJHsocHJvcHMpID0+XG4gICAgKHByb3BzLm5vR3V0dGVyICYmXG4gICAgICBjc3NgXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIGApIHx8XG4gICAgY3NzYFxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBgfTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBtYXgtd2lkdGg6IDk3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoIHx8ICcxMTcwcHgnfTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoIHx8ICcxMzAwcHgnfTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAkeyhwcm9wcykgPT5cbiAgICAgIHByb3BzLm1vYmlsZUd1dHRlciAmJlxuICAgICAgY3NzYFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICBgfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyV3JhcHBlcjtcbiIsIi8qKiB0aGlzIGlzIG91ciBCYXNlIENvbXBvbmVudCBldmVyeSBjb21wb25lbnRzIG11c3QgYmUgRXh0ZW5kIGl0ICovXG5pbXBvcnQge1xuICBzcGFjZSxcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbiAgbWF4V2lkdGgsXG4gIGhlaWdodCxcbiAgbWluSGVpZ2h0LFxuICBtYXhIZWlnaHQsXG4gIGRpc3BsYXksXG4gIGZvbnRTaXplLFxuICBmbGV4LFxuICBvcmRlcixcbiAgYWxpZ25TZWxmLFxuICBjb2xvcixcbiAgY29tcG9zZSxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZWQgPSAoa2V5KSA9PiAocHJvcHMpID0+IHByb3BzLnRoZW1lW2tleV07XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gY29tcG9zZShcbiAgKCkgPT4gKHsgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSksXG4gIHNwYWNlLFxuICB3aWR0aCxcbiAgbWluV2lkdGgsXG4gIG1heFdpZHRoLFxuICBoZWlnaHQsXG4gIG1pbkhlaWdodCxcbiAgbWF4SGVpZ2h0LFxuICBmb250U2l6ZSxcbiAgY29sb3IsXG4gIGZsZXgsXG4gIG9yZGVyLFxuICBhbGlnblNlbGYsXG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBkaXNwbGF5XG4pO1xuXG5iYXNlLnByb3BUeXBlcyA9IHtcbiAgLi4uZGlzcGxheS5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4uYm9yZGVycy5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlckNvbG9yLnByb3BUeXBlcyxcbiAgLi4ud2lkdGgucHJvcFR5cGVzLFxuICAuLi5oZWlnaHQucHJvcFR5cGVzLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZmxleC5wcm9wVHlwZXMsXG4gIC4uLm9yZGVyLnByb3BUeXBlcyxcbiAgLi4uYWxpZ25TZWxmLnByb3BUeXBlcyxcbn07XG4iLCJpbXBvcnQgeyB2YXJpYW50IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmNvbnN0IGJ1dHRvblN0eWxlID0gdmFyaWFudCh7XG4gIGtleTogJ2J1dHRvblN0eWxlcycsXG59KTtcblxuY29uc3QgY29sb3JTdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICdjb2xvclN0eWxlcycsXG4gIHByb3A6ICdjb2xvcnMnLFxufSk7XG5cbmNvbnN0IHNpemVTdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICdzaXplU3R5bGVzJyxcbiAgcHJvcDogJ3NpemUnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjYXJkcyA9IHZhcmlhbnQoeyBrZXk6ICdjYXJkcycgfSk7XG5cbmV4cG9ydCB7IGJ1dHRvblN0eWxlLCBjb2xvclN0eWxlLCBzaXplU3R5bGUgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1RPR0dMRSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNPcGVuOiAhc3RhdGUuaXNPcGVuLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5leHBvcnQgY29uc3QgRHJhd2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgY29uc3QgRHJhd2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0RyYXdlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgUFJJQ0UsIEJBU0VfUFJJQ0UsIFNBTVBMRV9SRVBPUlQgfSBmcm9tICdsaWIvY29uc3RhbnQnO1xuXG5cbmV4cG9ydCBjb25zdCBNZW51SXRlbXMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ1NhbXBsZSBSZXBvcnQnLFxuICAgIHBhdGg6IGAvcmVwb3J0LyR7U0FNUExFX1JFUE9SVH1gLFxuICAgIHN0YXRpY0xpbms6IHRydWUsXG4gICAgb2Zmc2V0OiAnNzAnLFxuICB9LFxuICAvLyAvLyB7XG4gIC8vICAgbGFiZWw6ICdIb3cgSXQgV29ya3MnLFxuICAvLyAgIHBhdGg6ICcjc2VydmljZXMnLFxuICAvLyAgIG9mZnNldDogJzcwJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGxhYmVsOiAnSG93IEl0IFdvcmtzJyxcbiAgLy8gICBwYXRoOiAnI2hvd2l0d29ya3MnLFxuICAvLyAgIG9mZnNldDogJzcwJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGxhYmVsOiAnUHJpY2luZycsXG4gIC8vICAgcGF0aDogJyNwcmljaW5nJyxcbiAgLy8gICBvZmZzZXQ6ICc3MCcsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBsYWJlbDogJ0xvZ2luJyxcbiAgLy8gICBwYXRoOiAnIycsXG4gIC8vICAgb2Zmc2V0OiAnNzAnLFxuICAvLyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdDbG91ZCBIb3N0aW5nJyxcbiAgICBwcmljZTogJyQwLjYzL21vJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnV2ViIEhvc3RpbmcnLFxuICAgIHByaWNlOiAnJDAuNzUvbW8nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdWUFMgSG9zdGluZycsXG4gICAgcHJpY2U6ICckMC42OC9tbycsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ1dvcmRQcmVzcyBIb3N0aW5nJyxcbiAgICBwcmljZTogJyQwLjcyL21vJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHRpdGxlOiAnRG9tYWlucycsXG4gICAgcHJpY2U6ICckMC43NS9tbycsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICB0aXRsZTogJ0VtYWlsIEhvc3RpbmcnLFxuICAgIHByaWNlOiAnJDAuNTYvbW8nLFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgdGl0bGU6ICdWUE4gU2VydmljZScsXG4gICAgcHJpY2U6ICckMC42OS9tbycsXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICB0aXRsZTogJ0ltYWdlIENsb3VkJyxcbiAgICBwcmljZTogJyQwLjc1L21vJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhY2NvcmRpb25zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgdGl0bGU6ICdTdGVwIDEuIEZpbmQgeW91ciBDYXInLFxuICAgIGRlc2M6XG4gICAgICAnU2VhcmNoIGJ5IHZlaGljbGUgaWRlbnRpZmljYXRpb24gbnVtYmVyIChWSU4pIG9yIFVTIGxpY2Vuc2UgcGxhdGUgdG8gZmluZCB0aGUgY2FyIHlvdSB3YW50IHRvIHJlc2VhcmNoLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgdGl0bGU6ICdTdGVwIDIuIFBpY2sgeW91ciBQbGFuJyxcbiAgICBkZXNjOlxuICAgICAgJ011bHRpcGxlIFJlcG9ydHMgaWYgeW91XFwncmUgc3RpbGwgc2hvcHBpbmcgYW5kIGNvbnNpZGVyaW5nIG1hbnkgdmVoaWNsZXMuIEEgc2luZ2xlIHJlcG9ydCBtaWdodCBiZSByaWdodCBmb3IgeW91IGlmIHlvdVxcJ3ZlIGZvdW5kIHlvdXIgZHJlYW0gY2FyIGFuZCBhcmUgcmVhZHkgdG8gYnV5LicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgdGl0bGU6IFwiU3RlcCAzLiBDaGVjayBWZWhpY2xlIEhpc3RvcnlcIixcbiAgICBkZXNjOlxuICAgICAgJ2Zyb20geW91ciBkZXNrdG9wLiBPbmUgdGltZSBmZWUuIE5vIHJlY3VycmluZyBjaGFyZ2VzLicsXG4gIH0sXG5dO1xuXG5pbXBvcnQgZmVhdHVyZUljb24xIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9mZWF0dXJlcy8xLnBuZyc7XG5pbXBvcnQgZmVhdHVyZUljb24yIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9mZWF0dXJlcy8yLnBuZyc7XG5pbXBvcnQgZmVhdHVyZUljb24zIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9mZWF0dXJlcy8zLnBuZyc7XG4vLyBpbXBvcnQgZmVhdHVyZUljb240IGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9mZWF0dXJlcy80LnBuZyc7XG4vLyBpbXBvcnQgZmVhdHVyZUljb241IGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9mZWF0dXJlcy81LnBuZyc7XG4vLyBpbXBvcnQgZmVhdHVyZUljb242IGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9mZWF0dXJlcy82LnBuZyc7XG5leHBvcnQgY29uc3QgZmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpY29uOiBmZWF0dXJlSWNvbjEsXG4gICAgdGl0bGU6ICdWZWhpY2xlIEhpc3RvcnkgUmVwb3J0JyxcbiAgICBkZXNjOlxuICAgICAgJ0FsbCBScmVwb3J0cyBwcm92aWRlIGEgY29tcGxldGUgb3ZlcnZpZXcgb2YgdmVoaWNsZSBjdXJyZW50IGNvbmRpdGlvbiBhbmQgcGFzdC4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaWNvbjogZmVhdHVyZUljb24yLFxuICAgIHRpdGxlOiAnQ29tcHJlaGVuc2l2ZSBhbmQgSW5mb3JtYXRpdmUnLFxuICAgIGRlc2M6XG4gICAgICAnVXNpbmcgdGhpcyBpbmZvcm1hdGlvbiB5b3Ugd2lsbCBiZSBhYmxlIHRvIGNvbmZpZGVudGx5IGV4cGxhaW4gdG8gYSBwb3RlbnRpYWwgYnV5ZXIgd2h5IHRoZSB2ZWhpY2xlIGlzIHdvcnRoIGl0cyBwcmljZSEnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbjogZmVhdHVyZUljb24zLFxuICAgIHRpdGxlOiAnU2VjdXJlIFRyYW5zYWN0aW9uJyxcbiAgICBkZXNjOlxuICAgICAgJ1NlbmRpbmcgbW9uZXkgb3IgYnV5aW5nIHdpdGggZGViaXQgYW5kIGNyZWRpdCBjYXJkcyBvbmxpbmUsIHRydXN0IFBheVBhbCB0byBoZWxwIGtlZXAgeW91ciB0cmFuc2FjdGlvbnMgc2VjdXJlLicsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogNCxcbiAgLy8gICBpY29uOiBmZWF0dXJlSWNvbjQsXG4gIC8vICAgdGl0bGU6ICdNdWx0aXBsZSBPcHRpb25zJyxcbiAgLy8gICBkZXNjOlxuICAvLyAgICAgJ0dldCB5b3VyIGluZm8gdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIHRhc2suJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGlkOiA1LFxuICAvLyAgIGljb246IGZlYXR1cmVJY29uNSxcbiAgLy8gICB0aXRsZTogJzUgU3RhciBSYXRpbmcgc2VydmljZScsXG4gIC8vICAgZGVzYzpcbiAgLy8gICAgICdPdXIgZ3JlYXRlc3QgYXNzZXQgaXMgdGhlIGN1c3RvbWVyIScsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogNixcbiAgLy8gICBpY29uOiBmZWF0dXJlSWNvbjYsXG4gIC8vICAgdGl0bGU6ICdJbnRlZ3JhdGVkIHdpdGggU2hvcGlmeScsXG4gIC8vICAgZGVzYzpcbiAgLy8gICAgICdHZXQgeW91ciBpbmZvIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciB0YXNrLicsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcHJpY2luZ0luZm8gPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ1ZlaGljbGUgSGlzdG9yeSBSZXBvcnQgKyBMaWVuIENoZWNrJyxcbiAgICBkZXNjOiAnVmVoaWNsZSBIaXN0b3J5IFJlcG9ydCcsXG4gICAgcHJpY2U6IFBSSUNFLFxuICAgIGJhc2VQcmljZTogQkFTRV9QUklDRSxcbiAgICBoZWFkZXI6ICdCZXN0IERlYWwnLFxuICAgIGJ1dHRvblRleHQ6ICdWSUVXIFNBTVBMRSBSRVBPUlQnLFxuICAgIGlzUmVjb21tZW5kZWQ6IHRydWUsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6XG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxuICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogMixcbiAgLy8gICB0aXRsZTogJ1ByZW1pdW0gUGFjaycsXG4gIC8vICAgZGVzYzogJ0NoZWNrIHRoZSBoaXN0b3J5IG9mIDMgdmVoaWNsZXMgZm9yIG9uZSBsb3cgcHJpY2UhJyxcbiAgLy8gICBwcmljZTogNDkuNTUsXG4gIC8vICAgYnV0dG9uVGV4dDogJ1N0YXJ0IEZyZWUgVHJpYWwnLFxuICAvLyAgIGlzUmVjb21tZW5kZWQ6IHRydWUsXG4gIC8vICAgaGVhZGVyOiAnQmVzdCBEZWFsJyxcbiAgLy8gICBmZWF0dXJlczogW1xuICAvLyAgICAge1xuICAvLyAgICAgICBpZDogMSxcbiAgLy8gICAgICAgbmFtZTogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcbiAgLy8gICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBpZDogMixcbiAgLy8gICAgICAgbmFtZTogJ0ZyZWUgYWNlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXG4gIC8vICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgaWQ6IDMsXG4gIC8vICAgICAgIG5hbWU6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcbiAgLy8gICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICBpZDogNCxcbiAgLy8gICAgICAgbmFtZTogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcbiAgLy8gICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gIC8vICAgICB9LFxuICAvLyAgIF0sXG4gIC8vIH1cbl07XG5cbmltcG9ydCBhdXRob3IxIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9hdXRob3IxLnBuZyc7XG5leHBvcnQgY29uc3QgdGVzdGltb25pYWxzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1hZ2U6IGF1dGhvcjEsXG4gICAgbmFtZTogJ01lbGluYSBQZXR0ZW5kb3JmZXInLFxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIG9mIFViZXInLFxuICAgIHF1b3RlOlxuICAgICAgXCJCZXN0IGhvc3QgSSd2ZSBoYWQgaW4gMTAgeWVhcnMuIFNtb290aCBtaWdyYXRpb24sIG5vIHN0cmVzcywgYW5kIGZyaWVuZGx5IHN1cHBvcnQgb25lIGNsaWNrIGF3YXkuIEknbSB2ZXJ5IGhhcHB5IGFuZCByZWNvbW1lbmQgdGhlaXIgc2VydmljZXNcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltYWdlOiBhdXRob3IxLFxuICAgIG5hbWU6ICdLZWxzaSBHb3Jkb24nLFxuICAgIGRlc2lnbmF0aW9uOiAnSW5zdXJhbmNlIEJyb2tlcicsXG4gICAgcXVvdGU6XG4gICAgICAnTXkgYnVzeSBzY2hlZHVsZSBsZWF2ZXMgbGl0dGxlLCBpZiBhbnksIHRpbWUgZm9yIGJsb2dnaW5nIGFuZCBzb2NpYWwgbWVkaWEuIFRoZSBMb3JlbSBJcHN1bSBDb21wYW55IGhhcyBiZWVuIGEgaHVnZSBwYXJ0IG9mIGhlbHBpbmcgbWUgZ3JvdyBteSBidXNpbmVzcycsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWFnZTogYXV0aG9yMSxcbiAgICBuYW1lOiAnVGFzaGEgWnV6YWxlaycsXG4gICAgZGVzaWduYXRpb246ICdGYWNlYm9vayBQcm9qZWN0IE1hbmFnZXInLFxuICAgIHF1b3RlOlxuICAgICAgXCJQcm9mZXNzaW9uYWwsIHJlc3BvbnNpdmUsIGFuZCBhYmxlIHRvIGtlZXAgdXAgd2l0aCBldmVyLWNoYW5naW5nIGRlbWFuZCBhbmQgdGlnaHQgZGVhZGxpbmVzOiBUaGF0J3MgaG93IEkgd291bGQgZGVzY3JpYmUgSmVyYW15IGFuZCBoaXMgdGVhbS5cIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmYXFzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdXaGljaCBkb21haW4gc2hvdWxkIEkgcHVyY2hhc2U/JyxcbiAgICBkZXNjOiBgV2UgbWFrZSBpdCBlYXN5IHRvIG1vdmUgdG8gQ29tZXROaW5lLiBTaW1wbHkgY29udGFjdCB1cyBhbmQgd2UnbGwgbW92ZSB5b3VyIGhvc3RpbmcgYWNjb3VudCBmcm9tIGFueSBvdGhlciBwcm92aWRlciwgcmVnYXJkbGVzcyBvZiB0aGUgY29udHJvbCBwYW5lbC4gSWYgYXQgYW55dGltZSB5b3VyIHdlYnNpdGUgaXMgZG93biBmb3IgbW9yZSB0aGFuIDAuMSUgcmVzdWx0YCxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnQ2FuIEkgdXBncmFkZSBvciBkb3duZ3JhZGUgbXkgd2ViIGhvc3RpbmcgcGxhbicsXG4gICAgZGVzYzogYFRoZSBwcmljaW5nIG1hZGUgbWUgYSBsaXR0bGUgaGVzaXRhbnQgYXQgZmlyc3QgYnV0IEkgaGF2ZSBiZWVuIHBsZWFzYW50bHkgc3VycHJpc2VkIGJ5IHRoZSBsZXZlbCBvZiBjYXJlIGdpdmVuIGJ5IENvbWV0TmluZS5gLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdXaGF0IGFyZSBzb21lIHRpcHMgd2hlbiBjaG9vc2luZyBhIG5hbWU/JyxcbiAgICBkZXNjOiBgR2V0IHlvdXIgd2Vic2l0ZSB0ZXN0cyBkZWxpdmVyZWQgYXQgdGhlIGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gbWFuYWdlbWVudCBuZXdzLmAsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICB0aXRsZTogJ0hvdyBkbyBJIHVwZ3JhZGUgdGhlIHN0b3JhZ2UgY2FwYWNpdHkgb2YgbXkgaG9zdGluZyBwbGFuPycsXG4gICAgZGVzYzogYFN0b3AgeW91ciB2aWV3ZXJzIGZyb20gZ2V0dGluZyBkaXN0cmFjdGVkLiBQdWJsaXNoIHZpZGVvcyB0byB5b3VyIG93biBDaGFubmVsIGFuZCByZXN0IGVhc3kga25vd2luZyB2aWV3ZXJzIHdvbuKAmXQgYmUgYW5ub3llZCBieSBhZHMgb3IgcHVsbGVkIGRvd24gYSByYWJiaXQgaG9sZSBvZiB1bnJlbGF0ZWQgdmlkZW9zLmAsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ1doYXQgaWYgSSBuZWVkIGhlbHAgY2hvb3NpbmcgdGhlIHJpZ2h0IGRvbWFpbj8nLFxuICAgIGRlc2M6IGBDcmVhdGUgYSBodWIgZm9yIGNyb3NzLWZ1bmN0aW9uYWwgd29yayB0aGF0IGFsc28gd29ya3Mgd2l0aCBhbGwgeW91ciBvdGhlciB0b29scy4gQ2VudHJhbGl6ZSBhbmQgc3RhbmRhcmRpemUgY29tbXVuaWNhdGlvbiB3aXRoIE1pcm8uIEFsbCBwcmVtaXVtIGZ1bmN0aW9uYWwgYXJlIGluY2x1ZGVkIGhlcmUgd2l0aCB1cGRhdGVzLmAsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICB0aXRsZTogJ1doYXQgaXMgaW4gSW5Nb3Rpb24gSG9zdGluZ+KAmXMgdXB0aW1lIHJhdGU/JyxcbiAgICBkZXNjOiBgRGVzaWduZWQgd2l0aCBiZWdpbm5lcnMgaW4gbWluZCBhbmQgcGFja2VkIHdpdGggYWR2YW5jZWQgZmVhdHVyZXMgZGV2ZWxvcGVycyB3aWxsIGxvdmUuIFN0YXJ0IHdpdGggYSBxdWljayBhbmQgc2ltcGxlIGluc3RhbGxgLFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgdGl0bGU6ICdMZWFybiBmcm9tIGNvbW11bml0eSBvbiBCcmFuZHdhZ29uJyxcbiAgICBkZXNjOiBgQnJpYW4gSGFsbGlnYW4ga25vd3MgdGhhdCB5b3UgbmVlZCBtb3JlIHRoYW4gYSBncmVhdCBwcm9kdWN0IHRvIGhhdmUgYSBncmVhdCBicmFuZC4gSGVhciBoaXMgdGhvdWdodHMgJiBzY29yZSBhIHBlZWsgYXQgb3VyIHdhZ29uLmAsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyID0ge1xuICBhYm91dFVzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogJ1N1cHBvcnQgQ2VudGVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdGl0bGU6ICdBYm91dCBVcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHRpdGxlOiAnQ29weXJpZ2h0JyxcbiAgICB9LFxuICBdLFxuICBvdXJJbmZvcm1hdGlvbjogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6ICdSZXR1cm4gUG9saWN5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6ICdQcml2YWN5IFBvbGljeScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHRpdGxlOiAnVGVybXMgJiBDb25kaXRpb25zJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdGl0bGU6ICdTaXRlIE1hcCcsXG4gICAgfSxcbiAgXSxcbiAgbXlBY2NvdW50OiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogJ1ByZXNzIGlucXVpcmllcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiAnU29jaWFsIG1lZGlhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdGl0bGU6ICdkaXJlY3RvcmllcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHRpdGxlOiAnSW1hZ2VzICYgQi1yb2xsJyxcbiAgICB9LFxuICBdXG59IiwiaW1wb3J0IHsgQ09MT1JfUFJJTUFSWSwgQ09MT1JfU0VDT05EQVJZLCBDT0xPUl9CQUNLR1JPVU5EX1BSSU1BUlkgfSBmcm9tIFwibGliL2NvbnN0YW50XCI7XG5jb25zdCBjb2xvcnMgPSB7XG4gIHRyYW5zcGFyZW50OiAndHJhbnNwYXJlbnQnLFxuICBibGFjazogJyMwMDAwMDAnLFxuICB3aGl0ZTogJyNmZmZmZmYnLFxuICB0ZXh0OiAnIzM0M0Q0OCcsXG4gIHRleHRQcmltYXJ5OiAnIzBGMjEzNycsXG4gIHByaW1hcnk6IENPTE9SX1BSSU1BUlksXG4gIHByaW1hcnlIb3ZlcjogQ09MT1JfUFJJTUFSWSxcbiAgYmFja2dyb3VuZEhvdmVyOiBDT0xPUl9CQUNLR1JPVU5EX1BSSU1BUlksXG4gIGJvcmRlcjogJyNkY2U1ZWEnLFxuICBzZWNvbmRhcnk6IENPTE9SX1NFQ09OREFSWSxcbiAgdGVydGlhcnk6IENPTE9SX1NFQ09OREFSWSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG9ycztcbiIsImltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gIGJyZWFrcG9pbnRzOiBbJzU3NnB4JywgJzc2OHB4JywgJzk5MXB4JywgJzEyMjBweCddLFxuICBzcGFjZTogWzAsIDUsIDgsIDEwLCAxNSwgMjAsIDI1LCAzMCwgMzMsIDM1LCA0MCwgNTAsIDYwLCA3MCwgODAsIDg1LCA5MCwgMTAwXSxcbiAgZm9udFNpemVzOiBbMTAsIDEyLCAxNCwgMTUsIDE2LCAxOCwgMjAsIDIyLCAyNCwgMzYsIDQ4LCA4MCwgOTZdLFxuICBmb250V2VpZ2h0czogWzEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDBdLFxuICBsaW5lSGVpZ2h0czoge1xuICAgIHNvbGlkOiAxLFxuICAgIHRpdGxlOiAxLjI1LFxuICAgIGNvcHk6IDEuNSxcbiAgfSxcbiAgbGV0dGVyU3BhY2luZ3M6IHtcbiAgICBub3JtYWw6ICdub3JtYWwnLFxuICAgIHRyYWNrZWQ6ICcwLjFlbScsXG4gICAgdGlnaHQ6ICctMC4wNWVtJyxcbiAgICBtZWdhOiAnMC4yNWVtJyxcbiAgfSxcbiAgYm9yZGVyczogW1xuICAgIDAsXG4gICAgJzFweCBzb2xpZCcsXG4gICAgJzJweCBzb2xpZCcsXG4gICAgJzNweCBzb2xpZCcsXG4gICAgJzRweCBzb2xpZCcsXG4gICAgJzVweCBzb2xpZCcsXG4gICAgJzZweCBzb2xpZCcsXG4gIF0sXG4gIHJhZGl1czogWzMsIDQsIDUsIDEwLCAyMCwgMzAsIDYwLCAxMjAsICc1MCUnXSxcbiAgd2lkdGhzOiBbMzYsIDQwLCA0NCwgNDgsIDU0LCA3MCwgODEsIDEyOCwgMjU2XSxcbiAgaGVpZ2h0czogWzM2LCA0MCwgNDQsIDQ2LCA0OCwgNTQsIDcwLCA4MSwgMTI4XSxcbiAgbWF4V2lkdGhzOiBbMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMiwgNzY4LCAxMDI0LCAxNTM2XSxcbiAgY29sb3JzLFxuICBjb2xvclN0eWxlczoge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMucHJpbWFyeSxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLnByaW1hcnksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy50cmFuc3BhcmVudCxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5wcmltYXJ5SG92ZXIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMucHJpbWFyeUhvdmVyLFxuICAgICAgICBib3hTaGFkb3c6IGNvbG9ycy5wcmltYXJ5Qm94U2hhZG93LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgY29sb3I6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLnNlY29uZGFyeSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnNlY29uZGFyeUhvdmVyLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnNlY29uZGFyeUhvdmVyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdhcm5pbmc6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMueWVsbG93LFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy55ZWxsb3csXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy55ZWxsb3dIb3ZlcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy55ZWxsb3dIb3ZlcixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgY29sb3I6IGNvbG9ycy5zZWNvbmRhcnlIb3ZlcixcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5SG92ZXIsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByaW1hcnlXaXRoQmc6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5wcmltYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5wcmltYXJ5LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnByaW1hcnlIb3ZlcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5wcmltYXJ5SG92ZXIsXG4gICAgICAgIGJveFNoYWRvdzogY29sb3JzLnByaW1hcnlCb3hTaGFkb3csXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5V2l0aEJnOiB7XG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5SG92ZXIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5SG92ZXIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgd2FybmluZ1dpdGhCZzoge1xuICAgICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnllbGxvdyxcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMueWVsbG93LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnllbGxvd0hvdmVyLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnllbGxvd0hvdmVyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVycm9yV2l0aEJnOiB7XG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuc2Vjb25kYXJ5SG92ZXIsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLnNlY29uZGFyeUhvdmVyLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnNlY29uZGFyeSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICB9LFxuICAgIH0sXG4gICAgdHJhbnNwYXJlbnRCZzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvblN0eWxlczoge1xuICAgIHRleHRCdXR0b246IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGNvbG9yOiBjb2xvcnMucHJpbWFyeSxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnRyYW5zcGFyZW50LFxuICAgIH0sXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIGJvcmRlcldpZHRoOiAnMXB4JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMudHJhbnNwYXJlbnQsXG4gICAgfSxcbiAgICBmYWI6IHtcbiAgICAgIGJvcmRlcjogJzAnLFxuICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAnc3Bhbi5idG4taWNvbic6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZXh0ZW5kZWRGYWI6IHtcbiAgICAgIGJvcmRlcjogJzAnLFxuICAgICAgbWluV2lkdGg6ICc1MHB4JyxcbiAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTBweCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgfSxcbiAgLy8gRmxleEJveDoge1xuICAvLyAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJ1xuICAvLyB9XG59O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5pbXBvcnQgaWxsdXN0cmF0aW9uIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9pbGx1c3RyYXRpb24yLnBuZyc7XG5cbmNvbnN0IFNlY3Rpb25XcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogLTExMHB4O1xuICB6LWluZGV4OiAxMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnknKX0gdXJsKCR7aWxsdXN0cmF0aW9ufSkgbm8tcmVwZWF0IDY2JSBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDQwcHggNzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMzBweCA0NXB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgbWF4LXdpZHRoOiA1MiU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMxODM2NTY7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25XcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21tb24vY29tcG9uZW50cy9VSS9Db250YWluZXJUd28nO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvSGVhZGluZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICdjb21tb24vY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBpbGx1c3RyYXRpb24gZnJvbSAnY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2lsbHVzdHJhdGlvbjMucG5nJztcbmltcG9ydCBpbGx1c3RyYXRpb24yIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9pbGx1c3RyYXRpb240LnBuZyc7XG5pbXBvcnQgU2VjdGlvbldyYXBwZXIsIHsgQ29udGVudCwgQnV0dG9uV3JhcCB9IGZyb20gJy4vY2FsbFRvQWN0aW9uLnN0eWxlJztcbmltcG9ydCB7IEVNQUlMIH0gZnJvbSAnbGliL2NvbnN0YW50JztcblxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uV3JhcHBlcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxDb250ZW50PlxuICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICBhcz1cImgzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb3N0IHlvdXIgb3JkZXI/XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxCdXR0b25XcmFwPlxuICAgICAgICAgICAgPGltZyBzcmM9e2lsbHVzdHJhdGlvbn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BtYWlsdG86JHtFTUFJTH1gfT48QnV0dG9uIHRpdGxlPVwiQ09OVEFDVCBVUyBOT1dcIiAvPjwvTGluaz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbGx1c3RyYXRpb24yfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvQnV0dG9uV3JhcD5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWN0aW9uV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0JztcbmltcG9ydCB7IGFuZHJvaWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2lvbmljb25zL2FuZHJvaWRNZW51JztcbmltcG9ydCB7IGFuZHJvaWRDbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9pb25pY29ucy9hbmRyb2lkQ2xvc2UnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21tb24vY29tcG9uZW50cy9VSS9Db250YWluZXJUd28nO1xuaW1wb3J0IFNjcm9sbFNweU1lbnUgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvU2Nyb2xsU3B5TWVudSc7XG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSc7XG5pbXBvcnQgQW5jaG9yTGluayBmcm9tICdyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21tb24vY29tcG9uZW50cy9JbWFnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBOQU1FIH0gZnJvbSAnbGliL2NvbnN0YW50JztcbmltcG9ydCB7IE1lbnVJdGVtcyB9IGZyb20gJ2NvbW1vbi9kYXRhL0hvc3RpbmdNb2Rlcm4nO1xuaW1wb3J0IGxvZ28gZnJvbSAnY29tbW9uL2Fzc2V0cy9pbWFnZS9ob3N0aW5nTW9kZXJuL2xvZ28ucG5nJztcbmltcG9ydCBIZWFkZXJXcmFwcGVyLCB7XG4gIEhlYWRlcklubmVyLFxuICBMb2dvLFxuICBQcmltYXJ5TmF2LFxuICBNb2JpbGVOYXYsXG59IGZyb20gJy4vbmF2YmFyLnN0eWxlJztcblxuY29uc3QgTmF2YmFyID0gIFJlYWN0LmZvcndhcmRSZWYoKHsgaXNQcmludCA9IGZhbHNlLCBvblByaW50IH0sIHJlZikgPT4ge1xuICBjb25zdCBbbW9iaWxlTWVudSwgc2V0TW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVNZW51KCFtb2JpbGVNZW51KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVIYW5kbGVNZW51Q2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0TW9iaWxlTWVudShmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyV3JhcHBlcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXJJbm5lcj5cbiAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD17TkFNRX0gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xvZ28+XG4gICAgICAgICAgPFByaW1hcnlOYXY+XG4gICAgICAgICAgIDxTY3JvbGxTcHlNZW51XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnlOYXZcIlxuICAgICAgICAgICAgICBtZW51SXRlbXM9e01lbnVJdGVtc31cbiAgICAgICAgICAgICAgLy8gb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2lzUHJpbnQgJiZcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJqb2luQnV0dG9uXCIgb25DbGljaz17KCkgPT4gb25QcmludCgpfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJFeHBvcnQgVG8gUERGXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1ByaW1hcnlOYXY+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudWJhclwiXG4gICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgbW9iaWxlTWVudSA/IChcbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMDIwNzNFJyB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFyXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezMyfVxuICAgICAgICAgICAgICAgICAgaWNvbj17YW5kcm9pZENsb3NlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEZhZGU+XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyMwMjA3M0UnIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17YW5kcm9pZE1lbnV9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezMyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yPVwiIzBGMjEzN1wiXG4gICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZGVySW5uZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgPE1vYmlsZU5hdiBjbGFzc05hbWU9e21vYmlsZU1lbnUgPyAnaXMtYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgeyFpc1ByaW50ICYmIE1lbnVJdGVtcy5tYXAoKG1lbnUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17YG1lbnVfa2V5JHtpbmRleH1gfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e21lbnUucGF0aH1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSGFuZGxlTWVudUNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bWVudS5sYWJlbH1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgey8qIHtpc1ByaW50ICYmXG4gICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImpvaW5CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBvblByaW50KCl9PlxuICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiRXhwb3J0IFRvIFBERlwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICB9ICovfVxuICAgICAgPC9Nb2JpbGVOYXY+XG4gICAgPC9IZWFkZXJXcmFwcGVyPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBAbWVkaWEgcHJpbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLm1lbnViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiAxMzY2cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeU5hdiA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJpbWFyeU5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaSB7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy50ZXh0UHJpbWFyeScsICcjMDIwNzNFJyl9O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIH1cbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgIC8vICY6bGFzdC1jaGlsZCB7XG4gICAgICAvLyAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgLy8gfVxuICAgIH1cbiAgICAuaXMtY3VycmVudCBhIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5Jyl9O1xuICAgIH1cbiAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLmpvaW5CdXR0b24ge1xuICAgIEBtZWRpYSBwcmludCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJ1dHRvbiB7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtaGVpZ2h0OiAxMzY2cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTW9iaWxlTmF2ID0gc3R5bGVkLm5hdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDAgMTBweCAxM3B4IDBweDtcbiAgdG9wOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgMHM7XG4gICYuaXMtYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgLm1vYmlsZU5hdiB7XG4gICAgQG1lZGlhIHByaW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGxpIHtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnRleHRQcmltYXJ5JywgJyMwMjA3M0UnKX07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMDtcbiAgICAgIH1cbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgICAuaXMtY3VycmVudCBhIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuc2Vjb25kYXJ5Jyl9O1xuICAgIH1cbiAgfVxuICAuam9pbkJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyV3JhcHBlcjtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2LCBidXR0b24sIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5yZXVzZU1vZGFsSG9sZGVyLnNhbXBsZS1tb2RhbHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHRvcDogMCFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiAwIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAucmV1c2VNb2RhbEhvbGRlci5zYW1wbGUtbW9kYWwgLmlubmVyUm5kQ29tcG9uZW50e1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC5zdGlja3ktbmF2LWFjdGl2ZSBoZWFkZXIge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDBweCAyMHB4O1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkaW5nIGZyb20gJ2NvbW1vbi9jb21wb25lbnRzL0hlYWRpbmcnO1xuaW1wb3J0IFRleHQgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvVGV4dCc7XG5pbXBvcnQgUmVwb3J0V3JhcHBlciBmcm9tICcuL3JlcG9ydE5vdEZvdW5kLnN0eWxlcyc7XG5pbXBvcnQgaWxsdXN0cmF0aW9uIGZyb20gJ2NvbW1vbi9hc3NldHMvaW1hZ2UvaG9zdGluZ01vZGVybi9jYXItcmVwb3J0LnBuZyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tbW9uL2NvbXBvbmVudHMvSW1hZ2UnO1xuXG5jb25zdCBSZXBvcnRTZWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZXBvcnRXcmFwcGVyPlxuICAgICAgPEltYWdlIHNyYz17aWxsdXN0cmF0aW9ufSBhbHQ9XCJJbGx1c3RyYXRpb25cIiAvPlxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiID5QbGVhc2Ugd2FpdCA1IHRvIDEwIG1pbnV0ZXMgeW91ciByZXBvcnQgaXMgYmVpbmcgZ2VuZXJhdGVkLjwvSGVhZGluZz5cbiAgICAgIDxUZXh0IGNvbnRlbnQ9XCJSZWZyZXNoIHRoZSBwYWdlIGluIGEgY291cGxlIG9mIG1pbnV0ZXMuXCIgLz5cbiAgICAgIDxUZXh0IGNvbnRlbnQ9XCJQbGVhc2UgZG91YmxlLWNoZWNrIHRoYXQgeW91IGVudGVyZWQgdGhlIGNvcnJlY3QgZW1haWwgYWRkcmVzcyBvbiB0aGUgd2Vic2l0ZS5cIiAvPlxuICAgICAgPFRleHQgY29udGVudD1cIllvdSBjYW4gY2hlY2sgeW91ciBlbWFpbCBmb3IgdGhlIGNhcmZheCByZXBvcnQuXCIgLz5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDVcIiA+SWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciBwcm9ibGVtcywgcGxlYXNlIGNvbnRhY3QgbGl2ZSBzdXBwb3J0IGF0IHRoZSBib3R0b20gcmlnaHQgb2YgdGhlIHNjcmVlbi48L0hlYWRpbmc+XG4gICAgPC9SZXBvcnRXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0U2VjdGlvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBSZXBvcnRXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDEwMHB4O1xuICBpbWcge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbjogMTBweCA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgeyBiYXNlNjRkZWNvZGUgfSA9IHJlcXVpcmUoJ25vZGVqcy1iYXNlNjQnKTtcbmltcG9ydCBSZXBvcnRXcmFwcGVyLCB7XG4gIFJlcG9ydCxcbiAgTG9hZGVyXG59IGZyb20gJy4vcmVwb3J0U2VjdGlvbi5zdHlsZXMnO1xuaW1wb3J0IHsgVVJMV0VCIH0gZnJvbSAnbGliL2NvbnN0YW50JztcbmZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyaW5nLCBzZWFyY2gsIHJlcGxhY2UpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdChzZWFyY2gpLmpvaW4ocmVwbGFjZSk7XG59XG5cbmNvbnN0IFJlcG9ydFNlY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRhdGEuY29udGVudDtcbiAgbGV0IGZpbHRlcmVkID0gY29udGVudCAmJiBiYXNlNjRkZWNvZGUoY29udGVudCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcbiAgICBjb25zdCBrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW50TW9kYWwnKVxuICAgIGlmIChnKSBnLnJlbW92ZSgpO1xuICAgIGlmIChrKSBrLnJlbW92ZSgpO1xuICB9LCBbZmlsdGVyZWRdKTtcbiAgZmlsdGVyZWQgPSByZXBsYWNlQWxsKFxuICAgIGZpbHRlcmVkLFxuICAgICc8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIG5hbWU9XCJ2aWV3cG9ydFwiLz4nLCBcbiAgICAnJ1xuICApXG4gIGZpbHRlcmVkID0gcmVwbGFjZUFsbChcbiAgICBmaWx0ZXJlZCxcbiAgICAnPVwiaHR0cHM6Ly9hcGkuY2FyZmF4LnByby93cC1jb250ZW50L3RoZW1lcy9hcGljYXJmYXhwcm8vY2FyZmF4L2Nhci1mYXgtZmlsZXMvY3NzLycsXG4gICAgYD1cIiR7VVJMV0VCfWNhcmZheC9jc3MvdmhyL2BcbiAgKTtcbiAgZmlsdGVyZWQgPSByZXBsYWNlQWxsKFxuICAgIGZpbHRlcmVkLFxuICAgICc9XCJodHRwczovL2FwaS5jYXJmYXgucHJvL3dwLWNvbnRlbnQvdGhlbWVzL2FwaWNhcmZheHByby9jYXJmYXgvY2FyLWZheC1maWxlcy9qcy8nLFxuICAgIGA9XCIke1VSTFdFQn1jYXJmYXgvanMvdmhyL2BcbiAgKTtcbiAgZmlsdGVyZWQgPSByZXBsYWNlQWxsKFxuICAgIGZpbHRlcmVkLFxuICAgICdzcmM9XCJodHRwczovL2FwaS5jYXJmYXgucHJvL3dwLWNvbnRlbnQvdGhlbWVzL2FwaWNhcmZheHByby9jYXJmYXgvY2FyLWZheC1maWxlcy9pbWcvJywgXG4gICAgYHNyYz1cIiR7VVJMV0VCfWNhcmZheC9pbWcvdmhyL2BcbiAgKTtcbiAgZmlsdGVyZWQgPSByZXBsYWNlQWxsKFxuICAgIGZpbHRlcmVkLFxuICAgICdpY29uLURvd24tbWVkJywgXG4gICAgJ2ljb24tZG93bi1tZWQnXG4gICk7XG4gIGZpbHRlcmVkID0gcmVwbGFjZUFsbChcbiAgICBmaWx0ZXJlZCxcbiAgICAnaWNvbi1VcC1tZWQnLCBcbiAgICAnaWNvbi11cC1tZWQnXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVwb3J0V3JhcHBlcj5cbiAgICAgIDxSZXBvcnQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBmaWx0ZXJlZCB9fSAvPlxuICAgIDwvUmVwb3J0V3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFNlY3Rpb247XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgUmVwb3J0V3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICBcbmA7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnQgPSBzdHlsZWQuZGl2YFxuICBcbmA7XG5cbmV4cG9ydCBjb25zdCBMb2FkZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDE2cHggc29saWQgJHt0aGVtZUdldCgnY29sb3JzLmJhY2tncm91bmRIb3ZlcicpfTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5Jyl9O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRXcmFwcGVyO1xuIiwiZXhwb3J0IGNvbnN0IFBBWVBBTF9DTElFTlRJRCA9ICdBVkw4Tjg5bV9HcjFJUGR0bFNBbG81SllKQ2ZiYmw2dWtrSEtCME1la2hzYVNfYmN2MzE0Ry0ycnI3ckpUU2N3WlR5VjROamtQWFZ5WmhUUic7XG5leHBvcnQgY29uc3QgQVBJVVJMID0gJy9hcGkvJztcbmV4cG9ydCBjb25zdCBVUkxXRUIgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XG5cbi8vIFBST0pFQ1QgTkFNSU5HXG5leHBvcnQgY29uc3QgTkFNRSA9ICdWZWhpY2xlIFBhcGVyIFByZW1pdW0nO1xuXG4vLyBQUklDSU5HXG5leHBvcnQgY29uc3QgQkFTRV9QUklDRSA9ICczOS45OSc7XG5cbmV4cG9ydCBjb25zdCBQUklDRSA9IDA7XG5cbi8vIEVNQUlMXG5leHBvcnQgY29uc3QgRU1BSUwgPSAndmVoaWNsZXBhcGVycHJlbWl1bUBnbWFpbC5jb20nO1xuXG4vLyBNT1RUT1xuZXhwb3J0IGNvbnN0IE1PVFRPID0gJ09yaWdpbmFsIGFuZCBBY3R1YWwgQ2FyZmF4IFZlaGljbGUgSGlzdG9yeSBSZXBvcnRzJztcblxuLy8gQ09MT1JcbmV4cG9ydCBjb25zdCBDT0xPUl9QUklNQVJZID0gJyMxOTc2ZDInO1xuZXhwb3J0IGNvbnN0IENPTE9SX1NFQ09OREFSWSA9ICcjMjA4QkQzJztcbmV4cG9ydCBjb25zdCBDT0xPUl9CQUNLR1JPVU5EX1BSSU1BUlkgPSAnI2Y1ZjZmNyc7XG5cbi8vIFNBTVBMRSBSRVBPUlRcbmV4cG9ydCBjb25zdCBTQU1QTEVfUkVQT1JUID0gJ0tNSEhUNktEWERVMDk3NjM1JztcblxuLy8gQ1JJU1AgSURcbmV4cG9ydCBjb25zdCBDUklTUElEID0gJzQxMWI2OGQ5LWQ4N2QtNGYyZi04ZGUwLTdkMDY3OGQ1ZDAzNSc7XG5cbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9EQVRBQkFTRV9VUkwgPSAnaHR0cHM6Ly92ZWhpY2xlcGFwZXJwcmVtaXVtLWEyYmMzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS8nXG5leHBvcnQgY29uc3QgQk9UX1RPS0VOID0gJzIxMjU1Mzc5MDE6QUFFSUhFaDNKdkkxdk5NNW9mai11UXNFSDEzRllVY0Jjek0nXG4vLyBleHBvcnQgY29uc3QgUEFTU1dPUkQgPSAnbWFrYW5rZXJ1cHVrJ1xuZXhwb3J0IGNvbnN0IENMSUVOVF9JRF9HT09HTEUgPSAnMjQxMDc5MzUzMzgzLWQ0YzFlNHFhZHRhaThqYjVvaWI4YXI1cWpubDBwZThsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TRUNSRVRfR09PR0xFID0gJ0dPQ1NQWC1CTUxzcFIzYWdZUEFWczZHZ0Fxa05uUWNZRDJ1J1xuZXhwb3J0IGNvbnN0IFJFRlJFU0hfVE9LRU5fR09PR0xFID0gJzEvLzA0NjllNmJqMkdXckxDZ1lJQVJBQUdBUVNOd0YtTDlJckV5dVowenU1Vlo1Yl94enFsdTZybGtPTGZ1b1JLeExBMURzSEtaOTZSSEJPa1ZLWFZFRDZRY0NlYzFQVXVDR2Mwc1knXG5leHBvcnQgY29uc3QgVE9LRU5fR09PR0xFID0gJ3lhMjkuYTBBVnZaVnNwd2FpUkRyR1BhMjM5OHRwSFpzc2g0WVBkWTA3TWZHZmFLNEhzaldoRFZDOWV3ajFPZVdCUDJEaWFoLVQ3NS05QkJkWktTejhXclp6VndNdi1QUkJHMVJWdTJvUkZVTDZNZDZzUlpjanhGWWFqR2xCWV9hcDlMQjFmRzZSOW92eFNzMnpBTXc1UUhCTkpJUE5oaUozMm9hQ2dZS0Fka1NBUkVTRlFHYmR3YUlnTnNoWHF2b2RwcWQxSGhaa0lKeGxnMDE2MydcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BUElfS0VZID0gJ0FJemFTeUNwY2g5dTUxWnB5dWlGMnBxNk9lZEQyc0JJSXMwSkM5USdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BVVRIX0RPTUFJTiA9ICd2ZWhpY2xlcGFwZXJwcmVtaXVtLWEyYmMzLmZpcmViYXNlYXBwLmNvbSdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9QUk9KRUNUX0lEID0gJ3ZlaGljbGVwYXBlcnByZW1pdW0tYTJiYzMnXG5leHBvcnQgY29uc3QgRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQgPSAndmVoaWNsZXBhcGVycHJlbWl1bS1hMmJjMy5hcHBzcG90LmNvbSdcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEID0gJzYzNzI4Mjg1MjUwNidcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BUFBfSUQgPSAnMTo2MzcyODI4NTI1MDY6d2ViOjk5MzU5MmE2YjNkZjhmZjVlZTg5MjMnXG5leHBvcnQgY29uc3QgRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQgPSAnRy1LNVozUE5DS0dQJ1xuZXhwb3J0IGNvbnN0IE5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MgPSAnRy1LNVozUE5DS0dQJ1xuZXhwb3J0IGNvbnN0IEFQSV9LRVlfQ0FSRkFYX1BSTyA9ICdjYjM1M2QzNDFhZWM1MzdjNDhhMjc0OTIzZjY5ZGQ3MidcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ2NvbW1vbi90aGVtZS9ob3N0aW5nTW9kZXJuJztcbmltcG9ydCB7XG4gIEdsb2JhbFN0eWxlLFxuICBDb250ZW50V3JhcHBlcixcbn0gZnJvbSAnY29udGFpbmVycy9Ib3N0aW5nTW9kZXJuL2hvc3RpbmdNb2Rlcm4uc3R5bGUnO1xuaW1wb3J0IHsgUmVzZXRDU1MgfSBmcm9tICdjb21tb24vYXNzZXRzL2Nzcy9zdHlsZSc7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJ2NvbW1vbi9jb250ZXh0cy9EcmF3ZXJDb250ZXh0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnY29udGFpbmVycy9Ib3N0aW5nTW9kZXJuL05hdmJhcic7XG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJ2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9Gb290ZXInO1xuaW1wb3J0IFJlcG9ydCBmcm9tICdjb250YWluZXJzL1JlcG9ydC9SZXBvcnRTZWN0aW9uJztcbmltcG9ydCB7IFVSTFdFQiB9IGZyb20gJ2xpYi9jb25zdGFudCc7XG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJ2NvbnRhaW5lcnMvSG9zdGluZ01vZGVybi9DYWxsVG9BY3Rpb24nO1xuaW1wb3J0IFJlcG9ydE5vdEZvdW5kIGZyb20gJ2NvbnRhaW5lcnMvUmVwb3J0L1JlcG9ydE5vdEZvdW5kJztcbmltcG9ydCB7IE5BTUUsIENPTE9SX1BSSU1BUlksIENSSVNQSUQgfSBmcm9tICdsaWIvY29uc3RhbnQnO1xuXG5jb25zdCBSZXBvcnRWSU4gPSAoeyBkYXRhLCB2aW4gfSkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy4kY3Jpc3AgPSBbXTtcbiAgICB3aW5kb3cuQ1JJU1BfV0VCU0lURV9JRCA9IENSSVNQSUQ7XG4gICAgKCgpID0+IHtcbiAgICAgIGNvbnN0IGQgPSBkb2N1bWVudDtcbiAgICAgIGNvbnN0IHMgPSBkLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICBzLnNyYyA9IFwiaHR0cHM6Ly9jbGllbnQuY3Jpc3AuY2hhdC9sLmpzXCI7XG4gICAgICBzLmFzeW5jID0gMTtcbiAgICAgIGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKHMpO1xuICAgIH0pKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2RhdGEuc3VjY2VzcyA/IHZpbiA6IGAke05BTUV9IC0gUmVwb3J0YCB9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cIk9yaWdpbmFsIGFuZCBBY3R1YWwgQ2FyZmF4XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17Q09MT1JfUFJJTUFSWX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIlwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CcmVlK1NlcmlmfERNK1NhbnM6NDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGkmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFJlc2V0Q1NTIC8+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cblxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICA8U3RpY2t5IHRvcD17MH0gaW5uZXJaPXs5OTk5fSBhY3RpdmVDbGFzcz1cInN0aWNreS1uYXYtYWN0aXZlXCI+XG4gICAgICAgICAgPERyYXdlclByb3ZpZGVyPlxuICAgICAgICAgICAgPE5hdmJhciBpc1ByaW50PXtkYXRhLnN1Y2Nlc3N9IG9uUHJpbnQ9eygpID0+IHdpbmRvdy5wcmludCgpfS8+XG4gICAgICAgICAgPC9EcmF3ZXJQcm92aWRlcj5cbiAgICAgICAgPC9TdGlja3k+XG4gICAgICAgIHtkYXRhLnN1Y2Nlc3MgJiYgPFJlcG9ydCBkYXRhPXtkYXRhfSB2aW49e3Zpbn0gLz59XG4gICAgICAgIHshZGF0YS5zdWNjZXNzICYmIFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UmVwb3J0Tm90Rm91bmQgLz5cbiAgICAgICAgICAgIDxDYWxsVG9BY3Rpb24gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICB7LyogPEZvb3RlciAvPiAqL31cbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgdmluIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkxXRUJ9YXBpL3JlcG9ydC8ke3Zpbn1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyBwcm9wczogeyBkYXRhLCB2aW4gfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFZJTjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZWpzLWJhc2U2NFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdC9pb25pY29ucy9hbmRyb2lkQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L2lvbmljb25zL2FuZHJvaWRNZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJldmVhbC9GYWRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbHNweVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtc3lzdGVtXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=