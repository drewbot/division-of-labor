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
	
	var _scriptsShowNavJs = __webpack_require__(1);
	
	var _scriptsActiveNavJs = __webpack_require__(2);
	
	(function () {
	
	    var owner = 'Division of Labor';
	    var githubUrl = '';
	    var currentYear = new Date().getFullYear();
	    var $copyrightInfo = document.getElementById('copyrightInfo');
	
	    function isTouchDevice() {
	        return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
	    }
	
	    function getCopyright() {
	        return '&copy; ' + currentYear + ' ' + owner + '. All Rights Reserved.';
	    }
	
	    function getOwnerContent() {
	        return 'Made by <a href="' + githubUrl + '">' + owner + '</a>';
	    }
	
	    $copyrightInfo.innerHTML = getCopyright();
	
	    (0, _scriptsShowNavJs.showNav)();
	    (0, _scriptsActiveNavJs.activeNav)();
	})();

/***/ }),
/* 1 */
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var activeNav = function activeNav() {
	    var currentPath = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') || 'home';
	
	    var $navLinks = document.getElementsByClassName('nav-link');
	    var $activeLink = document.getElementById(currentPath + 'NavLink');
	
	    [].forEach.call($navLinks, function ($elem) {
	        $elem.classList.remove('active');
	        $elem.addEventListener('click', function (e) {
	            [].forEach.call($navLinks, function ($elem) {
	                $elem.classList.remove('active');
	            });
	            e.currentTarget.className += ' active';
	        });
	    });
	
	    $activeLink.className += ' active';
	};
	
	exports.activeNav = activeNav;
	// Version of markup that goes with active nav component
	// <nav>
	//   <ul id="navList">
	//     <li class="nav-link" id="homeNavLink"><a href="/">Home</a></li>
	//     <li class="nav-link" id="trainingNavLink"><a href="/training">Training</a></li>
	//     <li class="nav-link" id="recruitingNavLink"><a href="/recruiting">Recruiting</a></li>
	//     <li class="nav-link" id="softwareNavLink"><a href="/software">Software</a></li>
	//   </ul>
	// </nav>

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map