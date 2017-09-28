/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _scriptsScrollNavJs = __webpack_require__(1);
	
	var _scriptsShowNavJs = __webpack_require__(3);
	
	(function () {
	
	  (0, _scriptsScrollNavJs.scrollNav)();
	  (0, _scriptsShowNavJs.showNav)();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _scrollAnimateJs = __webpack_require__(2);
	
	var scrollNav = function scrollNav() {
	
	  var $navLinks = document.getElementsByClassName('nav-link');
	
	  [].forEach.call($navLinks, function ($elem) {
	    $elem.addEventListener('click', function (e) {
	      var anchorHref = e.currentTarget.querySelector('a').getAttribute('href');
	      var toSectionId = anchorHref.slice(1, anchorHref.length);
	      var $toSection = document.getElementById(toSectionId);
	      e.preventDefault();
	      (0, _scrollAnimateJs.scrollAnimate)($toSection.offsetTop, 500);
	    });
	  });
	};
	exports.scrollNav = scrollNav;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var scrollAnimate = function scrollAnimate(elementY, duration) {
	  var startingY = window.pageYOffset;
	  var diff = elementY - startingY;
	  var start;
	
	  // Define the animation - it will get called right before next frame is rendered.
	  window.requestAnimationFrame(function step(timestamp) {
	    if (!start) start = timestamp;
	    // Elapsed miliseconds since start of scrolling.
	    var time = timestamp - start;
	    // Get percent of completion in range [0, 1].
	    var percent = Math.min(time / duration, 1);
	
	    window.scrollTo(0, startingY + diff * percent);
	
	    // Proceed with animation as long as we wanted it to.
	    if (time < duration) {
	      window.requestAnimationFrame(step);
	    }
	  });
	};
	exports.scrollAnimate = scrollAnimate;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var showNav = function showNav() {
	
	  var $menuIcon = document.getElementById('menuIcon');
	  var $navList = document.getElementById('navList');
	  $menuIcon.addEventListener('click', function (e) {
	    if ($navList.className === 'show') {
	      $navList.classList.remove('show');
	    } else {
	      $navList.className += "show";
	    }
	  });
	};
	exports.showNav = showNav;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map