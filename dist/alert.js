(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-alert"] = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else
		root["react-alert"] = factory(root["react"], root["react-addons-css-transition-group"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//load styles
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(2);

	//load js

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _devComponentsAlertContainer = __webpack_require__(12);

	var _devComponentsAlertContainer2 = _interopRequireDefault(_devComponentsAlertContainer);

	exports['default'] = _devComponentsAlertContainer2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/stylus-loader/index.js!./alert.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/stylus-loader/index.js!./alert.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, ".react-alerts {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin: 14px;\n  z-index: 999999;\n}\n.react-alerts .alert {\n  width: 300px;\n  min-height: 50px;\n  margin: 10px 0 0 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-radius: 2px;\n  background-color: #333;\n  font-size: 11px;\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.3);\n  color: #fff;\n}\n.react-alerts .alert .content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n.react-alerts .alert .icon {\n  width: 32px;\n  height: 32px;\n}\n.react-alerts .alert .icon div {\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .icon .info-icon {\n  background-image: url("+__webpack_require__(5)+");\n}\n.react-alerts .alert .icon .error-icon {\n  background-image: url("+__webpack_require__(6)+");\n}\n.react-alerts .alert .icon .success-icon {\n  background-image: url("+__webpack_require__(7)+");\n}\n.react-alerts .alert .message {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n  text-transform: uppercase;\n  padding: 8px 10px;\n}\n.react-alerts .alert .close {\n  height: 50px;\n  background-color: #444;\n  border-radius: 0 2px 2px 0;\n  line-height: 50px;\n  cursor: pointer;\n}\n.react-alerts .alert .close .close-light {\n  background-image: url("+__webpack_require__(8)+");\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .close .close-dark {\n  background-image: url("+__webpack_require__(9)+");\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .close:hover {\n  opacity: 0.5;\n}\n.react-alerts .alert.hidden {\n  display: none;\n}\n.react-alerts .scale-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.react-alerts .scale-enter.scale-enter-active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: all 250ms cubic-bezier(0, 0, 0.5, 1.5);\n          transition: all 250ms cubic-bezier(0, 0, 0.5, 1.5);\n}\n.react-alerts .scale-leave {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.react-alerts .scale-leave.scale-leave-active {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 250ms ease-in-out;\n          transition: all 250ms ease-in-out;\n}\n.react-alerts .fade-enter {\n  opacity: 0.1;\n}\n.react-alerts .fade-enter.fade-enter-active {\n  opacity: 1;\n  -webkit-transition: all 250ms ease-out;\n          transition: all 250ms ease-out;\n}\n.react-alerts .fade-leave {\n  opacity: 1;\n}\n.react-alerts .fade-leave.fade-leave-active {\n  opacity: 0.1;\n  -webkit-transition: all 250ms ease-in;\n          transition: all 250ms ease-in;\n}\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4tJREFUeNrEV71v1DAUf3Z8Hz2KSKduqAMTElD+gavowFYJ2oUBQbsyslcVYu+/UNqJgRYKGxKceisLH2sFFQsdKjVtae+aS2Kec3bOcZzcNUJg6cmOY/v3e8/P79kA/7mQshP5O5jGqiU/75A5+PzPCGjgruzyypKgFyXsv4bbnEMLxUUBKaLdEv/KWEAIH8VSCDDNHPioaW4WLwhhtno/sQQvRUCa2O0FcEQIuDjgCo66h+3HyRhtBslu5DqP4A0OORIfSFqM9mxbRDQ/4BJ8DRdfBEMFBcgLdFJEkjr77wWSWCokEL0dWEMHVyJG20gQCwmTSNw3l3Z8luvpJrDqi2RfDjhRJPigj6t9thBnNkVMcPEdRel+3UJEB+cD7UWb0jQJ0+eY2ZExuwSPFDAlULnkAGUEWJVCFHKIAg69bgTheRgvFoNKcDFXkbAVZiiSCy6k0mBQG3cGs91mHEio1wZWE2Qc6Hg9CJGUo4HzDMJA6cwW5IFXxxlUG0569M33/bpd70c1h0Bjogpnh35sGQXOJZzNCtQWkpO9ljVlNAuedxRxxdplBmEk/YZnjjApDMW6p/LE9M6FwqvwDadC+woYjms6PLWFzNQJEATq9MIJy0ESmWPMi5MRSTmixr5MYVViPbI2AiUhRkjbdnAyLB17fwO851v18obeB9Dp2mafj0HGWsTxk0fQLMF5lMkFcm2eRyDecjw+O7pDiEXOT0M7gWa3L6b2CB74USYhqbULLXBwDNtJLJcS4mLd3+Fo+47GOjsKRMROrSHKSQe2hxK4ugR7yHRDZTIqpXMcQOfEIPH1bl9kCTEnHB/4aEY+SE4qI3LYmHwIe4bF03cGJT/XYGrShV09FIu2iG6CTR3zAatgUsL4L0CDXj8Z+WdhHH4FYZELVFvU+4dwDZX7oec7G4GEyOkrWMGr1LJJIuL2yKasRSSgIKAyI857PrYAz7TwYiVgBiPa3YIPuGBTB7YRUHtMNVBV47h2fR5mbeB5cSAZ9G0PFvDri25KRwpaBxwl6lv+U2PF3O/7MF8U7EhBX2yNT6swcWMKNnHRJjfuCtYrGUmuZDu7v2Dh+hM4NBUblUBq7c4mrKB2y6NcSvFtoO95LnjR08xKwnsJtxo1WEWQmZx5O6ddeOo+sD5MeJm3oY0IdLZgBq2xiNvySD1EeiGsj80nkY7n+FXpx2nZV/TQTPtHgAEAjorM5YZ2xYoAAAAASUVORK5CYII="

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/ZJREFUeNqkV7tOlEEUPmf+XVgRFAgBRUgwsTEhoTDYUdnb0iGJFa/AW3ALiWKijaHlCXwASCy0IJFCsxExSlhdLqLsHOd++f/5lyXMZnZmz1zOd+6zCNdrWDJPNUrNC4eOnzyeEMM70Sc6vo0sTXwmH8Hfh1PPhxcW3lzGXM5Z4u75qzIn99GtmmWvvq2tzRsBZWeBsJHQ7Dr698wh6rLVqtWN/dXVZwFzTIDAKwOgnNpt46R7SL7R1bXxdWVlLgcgAsGuyjzsXHxzNdoufler0Zme7u6X9eXlMk10BoBydnfqN1Jz7k0Bik6q29Zbq70QIOYSINqbgHIqj7qSnvxogFzsfgR+0jRnPBAJ4svS0tO8E1auEmJgVN3OHHjyC8633gIiqgU5oPoIZsSnxLBlQFASAA8gRvEdMrTqt8yDuQMniB4EqVu5dz6yY6XjEKNQYjIMyUhvje+YgOZN5i6mfqdaJZVaU8y5ZUY27Py6Dz8yognpCZ0qyQlctHTRBFx4JkKBuWXC+24DHx4D6B+Kshk/+gn8ex2g2RBnhCbEHSwAoSXDgptVUsXESR8xJ2iNPQAaGUuqkg0Mqd46qAOv7+nLjO2t+hk65s4J82GIXLG0DhkwvzvhmGeDgwUAlpbdGYds9L7mQWgKAeYFdwpmqQKRdzreVQMa1fWpZ3oaRhYX1eiyXY7G7om93d06BNE7JdMqoUALyTDELAJB2uam3ZyZUWP/7Kyj2blcO93e1gxHxoHqn7QWMJIwjNZ0Ko6iQH719Lq1w/V1+Le/7xhb5pIm15wt5RkCk4K0AzKtjiizs7IXTgSzr99r6OxMMWodHTmanEuaXHMXqTM+BIw58vFIrKPi27qIqLXJScgGBrwDirmkRe38j7Y/Utsy01k1/N2IHC5Ue2iO0DHp9LjwCGDFUlMAkHssGgs2fhSc0No89Am7BuZMdEe61qU1gJhziMMDpVLrhKc7O87m1icszapfnQmfPyW1gCUIZHGr2NXxC3zvg/IFybCxuRk5XESTe8ReeYahL8fh3SkAlA8FzJmBnZ0A330P1GyU+4pYk3vk3vAspv80JIuRCAum1hRyFbvktxsQXIQY9g0A3up3TkrNI0ABQMY6M3mfodeklpYVhK20+7vjvNfeQPqRwY8bSlraD1SJep/dz7D4FKZL3gMqSTAmUyA6LTD1yCBTyTSdAUbpDAGCdOuZM/BpWGmCxfmtVAPWenK/resKHcr0jDpVY1FrETNXgBKB2MYE5J5T5EGQfaAYIIQUiYEB6BiIZ26eh5fnAUF4LYbPPhdg4Au6Z8rREDLT1dzYnZUwl3eau0v/Xnfy1xsvOUclI5T4IPwXYADEPSh6Pez/6gAAAABJRU5ErkJggg=="

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9tJREFUeNqkV8tOVDEY/lsOZy4wRG4OGwmSITGyMNFEVxNXJq7kDZCERzBxTeJGYetKIdGFK1c+gYlIFBeSaCRqiMExRhQZolydy6m9nml72pkBmnTa0+n5v++/tgfByRryzF2NuObJl54/GWG/tI80F0eca9f78nAt1z99q3DpcStwNscO0VNHBmfPcQfoCIKFuU9vpqSCrGNNWUNpDCdtFrhSsDOVmp/7uHxTA0cOEggfC9BLJDIM3JlOz8+uvp60CBgk8PG1pT2KZCfxmEZmWIXZzMN7H175LNEmAQXojW1pfrmH0JFo+1Nd2QeUxKSDRAsXNAWWWqtRthdbP6Fc+Zcgwkjcfb90ww7C4CgpxpsGFgcegZhMuX4Idz6/ozAaDqZzTHWt1i7Qp2eSBHETYIIsPxpRrkV6Yy3S5kTKV3KQbUkFzsegvaBTfiYmEDe/jP7YshpRjk+E9h7LBt7SaoNHJJkFdtcLHdJEsv8QcoZv4K3vHvBCOgvjuR7o6wzjFyrUbaX9XVjZ3obdWlXEOlExj7SeLMeBX3sTnMEVewdgOJNNMA6piQvdPTCc7YblrU1Y29kRgUekC5TbhRWIHoQ4ob1KLV1zulY81e8Et4kUB/MwlElLQM0CovCq6Ig7dp6KxKx6hWxXS3C9FQeHGrVGGRsh3fLEXwmjyCRDrTDe1dMSdDiTg/vjV2Fm7DJ0BwF1Sc60AptgZB/HvlKs5zSBvjCEc929MJEfhYEw7QS/PXoRsh0B/T/D1/rDlETAmgUa9nURQO40FHsn8md5nxm7wgFd4Pv1Gsx+ecvXGWkOaqQnsgsBafs0fFn+wUcGxAAZsAu8dLATp2YMbhYgpFshaAecCVvaFgSmz5yPSShCNjhr5WrFqgFHigGzlfb3+MhILHxbjYF94Kx9Ze/E6Yd8l1ODgBEcOvOVP9vCpBYJHzgjXK5UhLURanppDry3bUTi9Nmt12G5/BuKA6djEgx8q3qYAGd3gcWtX8LcNjbGpDUBtUkVDixIrO3t0jpfoyQGaZ53wsrfzaSr6J5FWoorKv3sc4D4DyNi2IhvlkETSTIdGDaodk+/l2hlzNE8D6EvJXJ94+CA+7xcq4hLFpbvxgcQ0msCaWYBYpzdSgBbYzGAReau0ZNvbZ8k3ca1xhq4RgK1joGGFZCMAW4FcbnhwlVhQlZ+q1KLwJF22jOxLw3uIDRjQJEg0HCH63ajp5xd/5H/szHwfkDGAtUqiwPtlqSXWX2vyxr+j1RHIcL4Ef1dt2tBQyAW7sAiMHnHmv+RF3xdyvZ+Xrfz6Y1avEc8Y0Jz1f4LMACdsAzFV135ZQAAAABJRU5ErkJggg=="

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAYAAAAGAB4TKWmAAAAaElEQVRIx2NgGAUjFugwMDDsY2BgECVCrShUrQ4pFuxjYGD4z8DAcJmAJaJQNf+heogGyBpxWUKMGrItodhwfAZRzXBcllDVcGyWkGQ4E7VcMGiDiKaRTNNkSvOMRvOiguaF3SgYRgAA1bo+/as5g9sAAAAASUVORK5CYII="

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAYAAAAGAB4TKWmAAAAaElEQVRIx2NgGAUjE/z//1/n////+/7//y9KhFpRqFodUizY9x8CLuOzBGr4ZajafaRYgKwRqyXEqCHbEooNx2cQ1QzHYwn1DMdhCUmGM1HFBYM2iGgayTRNpjTPaPQoKmhb2I2C4QUA0wmHwjkeewQAAAAASUVORK5CYII="

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _events = __webpack_require__(13);

	var _events2 = _interopRequireDefault(_events);

	var _reactAddonsCssTransitionGroup = __webpack_require__(14);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _AlertMessage = __webpack_require__(15);

	var _AlertMessage2 = _interopRequireDefault(_AlertMessage);

	var AlertContainer = (function (_React$Component) {
	  _inherits(AlertContainer, _React$Component);

	  function AlertContainer(props) {
	    _classCallCheck(this, AlertContainer);

	    _get(Object.getPrototypeOf(AlertContainer.prototype), 'constructor', this).call(this, props);
	    global.reactAlertEvents = new _events2['default']();
	    this.state = {
	      alerts: []
	    };
	    this.style = this._setStyle();
	    this.theme = this._setTheme();
	    this._eventListners();
	  }

	  /**
	   * Show the alert in the page with success type
	   * @param  {string} message 
	   * @param  {Object} options 
	   * @return {void}         
	   */

	  _createClass(AlertContainer, [{
	    key: 'success',
	    value: function success(message) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      options.type = 'success';
	      this.show(message, options);
	    }

	    /**
	     * Show the alert in the page with error type
	     * @param  {string} message 
	     * @param  {Object} options 
	     * @return {void}
	     */
	  }, {
	    key: 'error',
	    value: function error(message) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      options.type = 'error';
	      this.show(message, options);
	    }

	    /**
	     * Show the alert in the page with info type 
	     * @param  {string} message
	     * @param  {Object} options
	     * @return {void}
	     */
	  }, {
	    key: 'info',
	    value: function info(message) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      options.type = 'info';
	      this.show(message, options);
	    }

	    /**
	     * Show the alert in the page
	     * @param  {string} message
	     * @param  {Object} options
	     * @return {void}
	     */
	  }, {
	    key: 'show',
	    value: function show(message) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var alert = {};
	      alert.message = message;
	      alert = Object.assign(alert, options);
	      this.setState({ alerts: this._addAlert(alert) });
	    }

	    /**
	     * Remove all tasks from the page
	     * @return {void}
	     */
	  }, {
	    key: 'removeAll',
	    value: function removeAll() {
	      this.setState({ alerts: [] });
	    }

	    /**
	     * Add an alert
	     * @param {Object} alert
	     */
	  }, {
	    key: '_addAlert',
	    value: function _addAlert(alert) {
	      alert.uniqueKey = this._genUniqueKey();
	      alert.style = this.theme;
	      if (!alert.hasOwnProperty('time')) {
	        alert.time = this.props.time;
	      };
	      alert.closeIconClass = 'close-' + this.props.theme;
	      this.state.alerts.push(alert);
	      return this.state.alerts;
	    }

	    /**
	     * Generate a key
	     * @return {string}
	     */
	  }, {
	    key: '_genUniqueKey',
	    value: function _genUniqueKey() {
	      return new Date().getTime().toString() + Math.random().toString(36).substr(2, 5);
	    }

	    /**
	     * Remove an AlertMessage from the container
	     * @param  {AlertMessage} alert
	     * @return {void}
	     */
	  }, {
	    key: '_removeAlert',
	    value: function _removeAlert(alert) {
	      return this.state.alerts.filter(function (a) {
	        return a.uniqueKey != alert.props.uniqueKey;
	      });
	    }

	    /**
	     * Listen to alert events
	     * @return {void}
	     */
	  }, {
	    key: '_eventListners',
	    value: function _eventListners() {
	      var _this = this;

	      reactAlertEvents.on('ALERT.REMOVE', function (alert) {
	        _this.setState({ alerts: _this._removeAlert(alert) });
	      });
	    }

	    /**
	     * Set the alert position on the page
	     */
	  }, {
	    key: '_setStyle',
	    value: function _setStyle() {
	      var position = {};
	      switch (this.props.position) {
	        case 'top left':
	          position = {
	            top: 0,
	            right: 'auto',
	            bottom: 'auto',
	            left: 0
	          };
	          break;
	        case 'top right':
	          position = {
	            top: 0,
	            right: 0,
	            bottom: 'auto',
	            left: 'auto'
	          };
	          break;
	        case 'bottom left':
	          position = {
	            top: 'auto',
	            right: 'auto',
	            bottom: 0,
	            left: 0
	          };
	          break;
	        default:
	          position = {
	            top: 'auto',
	            right: 0,
	            bottom: 0,
	            left: 'auto'
	          };
	          break;
	      }

	      return {
	        margin: this.props.offset + 'px',
	        top: position.top,
	        right: position.right,
	        bottom: position.bottom,
	        left: position.left
	      };
	    }

	    /**
	     * Set the style of the alert based on the chosen theme
	     */
	  }, {
	    key: '_setTheme',
	    value: function _setTheme() {
	      var theme = {};
	      switch (this.props.theme) {
	        case 'light':
	          theme = {
	            alert: {
	              backgroundColor: '#fff',
	              color: '#333'
	            },
	            closeButton: {
	              bg: '#f3f3f3'
	            }
	          };
	          break;
	        default:
	          theme = {
	            alert: {
	              backgroundColor: '#333',
	              color: '#fff'
	            },
	            closeButton: {
	              bg: '#444'
	            }
	          };
	          break;
	      }

	      return theme;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.style = this._setStyle();
	      this.theme = this._setTheme();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { style: this.style, className: 'react-alerts' },
	        _react2['default'].createElement(
	          _reactAddonsCssTransitionGroup2['default'],
	          {
	            transitionName: this.props.transition,
	            transitionEnterTimeout: 250,
	            transitionLeaveTimeout: 250 },
	          this.state.alerts.map(function (alert, index) {
	            return _react2['default'].createElement(_AlertMessage2['default'], _extends({ key: alert.uniqueKey }, alert));
	          })
	        )
	      );
	    }
	  }]);

	  return AlertContainer;
	})(_react2['default'].Component);

	AlertContainer.defaultProps = {
	  offset: 14,
	  position: 'bottom left',
	  theme: 'dark',
	  time: 5000,
	  transition: 'scale'
	};

	AlertContainer.propTypes = {
	  offset: _react2['default'].PropTypes.number,
	  position: _react2['default'].PropTypes.oneOf(['bottom left', 'bottom right', 'top right', 'top left']),
	  theme: _react2['default'].PropTypes.oneOf(['dark', 'light']),
	  time: _react2['default'].PropTypes.number,
	  transition: _react2['default'].PropTypes.oneOf(['scale', 'fade'])
	};

	exports['default'] = AlertContainer;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports) {

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

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(16);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(17);

	var _classnames2 = _interopRequireDefault(_classnames);

	var AlertMessage = (function (_React$Component) {
	  _inherits(AlertMessage, _React$Component);

	  function AlertMessage(props) {
	    _classCallCheck(this, AlertMessage);

	    _get(Object.getPrototypeOf(AlertMessage.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      closeButtonStyle: {}
	    };
	  }

	  /**
	   * Handle the close button click
	   * @return {void} 
	   */

	  _createClass(AlertMessage, [{
	    key: '_handleCloseClick',
	    value: function _handleCloseClick() {
	      this._removeSelf();
	    }

	    /**
	     * Include the given icon or use the default one
	     * @return {React.Component}
	     */
	  }, {
	    key: '_showIcon',
	    value: function _showIcon() {
	      var icon = '';
	      if (this.props.icon) {
	        icon = this.props.icon;
	      } else {
	        icon = _react2['default'].createElement('div', { className: this.props.type + '-icon' });
	      }

	      return icon;
	    }

	    /**
	     * Remove the alert after the given time
	     * @return {void} 
	     */
	  }, {
	    key: '_countdown',
	    value: function _countdown() {
	      var _this = this;

	      setTimeout(function () {
	        _this._removeSelf();
	      }, this.props.time);
	    }

	    /**
	     * Emit a event to AlertContainer remove this alert from page
	     * @return {void}
	     */
	  }, {
	    key: '_removeSelf',
	    value: function _removeSelf() {
	      reactAlertEvents.emit('ALERT.REMOVE', this);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.domNode = _reactDom2['default'].findDOMNode(this);
	      this.setState({
	        closeButtonStyle: {
	          height: this.domNode.offsetHeight + 'px',
	          lineHeight: this.domNode.offsetHeight + 'px',
	          backgroundColor: this.props.style.closeButton.bg
	        }
	      });

	      if (this.props.time > 0) {
	        this._countdown();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { style: this.props.style.alert, className: (0, _classnames2['default'])('alert', this.props.type) },
	        _react2['default'].createElement(
	          'div',
	          { className: 'content icon' },
	          this._showIcon.bind(this)()
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'content message' },
	          this.props.message
	        ),
	        _react2['default'].createElement(
	          'div',
	          { onClick: this._handleCloseClick.bind(this), style: this.state.closeButtonStyle, className: 'content close' },
	          _react2['default'].createElement('div', { className: this.props.closeIconClass })
	        )
	      );
	    }
	  }]);

	  return AlertMessage;
	})(_react2['default'].Component);

	AlertMessage.defaultProps = {
	  icon: '',
	  message: '',
	  type: 'info'
	};

	AlertMessage.propTypes = {
	  type: _react2['default'].PropTypes.oneOf(['info', 'success', 'error'])
	};

	exports['default'] = AlertMessage;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;