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

/***/ "./templates/assets/pwa-page.js":
/*!**************************************!*\
  !*** ./templates/assets/pwa-page.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! lodash */ "lodash");

var apiRoot = wcpwa.apiUrl; // eslint-disable-line

var now = new Date();

var processAndRenderScheduleData = function processAndRenderScheduleData(data) {
  var tracks = data.tracks.map(function (track) {
    var sessionsInTrack = _.sortBy(_.filter(data.sessions, function (session) {
      return session.session_track.includes(track.id);
    }), function (sessionInTrack) {
      return sessionInTrack.meta._wcpt_session_time;
    });

    var indexOfNextSession = _.findIndex(sessionsInTrack, function (session) {
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
  onNow.innerHTML = '';
  upNext.innerHTML = '';
  tracks.forEach(function (track) {
    renderSession(track.now, track.track, onNow);
    renderSession(track.next, track.track, upNext);
  });
};

var renderSession = function renderSession(session, track, container) {
  var sessionContainer = document.createElement('div');
  sessionContainer.setAttribute('class', 'wordcamp-schedule-session');
  renderSessionTitle(session, sessionContainer);
  renderSessionTime(session, sessionContainer);
  renderSessionTrack(track, sessionContainer);
  renderSessionSpeakers(session, sessionContainer);
  renderSessionCategory(session, sessionContainer);
  container.appendChild(sessionContainer);
};

var renderSessionTime = function renderSessionTime(session, container) {
  var time = document.createElement('span');
  time.setAttribute('class', 'wordcamp-schedule-session-time');
  time.innerHTML = session.session_date_time.time;
  container.appendChild(time);
};

var renderSessionTitle = function renderSessionTitle(session, container) {
  var title = document.createElement('h4');
  title.setAttribute('class', 'wordcamp-schedule-session-title');
  var titleLink = document.createElement('a');
  titleLink.setAttribute('href', session.link);
  titleLink.innerHTML = session.title.rendered;
  title.appendChild(titleLink);
  container.appendChild(title);
};

var renderSessionTrack = function renderSessionTrack(track, container) {
  var trackName = document.createElement('span');
  trackName.setAttribute('class', 'wordcamp-schedule-session-track');
  trackName.innerHTML = track.name;
  container.appendChild(trackName);
};

var renderSessionSpeakers = function renderSessionSpeakers(session, container) {
  var speakers = document.createElement('span');
  speakers.setAttribute('class', 'wordcamp-schedule-session-speaker');

  if (session._embedded.speakers) {
    session._embedded.speakers.forEach(function (speaker) {
      var speakerLink = document.createElement('a');
      speakerLink.setAttribute('href', speaker.link);
      speakerLink.innerHTML = speaker.title.rendered;
      speakers.appendChild(speakerLink);
    });
  } //end if


  container.appendChild(speakers);
};

var renderSessionCategory = function renderSessionCategory(session, container) {
  var category = document.createElement('span');
  category.setAttribute('class', 'wordcamp-schedule-session-category');

  var terms = _.keyBy(_.flatten(session._embedded['wp:term']), 'id');

  if (session.session_category.length > 0) {
    var sc = session.session_category[0];
    var term = terms[sc];
    category.innerHTML = term.name;
  } //end if


  container.appendChild(category);
};

var renderLatestPosts = function renderLatestPosts(posts) {
  var container = document.getElementById('latest-posts');
  posts.forEach(function (post) {
    renderPost(post, container);
  });
};

var renderPost = function renderPost(post, container) {
  var postContainer = document.createElement('div');
  postContainer.setAttribute('class', 'wordcamp-latest-post');
  renderPostDate(post, postContainer);
  renderPostTitle(post, postContainer);
  renderPostExcerpt(post, postContainer);
  renderPostCategories(post, postContainer);
  container.appendChild(postContainer);
};

var renderPostDate = function renderPostDate(post, container) {
  var postDate = document.createElement('span');
  postDate.setAttribute('class', 'wordcamp-latest-post-date');
  postDate.innerHTML = new Date(post.date_gmt).toLocaleDateString();
  container.appendChild(postDate);
};

var renderPostTitle = function renderPostTitle(post, container) {
  var title = document.createElement('h4');
  title.setAttribute('class', 'wordcamp-latest-post-title');
  var titleLink = document.createElement('a');
  titleLink.setAttribute('href', post.link);
  titleLink.innerHTML = post.title.rendered;
  title.appendChild(titleLink);
  container.appendChild(title);
};

var renderPostExcerpt = function renderPostExcerpt(post, container) {
  var excerpt = document.createElement('span');
  excerpt.setAttribute('class', 'wordcamp-latest-post-excerpt');
  excerpt.innerHTML = post.excerpt.rendered;
  container.appendChild(excerpt);
};

var renderPostCategories = function renderPostCategories(post, container) {
  var categories = document.createElement('span');
  categories.setAttribute('class', 'wordcamp-latest-post-categories');

  var terms = _.keyBy(_.flatten(post._embedded['wp:term']), 'id');

  if (post.categories.length > 0) {
    post.categories.forEach(function (c) {
      var term = terms[c];
      var category = document.createElement('a');
      category.setAttribute('href', term.link);
      category.innerHTML = term.name;
      categories.appendChild(category);
    });
  } //end if


  container.appendChild(categories);
};

var init = function init() {
  console.log('Calling @', new Date().toLocaleTimeString());
  Promise.all([fetch(apiRoot + 'wp/v2/sessions?status=publish&_embed=true&per_page=100').then(function (response) {
    return response.json();
  }), fetch(apiRoot + 'wp/v2/session_track?status=publish&per_page=100').then(function (response) {
    return response.json();
  }), fetch(apiRoot + 'wp/v2/posts?status=publish&_embed=true&per_page=3').then(function (response) {
    return response.json();
  })]).then(function (data) {
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
setInterval(init, 60 * 1000);

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ })

/******/ });
//# sourceMappingURL=pwa-page.js.map