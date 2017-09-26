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
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	
	  // Nav Link Active Class
	  var currentPath = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') || 'home';
	  console.log(currentPath);
	
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
	
	  //
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map