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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/assets/pwa-page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./templates/assets/api.js":
/*!*********************************!*\
  !*** ./templates/assets/api.js ***!
  \*********************************/
/*! exports provided: fetchSessions, fetchTracks, fetchPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSessions", function() { return fetchSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTracks", function() { return fetchTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


var apiRoot = 'https://2019.europe.wordcamp.org/wp-json/'; // @TODO: Remove development conditions and use of fetch during merge to core.

var isDevelopment = !"development" || "development" === 'development';

function fetchData(path) {
  if (isDevelopment) {
    return fetch("".concat(apiRoot).concat(path)).then(function (response) {
      return response.json();
    });
  }

  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: path
  });
}

function fetchSessions() {
  return fetchData(Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])("wp/v2/sessions", {
    per_page: 100,
    status: 'publish',
    _embed: true
  }));
}
function fetchTracks() {
  return fetchData(Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])("wp/v2/session_track", {
    per_page: 100,
    status: 'publish'
  }));
}
function fetchPosts() {
  return fetchData(Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])("wp/v2/posts", {
    per_page: 3,
    status: 'publish',
    _embed: true
  }));
}

/***/ }),

/***/ "./templates/assets/components/page.js":
/*!*********************************************!*\
  !*** ./templates/assets/components/page.js ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api */ "./templates/assets/api.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts */ "./templates/assets/components/posts.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schedule */ "./templates/assets/components/schedule.js");









/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Update every x seconds.
 *
 * @type {number}
 */

var UPDATE_INTERVAL = 60 * 1000; // Convert to milliseconds.

var entityLists = {
  sessionList: _api__WEBPACK_IMPORTED_MODULE_9__["fetchSessions"],
  trackList: _api__WEBPACK_IMPORTED_MODULE_9__["fetchTracks"],
  postList: _api__WEBPACK_IMPORTED_MODULE_9__["fetchPosts"]
};
var DEFAULT_CONFIG = {
  urls: {}
};
var Page =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Page, _Component);

  function Page(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Page);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Page).call(this, props));
    var config = window.WCPWAP || {};
    _this.updateIntervalId = -1;
    _this.state = {
      config: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, DEFAULT_CONFIG, config)
    };

    for (var _i = 0, _Object$keys = Object.keys(entityLists); _i < _Object$keys.length; _i++) {
      var listName = _Object$keys[_i];
      _this.state[listName] = {
        isFetching: true,
        error: null,
        data: []
      };
    }

    return _this;
  }
  /**
   * Loop over the entityLists we defined earlier and set their initial state.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Page, [{
    key: "updateLists",
    value: function updateLists() {
      var _this2 = this;

      var entityFetcher;

      var _loop = function _loop() {
        var listName = _Object$keys2[_i2];
        entityFetcher = entityLists[listName];

        _this2.setState(function (state) {
          return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, listName, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state[listName], {
            isFetching: true
          }));
        });

        entityFetcher().then(function (data) {
          _this2.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, listName, {
            isFetching: false,
            data: data
          }));
        }).catch(function (error) {
          return _this2.setState(function (state) {
            return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, listName, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state[listName], {
              isFetching: false,
              error: error
            })));
          });
        });
      };

      for (var _i2 = 0, _Object$keys2 = Object.keys(entityLists); _i2 < _Object$keys2.length; _i2++) {
        _loop();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.updateLists();
      this.updateIntervalId = window.setInterval(function () {
        _this3.updateLists();
      }, UPDATE_INTERVAL);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.updateIntervalId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          postList = _this$state.postList,
          sessionList = _this$state.sessionList,
          trackList = _this$state.trackList,
          config = _this$state.config;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "pwa-page-content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_schedule__WEBPACK_IMPORTED_MODULE_11__["Schedule"], {
        sessionList: sessionList,
        trackList: trackList
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("a", {
        href: config.urls.schedule,
        className: "full-schedule"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["_x"])('View Full Schedule', 'text', 'wordcamp-pwa-page'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "pwa-page-content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["_x"])('Latest Posts', 'title', 'wordcamp-pwa-page')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_posts__WEBPACK_IMPORTED_MODULE_10__["LatestPosts"], {
        list: postList
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("a", {
        href: config.urls.posts,
        className: "all-posts"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["_x"])('View all Posts', 'title', 'wordcamp-pwa-page'))));
    }
  }]);

  return Page;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ }),

/***/ "./templates/assets/components/post.js":
/*!*********************************************!*\
  !*** ./templates/assets/components/post.js ***!
  \*********************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/sanitize */ "@wordpress/sanitize");
/* harmony import */ var _wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var Post = function Post(_ref) {
  var post = _ref.post;
  var date = post.date_gmt,
      link = post.link,
      title = post.title.rendered,
      excerpt = post.excerpt.rendered,
      embeddedTerms = post._embedded['wp:term'],
      categories = post.categories;
  var terms = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["keyBy"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(embeddedTerms), 'id');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wordcamp-latest-post"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    className: "wordcamp-latest-post-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: link
  }, Object(_wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__["stripTagsAndEncodeText"])(title))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-latest-post-date"
  }, new Date(date).toLocaleDateString()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-latest-post-excerpt"
  }, Object(_wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__["stripTagsAndEncodeText"])(excerpt)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-latest-post-categories"
  }, !!categories.length && categories.map(function (c, index) {
    var term = terms[c];
    var name = term.name,
        categoryLink = term.link;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      key: index,
      href: categoryLink
    }, name);
  })));
};

/***/ }),

/***/ "./templates/assets/components/posts.js":
/*!**********************************************!*\
  !*** ./templates/assets/components/posts.js ***!
  \**********************************************/
/*! exports provided: LatestPosts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestPosts", function() { return LatestPosts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./templates/assets/components/post.js");
/* harmony import */ var _ui_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/loading */ "./templates/assets/components/ui/loading.js");


/**
 * Internal dependencies
 */


var LatestPosts = function LatestPosts(_ref) {
  var list = _ref.list;
  var isFetching = list.isFetching,
      data = list.data;

  if (isFetching && data.length === 0) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ui_loading__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicator"], null);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, data.filter(function (post) {
    return !!post;
  }).map(function (post) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post__WEBPACK_IMPORTED_MODULE_1__["Post"], {
      key: post.id,
      post: post
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (LatestPosts);

/***/ }),

/***/ "./templates/assets/components/schedule.js":
/*!*************************************************!*\
  !*** ./templates/assets/components/schedule.js ***!
  \*************************************************/
/*! exports provided: Schedule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/loading */ "./templates/assets/components/ui/loading.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sessions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions */ "./templates/assets/components/sessions.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * External dependencies
 */



/**
 * @param {{tracks: [], sessions: []}} data an object with tracks and sessions
 * @returns {{next: *, now: *, track: T}[]} an array with schedule data
 */

var getScheduleData = function getScheduleData(data) {
  var now = window.now || new Date();

  if (!Array.isArray(data.tracks)) {
    return;
  } //end if


  var scheduleData = data.tracks.map(function (track) {
    var sessionsInTrack = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"])(data.sessions.filter(function (session) {
      return session.session_track.includes(track.id);
    }), function (sessionInTrack) {
      return sessionInTrack.meta._wcpt_session_time;
    });
    var indexOfNextSession = sessionsInTrack.findIndex(function (session) {
      return now < new Date(session.meta._wcpt_session_time * 1000);
    });
    var nextSession = sessionsInTrack[indexOfNextSession];
    var nowSession = sessionsInTrack[indexOfNextSession - 1];
    return {
      track: track,
      now: nowSession,
      next: nextSession
    };
  });
  return scheduleData;
};

var Schedule = function Schedule(_ref) {
  var sessionList = _ref.sessionList,
      trackList = _ref.trackList;

  if ((sessionList.isFetching || trackList.isFetching) && sessionList.data.length === 0) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ui_loading__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicator"], null);
  }

  var tracks = getScheduleData({
    sessions: sessionList.data,
    tracks: trackList.data
  });
  var onNowSessions = tracks.map(function (track) {
    return {
      track: track.track,
      session: track.now
    };
  }).filter(function (sessionInTrack) {
    return !!sessionInTrack.session;
  });
  var upNextSessions = tracks.map(function (track) {
    return {
      track: track.track,
      session: track.next
    };
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !!onNowSessions.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_sessions__WEBPACK_IMPORTED_MODULE_4__["SessionsGroup"], {
    sessions: onNowSessions,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('On now', 'title', 'wordcamp-pwa-page')
  }), !!upNextSessions.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_sessions__WEBPACK_IMPORTED_MODULE_4__["SessionsGroup"], {
    sessions: upNextSessions,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('Up next', 'title', 'wordcamp-pwa-page')
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./templates/assets/components/session.js":
/*!************************************************!*\
  !*** ./templates/assets/components/session.js ***!
  \************************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/sanitize */ "@wordpress/sanitize");
/* harmony import */ var _wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var Session = function Session(_ref) {
  var session = _ref.session;
  var _session$session = session.session;
  _session$session = _session$session === void 0 ? {
    link: '#',
    title: {
      rendered: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Track finished', 'session title', 'wordcamp-pwa-page')
    },
    session_date_time: {
      time: ''
    },
    session_category: [],
    _embedded: {
      'wp:term': {},
      speakers: []
    },
    meta: {
      _wcpt_session_type: ''
    }
  } : _session$session;
  var _session$session$link = _session$session.link,
      link = _session$session$link === void 0 ? '#' : _session$session$link,
      _session$session$titl = _session$session.title.rendered,
      title = _session$session$titl === void 0 ? '' : _session$session$titl,
      _session$session$sess = _session$session.session_date_time.time,
      time = _session$session$sess === void 0 ? '' : _session$session$sess,
      _session$session$sess2 = _session$session.session_category,
      sessionCategories = _session$session$sess2 === void 0 ? [] : _session$session$sess2,
      _session$session$_emb = _session$session._embedded,
      _session$session$_emb2 = _session$session$_emb['wp:term'],
      embeddedTerms = _session$session$_emb2 === void 0 ? {} : _session$session$_emb2,
      _session$session$_emb3 = _session$session$_emb.speakers,
      speakers = _session$session$_emb3 === void 0 ? [] : _session$session$_emb3,
      _session$session$meta = _session$session.meta._wcpt_session_type,
      sessionType = _session$session$meta === void 0 ? '' : _session$session$meta,
      _session$track = session.track,
      trackName = _session$track.name,
      trackSlug = _session$track.slug;
  var terms = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["keyBy"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(embeddedTerms), 'id');
  var categoryName, categorySlug;
  var validSpeakers = speakers.filter(function (speaker) {
    return !!speaker.id;
  });

  if (sessionCategories.length > 0) {
    var sc = sessionCategories[0];
    categoryName = terms[sc].name;
    categorySlug = terms[sc].slug;
  } //end if


  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wordcamp-schedule-session ".concat(sessionType)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-schedule-session-track ".concat(trackSlug)
  }, trackName), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    className: "wordcamp-schedule-session-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: link
  }, Object(_wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__["stripTagsAndEncodeText"])(title))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-schedule-session-time"
  }, time), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-schedule-session-speaker"
  }, !!validSpeakers.length && validSpeakers.map(function (speaker) {
    var id = speaker.id,
        name = speaker.title.rendered,
        speakerLink = speaker.link;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      key: id,
      href: speakerLink
    }, Object(_wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__["stripTagsAndEncodeText"])(name));
  })), !!categoryName && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-schedule-session-category ".concat(categorySlug)
  }, categoryName));
};

/***/ }),

/***/ "./templates/assets/components/sessions.js":
/*!*************************************************!*\
  !*** ./templates/assets/components/sessions.js ***!
  \*************************************************/
/*! exports provided: SessionsGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsGroup", function() { return SessionsGroup; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./templates/assets/components/session.js");


/**
 * Internal dependencies
 */

var SessionsGroup = function SessionsGroup(_ref) {
  var title = _ref.title,
      sessions = _ref.sessions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, title), sessions.filter(function (session) {
    return !!session;
  }).map(function (session, index) {
    var sessionKey = session.session ? session.session.id : index;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_session__WEBPACK_IMPORTED_MODULE_1__["Session"], {
      key: "".concat(sessionKey, "-").concat(session.track.id),
      session: session
    });
  }));
};

/***/ }),

/***/ "./templates/assets/components/ui/loading.js":
/*!***************************************************!*\
  !*** ./templates/assets/components/ui/loading.js ***!
  \***************************************************/
/*! exports provided: LoadingIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function() { return LoadingIndicator; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var LoadingIndicator = function LoadingIndicator() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wordcamp-loading"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('Loading...', 'pwa-placeholder', 'wordcamp-pwa-page'));
};

/***/ }),

/***/ "./templates/assets/pwa-page.js":
/*!**************************************!*\
  !*** ./templates/assets/pwa-page.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page */ "./templates/assets/components/page.js");


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */


var pwaPage = document.getElementById('pwa-root');
Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_page__WEBPACK_IMPORTED_MODULE_1__["Page"], null), pwaPage); // TODO delete this function. Only for testing purposes.

window.setDate = function (d) {
  window.now = d;
};

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/sanitize":
/*!*******************************************!*\
  !*** external {"this":["wp","sanitize"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["sanitize"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=pwa-page.js.map