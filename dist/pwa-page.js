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

  return Object(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__["apiFetch"])({
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
  }, categories.length && categories.map(function (c, index) {
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
/*! exports provided: LatestPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestPosts", function() { return LatestPosts; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./templates/assets/components/post.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var LatestPosts = function LatestPosts(_ref) {
  var posts = _ref.posts;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, posts.map(function (post, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_post__WEBPACK_IMPORTED_MODULE_1__["Post"], {
      key: index,
      post: post
    });
  }));
};

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


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var Session = function Session(_ref) {
  var session = _ref.session;
  var _session$session = session.session,
      link = _session$session.link,
      title = _session$session.title.rendered,
      time = _session$session.session_date_time.time,
      sessionCategories = _session$session.session_category,
      _session$session$_emb = _session$session._embedded,
      embeddedTerms = _session$session$_emb['wp:term'],
      _session$session$_emb2 = _session$session$_emb.speakers,
      speakers = _session$session$_emb2 === void 0 ? [] : _session$session$_emb2,
      _session$session$meta = _session$session.meta._wcpt_session_type,
      sessionType = _session$session$meta === void 0 ? '' : _session$session$meta,
      trackName = session.track.name;
  var terms = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["keyBy"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(embeddedTerms), 'id');
  var categoryName;

  if (sessionCategories.length > 0) {
    var sc = sessionCategories[0];
    categoryName = terms[sc].name;
  } //end if


  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wordcamp-schedule-session ".concat(sessionType)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-schedule-session-track"
  }, trackName), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    className: "wordcamp-schedule-session-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: link
  }, Object(_wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__["stripTagsAndEncodeText"])(title))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-schedule-session-time"
  }, time), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-schedule-session-speaker"
  }, !!speakers.length && speakers.map(function (speaker, index) {
    var name = speaker.title.rendered,
        speakerLink = speaker.link;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      key: index,
      href: speakerLink
    }, Object(_wordpress_sanitize__WEBPACK_IMPORTED_MODULE_2__["stripTagsAndEncodeText"])(name));
  })), !!categoryName && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wordcamp-schedule-session-category"
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
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var SessionsGroup = function SessionsGroup(_ref) {
  var title = _ref.title,
      sessions = _ref.sessions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, title), sessions.map(function (session, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_session__WEBPACK_IMPORTED_MODULE_1__["Session"], {
      key: index,
      session: session
    });
  }));
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./templates/assets/api.js");
/* harmony import */ var _components_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts */ "./templates/assets/components/posts.js");
/* harmony import */ var _components_sessions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sessions */ "./templates/assets/components/sessions.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





var processAndRenderScheduleData = function processAndRenderScheduleData(data) {
  var now = window.now || new Date();

  if (!Array.isArray(data.tracks)) {
    return;
  } //end if


  var tracks = data.tracks.map(function (track) {
    var sessionsInTrack = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(data.sessions.filter(function (session) {
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
  renderSchedule(tracks);
};

var renderSchedule = function renderSchedule(tracks) {
  var onNow = document.getElementById('on-now');
  var upNext = document.getElementById('up-next');
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

  if (onNowSessions.length) {
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_sessions__WEBPACK_IMPORTED_MODULE_5__["SessionsGroup"], {
      sessions: onNowSessions,
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('On now', 'title', 'wordcamp-pwa-page')
    }), onNow);
  }

  if (upNextSessions.length) {
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_sessions__WEBPACK_IMPORTED_MODULE_5__["SessionsGroup"], {
      sessions: upNextSessions,
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Up next', 'title', 'wordcamp-pwa-page')
    }), upNext);
  }
};

var renderLatestPosts = function renderLatestPosts(posts) {
  var container = document.getElementById('latest-posts');
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_posts__WEBPACK_IMPORTED_MODULE_4__["LatestPosts"], {
    posts: posts
  }), container);
};

var init = function init() {
  Promise.all([Object(_api__WEBPACK_IMPORTED_MODULE_3__["fetchSessions"])(), Object(_api__WEBPACK_IMPORTED_MODULE_3__["fetchTracks"])(), Object(_api__WEBPACK_IMPORTED_MODULE_3__["fetchPosts"])()]).then(function (data) {
    processAndRenderScheduleData({
      sessions: data[0],
      tracks: data[1]
    });
    renderLatestPosts(data[2]);
  }).catch(function (error) {
    console.log('Error: ', error);
  });
};

init();
setInterval(init, 60 * 1000); // TODO delete this function. Only for testing purposes.

window.setDate = function (d) {
  window.now = d;
  init();
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